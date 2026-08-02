import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, FIN } from './defs';
import { EchelleGraphique } from './primitives';

/**
 * CABINET DE GRAVURES §1 — LE CARTOUCHE.
 * Composant unique, réutilisé par les neuf planches, jamais redessiné :
 * numéro romain elzévirien, titre en petites capitales, échelle graphique
 * (§1.9) et le folio-chouette en sceau de cartouche.
 *
 * DOSSIER OWL-1 : bandeau de dossier optionnel, posé au-dessus du cartouche.
 * Il porte l'intitulé de dossier avec la mention CONCEPT, l'index de planche
 * (PL. n/9) et les renvois croisés vers les autres planches du dossier.
 */
/**
 * TAXONOMIE DU DOSSIER — un dossier, trois volumes.
 * L'index général reste PL. n/9, quel que soit le volume.
 */
export const VOL_I = 'DOSSIER OWL - VOL. I : USINE DE RÉFÉRENCE OWL-1 (CONCEPT)';
export const VOL_II = 'DOSSIER OWL - VOL. II : IMMEUBLE DE RÉFÉRENCE ORE-1 (CONCEPT)';
export const VOL_III = 'DOSSIER OWL - VOL. III : LE GROUPE';

const Cartouche = ({
  x,
  y,
  w = 320,
  h = 74,
  numeral,
  title,
  echelle,
  dossier,
  index,
  renvois,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  numeral: string;
  title: string;
  echelle?: string;
  /** Intitulé du dossier, mention CONCEPT comprise. */
  dossier?: string;
  /** Index de planche dans le dossier, ex. « PL. 5/9 ». */
  index?: string;
  /** Renvois croisés réels vers les autres planches. */
  renvois?: string[];
}) => (
  <g transform={`translate(${x} ${y})`} data-lis="bloc" aria-hidden="true">
    {dossier && (() => {
      const [tete, sujet] = dossier.split(' : ');
      const lignes = renvois && renvois.length > 0 ? 1 : 0;
      const bh = 38 + (sujet ? 17 : 0) + lignes * 17;
      return (
        <g transform={`translate(0 ${-bh - 4})`}>
          <rect x="0" y="0" width={w} height={bh} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
          <text className="gravure-lettrage" x="12" y="15" fontSize="10" fill={ENCRE}>
            {tete}
          </text>
          {index && (
            <text className="gravure-lettrage" x={w - 12} y="15" fontSize="10" textAnchor="end" fill={OXYDE}>
              {index}
            </text>
          )}
          {sujet && (
            <text className="gravure-lettrage" x="12" y="33" fontSize="10" fill={ENCRE} opacity="0.85">
              {sujet}
            </text>
          )}
          {renvois && renvois.length > 0 && (
            <text className="gravure-lettrage" x="12" y={bh - 8} fontSize="9" fill={OXYDE}>
              {renvois.join('  -  ')}
            </text>
          )}
        </g>
      );
    })()}

    <rect x="0" y="0" width={w} height={h} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FORT} />
    <line x1="0" y1={h * 0.44} x2={w} y2={h * 0.44} stroke={ENCRE} strokeWidth={FIN} opacity="0.6" />
    <line x1={w - 62} y1="0" x2={w - 62} y2={h} stroke={ENCRE} strokeWidth={FIN} opacity="0.6" />

    <text className="gravure-lettrage" x="12" y={h * 0.3} fontSize="14">
      PLANCHE {numeral}
    </text>
    <text className="gravure-lettrage" x="12" y={h * 0.68} fontSize="13" fill={ENCRE} opacity="0.85">
      {title}
    </text>

    {/* §1.9 — échelle graphique, graduations symboliques */}
    <EchelleGraphique x={12} y={h * 0.78} w={140} h={6} n={6} label={echelle ?? 'Éch. symb.'} />

    {/* Sceau de cartouche : le folio-chouette */}
    <g transform={`translate(${w - 44} ${h / 2})`}>
      <circle cx="-9" cy="0" r="4.5" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx="9" cy="0" r="4.5" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <line x1="0" y1="-7" x2="-2" y2="7" stroke={LAITON} strokeWidth={FORT} />
    </g>
    <text className="gravure-lettrage" x={w - 44} y={h - 10} fontSize="10" textAnchor="middle" fill={OXYDE}>
      REGISTRE
    </text>
  </g>
);

export default Cartouche;
