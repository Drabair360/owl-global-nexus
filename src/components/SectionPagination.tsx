import { useEffect, useRef, useState } from 'react';

/**
 * Pagination éditoriale « 02 / 05 » alignée colonnes 11-12.
 * Filet or animé (scaleX) au scroll, small-caps, tabular-nums.
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
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, '0');

  return (
    <div
      ref={ref}
      className="col-span-12 md:col-start-11 md:col-span-2 flex flex-col items-end mb-8"
    >
      <div
        aria-hidden
        className="h-px w-16 bg-[hsl(var(--gold))] mb-3 origin-right"
        style={{
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 900ms cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div
        className="tabular text-sm text-[hsl(var(--text-secondary))]"
        style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1) 200ms',
        }}
      >
        <span className="text-[hsl(var(--text-primary))]">{fmt(current)}</span>
        <span className="mx-1 opacity-50">/</span>
        <span>{fmt(total)}</span>
      </div>
      {label ? (
        <p
          className="smallcaps text-[11px] text-[hsl(var(--text-secondary))] mt-2 text-right"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1) 320ms',
          }}
        >
          {label}
        </p>
      ) : null}
    </div>
  );
};
