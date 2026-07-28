import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

const Rejoindre = () => {
  const { t } = useI18n();
  return (
    <PageShell
      title={`${t('rejoindre.title')} - Owl International | Carrières et candidatures`}
      description="Rejoindre Owl International : opportunités de carrière, candidatures spontanées et partenariats professionnels au sein d’une holding intégrée France-Afrique."
      keywords="carrières Owl International, rejoindre, candidatures, emploi holding, Paris"
      breadcrumbs={[{ name: t('rejoindre.title'), path: '/rejoindre' }]}
    >

      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('rejoindre.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900 mb-8">
            {t('rejoindre.title')}
          </h1>
          <p className="text-lg text-slate-700 font-body leading-relaxed">{t('rejoindre.body')}</p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="mailto:contact@internationalowl.com?subject=Candidature%20spontan%C3%A9e%20%E2%80%94%20Owl%20International">
                {t('rejoindre.contact.cta')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <EditorialSection className="bg-white">
        <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-10">{t('rejoindre.culture.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
          {['rejoindre.culture.1', 'rejoindre.culture.2', 'rejoindre.culture.3', 'rejoindre.culture.4'].map((k) => (
            <p key={k} className="text-slate-700 font-body leading-relaxed border-l-2 border-amber-400 pl-4">
              {t(k)}
            </p>
          ))}
        </div>
      </EditorialSection>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-slate-700 font-body">{t('rejoindre.scouts')}</p>
          <Link
            to="/scouts"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase text-primary hover:gap-3 transition-all border-b border-primary/40 pb-1"
          >
            {t('rejoindre.scouts.cta')} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default Rejoindre;
