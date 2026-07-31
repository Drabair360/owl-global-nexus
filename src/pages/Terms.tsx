import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const Block = ({ title, body }: { title: string; body: string }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl md:text-2xl text-slate-900 mb-3">{title}</h2>
    <p className="text-slate-700 font-body leading-relaxed">{body}</p>
  </div>
);

const Terms = () => {
  const { t } = useI18n();
  return (
    <PageShell title={t('seo.terms.title')} description={t('seo.terms.desc')} breadcrumbs={[{ name: t('terms.title'), path: '/terms' }]}>
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('terms.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl text-slate-900 mb-6">{t('terms.title')}</h1>
          <p className="text-lg text-slate-700 font-body">{t('terms.intro')}</p>
        </div>
      </section>
      <EditorialSection className="bg-white">
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
