import React, { useState } from 'react';
import { z } from 'zod';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useI18n } from '@/lib/i18n';
import CinemaBand from '@/components/CinemaBand';

const Scouts = () => {
  const { t, locale } = useI18n();
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    country: '',
    domain: '',
    message: '',
    consent: false,
  });
  // Honeypot : champ invisible des humains, souvent rempli par les robots.
  const [website, setWebsite] = useState('');
  // Horodatage d'ouverture : un envoi en moins de 3 s n'est pas humain.
  const [openedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    full_name: z.string().trim().min(1, t('scouts.form.required')).max(200),
    email: z.string().trim().email(t('scouts.form.invalidEmail')).max(320),
    phone: z.string().trim().max(50).optional(),
    country: z.string().trim().max(120).optional(),
    domain: z.enum(['industrial', 'realestate', 'software', 'other'], {
      errorMap: () => ({ message: t('scouts.form.required') }),
    }),
    message: z.string().trim().min(1, t('scouts.form.required')).max(5000),
    consent: z.literal(true, {
      errorMap: () => ({ message: t('scouts.form.consentRequired') }),
    }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setErrors({});
    // Anti-abus silencieux : honeypot rempli ou envoi trop rapide.
    if (website.trim() !== '' || Date.now() - openedAt < 3000) {
      setStatus('success');
      return;
    }
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.errors.forEach((er) => {
        if (er.path[0]) errs[er.path[0].toString()] = er.message;
      });
      setErrors(errs);
      return;
    }
    setStatus('sending');
    const { error } = await supabase.from('scout_applications').insert({
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      country: parsed.data.country || null,
      domain: parsed.data.domain,
      message: parsed.data.message,
      consent: true,
      locale,
    });
    if (error) {
      // 23505 = contrainte d'unicité sur l'email. Réponse neutre, identique au succès :
      // le site ne doit jamais révéler qu'une adresse est déjà en base (oracle d'énumération).
      if (error.code === '23505') {
        setStatus('success');
        setForm({ full_name: '', email: '', phone: '', country: '', domain: '', message: '', consent: false });
        return;
      }
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', country: '', domain: '', message: '', consent: false });
    }
  };


  return (
    <PageShell
      title={t('seo.scouts.title')}
      description={t('seo.scouts.desc')}
      keywords="Owl Scouts, apporteur d’affaires, deal sourcing, France Afrique, projets industriels, immobilier, logiciel"
      breadcrumbs={[{ name: t('scouts.title'), path: '/scouts' }]}
    >

      {/* Hero */}
      <InstitutionalHero
        eyebrow={t('scouts.eyebrow')}
        title={t('scouts.title')}
        subtitle={t('scouts.subtitle')}
      />

      <CinemaBand texture="terrain" tone="prestige" objectPosition="20% 50%" />

      {/* Comment ça marche */}
      <EditorialSection className="mat-gres mat-grain">
        <h2 className="font-heading text-3xl md:text-4xl mat-ink-1 mb-16">{t('scouts.how.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {['01', '02', '03'].map((n) => (
            <div key={n}>
              <div className="font-brand text-5xl text-gold-num mb-4">{n}</div>
              <h3 className="font-heading text-xl mat-ink-1 mb-3">{t(`scouts.how.${n}.t`)}</h3>
              <p className="mat-ink-2 font-body leading-relaxed">{t(`scouts.how.${n}.b`)}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* Encadré honnêteté */}
      <section className="py-16 mat-gres-2 mat-grain border-y border-[hsl(var(--mat-on-gres-1)/0.22)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-amber-400 pl-6 py-2">
            <div className="text-xs font-subtitle tracking-widest uppercase mat-ink-accent mb-2">
              {t('scouts.honest.title')}
            </div>
            <p className="mat-ink-2 font-body leading-relaxed">{t('scouts.honest.body')}</p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <EditorialSection className="mat-gres mat-grain" id="rejoindre">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl mat-ink-1 mb-10">{t('scouts.form.title')}</h2>

          {status === 'success' ? (
            <div className="border-t-2 border-emerald-600 bg-emerald-50/60 p-8">
              <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-emerald-700 mb-3">
                {locale === 'fr' ? 'Confirmation' : 'Confirmation'}
              </div>
              <h3 className="font-heading text-2xl mat-ink-1 mb-3">{t('scouts.form.successTitle')}</h3>
              <p className="mat-ink-2 font-body leading-relaxed mb-6">{t('scouts.form.successBody')}</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-sm font-subtitle tracking-[0.2em] uppercase text-emerald-700 hover:text-emerald-900 border-b border-emerald-600/40 hover:border-emerald-800 pb-1 transition-colors"
              >
                {t('scouts.form.successAgain')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative" noValidate aria-busy={status === 'sending'}>
              <fieldset disabled={status === 'sending'} className="space-y-6 disabled:opacity-70">
              <div>
                <Label htmlFor="full_name">{t('scouts.form.name')} *</Label>
                <Input
                  id="full_name"
                  name="full_name"
                  autoComplete="name"
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  className="mt-2 mat-gres mat-grain"
                  maxLength={200}
                  aria-invalid={!!errors.full_name}
                  required
                />
                {errors.full_name && <p className="text-xs text-destructive mt-1">{errors.full_name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">{t('scouts.form.email')} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 mat-gres mat-grain"
                    maxLength={320}
                    aria-invalid={!!errors.email}
                    required
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">{t('scouts.form.phone')}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 mat-gres mat-grain"
                    maxLength={50}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="country">{t('scouts.form.country')}</Label>
                <Input
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="mt-2 mat-gres mat-grain"
                  maxLength={120}
                />
              </div>

              <div>
                <Label htmlFor="domain">{t('scouts.form.domain')} *</Label>
                <select
                  id="domain"
                  value={form.domain}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  className="mt-2 flex h-10 w-full rounded-md border border-input mat-gres mat-grain px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={!!errors.domain}
                  required
                >
                  <option value="">-</option>
                  <option value="industrial">{t('scouts.form.domain.industrial')}</option>
                  <option value="realestate">{t('scouts.form.domain.realestate')}</option>
                  <option value="software">{t('scouts.form.domain.software')}</option>
                  <option value="other">{t('scouts.form.domain.other')}</option>
                </select>
                {errors.domain && <p className="text-xs text-destructive mt-1">{errors.domain}</p>}
              </div>

              <div>
                <Label htmlFor="message">{t('scouts.form.message')} *</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 mat-gres mat-grain"
                  rows={5}
                  maxLength={5000}
                  aria-invalid={!!errors.message}
                  required
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              {/* Honeypot anti-robot : hors flux, hors tabulation, ignoré des lecteurs d'écran. */}
              <div aria-hidden="true" className="absolute w-px h-px -left-[9999px] overflow-hidden">
                <label htmlFor="website">Ne pas remplir</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="flex items-start gap-3">
                {/* Cible tactile >= 24x24 px (WCAG 2.5.8) : boîte de 16px centrée dans 24px. */}
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center">
                  <Checkbox
                    id="consent"
                    checked={form.consent}
                    onCheckedChange={(v) => setForm({ ...form, consent: !!v })}
                    required
                    aria-labelledby="consent-label"
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    aria-invalid={!!errors.consent}
                  />
                </span>
                <Label
                  id="consent-label"
                  htmlFor="consent"
                  className="text-sm mat-ink-2 font-body font-normal cursor-pointer leading-relaxed py-1"
                >
                  {t('scouts.form.consent')}
                </Label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="text-xs text-destructive">
                  {errors.consent}
                </p>
              )}




              {status === 'error' && (
                <div
                  role="alert"
                  className="border-t-2 border-destructive bg-destructive/5 p-5"
                >
                  <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-destructive mb-2">
                    {t('scouts.form.errorTitle')}
                  </div>
                  <p className="text-sm mat-ink-2 font-body mb-3">{t('scouts.form.error')}</p>
                  <a
                    href="mailto:contact@internationalowl.com"
                    className="text-xs font-subtitle tracking-[0.2em] uppercase text-destructive hover:text-destructive/80 border-b border-destructive/40 pb-1"
                  >
                    {t('scouts.form.writeUs')} -&gt;
                  </a>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === 'sending'}
                className="w-full relative"
              >
                {status === 'sending' ? (
                  <span className="inline-flex items-center gap-3">
                    <span
                      aria-hidden
                      className="inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"
                    />
                    {t('scouts.form.sending')}
                  </span>
                ) : (
                  t('scouts.form.submit')
                )}
              </Button>
              </fieldset>
            </form>
          )}
        </div>
      </EditorialSection>

    </PageShell>
  );
};

export default Scouts;
