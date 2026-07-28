import React from 'react';

interface Props {
  src: string;
  alt: string;
  /** 'gold' = encre + or, 'ink' = encre pure, 'sepia' = sépia doux */
  tone?: 'gold' | 'ink' | 'sepia';
  className?: string;
}

/**
 * Traitement duotone institutionnel via SVG filter (compatible partout).
 * Rend l'image dans deux couleurs uniquement - style rapport annuel.
 */
const Duotone = ({ src, alt, tone = 'gold', className = '' }: Props) => {
  const id = React.useId().replace(/:/g, '');

  const palettes: Record<string, { dark: string; light: string }> = {
    gold: { dark: '#0B0F1A', light: '#F5C34D' },
    ink: { dark: '#0B0F1A', light: '#E2E8F0' },
    sepia: { dark: '#2D1E0F', light: '#F5E9D3' },
  };
  const { dark, light } = palettes[tone];

  const toRgb = (hex: string) => {
    const h = hex.replace('#', '');
    return {
      r: parseInt(h.slice(0, 2), 16) / 255,
      g: parseInt(h.slice(2, 4), 16) / 255,
      b: parseInt(h.slice(4, 6), 16) / 255,
    };
  };
  const d = toRgb(dark);
  const l = toRgb(light);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg className="absolute w-0 h-0" aria-hidden>
        <filter id={`duo-${id}`}>
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues={`${d.r} ${l.r}`} />
            <feFuncG type="table" tableValues={`${d.g} ${l.g}`} />
            <feFuncB type="table" tableValues={`${d.b} ${l.b}`} />
          </feComponentTransfer>
        </filter>
      </svg>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        style={{ filter: `url(#duo-${id}) contrast(1.05)` }}
      />
      {/* Grain subtil pour l'effet impression */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.12] paper-noise" />
    </div>
  );
};

export default Duotone;
