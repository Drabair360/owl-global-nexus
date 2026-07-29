import { ReactNode } from 'react';

/**
 * KPI institutionnel : display + small-caps + source.
 * Set fermé (doctrine §3) : uniquement faits dénombrables vérifiables.
 * - 02  pôles complémentaires
 * - 05  sociétés du groupe
 * - 02  continents d'opération
 * - 2023  immatriculation au RCS de Paris
 * - 10  pages : intégralité de ce que nous publions
 * Interdits : montants, valorisations, effectifs, clients, croissance, %.
 */
export const KPI = ({
  value,
  label,
  source,
  className = '',
}: {
  value: ReactNode;
  label: string;
  source?: string;
  className?: string;
}) => (
  <div className={`border-t border-[hsl(var(--gold))/0.4] pt-4 ${className}`}>
    <div className="font-display text-4xl md:text-5xl tabular text-[hsl(var(--text-primary))] leading-none mb-3">
      {value}
    </div>
    <p className="smallcaps text-xs text-[hsl(var(--text-secondary))]">{label}</p>
    {source ? (
      <p className="text-[11px] text-[hsl(var(--text-secondary))]/70 mt-2 font-body">
        Source&nbsp;: {source}
      </p>
    ) : null}
  </div>
);

/** Grille KPI par défaut - set autorisé complet. */
export const OwlKPISet = () => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
    <KPI value="02" label="pôles complémentaires" />
    <KPI value="05" label="sociétés du groupe" source="organigramme" />
    <KPI value="02" label="continents d'opération" />
    <KPI value="2023" label="immatriculation RCS Paris" source="RCS 978 849 230" />
    <KPI value="10" label="pages publiées" />
  </div>
);
