/**
 * GREP DOCTRINE — contrôle permanent des chaînes interdites.
 *
 * Interdits :
 *   · entités fictives (AKOULA, CAOAGRO.COM, OWLOMA, KIDZ LAB),
 *   · adresses et toponymes bannis (Agard, Meyreuil, Passage),
 *   · le code de site OWL-1 : le dossier documente une unité de référence,
 *     jamais un site nommé. Ajouté à demeure le 03/08/2026.
 *
 * Usage : node scripts/doctrine-check.mjs
 */
import { spawnSync } from 'node:child_process';

const INTERDITS = [
  'AKOULA',
  'CAOAGRO',
  'OWLOMA',
  'KIDZ LAB',
  'Agard',
  'Meyreuil',
  'OWL-1',
  'OWL‑1',
];

let faute = false;
for (const mot of INTERDITS) {
  const r = spawnSync('rg', ['-n', '--fixed-strings', '-i', mot, 'src', 'index.html'], {
    encoding: 'utf8',
  });
  const out = (r.stdout || '').trim();
  if (out) {
    faute = true;
    console.log(`\n[FAUTE] « ${mot} » :\n${out}`);
  }
}
console.log(faute ? '\nDoctrine : NON CONFORME' : 'Doctrine : conforme (0 occurrence).');
process.exit(faute ? 1 : 0);
