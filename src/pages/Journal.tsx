import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const Journal = () => {
  const { t } = useI18n();

  const entries = [
    { year: '2023', tKey: 'journal.2023.title', bKey: 'journal.2023.body' },
    { year: '2025', tKey: 'journal.2025.title', bKey: 'journal.2025.body' },
    { year: '2026', tKey: 'journal.2026a.title', bKey: 'journal.2026a.body' },
    { year: '2026', tKey: 'journal.2026b.title', bKey: 'journal.2026b.body' },
    { year: '2026', tKey: 'journal.2026c.title', bKey: 'journal.2026c.body' },
  ];

  return (
    <PageShell
      title={`${t('journal.title')} — Owl International | Journal du groupe`}
      description="Journal factuel d’Owl International : jalons, immatriculations, ouvertures de filiales et étapes structurantes du groupe entre l’Europe et l’Afrique."
      keywords="journal Owl International, actualités holding, jalons, immatriculations, France Afrique"
      breadcrumbs={[{ name: t('journal.title'), path: '/journal' }]}
    >

      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('journal.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900 mb-6">
            {t('journal.title')}
          </h1>
          <p className="text-lg text-slate-700 font-body max-w-2xl italic">{t('journal.body')}</p>
        </div>
      </section>

      <EditorialSection className="bg-white">
        <ol className="relative border-l-2 border-amber-400/40 pl-8 space-y-12 max-w-3xl">
          {entries.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-2 border-amber-400" />
              <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-2">{e.year}</div>
              <h2 className="font-heading text-xl md:text-2xl text-slate-900 mb-2">{t(e.tKey)}</h2>
              <p className="text-slate-600 font-body leading-relaxed">{t(e.bKey)}</p>
            </li>
          ))}
        </ol>
      </EditorialSection>
    </PageShell>
  );
};

export default Journal;
