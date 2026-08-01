import React from 'react';

/**
 * CABINET DE GRAVURES §1 — grammaire des hachures et des pochés.
 *
 * HACHURES (sens constant sur les douze planches) :
 *   h45   45° serrées         → masse pleine
 *   hx    croisées            → coupe de matière (générique)
 *   hpt   pointillé           → projeté / futur / en constitution
 *   hsol  horizontales larges → sol, terrain
 *
 * POCHÉS DE COUPE §1.6 — quatre, un par matière, JAMAIS interchangés :
 *   poche-beton   croisées serrées
 *   poche-acier   plein léger
 *   poche-pierre  45° + points
 *   poche-bois    madrures fines
 *
 * FAMILLES DE TRAIT §C (Planche I v3) — quatre, documentées une fois :
 *   continu    fort 1 / moyen 0,75 / fin 0,5  → arêtes vues, pièces coupées
 *   interrompu fin + tirets courts (CACHE_DASH) → élément masqué mais
 *              structurant : ancrages noyés, bêche, semelle arrière, liernes
 *   mixte      ultrafin, tiret-point (MIXTE_DASH) → axes de pièce, axes de
 *              rangée de boulons, files et trames, tracés régulateurs
 *   rupture    zigzag → limite d'étendue du dessin
 * Représentation des boulons (cercle + croix) et symbolisation des soudures
 * (repère fléché, ligne de référence, triangle de cordon, gorge symbolique)
 * suivent l'usage des bureaux d'études ; aucune norme n'est citée au dessin.
 *
 * ÉCRITURES §C — hauteurs hiérarchisées, jamais deux fonctions à la même :
 *   14 titres de figure et de nomenclature · 12 nomenclature et niveaux
 *   11 cotes, attaches, annotations · 10 lettres de détail
 *
 * STRATES DE SOL §1.10 : remblai (points) / terrain (45° espacé) / bon sol (45° serré).
 * Aucune hachure décorative : si elle n'a pas de sens, elle n'existe pas.
 */
export const GravureDefs = ({ p }: { p: string }) => (
  <defs>
    {/* — hachures de sens — */}
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

    {/* — §1.6 POCHÉS DE COUPE — */}
    <pattern id={`${p}-poche-beton`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.62" />
      <line x1="0" y1="0" x2="6" y2="0" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.62" />
    </pattern>
    <pattern id={`${p}-poche-acier`} width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="4" fill="hsl(var(--gravure-encre))" opacity="0.55" />
    </pattern>
    <pattern id={`${p}-poche-pierre`} width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="11" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.6" />
      <circle cx="6" cy="6" r="0.7" fill="hsl(var(--gravure-encre))" opacity="0.7" />
    </pattern>
    <pattern id={`${p}-poche-bois`} width="16" height="9" patternUnits="userSpaceOnUse">
      <path d="M0 4.5 q4 -3 8 0 t8 0" fill="none" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.55" />
      <path d="M0 8 q4 -2 8 0 t8 0" fill="none" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.35" />
    </pattern>

    {/* — §1.10 STRATES DE SOL — */}
    <pattern id={`${p}-sol-remblai`} width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="4" r="0.8" fill="hsl(var(--gravure-encre))" opacity="0.55" />
      <circle cx="9" cy="9" r="0.8" fill="hsl(var(--gravure-encre))" opacity="0.55" />
    </pattern>
    <pattern id={`${p}-sol-terrain`} width="13" height="13" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="13" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.5" />
    </pattern>
    <pattern id={`${p}-sol-bon`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="hsl(var(--gravure-encre))" strokeWidth="var(--trait-fin)" opacity="0.65" />
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
/** §1.15 — trait de compas du dessinateur. */
export const ULTRAFIN = 'var(--trait-ultrafin)';
/** §2.1 — dépassement d'angle, en px de dessin. */
export const DEPASSEMENT = 2;

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
