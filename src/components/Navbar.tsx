import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useI18n } from '@/lib/i18n';

const NAV = [
  { to: '/groupe', key: 'nav.groupe' },
  { to: '/portefeuille', key: 'nav.portefeuille' },
  { to: '/metiers', key: 'nav.metiers' },
  { to: '/scouts', key: 'nav.scouts' },
  { to: '/journal', key: 'nav.journal' },
  { to: '/contact', key: 'nav.contact' },
] as const;

/**
 * NAVBAR - langage Matière (G2.3).
 * Grès translucide en tête de page, grès solide au scroll. Jamais de
 * backdrop-blur (règle core) : la translucidité est obtenue par une couleur
 * de fond opacifiée, pas par un filtre. Les filets sont en laiton, en
 * sourdine ; le wordmark reste inchangé.
 */
const Navbar = () => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <nav
      className="nav-shell fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? 'hsl(var(--mat-gres))' : 'hsl(var(--mat-gres) / 0.94)',
        boxShadow: scrolled ? 'var(--mat-elev-1)' : 'none',
        height: scrolled ? '3.25rem' : '4.5rem',
        transition: 'background-color 320ms var(--mat-ease-pose), height 320ms var(--mat-ease-pose), box-shadow 320ms var(--mat-ease-pose)',
      }}
    >
      {/* Filet de laiton en sourdine : présent en permanence, affirmé au scroll */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px transition-opacity duration-500"
        style={{
          backgroundColor: 'hsl(var(--mat-laiton))',
          opacity: scrolled ? 0.5 : 0.22,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" onClick={scrollTop} className="flex items-center gap-3 group">
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/owl-international-logo-96.webp 96w, /assets/owl-international-logo-192.webp 192w"
                sizes="36px"
              />
              <img
                src="/assets/owl-international-logo-96.png"
                srcSet="/assets/owl-international-logo-96.png 96w, /assets/owl-international-logo-192.png 192w"
                sizes="36px"
                width={96}
                height={98}
                alt=""
                decoding="async"
                className="nav-logo transition-transform duration-300 group-hover:scale-105"
                style={{ width: scrolled ? '1.75rem' : '2.25rem', height: scrolled ? '1.75rem' : '2.25rem' }}
              />
            </picture>
            <span
              className="nav-brand font-brand tracking-wide mat-ink-1"
              style={{ fontSize: scrolled ? '0.95rem' : '1.125rem', letterSpacing: scrolled ? '0.06em' : '0.04em' }}
            >
              OWL INTERNATIONAL
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={scrollTop}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-subtitle font-medium transition-colors group ${
                    isActive ? 'mat-ink-1' : 'mat-ink-2 hover:text-[hsl(var(--mat-on-gres-1))]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(item.key)}
                    <span
                      className={`absolute bottom-0 left-0 h-px transition-all duration-500 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ backgroundColor: 'hsl(var(--mat-laiton))' }}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="mat-ink-1 transition-colors"
              aria-label={t('nav.menu')}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden mat-gres"
          style={{ borderTop: '1px solid hsl(var(--mat-laiton) / 0.28)', boxShadow: 'var(--mat-elev-2)' }}
        >
          <div className="px-4 py-3 space-y-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => {
                  scrollTop();
                  setOpen(false);
                }}
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-subtitle transition-colors ${
                    isActive ? 'mat-ink-1 font-semibold' : 'mat-ink-2'
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
