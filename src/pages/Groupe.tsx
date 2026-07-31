import React from 'react';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialTitle, EditorialSection, Rule } from '@/components/editorial';
import StickyChapter from '@/components/StickyChapter';
import Duotone from '@/components/Duotone';
import PolesViz from '@/components/PolesViz';
import CinemaBand from '@/components/CinemaBand';
import SplitText from '@/components/SplitText';
import { useI18n } from '@/lib/i18n';

const Groupe = () => {
  const { t } = useI18n();
  return (
    <PageShell
      title={`${t('groupe.title')} - Owl International | Holding Paris`}
      description="Découvrez Owl International : gouvernance, ancrage parisien, doctrine d’investissement long terme entre l’Europe et l’Afrique. Une holding indépendante fondée par Arthur Draber."
      keywords="Owl International groupe, gouvernance holding, Arthur Draber, holding Paris, investissement France Afrique"
      breadcrumbs={[{ name: t('groupe.title'), path: '/groupe' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: t('groupe.title'),
        about: { '@type': 'Organization', name: 'Owl International' },
      }}
    >

      {/* Hero */}
      <InstitutionalHero
        eyebrow={t('groupe.eyebrow')}
        title={t('groupe.title')}
        subtitle={t('groupe.intro')}
      />


      {/* Gouvernance + Ancrage */}
      <EditorialSection className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-4">{t('groupe.gouv.title')}</h2>
            <Rule />
            <p className="text-slate-700 font-body leading-relaxed">{t('groupe.gouv.body')}</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-4">{t('groupe.ancrage.title')}</h2>
            <Rule />
            <p className="text-slate-700 font-body leading-relaxed">{t('groupe.ancrage.body')}</p>
          </div>
        </div>
      </EditorialSection>

      <CinemaBand texture="skyline" tone="nocturne" className="mb-16" />

      {/* Organigramme + data-viz interactive */}
      <EditorialSection className="bg-slate-50 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-slate-900 mb-4">{t('groupe.orga.title')}</h2>
          <div className="rule-gold mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <PolesViz />
            <div className="space-y-6">
              <div className="border border-slate-300 p-6 bg-white">
                <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-1">Holding</div>
                <div className="font-heading text-xl text-slate-900">{t('groupe.orga.holding')}</div>
              </div>
              <div className="border border-slate-300 p-6 bg-white">
                <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-3">A - {t('groupe.orga.op')}</div>
                <ul className="space-y-1 text-sm text-slate-700 font-body columns-2">
                  <li>CAO Industries</li>
                  <li>Drabair Labs</li>
                  <li>Line Builder</li>
                  <li>Weavme</li>
                </ul>
              </div>
              <div className="border border-slate-300 p-6 bg-white">
                <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-3">B - {t('groupe.orga.pat')}</div>
                <ul className="space-y-1 text-sm text-slate-700 font-body">
                  <li>Owl Real Estate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>

      {/* Lettre du Président - sticky chapter + duotone */}
      <EditorialSection className="bg-white">
        <StickyChapter number="03" label={t('groupe.ceo.eyebrow')} title={t('groupe.ceo.name')}>
          <div className="flex items-start gap-6 mb-2">
            <PresidentPortrait alt="Arthur Draber, Président d'Owl International" />

            <div className="pt-2">
              <div className="text-sm text-slate-500 font-subtitle tracking-[0.2em] uppercase">
                {t('groupe.ceo.role')}
              </div>
              <div className="rule-gold mt-4" />
            </div>
          </div>
          <p className="font-display text-2xl md:text-3xl leading-[1.35] italic text-slate-900">
            « {t('groupe.ceo.body')} »
          </p>
        </StickyChapter>
      </EditorialSection>
    </PageShell>
  );

};

export default Groupe;
