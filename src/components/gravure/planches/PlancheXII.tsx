import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Attache,
  ChaineCotes,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  AxeMixte,
  TraceRegulateur,
  ArcRegulateur,
} from '../primitives';

/**
 * PLANCHE XII — EX-LIBRIS HÉRALDIQUE DE LA CHOUETTE.
 * Le folio-chouette développé en grande planche géométrique.
 *   FIG. 1  la construction : cercles, axes et arcs qui engendrent la figure
 *   FIG. 2  la figure achevée, traits de construction effacés
 *   FIG. 3  la déclinaison d'échelle : la même figure à trois tailles
 * Rehaut de laiton unique : L'ŒIL.
 */

export const PLANCHE_XII = {
  numeral: 'XII',
  title: 'Ex-libris héraldique de la chouette',
  desc:
    "Gravure au trait, planche à trois figures, développant l'emblème du registre en dessin géométrique. FIGURE 1, la construction : un cercle directeur, ses deux axes en trait mixte, deux cercles secondaires d'égal rayon posés symétriquement sur l'axe horizontal, et une série d'arcs de compas au trait ultrafin qui engendrent la silhouette ; tous les points de construction sont marqués d'un petit repère, et rien n'est posé sans être obtenu. FIGURE 2, la figure achevée : les deux disques deviennent les yeux, l'un d'eux rehaussé de laiton, un trait vertical légèrement incliné forme le bec, un arc supérieur ferme la tête, deux courtes obliques marquent les aigrettes ; les traits de construction ont disparu, seule reste la figure. FIGURE 3, la déclinaison d'échelle : la même figure répétée à trois tailles, du grand format de planche au sceau de cartouche, montrant que le dessin tient à toute réduction parce qu'il est construit et non stylisé ; sous la plus petite, une chaîne de cotes symbolique rappelle les rapports. Aucun texte, aucune devise, aucune date ne figure dans l'emblème. Nomenclature de six entrées et cartouche.",
  viewBox: '0 0 1240 900',
};

/** La figure achevée : deux yeux, un bec, la calotte, deux aigrettes. */
const Figure = ({ s = 1, or = true }: { s?: number; or?: boolean }) => (
  <g transform={`scale(${s})`}>
    <path d="M-90 -10 A 90 90 0 0 1 90 -10" fill="none" stroke={ENCRE} strokeWidth={FORT} />
    <path d="M-90 -10 A 92 110 0 0 0 90 -10" fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
    <circle cx={-42} cy={-6} r={26} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <circle cx={42} cy={-6} r={26} fill="none" stroke={or ? LAITON : ENCRE} strokeWidth={or ? FORT : MOYEN} />
    <circle cx={42} cy={-6} r={7} fill={or ? LAITON : ENCRE} />
    <line x1={0} y1={-24} x2={-6} y2={22} stroke={ENCRE} strokeWidth={FORT} />
    <path d="M-78 -58 l-16 -26 M78 -58 l16 -26" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
  </g>
);

export const PlancheXIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LA CONSTRUCTION ================= */}
    <RepereFigure x={60} y={96} n="1" title="Construction géométrique" w={300} />

    <g transform="translate(310 330)">
      <ArcRegulateur cx={0} cy={0} r={150} />
      <ArcRegulateur cx={-42} cy={-6} r={80} />
      <ArcRegulateur cx={42} cy={-6} r={80} />
      <TraceRegulateur d="M-190 -6 H190 M0 -196 V150" />
      <TraceRegulateur d="M-150 -110 L150 -110" />
      <AxeMixte x1={-42} y1={-150} x2={-42} y2={110} />
      <AxeMixte x1={42} y1={-150} x2={42} y2={110} />
      <circle cx={-42} cy={-6} r={26} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={42} cy={-6} r={26} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <path d="M-90 -10 A 90 90 0 0 1 90 -10" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      {[
        [-42, -6],
        [42, -6],
        [0, -6],
        [0, -96],
        [-90, -10],
        [90, -10],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={2.8} fill={OXYDE} />
        </g>
      ))}
      <Pastille x={-176} y={-140} n={1} />
      <Pastille x={0} y={172} n={2} />
      <Attache x={90} y={-10} dx={110} dy={-88} label="Point obtenu" />
    </g>

    {/* ================= FIG. 2 — LA FIGURE ACHEVÉE ================= */}
    <RepereFigure x={720} y={96} n="2" title="Figure achevée" w={280} />

    <g transform="translate(960 330)">
      <Figure s={1.25} />
      <Pastille x={-160} y={-130} n={3} />
      <Pastille x={70} y={130} n={4} />
    </g>

    {/* ================= FIG. 3 — DÉCLINAISON D'ÉCHELLE ================= */}
    <RepereFigure x={60} y={560} n="3" title="Déclinaison d'échelle" w={300} />

    <g transform="translate(240 680)">
      <Figure s={0.62} or />
    </g>
    <g transform="translate(560 690)">
      <Figure s={0.36} or={false} />
    </g>
    <g transform="translate(760 694)">
      <Figure s={0.2} or={false} />
    </g>
    <CercleDetail cx={760} cy={694} r={54} label="Sceau" />
    <ChaineCotes y={770} points={[240, 560, 760]} labels={['r', 'r']} attache={730} />
    <Pastille x={240} y={600} n={5} />
    <Pastille x={760} y={620} n={6} />

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={880}
      y={600}
      perCol={6}
      items={[
        'Cercle directeur',
        'Axes de construction',
        'Calotte : arc supérieur',
        'Œil, rehaut unique',
        'Grand format de planche',
        'Réduction en sceau de cartouche',
      ]}
    />

    <Cartouche x={880} y={790} numeral="XII" title="Ex-libris héraldique de la chouette" echelle="Éch. symb." />
  </>
);
