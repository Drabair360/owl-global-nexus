import React from 'react';

interface Props {
  /** Nom de l'entité mise en avant. */
  name: string;
  /** Pôle de rattachement (libellé localisé). */
  pole: string;
  /** Libellé de la holding. */
  holding?: string;
  /** Titre du bloc (localisé). */
  label: string;
}

const SEGMENTS = [
  // Holding -> pôle (vertical)
  { d: 'M 120 26 L 120 74', length: 48 },
  // Pôle -> entité (vertical)
  { d: 'M 120 106 L 120 154', length: 48 },
  // Filet de base sous l'entité
  { d: 'M 40 186 L 200 186', length: 160 },
];

/**
 * Mini-organigramme « place dans le groupe » d'une fiche venture.
 * Tracé stroke-dashoffset 1200 ms, stagger 80 ms, une seule fois.
 */
const GroupDiagram = ({ name, pole, holding = 'Owl International', label }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full max-w-xs">
      <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-gold mb-5">{label}</div>
      <div className="relative">
        <svg viewBox="0 0 240 200" className="w-full h-auto" role="presentation" aria-hidden>
          {SEGMENTS.map((s, i) => (
            <path
              key={s.d}
              d={s.d}
              fill="none"
              stroke="hsl(43 96% 50%)"
              strokeWidth="1"
              className={`diagram-draw ${drawn ? 'is-drawn' : ''}`}
              style={
                { '--draw-length': s.length, transitionDelay: `${i * 80}ms` } as React.CSSProperties
              }
            />
          ))}
          <text x="120" y="18" textAnchor="middle" className="fill-slate-900 font-subtitle" fontSize="11" letterSpacing="2">
            {holding.toUpperCase()}
          </text>
          <text x="120" y="96" textAnchor="middle" className="fill-slate-600 font-subtitle" fontSize="10" letterSpacing="2">
            {pole.toUpperCase()}
          </text>
          <text x="120" y="176" textAnchor="middle" className="fill-slate-900 font-heading" fontSize="14">
            {name}
          </text>
        </svg>
      </div>
      <p className="sr-only">
        {holding} - {pole} - {name}
      </p>
    </div>
  );
};

export default GroupDiagram;
