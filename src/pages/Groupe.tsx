import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialTitle, EditorialSection, Rule } from '@/components/editorial';
import StickyChapter from '@/components/StickyChapter';
import Duotone from '@/components/Duotone';
import PolesViz from '@/components/PolesViz';
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
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('groupe.eyebrow')}</Eyebrow>
          <SplitText
            as="h1"
            text={t('groupe.title')}
            className="font-display text-hero text-slate-900 mb-8"
            stagger={55}
          />
          <p className="text-lg md:text-xl text-slate-700 font-body leading-relaxed max-w-3xl">
            {t('groupe.intro')}
          </p>
        </div>
      </section>


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

      {/* Organigramme */}
      <EditorialSection className="bg-slate-50">
        <h2 className="font-heading text-3xl md:text-4xl text-slate-900 mb-12 text-center">{t('groupe.orga.title')}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block border-2 border-primary px-8 py-4 bg-white">
              <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-1">Holding</div>
              <div className="font-heading text-xl text-slate-900">{t('groupe.orga.holding')}</div>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-slate-300" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-300 p-6 bg-white">
              <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-3">01</div>
              <div className="font-heading text-lg text-slate-900 mb-4">{t('groupe.orga.op')}</div>
              <ul className="space-y-1 text-sm text-slate-700 font-body">
                <li>CAO Industries</li>
                <li>Drabair Labs</li>
                <li>Line Builder</li>
                <li>Weavme</li>
              </ul>
            </div>
            <div className="border border-slate-300 p-6 bg-white">
              <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-3">02</div>
              <div className="font-heading text-lg text-slate-900 mb-4">{t('groupe.orga.pat')}</div>
              <ul className="space-y-1 text-sm text-slate-700 font-body">
                <li>Owl Real Estate</li>
              </ul>
            </div>
          </div>
        </div>
      </EditorialSection>

      {/* Lettre du Président */}
      <EditorialSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>{t('groupe.ceo.eyebrow')}</Eyebrow>
          <div className="flex items-center gap-6 mb-8">
            <img
              src="/lovable-uploads/8b56d712-9028-4dab-a685-1b13bec3e715.png"
              alt="Arthur Draber, Président d'Owl International"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-slate-200"
            />
            <div>
              <div className="font-heading text-2xl text-slate-900">{t('groupe.ceo.name')}</div>
              <div className="text-sm text-slate-500 font-subtitle tracking-wider uppercase mt-1">
                {t('groupe.ceo.role')}
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-700 font-body leading-relaxed italic">« {t('groupe.ceo.body')} »</p>
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default Groupe;
