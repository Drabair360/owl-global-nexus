import { ReactNode, HTMLAttributes } from 'react';

/**
 * Grille éditoriale 12 colonnes.
 * Gouttières 24px, max-width 1440px, marges externes gérées par le parent.
 * Composition asymétrique attendue : appel col 1-3, contenu col 5-11.
 */
export const EditorialGrid = ({
  children,
  className = '',
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-12 gap-x-6 ${className}`}
    {...rest}
  >
    {children}
  </div>
);

/** Colonne d'appel : numéro + label small-caps + filet or. */
export const CalloutColumn = ({
  n,
  label,
  className = '',
}: {
  n: string;
  label: string;
  className?: string;
}) => (
  <aside className={`col-span-12 md:col-span-3 md:sticky md:top-32 self-start ${className}`}>
    <div className="flex items-center gap-3 mb-3">
      <span className="h-px w-8 bg-[hsl(var(--gold))]" />
      <span className="font-display text-xl tabular text-[hsl(var(--gold-deep))]">{n}</span>
    </div>
    <p className="smallcaps text-xs text-[hsl(var(--text-secondary))]">{label}</p>
  </aside>
);

/** Colonne contenu (col 5-11, gap col 4 volontairement vide). */
export const ContentColumn = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`col-span-12 md:col-start-5 md:col-span-7 ${className}`}>{children}</div>
);
