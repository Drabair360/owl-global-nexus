import React, { ReactNode } from 'react';

/**
 * CABINET DE GRAVURES — cadre de planche.
 * Fond grès, chant, joint creux, dévoilement clip-path derrière un filet de
 * laiton, légende « PLANCHE [N] — [TITRE] » en petites capitales oxyde.
 * Accessibilité : <title> et <desc> complets, role="img", non focusable.
 */
const Planche = ({
  numeral,
  title,
  desc,
  viewBox,
  children,
  className = '',
  legendSuffix,
  idPrefix,
}: {
  numeral: string;
  title: string;
  desc: string;
  viewBox: string;
  children: ReactNode;
  className?: string;
  /** Ex. « DÉTAIL DE LA PLANCHE I » remplace la légende standard. */
  legendSuffix?: string;
  idPrefix: string;
}) => (
  <figure className={className}>
    <div className="gravure-planche relative overflow-hidden">
      <div className="gravure-devoile">
        <svg
          className="gravure-svg"
          viewBox={viewBox}
          role="img"
          focusable="false"
          aria-labelledby={`${idPrefix}-t ${idPrefix}-d`}
        >
          <title id={`${idPrefix}-t`}>{title}</title>
          <desc id={`${idPrefix}-d`}>{desc}</desc>
          {children}
        </svg>
      </div>
      <span className="gravure-filet" aria-hidden="true" />
    </div>
    <figcaption className="gravure-legende mt-3">
      {legendSuffix ?? `Planche ${numeral} - ${title}`}
    </figcaption>
  </figure>
);

export default Planche;
