import { Link, useParams, Navigate } from 'react-router-dom';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection, Rule } from '@/components/editorial';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import Legende from '@/components/Legende';
import { textures } from '@/assets/textures';
import { useParallax } from '@/hooks/useParallax';
import { useI18n } from '@/lib/i18n';
import { getVenture, ventures } from './data';

const Venture = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useI18n();
  const parallax = useParallax(10);
  const venture = slug ? getVenture(slug) : undefined;

  if (!venture) {
    return <Navigate to="/portefeuille" replace />;
  }

  const tex = textures[venture.texture];
  const pole = venture.pole[locale];
  const context = venture.context[locale];
  const operating = venture.operating[locale];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: venture.name,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Owl International',
      url: 'https://owl-global-nexus.lovable.app/',
    },
    description: t(venture.missionKey),
    url: `https://owl-global-nexus.lovable.app/portefeuille/${venture.slug}`,
  };

  const idx = ventures.findIndex((v) => v.slug === venture.slug);
  const prev = ventures[(idx - 1 + ventures.length) % ventures.length];
  const next = ventures[(idx + 1) % ventures.length];

  return (
    <PageShell
      title={`${venture.name} - ${pole} | Owl International`}
      description={`${venture.name} : ${t(venture.missionKey)}`}
      keywords={`${venture.name}, Owl International, ${pole}, portefeuille`}
      breadcrumbs={[
        { name: t('portfolio.title'), path: '/portefeuille' },
        { name: venture.name, path: `/portefeuille/${venture.slug}` },
      ]}
      jsonLd={jsonLd}
    >
      {/* Hero éditorial */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <Eyebrow>{pole}</Eyebrow>
            <div className="text-xs font-subtitle tracking-[0.3em] uppercase text-slate-500 mb-4">
              {venture.order} / {String(ventures.length).padStart(2, '0')} - {t('portfolio.eyebrow')}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-slate-900 mb-6">
              {venture.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-body leading-relaxed max-w-2xl">
              {context}
            </p>
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative pl-6 overflow-hidden" ref={parallax.ref}>
                {/* Filet or vertical, tracé à la révélation */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/70 via-gold/30 to-transparent origin-top rule-draw"
                />
                <Legende>
                  <div
                    style={{
                      transform: `translate3d(0, ${parallax.offset}px, 0) scale(1.06)`,
                      willChange: 'transform',
                    }}
                  >
                  <Duotone
                    src={tex.src}
                    alt={tex.alt}
                    tone={venture.tone}
                    width={tex.width}
                    height={tex.height}
                    className="aspect-[4/5] w-full"
                  />
                  </div>
                </Legende>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission + statut */}
      <EditorialSection className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-gold mb-3">
              {locale === 'fr' ? 'Mission' : 'Mission'}
            </div>
            <p className="text-sm text-slate-500 italic font-body">{t(venture.statusKey)}</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug text-slate-900">
              {t(venture.missionKey)}
            </p>
            <Rule />
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-slate-500 mb-3">
              {t('portfolio.covers')}
            </div>
            <ul className="space-y-3">
              {venture.pointsKeys.map((k) => (
                <li key={k} className="flex gap-3 text-slate-700 font-body">
                  <span className="text-amber-500 mt-1" aria-hidden>-</span>
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </EditorialSection>

      {/* Opérationnel */}
      <EditorialSection className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl">
          <Eyebrow>{locale === 'fr' ? 'Repère opérationnel' : 'Operating note'}</Eyebrow>
          <p className="font-display text-xl md:text-2xl text-slate-800 leading-relaxed">
            {operating}
          </p>
        </div>
      </EditorialSection>

      {/* Navigation entre entités */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to={`/portefeuille/${prev.slug}`}
            className="group border-t border-slate-300 pt-4 hover:border-amber-500 transition-colors"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-slate-500 mb-2">
              {locale === 'fr' ? 'Précédent' : 'Previous'}
            </div>
            <div className="font-heading text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
              {prev.name}
            </div>
          </Link>
          <Link
            to="/portefeuille"
            className="group border-t border-slate-300 pt-4 hover:border-amber-500 transition-colors md:text-center"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-slate-500 mb-2">
              {locale === 'fr' ? 'Retour' : 'Back'}
            </div>
            <div className="font-heading text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
              {t('portfolio.title').split(',')[0]}
            </div>
          </Link>
          <Link
            to={`/portefeuille/${next.slug}`}
            className="group border-t border-slate-300 pt-4 hover:border-amber-500 transition-colors md:text-right"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-slate-500 mb-2">
              {locale === 'fr' ? 'Suivant' : 'Next'}
            </div>
            <div className="font-heading text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
              {next.name}
            </div>
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default Venture;
