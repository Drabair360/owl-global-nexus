import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import { ventures } from './ventures/data';
import Duotone from '@/components/Duotone';
import Legende from '@/components/Legende';
import { textures, SIZES } from '@/assets/textures';
import { absoluteUrl } from '@/config/site';
import { ventureFolio } from '@/config/folios';

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
      title={t('seo.portefeuille.title')}
      description={t('seo.portefeuille.desc')}
      keywords="portefeuille Owl International, CAO Industries, Drabair Labs, Line Builder, Weavme, Owl Real Estate, EPC, immobilier patrimonial"
      breadcrumbs={[{ name: t('portfolio.title'), path: '/portefeuille' }]}
      jsonLd={portfolioSchema}
    >

      <InstitutionalHero
        eyebrow={t('portfolio.eyebrow')}
        title={t('portfolio.title')}
        subtitle={t('portfolio.intro')}
      />

      {/* Catalogue raisonné - notices numérotées, matière grès */}
      <EditorialSection className="mat-gres mat-grain">
        <div className="mat-cachet font-subtitle mb-16">
          <span className="mat-cachet-seal">{locale === 'fr' ? 'Catalogue raisonné' : 'Catalogue raisonné'}</span>
          <span className="mat-ink-2">
            {String(ventures.length).padStart(2, '0')} {locale === 'fr' ? 'notices' : 'entries'}
          </span>
          <span className="mat-ink-2 ml-auto mat-tnum">Paris</span>
        </div>

        <div className="space-y-16">
          {ventures.map((e, i) => (
            <Reveal key={e.slug} delay={i * 60}>
            <article className="group grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-[hsl(var(--mat-on-gres-1)/0.18)] last:border-0">
              <div className="md:col-span-4">
                <Legende hoverOnly className="mb-6 block">
                  <div className="mat-photo mat-elev-2">
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
                <p className="mat-folio text-sm mb-3 mat-ink-2">
                  <span className="mat-folio-eyes" aria-hidden="true"><i /><span /><i /></span>
                  <span className="mat-tnum">{ventureFolio(e.order)}</span>
                  <span className="text-xs font-subtitle tracking-[0.24em] uppercase">{e.pole[locale]}</span>
                </p>
                <h2 className="font-heading text-2xl md:text-3xl mat-ink-1">
                  <Link
                    to={`/portefeuille/${e.slug}`}
                    className="border-b border-transparent hover:border-current transition-colors"
                  >
                    {e.name}
                  </Link>
                </h2>
                <p className="statut mt-3">{t(e.statusKey)}</p>
              </div>
              <div className="md:col-span-8">
                <p className="mat-prose mat-ink-1 mb-8 max-w-2xl">{t(e.missionKey)}</p>
                <div className="text-xs font-subtitle tracking-[0.24em] uppercase mat-ink-accent mb-4">
                  {t('portfolio.covers')}
                </div>
                <ul className="space-y-2 mb-8">
                  {e.pointsKeys.map((p) => (
                    <li key={p} className="flex gap-3 mat-ink-2 font-body">
                      <span aria-hidden style={{ color: 'hsl(var(--mat-laiton))' }} className="mt-1">-</span>
                      <span>{t(p)}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/portefeuille/${e.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-subtitle tracking-[0.2em] uppercase mat-ink-accent border-b pb-1 transition-colors"
                  style={{ borderColor: 'hsl(var(--mat-laiton) / 0.5)' }}
                >
                  {locale === 'fr' ? 'Lire la notice' : 'Read the notice'} <span aria-hidden>-&gt;</span>
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
