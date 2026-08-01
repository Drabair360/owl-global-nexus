import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Cadre,
  poche,
  Attache,
  ChaineCotes,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  AxeMixte,
  TraceCache,
  PastilleLettre,
  NomenclatureLettres,
} from '../primitives';

/**
 * PLANCHE IX — LA LUNETTE DU SCOUT.
 * Nature morte technique, vocabulaire d'instrument : corps, tirage,
 * objectif, oculaire, molette, réticule.
 *   FIG. 1  la longue-vue en coupe longitudinale, carnet et compas posés
 *   FIG. 2  détail x4 de l'oculaire et du réticule
 *   FIG. 3  le carnet ouvert : grille de relevé, cinq lignes vides
 * Rehaut de laiton unique : L'OCULAIRE.
 */

export const PLANCHE_IX = {
  numeral: 'IX',
  title: 'La lunette du scout',
  desc:
    "Gravure au trait, nature morte technique en trois figures. FIGURE 1, une longue-vue dessinée en coupe longitudinale, posée en biais : corps principal poché acier, deux tirages emboîtés dont les jeux sont exagérés, objectif à l'avant figuré par deux lentilles biconvexes, diaphragme intermédiaire, oculaire à l'arrière rehaussé de laiton ; sous l'instrument, un carnet fermé à couverture cousue et un compas à pointes sèches à demi ouvert reposent sur un plan de travail figuré par un unique trait fort ; l'ombre n'est jamais rendue, seule la ligne travaille. Une chaîne de cotes symboliques donne le tirage. FIGURE 2, détail à quatre fois l'échelle de l'oculaire : bonnette, lentille, réticule gravé en croix fine, molette de mise au point crantée, filetage figuré par une suite de traits obliques ; huit lettres renvoient à la nomenclature secondaire. FIGURE 3, le carnet ouvert : une grille de relevé à cinq lignes et quatre colonnes, en-têtes en petites capitales, lignes laissées vides parce que le relevé appartient à celui qui observe ; un signet en trait fin marque la page. Aucun texte descriptif ne figure dans le dessin. Nomenclature de huit entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '820 380 380 300',
};

export const PlancheIXDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LA LONGUE-VUE EN COUPE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Longue-vue, coupe longitudinale" w={340} />

    <g transform="translate(110 250) rotate(-9)">
      {/* corps et tirages */}
      <rect x={0} y={-34} width={280} height={68} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
      <rect x={280} y={-27} width={130} height={54} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={410} y={-20} width={96} height={40} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      <AxeMixte x1={-30} y1={0} x2={560} y2={0} />

      {/* objectif : deux lentilles biconvexes */}
      <path d="M6 -30 q16 30 0 60 q-16 -30 0 -60" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M34 -24 q13 24 0 48 q-13 -24 0 -48" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
      {/* diaphragme */}
      <line x1={168} y1={-34} x2={168} y2={-12} stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={168} y1={34} x2={168} y2={12} stroke={ENCRE} strokeWidth={MOYEN} />

      {/* oculaire : unique rehaut de laiton */}
      <rect x={498} y={-16} width={26} height={32} fill="hsl(var(--gravure-fond))" stroke={LAITON} strokeWidth={FORT} />
      <line x1={524} y1={-10} x2={536} y2={-10} stroke={LAITON} strokeWidth={MOYEN} />
      <line x1={524} y1={10} x2={536} y2={10} stroke={LAITON} strokeWidth={MOYEN} />

      {/* molette crantée */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={300 + i * 8} y1={-27} x2={300 + i * 8} y2={-38} stroke={ENCRE} strokeWidth={FIN} />
      ))}
      <ChaineCotes y={70} points={[0, 280, 410, 506]} labels={['c', 't', 't']} attache={38} />
    </g>

    <Pastille x={140} y={190} n={1} />
    <Pastille x={620} y={198} n={2} />
    <Attache x={600} y={228} dx={96} dy={-64} label="Oculaire" />

    {/* carnet fermé et compas posés */}
    <g transform="translate(150 420)">
      <Cadre x={0} y={0} w={190} h={116} weight={MOYEN} />
      <path d="M0 0 l-12 10 v116 l12 -10 z" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {[18, 30, 42].map((y) => (
        <line key={y} x1={-10} y1={y} x2={-2} y2={y - 6} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      <Pastille x={190} y={16} n={3} />
    </g>
    <g transform="translate(420 430)">
      <path d="M0 0 L-52 108 M0 0 L44 110" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={0} cy={0} r={7} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <path d="M-52 108 l-6 12 M44 110 l6 12" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <path d="M-30 62 q30 16 58 4" fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />
      <Pastille x={62} y={72} n={4} />
    </g>
    <Trait x1={90} y1={562} x2={760} y2={562} w={FORT} />

    {/* ================= FIG. 2 — DÉTAIL DE L'OCULAIRE ================= */}
    <RepereFigure x={840} y={410} n="2" title="Oculaire et réticule x4" w={290} />

    <g transform="translate(1010 560)">
      <CercleDetail cx={0} cy={0} r={140} label="x4" />
      <rect x={-90} y={-70} width={180} height={140} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M-70 -54 q40 54 0 108" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={16} cy={0} r={54} fill="none" stroke={LAITON} strokeWidth={MOYEN} />
      <path d="M-38 0 h108 M16 -54 v108" stroke={ENCRE} strokeWidth={ULTRAFIN} />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1={90} y1={-64 + i * 12} x2={104} y2={-70 + i * 12} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      <PastilleLettre x={-108} y={-84} l="a" />
      <PastilleLettre x={-46} y={-58} l="b" />
      <PastilleLettre x={16} y={-88} l="c" />
      <PastilleLettre x={78} y={-52} l="d" />
      <PastilleLettre x={116} y={16} l="e" />
      <PastilleLettre x={62} y={94} l="f" />
      <PastilleLettre x={-30} y={100} l="g" />
      <PastilleLettre x={-116} y={40} l="h" />
    </g>

    <NomenclatureLettres
      x={820}
      y={470}
      items={[
        'Bonnette',
        'Lentille de champ',
        'Réticule gravé',
        'Bague de serrage',
        'Filetage de tirage',
        'Molette de mise au point',
        'Butée de tirage',
        'Corps arrière',
      ]}
    />

    {/* ================= FIG. 3 — LE CARNET OUVERT ================= */}
    <RepereFigure x={60} y={620} n="3" title="Carnet de relevé" w={280} />

    <g transform="translate(90 650)">
      <Cadre x={0} y={0} w={420} h={140} weight={MOYEN} />
      <line x1={210} y1={0} x2={210} y2={140} stroke={ENCRE} strokeWidth={FIN} />
      {[28, 56, 84, 112].map((y) => (
        <line key={y} x1={0} y1={y} x2={420} y2={y} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
      ))}
      {[105, 315].map((x) => (
        <line key={x} x1={x} y1={0} x2={x} y2={140} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
      ))}
      <text className="gravure-lettrage" x={10} y={20} fontSize="11">
        Objet
      </text>
      <text className="gravure-lettrage" x={115} y={20} fontSize="11">
        Source
      </text>
      <text className="gravure-lettrage" x={220} y={20} fontSize="11">
        Suite
      </text>
      <text className="gravure-lettrage" x={325} y={20} fontSize="11">
        Date
      </text>
      <TraceCache d="M380 -12 v40" />
      <Pastille x={440} y={70} n={5} />
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={620}
      y={680}
      perCol={4}
      colGap={300}
      items={[
        'Objectif à deux lentilles',
        'Oculaire',
        'Carnet fermé',
        'Compas à pointes sèches',
        'Grille de relevé',
        'Diaphragme intermédiaire',
        'Tirages emboîtés',
        'Plan de travail',
      ]}
    />

    <Cartouche x={880} y={790} numeral="IX" title="La lunette du scout" echelle="Éch. symb." />
  </>
);
