import { ReactNode } from 'react';
import { useI18n } from '@/lib/i18n';

/**
 * KPI institutionnel : display + small-caps + source.
 * Set fermé (doctrine §3) : uniquement faits dénombrables vérifiables.
 * - 02  pôles complémentaires
 * - 05  sociétés du groupe
 * - 02  continents d'opération
 * - 2023  immatriculation au RCS de Paris
 * - 10  pages : intégralité de ce que nous publions
 * Interdits : montants, valorisations, effectifs, clients, croissance, %.
 * Aucun KPI hors de ce set ne doit être ajouté.
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
    <div className="font-display text-4xl md:text-5xl mat-tnum mat-ink-1 leading-none mb-3">
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

/** Grille KPI par défaut - set autorisé complet, bilingue. */
export const OwlKPISet = () => {
  const { t } = useI18n();
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
      <KPI value="02" label={t('kpi.poles')} />
      <KPI value="05" label={t('kpi.companies')} source={t('kpi.source.orga')} />
      <KPI value="02" label={t('kpi.continents')} />
      <KPI value="2023" label={t('kpi.rcs')} source="RCS 978 849 230" />
      <KPI value="10" label={t('kpi.pages')} />
    </div>
  );
};
