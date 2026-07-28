import React, { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  className?: string;
  /** Delay before first word starts (ms) */
  delay?: number;
  /** Between-word stagger (ms) */
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

/**
 * Split un texte en mots et les révèle un par un au scroll
 * (fade + micro translation). Respecte prefers-reduced-motion.
 */
const SplitText = ({ text, className = '', delay = 0, stagger = 45, as: Tag = 'span' }: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(' ');

  return React.createElement(
    Tag,
    { ref: ref as never, className },
    words.map((w, i) => (
      <span key={i} className="inline-block overflow-hidden align-baseline pb-[0.05em]">
        <span
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(0.9em)',
            transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay + i * stagger}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay + i * stagger}ms`,
          }}
        >
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      </span>
    ))
  );
};

export default SplitText;
