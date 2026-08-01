import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN } from '../defs';
import { GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Cadre,
  BulleAxe,
  RepereNiveau,
  ChaineCotes,
  Attache,
  Rupture,
  poche,
  Boulon,
  FileDeBoulons,
  Gousset,
  Soudure,
  CercleDetail,
  StratesSol,
  FlechePente,
  RepereFigure,
  Pastille,
  Nomenclature,
  HachuresVivantes,
  TraitCache,
  TraceCache,
  AxeMixte,
  Raidisseur,
  Crapaud,
  Echantignole,
  PanneZ,
  LisseC,
  SoudureISO,
  AncrageCrochet,
  EcrouRondelle,
  LigneDeCoupe,
  PastilleLettre,
  NomenclatureLettres,
} from '../primitives';

/**
 * PLANCHE I v3 — L'INVENTAIRE CONSTRUCTIF INTÉGRAL (planche de référence).
 *
 * Composition de planche, jamais un dessin isolé :
 *   FIG. 1  coupe transversale A-A, du bon sol au faîtage
 *   FIG. 2  nœud jarret-traverse, détail d'exécution à cinq fois l'échelle
 *   FIG. 3  plan de repérage : files A-B-C, trames 1-2-3, ligne de coupe A-A
 *   Nomenclature ① → ⑩ (ordre = chemin des charges, de haut en bas),
 *   nomenclature secondaire ⓐ → ⓗ du cercle de détail, cartouche.
 *
 * Quatre familles de trait : continu (vu) / interrompu fin (caché) /
 * mixte ultrafin (axes) / rupture. Cotes symboliques uniquement.
 * Rehaut de laiton unique : la LIGNE DE SOL ±0,00 et l'arase du dallage.
 */

const SOL = 560;
const A = 200;
const B = 470;
const C = 740;
const TETE = 262; // arase des poteaux
const FAITAGE = 150;
const H1 = 340; // niveau du chemin de roulement
const PENTE = (Math.atan2(TETE - FAITAGE, B - A) * 180) / Math.PI; // ≈ 22,5°

/** Point de la traverse à l'abscisse x (versant gauche puis droit). */
const traverse = (x: number) =>
  x <= B
    ? TETE - ((x - A) / (B - A)) * (TETE - FAITAGE)
    : FAITAGE + ((x - B) / (C - B)) * (TETE - FAITAGE);

/* FIG. 2 — centre et rayon du cercle de détail (×5, ~29 % de la largeur). */
const D2X = 760;
const D2Y = 1020;
const D2R = 170;

export const PLANCHE_I = {
  numeral: 'I',
  title: "Coupe transversale d'une unité industrielle type",
  desc:
    "Gravure au trait, planche à trois figures. FIGURE 1, coupe transversale d'un bâtiment industriel générique, du bon sol au faîtage : le terrain est figuré en trois strates - remblai pointé, terrain hachuré large, bon sol hachuré serré - séparées par des interfaces irrégulières, et le terrain naturel descend en pente légère hors emprise, repéré TN. Deux semelles isolées, en poché béton de hachures croisées serrées, reposent sur un béton de propreté et sont reliées par une longrine ; leurs armatures sont évoquées en U. Au-dessus, le dallage se lit en couches : hérisson pointé, film sous dalle en trait fin continu, isolant en double trait, dalle pochée, avec un joint de dilatation repéré en son milieu ; l'arase du dallage est raccordée en laiton au niveau zéro. La ligne de sol, rehaussée de laiton et cotée au niveau zéro, traverse la planche. Deux poteaux en I, âme et semelles lisibles, montent sur des platines de pied posées sur un calage au mortier ; leurs boulons d'ancrage à crochet et leur bêche, noyés dans le béton, sont dessinés en trait interrompu, tandis que rondelles et écrous sont évoqués au-dessus de la platine. Les poteaux portent un portique à jarrets : les traverses montent au faîtage, les pannes sont des profils en Z posés inclinés sur des échantignoles, reliés par des liernes en trait fin interrompu ; des lisses en C, régulièrement espacées, portent le bardage double peau. Un contreventement en croix, arrivant sur de petits goussets à ses nœuds, occupe une travée de versant, interrompu par une ligne de rupture. À mi-hauteur, un corbeau soudé porte le chemin de roulement, rail fixé par crapauds sur une poutre raidie à l'appui, sur lequel roule un pont à galets équipé d'un palan et d'un crochet ; le gabarit de levage est figuré en pointillé, car projeté. La couverture porte une flèche de pente, un chéneau et une descente d'eaux pluviales en rive. Un réseau technique en pointillé porte la mention PROJETÉ. Les files A, B et C sont repérées par des bulles d'axe à trait mixte, une chaîne de cotes symboliques court en pied, trois repères de niveau donnent le zéro, le niveau de roulement et le faîtage, et dix pastilles numérotées suivent le chemin des charges de haut en bas. FIGURE 2, dans un grand cercle de détail à cinq fois l'échelle, le nœud jarret-traverse dessiné en détail d'exécution : jarret formé d'un tronçon de profilé refendu en biseau dont on lit la semelle inférieure oblique et l'âme, platine d'about débordant la semelle supérieure de la traverse, quatre rangées de deux boulons dont la rangée haute dans le débord, axes de rangées en trait mixte et entraxes cotés symboliquement, deux paires de raidisseurs transversaux dans le poteau alignés sur les semelles de la traverse et du jarret, symboles de soudure à ligne de repère fléchée et gorge symbolique, jeu de calage exagéré entre platine et aile du poteau, et une petite vue de la platine montrant la disposition des boulons. Huit lettres renvoient à la nomenclature secondaire. FIGURE 3, plan de repérage : files A, B, C et trames 1, 2, 3 perpendiculaires, entraxe des portiques rappelé, ligne de coupe A-A normalisée à trait mixte fort aux extrémités et flèches de sens du regard. Un cartouche porte le numéro de planche, son titre, l'échelle graphique et le sceau du registre.",
  viewBox: '0 0 1240 1240',
  /** §3b — le détail compagnon recadre la FIGURE 2 agrandie. */
  detailViewBox: '576 836 368 368',
};

export const PlancheIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />
    <defs>
      <clipPath id={`${p}-fig2`}>
        <circle cx={D2X} cy={D2Y} r={D2R} />
      </clipPath>
      <clipPath id={`${p}-masse`}>
        <rect x="980" y="150" width="180" height="110" />
      </clipPath>
    </defs>

    {/* ================= FIG. 1 — COUPE TRANSVERSALE A-A ================= */}
    <RepereFigure x={60} y={96} n="1" title="Coupe transversale A-A" w={300} />

    {/* — calque 1 : LE SOL EN STRATES + TERRAIN NATUREL — */}
    <StratesSol p={p} x={60} y={SOL + 20} w={820} h={140} seed={31} />
    <text className="gravure-lettrage" x={64} y={SOL + 40} fontSize="11">
      Remblai
    </text>
    <text className="gravure-lettrage" x={64} y={SOL + 76} fontSize="11">
      Terrain
    </text>
    <text className="gravure-lettrage" x={64} y={SOL + 120} fontSize="11">
      Bon sol
    </text>
    {/* §B7 — le sol n'est jamais horizontal : pente légère hors emprise */}
    <path d={`M60 ${SOL + 26} L118 ${SOL + 20} L150 ${SOL + 16}`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <path d={`M790 ${SOL + 14} L840 ${SOL + 22} L880 ${SOL + 30}`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <text className="gravure-lettrage" x={806} y={SOL + 12} fontSize="11">
      TN
    </text>
    <text className="gravure-lettrage" x={62} y={SOL + 16} fontSize="11">
      TN
    </text>

    {/* — calque 2 : FONDATIONS — */}
    {[A, C].map((x) => (
      <g key={x}>
        {/* béton de propreté */}
        <rect x={x - 66} y={640} width={132} height={10} fill="hsl(var(--gravure-fond))" />
        <rect x={x - 66} y={640} width={132} height={10} fill={poche(p, 'beton')} opacity="0.6" />
        <Cadre x={x - 66} y={640} w={132} h={10} weight={FIN} over={1.5} />
        {/* semelle isolée */}
        <rect x={x - 55} y={580} width={110} height={60} fill="hsl(var(--gravure-fond))" />
        <rect x={x - 55} y={580} width={110} height={60} fill={poche(p, 'beton')} />
        <Cadre x={x - 55} y={580} w={110} h={60} weight={FORT} />
        {/* armatures en U évoquées */}
        <path
          d={`M${x - 40} 592 v30 q0 8 8 8 h64 q8 0 8 -8 v-30`}
          fill="none"
          stroke={ENCRE}
          strokeWidth={MOYEN}
          opacity="0.85"
        />
        <line x1={x - 40} y1={600} x2={x + 40} y2={600} stroke={ENCRE} strokeWidth={FIN} opacity="0.6" />
      </g>
    ))}
    {/* longrine */}
    <rect x={A + 55} y={586} width={C - A - 110} height={20} fill="hsl(var(--gravure-fond))" />
    <rect x={A + 55} y={586} width={C - A - 110} height={20} fill={poche(p, 'beton')} />
    <Cadre x={A + 55} y={586} w={C - A - 110} h={20} weight={MOYEN} over={1.5} />

    {/* — calque 3 : DALLAGE EN COUCHES (hérisson, film, isolant, dalle) — */}
    <rect x={A} y={562} width={C - A} height={18} fill="hsl(var(--gravure-fond))" />
    <rect x={A} y={562} width={C - A} height={18} fill={`url(#${p}-sol-remblai)`} />
    <Cadre x={A} y={562} w={C - A} h={18} weight={FIN} over={1.5} />
    {/* isolant : double trait */}
    <line x1={A} y1={556} x2={C} y2={556} stroke={ENCRE} strokeWidth={FIN} />
    <line x1={A} y1={561} x2={C} y2={561} stroke={ENCRE} strokeWidth={FIN} />
    {/* §B6 — film sous dalle : trait fin continu entre isolant et dalle */}
    <line x1={A} y1={557.6} x2={C} y2={557.6} stroke={ENCRE} strokeWidth={FIN} opacity="0.55" />
    <Attache x={C - 40} y={557.6} dx={82} dy={-58} label="Film sous dalle" />
    {/* dalle */}
    <rect x={A} y={540} width={C - A} height={16} fill="hsl(var(--gravure-fond))" />
    <rect x={A} y={540} width={C - A} height={16} fill={poche(p, 'beton')} />
    <Cadre x={A} y={540} w={C - A} h={16} weight={MOYEN} over={1.5} />
    {/* joint de dilatation */}
    <line x1={B} y1={538} x2={B} y2={558} stroke={ENCRE} strokeWidth={FORT} />
    <Attache x={B} y={540} dx={92} dy={-34} label="Joint de dilatation" />

    {/* — calque 4 : ±0,00 — L'UNIQUE REHAUT DE LAITON (sol + arase dallage) — */}
    <line x1="60" y1={SOL} x2="880" y2={SOL} stroke={LAITON} strokeWidth={FORT} />
    <line x1={C} y1={540} x2={C + 26} y2={540} stroke={LAITON} strokeWidth={FIN} />
    <line x1={C + 26} y1={540} x2={C + 26} y2={SOL} stroke={LAITON} strokeWidth={FIN} strokeDasharray="5 4" />
    <RepereNiveau x={852} y={SOL} label="±0,00" rappel={812} or />

    {/* — calque 5 : POTEAUX, PLATINES, CALAGE, ANCRAGES CACHÉS — */}
    {[A, C].map((x) => (
      <g key={`pot${x}`}>
        {/* semelles du profil */}
        <Trait x1={x - 14} y1={TETE} x2={x - 14} y2={SOL - 13} w={FORT} />
        <Trait x1={x + 14} y1={TETE} x2={x + 14} y2={SOL - 13} w={FORT} />
        {/* âme */}
        <line x1={x - 4} y1={TETE + 4} x2={x - 4} y2={SOL - 14} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
        <line x1={x + 4} y1={TETE + 4} x2={x + 4} y2={SOL - 14} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
        {/* §B9 — semelle arrière du poteau au droit du bardage : masquée */}
        <TraitCache x1={x + (x === A ? -20 : 20)} y1={TETE + 10} x2={x + (x === A ? -20 : 20)} y2={SOL - 14} opacity={0.55} />
        {/* platine de pied, poché acier */}
        <rect x={x - 30} y={SOL - 13} width={60} height={9} fill={poche(p, 'acier')} />
        <Cadre x={x - 30} y={SOL - 13} w={60} h={9} weight={MOYEN} over={1.5} />
        {/* §B1 — calage au mortier : couche fine, pochée distincte */}
        <rect x={x - 30} y={SOL - 4} width={60} height={4} fill="hsl(var(--gravure-fond))" />
        <rect x={x - 30} y={SOL - 4} width={60} height={4} fill={poche(p, 'pierre')} opacity="0.85" />
        <Cadre x={x - 30} y={SOL - 4} w={60} h={4} weight={FIN} over={1.2} />
        {/* écrous et rondelles au-dessus de la platine */}
        <EcrouRondelle x={x - 22} y={SOL - 13} />
        <EcrouRondelle x={x + 22} y={SOL - 13} />
        {/* boulons d'ancrage À CROCHET, noyés : trait interrompu */}
        <AncrageCrochet x={x - 22} y={SOL - 13} h={74} dir={-1} />
        <AncrageCrochet x={x + 22} y={SOL - 13} h={74} dir={1} />
        {/* bêche, noyée elle aussi */}
        <TraceCache d={`M${x - 7} ${SOL} v24 h14 v-24`} />
      </g>
    ))}

    {/* — calque 6 : PORTIQUE À JARRETS, PANNES EN Z, CONTREVENTEMENT — */}
    <g>
      {/* traverses : double filet (semelles du profil) */}
      <Trait x1={A} y1={TETE} x2={B} y2={FAITAGE} w={FORT} />
      <Trait x1={A} y1={TETE + 20} x2={B} y2={FAITAGE + 20} w={MOYEN} />
      <Trait x1={C} y1={TETE} x2={B} y2={FAITAGE} w={FORT} />
      <Trait x1={C} y1={TETE + 20} x2={B} y2={FAITAGE + 20} w={MOYEN} />
      {/* jarrets : tronçon de profilé refendu (démontré en FIG. 2) */}
      <Gousset d={`M${A + 14} ${TETE + 4} L${A + 96} ${TETE - 14} L${A + 96} ${TETE + 6} L${A + 14} ${TETE + 58} z`} />
      <Gousset d={`M${C - 14} ${TETE + 4} L${C - 96} ${TETE - 14} L${C - 96} ${TETE + 6} L${C - 14} ${TETE + 58} z`} />
      {/* §B3 — pannes en Z sur échantignoles + liernes en trait fin interrompu */}
      {[0.22, 0.42, 0.62, 0.82].map((t) => {
        const xl = A + t * (B - A);
        const xr = C - t * (C - B);
        return (
          <g key={t}>
            <PanneZ x={xl} y={traverse(xl) - 9} a={-PENTE} />
            <Echantignole x={xl} y={traverse(xl) - 1} a={-PENTE} />
            <PanneZ x={xr} y={traverse(xr) - 9} a={PENTE} s={-1} />
            <Echantignole x={xr} y={traverse(xr) - 1} a={PENTE} />
          </g>
        );
      })}
      {[[0.22, 0.42], [0.42, 0.62], [0.62, 0.82]].map(([t1, t2]) => {
        const x1 = A + t1 * (B - A);
        const x2 = A + t2 * (B - A);
        return (
          <TraitCache
            key={t1}
            x1={x1}
            y1={traverse(x1) - 9}
            x2={x2}
            y2={traverse(x2) - 9}
            opacity={0.6}
          />
        );
      })}
      {/* contreventement en croix, gousseté à ses nœuds */}
      <line x1={A + 64} y1={traverse(A + 64) + 16} x2={A + 190} y2={traverse(A + 190) + 2} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={A + 64} y1={traverse(A + 64) + 2} x2={A + 190} y2={traverse(A + 190) + 16} stroke={ENCRE} strokeWidth={FIN} />
      <Gousset d={`M${A + 58} ${traverse(A + 58) + 4} l16 -3 l3 17 z`} />
      <Gousset d={`M${A + 196} ${traverse(A + 196) + 2} l-16 -3 l-3 17 z`} />
      <Rupture x={A + 210} y={traverse(A + 214)} length={54} />
    </g>

    {/* — calque 7 : ÉQUIPEMENT DE LEVAGE, RAIL OUTILLÉ — */}
    <g>
      {/* corbeaux soudés */}
      {[A, C].map((x) => {
        const s = x === A ? 1 : -1;
        return (
          <g key={`cor${x}`}>
            <Gousset d={`M${x + 14 * s} ${H1 - 12} L${x + 52 * s} ${H1 - 12} L${x + 14 * s} ${H1 + 26} z`} />
            <Soudure x={x + (s > 0 ? 16 : -50)} y={H1 + 30} />
          </g>
        );
      })}
      {/* poutre de roulement + raidisseurs d'appui au droit des corbeaux */}
      <Cadre x={A + 46} y={H1 - 12} w={C - A - 92} h={20} weight={MOYEN} over={1.5} />
      <Raidisseur p={p} x={A + 50} y={H1 - 10} w={6} h={16} />
      <Raidisseur p={p} x={C - 56} y={H1 - 10} w={6} h={16} />
      {/* rail sur son champignon, fixé par crapauds */}
      <Cadre x={A + 46} y={H1 - 19} w={C - A - 92} h={7} weight={FIN} over={1.2} fill={poche(p, 'acier')} />
      {[A + 130, C - 130].map((x) => (
        <g key={`crap${x}`}>
          <Crapaud x={x - 8} y={H1 - 12} s={-1} />
          <Crapaud x={x + 8} y={H1 - 12} s={1} />
        </g>
      ))}
      {/* pont à galets */}
      <Cadre x={392} y={H1 - 58} w={156} h={32} weight={FORT} />
      <line x1={392} y1={H1 - 42} x2={548} y2={H1 - 42} stroke={ENCRE} strokeWidth={FIN} opacity="0.6" />
      <circle cx={404} cy={H1 - 22} r="7" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={536} cy={H1 - 22} r="7" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {/* palan et crochet */}
      <Cadre x={452} y={H1 - 26} w={40} h={22} weight={MOYEN} over={1.5} />
      <line x1={472} y1={H1 - 4} x2={472} y2={H1 + 92} stroke={ENCRE} strokeWidth={MOYEN} />
      <path d={`M464 ${H1 + 92} a8 8 0 1 0 16 0 v-7`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      {/* gabarit de levage : projeté */}
      <rect
        x={412}
        y={H1 + 108}
        width={120}
        height={88}
        fill="none"
        stroke={OXYDE}
        strokeWidth={FIN}
        strokeDasharray="6 5"
      />
      <text className="gravure-lettrage" x={472} y={H1 + 162} fontSize="11" textAnchor="middle">
        Gabarit de levage
      </text>
    </g>

    {/* — calque 8 : ENVELOPPE — LISSES EN C, BARDAGE, CHÉNEAU — */}
    <g>
      {[A, C].map((x) => {
        const s = x === A ? -1 : 1;
        return (
          <g key={`bard${x}`}>
            {/* §B4 — lisses en C : le bardage tient sur quelque chose */}
            {[300, 360, 420, 480, 534].map((y) => (
              <LisseC key={y} x={x + 18 * s} y={y} s={s} />
            ))}
            {/* bardage double peau */}
            <line x1={x + 24 * s} y1={TETE + 6} x2={x + 24 * s} y2={SOL} stroke={ENCRE} strokeWidth={MOYEN} />
            <line x1={x + 32 * s} y1={TETE + 6} x2={x + 32 * s} y2={SOL} stroke={ENCRE} strokeWidth={FIN} />
            <Rupture x={x + 28 * s} y={392} length={46} vertical />
            {/* chéneau + descente EP */}
            <path
              d={`M${x + 20 * s} ${TETE - 2} l${16 * s} 0 l0 14 l${-16 * s} 0`}
              fill="none"
              stroke={ENCRE}
              strokeWidth={MOYEN}
            />
            <line x1={x + 40 * s} y1={TETE + 14} x2={x + 40 * s} y2={SOL} stroke={ENCRE} strokeWidth={FIN} strokeDasharray="14 5" />
          </g>
        );
      })}
      {/* couverture : peau posée sur les pannes */}
      <Trait x1={A - 6} y1={TETE - 16} x2={B} y2={FAITAGE - 16} w={MOYEN} />
      <Trait x1={C + 6} y1={TETE - 16} x2={B} y2={FAITAGE - 16} w={MOYEN} />
      <FlechePente x={606} y={traverse(606) - 48} dx={78} dy={28} label="Pente symb." />
    </g>

    {/* — calque 9 : RÉSEAUX PROJETÉS — */}
    <g stroke={OXYDE} fill="none" strokeWidth={FIN} strokeDasharray="5 6">
      <path d={`M${A + 60} 226 H${C - 60}`} />
      <path d={`M${A + 60} 226 V${H1 - 74}`} />
      <path d={`M${C - 60} 226 V${H1 - 74}`} />
    </g>
    <text className="gravure-lettrage" x={B} y={216} fontSize="11" textAnchor="middle">
      Réseaux - PROJETÉ
    </text>

    {/* — calque 10 : FILES, NIVEAUX, COTES — */}
    <BulleAxe x={A} y={112} label="A" to={TETE - 26} />
    <BulleAxe x={B} y={112} label="B" to={FAITAGE - 26} />
    <BulleAxe x={C} y={112} label="C" to={TETE - 26} />
    <RepereNiveau x={856} y={H1} label="+H1" rappel={822} />
    <RepereNiveau x={856} y={FAITAGE} label="+H2" rappel={822} />
    <ChaineCotes y={716} points={[A, B, C]} labels={['L1', 'L2']} attache={700} />
    <ChaineCotes y={802} points={[FAITAGE, H1, SOL]} labels={['H2', 'H1']} attache={782} vertical />

    {/* — calque 11 : PASTILLES — l'ordre ①→⑩ suit le chemin des charges — */}
    <Pastille x={A - 52} y={TETE + 4} n={1} />
    <Pastille x={B + 96} y={traverse(B + 96) + 34} n={2} />
    <Pastille x={C - 62} y={traverse(C - 62) - 28} n={3} />
    <Pastille x={A + 108} y={TETE + 2} n={4} />
    <Pastille x={A + 34} y={470} n={5} />
    <Pastille x={A - 46} y={452} n={6} />
    <Pastille x={A + 66} y={H1 + 34} n={7} />
    <Pastille x={C - 76} y={H1 + 34} n={8} />
    <Pastille x={A - 62} y={SOL - 8} n={9} />
    <Pastille x={A} y={610} n={10} />
    {/* renvoi vers la FIG. 2 */}
    <CercleDetail cx={A + 56} cy={TETE + 20} r={46} label="DÉT. 2" />

    {/* ================= FIG. 3 — PLAN DE REPÉRAGE ================= */}
    <RepereFigure x={946} y={116} n="3" title="Plan de repérage" w={230} />
    <g clipPath={`url(#${p}-masse)`}>
      <HachuresVivantes x={980} y={150} w={180} h={110} pas={12} seed={17} opacity={0.3} />
    </g>
    <Cadre x={980} y={150} w={180} h={110} weight={MOYEN} over={1.5} />
    {/* files A-B-C */}
    {[1010, 1070, 1130].map((x, i) => (
      <g key={x}>
        <line x1={x} y1={150} x2={x} y2={260} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="9 3 2 3" opacity="0.7" />
        <text className="gravure-lettrage" x={x} y={144} fontSize="11" textAnchor="middle">
          {['A', 'B', 'C'][i]}
        </text>
      </g>
    ))}
    {/* §B10 — trames 1-2-3 perpendiculaires : la troisième dimension existe */}
    {[178, 205, 232].map((y, i) => (
      <g key={y}>
        <line x1={980} y1={y} x2={1160} y2={y} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="9 3 2 3" opacity="0.7" />
        <text className="gravure-lettrage" x={974} y={y + 4} fontSize="11" textAnchor="end">
          {i + 1}
        </text>
      </g>
    ))}
    <ChaineCotes y={1168} points={[178, 205, 232]} labels={['T', 'T']} attache={1160} vertical />
    {/* §B8 — ligne de coupe A-A normalisée */}
    <LigneDeCoupe x1={968} x2={1172} y={205} label="A" dir={-1} />

    {/* ================= NOMENCLATURE PRINCIPALE ================= */}
    <text className="gravure-lettrage" x={946} y={318} fontSize="14" fill={ENCRE}>
      Nomenclature
    </text>
    <line x1={946} y1={324} x2={1176} y2={324} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
    <Nomenclature
      x={954}
      y={350}
      lineHeight={21}
      items={[
        'Couverture et chéneau',
        'Panne en Z et échantignole',
        'Traverse de portique',
        'Jarret',
        'Poteau',
        'Lisse et bardage double peau',
        'Corbeau',
        'Chemin de roulement',
        'Platine de pied et ancrages',
        'Semelle isolée et longrine',
      ]}
    />

    {/* ================= FIG. 2 — NŒUD JARRET-TRAVERSE (×5) ================= */}
    <RepereFigure x={582} y={830} n="2" title="Nœud jarret-traverse (détail d'exécution, ×5)" w={356} />
    <g clipPath={`url(#${p}-fig2)`}>
      <g transform={`translate(${D2X} ${D2Y})`}>
        {/* — ⓖ POTEAU : deux semelles pochées acier, âme, axe mixte — */}
        <rect x={-150} y={-165} width={8} height={335} fill={poche(p, 'acier')} />
        <Cadre x={-150} y={-165} w={8} h={335} weight={MOYEN} over={0} />
        <rect x={-104} y={-165} width={8} height={335} fill={poche(p, 'acier')} />
        <Cadre x={-104} y={-165} w={8} h={335} weight={MOYEN} over={0} />
        <line x1={-127} y1={-165} x2={-127} y2={170} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
        <line x1={-119} y1={-165} x2={-119} y2={170} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
        <AxeMixte x1={-123} y1={-180} x2={-123} y2={182} />

        {/* — ⓔ RAIDISSEURS : la charge traverse le poteau — */}
        <Raidisseur p={p} x={-142} y={-104} w={38} h={9} />
        <Raidisseur p={p} x={-142} y={53} w={38} h={9} />

        {/* — ⓑ JARRET : tronçon de profilé refendu en biseau — */}
        {/* âme du jarret (triangle de refend), puis semelle inférieure oblique */}
        <path d="M-74 -38 L-74 54 L152 -64 z" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
        <path
          d="M-74 54 L-74 63 L154 -58 L152 -66 z"
          fill={poche(p, 'acier')}
          stroke={ENCRE}
          strokeWidth={MOYEN}
        />
        {/* la découpe se lit : bout du tronçon refendu */}
        <line x1={152} y1={-66} x2={152} y2={-82} stroke={ENCRE} strokeWidth={MOYEN} />

        {/* — ⓐ TRAVERSE : semelle sup., âme, semelle inf. — */}
        <path d="M-74 -104 L172 -138 L172 -130 L-74 -96 z" fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
        <path d="M-74 -46 L172 -80 L172 -72 L-74 -38 z" fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
        <line x1={-74} y1={-71} x2={172} y2={-105} stroke={ENCRE} strokeWidth={FIN} opacity="0.45" />
        <AxeMixte x1={-96} y1={-68} x2={186} y2={-107} />

        {/* — ⓒ PLATINE D'ABOUT débordante, jeu de calage exagéré — */}
        <rect x={-92} y={-128} width={18} height={198} fill={poche(p, 'acier')} />
        <Cadre x={-92} y={-128} w={18} h={198} weight={FORT} over={0} />
        {/* jeu platine / aile du poteau : exagéré d'un demi-trait */}
        <line x1={-95} y1={-128} x2={-95} y2={70} stroke={ENCRE} strokeWidth={FIN} opacity="0.6" />

        {/* — ⓓ QUATRE RANGÉES : axes mixtes, la haute dans le débord — */}
        {[-116, -78, -20, 40].map((y) => (
          <g key={y}>
            <AxeMixte x1={-152} y1={y} x2={-40} y2={y} opacity={0.6} />
            <Boulon x={-83} y={y} r={6} />
          </g>
        ))}

        {/* — vue de la platine : les deux boulons de chaque rangée — */}
        <Cadre x={40} y={78} w={110} h={92} weight={MOYEN} over={1.5} />
        {[92, 112, 140, 160].map((y) => (
          <g key={y}>
            <Boulon x={70} y={y} r={4.5} />
            <Boulon x={120} y={y} r={4.5} />
          </g>
        ))}
        <AxeMixte x1={95} y1={70} x2={95} y2={178} opacity={0.6} />
        <ChaineCotes y={26} points={[78, 92, 112, 140, 160]} labels={['e1', 'e2', 'p', 'p']} attache={40} vertical />
        <ChaineCotes y={186} points={[70, 120]} labels={['e2']} attache={172} />
        <text className="gravure-lettrage" x={95} y={70} fontSize="11" textAnchor="middle">
          Vue de la platine
        </text>

        {/* — ⓕ SOUDURES : repère fléché, référence, gorge symbolique — */}
        <SoudureISO x={60} y={-73} dx={44} dy={-62} gorge="a" />
        <SoudureISO x={-113} y={57} dx={-30} dy={62} gorge="a" dir={-1} />
        <SoudureISO x={-83} y={-128} dx={52} dy={-30} gorge="a" periph />

        {/* — lettres de nomenclature secondaire — */}
        <PastilleLettre x={120} y={-128} l="a" />
        <PastilleLettre x={62} y={0} l="b" />
        <PastilleLettre x={-83} y={92} l="c" />
        <PastilleLettre x={-40} y={-116} l="d" />
        <PastilleLettre x={-123} y={80} l="e" />
        <PastilleLettre x={144} y={-146} l="f" />
        <PastilleLettre x={-146} y={140} l="g" />
        <PastilleLettre x={-123} y={-158} l="h" />
      </g>
    </g>
    <circle cx={D2X} cy={D2Y} r={D2R} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />

    {/* ================= NOMENCLATURE SECONDAIRE DU CERCLE ================= */}
    <text className="gravure-lettrage" x={946} y={882} fontSize="14" fill={ENCRE}>
      Détail - nomenclature
    </text>
    <line x1={946} y1={888} x2={1176} y2={888} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
    <NomenclatureLettres
      x={954}
      y={914}
      items={[
        'Traverse',
        'Jarret refendu',
        "Platine d'about",
        'Boulons (4 rangées de 2)',
        'Raidisseurs de poteau',
        'Soudure, gorge a',
        'Semelle du poteau',
        "Axe de l'assemblage",
      ]}
    />

    {/* ================= CARTOUCHE ================= */}
    <Cartouche x={60} y={1090} w={420} h={92} numeral="I" title="Unité industrielle - coupe" echelle="Éch. symb." />
  </>
);
