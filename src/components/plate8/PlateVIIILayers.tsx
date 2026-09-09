import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import '@/styles/plate8.css';

/**
 * PL. VIII (B) — IMPLANTATION GÉNÉRALE D'UNE USINE TYPE, PLAN À CALQUES.
 *
 * Réplique des plans d'études (A1 de synthèse, A0 de masse directeur, carnet
 * A3 à six thèmes), anonymisée. Les SVG de `public/plates/viii/` sont posés
 * tels quels : aucune reprise de géométrie, de libellé ni de cotation.
 * Les textes proviennent de `i18n.json` (1 186 clés) et suivent la langue du
 * site ; en français les libellés portant `data-len` gardent leur emprise
 * d'origine (textLength + spacingAndGlyphs), en anglais elle est relâchée.
 */

const DIR = '/plates/viii';
const SVGNS = 'http://www.w3.org/2000/svg';
const VB0 = [30, 90, 1790, 1500];

type Dict = Record<string, { fr: string; en: string }>;

const fileCache = new Map<string, Promise<string>>();
const loadFile = (path: string) => {
  let p = fileCache.get(path);
  if (!p) {
    p = fetch(path).then((r) => {
      if (!r.ok) throw new Error(`asset ${path} ${r.status}`);
      return r.text();
    });
    fileCache.set(path, p);
  }
  return p;
};

let dictPromise: Promise<Dict> | null = null;
const loadDict = () => {
  if (!dictPromise) dictPromise = fetch(`${DIR}/i18n.json`).then((r) => r.json());
  return dictPromise;
};

/** Calques thématiques, dans l'ordre du panneau de commande. */
const LAYERS = [
  { id: 'circulation', file: 'ov-circulation.svg', ui: 'ui.l1', theme: 'circulation' },
  { id: 'securite', file: 'ov-securite.svg', ui: 'ui.l2', theme: 'securite' },
  { id: 'reseaux', file: 'ov-reseaux.svg', ui: 'ui.l3', theme: 'reseaux' },
] as const;

const PHASES = [
  { id: 'ph1', file: 'ov-ph1.svg', ui: 'ui.l4a' },
  { id: 'ph2', file: 'ov-ph2.svg', ui: 'ui.l4b' },
  { id: 'ph3', file: 'ov-ph3.svg', ui: 'ui.l4c' },
  { id: 'chantier', file: 'ov-chantier.svg', ui: 'ui.l4d' },
] as const;

type LayerKey = 'circulation' | 'securite' | 'reseaux' | 'stockage';
type PhaseKey = 'ph1' | 'ph2' | 'ph3' | 'chantier';

/** Recoupe une note J en tspans de `data-wrap` caractères au plus. */
const wrapText = (el: Element, txt: string) => {
  const maxc = Number(el.getAttribute('data-wrap'));
  const words = txt.split(' ');
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((`${cur} ${w}`).trim().length > maxc && cur) {
      lines.push(cur);
      cur = w;
    } else cur = cur ? `${cur} ${w}` : w;
  }
  if (cur) lines.push(cur);
  const x = el.getAttribute('x') ?? '0';
  const fs = parseFloat(el.getAttribute('font-size') ?? '3');
  while (el.firstChild) el.removeChild(el.firstChild);
  lines.forEach((l, i) => {
    const ts = document.createElementNS(SVGNS, 'tspan');
    ts.setAttribute('x', x);
    ts.setAttribute('dy', String(i ? fs * 1.3 : 0));
    ts.textContent = l;
    el.appendChild(ts);
  });
};

const applyDict = (root: ParentNode | null, dict: Dict | null, lang: 'fr' | 'en') => {
  if (!root || !dict) return;
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = dict[el.getAttribute('data-i18n') as string];
    if (!entry) return;
    const t = lang === 'fr' ? entry.fr : entry.en;
    if (el.hasAttribute('data-wrap')) {
      wrapText(el, t);
      return;
    }
    el.textContent = t;
    if (el.hasAttribute('data-len')) {
      if (lang === 'fr') {
        el.setAttribute('textLength', el.getAttribute('data-len') as string);
        el.setAttribute('lengthAdjust', 'spacingAndGlyphs');
      } else {
        el.removeAttribute('textLength');
        el.removeAttribute('lengthAdjust');
      }
    }
  });
};

const PlateVIIILayers = () => {
  const { locale } = useI18n();
  const lang: 'fr' | 'en' = locale === 'en' ? 'en' : 'fr';

  const [dict, setDict] = useState<Dict | null>(null);
  const [version, setVersion] = useState(0);

  const [base, setBase] = useState<'s' | 'a'>('s');
  const [layers, setLayers] = useState<Record<LayerKey, boolean>>({
    circulation: true,
    securite: false,
    reseaux: false,
    stockage: false,
  });
  const [phasage, setPhasage] = useState(false);
  const [phases, setPhases] = useState<Record<PhaseKey, boolean>>({
    ph1: true,
    ph2: false,
    ph3: false,
    chantier: false,
  });
  const [admin, setAdmin] = useState(false);
  const [notes, setNotes] = useState(false);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const panelsRef = useRef<HTMLDivElement | null>(null);
  const injected = useRef<Set<string>>(new Set());
  const panelsLoaded = useRef(false);

  const s = useCallback(
    (key: string) => {
      const e = dict?.[key];
      return e ? (lang === 'fr' ? e.fr : e.en) : '';
    },
    [dict, lang],
  );

  useEffect(() => {
    let alive = true;
    loadDict().then((d) => alive && setDict(d));
    return () => {
      alive = false;
    };
  }, []);

  /** Fichiers nécessaires à l'état courant. Rien d'autre n'est téléchargé. */
  const needed = useMemo(() => {
    const list: { key: string; file: string; kind: 'base' | 'layer' | 'phase' }[] = [
      { key: base === 's' ? 'base-synthese' : 'base-a0', file: base === 's' ? 'base-synthese.svg' : 'base-a0.svg', kind: 'base' },
    ];
    LAYERS.forEach((l) => layers[l.id] && list.push({ key: `ov-${l.id}`, file: l.file, kind: 'layer' }));
    if (layers.stockage) list.push({ key: 'ov-stockage', file: 'ov-stockage.svg', kind: 'layer' });
    if (phasage) PHASES.forEach((p) => phases[p.id] && list.push({ key: `ov-${p.id}`, file: p.file, kind: 'phase' }));
    return list;
  }, [base, layers, phasage, phases]);

  /** Injection en ligne des SVG (indispensable pour l'échange des textes). */
  useEffect(() => {
    let alive = true;
    (async () => {
      let changed = false;
      for (const item of needed) {
        if (injected.current.has(item.key)) continue;
        const text = await loadFile(`${DIR}/layers/${item.file}`);
        if (!alive || !svgRef.current || injected.current.has(item.key)) continue;
        const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
        const g = document.createElementNS(SVGNS, 'g');
        g.setAttribute('id', item.key);
        if (item.kind !== 'base') g.setAttribute('class', item.kind === 'phase' ? 'layer phase' : 'layer');
        if (item.kind !== 'base') g.setAttribute('data-off', '1');
        Array.from(doc.documentElement.childNodes).forEach((n) => g.appendChild(document.importNode(n, true)));
        if (item.kind === 'base') svgRef.current.insertBefore(g, svgRef.current.firstChild);
        else svgRef.current.appendChild(g);
        injected.current.add(item.key);
        changed = true;
      }
      if (changed && alive) setVersion((v) => v + 1);
    })();
    return () => {
      alive = false;
    };
  }, [needed]);

  /** Panneaux de contenu : chargés à la première activation d'un thème. */
  const panelsNeeded = layers.circulation || layers.securite || layers.reseaux || layers.stockage || phasage || admin || notes;
  useEffect(() => {
    if (!panelsNeeded || panelsLoaded.current) return;
    let alive = true;
    loadFile(`${DIR}/panels.html`).then((html) => {
      if (!alive || !panelsRef.current || panelsLoaded.current) return;
      panelsRef.current.innerHTML = html;
      panelsLoaded.current = true;
      setVersion((v) => v + 1);
    });
    return () => {
      alive = false;
    };
  }, [panelsNeeded]);

  /** Traduction de tout ce qui est en place. */
  useEffect(() => {
    applyDict(svgRef.current, dict, lang);
    applyDict(panelsRef.current, dict, lang);
  }, [dict, lang, version]);

  /** Visibilité des bases, des calques et des sections de contenu. */
  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      (['base-synthese', 'base-a0'] as const).forEach((id) => {
        const g = svg.querySelector(`#${id}`);
        if (!g) return;
        const on = (id === 'base-synthese') === (base === 's');
        if (on) g.removeAttribute('hidden');
        else g.setAttribute('hidden', 'hidden');
      });
      const setOff = (key: string, on: boolean) => {
        const g = svg.querySelector(`#ov-${key}`);
        if (!g) return;
        if (on) g.removeAttribute('data-off');
        else g.setAttribute('data-off', '1');
      };
      (Object.keys(layers) as LayerKey[]).forEach((k) => setOff(k, layers[k]));
      (Object.keys(phases) as PhaseKey[]).forEach((k) => setOff(k, phasage && phases[k]));
    }
    const root = panelsRef.current;
    if (root && panelsLoaded.current) {
      const themeOn: Record<string, boolean> = {
        circulation: layers.circulation,
        securite: layers.securite,
        reseaux: layers.reseaux,
        phasage,
        stockage: layers.stockage,
        admin,
      };
      root.querySelectorAll('section.theme').forEach((sec) => {
        const key = sec.getAttribute('data-theme') ?? '';
        (sec as HTMLElement).hidden = !themeOn[key];
      });
      const insetAdmin = root.querySelector('#inset-admin') as HTMLElement | null;
      if (insetAdmin) insetAdmin.hidden = !admin;
      const insetBand = root.querySelector('#inset-band') as HTMLElement | null;
      if (insetBand) insetBand.hidden = !notes;
      const a0panel = root.querySelector('#a0panel') as HTMLElement | null;
      if (a0panel) a0panel.hidden = !notes;
    }
  }, [base, layers, phasage, phases, admin, notes, version]);

  /** Zoom molette autour du curseur, glisser pour déplacer, double clic = reset. */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let vb = VB0.slice();
    const set = () => svg.setAttribute('viewBox', vb.join(' '));
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = svg.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const f = e.deltaY < 0 ? 0.85 : 1.18;
      const nw = Math.min(VB0[2], Math.max(VB0[2] / 12, vb[2] * f));
      const nh = (nw * VB0[3]) / VB0[2];
      vb = [vb[0] + (vb[2] - nw) * px, vb[1] + (vb[3] - nh) * py, nw, nh];
      set();
    };
    let drag: [number, number, number[]] | null = null;
    const onDown = (e: PointerEvent) => {
      drag = [e.clientX, e.clientY, vb.slice()];
      svg.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      const r = svg.getBoundingClientRect();
      vb[0] = drag[2][0] - ((e.clientX - drag[0]) * vb[2]) / r.width;
      vb[1] = drag[2][1] - ((e.clientY - drag[1]) * vb[3]) / r.height;
      set();
    };
    const onUp = () => {
      drag = null;
    };
    const onDbl = () => {
      vb = VB0.slice();
      set();
    };
    svg.addEventListener('wheel', onWheel, { passive: false });
    svg.addEventListener('pointerdown', onDown);
    svg.addEventListener('pointermove', onMove);
    svg.addEventListener('pointerup', onUp);
    svg.addEventListener('pointercancel', onUp);
    svg.addEventListener('dblclick', onDbl);
    return () => {
      svg.removeEventListener('wheel', onWheel);
      svg.removeEventListener('pointerdown', onDown);
      svg.removeEventListener('pointermove', onMove);
      svg.removeEventListener('pointerup', onUp);
      svg.removeEventListener('pointercancel', onUp);
      svg.removeEventListener('dblclick', onDbl);
    };
  }, []);

  const showAll = (on: boolean) => {
    setLayers({ circulation: on, securite: on, reseaux: on, stockage: on });
    setPhasage(on);
    setAdmin(on);
    setNotes(on);
  };

  return (
    <div className="pl8">
      <div className="pl8-layout">
        <aside className="pl8-panel" aria-label={s('ui.layers') || 'Calques'}>
          <h2>{s('ui.base')}</h2>
          <label className="chk">
            <input type="radio" name="pl8-base" checked={base === 's'} onChange={() => setBase('s')} />
            <span>{s('ui.baseS')}</span>
          </label>
          <label className="chk">
            <input type="radio" name="pl8-base" checked={base === 'a'} onChange={() => setBase('a')} />
            <span>{s('ui.baseA')}</span>
          </label>

          <h2>{s('ui.layers')}</h2>
          {LAYERS.map((l) => (
            <label className="chk" key={l.id}>
              <input
                type="checkbox"
                checked={layers[l.id]}
                onChange={(e) => setLayers((p) => ({ ...p, [l.id]: e.target.checked }))}
              />
              <span>{s(l.ui)}</span>
            </label>
          ))}
          <label className="chk">
            <input type="checkbox" checked={phasage} onChange={(e) => setPhasage(e.target.checked)} />
            <span>{s('ui.l4')}</span>
          </label>
          {PHASES.map((p) => (
            <label className="chk sub" key={p.id}>
              <input
                type="checkbox"
                disabled={!phasage}
                checked={phases[p.id]}
                onChange={(e) => setPhases((prev) => ({ ...prev, [p.id]: e.target.checked }))}
              />
              <span>{s(p.ui)}</span>
            </label>
          ))}
          <label className="chk">
            <input
              type="checkbox"
              checked={layers.stockage}
              onChange={(e) => setLayers((p) => ({ ...p, stockage: e.target.checked }))}
            />
            <span>{s('ui.l5')}</span>
          </label>
          <label className="chk">
            <input type="checkbox" checked={admin} onChange={(e) => setAdmin(e.target.checked)} />
            <span>{s('ui.l6')}</span>
          </label>
          <label className="chk">
            <input type="checkbox" checked={notes} onChange={(e) => setNotes(e.target.checked)} />
            <span>{s('ui.l7')}</span>
          </label>

          <div className="pl8-actions">
            <button type="button" onClick={() => showAll(true)}>{s('ui.all')}</button>
            <button type="button" onClick={() => showAll(false)}>{s('ui.none')}</button>
          </div>
        </aside>

        <figure>
          <div className="pl8-frame">
            <svg
              ref={svgRef}
              viewBox={VB0.join(' ')}
              role="img"
              aria-label={s('ui.title')}
            />
            <span className="pl8-zoomhint">{s('ui.zoom')}</span>
          </div>
          <figcaption>{s('ui.caption')}</figcaption>
        </figure>
      </div>

      <p className="pl8-foot">{s('ui.foot')}</p>
      <p className="pl8-foot">{s('ui.ces')}</p>

      <div ref={panelsRef} />
    </div>
  );
};

export default PlateVIIILayers;
