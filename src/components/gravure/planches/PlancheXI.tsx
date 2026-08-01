import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  poche,
  Attache,
  ChaineCotes,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  AxeMixte,
  TraceCache,
  TraceRegulateur,
  ArcRegulateur,
  PastilleLettre,
  NomenclatureLettres,
} from '../primitives';

/**
 * PLANCHE XI — LE SCEAU EN ÉCLATÉ.
 * Vocabulaire d'outillage de frappe : matrice, contre-matrice, portée,
 * dépouille, gorge, empreinte.
 *   FIG. 1  vue éclatée : matrice, flan, contre-matrice sur un axe commun
 *   FIG. 2  coupe en position fermée : la frappe, jeux exagérés
 *   FIG. 3  l'empreinte obtenue, à plat
 * Rehaut de laiton unique : L'EMPREINTE.
 */

const AX = 380; // axe commun de l'éclaté

export const PLANCHE_XI = {
  numeral: 'XI',
  title: 'Le sceau en éclaté',
  desc:
    "Gravure au trait, planche à trois figures, décrivant un outillage de frappe. FIGURE 1, vue éclatée sur un axe commun en trait mixte : de haut en bas, la matrice avec sa queue de fixation et sa portée, le flan à marquer figuré par un disque mince, et la contre-matrice avec sa gorge de dégagement et sa dépouille ; les pièces sont pochées acier, les faces gravées sont indiquées par un trait fort, les faces d'appui par un trait moyen, et les jeux de montage sont exagérés pour la lisibilité. FIGURE 2, coupe en position fermée : les deux matrices se rejoignent sur le flan, la matière est refoulée dans le creux de la gravure, l'excédent est chassé vers la gorge ; huit lettres renvoient à la nomenclature secondaire décrivant portée, dépouille, gorge, congé et arête de frappe. FIGURE 3, l'empreinte obtenue, vue à plat : un cercle simple, un anneau intérieur, et un motif géométrique de deux disques et d'un trait, rehaussé de laiton, dont le tracé régulateur est laissé apparent au trait ultrafin. Aucune inscription lisible ne figure dans l'empreinte. Les cotations sont symboliques. Nomenclature de sept entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '640 380 400 300',
};

export const PlancheXIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — VUE ÉCLATÉE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Vue éclatée sur axe commun" w={310} />

    <AxeMixte x1={AX} y1={130} x2={AX} y2={640} />

    {/* matrice */}
    <g>
      <rect x={AX - 130} y={160} width={260} height={72} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
      <rect x={AX - 34} y={116} width={68} height={44} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      {/* face gravée, en creux */}
      <path d={`M${AX - 92} 232 l18 -20 h148 l18 20`} fill="none" stroke={ENCRE} strokeWidth={FORT} />
      <Pastille x={AX + 158} y={196} n={1} />
    </g>

    {/* flan */}
    <g>
      <rect x={AX - 108} y={306} width={216} height={18} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      <Pastille x={AX + 138} y={315} n={2} />
    </g>

    {/* contre-matrice */}
    <g>
      <rect x={AX - 130} y={402} width={260} height={72} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
      <path d={`M${AX - 92} 402 l18 22 h148 l18 -22`} fill="none" stroke={ENCRE} strokeWidth={FORT} />
      {/* gorge de dégagement */}
      <path d={`M${AX - 130} 430 h-22 v14 h22`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d={`M${AX + 130} 430 h22 v14 h-22`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <Pastille x={AX + 158} y={438} n={3} />
      <TraceCache d={`M${AX - 40} 474 v46 M${AX + 40} 474 v46`} />
    </g>

    <ChaineCotes y={AX + 210} vertical points={[160, 232, 306, 402, 474]} labels={['h', 'j', 'j', 'h']} attache={AX + 150} />
    <Attache x={AX} y={324} dx={-190} dy={70} label="Jeu de montage, exagéré" anchor="end" />

    {/* ================= FIG. 2 — COUPE EN POSITION FERMÉE ================= */}
    <RepereFigure x={660} y={410} n="2" title="Position fermée, la frappe" w={300} />

    <g transform="translate(840 560)">
      <CercleDetail cx={0} cy={0} r={140} label="x3" />
      <rect x={-120} y={-84} width={240} height={64} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
      <rect x={-120} y={20} width={240} height={64} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
      {/* le flan pris entre les deux, matière refoulée */}
      <path d="M-120 -20 h240 v40 h-240 z" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M-60 -20 q22 20 0 40 M60 -20 q-22 20 0 40" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <AxeMixte x1={0} y1={-120} x2={0} y2={120} />
      <PastilleLettre x={-134} y={-96} l="a" />
      <PastilleLettre x={-62} y={-44} l="b" />
      <PastilleLettre x={0} y={-8} l="c" />
      <PastilleLettre x={64} y={-44} l="d" />
      <PastilleLettre x={132} y={4} l="e" />
      <PastilleLettre x={70} y={62} l="f" />
      <PastilleLettre x={-4} y={102} l="g" />
      <PastilleLettre x={-128} y={58} l="h" />
    </g>

    <NomenclatureLettres
      x={430}
      y={452}
      items={[
        'Portée de matrice',
        'Congé de raccordement',
        'Creux de gravure',
        'Arête de frappe',
        'Gorge de dégagement',
        'Dépouille',
        "Face d'appui",
        'Excédent chassé',
      ]}
    />

    {/* ================= FIG. 3 — L'EMPREINTE ================= */}
    <RepereFigure x={60} y={620} n="3" title="Empreinte obtenue" w={280} />

    <g transform="translate(250 700)">
      <ArcRegulateur cx={0} cy={0} r={100} />
      <TraceRegulateur d="M-100 0 h200 M0 -100 v100" />
      <circle cx={0} cy={0} r={82} fill="none" stroke={ENCRE} strokeWidth={FORT} />
      <circle cx={0} cy={0} r={68} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.8" />
      {/* le motif : deux disques et un trait, en laiton */}
      <circle cx={-24} cy={0} r={13} fill="none" stroke={LAITON} strokeWidth={MOYEN} />
      <circle cx={24} cy={0} r={13} fill="none" stroke={LAITON} strokeWidth={MOYEN} />
      <line x1={0} y1={-20} x2={-5} y2={20} stroke={LAITON} strokeWidth={FORT} />
      <Pastille x={96} y={-72} n={4} />
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={620}
      y={690}
      perCol={4}
      colGap={300}
      items={[
        'Matrice et queue de fixation',
        'Flan à marquer',
        'Contre-matrice',
        'Empreinte obtenue',
        'Axe commun de frappe',
        'Gorge de dégagement',
        'Tracé régulateur du motif',
      ]}
    />

    <Cartouche x={880} y={790} numeral="XI" title="Le sceau en éclaté" echelle="Éch. symb." />
  </>
);
