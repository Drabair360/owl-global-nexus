import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import { ventures } from './ventures/data';

interface Entity {
  name: string;
  statusKey?: string;
  missionKey: string;
  points: string[];
  website: string;
}

const Portefeuille = () => {
  const { t } = useI18n();

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portefeuille Owl International',
    hasPart: [
      { '@type': 'Organization', name: 'CAO Industries', description: 'Ingénierie industrielle EPC' },
      { '@type': 'Organization', name: 'Drabair Labs', description: 'Technologies propriétaires du groupe' },
      { '@type': 'Organization', name: 'Line Builder', description: 'Configuration d’usines dès l’avant-projet' },
      { '@type': 'Organization', name: 'Weavme', description: 'Plateforme logicielle' },
      { '@type': 'Organization', name: 'Owl Real Estate', description: 'Immobilier patrimonial long terme' },
    ],
  };



  const entities: Entity[] = [
    {
      name: 'CAO Industries',
      statusKey: 'common.status.registration',
      missionKey: 'portfolio.cao.mission',
      points: ['portfolio.cao.p1', 'portfolio.cao.p2', 'portfolio.cao.p3'],
      website: '',
    },
    {
      name: 'Drabair Labs',
      statusKey: 'common.status.formation',
      missionKey: 'portfolio.drabair.mission',
      points: ['portfolio.drabair.p1', 'portfolio.drabair.p2', 'portfolio.drabair.p3'],
      website: '',
    },
    {
      name: 'Line Builder',
      statusKey: 'common.status.formation',
      missionKey: 'portfolio.line.mission',
      points: ['portfolio.line.p1', 'portfolio.line.p2', 'portfolio.line.p3'],
      website: '',
    },
    {
      name: 'Weavme',
      statusKey: 'common.status.partnership',
      missionKey: 'portfolio.weavme.mission',
      points: ['portfolio.weavme.p1', 'portfolio.weavme.p2', 'portfolio.weavme.p3'],
      website: '',
    },
    {
      name: 'Owl Real Estate',
      statusKey: 'common.status.constitution',
      missionKey: 'portfolio.ore.mission',
      points: ['portfolio.ore.p1', 'portfolio.ore.p2', 'portfolio.ore.p3'],
      website: '',
    },
  ];

  return (
    <PageShell
      title={`${t('portfolio.title')} - Owl International | CAO, Drabair, Line Builder, Weavme, Owl Real Estate`}
      description="Le portefeuille d’Owl International : CAO Industries (EPC), Drabair Labs (technologies), Line Builder (configuration d’usines), Weavme (logiciel) et Owl Real Estate (immobilier patrimonial)."
      keywords="portefeuille Owl International, CAO Industries, Drabair Labs, Line Builder, Weavme, Owl Real Estate, EPC, immobilier patrimonial"
      breadcrumbs={[{ name: t('portfolio.title'), path: '/portefeuille' }]}
      jsonLd={portfolioSchema}
    >

      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('portfolio.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900 mb-8">
            {t('portfolio.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-700 font-body leading-relaxed max-w-3xl">
            {t('portfolio.intro')}
          </p>
        </div>
      </section>

      <EditorialSection className="bg-white">
        <div className="space-y-12">
          {entities.map((e, i) => (
            <Reveal key={e.name} delay={i * 60}>
            <article
              className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 last:border-0"
            >
              <div className="md:col-span-4">
                <div className="text-xs font-subtitle tracking-widest uppercase text-primary/70 mb-2">
                  {String(i + 1).padStart(2, '0')} - {e.name.split(' ')[0]}
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-slate-900">{e.name}</h2>
                {e.statusKey && (
                  <p className="text-sm text-slate-500 italic mt-2 font-body">{t(e.statusKey)}</p>
                )}
              </div>
              <div className="md:col-span-8">
                <p className="text-slate-700 font-body leading-relaxed mb-6">{t(e.missionKey)}</p>
                <div className="text-xs font-subtitle tracking-widest uppercase text-slate-500 mb-3">
                  {t('portfolio.covers')}
                </div>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-slate-700 font-body">
                      <span className="text-amber-500 mt-1" aria-hidden>•</span>
                      <span>{t(p)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default Portefeuille;
