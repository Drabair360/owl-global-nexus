import React, { ReactNode, useEffect, useRef, useState } from 'react';

export interface Chapter {
  /** Identifiant d'ancre, ex. "principe-01" */
  id: string;
  /** Numéro type "01" */
  number: string;
  /** Label court en capitales */
  label: string;
  /** Titre de chapitre */
  title: string;
  content: ReactNode;
}

interface Props {
  chapters: Chapter[];
  /** Intitulé du rail (sommaire) */
  ariaLabel: string;
  className?: string;
}

/**
 * Dispositif de marge UNIQUE : un seul rail latéral qui fait à la fois
 * table des matières et repérage de chapitre (remplace StickyChapter + TOC).
 * Numéro, titre, état actif synchronisé au scroll, navigation par ancre.
 */
const ChapterRail = ({ chapters, ariaLabel, className = '' }: Props) => {
  const [active, setActive] = useState(chapters[0]?.id ?? '');
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [chapters]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${className}`}>
      <nav aria-label={ariaLabel} className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <div
            aria-hidden
            className="font-display text-[6rem] md:text-[8rem] leading-[0.85] text-gold-num mb-4 select-none tabular"
          >
            {chapters.find((c) => c.id === active)?.number ?? chapters[0]?.number}
          </div>
          <div className="rule-gold mb-6" />
          <ol className="space-y-4">
            {chapters.map((c) => {
              const isActive = c.id === active;
              return (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex gap-4 items-baseline border-l-2 pl-4 transition-colors ${
                      isActive
                        ? 'border-[hsl(var(--gold))]'
                        : 'border-transparent hover:border-[hsl(var(--gold))]/40'
                    }`}
                  >
                    <span
                      className={`tabular text-xs font-subtitle tracking-[0.2em] ${
                        isActive ? 'text-gold-ink' : 'text-muted-foreground'
                      }`}
                    >
                      {c.number}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-[11px] font-subtitle tracking-[0.28em] uppercase ${
                          isActive ? 'text-gold-ink' : 'text-muted-foreground'
                        }`}
                      >
                        {c.label}
                      </span>
                      <span
                        className={`block font-heading text-lg md:text-xl leading-tight transition-colors ${
                          isActive ? 'text-slate-900' : 'text-slate-500'
                        }`}
                      >
                        {c.title}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

      <div className="lg:col-span-8 lg:pt-6 space-y-24">
        {chapters.map((c) => (
          <section
            key={c.id}
            id={c.id}
            ref={(el) => {
              refs.current[c.id] = el;
            }}
            className="scroll-mt-32 space-y-8 text-lg font-body leading-relaxed text-slate-700"
          >
            <h2 className="sr-only">{c.title}</h2>
            {c.content}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ChapterRail;
