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
// Le letterpress de production est en force SOBRE et sur béton uniquement (§5).
if (!/\.mat-beton-2 \.v3-letterpress/.test(v3)) errors.push('letterpress : portée béton perdue');
if (!/0 -0\.5px 0 hsl\(0 0% 0% \/ 0\.30\)/.test(v3)) errors.push('letterpress : force sobre altérée');

if (errors.length) {
  console.error('GEL MATIÈRE v3 — DÉRIVE DÉTECTÉE :');
  errors.forEach((e) => console.error(' -', e));
  process.exit(1);
}
console.log('GEL MATIÈRE v3 — conforme (grès, béton, laiton, letterpress sobre, grain 1x 0.07).');
