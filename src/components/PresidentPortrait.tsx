import { useState } from 'react';

/**
 * Portrait du Président.
 *
 * L'image est servie depuis /assets/arthur-draber.jpg (chemin propre, hors
 * /lovable-uploads/). Tant que le fichier n'est pas déposé, un monogramme
 * institutionnel est affiché : aucune image cassée, aucun visuel inventé.
 * Déposer le portrait à ce chemin le rétablit sans modification de code.
 */
const PresidentPortrait = ({ alt }: { alt: string }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-sm border border-slate-200 bg-slate-900 flex items-center justify-center"
      >
        <span className="font-brand text-2xl md:text-3xl tracking-[0.18em] text-gold-num">AD</span>
      </div>
    );
  }

  return (
    <img
      src="/assets/arthur-draber.jpg"
      alt={alt}
      width={144}
      height={144}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-sm border border-slate-200 object-cover"
    />
  );
};

export default PresidentPortrait;
