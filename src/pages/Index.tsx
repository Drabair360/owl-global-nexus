/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Accueil — ALTERNANCE. Béton (hero, citation) / grès (01 modèle, 03) /
   grès-2 (02). Laiton : filets, arête du hero, souligné du lien. Signature
   unique : le seuil typographique en trois temps. */
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


const Index = () => {
  const { t } = useI18n();
  const { step } = useThreshold();


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

      {/* ==================== HERO - encre pur, pure typographie ==================== */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden mat-beton mat-grain mat-coffrage -mt-16 pt-16">
        {/* Filet or vertical, ancre sur la gouttiere du conteneur (>= xl) */}
        <GutterRule />


        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className={`flex items-center gap-4 mb-10 ${step(1)}`}>
            <span className="h-px w-12 bg-gold/70" />
            <p className="text-[11px] md:text-xs font-subtitle tracking-[0.35em] text-gold/90 uppercase">
              {t('home.eyebrow')}
            </p>
          </div>

          <h1
            className={`font-display text-display-xl text-white v3-letterpress mb-10 max-w-5xl ${step(2)}`}
            style={{ textWrap: 'balance', hyphens: 'manual' } as React.CSSProperties}
          >
            {t('home.hero.title')}
          </h1>

          <p className={`text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-body mb-14 ${step(2)}`}>
            {t('home.hero.subtitle')}
          </p>

          <div className={step(3)}>
            <a
              href="#modele"
              className="link-gold inline-flex items-center gap-3 text-white pb-1 text-sm font-subtitle tracking-wider uppercase"
            >
              {t('common.readMore')} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Baseline institutionnelle : filet or + Paris + EST. 2023 */}
        <div className="absolute inset-x-0 bottom-8 z-10 self-end">
          <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-[10px] md:text-xs font-subtitle tracking-[0.35em] text-white/60 uppercase ${step(3)}`}>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gold/60" />
              <span>Paris</span>
            </div>
            <div className="text-white/50">EST. 2023</div>
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
          <p className="text-lg text-slate-600 font-body leading-relaxed max-w-3xl mb-16">
            {t('home.model.body')}
          </p>

          <ol className="relative border-l border-slate-200 md:border-l-0 md:grid md:grid-cols-5 md:gap-6 md:border-t md:pt-10 md:border-slate-200 space-y-8 md:space-y-0 pl-6 md:pl-0">
            {[
              t('home.model.node.cao'),
              t('home.model.node.line'),
              t('home.model.node.drabair'),
              t('home.model.node.ore'),
              t('home.model.node.holding'),
            ].map((node, i) => (
              <li key={i} className="relative">
                <div className="hidden md:flex absolute -top-[38px] left-0 w-8 h-8 rounded-full border-2 border-amber-400 bg-white items-center justify-center text-xs font-brand text-primary">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="md:hidden absolute -left-9 top-0 w-6 h-6 rounded-full border-2 border-amber-400 bg-white flex items-center justify-center text-[10px] font-brand text-primary">
                  {i + 1}
                </div>
                <p className="text-sm md:text-base text-slate-800 font-body leading-relaxed">{node}</p>
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
          <p className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl mb-16">
            {t('home.milestones.body')}
          </p>

          <ol className="relative border-l-2 border-amber-400/40 pl-8 space-y-10 max-w-3xl">
            {[
              { year: '2023', body: t('home.milestones.2023') },
              { year: '2026', body: t('home.milestones.2026a') },
              { year: '2026', body: t('home.milestones.2026b') },
              { year: '2026', body: t('home.milestones.2026c') },
              { year: '-', body: t('home.milestones.next'), muted: true },
            ].map((m, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-2 border-amber-400" />
                <Reveal delay={i * 60}>
                  <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-2">{m.year}</div>
                  <p className={`text-base md:text-lg font-body leading-relaxed ${m.muted ? 'text-slate-600' : 'text-slate-800'}`}>
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
              className="group border border-slate-200 hover:border-primary/40 rounded-sm p-10 transition-colors bg-slate-50/40 block h-full"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-slate-900 mb-4">{t('home.poles.operational.title')}</h3>
              <p className="text-slate-600 font-body leading-relaxed mb-8">{t('home.poles.operational.body')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase text-primary group-hover:gap-3 transition-all">
                {t('home.poles.cta1')} <ArrowRight size={16} />
              </span>
            </Link>
            </Reveal>

            <Reveal delay={120}>
            <Link
              to="/metiers"
              onClick={() => window.scrollTo(0, 0)}
              className="group border border-slate-200 hover:border-primary/40 rounded-sm p-10 transition-colors bg-slate-50/40 block h-full"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-slate-900 mb-4">{t('home.poles.patrimonial.title')}</h3>
              <p className="text-slate-600 font-body leading-relaxed mb-8">{t('home.poles.patrimonial.body')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase text-primary group-hover:gap-3 transition-all">
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
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] italic text-white v3-letterpress">
            {t('home.quote')}
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default Index;
