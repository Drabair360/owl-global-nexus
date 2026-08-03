import React from 'react';
import Planche from '@/components/gravure/Planche';
import { CABINET_PUBLIE as CABINET } from '@/components/gravure/planches';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/gravure.css';

/** Les planches déjà passées au système L (Phase L / Phase M). */
const STRICT = ['III', 'IV', 'IX', 'V', 'I', 'VIII', 'VI'];

/**
 * /studio/lisibilite — banc de contrôle L2.
 * Une planche par ligne, pleine largeur, sans habillage : le script
 * scripts/planche-lisibilite-check.mjs relève ici les boîtes de texte.
 */
const Lisibilite = () => {
  useSEO({
    title: 'Cabinet - banc de lisibilité',
    description: 'Banc de contrôle de lisibilité des planches.',
    noindex: true,
  });

  return (
    <main className="min-h-screen mat-gres">
      <div className="max-w-[1500px] mx-auto px-6 py-12">
        <h1 className="font-display text-3xl mat-ink-1 mb-8">Banc de lisibilité</h1>
        <div className="space-y-16">
          {CABINET.map(({ meta, Drawing }) => (
            <div
              key={meta.numeral}
              data-planche={meta.numeral}
              data-lis-strict={STRICT.includes(meta.numeral) ? 'true' : 'false'}
            >
              <Planche
                idPrefix={`lis-${meta.numeral.toLowerCase()}`}
                numeral={meta.numeral}
                title={meta.title}
                desc={meta.desc}
                viewBox={meta.viewBox}
              >
                <Drawing p={`lis${meta.numeral.toLowerCase()}`} />
              </Planche>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Lisibilite;
