import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

const Engagements = () => {
  const { t } = useI18n();
  const items = [
    { tKey: 'engagements.1.t', bKey: 'engagements.1.b' },
    { tKey: 'engagements.2.t', bKey: 'engagements.2.b' },
    { tKey: 'engagements.3.t', bKey: 'engagements.3.b' },
    { tKey: 'engagements.4.t', bKey: 'engagements.4.b' },
  ];
  return (
    <PageShell
      title={`${t('engagements.title')} - Owl International | Responsabilité et gouvernance`}
      description="Les engagements d’Owl International : gouvernance, responsabilité sociale et environnementale, éthique des affaires entre l’Europe et l’Afrique."
      keywords="engagements Owl International, ESG, gouvernance holding, responsabilité"
      breadcrumbs={[{ name: t('engagements.title'), path: '/engagements' }]}
    >

      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('engagements.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900">
            {t('engagements.title')}
          </h1>
        </div>
      </section>

      <EditorialSection className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 70}>
            <div>
              <div className="text-xs font-subtitle tracking-widest uppercase text-primary/70 mb-3">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h2 className="font-heading text-xl md:text-2xl text-slate-900 mb-4">{t(it.tKey)}</h2>
              <p className="text-slate-700 font-body leading-relaxed">{t(it.bKey)}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default Engagements;
