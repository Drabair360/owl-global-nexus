import React from 'react';

/**
 * LA VIGNETTE CHOUETTE — marque seule.
 * Reprise de la figure de l'ancienne planche XII, supprimée du registre avec
 * le passage au dossier. Aucun cartouche, aucun repère, aucune
 * nomenclature : un seul dessin, un seul rehaut de laiton (l'œil).
 */
const Chouette = ({ size = 96, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="-120 -130 240 200"
    role="img"
    aria-label="Emblème de la chouette"
    className={className}
  >
    <g>
      <path
        d="M-90 -10 A 90 90 0 0 1 90 -10"
        fill="none"
        stroke="hsl(var(--gravure-encre))"
        strokeWidth="var(--trait-fort)"
      />
      <circle cx={-42} cy={-6} r={26} fill="none" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-moyen)" />
      <circle cx={42} cy={-6} r={26} fill="none" stroke="hsl(var(--mat-laiton))" strokeWidth="var(--trait-fort)" />
      <circle cx={42} cy={-6} r={7} fill="hsl(var(--mat-laiton))" />
      <line x1={0} y1={-24} x2={-6} y2={22} stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fort)" />
      <path
        d="M-78 -58 l-16 -26 M78 -58 l16 -26"
        fill="none"
        stroke="hsl(var(--gravure-encre))"
        strokeWidth="var(--trait-moyen)"
      />
    </g>
  </svg>
);

export default Chouette;
