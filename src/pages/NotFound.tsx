import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PageShell from '@/components/PageShell';
import { Eyebrow } from '@/components/editorial';
import { useI18n } from '@/lib/i18n';
import Duotone from '@/components/Duotone';
import { textures, SIZES } from '@/assets/textures';

const NotFound = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    // Log for internal monitoring only.
    console.error('404 - route inconnue :', location.pathname);
  }, [location.pathname]);

  return (
    <PageShell
      title={t('seo.nf.title')}
      description={t('seo.nf.desc')}
      noindex
      breadcrumbs={[{ name: '404', path: location.pathname }]}
    >
      <section className="relative mat-gres-2 mat-grain border-b border-[hsl(var(--mat-on-gres-1)/0.22)] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.14] hidden md:block [mask-image:linear-gradient(to_right,transparent,black_45%)]">
          <Duotone
            src={textures.vide.src}
            sources={textures.vide.sources}
            sizes={SIZES.column}
            alt=""
            tone="ink"
            width={textures.vide.width}
            height={textures.vide.height}
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <Eyebrow>{t('nf.eyebrow')}</Eyebrow>
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-display text-7xl md:text-9xl leading-none mat-ink-2 select-none tabular" aria-hidden>
              404
            </span>
            <span className="text-xs font-subtitle tracking-[0.3em] uppercase mat-ink-2">
              - Owl International
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl leading-[1.05] tracking-tight mat-ink-1 mb-6">
            {t('nf.title')}
          </h1>
          <p className="text-lg mat-ink-2 font-body leading-relaxed max-w-2xl">
            {t('nf.body')}
          </p>

          <div className="mt-10 border-t border-[hsl(var(--mat-on-gres-1)/0.22)] pt-4 max-w-xl">
            <div className="text-xs font-subtitle tracking-[0.28em] uppercase mat-ink-2 mb-2">
              {t('nf.path')}
            </div>
            <code className="font-mono text-sm mat-ink-1 break-all">{location.pathname}</code>
          </div>
        </div>
      </section>

      <section className="mat-gres mat-grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-xs font-subtitle tracking-[0.28em] uppercase mat-ink-2 mb-8">
            {t('nf.actions')}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { to: '/', label: t('nf.home') },
              { to: '/portefeuille', label: t('nf.portfolio') },
              { to: '/contact', label: t('nf.contact') },
            ].map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group border-t border-[hsl(var(--mat-on-gres-1)/0.22)] pt-4 hover:border-[hsl(var(--mat-laiton))] transition-colors"
              >
                <div className="font-heading text-xl mat-ink-1 group-hover:mat-ink-accent transition-colors flex items-center justify-between">
                  <span>{a.label}</span>
                  <span aria-hidden className="text-[hsl(var(--mat-laiton))] group-hover:translate-x-1 transition-transform">-&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default NotFound;
