import { useEffect, useRef, useState } from 'react';

/**
 * W8 - Curseur institutionnel.
 * - Point d'encre + anneau or qui suit avec inertie.
 * - Se dilate sur les éléments interactifs (a, button, [data-cursor]).
 * - Désactivé sur pointeurs coarse (mobile/tactile) et si prefers-reduced-motion.
 */
export const InstitutionalCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const raf = useRef<number>();

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]');
      setHover(interactive);
    };
    const onLeave = () => {
      target.current = { x: -100, y: -100 };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} aria-hidden className={`inst-cursor-ring ${hover ? 'is-hover' : ''}`} />
      <div ref={dotRef} aria-hidden className={`inst-cursor-dot ${hover ? 'is-hover' : ''}`} />
    </>
  );
};

export default InstitutionalCursor;
