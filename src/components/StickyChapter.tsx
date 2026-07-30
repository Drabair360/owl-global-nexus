import React, { ReactNode } from 'react';

interface Props {
  /** Numéro type "01" */
  number: string;
  /** Label court en capitales */
  label: string;
  /** Titre chapitre */
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Layout éditorial 2 colonnes : rail gauche sticky (numéro géant + label)
 * qui suit le scroll pendant que la colonne droite défile.
 */
const StickyChapter = ({ number, label, title, children, className = '' }: Props) => (
  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${className}`}>
    <div className="lg:col-span-4">
      <div className="lg:sticky lg:top-32">
        <div className="font-display text-[8rem] md:text-[10rem] leading-[0.85] text-gold-num mb-4 select-none">
          {number}
        </div>
        <div className="rule-gold mb-6" />
        <p className="text-xs font-subtitle tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {label}
        </p>
        <h2 className="font-heading text-2xl md:text-3xl leading-tight text-slate-900">
          {title}
        </h2>
      </div>
    </div>
    <div className="lg:col-span-8 lg:pt-6 space-y-8 text-lg font-body leading-relaxed text-slate-700">
      {children}
    </div>
  </div>
);

export default StickyChapter;
