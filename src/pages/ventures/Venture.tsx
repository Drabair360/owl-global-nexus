/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Fiche venture — grès (corps) + béton (bloc d'autorité / cachet).
   Signature unique : l'arête de laiton M7 en tête de fiche. */
import { Link, useParams, Navigate } from 'react-router-dom';
import PageShell from '@/components/PageShell';
import { EditorialSection, Rule } from '@/components/editorial';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import Legende from '@/components/Legende';
import GroupDiagram from '@/components/GroupDiagram';
import VentureNotice from '@/components/VentureNotice';
import Planche from '@/components/gravure/Planche';
import { PLANCHE_I, PlancheIDrawing } from '@/components/gravure/planches/PlancheI';

import { textures, SIZES } from '@/assets/textures';
import { useParallax } from '@/hooks/useParallax';
import { useI18n } from '@/lib/i18n';
import { getVenture, ventures } from './data';
import { absoluteUrl } from '@/config/site';
import { ventureFolio } from '@/config/folios';

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
    parentOrganization: { '@id': `${absoluteUrl('/')}#organization` },
    description: t(venture.missionKey),
    url: absoluteUrl(`/portefeuille/${venture.slug}`),
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
      <section className="mat-gres-2 mat-grain">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="mat-folio text-sm mb-5 mat-ink-2">
              <span className="mat-folio-eyes" aria-hidden="true"><i /><span /><i /></span>
              <span className="mat-tnum">{ventureFolio(venture.order)}</span>
              <span className="text-xs font-subtitle tracking-[0.24em] uppercase">{pole}</span>
            </p>
            {/* Signature M7 n°3 : unique arête de la page, sur le titre */}
            <div className="mat-arete pl-5 md:pl-7">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mat-ink-1 mat-pose mb-6">
                {venture.name}
              </h1>
              <p className="mat-prose mat-ink-1 mat-pose mat-pose-2 max-w-2xl">
                {context}
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative pl-6" ref={parallax.ref}>
                {/* Filet or vertical, tracé à la révélation */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px origin-top rule-draw"
                  style={{ background: 'linear-gradient(hsl(var(--mat-laiton) / 0.55), hsl(var(--mat-laiton) / 0))' }}
                />
                <Legende>
                  {/* Le recadrage (overflow) s'arrête à l'image : la légende
                      vit hors du cadre parallaxé, plus aucun chevauchement. */}
                  <div className="mat-photo mat-elev-2 overflow-hidden">
                    <div
                      style={{
                        transform: `translate3d(0, ${parallax.offset}px, 0) scale(1.06)`,
                        willChange: 'transform',
                      }}
                    >
                      <Duotone
                        src={tex.src}
                        sources={tex.sources}
                        sizes={SIZES.column}
                        alt={tex.alt}
                        tone={venture.tone}
                        width={tex.width}
                        height={tex.height}
                        className="aspect-[4/5] w-full"
                      />
                    </div>
                  </div>
                </Legende>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CABINET DE GRAVURES — planche maîtresse (préversion : CAO seule) */}
      {venture.slug === 'cao-industries' && (
        <section className="mat-gres mat-grain">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <Reveal>
              <Planche
                idPrefix="planche-i"
                numeral={PLANCHE_I.numeral}
                title={PLANCHE_I.title}
                desc={PLANCHE_I.desc}
                viewBox={PLANCHE_I.viewBox}
              >
                <PlancheIDrawing p="pl1" />
              </Planche>
            </Reveal>
          </div>
        </section>
      )}

      {/* Mission + statut */}
      <EditorialSection className="mat-gres mat-grain">
        {/* G2.3 - la colonne de gauche est refermée : mission, diagramme puis
            notice s'y empilent, la grille s'aligne en tête de contenu et
            aucune colonne ne se prolonge à vide sous son dernier bloc. */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start content-start">
          <div className="md:col-span-4">
            {/* Z11 : les repères de la fiche sont de vrais titres de niveau 2 */}
            <h2 className="mat-mention font-subtitle tracking-[0.28em] uppercase mat-ink-accent mb-3">
              {locale === 'fr' ? 'Statut' : 'Status'}
            </h2>
            <p className="statut mt-1">{t(venture.statusKey)}</p>
            <div className="mt-10">
              <GroupDiagram
                name={venture.name}
                pole={pole}
                label={locale === 'fr' ? 'Place dans le groupe' : 'Place within the group'}
              />
            </div>

            {/* Notice : champs réels uniquement - elle referme la colonne */}
            <div className="mt-12">
              <VentureNotice
                fields={[
                  { label: t('notice.pole'), value: pole },
                  { label: t('notice.status'), value: t(venture.statusKey).replace(/^\(|\)$/g, '') },
                  { label: t('notice.scope'), value: context },
                  ...(venture.incorporation
                    ? [{ label: t('notice.incorporation'), value: venture.incorporation[locale] }]
                    : []),
                  {
                    label: t('notice.rank'),
                    value: `${venture.order} / ${String(ventures.length).padStart(2, '0')}`,
                  },
                ]}
              />
            </div>

            {/* §3b — DÉTAIL compagnon : la FIG. 2 recadrée, nœud jarret-traverse */}
            {venture.slug === 'cao-industries' && (
              <div className="mt-12">
                <Planche
                  idPrefix="planche-i-detail"
                  numeral={PLANCHE_I.numeral}
                  title={PLANCHE_I.title}
                  desc={`Détail de la figure 2 de la planche I : le nœud jarret-traverse à quatre fois l'échelle, gousset, file de boulons et symbole de soudure. ${PLANCHE_I.desc}`}
                  viewBox={PLANCHE_I.detailViewBox}
                  legendSuffix={`Détail de la planche ${PLANCHE_I.numeral} — nœud jarret-traverse`}
                >

                  <PlancheIDrawing p="pl1d" />
                </Planche>
              </div>
            )}
          </div>


          <div className="md:col-span-8">
            <h2 className="mat-mention font-subtitle tracking-[0.28em] uppercase mat-ink-2 mb-3">
              {locale === 'fr' ? 'Thèse' : 'Thesis'}
            </h2>
            <p className="font-display text-2xl md:text-3xl leading-snug mat-ink-1">
              {t(venture.missionKey)}
            </p>
            <Rule />
            <h2 className="mat-mention font-subtitle tracking-[0.28em] uppercase mat-ink-2 mb-3">
              {t('portfolio.covers')}
            </h2>
            <ul className="space-y-3">
              {venture.pointsKeys.map((k) => (
                <li key={k} className="flex gap-3 mat-ink-2 font-body">
                  <span className="mt-1" aria-hidden style={{ color: 'hsl(var(--mat-laiton))' }}>-</span>
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </EditorialSection>

      {/* Opérationnel */}
      <EditorialSection className="mat-beton mat-grain mat-coffrage">
        <div className="max-w-3xl">
          <h2 className="mat-mention font-subtitle tracking-[0.28em] uppercase mat-ink-accent mb-4">{locale === 'fr' ? 'Repère opérationnel' : 'Operating note'}</h2>
          <p className="font-display text-xl md:text-2xl mat-ink-1 leading-relaxed">
            {operating}
          </p>
        </div>
      </EditorialSection>

      {/* Navigation entre entités */}
      <section className="mat-gres-2 mat-grain">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to={`/portefeuille/${prev.slug}`}
            className="group border-t pt-4 transition-colors border-[hsl(var(--mat-on-gres-1)/0.25)] hover:border-[hsl(var(--mat-laiton))]"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase mat-ink-2 mb-2">
              {locale === 'fr' ? 'Précédent' : 'Previous'}
            </div>
            <div className="font-heading text-xl mat-ink-1 transition-colors">
              {prev.name}
            </div>
          </Link>
          <Link
            to="/portefeuille"
            className="group border-t pt-4 transition-colors border-[hsl(var(--mat-on-gres-1)/0.25)] hover:border-[hsl(var(--mat-laiton))] md:text-center"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase mat-ink-2 mb-2">
              {locale === 'fr' ? 'Retour' : 'Back'}
            </div>
            <div className="font-heading text-xl mat-ink-1 transition-colors">
              {t('portfolio.title').split(',')[0]}
            </div>
          </Link>
          <Link
            to={`/portefeuille/${next.slug}`}
            className="group border-t pt-4 transition-colors border-[hsl(var(--mat-on-gres-1)/0.25)] hover:border-[hsl(var(--mat-laiton))] md:text-right"
          >
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase mat-ink-2 mb-2">
              {locale === 'fr' ? 'Suivant' : 'Next'}
            </div>
            <div className="font-heading text-xl mat-ink-1 transition-colors">
              {next.name}
            </div>
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default Venture;
