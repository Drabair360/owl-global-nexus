import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

const Metiers = () => {
  const { t } = useI18n();

  const blocks = [
    { n: '01', tKey: 'metiers.epc.title', bKey: 'metiers.epc.body', ctaKey: 'metiers.epc.cta' },
    { n: '02', tKey: 'metiers.soft.title', bKey: 'metiers.soft.body', ctaKey: 'metiers.soft.cta' },
    { n: '03', tKey: 'metiers.re.title', bKey: 'metiers.re.body', ctaKey: 'metiers.re.cta' },
  ];

  return (
    <PageShell
      title={`${t('metiers.title')} - Owl International | Ingénierie EPC, logiciels, immobilier`}
      description="Les trois métiers d’Owl International : ingénierie industrielle clé en main (EPC), édition de logiciels propriétaires et immobilier patrimonial de long terme."
      keywords="métiers Owl International, EPC industriel, logiciel propriétaire, immobilier patrimonial, ingénierie clé en main"
      breadcrumbs={[{ name: t('metiers.title'), path: '/metiers' }]}
    >

      <InstitutionalHero
        eyebrow={t('metiers.eyebrow')}
        title={t('metiers.title')}
      />

      <EditorialSection className="bg-white">
        <div className="space-y-20">
          {blocks.map((b, i) => (
            <Reveal key={b.n} delay={i * 80}>
            <article
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-3">
                <div className="font-brand text-5xl md:text-6xl text-slate-200 leading-none">{b.n}</div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-4">{t(b.tKey)}</h2>
                <p className="text-lg text-slate-700 font-body leading-relaxed mb-6">{t(b.bKey)}</p>
                <Link
                  to="/portefeuille"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase text-primary hover:gap-3 transition-all border-b border-primary/40 pb-1"
                >
                  {t(b.ctaKey)} <ArrowRight size={14} />
                </Link>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default Metiers;
