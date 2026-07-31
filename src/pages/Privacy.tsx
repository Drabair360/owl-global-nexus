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

const Privacy = () => {
  const { t } = useI18n();
  return (
    <PageShell title={t('seo.privacy.title')} description={t('seo.privacy.desc')} breadcrumbs={[{ name: t('privacy.title'), path: '/privacy' }]}>
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('privacy.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl text-slate-900 mb-6">{t('privacy.title')}</h1>
          <p className="text-lg text-slate-700 font-body">{t('privacy.intro')}</p>
        </div>
      </section>
      <EditorialSection className="bg-white">
        <div className="max-w-3xl">
          <Block title={t('privacy.tracking.title')} body={t('privacy.tracking.body')} />
          <Block title={t('privacy.data.title')} body={t('privacy.data.body')} />
          <Block title={t('privacy.purpose.title')} body={t('privacy.purpose.body')} />
          <Block title={t('privacy.basis.title')} body={t('privacy.basis.body')} />
          <Block title={t('privacy.storage.title')} body={t('privacy.storage.body')} />
          <Block title={t('privacy.share.title')} body={t('privacy.share.body')} />
          <Block title={t('privacy.transfers.title')} body={t('privacy.transfers.body')} />
          <Block title={t('privacy.local.title')} body={t('privacy.local.body')} />
          <Block title={t('privacy.rights.title')} body={t('privacy.rights.body')} />
          <Block title={t('privacy.update.title')} body={t('privacy.update.body')} />
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default Privacy;
