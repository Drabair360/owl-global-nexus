/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Journal — GRÈS seul, registre imprimé. Bande `archive` ton grès.
   Aucun béton hors hero, aucune signature animée. */
import React, { useMemo } from 'react';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import CinemaBand from '@/components/CinemaBand';

interface Entry {
  year: string;
  dateKey: string;
  tKey: string;
  bKey: string;
}

const entries: Entry[] = [
  { year: '2023', dateKey: 'journal.2023.date', tKey: 'journal.2023.title', bKey: 'journal.2023.body' },
  { year: '2024', dateKey: 'journal.2024.date', tKey: 'journal.2024.title', bKey: 'journal.2024.body' },
  { year: '2026', dateKey: 'journal.2026a.date', tKey: 'journal.2026a.title', bKey: 'journal.2026a.body' },
  { year: '2026', dateKey: 'journal.2026b.date', tKey: 'journal.2026b.title', bKey: 'journal.2026b.body' },
  { year: '2026', dateKey: 'journal.2026c.date', tKey: 'journal.2026c.title', bKey: 'journal.2026c.body' },
];

const Journal = () => {
  const { t } = useI18n();

  const years = useMemo(() => {
    const map = new Map<string, Entry[]>();
    entries.forEach((e) => {
      map.set(e.year, [...(map.get(e.year) ?? []), e]);
    });
    return Array.from(map.entries());
  }, []);

  return (
    <PageShell
      title={t('seo.journal.title')}
      description={t('seo.journal.desc')}
      keywords="journal Owl International, actualités holding, jalons, immatriculations, France Afrique"
      breadcrumbs={[{ name: t('journal.title'), path: '/journal' }]}
    >
      <InstitutionalHero
        eyebrow={t('journal.eyebrow')}
        title={t('journal.title')}
        subtitle={t('journal.body')}
      />

      <CinemaBand texture="archive" tone="gres" />

      {/* Registre imprimé - grès, index à baseline alignée, colonne de chronologie */}
      <EditorialSection className="mat-gres mat-grain">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Index par année */}
          <nav
            aria-label={t('journal.index')}
            className="lg:col-span-3 lg:sticky lg:top-28 self-start"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase mat-ink-accent mb-5">
              {t('journal.index')}
            </div>
            <ol className="space-y-3">
              {years.map(([year, list]) => (
                <li key={year}>
                  <a
                    href={`#annee-${year}`}
                    className="group flex items-baseline justify-between gap-4 border-t pt-2 leading-none transition-colors"
                    style={{ borderColor: 'hsl(var(--mat-on-gres-1) / 0.22)' }}
                  >
                    <span className="font-display text-2xl mat-ink-1 mat-tnum leading-none block">
                      {year}
                    </span>
                    <span className="text-xs font-subtitle tracking-[0.18em] uppercase mat-ink-2 leading-none relative -top-px">
                      {String(list.length).padStart(2, '0')} {t(list.length > 1 ? 'journal.entries' : 'journal.entry')}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Chronologie éditoriale */}
          <div className="lg:col-span-9 space-y-16">
            {years.map(([year, list]) => (
              <section key={year} id={`annee-${year}`} className="scroll-mt-28">
                <div className="flex items-baseline gap-6 mb-8">
                  <h2 className="font-display text-3xl mat-ink-1 mat-tnum leading-none">{year}</h2>
                  <span
                    aria-hidden
                    className="flex-1 h-px"
                    style={{ background: 'linear-gradient(90deg, hsl(var(--mat-laiton) / 0.55), transparent)' }}
                  />
                </div>

                <ol
                  className="relative border-l pl-8 space-y-12"
                  style={{ borderColor: 'hsl(var(--mat-laiton) / 0.35)' }}
                >
                  {list.map((e) => (
                    <li key={e.tKey} className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[37px] top-[0.45rem] w-3 h-3 rounded-full"
                        style={{
                          background: 'hsl(var(--mat-gres))',
                          border: '1px solid hsl(var(--mat-laiton))',
                        }}
                      />
                      <div className="text-xs font-subtitle tracking-[0.22em] uppercase mat-ink-accent mb-2">
                        {t(e.dateKey)}
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl mat-ink-1 mb-2">{t(e.tKey)}</h3>
                      <p className="mat-prose mat-ink-2 max-w-2xl">{t(e.bKey)}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </EditorialSection>

    </PageShell>
  );
};

export default Journal;
