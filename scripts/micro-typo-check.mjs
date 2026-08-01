/**
 * Z7 — MICRO-TYPOGRAPHIE FRANÇAISE, EN SYSTÈME.
 *
 * La micro-typographie n'est plus une relecture : c'est une recette.
 * Ce script vérifie le dictionnaire FR de src/lib/i18n.tsx et échoue
 * dès qu'une règle est enfreinte. `--fix` applique la normalisation.
 *
 * Règles (FR uniquement, l'anglais n'en veut pas) :
 *   1. Aucun tiret cadratin « — » : la doctrine du site est le tiret court.
 *   2. Espace fine insécable (U+202F) avant ; : ! ? et à l'intérieur de « ».
 *   3. Apostrophe typographique ’ — jamais l'apostrophe droite '.
 *   4. Guillemets français « » — jamais " autour d'une citation.
 *
 * Usage : node scripts/micro-typo-check.mjs [--fix]
 */
import { readFileSync, writeFileSync } from 'node:fs';

const FIN = '\u202F'; // espace fine insécable
const FILE = new URL('../src/lib/i18n.tsx', import.meta.url);
const src = readFileSync(FILE, 'utf8');

const start = src.indexOf('  fr: {');
const end = src.indexOf('  en: {');
if (start < 0 || end < 0) {
  console.error('micro-typo : bornes du dictionnaire FR introuvables.');
  process.exit(1);
}
const head = src.slice(0, start);
const fr = src.slice(start, end);
const tail = src.slice(end);

/** Normalise une valeur de chaîne FR (le contenu entre quotes). */
export const normalise = (v) =>
  v
    // 1. tiret cadratin / demi-cadratin → tiret court
    .replace(/\s*[—–]\s*/g, ' - ')
    // 3. apostrophe droite → typographique (hors séquences échappées)
    .replace(/(\p{L})'(\p{L})/gu, '$1\u2019$2')
    // 4. guillemets droits → guillemets français, fine à l'intérieur
    .replace(/"([^"]+)"/g, `\u00AB${FIN}$1${FIN}\u00BB`)
    // 2. fine insécable avant la ponctuation haute
    .replace(/\s*([;:!?])(\s|$)/g, `${FIN}$1$2`)
    .replace(/\u00AB\s*/g, `\u00AB${FIN}`)
    .replace(/\s*\u00BB/g, `${FIN}\u00BB`)
    // pas de fine dans une URL (http:// …) ni dans un ratio 4:5
    .replace(new RegExp(`${FIN}:(//|\\d)`, 'g'), ':$1');

const LINE = /^(\s*'[^']+':\s*')((?:[^'\\]|\\.)*)(',?)$/;
const lines = fr.split('\n');
const problems = [];
const fixed = lines.map((line) => {
  const m = line.match(LINE);
  if (!m) return line;
  const out = normalise(m[2]);
  if (out !== m[2]) problems.push(`${m[1].trim()} … ${m[2]}`);
  return `${m[1]}${out}${m[3]}`;
});

if (process.argv.includes('--fix')) {
  writeFileSync(FILE, head + fixed.join('\n') + tail, 'utf8');
  console.log(`micro-typo : ${problems.length} chaîne(s) normalisée(s).`);
  process.exit(0);
}

if (problems.length) {
  console.error(`MICRO-TYPOGRAPHIE FR — ${problems.length} écart(s) :`);
  problems.slice(0, 20).forEach((p) => console.error(' -', p));
  console.error('Corrige avec : node scripts/micro-typo-check.mjs --fix');
  process.exit(1);
}
console.log('MICRO-TYPOGRAPHIE FR — conforme (tirets courts, fines insécables, apostrophes et guillemets typographiques).');
