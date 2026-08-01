/* PARTITION §4 — Matière v3 (gel du 01/08/2026), amendée LOT Z1.
   Accueil — ALTERNANCE. Béton (hero, citation) / grès (01 modèle, 03) /
   grès-2 (02). Laiton : filets, arête du hero, souligné du lien. Signature
   unique : le seuil typographique en trois temps.

   FOLIO — l'accueil porte le folio 00 : elle ouvre la série sans en faire
   partie (Groupe 01 … Contact 06). Consigné dans src/config/folios.ts.

   DIAGNOSTIC Z1 — pourquoi la migration G2.1 n'a pas tenu ici :
   l'accueil est la SEULE route qui n'utilise pas <InstitutionalHero />.
   Son hero est écrit à la main dans ce fichier (pour porter le seuil
   typographique en trois temps de useThreshold). Toutes les corrections
   G2.x ont été portées dans le composant partagé ; l'accueil, hors du
   composant, n'a rien reçu - d'où text-display-xl/text-white/Inter face à
   text-hero/mat-ink-1/EB Garamond partout ailleurs. Correctif : le hero de
   l'accueil reste local (le seuil l'exige) mais adopte strictement les
   mêmes classes de système que le composant partagé. Toute évolution du
   hero doit désormais être appliquée aux DEUX endroits. */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import PolesViz from '@/components/PolesViz';
import { SectionNumber, EditorialTitle, SectionWatermark } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import CinemaBand from '@/components/CinemaBand';
import GutterRule from '@/components/GutterRule';

import { useThreshold } from '@/hooks/useThreshold';
import { SITE_URL } from '@/config/site';
import { folioFor } from '@/config/folios';


const Index = () => {
  const { t } = useI18n();
  const { step } = useThreshold();
  const folio = folioFor('/');


  return (
    <PageShell
      title={t('seo.home.title')}
      description={t('seo.home.desc')}
      keywords="Owl International, holding Paris, investissement France Afrique, EPC industriel, logiciel propriétaire, immobilier patrimonial, Arthur Draber, groupe intégré"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Owl International',
        legalName: 'OWL INTERNATIONAL',
        url: SITE_URL,
        areaServed: ['FR', 'EU', 'Africa'],
        knowsAbout: [
          'Holding d’investissement',
          'Ingénierie industrielle EPC',
          'Édition de logiciels propriétaires',
          'Immobilier patrimonial',
        ],
      }}

    >

      {/* ==================== HERO — béton coffré v3, dans le bâtiment ==================== */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden mat-beton mat-grain mat-coffrage -mt-16 pt-16">
        {/* Filet or vertical, ancre sur la gouttiere du conteneur (>= xl) */}
        <GutterRule />


        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          {folio && (
            <p className={`mat-folio mat-mention mb-8 mat-ink-2 ${step(1)}`}>
              <span className="mat-folio-eyes" aria-hidden="true">
                <i /><span /><i />
              </span>
              <span className="mat-tnum">{folio}</span>
            </p>
          )}

          {/* Signature M7 n°3 : une seule arête, sur le bloc d'affirmation */}
          <div className="mat-arete pl-5 md:pl-7">
            <div className={`flex items-center gap-4 mb-10 ${step(1)}`}>
              <span className="h-px w-12" style={{ background: 'hsl(var(--mat-laiton-lit))' }} />
              <p className="mat-mention font-subtitle tracking-[0.35em] uppercase mat-ink-accent">
                {t('home.eyebrow')}
              </p>
            </div>

            <h1
              className={`font-heading text-hero-accueil mat-ink-1 mb-10 max-w-5xl ${step(2)}`}
              style={{ textWrap: 'balance', hyphens: 'manual' } as React.CSSProperties}
            >
              {t('home.hero.title')}
            </h1>

            <p className={`mat-prose mat-ink-2 max-w-2xl mb-14 ${step(2)}`}>
              {t('home.hero.subtitle')}
            </p>
          </div>

          <div className={step(3)}>
            <a
              href="#modele"
              className="link-gold inline-flex items-center gap-3 mat-ink-1 pb-1 text-sm font-subtitle tracking-wider uppercase"
            >
              {t('common.readMore')} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Signature M7 n°2 : le cachet scelle le bloc d'autorité */}
        <div className="absolute inset-x-0 bottom-6 z-10 self-end">
          <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${step(3)}`}>
            <div className="mat-cachet font-subtitle">
              <span className="mat-cachet-seal">Registre Owl</span>
              <span className="mat-ink-2 mat-cachet-ligne">Paris</span>
              <span className="mat-ink-2 mat-cachet-ligne xl:ml-auto mat-tnum">EST. 2023</span>
            </div>
          </div>
        </div>

      </section>



      {/* ==================== 01 - LE MODÈLE ==================== */}
      <section id="modele" className="relative mat-gres overflow-hidden mat-grain">
        <CinemaBand texture="prestigeWide" tone="laiton" eager className="mb-16 md:mb-24" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
          <SectionWatermark n={t('home.model.number')} />
          <SectionNumber n={t('home.model.number')} label={t('home.model.section')} />
          <EditorialTitle className="mb-8 max-w-3xl">{t('home.model.title')}</EditorialTitle>
          <p className="mat-prose mat-ink-2 max-w-3xl mb-16">
            {t('home.model.body')}
          </p>

          <ol
            className="relative border-l md:border-l-0 md:grid md:grid-cols-5 md:gap-6 md:border-t md:pt-10 space-y-8 md:space-y-0 pl-6 md:pl-0"
            style={{ borderColor: 'hsl(var(--mat-on-gres-1) / 0.22)' }}
          >
            {[
              t('home.model.node.cao'),
              t('home.model.node.line'),
              t('home.model.node.drabair'),
              t('home.model.node.ore'),
              t('home.model.node.holding'),
            ].map((node, i) => (
              <li key={i} className="relative">
                <div
                  className="hidden md:flex absolute -top-[38px] left-0 w-8 h-8 rounded-full items-center justify-center mat-mention font-brand mat-ink-1 mat-tnum"
                  style={{ border: '1px solid hsl(var(--mat-laiton))', background: 'hsl(var(--mat-gres))' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="md:hidden absolute -left-9 top-0 w-6 h-6 rounded-full flex items-center justify-center mat-plancher font-brand mat-ink-1 mat-tnum"
                  style={{ border: '1px solid hsl(var(--mat-laiton))', background: 'hsl(var(--mat-gres))' }}
                >
                  {i + 1}
                </div>
                <p className="mat-prose mat-ink-1 text-[0.95rem] md:text-base">{node}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== 02 - JALONS ==================== */}
      <section className="relative py-24 md:py-32 mat-gres-2 overflow-hidden mat-grain">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWatermark n={t('home.milestones.number')} />
          <SectionNumber n={t('home.milestones.number')} label={t('home.milestones.section')} />
          <EditorialTitle className="mb-6 max-w-3xl">{t('home.milestones.title')}</EditorialTitle>
          <p className="mat-prose mat-ink-2 max-w-2xl mb-16">
            {t('home.milestones.body')}
          </p>

          {/* Z10a : une seule chronologie sur tout le site — 2023 / 2024 / 2026 / à venir */}
          <ol
            className="relative border-l-2 pl-8 space-y-10 max-w-3xl"
            style={{ borderColor: 'hsl(var(--mat-laiton) / 0.45)' }}
          >
            {[
              { year: '2023', body: t('home.milestones.2023') },
              { year: '2024', body: t('home.milestones.2024') },
              { year: '2026', body: t('home.milestones.2026a') },
              { year: '2026', body: t('home.milestones.2026b') },
              { year: '2026', body: t('home.milestones.2026c') },
              { year: '-', body: t('home.milestones.next'), muted: true },
            ].map((m, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[41px] top-1 w-4 h-4 rounded-full"
                  style={{ background: 'hsl(var(--mat-gres))', border: '2px solid hsl(var(--mat-laiton))' }}
                />
                <Reveal delay={i * 60}>
                  <div className="mat-mention font-subtitle tracking-widest uppercase mat-ink-accent mb-2 mat-tnum">
                    {m.year}
                  </div>
                  <p className={`mat-prose ${m.muted ? 'mat-ink-2' : 'mat-ink-1'}`}>
                    {m.body}
                  </p>
                </Reveal>
              </li>

            ))}
          </ol>
        </div>
      </section>

      {/* ==================== 03 - DEUX PÔLES ==================== */}
      <section className="relative py-24 md:py-32 mat-gres overflow-hidden mat-grain">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWatermark n={t('home.poles.number')} />
          <SectionNumber n={t('home.poles.number')} label={t('home.poles.section')} />

          <div className="mb-16">
            <PolesViz />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Reveal>
            <Link
              to="/portefeuille"
              onClick={() => window.scrollTo(0, 0)}
              className="group mat-carte mat-serti p-10 block h-full"
            >
              <h3 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-4">{t('home.poles.operational.title')}</h3>
              <p className="mat-prose mat-ink-2 mb-8">{t('home.poles.operational.body')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase mat-ink-accent group-hover:gap-3 transition-all">
                {t('home.poles.cta1')} <ArrowRight size={16} />
              </span>
            </Link>
            </Reveal>

            <Reveal delay={120}>
            <Link
              to="/metiers"
              onClick={() => window.scrollTo(0, 0)}
              className="group mat-carte mat-serti p-10 block h-full"
            >
              <h3 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-4">{t('home.poles.patrimonial.title')}</h3>
              <p className="mat-prose mat-ink-2 mb-8">{t('home.poles.patrimonial.body')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase mat-ink-accent group-hover:gap-3 transition-all">
                {t('home.poles.cta2')} <ArrowRight size={16} />
              </span>
            </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== CITATION ==================== */}
      <section className="py-28 md:py-36 mat-beton mat-grain mat-coffrage relative overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rule-gold mx-auto mb-10" />
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] mat-ink-1">
            {t('home.quote')}
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default Index;
