/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Engagements — béton (hero), bande `terrain` ton ENCRE (cadrage identique
   à /scouts), grès pour les quatre engagements. Aucune autre signature. */
import React from 'react';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import CinemaBand from '@/components/CinemaBand';
import PlancheEnSituation from '@/components/gravure/PlancheEnSituation';

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
      title={t('seo.engagements.title')}
      description={t('seo.engagements.desc')}
      keywords="engagements Owl International, ESG, gouvernance holding, responsabilité"
      breadcrumbs={[{ name: t('engagements.title'), path: '/engagements' }]}
    >

      <InstitutionalHero
        eyebrow={t('engagements.eyebrow')}
        title={t('engagements.title')}
      />

      <CinemaBand texture="terrain" tone="encre" objectPosition="50% 50%" />

      <EditorialSection className="mat-gres mat-grain">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 70}>
            <div>
              <div className="text-xs font-subtitle tracking-widest uppercase mat-ink-accent/70 mb-3">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h2 className="font-heading text-xl md:text-2xl mat-ink-1 mb-4">{t(it.tKey)}</h2>
              <p className="mat-ink-2 font-body leading-relaxed">{t(it.bKey)}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </EditorialSection>
    
      {/* CABINET §6 - planche VIII posée en situation, préversion seulement */}
      <PlancheEnSituation numeral="VIII" idPrefix="planche-viii-engagements" />
    </PageShell>
  );
};

export default Engagements;
