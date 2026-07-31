import { useState } from 'react';

/**
 * Portrait du Président.
 *
 * Servi depuis /assets/arthur-draber-{144,288,576}.{avif,jpg} (chemins propres,
 * hors /lovable-uploads/). AVIF avec repli JPG, srcset pour les deux usages
 * (vignette Groupe 144px, vis-à-vis signature 288px). Traitement duotone
 * « prestige » léger conforme à la DA. Le monogramme reste un repli technique.
 */
const PresidentPortrait = ({
  alt,
  size = 'md',
}: {
  alt: string;
  size?: 'md' | 'lg';
}) => {
  const [failed, setFailed] = useState(false);

  const box =
    size === 'lg'
      ? 'w-40 h-40 md:w-56 md:h-56'
      : 'w-28 h-28 md:w-36 md:h-36';

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${box} shrink-0 rounded-sm border border-slate-200 bg-slate-900 flex items-center justify-center`}
      >
        <span className="font-brand text-2xl md:text-3xl tracking-[0.18em] text-gold-num">AD</span>
      </div>
    );
  }

  return (
    <div className={`${box} shrink-0 relative overflow-hidden rounded-sm border border-slate-200`}>
      <picture>
        <source
          type="image/avif"
          srcSet="/assets/arthur-draber-144.avif 144w, /assets/arthur-draber-288.avif 288w, /assets/arthur-draber-576.avif 576w"
          sizes={size === 'lg' ? '(min-width: 768px) 224px, 160px' : '(min-width: 768px) 144px, 112px'}
        />
        <source
          type="image/jpeg"
          srcSet="/assets/arthur-draber-144.jpg 144w, /assets/arthur-draber-288.jpg 288w, /assets/arthur-draber-576.jpg 576w"
          sizes={size === 'lg' ? '(min-width: 768px) 224px, 160px' : '(min-width: 768px) 144px, 112px'}
        />
        <img
          src="/assets/arthur-draber-288.jpg"
          alt={alt}
          width={288}
          height={288}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover object-top"
          style={{ filter: 'saturate(0.72) contrast(1.06)' }}
        />
      </picture>
      {/* Halation or discrète - tone prestige */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, hsl(38 45% 60% / 0.10) 0%, transparent 45%, hsl(220 45% 12% / 0.18) 100%)',
        }}
      />
    </div>
  );
};

export default PresidentPortrait;
