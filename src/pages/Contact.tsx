import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const Contact = () => {
  const { t } = useI18n();
  const doors = [
    {
      tKey: 'contact.bank.t',
      bKey: 'contact.bank.b',
      ctaKey: 'contact.bank.cta',
      subject: 'Contact — Partenaires bancaires et notariaux',
    },
    {
      tKey: 'contact.client.t',
      bKey: 'contact.client.b',
      ctaKey: 'contact.client.cta',
      subject: 'Contact — Clients industriels',
    },
    {
      tKey: 'contact.partner.t',
      bKey: 'contact.partner.b',
      ctaKey: 'contact.partner.cta',
      subject: 'Contact — Partenariats et opportunités',
    },
  ];
  return (
    <PageShell
      title={`${t('contact.title')} — Owl International`}
      description={t('contact.intro')}
    >
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('contact.eyebrow')}</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-slate-700 font-body">{t('contact.intro')}</p>
        </div>
      </section>

      <EditorialSection className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doors.map((d, i) => (
            <a
              key={i}
              href={`mailto:contact@internationalowl.com?subject=${encodeURIComponent(d.subject)}`}
              className="group border border-slate-200 hover:border-primary/40 p-8 transition-colors bg-white"
            >
              <Mail className="w-5 h-5 text-amber-500 mb-4" />
              <h2 className="font-heading text-xl text-slate-900 mb-3">{t(d.tKey)}</h2>
              <p className="text-slate-600 font-body leading-relaxed text-sm mb-6">{t(d.bKey)}</p>
              <span className="inline-flex items-center gap-2 text-xs font-subtitle tracking-widest uppercase text-primary group-hover:gap-3 transition-all">
                {t(d.ctaKey)} <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500 font-body">{t('contact.partner.link')}</p>
      </EditorialSection>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-subtitle tracking-widest uppercase text-primary/70 mb-3">
            {t('contact.address.title')}
          </div>
          <p className="text-lg text-slate-800 font-body">{t('contact.address.body')}</p>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
