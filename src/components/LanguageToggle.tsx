import React from 'react';
import { useI18n } from '@/lib/i18n';

const LanguageToggle = () => {
  const { locale, setLocale } = useI18n();
  const base = 'text-sm font-subtitle tracking-wider transition-colors duration-200';
  return (
    <div className="flex items-center gap-1 text-muted-foreground" aria-label="Language selector">
      <button
        type="button"
        onClick={() => setLocale('fr')}
        className={`${base} ${locale === 'fr' ? 'text-foreground font-semibold' : 'hover:text-primary'}`}
        aria-pressed={locale === 'fr'}
      >
        FR
      </button>
      <span className="text-muted-foreground/60">|</span>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`${base} ${locale === 'en' ? 'text-foreground font-semibold' : 'hover:text-primary'}`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
