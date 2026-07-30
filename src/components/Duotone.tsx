import React from 'react';

export type DuotoneTone = 'gold' | 'ink' | 'sepia' | 'prestige' | 'nocturne';

interface Props {
  src: string;
  alt: string;
  /** Palette de grading. 'prestige' et 'nocturne' ajoutent vignette (et halation pour prestige). */
  tone?: DuotoneTone;
  className?: string;
  /** Chargement prioritaire (bande LCP uniquement). */
  eager?: boolean;
  width?: number;
  height?: number;
}

/**
 * Grading duotone institutionnel V2 (filtre SVG, compatible partout).
 * - Noirs relevés à l'encre #0B0F1A (jamais 0,0,0) pour l'effet impression.
 * - Vignette radiale douce -15% sur prestige / nocturne uniquement.
 * - Halation 1px sur les hautes lumières, prestige uniquement : doit se sentir, pas se voir.
 */
const Duotone = ({
  src,
  alt,
  tone = 'gold',
  className = '',
  eager = false,
  width,
  height,
}: Props) => {
  const id = React.useId().replace(/:/g, '');

  const palettes: Record<DuotoneTone, { dark: string; light: string; mid?: string }> = {
    gold: { dark: '#0B0F1A', light: '#F5C34D' },
    ink: { dark: '#0B0F1A', light: '#E2E8F0' },
    sepia: { dark: '#2D1E0F', light: '#F5E9D3' },
    prestige: { dark: '#0B0F1A', light: '#F2CE86', mid: '#6B5433' },
    nocturne: { dark: '#0B0F1A', light: '#DCE6F2', mid: '#2A3C57' },
  };
  const { dark, light, mid } = palettes[tone];

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
  const m = mid ? toRgb(mid) : null;

  // Courbe 2 ou 3 points : le point médian tempère le duotone (rendu pellicule).
  const table = (c: 'r' | 'g' | 'b') =>
    m ? `${d[c]} ${m[c]} ${l[c]}` : `${d[c]} ${l[c]}`;

  const hasVignette = tone === 'prestige' || tone === 'nocturne';
  const hasHalation = tone === 'prestige';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg className="absolute w-0 h-0" aria-hidden focusable="false">
        <filter id={`duo-${id}`} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    1 0"
          />
          <feComponentTransfer result="graded">
            <feFuncR type="table" tableValues={table('r')} />
            <feFuncG type="table" tableValues={table('g')} />
            <feFuncB type="table" tableValues={table('b')} />
          </feComponentTransfer>
          {hasHalation && (
            <>
              {/* Isole les hautes lumières, les diffuse de 1px, les recompose en léger glow. */}
              <feComponentTransfer in="graded" result="highs">
                <feFuncR type="linear" slope="2.2" intercept="-1.25" />
                <feFuncG type="linear" slope="2.2" intercept="-1.25" />
                <feFuncB type="linear" slope="2.2" intercept="-1.25" />
              </feComponentTransfer>
              <feGaussianBlur in="highs" stdDeviation="1" result="halo" />
              <feComposite in="halo" in2="graded" operator="arithmetic" k1="0" k2="0.18" k3="1" k4="0" />
            </>
          )}
        </filter>
      </svg>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        className="w-full h-full object-cover"
        style={{ filter: `url(#duo-${id}) contrast(1.05)`, backgroundColor: '#0B0F1A' }}
      />
      {hasVignette && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(11,15,26,0) 45%, rgba(11,15,26,0.15) 78%, rgba(11,15,26,0.3) 100%)',
          }}
        />
      )}
      {/* Grain film pour l'effet impression */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.16] paper-noise" />
    </div>
  );
};

export default Duotone;
