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
              <div
                className="absolute inset-y-0 left-0 transition-all duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)]"
                style={{
                  width: visible ? `${p.weight}%` : '0%',
                  background: 'linear-gradient(90deg, hsl(43 96% 56%), hsl(38 92% 50%))',
                  transitionDelay: `${i * 250}ms`,
                }}
              />
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
