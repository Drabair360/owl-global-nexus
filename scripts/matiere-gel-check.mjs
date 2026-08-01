/**
 * SNAPSHOT DE NON-RÉGRESSION — GEL MATIÈRE v3 (séance de lab du 01/08/2026)
 *
 * Toute dérive d'un token de texture fait échouer la recette.
 * Usage : node scripts/matiere-gel-check.mjs
 */
import { readFileSync } from 'node:fs';

const GEL = {
  // §1.1 grès — cible gelée telle quelle
  '--v3-gres-macro': '0.040',
  '--v3-gres-vergeure': '0.025',
  '--v3-gres-micro': '0.070',
  '--v3-gres-fibre': '0.055',
  // §1.2 béton — cible gelée, rareté des bulles validée
  '--v3-beton-macro': '0.045',
  '--v3-beton-micro': '0.110',
  '--v3-beton-bulle': '0.500',
  // §1.3 laiton — cible gelée
  '--v3-laiton-brosse': '0.200',
  // tuiles : non périodiques à l'échelle de l'écran
  '--v3-tile-macro': '960px',
  '--v3-tile-meso': '420px',
  '--v3-tile-micro': '180px',
  '--v3-tile-rare': '1280px',
};
const GEL_LEGACY = { '--mat-grain-1x': '0.07' };

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const v3 = read('src/styles/matiere-v3.css');
const legacy = read('src/styles/matiere.css');

const value = (css, token) => {
  const m = css.match(new RegExp(`${token}\\s*:\\s*([^;]+);`));
  return m ? m[1].trim() : null;
};

const errors = [];
for (const [t, expected] of Object.entries(GEL)) {
  const got = value(v3, t);
  if (got !== expected) errors.push(`${t} : attendu ${expected}, trouvé ${got}`);
}
for (const [t, expected] of Object.entries(GEL_LEGACY)) {
  const got = value(legacy, t);
  if (got !== expected) errors.push(`${t} : attendu ${expected}, trouvé ${got}`);
}
// Lot Z9 : le letterpress est SUPPRIMÉ. Sa réapparition est une régression.
if (/\.v3-letterpress[-\d]*\s*\{/.test(v3)) errors.push('letterpress : classe réintroduite (supprimée en Z9)');

// Lot Z3 : deux jetons de focus, un par famille de surface.
for (const token of ['--focus-on-gres', '--focus-on-beton']) {
  if (!value(legacy, token)) errors.push(`${token} : jeton de focus manquant`);
}
// Lot Z5 : plancher typographique — le cachet ne redescend pas sous 11 px.
if (!/--mat-corps-plancher\s*:\s*0\.6875rem;/.test(legacy)) errors.push('plancher typographique 11px : perdu');
// Lot Z12 : trois ors, pas sept.
if (!/--mat-encre-or\s*:/.test(legacy)) errors.push('consolidation des ors : --mat-encre-or manquant');

// === CABINET DE GRAVURES §1 — convention de dessin gelée ===
const gravure = read('src/styles/gravure.css');
const TRAITS = {
  '--trait-fort': '1px',
  '--trait-moyen': '0.75px',
  '--trait-fin': '0.5px',
  // §1.15 tracés régulateurs, §2.1 dépassement d'angle
  '--trait-ultrafin': '0.35px',
  '--depassement': '2px',
};
for (const [t, expected] of Object.entries(TRAITS)) {
  const got = value(gravure, t);
  if (got !== expected) errors.push(`${t} : attendu ${expected}, trouvé ${got}`);
}
if (!/vector-effect:\s*non-scaling-stroke/.test(gravure)) errors.push('gravure : non-scaling-stroke perdu');
// Grammaire des hachures : quatre sens, pas un de plus.
const defs = read('src/components/gravure/defs.tsx');
for (const h of ['-h45', '-hx', '-hsol']) {
  if (!defs.includes(h)) errors.push(`hachure ${h} : motif manquant`);
}
// §1.6 — RÉSERVE DE MATIÈRE (remplace « quatre pochés par planche ») :
// les quatre pochés existent dans la bibliothèque, mais chaque poché ne s'emploie
// QUE sur sa matière réelle. pierre → planches à maçonnerie (VI notamment),
// bois → coffrages et menuiseries. Forcer une matière absente est une faute.
for (const m of ['beton', 'acier', 'pierre', 'bois']) {
  if (!defs.includes(`-poche-${m}`)) errors.push(`poché ${m} : motif manquant`);
}
// Planche I (ossature métallique sur fondations béton) : ni pierre ni bois.
if (/poche\(p,\s*'(pierre|bois)'\)/.test(read('src/components/gravure/planches/PlancheI.tsx'))) {
  errors.push('planche I : poché pierre/bois employé sur une matière absente');
}

// §1.10 — strates de sol.
for (const s of ['sol-remblai', 'sol-terrain', 'sol-bon']) {
  if (!defs.includes(s)) errors.push(`strate ${s} : motif manquant`);
}
// §1 — la bibliothèque des quinze primitives est la seule source de dessin.
const prim = read('src/components/gravure/primitives.tsx');
const PRIMITIVES = [
  'BulleAxe',
  'RepereNiveau',
  'ChaineCotes',
  'Attache',
  'Rupture',
  'poche',
  'Gousset',
  'Soudure',
  'CercleDetail',
  'EchelleGraphique',
  'StratesSol',
  'FlechePente',
  'RoseVents',
  'RepereFigure',
  'Pastille',
  'TraceRegulateur',
];
for (const nom of PRIMITIVES) {
  if (!new RegExp(`export const ${nom}\\b`).test(prim)) errors.push(`primitive ${nom} : manquante`);
}
// §2.1 — le dépassement d'angle est géométrique, pas décoratif.
if (!prim.includes('--depassement')) errors.push('§2.1 : dépassement d’angle non câblé');
// §2.3 — hachures vivantes seedées (±4 %), hors pochés.
if (!/seeded\(/.test(prim)) errors.push('§2.3 : hachures vivantes non seedées');
// Cartouche : composant unique, jamais redessiné.
const cartouches = ['src/components/gravure/Cartouche.tsx'];
for (const c of cartouches) { if (!read(c).includes('PLANCHE ')) errors.push('cartouche : gabarit altéré'); }
// Un seul rehaut de laiton par planche.
const pl1 = read('src/components/gravure/planches/PlancheI.tsx');
const laitons = (pl1.split('\n').filter((l) => !l.startsWith('import') && /(?:stroke|fill)=\{LAITON\}/.test(l))).length;
if (laitons > 1) errors.push(`planche I : ${laitons} rehauts de laiton (maximum 1)`);
// §3 — composition de planche : trois figures et une nomenclature, jamais un dessin isolé.
for (const fig of ['n="1"', 'n="2"', 'n="3"']) {
  if (!pl1.includes(fig)) errors.push(`planche I : ${fig} manquante`);
}
if (!/Nomenclature/.test(pl1)) errors.push('planche I : nomenclature manquante');


if (errors.length) {
  console.error('GEL MATIÈRE v3 — DÉRIVE DÉTECTÉE :');
  errors.forEach((e) => console.error(' -', e));
  process.exit(1);
}
console.log('GEL MATIÈRE v3 — conforme (grès, béton, laiton, grain 1x 0.07, focus, plancher 11px, trois ors).');
