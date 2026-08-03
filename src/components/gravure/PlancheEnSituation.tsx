import React from 'react';
import Planche from './Planche';
import { parNumeral } from './planches';
import { metaFor, plancheLegende } from './planches/i18n';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

/**
 * CABINET §6 - POSE EN SITUATION, EN PRODUCTION.
 *
 * Les neuf planches de la série sont posées à leur emplacement de production :
 * I fiche CAO, II /metiers, III fiche Line Builder, IV fiche Drabair,
 * V fiche Weavme, VI fiche ORE, VII accueil, VIII /groupe, IX /engagements.
 * Le gate de preversion est tombe a la cloture du cabinet.
 */
const PlancheEnSituation = ({
  numeral,
  className = '',
  idPrefix,
}: {
  numeral: string;
  className?: string;
  idPrefix?: string;
}) => {
  const { locale } = useI18n();
  const entree = parNumeral(numeral);
  if (!entree) return null;
  const { Drawing } = entree;
  const meta = metaFor(entree.meta, locale);
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
            legendSuffix={plancheLegende(meta.numeral, meta.title, locale)}
          >
            <Drawing p={p} />
          </Planche>
        </Reveal>
      </div>
    </section>
  );
};

export default PlancheEnSituation;
