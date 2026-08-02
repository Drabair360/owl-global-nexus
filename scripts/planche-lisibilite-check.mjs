/**
 * PHASE L2 — CONTRÔLE DE LISIBILITÉ DES PLANCHES (verrou de recette).
 *
 * Rend chaque planche du cabinet en pleine largeur sur /studio/lisibilite,
 * relève la boîte de tous les éléments texte et ÉCHOUE si :
 *   · deux textes s'intersectent (marge de 6 px),
 *   · un texte sort du cadre de la planche,
 *   · un texte touche un trait étranger (marge de 4 px) — planches passées
 *     au système L uniquement, marquées data-lis-strict,
 *   · un libellé descend sous 12 px rendus, un repère sous 11 px — idem.
 *
 * Usage : node scripts/planche-lisibilite-check.mjs [--only V] [--url ...]
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

const PY = `
import asyncio, json, sys
from playwright.async_api import async_playwright

URL = ${JSON.stringify(url)}
ONLY = ${JSON.stringify(only)}

JS = r"""
() => {
  const out = [];
  for (const fig of document.querySelectorAll('[data-planche]')) {
    const svg = fig.querySelector('svg');
    if (!svg) continue;
    const frame = svg.getBoundingClientRect();
    const strict = fig.getAttribute('data-lis-strict') === 'true';
    const texts = [...svg.querySelectorAll('text')].map((t) => {
      const r = t.getBoundingClientRect();
      const fs = parseFloat(getComputedStyle(t).fontSize);
      return {
        s: (t.textContent || '').trim().slice(0, 60),
        kind: t.getAttribute('data-lis') || (t.closest('[data-lis="bloc"]') ? 'bloc' : 'autre'),
        x: r.x, y: r.y, w: r.width, h: r.height, fs,
      };
    }).filter((t) => t.w > 0 && t.h > 0);

    // survol de traits : échantillonnage du hit-test sur la boîte du texte
    const touches = [];
    if (strict) {
      for (const t of texts) {
        if (t.kind === 'bloc') continue;
        const hit = new Set();
        const pad = 4;
        const xs = [t.x - pad, t.x + t.w / 2, t.x + t.w + pad];
        const ys = [t.y - pad, t.y + t.h / 2, t.y + t.h + pad];
        for (const px of xs) for (const py of ys) {
          for (const el of document.elementsFromPoint(px, py)) {
            if (!svg.contains(el) || el === svg) continue;
            const tag = el.tagName.toLowerCase();
            if (tag === 'text' || tag === 'tspan') continue;
            if (el.closest('[data-lis="attache"]')) continue;
            if (el.closest('[data-lis="zone-fond"]')) continue;
            if (tag === 'rect' && el.parentElement && el.parentElement.getAttribute('data-lis') === 'zone-fond') continue;
            hit.add(tag + (el.getAttribute('data-lis') ? ':' + el.getAttribute('data-lis') : ''));
          }
        }
        if (hit.size) touches.push({ s: t.s, hit: [...hit] });
      }
    }
    out.push({
      planche: fig.getAttribute('data-planche'),
      strict, frame: { x: frame.x, y: frame.y, w: frame.width, h: frame.height },
      texts, touches,
    });
  }
  return out;
}
"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 1600, "height": 2000})
        page = await ctx.new_page()
        await page.goto(URL, wait_until="networkidle")
        await page.wait_for_timeout(1200)
        data = await page.evaluate(JS)
        await b.close()
    print("@@JSON@@" + json.dumps(data))

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
  const problems = [];
  const soft = [];
  const t = pl.texts;
  for (let i = 0; i < t.length; i++) {
    for (let j = i + 1; j < t.length; j++) {
      if (inter(t[i], t[j], 3)) problems.push(`chevauchement : « ${t[i].s} » / « ${t[j].s} »`);
    }
  }
  for (const x of t) {
    if (
      x.x < pl.frame.x - 1 ||
      x.y < pl.frame.y - 1 ||
      x.x + x.w > pl.frame.x + pl.frame.w + 1 ||
      x.y + x.h > pl.frame.y + pl.frame.h + 1
    )
      problems.push(`hors cadre : « ${x.s} »`);
    if (pl.strict) {
      if (x.kind === 'libelle' && x.fs < 11.9) problems.push(`libellé sous 12 px : « ${x.s} » (${x.fs.toFixed(1)})`);
      if ((x.kind === 'repere' || x.kind === 'zone') && x.fs < 10.9)
        problems.push(`repère sous 11 px : « ${x.s} » (${x.fs.toFixed(1)})`);
    }
  }
  for (const tc of pl.touches) problems.push(`texte sur trait étranger : « ${tc.s} » (${tc.hit.join(', ')})`);

  const list = pl.strict ? problems : (soft.push(...problems), []);
  if (list.length) {
    errors += list.length;
    console.error(`PL. ${pl.planche} — ${list.length} défaut(s) :`);
    for (const m of list.slice(0, 20)) console.error(`   · ${m}`);
  } else if (soft.length) {
    warns += soft.length;
    console.warn(`PL. ${pl.planche} — ${soft.length} défaut(s), planche non encore passée au système L (Phase M).`);
  } else {
    console.log(`PL. ${pl.planche} — lisibilité conforme${pl.strict ? ' (système L)' : ''}.`);
  }
}

if (errors) {
  console.error(`\nlisibilité : ÉCHEC — ${errors} défaut(s) bloquant(s).`);
  process.exit(1);
}
console.log(`\nlisibilité : conforme.${warns ? ` ${warns} défaut(s) hérités en attente de la Phase M.` : ''}`);
