import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import { ventures } from './ventures/data';
import Duotone from '@/components/Duotone';
import Legende from '@/components/Legende';
import { textures, SIZES } from '@/assets/textures';
import { absoluteUrl } from '@/config/site';

const Portefeuille = () => {
  const { t, locale } = useI18n();

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portefeuille Owl International',
    hasPart: ventures.map((v) => ({
      '@type': 'Organization',
      name: v.name,
      url: absoluteUrl(`/portefeuille/${v.slug}`),
      description: v.context[locale],
    })),
  };


  return (
    <PageShell
      title={`${t('portfolio.title')} - Owl International | CAO, Drabair, Line Builder, Weavme, Owl Real Estate`}
      description="Le portefeuille d’Owl International : CAO Industries (EPC), Drabair Labs (technologies), Line Builder (configuration d’usines), Weavme (logiciel) et Owl Real Estate (immobilier patrimonial)."
      keywords="portefeuille Owl International, CAO Industries, Drabair Labs, Line Builder, Weavme, Owl Real Estate, EPC, immobilier patrimonial"
      breadcrumbs={[{ name: t('portfolio.title'), path: '/portefeuille' }]}
      jsonLd={portfolioSchema}
    >

      <InstitutionalHero
        eyebrow={t('portfolio.eyebrow')}
        title={t('portfolio.title')}
        subtitle={t('portfolio.intro')}
      />

      <EditorialSection className="bg-white">
        <div className="space-y-12">
          {ventures.map((e, i) => (
            <Reveal key={e.slug} delay={i * 60}>
            <article
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 last:border-0"
            >
              <div className="md:col-span-4">
                <Legende hoverOnly className="mb-6 block">
                  <div className="overflow-hidden">
                    <Duotone
                      src={textures[e.texture].src}
                      sources={textures[e.texture].sources}
                      sizes={SIZES.thumb}
                      alt={textures[e.texture].alt}
                      tone={e.tone}
                      width={textures[e.texture].width}
                      height={textures[e.texture].height}
                      className="aspect-[4/5] w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] group-focus-within:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                </Legende>
                <div className="text-xs font-subtitle tracking-widest uppercase text-primary/70 mb-2">
                  {e.order} - {e.pole[locale]}
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-slate-900">
                  <Link to={`/portefeuille/${e.slug}`} className="hover:text-amber-700 transition-colors">
                    {e.name}
                  </Link>
                </h2>
                <p className="text-sm text-slate-500 italic mt-2 font-body">{t(e.statusKey)}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-slate-700 font-body leading-relaxed mb-6">{t(e.missionKey)}</p>
                <div className="text-xs font-subtitle tracking-widest uppercase text-slate-500 mb-3">
                  {t('portfolio.covers')}
                </div>
                <ul className="space-y-2 mb-6">
                  {e.pointsKeys.map((p) => (
                    <li key={p} className="flex gap-3 text-slate-700 font-body">
                      <span className="text-amber-500 mt-1" aria-hidden>-</span>
                      <span>{t(p)}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/portefeuille/${e.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-subtitle tracking-[0.2em] uppercase text-amber-700 hover:text-amber-800 border-b border-amber-500/40 hover:border-amber-600 pb-1 transition-colors"
                >
                  {locale === 'fr' ? 'Lire la fiche' : 'Read the profile'} <span aria-hidden>-&gt;</span>
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

export default Portefeuille;
