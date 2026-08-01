import React, { ReactNode } from 'react';

/**
 * Primitifs éditoriaux — langage Matière.
 * Lot Z : plus aucune couleur hors système (slate/gold Tailwind), petites
 * capitales réelles sur les eyebrows (Z8), chiffres tabulaires sur les
 * numéros de section (Z8).
 */

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="mat-mention mat-caps font-subtitle mat-ink-accent mb-4">{children}</p>
);

export const SectionNumber = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-baseline gap-4 mb-8">
    <span
      className="font-display text-6xl md:text-7xl leading-none select-none mat-tnum"
      style={{ color: 'hsl(var(--mat-on-gres-1) / 0.16)' }}
      aria-hidden
    >
      {n}
    </span>
    <span className="text-sm font-subtitle mat-caps mat-ink-2">- {label}</span>
  </div>
);

/**
 * Filigrane géant type "rapport annuel" - à placer en position absolue.
 */
export const SectionWatermark = ({
  n,
  className = '',
}: {
  n: string;
  className?: string;
}) => (
  <span
    aria-hidden
    className={`section-number-watermark mat-tnum absolute -top-4 -right-2 md:-right-6 lg:-right-10 ${className}`}
  >
    {n}
  </span>
);

export const EditorialTitle = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mat-ink-1 ${className}`}>
    {children}
  </h2>
);

export const Rule = () => <div className="rule-gold my-8" />;

export const EditorialSection = ({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);
