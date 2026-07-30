import React, { useEffect, useRef, useState } from 'react';

interface Pole {
  code: string;
  name: string;
  weight: number; // 0-100 (poids capitalistique perçu)
  entities: string[];
}

const POLES: Pole[] = [
  {
    code: 'A',
    name: 'Opérationnel',
    weight: 72,
    entities: ['CAO Industries', 'Drabair Labs', 'Line Builder', 'Weavme'],
  },
  {
    code: 'B',
    name: 'Patrimonial',
    weight: 28,
    entities: ['Owl Real Estate'],
  },
];

/**
 * Data-viz interactive minimaliste : deux barres animées au scroll,
 * hover pour voir les entités. Style rapport annuel.
 */
const PolesViz = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setVisible(true), obs.disconnect())),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full max-w-4xl">
      <div className="flex items-baseline justify-between mb-6">
        <span className="text-xs font-subtitle tracking-[0.3em] uppercase text-gold">Répartition</span>
        <span className="text-xs font-subtitle tracking-[0.2em] uppercase text-muted-foreground">
          Structure du groupe
        </span>
      </div>
      <div className="space-y-8">
        {POLES.map((p, i) => (
          <div
            key={p.code}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="group cursor-default"
          >
            <div className="flex items-baseline justify-between mb-3">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl md:text-5xl text-slate-900 leading-none">
                  {p.code}
                </span>
                <span className="text-sm font-subtitle tracking-[0.2em] uppercase text-slate-700">
                  {p.name}
                </span>
              </div>
              <span
                className="font-display text-2xl md:text-3xl tabular-nums transition-colors duration-300"
                style={{ color: active === i ? 'hsl(43 96% 40%)' : 'hsl(222 47% 20%)' }}
              >
                {p.weight}
                <span className="text-sm text-muted-foreground">%</span>
              </span>
            </div>
            <div className="h-[2px] w-full bg-slate-200 relative overflow-hidden">
              <svg
                aria-hidden
                viewBox="0 0 100 2"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id={`poles-grad-${p.code}`} gradientUnits="userSpaceOnUse" x1="0" x2="100" y1="0" y2="0">
                    <stop offset="0%" stopColor="hsl(43 96% 56%)" />
                    <stop offset="100%" stopColor="hsl(38 92% 50%)" />
                  </linearGradient>
                </defs>
                <line
                  x1="0"
                  y1="1"
                  x2={p.weight}
                  y2="1"
                  stroke={`url(#poles-grad-${p.code})`}
                  strokeWidth="2"
                  pathLength={100}
                  vectorEffect="non-scaling-stroke"
                  className={`diagram-draw ${visible ? 'is-drawn' : ''}`}
                  style={
                    {
                      '--draw-length': 100,
                      transitionDelay: `${i * 80}ms`,
                    } as React.CSSProperties
                  }
                />
              </svg>
            </div>

            <div
              className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs font-subtitle tracking-[0.15em] uppercase transition-opacity duration-300"
              style={{ opacity: active === i ? 1 : 0.55 }}
            >
              {p.entities.map((e) => (
                <span key={e} className="text-slate-600">{e}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolesViz;
