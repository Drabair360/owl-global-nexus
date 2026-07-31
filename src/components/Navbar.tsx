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
      className={`nav-shell fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? 'bg-white border-b border-border shadow-[0_1px_0_hsl(var(--gold)/0.4)]'
          : 'bg-white/95 border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? '#ffffff' : 'rgba(255,255,255,0.96)',
        height: scrolled ? '3.25rem' : '4.5rem',
      }}
    >
      {/* Filet or subtil qui s'illumine au scroll */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(43 96% 56% / 0.6), transparent)',
          opacity: scrolled ? 1 : 0,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" onClick={scrollTop} className="flex items-center gap-3 group">
            <img
              src="/assets/owl-international-logo.png"
              alt=""
              className="nav-logo transition-transform duration-300 group-hover:scale-105"
              style={{ width: scrolled ? '1.75rem' : '2.25rem', height: scrolled ? '1.75rem' : '2.25rem' }}
            />
            <span
              className="nav-brand font-brand tracking-wide text-foreground"
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
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(item.key)}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
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
              className="text-foreground hover:text-primary transition-colors"
              aria-label={t('nav.menu')}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border" style={{ backgroundColor: '#ffffff' }}>
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
                    isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
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
