import React from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const LegalBlock = ({ title, body }: { title: string; body: string }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl md:text-2xl mat-ink-1 mb-3">{title}</h2>
    <p className="mat-prose mat-ink-2 mat-tnum">{body}</p>
  </div>
);

const MentionsLegales = () => {
  const { t } = useI18n();
  return (
    <PageShell title={t('seo.legal.title')} description={t('seo.legal.desc')} breadcrumbs={[{ name: t('legal.title'), path: '/mentions-legales' }]}>
      <section className="mat-gres-2 mat-grain py-24 border-b border-[hsl(var(--mat-on-gres-1)/0.22)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mat-folio mat-mention mb-6 mat-ink-2">
            <span className="mat-folio-eyes" aria-hidden="true">
              <i /><span /><i />
            </span>
            <span className="mat-tnum">10</span>
          </p>
          <Eyebrow>{t('legal.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl mat-ink-1">{t('legal.title')}</h1>
        </div>
      </section>
      <EditorialSection className="mat-gres mat-grain">
        <div className="max-w-3xl">
          <LegalBlock title={t('legal.editor.title')} body={t('legal.editor.body')} />
          <LegalBlock title={t('legal.capital.title')} body={t('legal.capital.body')} />
          <LegalBlock title={t('legal.contact.title')} body={t('legal.contact.body')} />
          <LegalBlock title={t('legal.host.title')} body={t('legal.host.body')} />
          <LegalBlock title={t('legal.ip.title')} body={t('legal.ip.body')} />
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default MentionsLegales;
