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

      <CinemaBand texture="archive" tone="prestige" />

      <EditorialSection className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Index par année */}
          <nav
            aria-label={t('journal.index')}
            className="lg:col-span-3 lg:sticky lg:top-28 self-start"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-gold-ink mb-5">
              {t('journal.index')}
            </div>
            <ol className="space-y-3">
              {years.map(([year, list]) => (
                <li key={year}>
                  <a
                    href={`#annee-${year}`}
                    className="group flex items-baseline justify-between border-t border-slate-300 pt-2 hover:border-amber-500 transition-colors"
                  >
                    <span className="font-display text-2xl text-slate-900 tabular group-hover:text-amber-700 transition-colors">
                      {year}
                    </span>
                    <span className="text-xs font-subtitle tracking-[0.18em] uppercase text-slate-500">
                      {String(list.length).padStart(2, '0')} {t('journal.entries')}
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
                  <h2 className="font-display text-3xl text-slate-900 tabular leading-none">{year}</h2>
                  <span aria-hidden className="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent" />
                </div>

                <ol className="relative border-l-2 border-amber-400/40 pl-8 space-y-12">
                  {list.map((e) => (
                    <li key={e.tKey} className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-2 border-amber-400"
                      />
                      <div className="text-xs font-subtitle tracking-[0.22em] uppercase text-primary mb-2">
                        {t(e.dateKey)}
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl text-slate-900 mb-2">{t(e.tKey)}</h3>
                      <p className="text-slate-600 font-body leading-relaxed max-w-2xl">{t(e.bKey)}</p>
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
