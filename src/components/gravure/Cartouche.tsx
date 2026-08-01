import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, FIN } from './defs';
import { EchelleGraphique } from './primitives';

/**
 * CABINET DE GRAVURES §1 — LE CARTOUCHE.
 * Composant unique, réutilisé par les douze planches, jamais redessiné :
 * numéro romain elzévirien, titre en petites capitales, échelle graphique
 * (§1.9) et le folio-chouette en sceau de cartouche.
 */
const Cartouche = ({
  x,
  y,
  w = 320,
  h = 74,
  numeral,
  title,
  echelle,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  numeral: string;
  title: string;
  echelle?: string;
}) => (
  <g transform={`translate(${x} ${y})`} aria-hidden="true">
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
