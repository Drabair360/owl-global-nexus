import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

const Rejoindre = () => {
  const { t } = useI18n();
  return (
    <PageShell
      title={t('seo.rejoindre.title')}
      description={t('seo.rejoindre.desc')}
      keywords="carrières Owl International, rejoindre, candidatures, emploi holding, Paris"
      breadcrumbs={[{ name: t('rejoindre.title'), path: '/rejoindre' }]}
    >

      <InstitutionalHero
        eyebrow={t('rejoindre.eyebrow')}
        title={t('rejoindre.title')}
        subtitle={t('rejoindre.body')}
      >
        <Button asChild size="lg" variant="secondary">
          <a href="mailto:contact@internationalowl.com?subject=Candidature%20spontan%C3%A9e%20-%20Owl%20International">
            {t('rejoindre.contact.cta')}
          </a>
        </Button>
      </InstitutionalHero>

      <EditorialSection className="mat-gres mat-grain">
        <h2 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-10">{t('rejoindre.culture.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
          {['rejoindre.culture.1', 'rejoindre.culture.2', 'rejoindre.culture.3', 'rejoindre.culture.4'].map((k) => (
            <p key={k} className="mat-ink-2 font-body leading-relaxed border-l-2 border-amber-400 pl-4">
              {t(k)}
            </p>
          ))}
        </div>
      </EditorialSection>

      <section className="py-16 mat-gres-2 mat-grain border-t border-[hsl(var(--mat-on-gres-1)/0.22)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="mat-ink-2 font-body">{t('rejoindre.scouts')}</p>
          <Link
            to="/scouts"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-sm font-subtitle tracking-wider uppercase mat-ink-accent hover:gap-3 transition-all border-b border-[hsl(var(--mat-laiton))] pb-1"
          >
            {t('rejoindre.scouts.cta')} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default Rejoindre;
