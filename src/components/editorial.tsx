import React, { ReactNode } from 'react';

/**
 * Primitifs éditoriaux : eyebrow, numéro de section (petit + filigrane),
 * titre Playfair, filet or, wrapper de section.
 */

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-subtitle tracking-[0.28em] text-gold uppercase mb-4">{children}</p>
);

export const SectionNumber = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-baseline gap-4 mb-8">
    <span className="font-display text-6xl md:text-7xl text-slate-200 leading-none select-none" aria-hidden>
      {n}
    </span>
    <span className="text-sm font-subtitle tracking-[0.2em] uppercase text-muted-foreground">- {label}</span>
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
    className={`section-number-watermark absolute -top-4 -right-2 md:-right-6 lg:-right-10 ${className}`}
  >
    {n}
  </span>
);

export const EditorialTitle = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-slate-900 ${className}`}>
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
