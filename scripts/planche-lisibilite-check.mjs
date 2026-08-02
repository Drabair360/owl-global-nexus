/**
 * PHASE L2 — CONTRÔLE DE LISIBILITÉ DES PLANCHES (verrou de recette), v2.
 *
 * v1 déclarait « conforme » des planches visiblement fautives. Défauts corrigés :
 *   · le survol de traits reposait sur elementsFromPoint, aveugle DÈS QU'UN
 *     ÉLÉMENT EST HORS DU VIEWPORT — donc systématiquement aveugle sur le bas
 *     des planches (cartouche, nomenclature, FIG. 3). On fait désormais défiler
 *     chaque planche puis chaque bande de planche avant de sonder.
 *   · les blocs de pied (cartouche, nomenclature) étaient exemptés de TOUT
 *     contrôle : ni chevauchement entre eux, ni survol de traits étrangers.
 *     Ils sont maintenant contrôlés en tant que BOÎTES.
 *   · l'exclusion « attache » était globale : une ligne d'attache pouvait
 *     traverser n'importe quel libellé. Seule l'attache DU libellé lui-même
 *     est désormais exclue.
 *   · mesure sur une seule largeur : on passe à deux (1440 et 390).
 *
 * Contrôles (unités de planche, indépendantes de la largeur d'écran) :
 *   · deux textes s'intersectent (marge 3),
 *   · un texte sort du cadre de la planche,
 *   · deux blocs de pied s'intersectent (marge 2),
 *   · un bloc de pied est traversé par un trait étranger,
 *   · un texte touche un trait étranger (marge 4),
 *   · libellé sous 12, repère sous 11.
 * Les quatre derniers ne s'appliquent qu'aux planches data-lis-strict.
 *
 * Usage : node scripts/planche-lisibilite-check.mjs [--only V] [--url ...]
 *                                                   [--widths 1440,390]
 */
import { spawnSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const args = process.argv.slice(2);
const arg = (n, d) => {
  const i = args.indexOf(n);
  return i >= 0 ? args[i + 1] : d;
};
const only = arg('--only', '');
const url = arg('--url', 'http://localhost:8080/studio/lisibilite');
const widths = arg('--widths', '1440,390')
  .split(',')
  .map((w) => parseInt(w.trim(), 10))
  .filter(Boolean);

const PY = `
import asyncio, json
from playwright.async_api import async_playwright

URL = ${JSON.stringify(url)}
WIDTHS = ${JSON.stringify(widths)}

JS = r"""
(numeral) => {
  const fig = document.querySelector('[data-planche="' + numeral + '"]');
  const svg = fig && fig.querySelector('svg');
  if (!svg) return null;
  const frame = svg.getBoundingClientRect();
  const vb = (svg.getAttribute('viewBox') || '0 0 1240 900').split(/\\s+/).map(Number);
  const scale = frame.width / vb[2];
  const strict = fig.getAttribute('data-lis-strict') === 'true';
  const u = (r) => ({
    x: (r.x - frame.x) / scale + vb[0],
    y: (r.y - frame.y) / scale + vb[1],
    w: r.width / scale,
    h: r.height / scale,
  });

  // Couleur de réserve : un texte posé sur une plaque de fond est LISIBLE.
  const probe = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  probe.setAttribute('fill', 'hsl(var(--gravure-fond))');
  svg.appendChild(probe);
  const FOND = getComputedStyle(probe).fill;
  probe.remove();
  const estReserve = (el) => {
    const st = getComputedStyle(el);
    return st.fill === FOND;
  };

  const nodes = [...svg.querySelectorAll('text')].map((t) => {
    const r = t.getBoundingClientRect();
    return {
      el: t,
      s: (t.textContent || '').trim().slice(0, 60),
      kind: t.getAttribute('data-lis') || (t.closest('[data-lis="bloc"]') ? 'bloc' : 'autre'),
      bloc: t.closest('[data-lis="bloc"]'),
      rect: r,
      box: u(r),
      fs: parseFloat(getComputedStyle(t).fontSize),
    };
  }).filter((t) => t.rect.width > 0 && t.rect.height > 0);
  nodes.forEach((t, i) => { t.i = i; });
  const memeBloc = (a, b) =>
    (a.bloc && a.bloc === b.bloc) || a.el.parentElement === b.el.parentElement;

  // Blocs de pied : on ne garde que les plus extérieurs (BlocTexte peut envelopper
  // un Cartouche ou une Nomenclature déjà marqués).
  const blocEls = [...svg.querySelectorAll('[data-lis="bloc"]')].filter(
    (b) => !b.parentElement.closest('[data-lis="bloc"]')
  );
  const blocs = blocEls.map((b, i) => {
    const r = b.getBoundingClientRect();
    const label = (b.querySelector('text') || {}).textContent || ('bloc ' + (i + 1));
    return { el: b, s: label.trim().slice(0, 40), rect: r, box: u(r) };
  }).filter((b) => b.rect.width > 0 && b.rect.height > 0);

  // ---- sondage de traits étrangers (le viewport a été amené sur la zone) ----
  // Échantillonnage SERRÉ : un filet d'un pixel ne doit pas passer entre deux points.
  const foreign = (rect, isOwn, pad, pas) => {
    const hit = new Set();
    const x0 = rect.x - pad, x1 = rect.x + rect.width + pad;
    const y0 = rect.y - pad, y1 = rect.y + rect.height + pad;
    let vus = 0;
    for (let px = x0; px <= x1; px += pas) {
      for (let py = y0; py <= y1; py += pas) {
        if (px < 0 || py < 0 || px > innerWidth - 1 || py > innerHeight - 1) continue;
        vus++;
        for (const el of document.elementsFromPoint(px, py)) {
          if (!svg.contains(el) || el === svg) continue;
          const tag = el.tagName.toLowerCase();
          if (tag === 'text' || tag === 'tspan') continue;
          if (isOwn(el)) continue;
          if (el.closest('[data-lis="zone-fond"]')) continue;
          if (estReserve(el)) continue;
          hit.add(tag + (el.getAttribute('data-lis') ? ':' + el.getAttribute('data-lis') : ''));
        }
      }
    }
    return { hit: [...hit], vus };
  };

  // Les marges sont exprimées en UNITÉS DE PLANCHE : converties en pixels d'écran
  // pour que le verdict soit le même à 1440 et à 390.
  const px4 = Math.max(1, 4 * scale);
  const pas = Math.max(1, 2 * scale);

  const touches = [];
  const reserveInterdite = [];
  if (strict) {
    for (const t of nodes) {
      if (t.kind === 'bloc') continue;
      // Réserve : un repère court peut être posé sur un trait S'IL porte sa
      // réserve de fond (halo). Interdite sur un libellé de marge.
      const reserve = t.el.getAttribute('data-lis-reserve') === 'true';
      if (reserve && t.kind === 'libelle') {
        reserveInterdite.push('réserve interdite sur un libellé : « ' + t.s + ' »');
        continue;
      }
      if (reserve) continue;
      // sont exemptés : les éléments dessinés DANS le même groupe que le texte
      // (pastille, plaque, attache du libellé lui-même).
      const own = t.el.parentElement;
      const h = foreign(t.rect, (el) => own && own.contains(el), px4, pas);
      if (h.hit.length) touches.push({ s: t.s, hit: h.hit });
    }
    for (const b of blocs) {
      const h = foreign(b.rect, (el) => b.el.contains(el), 0, pas);
      if (h.hit.length) touches.push({ s: 'BLOC « ' + b.s + ' »', hit: h.hit });
    }
  }

  // chevauchements de textes : marge 3 en général, tolérance 0 entre deux lignes
  // d'un même bloc (leur interlignage est réglé par le bloc).
  const chevauche = [];
  const it = (a, b, pad) =>
    a.x - pad < b.x + b.w + pad && b.x - pad < a.x + a.w + pad &&
    a.y - pad < b.y + b.h + pad && b.y - pad < a.y + a.h + pad;
  for (let i = 0; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++) {
      const pad = memeBloc(nodes[i], nodes[j]) ? 0 : 3;
      if (it(nodes[i].box, nodes[j].box, pad))
        chevauche.push('chevauchement : « ' + nodes[i].s + ' » / « ' + nodes[j].s + ' »');
    }

  return {
    planche: numeral,
    strict,
    frame: { x: vb[0], y: vb[1], w: vb[2], h: vb[3] },
    texts: nodes.map(({ s, kind, box, fs }) => ({ s, kind, ...box, fs })),
    blocs: blocs.map(({ s, box }) => ({ s, ...box })),
    chevauche: chevauche.concat(reserveInterdite),
    touches,
  };

}
"""

async def main():
    out = []
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        for width in WIDTHS:
            ctx = await b.new_context(viewport={"width": width, "height": 1200})
            page = await ctx.new_page()
            await page.goto(URL, wait_until="networkidle")
            await page.wait_for_timeout(900)
            numerals = await page.evaluate(
                "() => [...document.querySelectorAll('[data-planche]')].map(e => e.getAttribute('data-planche'))"
            )
            for n in numerals:
                # amener la planche dans le viewport, en trois bandes (haut / milieu / bas)
                merged = None
                for frac in (0.0, 0.45, 1.0):
                    await page.evaluate(
                        """([n, frac]) => {
                            const el = document.querySelector('[data-planche=\\"' + n + '\\"]');
                            const r = el.getBoundingClientRect();
                            const top = r.top + scrollY + (r.height - innerHeight) * frac;
                            scrollTo(0, Math.max(0, top));
                        }""",
                        [n, frac],
                    )
                    await page.wait_for_timeout(120)
                    data = await page.evaluate(JS, n)
                    if data is None:
                        continue
                    if merged is None:
                        merged = data
                    else:
                        seen = {json.dumps(t, sort_keys=True) for t in merged["touches"]}
                        for t in data["touches"]:
                            k = json.dumps(t, sort_keys=True)
                            if k not in seen:
                                seen.add(k)
                                merged["touches"].append(t)
                if merged:
                    merged["width"] = width
                    out.append(merged)
            await ctx.close()
        await b.close()
    print("@@JSON@@" + json.dumps(out))

asyncio.run(main())
`;

const dir = mkdtempSync(join(tmpdir(), 'lis-'));
const file = join(dir, 'lis.py');
writeFileSync(file, PY);
const res = spawnSync('python3', [file], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
if (res.status !== 0) {
  console.error(res.stderr || res.stdout);
  process.exit(1);
}
const line = (res.stdout.split('\n').find((l) => l.startsWith('@@JSON@@')) || '').slice(8);
if (!line) {
  console.error('lisibilité : aucune donnée relevée (le serveur de préversion répond-il ?)');
  process.exit(1);
}
const planches = JSON.parse(line);

const inter = (a, b, pad) =>
  a.x - pad < b.x + b.w + pad &&
  b.x - pad < a.x + a.w + pad &&
  a.y - pad < b.y + b.h + pad &&
  b.y - pad < a.y + a.h + pad;

let errors = 0;
let warns = 0;
for (const pl of planches) {
  if (only && pl.planche !== only) continue;
  const problems = [...(pl.chevauche || [])];
  const t = pl.texts;

  for (const x of t) {
    if (
      x.x < pl.frame.x - 1 ||
      x.y < pl.frame.y - 1 ||
      x.x + x.w > pl.frame.x + pl.frame.w + 1 ||
      x.y + x.h > pl.frame.y + pl.frame.h + 1
    )
      problems.push(`hors cadre : « ${x.s} »`);
    if (pl.strict) {
      if (x.kind === 'libelle' && x.fs < 11.9) problems.push(`libellé sous 12 : « ${x.s} » (${x.fs.toFixed(1)})`);
      if ((x.kind === 'repere' || x.kind === 'zone') && x.fs < 10.9)
        problems.push(`repère sous 11 : « ${x.s} » (${x.fs.toFixed(1)})`);
    }
  }
  if (pl.strict) {
    const b = pl.blocs;
    for (let i = 0; i < b.length; i++)
      for (let j = i + 1; j < b.length; j++)
        if (inter(b[i], b[j], 2)) problems.push(`blocs superposés : « ${b[i].s} » / « ${b[j].s} »`);
    for (const bx of b) {
      if (
        bx.x < pl.frame.x - 1 ||
        bx.y < pl.frame.y - 1 ||
        bx.x + bx.w > pl.frame.x + pl.frame.w + 1 ||
        bx.y + bx.h > pl.frame.y + pl.frame.h + 1
      )
        problems.push(`bloc hors cadre : « ${bx.s} »`);
    }
  }
  for (const tc of pl.touches) problems.push(`trait étranger : « ${tc.s} » (${tc.hit.join(', ')})`);

  const uniq = [...new Set(problems)];
  const tag = `PL. ${pl.planche} @${pl.width}px`;
  if (!pl.strict) {
    if (uniq.length) {
      warns += uniq.length;
      console.warn(`${tag} — ${uniq.length} défaut(s), planche hors système L (dette héritée).`);
    } else console.log(`${tag} — lisibilité conforme (hors système L).`);
    continue;
  }
  if (uniq.length) {
    errors += uniq.length;
    console.error(`${tag} — ${uniq.length} défaut(s) :`);
    for (const m of uniq.slice(0, 30)) console.error(`   · ${m}`);
  } else {
    console.log(`${tag} — lisibilité conforme (système L).`);
  }
}

if (errors) {
  console.error(`\nlisibilité : ÉCHEC — ${errors} défaut(s) bloquant(s).`);
  process.exit(1);
}
console.log(`\nlisibilité : conforme.${warns ? ` ${warns} défaut(s) hérités hors système L.` : ''}`);
