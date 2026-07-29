import React from 'react';

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  place?: string;
  year?: string;
}

/**
 * Institutional hero - ink surface, gold vertical rule, display typography.
 * Unified treatment aligned on the Index hero (Lot F).
 */
const InstitutionalHero = ({
  eyebrow,
  title,
  subtitle,
  place = 'Paris',
  year = 'EST. 2023',
}: Props) => {
  return (
    <section className="relative min-h-[62vh] md:min-h-[68vh] flex items-center overflow-hidden ink-surface paper-noise">
      <div
        aria-hidden
        className="hidden md:block absolute left-8 lg:left-24 top-1/2 -translate-y-1/2 w-px h-[40vh] bg-gradient-to-b from-transparent via-gold/60 to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold/70" />
          <p className="text-[11px] md:text-xs font-subtitle tracking-[0.35em] text-gold/90 uppercase">
            {eyebrow}
          </p>
        </div>

        <h1
          className="font-display text-hero text-white mb-8 max-w-5xl"
          style={{ textWrap: 'balance', hyphens: 'manual' } as React.CSSProperties}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-body">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-[10px] md:text-xs font-subtitle tracking-[0.35em] text-white/60 uppercase">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-gold/60" />
            <span>{place}</span>
          </div>
          <div className="text-white/50">{year}</div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalHero;
