import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTRES, NOTES } from '@/content/registres';
import { useSEO } from '@/hooks/useSEO';
import Vignette from '@/components/gravure/Vignette';

/**
 * /studio/registres — PROPOSITION ÉDITORIALE, RELECTURE MOT À MOT.
 * Registres de savoir (§4a) et notes de marge (§4b) présentés dans le
 * gabarit réel : colonne d'appel à gauche, registre à droite.
 * Route non liée, noindex. Aucun de ces textes n'est en production.
 */
const noteById = (id: string) => NOTES.find((n) => n.id === id);

const compteMots = (t: string[]) => t.join(' ').split(/\s+/).filter(Boolean).length;

const Registres = () => {
  useSEO({
    title: 'Registres de savoir - proposition',
    description: 'Proposition éditoriale : registres de savoir et notes de marge, en relecture.',
    noindex: true,
  });

  return (
    <main className="min-h-screen mat-gres mat-grain">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-16 max-w-3xl">
          <div className="mat-mention font-subtitle tracking-[0.28em] uppercase mat-ink-accent mb-3">
            Proposition - non publiée
          </div>
          <h1 className="font-display text-4xl md:text-5xl mat-ink-1 mb-4">Registres de savoir et notes de marge</h1>
          <p className="mat-prose mat-ink-2">
            Huit registres, dix notes de marge. Charte appliquée : trois temps, phrases courtes, aucun chiffre,
            aucun « nous avons », aucun superlatif, aucun terme banni. Français d'abord ; l'anglais se rédigera
            après validation, en réécriture. Les planches se relisent sur{' '}
            <Link className="underline" to="/studio/cabinet">
              /studio/cabinet
            </Link>
            .
          </p>
        </header>

        <div className="space-y-24">
          {REGISTRES.map((r) => (
            <article key={r.id} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* colonne d'appel : notes de marge, deux au plus par écran */}
              <aside className="md:col-span-3 space-y-8">
                <div className="mat-mention font-subtitle tracking-[0.22em] uppercase mat-ink-accent">
                  {r.page}
                </div>
                {r.notes.slice(0, 2).map((id) => {
                  const n = noteById(id);
                  if (!n) return null;
                  return (
                    <div key={id} className="border-t pt-3" style={{ borderColor: 'hsl(var(--mat-on-gres-1) / 0.22)' }}>
                      <div className="mat-mention font-subtitle tracking-[0.22em] uppercase mat-ink-accent">
                        {n.terme}
                      </div>
                      <p className="mt-2 text-sm mat-ink-2 font-body leading-relaxed">{n.texte}</p>
                    </div>
                  );
                })}
              </aside>

              <div className="md:col-span-9">
                <h2 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-6">{r.titre}</h2>
                <div className="space-y-5 max-w-2xl">
                  {r.temps.map((p, i) => (
                    <p key={i} className="mat-prose mat-ink-2">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-6 mat-mention font-subtitle tracking-[0.18em] uppercase mat-ink-2">
                  {compteMots(r.temps)} mots - trois temps
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* table des notes */}
        <section className="mt-28">
          <div className="flex items-center gap-4 mb-8">
            <Vignette id="journal" size={40} />
            <h2 className="font-heading text-2xl mat-ink-1">Table des notes de marge</h2>
          </div>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {NOTES.map((n) => (
              <div key={n.id} className="border-t pt-3" style={{ borderColor: 'hsl(var(--mat-on-gres-1) / 0.22)' }}>
                <dt className="mat-mention font-subtitle tracking-[0.22em] uppercase mat-ink-accent">{n.terme}</dt>
                <dd className="mt-2 text-sm mat-ink-2 font-body leading-relaxed">{n.texte}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
};

export default Registres;
