import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const Block = ({ title, body }: { title: string; body: string }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl md:text-2xl mat-ink-1 mb-3">{title}</h2>
    <p className="mat-prose mat-ink-2 mat-tnum">{body}</p>
  </div>
);

const Terms = () => {
  const { t } = useI18n();
  return (
    <PageShell title={t('seo.terms.title')} description={t('seo.terms.desc')} breadcrumbs={[{ name: t('terms.title'), path: '/terms' }]}>
      <section className="mat-gres-2 mat-grain py-24 border-b border-[hsl(var(--mat-on-gres-1)/0.22)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mat-folio mat-mention mb-6 mat-ink-2">
            <span className="mat-folio-eyes" aria-hidden="true">
              <i /><span /><i />
            </span>
            <span className="mat-tnum">12</span>
          </p>
          <Eyebrow>{t('terms.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl mat-ink-1 mb-6">{t('terms.title')}</h1>
          <p className="mat-prose mat-ink-2 mat-tnum">{t('terms.intro')}</p>
        </div>
      </section>
      <EditorialSection className="mat-gres mat-grain">
        <div className="max-w-3xl">
          <Block title={t('terms.object.title')} body={t('terms.object.body')} />
          <Block title={t('terms.responsibility.title')} body={t('terms.responsibility.body')} />
          <Block title={t('terms.law.title')} body={t('terms.law.body')} />
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default Terms;
