import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, GravureDefs } from '../defs';
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
  Rupture,
  TraitCache,
  TraceCache,
  AxeMixte,
  Boulon,
  Gousset,
  HachuresVivantes,
} from '../primitives';

/**
 * PLANCHE II — LA SÉQUENCE EPC EN FRISE.
 * Trois temps d'un même ouvrage, lus de gauche à droite :
 *   FIG. 1  Engineering : planche à dessin, té, rouleau d'épures
 *   FIG. 2  Procurement : caisses cotées, palan d'atelier, bon de réception
 *   FIG. 3  Construction : levage d'un portique à l'élingue
 * Rehaut de laiton unique : LE FIL CONDUCTEUR qui relie les trois temps.
 */

const Y = 300; // ligne d'assise commune aux trois temps
const FIL = 468; // ordonnée du fil conducteur

export const PLANCHE_II = {
  numeral: 'II',
  title: 'La séquence EPC en frise',
  desc:
    "Gravure au trait, planche à trois figures lues de gauche à droite comme une frise. FIGURE 1, l'ingénierie : une planche à dessin inclinée sur son piètement, un té posé en travers, une équerre, un compas et un rouleau d'épures ; sur la feuille, une épure de portique au trait fin, ses axes en trait mixte et une chaîne de cotes symboliques. FIGURE 2, les achats : trois caisses d'expédition en coupe, pochées bois pour le caisson et acier pour la pièce contenue, cerclées et repérées, un palan d'atelier au-dessus de la caisse centrale, un bon de réception figuré par une feuille pliée et un tampon vierge ; les cotes d'encombrement sont symboliques. FIGURE 3, la construction : un portique en cours de levage, suspendu à quatre élingues sous un crochet, ses appuis encore libres au-dessus des platines en attente, le sol figuré par un trait fort et deux calages ; l'élément déjà monté est en trait continu, l'élément à venir en trait interrompu. Un fil conducteur rehaussé de laiton traverse la planche d'un bout à l'autre et passe par les trois figures, rappelant qu'une même responsabilité couvre la conception, les achats et la construction. Une nomenclature de huit entrées et un cartouche referment la planche.",
  viewBox: '0 0 1240 720',
};

export const PlancheIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — ENGINEERING ================= */}
    <RepereFigure x={60} y={96} n="1" title="Engineering - la planche à dessin" w={300} />

    {/* piètement */}
    <Trait x1={90} y1={Y} x2={170} y2={Y - 150} w={MOYEN} />
    <Trait x1={330} y1={Y} x2={250} y2={Y - 150} w={MOYEN} />
    <Trait x1={110} y1={Y - 60} x2={310} y2={Y - 60} w={FIN} />
    {/* table inclinée */}
    <path
      d={`M120 ${Y - 160} L360 ${Y - 210} L372 ${Y - 158} L132 ${Y - 108} z`}
      fill="hsl(var(--gravure-fond))"
      stroke={ENCRE}
      strokeWidth={FORT}
    />
    {/* épure de portique sur la feuille */}
    <g opacity="0.9">
      <path d={`M160 ${Y - 132} L188 ${Y - 172} L250 ${Y - 185} L300 ${Y - 176} L326 ${Y - 152}`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <AxeMixte x1={243} y1={Y - 196} x2={243} y2={Y - 118} />
      <ChaineCotes y={Y - 104} points={[160, 243, 326]} labels={['a', 'a']} attache={Y - 118} />
    </g>
    {/* té et équerre */}
    <Trait x1={126} y1={Y - 122} x2={368} y2={Y - 172} w={MOYEN} />
    <Trait x1={126} y1={Y - 122} x2={126} y2={Y - 96} w={MOYEN} />
    <path d={`M284 ${Y - 150} L330 ${Y - 160} L300 ${Y - 128} z`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
    {/* rouleau d'épures */}
    <g>
      <ellipse cx={104} cy={Y - 28} rx={9} ry={22} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <Trait x1={104} y1={Y - 50} x2={214} y2={Y - 50} w={FIN} />
      <Trait x1={104} y1={Y - 6} x2={214} y2={Y - 6} w={FIN} />
      <ellipse cx={214} cy={Y - 28} rx={6} ry={22} fill="none" stroke={ENCRE} strokeWidth={FIN} />
    </g>
    <Pastille x={352} y={Y - 206} n={1} />
    <Pastille x={122} y={Y - 96} n={2} />
    <Attache x={188} y={Y - 172} dx={-76} dy={-8} label="Épure" anchor="end" />

    {/* ================= FIG. 2 — PROCUREMENT ================= */}
    <RepereFigure x={470} y={96} n="2" title="Procurement - la caisse cotée" w={280} />

    {/* palan d'atelier */}
    <Trait x1={505} y1={Y - 240} x2={745} y2={Y - 240} w={FORT} />
    <TraitCache x1={505} y1={Y - 226} x2={745} y2={Y - 226} />
    <Trait x1={625} y1={Y - 240} x2={625} y2={Y - 196} w={FIN} />
    <path d={`M617 ${Y - 196} h16 v14 h-16 z`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <path d={`M625 ${Y - 182} v18 a9 9 0 1 0 -9 -9`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />

    {/* trois caisses, la centrale en coupe */}
    {[
      { x: 500, w: 92, h: 74 },
      { x: 596, w: 118, h: 96 },
      { x: 718, w: 82, h: 62 },
    ].map((c, i) => (
      <g key={c.x}>
        <Cadre x={c.x} y={Y - c.h} w={c.w} h={c.h} weight={FORT} fill={i === 1 ? poche(p, 'bois') : undefined} />
        {/* cerclages */}
        <Trait x1={c.x + c.w * 0.3} y1={Y - c.h} x2={c.x + c.w * 0.3} y2={Y} w={FIN} over={0} />
        <Trait x1={c.x + c.w * 0.7} y1={Y - c.h} x2={c.x + c.w * 0.7} y2={Y} w={FIN} over={0} />
        {i === 1 && (
          <>
            {/* la pièce contenue, en poché acier, calée dans la caisse */}
            <rect x={c.x + 22} y={Y - c.h + 26} width={c.w - 44} height={c.h - 50} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
            <TraitCache x1={c.x + 12} y1={Y - c.h + 14} x2={c.x + c.w - 12} y2={Y - c.h + 14} />
          </>
        )}
      </g>
    ))}
    <Trait x1={480} y1={Y} x2={820} y2={Y} w={FORT} />
    <ChaineCotes y={Y + 34} points={[596, 655, 714]} labels={['b', 'b']} attache={Y + 6} />
    <Pastille x={655} y={Y - 112} n={3} />
    <Pastille x={520} y={Y - 84} n={4} />

    {/* bon de réception : feuille pliée et tampon vierge */}
    <g transform={`translate(760 ${Y - 190})`}>
      <path d="M0 0 h72 l14 14 v78 h-86 z" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M72 0 v14 h14" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {[26, 38, 50].map((y) => (
        <line key={y} x1={12} y1={y} x2={62} y2={y} stroke={ENCRE} strokeWidth={FIN} opacity="0.6" />
      ))}
      <circle cx={58} cy={72} r={13} fill="none" stroke={OXYDE} strokeWidth={FIN} strokeDasharray="4 3" />
    </g>
    <Pastille x={846} y={Y - 176} n={5} />

    {/* ================= FIG. 3 — CONSTRUCTION ================= */}
    <RepereFigure x={880} y={96} n="3" title="Construction - le levage" w={280} />

    {/* crochet et élingues */}
    <Trait x1={1040} y1={148} x2={1040} y2={186} w={MOYEN} />
    <path d="M1040 186 v14 a10 10 0 1 0 -10 -10" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <path d="M1040 210 L952 268 M1040 210 L1128 268" fill="none" stroke={ENCRE} strokeWidth={FIN} />
    <path d="M1000 240 L976 262 M1080 240 L1104 262" fill="none" stroke={ENCRE} strokeWidth={FIN} />

    {/* portique levé */}
    <path d="M952 268 L1040 244 L1128 268" fill="none" stroke={ENCRE} strokeWidth={FORT} />
    <Trait x1={952} y1={268} x2={952} y2={356} w={FORT} />
    <Trait x1={1128} y1={268} x2={1128} y2={356} w={FORT} />
    <Gousset d="M952 288 L978 268 L978 288 z" />
    <Gousset d="M1128 288 L1102 268 L1102 288 z" />
    <Boulon x={952} y={300} />
    <Boulon x={1128} y={300} />

    {/* platines en attente et sol */}
    <Trait x1={900} y1={Y + 96} x2={1180} y2={Y + 96} w={FORT} />
    <HachuresVivantes x={900} y={Y + 98} w={280} h={22} pas={11} seed={53} opacity={0.35} />
    <rect x={932} y={Y + 84} width={40} height={12} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
    <rect x={1108} y={Y + 84} width={40} height={12} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
    {/* la travée suivante, pas encore montée : trait interrompu */}
    <TraceCache d="M1128 268 L1180 254 M1180 254 L1180 384" />
    <Rupture x={1180} y={300} length={84} vertical />
    <Pastille x={1040} y={232} n={6} />
    <Pastille x={952} y={378} n={7} />
    <Pastille x={1180} y={330} n={8} />
    <Attache x={952} y={300} dx={-72} dy={-54} label="Assemblage" anchor="end" />

    {/* ============ LE FIL CONDUCTEUR — unique rehaut de laiton ============ */}
    <path
      d={`M96 ${FIL} C 300 ${FIL - 46}, 420 ${FIL + 46}, 640 ${FIL} S 980 ${FIL - 46}, 1176 ${FIL}`}
      fill="none"
      stroke={LAITON}
      strokeWidth={FORT}
    />
    <text className="gravure-lettrage" x={96} y={FIL - 14} fontSize="12">
      Une seule responsabilité, trois temps
    </text>

    {/* jonctions du fil aux trois figures, en encre */}
    {[243, 655, 1040].map((x) => (
      <line key={x} x1={x} y1={FIL - 8} x2={x} y2={FIL + 8} stroke={ENCRE} strokeWidth={MOYEN} />
    ))}

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={96}
      y={540}
      perCol={4}
      colGap={330}
      items={[
        "Planche à dessin et té",
        "Rouleau d'épures",
        "Caisse d'expédition en coupe",
        'Pièce calée, poché acier',
        'Bon de réception',
        'Élingues et crochet',
        "Platine en attente d'appui",
        'Travée à venir, trait interrompu',
      ]}
    />

    <Cartouche x={880} y={604} numeral="II" title="La séquence EPC en frise" echelle="Éch. symb." />
  </>
);
