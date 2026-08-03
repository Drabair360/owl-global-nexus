/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Groupe — béton (hero) puis grès continu ; grès-2 pour l'organigramme.
   Signature unique : le tracé de l'organigramme. Bande `skyline` ton encre. */
import React from 'react';
import Vignette from '@/components/gravure/Vignette';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialTitle, EditorialSection, Rule } from '@/components/editorial';
import ChapterRail from '@/components/ChapterRail';
import PresidentPortrait from '@/components/PresidentPortrait';
import PolesViz from '@/components/PolesViz';
import { OwlKPISet } from '@/components/KPI';
import SplitText from '@/components/SplitText';
import { useI18n } from '@/lib/i18n';
import PlancheEnSituation from '@/components/gravure/PlancheEnSituation';

const Groupe = () => {
  const { t } = useI18n();
  return (
    <PageShell
      title={t('seo.groupe.title')}
      description={t('seo.groupe.desc')}
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


      {/* Barre KPI - set fermé, aucun autre indicateur */}
      <EditorialSection className="mat-gres mat-grain pb-0">
        <div className="mb-8"><Vignette id="gouvernance" size={40} /></div>
        <div className="text-xs font-subtitle tracking-[0.28em] uppercase mat-ink-accent mb-8">
          {t('kpi.title')}
        </div>
        <OwlKPISet />
      </EditorialSection>

      {/* Gouvernance + Ancrage */}
      <EditorialSection className="mat-gres mat-grain">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-4">{t('groupe.gouv.title')}</h2>
            <Rule />
            <p className="mat-ink-2 font-body leading-relaxed">{t('groupe.gouv.body')}</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-4">{t('groupe.ancrage.title')}</h2>
            <Rule />
            <p className="mat-ink-2 font-body leading-relaxed">{t('groupe.ancrage.body')}</p>
          </div>
        </div>
      </EditorialSection>



      {/* Organigramme + data-viz interactive */}
      <EditorialSection className="mat-gres-2 mat-grain relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl mat-ink-1 mb-4">{t('groupe.orga.title')}</h2>
          <div className="rule-gold mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <PolesViz />
            <div className="space-y-6">
              <div className="mat-carte mat-serti p-6">
                <div className="text-xs font-subtitle tracking-widest uppercase mat-ink-accent mb-1">Holding</div>
                <div className="font-heading text-xl mat-ink-1">{t('groupe.orga.holding')}</div>
              </div>
              <div className="mat-carte mat-serti p-6">
                <div className="text-xs font-subtitle tracking-widest uppercase mat-ink-accent mb-3">A - {t('groupe.orga.op')}</div>
                <ul className="space-y-1 text-sm mat-ink-2 font-body columns-2">
                  <li>CAO Industries</li>
                  <li>Drabair Labs</li>
                  <li>Line Builder</li>
                  <li>Weavme</li>
                </ul>
              </div>
              <div className="mat-carte mat-serti p-6">
                <div className="text-xs font-subtitle tracking-widest uppercase mat-ink-accent mb-3">B - {t('groupe.orga.pat')}</div>
                <ul className="space-y-1 text-sm mat-ink-2 font-body">
                  <li>Owl Real Estate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>

      {/* Lettre du Président - rail de chapitre unifié */}
      <EditorialSection className="mat-gres mat-grain">
        <ChapterRail
          ariaLabel={t('groupe.ceo.eyebrow')}
          chapters={[
            {
              id: 'lettre-president',
              number: '03',
              label: t('groupe.ceo.eyebrow'),
              title: t('groupe.ceo.name'),
              content: (
                <>
                  <div className="flex items-start gap-6 mb-2">
                    <PresidentPortrait alt={t('groupe.ceo.portraitAlt')} />
                    <div className="pt-2">
                      <div className="text-sm mat-ink-2 font-subtitle tracking-[0.2em] uppercase">
                        {t('groupe.ceo.role')}
                      </div>
                      <div className="rule-gold mt-4" />
                    </div>
                  </div>
                  <p className="font-display text-2xl md:text-3xl leading-[1.35] italic mat-ink-1">
                    « {t('groupe.ceo.body')} »
                  </p>
                </>
              ),
            },
          ]}
        />
      </EditorialSection>
    
      {/* CABINET §6 - planche VIII posée en situation, préversion seulement */}
      <PlancheEnSituation numeral="VIII" idPrefix="planche-viii-groupe" />
    </PageShell>
  );

};

export default Groupe;
