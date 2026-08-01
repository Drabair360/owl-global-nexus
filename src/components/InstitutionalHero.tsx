import React from 'react';
import GutterRule from './GutterRule';

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  place?: string;
  year?: string;
  /** Folio de section (signature M7 n°1). Deux chiffres, ex. « 02 ». */
  folio?: string;
  children?: React.ReactNode;
}

/**
 * Hero institutionnel - direction Matière (G2).
 * Béton coffré + grain calibré (M2), lumière zénithale unique (M1),
 * paires de contraste mesurées (M4), entrée « la page se pose » (M5),
 * une seule arête de laiton et un cachet de registre (M7).
 */
const InstitutionalHero = ({
  eyebrow,
  title,
  subtitle,
  place = 'Paris',
  year = 'EST. 2023',
  folio,
  children,
}: Props) => {
  return (
    <section className="relative min-h-[62vh] md:min-h-[68vh] flex items-center overflow-hidden mat-beton mat-grain mat-coffrage">
      <GutterRule />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
        {folio && (
          <p className="mat-folio text-sm mb-8 mat-ink-2">
            <span className="mat-folio-eyes" aria-hidden="true">
              <i /><span /><i />
            </span>
            <span className="mat-tnum">{folio}</span>
          </p>
        )}

        {/* Signature M7 n°3 : une seule arête, sur le bloc d'affirmation */}
        <div className="mat-arete pl-5 md:pl-7">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12" style={{ background: 'hsl(var(--mat-laiton-lit))' }} />
            <p className="text-xs font-subtitle tracking-[0.35em] uppercase mat-ink-accent">
              {eyebrow}
            </p>
          </div>

          <h1
            className="font-display text-hero mat-ink-1 mat-pose mb-8 max-w-5xl"
            style={{ textWrap: 'balance', hyphens: 'manual' } as React.CSSProperties}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="mat-prose mat-ink-2 mat-pose mat-pose-2 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>

        {children && <div className="mt-10">{children}</div>}
      </div>

      {/* Signature M7 n°2 : le cachet scelle le bloc d'autorité */}
      <div className="absolute inset-x-0 bottom-6 z-10 self-end">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mat-cachet font-subtitle">
            <span className="mat-cachet-seal">Registre Owl</span>
            <span className="mat-ink-2">{place}</span>
            <span className="mat-ink-2 ml-auto mat-tnum">{year}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalHero;
