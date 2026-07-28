import React, { useState } from 'react';
import { z } from 'zod';
import PageShell from '@/components/PageShell';
import { Eyebrow, EditorialSection } from '@/components/editorial';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useI18n } from '@/lib/i18n';

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
    setErrors({});
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
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', country: '', domain: '', message: '', consent: false });
    }
  };

  return (
    <PageShell
      title={`${t('scouts.title')} - Owl Scouts | Programme de repérage Owl International`}
      description="Le programme Owl Scouts : détectez, en Europe et en Afrique, les projets industriels, immobiliers et logiciels qui rejoindront le portefeuille d’Owl International."
      keywords="Owl Scouts, apporteur d’affaires, deal sourcing, France Afrique, projets industriels, immobilier, logiciel"
      breadcrumbs={[{ name: t('scouts.title'), path: '/scouts' }]}
    >

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.08),transparent_55%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-subtitle tracking-[0.3em] text-amber-300/90 uppercase mb-6">
            {t('scouts.eyebrow')}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            {t('scouts.title')}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-body leading-relaxed max-w-3xl">
            {t('scouts.subtitle')}
          </p>
        </div>
      </section>

      {/* Comment ça marche */}
      <EditorialSection className="bg-white">
        <h2 className="font-heading text-3xl md:text-4xl text-slate-900 mb-16">{t('scouts.how.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {['01', '02', '03'].map((n) => (
            <div key={n}>
              <div className="font-brand text-5xl text-amber-400 mb-4">{n}</div>
              <h3 className="font-heading text-xl text-slate-900 mb-3">{t(`scouts.how.${n}.t`)}</h3>
              <p className="text-slate-600 font-body leading-relaxed">{t(`scouts.how.${n}.b`)}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* Encadré honnêteté */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-amber-400 pl-6 py-2">
            <div className="text-xs font-subtitle tracking-widest uppercase text-primary mb-2">
              {t('scouts.honest.title')}
            </div>
            <p className="text-slate-700 font-body leading-relaxed italic">{t('scouts.honest.body')}</p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <EditorialSection className="bg-white" id="rejoindre">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-slate-900 mb-10">{t('scouts.form.title')}</h2>

          {status === 'success' ? (
            <div className="border border-emerald-200 bg-emerald-50 p-8 text-center">
              <p className="text-emerald-900 font-body text-lg">{t('scouts.form.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <Label htmlFor="full_name">{t('scouts.form.name')} *</Label>
                <Input
                  id="full_name"
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  className="mt-2 bg-white"
                  maxLength={200}
                  required
                />
                {errors.full_name && <p className="text-xs text-destructive mt-1">{errors.full_name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">{t('scouts.form.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 bg-white"
                    maxLength={320}
                    required
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">{t('scouts.form.phone')}</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 bg-white"
                    maxLength={50}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="country">{t('scouts.form.country')}</Label>
                <Input
                  id="country"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="mt-2 bg-white"
                  maxLength={120}
                />
              </div>

              <div>
                <Label htmlFor="domain">{t('scouts.form.domain')} *</Label>
                <select
                  id="domain"
                  value={form.domain}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                  className="mt-2 bg-white"
                  rows={5}
                  maxLength={5000}
                  required
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={form.consent}
                  onCheckedChange={(v) => setForm({ ...form, consent: !!v })}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm text-slate-600 font-body font-normal cursor-pointer leading-relaxed">
                  {t('scouts.form.consent')}
                </Label>
              </div>
              {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

              {status === 'error' && (
                <p className="text-sm text-destructive border border-destructive/20 bg-destructive/5 p-3">
                  {t('scouts.form.error')}
                </p>
              )}

              <Button type="submit" size="lg" disabled={status === 'sending'} className="w-full">
                {status === 'sending' ? t('scouts.form.sending') : t('scouts.form.submit')}
              </Button>
            </form>
          )}
        </div>
      </EditorialSection>
    </PageShell>
  );
};

export default Scouts;
