import React from 'react';
import { useI18n } from '@/lib/i18n';

interface Props {
  children: React.ReactNode;
  /** Texte de légende personnalisé ; par défaut « Image d'illustration ». */
  text?: string;
  className?: string;
  /** Légende révélée au survol ET au focus clavier (grille Portefeuille). */
  hoverOnly?: boolean;
}

/**
 * Figure institutionnelle : image + légende d'honnêteté.
 * Sémantique <figure>/<figcaption> pour les lecteurs d'écran.
 * En mode hoverOnly, la légende reste dans le flux (opacity: 0, jamais display:none)
 * et se révèle au survol comme au focus clavier - aucun mode de navigation ne peut la manquer.
 * Aucune légende ne mentionne un lieu précis.
 */
const Legende = ({ children, text, className = '', hoverOnly = false }: Props) => {
  const { locale } = useI18n();
  const fallback = locale === 'en' ? 'Illustrative imagery' : "Image d'illustration";

  return (
    <figure className={`group m-0 ${className}`}>
      {children}
      <figcaption
        className={`mt-3 text-[11px] font-subtitle tracking-[0.2em] uppercase text-slate-600 transition-opacity duration-500 ${
          hoverOnly
            ? 'opacity-0 group-hover:opacity-95 group-focus-within:opacity-100 [.group:hover_&]:opacity-95 [.group:focus-visible_&]:opacity-100 [.group:focus-within_&]:opacity-100 motion-reduce:transition-none'
            : 'opacity-90'
        }`}
      >
        {text ?? fallback}
      </figcaption>
    </figure>
  );
};

export default Legende;
