/* =============================================================
   /studio/matiere-lab — LABORATOIRE MATIÈRE v3 (§6)
   Partition de la page : grès (banc de calibrage) → béton (banc
   d'autorité + bulles) → laiton (métal ouvré) → spécimen letterpress.
   Route non liée, noindex. Aucun composant de production n'en dépend.
   ============================================================= */
import React, { useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/matiere-v3.css';

type Intensite = 'v3-sobre' | 'v3-cible' | 'v3-poussee';

const INTENSITES: { key: Intensite; label: string }[] = [
  { key: 'v3-sobre', label: 'Sobre' },
  { key: 'v3-cible', label: 'Cible' },
  { key: 'v3-poussee', label: 'Poussée' },
];

const PROSE =
  "Le grès n'est pas un aplat : c'est une feuille qui a séché sous une seule lumière. " +
  "L'encre s'y pose sans effet, nette, et c'est la surface qui porte le relief. " +
  "Un directeur artistique doit pouvoir chercher la répétition du motif sans la trouver.";

const Plaque = ({ children }: { children: React.ReactNode }) => (
  <button type="button" className="v3-plaque v3-focus w-full text-left p-5">
    <span className="block text-[11px] font-subtitle uppercase tracking-[0.22em] mat-ink-2 mb-2">
      Plaque à chants
    </span>
    <span className="block text-sm mat-ink-1 font-body leading-relaxed">{children}</span>
  </button>
);

const BancGres = ({ zoom }: { zoom: number }) => (
  <div className="v3-gres p-8" style={{ zoom }}>
    <h3 className="font-heading text-2xl mat-ink-1 mb-4">Grès — le papier de pierre</h3>
    <p className="mat-prose mat-ink-1 max-w-prose mb-6">{PROSE}</p>
    <div className="grid gap-4 sm:grid-cols-2">
      <Plaque>Survol : le chant supérieur s'éclaircit, l'élévation monte. Pression : la plaque se pose.</Plaque>
      <div className="v3-gres-2 p-5 v3-chants">
        <p className="text-sm mat-ink-2 font-body">Grès-2, plaque posée, chants haut/bas visibles au zoom 200 %.</p>
      </div>
    </div>
  </div>
);

const BancBeton = ({ zoom }: { zoom: number }) => (
  <div className="v3-beton p-8" style={{ zoom }}>
    <h3 className="font-heading text-2xl mb-4">Béton coffré — l'autorité coulée</h3>
    <p className="mat-prose mat-ink-2 max-w-prose mb-6">
      Jointures de banches à 8,5 rem : un pixel de lumière, un pixel d'ombre. Les bulles de
      coffrage sont rares et chacune porte son croissant de lumière en bas de cavité.
    </p>
    <div className="h-40 v3-beton-2 mb-6 v3-chants" aria-label="Zone à bulles" />
    <div className="flex flex-wrap items-center gap-4">
      <span className="v3-laiton-sceau text-[10px] font-subtitle uppercase tracking-[0.18em]">RCS Paris</span>
      <span className="v3-laiton-filet block h-px w-40" />
      <span className="v3-laiton-filet v3-laiton-filet-v block w-px h-10" />
      <a href="#lab" className="v3-lien text-sm font-subtitle uppercase tracking-wider mat-ink-accent">
        Souligné laiton
      </a>
    </div>
  </div>
);

const BancLetterpress = ({ zoom }: { zoom: number }) => (
  <div className="v3-beton p-8" style={{ zoom }}>
    <p className="text-[11px] font-subtitle uppercase tracking-[0.22em] mat-ink-2 mb-6">
      Spécimen letterpress — supprimé (Lot Z9, verdict final)
    </p>
    <div className="space-y-4">
      <p className="font-display text-4xl">Owl International — display nu sur béton</p>
    </div>
  </div>
);

const MatiereLab = () => {
  const [zoom, setZoom] = useState(1);
  const [sombre, setSombre] = useState(false);

  useSEO({
    title: 'Laboratoire Matière v3 - calibrage',
    description: 'Banc de calibrage des matériaux. Route de studio, non indexée.',
    noindex: true,
  });

  return (
    <div id="lab" className={sombre ? 'bg-[#101010] min-h-screen' : 'min-h-screen'}>
      <header className="v3-beton px-6 py-10">
        <h1 className="font-display text-3xl mb-2">Laboratoire Matière v3</h1>
        <p className="mat-ink-2 text-sm font-body max-w-2xl">
          Trois matériaux × trois intensités. Calibrage unique sur écran physique, puis gel des
          tokens. Après le gel, plus aucun « encore un cran ».
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-subtitle uppercase tracking-[0.18em]">
          {[0.5, 1, 2].map((z) => (
            <button
              key={z}
              type="button"
              onClick={() => setZoom(z)}
              className={`v3-plaque v3-focus px-4 py-2 ${zoom === z ? 'mat-ink-accent' : 'mat-ink-1'}`}
            >
              Zoom {z * 100} %
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSombre((s) => !s)}
            className="v3-plaque v3-focus px-4 py-2 mat-ink-1"
          >
            Écran {sombre ? 'clair' : 'sombre'}
          </button>
        </div>
      </header>
      <hr className="v3-joint" />

      {INTENSITES.map(({ key, label }) => (
        <section key={key} className={key}>
          <div className="v3-gres-3 px-6 py-4">
            <h2 className="font-subtitle text-[11px] uppercase tracking-[0.28em] mat-ink-1">
              Intensité — {label}
            </h2>
          </div>
          <hr className="v3-joint" />
          <BancGres zoom={zoom} />
          <hr className="v3-joint" />
          <BancBeton zoom={zoom} />
          <hr className="v3-joint" />
          <BancLetterpress zoom={zoom} />
          <hr className="v3-joint" />
        </section>
      ))}
    </div>
  );
};

export default MatiereLab;
