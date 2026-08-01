import React from 'react';

/**
 * CABINET DE GRAVURES §1 — grammaire des hachures.
 * Chaque hachure a un SENS, constant sur les douze planches :
 *   h45   45° serrées        → masse pleine (béton, terre compactée, acier plein)
 *   hx    croisées           → coupe de matière
 *   hpt   pointillé          → projeté / futur / en constitution
 *   hsol  horizontales larges→ sol, terrain
 * Aucune hachure décorative : si elle n'a pas de sens, elle n'existe pas.
 */
export const GravureDefs = ({ p }: { p: string }) => (
  <defs>
    <pattern id={`${p}-h45`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.75" />
    </pattern>
    <pattern id={`${p}-hx`} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="9" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.7" />
      <line x1="0" y1="0" x2="9" y2="0" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.7" />
    </pattern>
    <pattern id={`${p}-hsol`} width="14" height="14" patternUnits="userSpaceOnUse">
      <line x1="0" y1="7" x2="14" y2="7" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.5" />
    </pattern>
    <marker id={`${p}-cote`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 5 L 10 2 L 10 8 z" fill="hsl(var(--gravure-oxyde))" />
    </marker>
  </defs>
);

/** Encres — §1. Une seule source de vérité. */
export const ENCRE = 'hsl(var(--gravure-encre))';
export const OXYDE = 'hsl(var(--gravure-oxyde))';
export const LAITON = 'hsl(var(--gravure-laiton))';
export const FORT = 'var(--trait-fort)';
export const MOYEN = 'var(--trait-moyen)';
export const FIN = 'var(--trait-fin)';

/** Ligne de cotation symbolique (jamais de donnée chiffrée réelle). */
export const Cote = ({
  p,
  x1,
  y1,
  x2,
  y2,
  label,
}: {
  p: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
}) => (
  <g>
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={OXYDE}
      strokeWidth={FIN}
      markerStart={`url(#${p}-cote)`}
      markerEnd={`url(#${p}-cote)`}
      opacity="0.9"
    />
    <text
      className="gravure-lettrage"
      x={(x1 + x2) / 2}
      y={y1 === y2 ? y1 - 7 : (y1 + y2) / 2}
      fontSize="13"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);
