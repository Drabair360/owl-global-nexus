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
      title={`${t('journal.title')} - Owl International | Journal du groupe`}
      description="Journal factuel d’Owl International : jalons, immatriculations, ouvertures de filiales et étapes structurantes du groupe entre l’Europe et l’Afrique."
      keywords="journal Owl International, actualités holding, jalons, immatriculations, France Afrique"
      breadcrumbs={[{ name: t('journal.title'), path: '/journal' }]}
    >

      <InstitutionalHero
        eyebrow={t('journal.eyebrow')}
        title={t('journal.title')}
        subtitle={t('journal.body')}
      />

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
