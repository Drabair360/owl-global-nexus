import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import '@/studio/matiere.css';

/* =================================================================
   LOT G1 - TROISIÈME PAGE MATIÈRE : /journal en direction Matière
   Route privée, noindex, non liée. Aucune donnée nouvelle : les
   jalons repris sont ceux déjà publiés en production (set fermé).
   ================================================================= */

const jalons = [
  {
    annee: '2023',
    entrees: [
      {
        date: '23 août 2023',
        titre: 'Immatriculation d’Owl International',
        corps:
          "La holding est immatriculée à Paris. Elle détient et construit des sociétés entre la France et l'Afrique.",
        folio: '001',
      },
    ],
  },
  {
    annee: '2024',
    entrees: [
      {
        date: '2024',
        titre: 'Premier exercice déposé',
        corps:
          "Chiffre d'affaires de 141 k€, résultat net de 130 k€. Comptes déposés au greffe. Aucun autre chiffre d'activité n'est publié.",
        folio: '002',
      },
    ],
  },
  {
    annee: '2026',
    entrees: [
      {
        date: '13 juillet 2026',
        titre: 'Ouverture d’Owl Scouts',
        corps: "Le réseau de scouts ouvre ses candidatures.",
        folio: '003',
      },
      {
        date: '27 juillet 2026',
        titre: 'Dépôt de capital de CAO Industries',
        corps:
          "Le dossier d'immatriculation est déposé. La société est en cours d'immatriculation.",
        folio: '004',
      },
      {
        date: '2026',
        titre: 'Structuration du groupe en deux pôles',
        corps: "Le portefeuille est organisé en deux pôles.",
        folio: '005',
      },
    ],
  },
];

const Folio = ({ n, label }: { n: string; label: string }) => (
  <span className="m-folio text-sm">
    <span className="m-folio-eyes" aria-hidden="true">
      <i /><span /><i />
    </span>
    <span className="m-tnum">{n}</span>
    <span className="m-smcp text-xs m-ink-2">{label}</span>
  </span>
);

const MatiereJournal = () => {
  useSEO({
    title: 'Studio - Journal Matière',
    description: 'Page de validation interne : /journal en direction Matière.',
    noindex: true,
  });

  return (
    <main className="dir-matiere min-h-screen">
      {/* Bandeau d'autorité : béton coffré, une seule arête */}
      <header className="m-beton m-grain m-coffrage">
        <div className="max-w-[92rem] mx-auto px-6 md:px-12 pt-16 pb-12">
          <Folio n="01" label="journal" />
          <div className="m-arete pl-6 md:pl-8 mt-8">
            <span className="m-smcp text-xs m-ink-accent">Registre daté</span>
            <h1 className="m-display m-pose mt-6" style={{ fontSize: 'clamp(2.369rem, 8vw, 5.61rem)' }}>
              Le journal de construction.
            </h1>
            <p className="m-prose m-ink-2 mt-8 max-w-2xl">
              Chaque ligne porte une date et une source. Aucun fait non daté n’entre au registre :
              c’est la seule règle du journal, et elle ne souffre pas d’exception.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[92rem] mx-auto px-6 md:px-12 py-16 grid grid-cols-12 gap-6">
        {/* Index par année : plaque de grès */}
        <nav aria-label="Index par année" className="col-span-12 md:col-span-3 md:sticky md:top-10 self-start">
          <p className="m-smcp text-xs m-ink-2 mb-4">Index</p>
          <ol className="m-carte m-grain p-5 space-y-3">
            {jalons.map((y) => (
              <li key={y.annee} className="flex items-baseline justify-between border-b last:border-0 pb-2 last:pb-0"
                  style={{ borderColor: 'hsl(var(--m-text-on-gres-1) / 0.14)' }}>
                <a href={`#annee-${y.annee}`} className="m-display text-2xl m-tnum">{y.annee}</a>
                <span className="m-smcp text-xs m-ink-2 m-tnum">
                  {String(y.entrees.length).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        {/* Chronologie : tableau de registre */}
        <div className="col-span-12 md:col-span-9 space-y-12">
          {jalons.map((y, iy) => (
            <section key={y.annee} id={`annee-${y.annee}`} className="scroll-mt-10">
              <div className="flex items-baseline gap-6 mb-5">
                <h2 className="m-display text-3xl m-tnum">{y.annee}</h2>
                <span aria-hidden className="flex-1 m-rule" />
              </div>

              <ol className={`m-gres-2 m-grain p-6 md:p-8 ${iy === 0 ? 'm-serti' : 'm-pose-1'}`}>
                {y.entrees.map((e, i) => (
                  <li
                    key={e.folio}
                    className={`grid grid-cols-12 gap-x-6 gap-y-2 py-5 ${i > 0 ? 'border-t' : ''}`}
                    style={{ borderColor: 'hsl(var(--m-text-on-gres-1) / 0.14)' }}
                  >
                    <div className="col-span-12 md:col-span-3">
                      <p className="m-tnum text-base m-ink-1">{e.date}</p>
                      <p className="m-smcp text-xs m-ink-accent mt-1">Folio {e.folio}</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <h3 className="m-display text-2xl m-ink-1">{e.titre}</h3>
                      <p className="m-prose m-ink-2 mt-2 max-w-2xl">{e.corps}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}

          {/* Cachet : scelle la page, dernier élément du bloc d'autorité */}
          <div className="m-cachet m-smcp">
            <span className="m-cachet-seal">Registre Owl</span>
            <span>Paris</span>
            <span>Est. 2023</span>
            <span>Folio 005</span>
            <span className="ml-auto m-ink-2">Direction Matière - v2</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MatiereJournal;
