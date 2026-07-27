import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection, Rule } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const Approche = () => {
  const { t } = useI18n();
  const principles = [
    { n: '01', tKey: 'approche.p1.t', bKey: 'approche.p1.b' },
    { n: '02', tKey: 'approche.p2.t', bKey: 'approche.p2.b' },
    { n: '03', tKey: 'approche.p3.t', bKey: 'approche.p3.b' },
  ];

  return (
    <PageShell
      title={`${t('approche.title')} — Owl International`}
      description={t('approche.p1.b')}
    >
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('approche.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900">
            {t('approche.title')}
          </h1>
        </div>
      </section>

      <EditorialSection className="bg-white">
        <div className="space-y-16 max-w-4xl">
          {principles.map((p) => (
            <div key={p.n} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="font-brand text-5xl md:text-6xl text-amber-400 leading-none">{p.n}</div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-4">{t(p.tKey)}</h2>
                <p className="text-lg text-slate-700 font-body leading-relaxed">{t(p.bKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection className="bg-slate-950 text-white">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">{t('approche.not.title')}</h2>
          <Rule />
          <p className="text-lg font-body leading-relaxed text-slate-300">{t('approche.not.body')}</p>
        </div>
      </EditorialSection>

      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <p className="font-heading text-xl text-slate-900">{t('approche.sig.name')}</p>
          <p className="text-sm text-slate-500 font-subtitle tracking-wider uppercase mt-1">
            {t('approche.sig.role')}
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default Approche;
