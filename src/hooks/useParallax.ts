import { useEffect, useRef, useState } from 'react';

/**
 * Micro-parallaxe verticale bornée (±max px), désactivée sous 768px
 * et sous prefers-reduced-motion. Retourne la ref à poser sur le conteneur
 * et l'offset courant en pixels.
 */
export function useParallax(max = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    if (reduce || mobile) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
        setOffset(Math.max(-max, Math.min(max, (progress - 0.5) * max * 4)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max]);

  return { ref, offset };
}
