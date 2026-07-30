import React from 'react';
import Duotone, { type DuotoneTone } from '@/components/Duotone';
import Legende from '@/components/Legende';
import { textures, type TextureKey } from '@/assets/textures';

interface Props {
  /** Clé du manifest de textures. */
  texture: TextureKey;
  tone?: DuotoneTone;
  /** Bande cinéma proche du fold (LCP) : chargement prioritaire. */
  eager?: boolean;
  /** Cadrage de l'image, permet de différencier deux bandes issues du même visuel. */
  objectPosition?: string;
  className?: string;
}

/**
 * Bande cinéma 21/9 pleine largeur, seuil de section.
 * - Filet or 1px prolongé sur toute la largeur de page (ligne d'horizon).
 * - Dévoilement clip-path à l'entrée dans le viewport, filet or en tête.
 * - Micro-parallaxe (24px max) + respiration unique, désactivées < 768px
 *   et sous prefers-reduced-motion.
 */
const CinemaBand = ({ texture, tone = 'prestige', eager = false, objectPosition, className = '' }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const tex = textures[texture];

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
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
        setOffset(Math.max(-12, Math.min(12, (progress - 0.5) * 48)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`relative w-full ${className}`} ref={ref}>
      {/* Ligne d'horizon or, pleine largeur */}
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <Legende className="w-full">
        <div
          className="relative w-full overflow-hidden h-64 md:h-96"
          style={{
            clipPath: revealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
            transition: 'clip-path 900ms cubic-bezier(0.16,1,0.3,1)',
            backgroundColor: '#0B0F1A',
          }}
        >
          <div
            className="absolute inset-0 band-breathe"
            style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform' }}
          >
            <Duotone
              src={tex.src}
              alt={tex.alt}
              tone={tone}
              eager={eager}
              width={tex.width}
              height={tex.height}
              objectPosition={objectPosition}
              reveal={false}
              className="w-full h-[calc(100%+24px)] -mt-3"
            />
          </div>
        </div>
      </Legende>
    </div>
  );
};

export default CinemaBand;
