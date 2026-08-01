import React from 'react';

/**
 * CABINET §3c — LES MILLÉSIMES GRAVÉS DU JOURNAL.
 * Le chiffre de l'année, grand corps, posé sur une hachure de fond fine :
 * le registre devient livre de comptes. Aucun élément de plus.
 * Le millésime est décoratif : l'année reste portée par le titre de section.
 */
const Millesime = ({ year, className = '' }: { year: string; className?: string }) => {
  const id = `mil-${year}`;
  return (
    <svg
      className={`gravure-svg ${className}`}
      viewBox="0 0 220 96"
      aria-hidden="true"
      focusable="false"
      style={{ width: '100%', maxWidth: 220 }}
    >
      <defs>
        <pattern id={`${id}-h`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.30" />
        </pattern>
        <clipPath id={`${id}-c`}>
          <text x="4" y="76" className="gravure-millesime" fontSize="82">
            {year}
          </text>
        </clipPath>
      </defs>
      {/* hachure de fond, contenue dans le chiffre */}
      <rect x="0" y="0" width="220" height="96" fill={`url(#${id}-h)`} clipPath={`url(#${id}-c)`} />
      {/* le chiffre gravé : contour seul */}
      <text
        x="4"
        y="76"
        className="gravure-millesime"
        fontSize="82"
        fill="none"
        stroke="hsl(var(--gravure-encre))"
        strokeWidth="var(--trait-fort)"
      >
        {year}
      </text>
      {/* filets de registre */}
      <line x1="0" y1="90" x2="220" y2="90" stroke="hsl(var(--gravure-oxyde))" strokeWidth="var(--trait-fin)" />
      <line x1="0" y1="6" x2="220" y2="6" stroke="hsl(var(--gravure-oxyde))" strokeWidth="var(--trait-fin)" opacity="0.6" />
    </svg>
  );
};

export default Millesime;
