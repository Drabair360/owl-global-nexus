/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Métiers — béton (hero) puis grès ; grès-2 pour les blocs sertis.
   Laiton en filets de tête. Aucune signature animée. */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import PlancheEnSituation from '@/components/gravure/PlancheEnSituation';

const Metiers = () => {
  const { t } = useI18n();

  const blocks = [
    { n: '01', tKey: 'metiers.epc.title', bKey: 'metiers.epc.body', ctaKey: 'metiers.epc.cta' },
    { n: '02', tKey: 'metiers.soft.title', bKey: 'metiers.soft.body', ctaKey: 'metiers.soft.cta' },
    { n: '03', tKey: 'metiers.re.title', bKey: 'metiers.re.body', ctaKey: 'metiers.re.cta' },
  ];

  return (
    <PageShell
      title={t('seo.metiers.title')}
      description={t('seo.metiers.desc')}
      keywords="métiers Owl International, EPC industriel, logiciel propriétaire, immobilier patrimonial, ingénierie clé en main"
      breadcrumbs={[{ name: t('metiers.title'), path: '/metiers' }]}
    >

      <InstitutionalHero
        eyebrow={t('metiers.eyebrow')}
        title={t('metiers.title')}
      />

      <EditorialSection className="mat-gres mat-grain">
        <div className="space-y-20">
          {blocks.map((b, i) => (
            <Reveal key={b.n} delay={i * 80}>
            <article
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-3">
                <div className="font-brand text-5xl md:text-6xl mat-ink-2 leading-none">{b.n}</div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-4">{t(b.tKey)}</h2>
                <p className="text-lg mat-ink-2 font-body leading-relaxed mb-6">{t(b.bKey)}</p>
                <Link
                  to="/portefeuille"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase mat-ink-accent hover:gap-3 transition-all border-b border-[hsl(var(--mat-laiton))] pb-1"
                >
                  {t(b.ctaKey)} <ArrowRight size={14} />
                </Link>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </EditorialSection>
    
      {/* CABINET §6 - planche II posée en situation, préversion seulement */}
      <PlancheEnSituation numeral="II" idPrefix="planche-ii-metiers" />
    </PageShell>
  );
};

export default Metiers;
