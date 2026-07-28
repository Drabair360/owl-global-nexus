import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection, Rule } from '@/components/editorial';
import StickyChapter from '@/components/StickyChapter';
import SplitText from '@/components/SplitText';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

const Approche = () => {
  const { t } = useI18n();
  const principles = [
    { n: '01', tKey: 'approche.p1.t', bKey: 'approche.p1.b' },
    { n: '02', tKey: 'approche.p2.t', bKey: 'approche.p2.b' },
    { n: '03', tKey: 'approche.p3.t', bKey: 'approche.p3.b' },
  ];

  return (
    <PageShell
      title={`${t('approche.title')} - Owl International | Doctrine d’investissement`}
      description="Doctrine d’Owl International : construire dans l’ordre, financer par le résultat, ancrer le capital dans le temps long. La méthode d’une holding intégrée France-Afrique."
      keywords="doctrine investissement, approche Owl International, holding long terme, France Afrique"
      breadcrumbs={[{ name: t('approche.title'), path: '/approche' }]}
    >

      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('approche.eyebrow')}</Eyebrow>
          <SplitText
            as="h1"
            text={t('approche.title')}
            className="font-display text-hero text-slate-900"
            stagger={60}
          />
        </div>
      </section>

      <EditorialSection className="bg-white">
        <div className="space-y-24">
          {principles.map((p) => (
            <StickyChapter key={p.n} number={p.n} label={`Principe ${p.n}`} title={t(p.tKey)}>
              <SplitText
                as="p"
                text={t(p.bKey)}
                className="text-xl md:text-2xl font-body leading-relaxed text-slate-700 block"
                stagger={18}
              />
            </StickyChapter>
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
