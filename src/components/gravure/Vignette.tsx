import React from 'react';

/**
 * CABINET §3a — LES DIX VIGNETTES DE RUBRIQUE.
 * Micro-gravures de 48 px rendu : UN trait moyen porteur, UN détail fin,
 * jamais de cartouche, jamais de poché, jamais de laiton.
 * Emploi : une par tête de rubrique récurrente, jamais dans le corps du
 * texte, jamais en liste à puces.
 */

export type VignetteId =
  | 'modele'
  | 'jalons'
  | 'gouvernance'
  | 'portefeuille'
  | 'metiers'
  | 'journal'
  | 'approche'
  | 'scouts'
  | 'rejoindre'
  | 'contact';

const M = 'var(--trait-moyen)';
const F = 'var(--trait-fin)';
const E = 'hsl(var(--gravure-encre))';

const dessins: Record<VignetteId, { label: string; d: React.ReactNode }> = {
  modele: {
    label: 'Le modèle',
    d: (
      <>
        <circle cx="24" cy="24" r="11" fill="none" stroke={E} strokeWidth={M} />
        <circle cx="24" cy="24" r="3.4" fill="none" stroke={E} strokeWidth={F} />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <line
            key={a}
            x1={24 + Math.cos((a * Math.PI) / 180) * 11}
            y1={24 + Math.sin((a * Math.PI) / 180) * 11}
            x2={24 + Math.cos((a * Math.PI) / 180) * 16}
            y2={24 + Math.sin((a * Math.PI) / 180) * 16}
            stroke={E}
            strokeWidth={F}
          />
        ))}
      </>
    ),
  },
  jalons: {
    label: 'Jalons',
    d: (
      <>
        <path d="M13 8 h22 l-11 16 l11 16 h-22 l11 -16 z" fill="none" stroke={E} strokeWidth={M} />
        <line x1="16" y1="36" x2="32" y2="36" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  gouvernance: {
    label: 'Gouvernance',
    d: (
      <>
        <circle cx="24" cy="24" r="13" fill="none" stroke={E} strokeWidth={M} />
        <circle cx="24" cy="24" r="8" fill="none" stroke={E} strokeWidth={F} />
        <line x1="24" y1="11" x2="24" y2="37" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  portefeuille: {
    label: 'Portefeuille',
    d: (
      <>
        <rect x="10" y="12" width="28" height="24" fill="none" stroke={E} strokeWidth={M} />
        <line x1="10" y1="24" x2="38" y2="24" stroke={E} strokeWidth={F} />
        <line x1="19" y1="12" x2="19" y2="36" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  metiers: {
    label: 'Métiers',
    d: (
      <>
        <path d="M12 36 L36 12 L36 36 z" fill="none" stroke={E} strokeWidth={M} />
        <path d="M20 32 L32 20" fill="none" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  journal: {
    label: 'Journal',
    d: (
      <>
        <path d="M12 34 L30 14 l6 4 L18 38 z" fill="none" stroke={E} strokeWidth={M} />
        <line x1="10" y1="40" x2="38" y2="40" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  approche: {
    label: 'Approche',
    d: (
      <>
        <line x1="24" y1="8" x2="24" y2="30" stroke={E} strokeWidth={M} />
        <path d="M18 30 h12 l-6 10 z" fill="none" stroke={E} strokeWidth={M} />
        <line x1="16" y1="8" x2="32" y2="8" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  scouts: {
    label: 'Scouts',
    d: (
      <>
        <path d="M10 28 h18 l10 -6 v10 l-10 -6" fill="none" stroke={E} strokeWidth={M} />
        <circle cx="12" cy="28" r="3" fill="none" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  rejoindre: {
    label: 'Rejoindre',
    d: (
      <>
        <rect x="9" y="20" width="30" height="7" fill="none" stroke={E} strokeWidth={M} />
        <line x1="14" y1="27" x2="14" y2="38" stroke={E} strokeWidth={F} />
        <line x1="34" y1="27" x2="34" y2="38" stroke={E} strokeWidth={F} />
      </>
    ),
  },
  contact: {
    label: 'Contact',
    d: (
      <>
        <path d="M14 30 a10 10 0 1 1 16 -6" fill="none" stroke={E} strokeWidth={M} />
        <path d="M30 24 l8 -4" fill="none" stroke={E} strokeWidth={F} />
      </>
    ),
  },
};

export const VIGNETTES = Object.keys(dessins) as VignetteId[];
export const vignetteLabel = (id: VignetteId) => dessins[id].label;

/**
 * Vignette de rubrique. Décorative par défaut (aria-hidden) : la tête de
 * rubrique qu'elle accompagne porte déjà le sens.
 */
const Vignette = ({ id, size = 48, className = '' }: { id: VignetteId; size?: number; className?: string }) => (
  <svg
    className={`gravure-svg ${className}`}
    width={size}
    height={size}
    viewBox="0 0 48 48"
    aria-hidden="true"
    focusable="false"
    style={{ width: size, height: size }}
  >
    {dessins[id].d}
  </svg>
);

export default Vignette;
