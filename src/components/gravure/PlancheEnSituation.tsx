import React from 'react';
import { useLocation } from 'react-router-dom';
import Planche from './Planche';
import { parNumeral } from './planches';
import Reveal from '@/components/Reveal';

/**
 * CABINET §6 — POSE EN SITUATION, EN PRÉVERSION SEULEMENT.
 *
 * Les onze planches de la série sont posées à leur emplacement de production
 * mais ne s'affichent qu'en préversion : rien n'entre en production avant la
 * validation de la planche contact. Interrupteur :
 *   - hôte de préversion (id-preview, lovableproject, localhost), ou
 *   - paramètre ?cabinet=1 sur n'importe quelle route.
 * En production, le composant ne rend rien et ne coûte rien.
 */
export const useCabinetPreview = () => {
  const { search } = useLocation();
  if (typeof window === 'undefined') return false;
  if (new URLSearchParams(search).get('cabinet') === '1') return true;
  const h = window.location.hostname;
  return h.includes('id-preview') || h.includes('lovableproject') || h === 'localhost' || h === '127.0.0.1';
};

const PlancheEnSituation = ({
  numeral,
  className = '',
  idPrefix,
}: {
  numeral: string;
  className?: string;
  idPrefix?: string;
}) => {
  const actif = useCabinetPreview();
  const entree = parNumeral(numeral);
  if (!actif || !entree) return null;
  const { meta, Drawing } = entree;
  const p = `pl${numeral.toLowerCase()}s`;

  return (
    <section className={`mat-gres mat-grain ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <Reveal>
          <Planche
            idPrefix={idPrefix ?? `planche-${numeral.toLowerCase()}`}
            numeral={meta.numeral}
            title={meta.title}
            desc={meta.desc}
            viewBox={meta.viewBox}
          >
            <Drawing p={p} />
          </Planche>
        </Reveal>
      </div>
    </section>
  );
};

export default PlancheEnSituation;
