import React from 'react';
import { useI18n } from '@/lib/i18n';

/**
 * Bascule de langue.
 * Z4 : le séparateur « | » mesurait 2,56:1 ; il est remonté à l'encre
 * secondaire ET retiré de l'arbre d'accessibilité (c'est un ornement,
 * pas une information). Les deux boutons portent l'encre du bâtiment.
 */
const LanguageToggle = () => {
  const { locale, setLocale } = useI18n();
  const base = 'text-sm font-subtitle tracking-wider transition-colors duration-200';
  return (
    <div className="flex items-center gap-1" aria-label="Language selector">
      <button
        type="button"
        onClick={() => setLocale('fr')}
        className={`${base} ${locale === 'fr' ? 'mat-ink-1 font-semibold' : 'mat-ink-2 hover:text-[hsl(var(--mat-accent-gres))]'}`}
        aria-pressed={locale === 'fr'}
      >
        FR
      </button>
      <span aria-hidden="true" className="mat-ink-2">|</span>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`${base} ${locale === 'en' ? 'mat-ink-1 font-semibold' : 'mat-ink-2 hover:text-[hsl(var(--mat-accent-gres))]'}`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
