import React from 'react';
import { useI18n } from '@/lib/i18n';

interface Props {
  children: React.ReactNode;
  /** Texte de légende personnalisé ; par défaut « Image d'illustration ». */
  text?: string;
  className?: string;
  /** Légende révélée seulement au hover (grille Portefeuille). */
  hoverOnly?: boolean;
}

/**
 * Figure institutionnelle : image + légende d'honnêteté.
 * Sémantique <figure>/<figcaption> pour les lecteurs d'écran.
 * Aucune légende ne mentionne un lieu précis.
 */
const Legende = ({ children, text, className = '', hoverOnly = false }: Props) => {
  const { locale } = useI18n();
  const fallback = locale === 'en' ? 'Illustrative imagery' : "Image d'illustration";

  return (
    <figure className={`group m-0 ${className}`}>
      {children}
      <figcaption
        className={`mt-3 text-[11px] font-subtitle tracking-[0.2em] uppercase text-slate-500 transition-opacity duration-500 ${
          hoverOnly ? 'opacity-0 group-hover:opacity-60' : 'opacity-60'
        }`}
      >
        {text ?? fallback}
      </figcaption>
    </figure>
  );
};

export default Legende;
