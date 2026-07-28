import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const LegalBlock = ({ title, body }: { title: string; body: string }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl md:text-2xl text-slate-900 mb-3">{title}</h2>
    <p className="text-slate-700 font-body leading-relaxed">{body}</p>
  </div>
);

const MentionsLegales = () => {
  const { t } = useI18n();
  return (
    <PageShell title={`${t('legal.title')} - Owl International`} description="Mentions légales d’Owl International SAS, holding basée à Paris. Éditeur, hébergeur, propriété intellectuelle." breadcrumbs={[{ name: t('legal.title'), path: '/mentions-legales' }]}>
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('legal.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl text-slate-900">{t('legal.title')}</h1>
        </div>
      </section>
      <EditorialSection className="bg-white">
        <div className="max-w-3xl">
          <LegalBlock title={t('legal.editor.title')} body={t('legal.editor.body')} />
          <LegalBlock title={t('legal.contact.title')} body={t('legal.contact.body')} />
          <LegalBlock title={t('legal.host.title')} body={t('legal.host.body')} />
          <LegalBlock title={t('legal.ip.title')} body={t('legal.ip.body')} />
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default MentionsLegales;
