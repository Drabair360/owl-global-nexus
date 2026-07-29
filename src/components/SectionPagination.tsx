/**
 * Pagination éditoriale « 02 / 05 » alignée colonnes 11-12.
 * Filet or au-dessus, small-caps, tabular-nums.
 * À poser en tête de section pour marquer la position dans le récit.
 */
export const SectionPagination = ({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label?: string;
}) => {
  const fmt = (n: number) => n.toString().padStart(2, '0');
  return (
    <div className="col-span-12 md:col-start-11 md:col-span-2 flex flex-col items-end mb-8">
      <div className="h-px w-16 bg-[hsl(var(--gold))] mb-3" />
      <div className="tabular text-sm text-[hsl(var(--text-secondary))]">
        <span className="text-[hsl(var(--text-primary))]">{fmt(current)}</span>
        <span className="mx-1 opacity-50">/</span>
        <span>{fmt(total)}</span>
      </div>
      {label ? (
        <p className="smallcaps text-[11px] text-[hsl(var(--text-secondary))] mt-2 text-right">
          {label}
        </p>
      ) : null}
    </div>
  );
};
