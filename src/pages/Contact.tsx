/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Contact — béton (hero), bande `corridor` ton encre, grès pour le corps,
   plaques de grès-2 pour les champs. Aucune signature animée. */
import React from 'react';
import Vignette from '@/components/gravure/Vignette';
import { ArrowRight, Mail } from 'lucide-react';
import PageShell from '@/components/PageShell';
import { SITE_URL } from '@/config/site';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';

const Contact = () => {
  const { t } = useI18n();
  const doors = [
    {
      tKey: 'contact.bank.t',
      bKey: 'contact.bank.b',
      ctaKey: 'contact.bank.cta',
      subject: 'Contact - Partenaires bancaires et notariaux',
    },
    {
      tKey: 'contact.client.t',
      bKey: 'contact.client.b',
      ctaKey: 'contact.client.cta',
      subject: 'Contact - Clients industriels',
    },
    {
      tKey: 'contact.partner.t',
      bKey: 'contact.partner.b',
      ctaKey: 'contact.partner.cta',
      subject: 'Contact - Partenariats et opportunités',
    },
  ];
  return (
    <PageShell
      title={t('seo.contact.title')}
      description={t('seo.contact.desc')}
      keywords="contact Owl International, holding Paris, partenaires bancaires, notaires, clients industriels"
      breadcrumbs={[{ name: t('contact.title'), path: '/contact' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: t('contact.title'),
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      }}
    >

      <InstitutionalHero
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.intro')}
      />


      <EditorialSection className="mat-gres mat-grain">
        <div className="mb-8"><Vignette id="contact" size={40} /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doors.map((d, i) => (
            <a
              key={i}
              href={`mailto:contact@internationalowl.com?subject=${encodeURIComponent(d.subject)}`}
              className="group border border-[hsl(var(--mat-on-gres-1)/0.22)] hover:border-[hsl(var(--mat-laiton))] p-8 transition-colors mat-gres mat-grain"
            >
              <Mail className="w-5 h-5 text-[hsl(var(--mat-laiton))] mb-4" />
              <h2 className="font-heading text-xl mat-ink-1 mb-3">{t(d.tKey)}</h2>
              <p className="mat-ink-2 font-body leading-relaxed text-sm mb-6">{t(d.bKey)}</p>
              <span className="inline-flex items-center gap-2 text-xs font-subtitle tracking-widest uppercase mat-ink-accent group-hover:gap-3 transition-all">
                {t(d.ctaKey)} <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm mat-ink-2 font-body">{t('contact.partner.link')}</p>
      </EditorialSection>

      <section className="py-16 mat-gres-2 mat-grain border-t border-[hsl(var(--mat-on-gres-1)/0.22)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-subtitle tracking-widest uppercase mat-ink-accent/70 mb-3">
            {t('contact.address.title')}
          </div>
          <p className="text-lg mat-ink-1 font-body">{t('contact.address.body')}</p>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
