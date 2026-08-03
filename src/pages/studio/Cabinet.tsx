import React from 'react';
import { Link } from 'react-router-dom';
import Planche from '@/components/gravure/Planche';
import Vignette, { VIGNETTES, vignetteLabel } from '@/components/gravure/Vignette';
import Millesime from '@/components/gravure/Millesime';
import { CABINET_PUBLIE as CABINET } from '@/components/gravure/planches';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/gravure.css';

/**
 * /studio/cabinet — LA PLANCHE CONTACT.
 * Les neuf planches du cabinet, les dix vignettes de rubrique et les
 * millésimes du Journal, réunis en un seul écran de relecture.
 * Route non liée, noindex : elle sert la validation, pas le public.
 */
const Cabinet = () => {
  useSEO({
    title: 'Cabinet de gravures - planche contact',
    description: 'Planche contact du cabinet : neuf planches, dix vignettes, millésimes.',
    noindex: true,
  });

  return (
    <main className="min-h-screen mat-gres mat-grain">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-14 max-w-3xl">
          <div className="mat-mention font-subtitle tracking-[0.28em] uppercase mat-ink-accent mb-3">
            Préversion - non publiée
          </div>
          <h1 className="font-display text-4xl md:text-5xl mat-ink-1 mb-4">Cabinet de gravures - planche contact</h1>
          <p className="mat-prose mat-ink-2">
            Neuf planches maîtresses, dix vignettes de rubrique, millésimes du Journal. Chaque planche est
            également posée en situation sur sa page, visible en préversion seulement. Rien n'entre en
            production avant validation.
          </p>
          <p className="mat-prose mat-ink-2 mt-4">
            Les registres de savoir et les notes de marge se relisent sur{' '}
            <Link className="underline" to="/studio/registres">
              /studio/registres
            </Link>
            .
          </p>
        </header>

        {/* ---------- LES NEUF PLANCHES ---------- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {CABINET.map(({ meta, Drawing, emplacement, laiton }) => (
            <article key={meta.numeral}>
              <Planche
                idPrefix={`contact-${meta.numeral.toLowerCase()}`}
                numeral={meta.numeral}
                title={meta.title}
                desc={meta.desc}
                viewBox={meta.viewBox}
              >
                <Drawing p={`ct${meta.numeral.toLowerCase()}`} />
              </Planche>
              <dl className="mt-4 grid grid-cols-3 gap-3 mat-mention font-subtitle tracking-[0.18em] uppercase mat-ink-2">
                <div>
                  <dt className="mat-ink-accent">Emplacement</dt>
                  <dd className="mt-1 normal-case tracking-normal">{emplacement}</dd>
                </div>
                <div>
                  <dt className="mat-ink-accent">Laiton</dt>
                  <dd className="mt-1 normal-case tracking-normal">{laiton}</dd>
                </div>
                <div>
                  <dt className="mat-ink-accent">Détail</dt>
                  <dd className="mt-1 normal-case tracking-normal">{meta.detailViewBox ? 'oui' : '-'}</dd>
                </div>
              </dl>
            </article>
          ))}
        </section>

        {/* ---------- LES DIX VIGNETTES ---------- */}
        <section className="mt-24">
          <h2 className="font-heading text-2xl mat-ink-1 mb-8">Vignettes de rubrique</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-10">
            {VIGNETTES.map((id) => (
              <li key={id} className="flex flex-col items-start gap-3">
                <Vignette id={id} />
                <span className="mat-mention font-subtitle tracking-[0.18em] uppercase mat-ink-2">
                  {vignetteLabel(id)}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- LES MILLÉSIMES ---------- */}
        <section className="mt-24 mb-10">
          <h2 className="font-heading text-2xl mat-ink-1 mb-8">Millésimes du Journal</h2>
          <div className="flex flex-wrap gap-12">
            {['2023', '2024', '2026'].map((y) => (
              <Millesime key={y} year={y} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cabinet;
