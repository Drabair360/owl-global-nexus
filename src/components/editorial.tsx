import React, { ReactNode } from 'react';

/**
 * Petits primitifs éditoriaux réutilisables : eyebrow, numéro de section
 * en filigrane, titre Playfair, wrapper de section.
 */

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-subtitle tracking-[0.25em] text-primary/80 uppercase mb-4">{children}</p>
);

export const SectionNumber = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-baseline gap-4 mb-8">
    <span className="text-6xl md:text-7xl font-brand text-slate-200 leading-none select-none" aria-hidden>
      {n}
    </span>
    <span className="text-sm font-subtitle tracking-[0.2em] uppercase text-muted-foreground">- {label}</span>
  </div>
);

export const EditorialTitle = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900 ${className}`}>
    {children}
  </h2>
);

export const Rule = () => <div className="h-px w-16 bg-slate-300 my-8" />;

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
