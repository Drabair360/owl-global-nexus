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
} from '../primitives';

/**
 * PLANCHE I v2 — L'INVENTAIRE CONSTRUCTIF INTÉGRAL (planche de référence).
 *
 * Composition de planche, jamais un dessin isolé :
 *   FIG. 1  coupe transversale, du bon sol au faîtage (≈65 % de la surface)
 *   FIG. 2  détail du nœud jarret-traverse, à quatre fois l'échelle
 *   FIG. 3  plan de repérage, ligne de coupe A-A fléchée
 *   Nomenclature ① → ⑩, cartouche, échelle graphique.
 *
 * Test de charge (§3) : couverture → pannes → traverses → jarrets → poteaux
 * → platines → semelles → sol. Chaque maillon est dessiné.
 *
 * Rehaut de laiton unique (§1) : la LIGNE DE SOL ±0,00, cotée.
 * Doctrine : cotes symboliques uniquement, rien de situable, aucune marque.
 */

const SOL = 560;
const A = 200;
const B = 470;
const C = 740;
const TETE = 262; // arase des poteaux
const FAITAGE = 150;
const H1 = 340; // niveau du chemin de roulement

/** Point de la traverse à l'abscisse x (versant gauche puis droit). */
const traverse = (x: number) =>
  x <= B
    ? TETE - ((x - A) / (B - A)) * (TETE - FAITAGE)
    : FAITAGE + ((x - B) / (C - B)) * (TETE - FAITAGE);

export const PLANCHE_I = {
  numeral: 'I',
  title: "Coupe transversale d'une unité industrielle type",
  desc:
    "Gravure au trait, planche à trois figures. FIGURE 1, coupe transversale d'un bâtiment industriel générique, du bon sol au faîtage : le terrain est figuré en trois strates - remblai pointé, terrain hachuré large, bon sol hachuré serré - séparées par des interfaces irrégulières. Deux semelles isolées, en poché béton de hachures croisées serrées, reposent sur un béton de propreté et sont reliées par une longrine ; leurs armatures sont évoquées en U. Au-dessus, le dallage se lit en couches : hérisson pointé, isolant en double trait, dalle pochée, avec un joint de dilatation repéré en son milieu. La ligne de sol, rehaussée de laiton et cotée au niveau zéro, traverse la planche : c'est le plan de pose. Deux poteaux en I, âme et semelles lisibles, montent sur des platines de pied boulonnées munies d'une bêche. Ils portent un portique à jarrets : les traverses, renforcées par des goussets triangulaires, montent au faîtage ; les pannes sont évoquées en section, un contreventement en croix occupe une travée de versant, interrompu par une ligne de rupture. À mi-hauteur, un corbeau soudé porte le chemin de roulement, rail sur poutre, sur lequel roule un pont à galets équipé d'un palan et d'un crochet ; le gabarit de levage est figuré en pointillé, car projeté. L'enveloppe est un bardage double peau, interrompu par des lignes de rupture ; la couverture porte une flèche de pente, un chéneau et une descente d'eaux pluviales en rive. Un réseau technique en pointillé porte la mention PROJETÉ. Les trames A, B et C sont repérées par des bulles d'axe à trait mixte ; une chaîne de cotes symboliques court en pied, et trois repères de niveau donnent le zéro, le niveau de roulement et le faîtage. Dix pastilles numérotées renvoient à la nomenclature. FIGURE 2, dans un cercle de détail, le nœud jarret-traverse à quatre fois l'échelle : gousset, file de boulons et symbole de soudure. FIGURE 3, plan de repérage, où la ligne de coupe A-A fléchée indique d'où la coupe est prise. Un cartouche porte le numéro de planche, son titre, l'échelle graphique et le sceau du registre.",
  viewBox: '0 0 1240 1000',
  /** §3b — le détail compagnon recadre désormais la FIGURE 2. */
  detailViewBox: '956 114 210 210',
};

export const PlancheIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />
    <defs>
      <clipPath id={`${p}-fig2`}>
        <circle cx="1061" cy="219" r="99" />
      </clipPath>
      <clipPath id={`${p}-masse`}>
        <rect x="988" y="430" width="164" height="68" />
      </clipPath>
    </defs>

    {/* ================= FIG. 1 — COUPE TRANSVERSALE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Coupe transversale A-A" w={300} />

    {/* — calque 1 : LE SOL EN STRATES — */}
    <StratesSol p={p} x={60} y={SOL + 20} w={820} h={140} seed={31} />
    <text className="gravure-lettrage" x={64} y={SOL + 40} fontSize="12">
      Remblai
    </text>
    <text className="gravure-lettrage" x={64} y={SOL + 76} fontSize="12">
      Terrain
    </text>
    <text className="gravure-lettrage" x={64} y={SOL + 120} fontSize="12">
      Bon sol
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

    {/* — calque 3 : DALLAGE EN COUCHES — */}
    <rect x={A} y={562} width={C - A} height={18} fill="hsl(var(--gravure-fond))" />
    <rect x={A} y={562} width={C - A} height={18} fill={`url(#${p}-sol-remblai)`} />
    <Cadre x={A} y={562} w={C - A} h={18} weight={FIN} over={1.5} />
    <line x1={A} y1={556} x2={C} y2={556} stroke={ENCRE} strokeWidth={FIN} />
    <line x1={A} y1={561} x2={C} y2={561} stroke={ENCRE} strokeWidth={FIN} />
    <rect x={A} y={540} width={C - A} height={16} fill="hsl(var(--gravure-fond))" />
    <rect x={A} y={540} width={C - A} height={16} fill={poche(p, 'beton')} />
    <Cadre x={A} y={540} w={C - A} h={16} weight={MOYEN} over={1.5} />
    {/* joint de dilatation */}
    <line x1={B} y1={538} x2={B} y2={558} stroke={ENCRE} strokeWidth={FORT} />
    <Attache x={B} y={540} dx={92} dy={-34} label="Joint de dilatation" />

    {/* — calque 4 : LIGNE DE SOL ±0,00 — L'UNIQUE REHAUT DE LAITON — */}
    <line x1="60" y1={SOL} x2="880" y2={SOL} stroke={LAITON} strokeWidth={FORT} />
    <RepereNiveau x={852} y={SOL} label="±0,00" rappel={812} or />

    {/* — calque 5 : POTEAUX EN I, PLATINES, BÊCHE — */}
    {[A, C].map((x) => (
      <g key={`pot${x}`}>
        {/* semelles du profil */}
        <Trait x1={x - 14} y1={TETE} x2={x - 14} y2={SOL - 4} w={FORT} />
        <Trait x1={x + 14} y1={TETE} x2={x + 14} y2={SOL - 4} w={FORT} />
        {/* âme */}
        <line x1={x - 4} y1={TETE + 4} x2={x - 4} y2={SOL - 8} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
        <line x1={x + 4} y1={TETE + 4} x2={x + 4} y2={SOL - 8} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
        {/* platine de pied, poché acier */}
        <rect x={x - 30} y={SOL - 8} width={60} height={8} fill={poche(p, 'acier')} />
        <Cadre x={x - 30} y={SOL - 8} w={60} h={8} weight={MOYEN} over={1.5} />
        {/* boulons d'ancrage */}
        <FileDeBoulons x={x - 22} y={SOL + 8} dx={14.6} dy={0} n={4} />
        {[-22, -7.4, 7.2, 21.8].map((o) => (
          <line key={o} x1={x + o} y1={SOL} x2={x + o} y2={SOL + 26} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
        ))}
        {/* bêche */}
        <rect x={x - 7} y={SOL + 2} width={14} height={22} fill={poche(p, 'acier')} />
        <Cadre x={x - 7} y={SOL + 2} w={14} h={22} weight={FIN} over={1.2} />
      </g>
    ))}

    {/* — calque 6 : PORTIQUE À JARRETS, PANNES, CONTREVENTEMENT — */}
    <g>
      {/* traverses : double filet (semelles du profil) */}
      <Trait x1={A} y1={TETE} x2={B} y2={FAITAGE} w={FORT} />
      <Trait x1={A} y1={TETE + 20} x2={B} y2={FAITAGE + 20} w={MOYEN} />
      <Trait x1={C} y1={TETE} x2={B} y2={FAITAGE} w={FORT} />
      <Trait x1={C} y1={TETE + 20} x2={B} y2={FAITAGE + 20} w={MOYEN} />
      {/* jarrets : le renfort qui sépare le charpentier du triangle naïf */}
      <Gousset d={`M${A + 14} ${TETE + 4} L${A + 96} ${TETE - 14} L${A + 96} ${TETE + 6} L${A + 14} ${TETE + 58} z`} />
      <Gousset d={`M${C - 14} ${TETE + 4} L${C - 96} ${TETE - 14} L${C - 96} ${TETE + 6} L${C - 14} ${TETE + 58} z`} />
      {/* pannes en section, sur le versant */}
      {[0.22, 0.42, 0.62, 0.82].map((t) => {
        const xl = A + t * (B - A);
        const xr = C - t * (C - B);
        return (
          <g key={t}>
            <Cadre x={xl - 6} y={traverse(xl) - 13} w={12} h={11} weight={FIN} over={1.2} />
            <Cadre x={xr - 6} y={traverse(xr) - 13} w={12} h={11} weight={FIN} over={1.2} />
          </g>
        );
      })}
      {/* contreventement en croix, une travée de versant, coupé par une rupture */}
      <line x1={A + 64} y1={traverse(A + 64) + 16} x2={A + 190} y2={traverse(A + 190) + 2} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={A + 64} y1={traverse(A + 64) + 2} x2={A + 190} y2={traverse(A + 190) + 16} stroke={ENCRE} strokeWidth={FIN} />
      <Rupture x={A + 210} y={traverse(A + 214)} length={54} />
    </g>

    {/* — calque 7 : ÉQUIPEMENT DE LEVAGE — */}
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
      {/* poutre de roulement + rail */}
      <Cadre x={A + 46} y={H1 - 12} w={C - A - 92} h={20} weight={MOYEN} over={1.5} />
      <Cadre x={A + 46} y={H1 - 19} w={C - A - 92} h={7} weight={FIN} over={1.2} fill={poche(p, 'acier')} />
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
      <text className="gravure-lettrage" x={472} y={H1 + 162} fontSize="12" textAnchor="middle">
        Gabarit de levage
      </text>
    </g>

    {/* — calque 8 : ENVELOPPE — */}
    <g>
      {[A, C].map((x) => {
        const s = x === A ? -1 : 1;
        return (
          <g key={`bard${x}`}>
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
    <text className="gravure-lettrage" x={B} y={216} fontSize="12" textAnchor="middle">
      Réseaux — PROJETÉ
    </text>

    {/* — calque 10 : TRAMES, NIVEAUX, COTES — */}
    <BulleAxe x={A} y={112} label="A" to={TETE - 26} />
    <BulleAxe x={B} y={112} label="B" to={FAITAGE - 26} />
    <BulleAxe x={C} y={112} label="C" to={TETE - 26} />
    <RepereNiveau x={856} y={H1} label="+H1" rappel={822} />
    <RepereNiveau x={856} y={FAITAGE} label="+H2" rappel={822} />
    <ChaineCotes y={716} points={[A, B, C]} labels={['L1', 'L2']} attache={700} />
    <ChaineCotes y={802} points={[FAITAGE, H1, SOL]} labels={['H2', 'H1']} attache={782} vertical />

    {/* — calque 11 : PASTILLES DE NOMENCLATURE — */}
    <Pastille x={A} y={610} n={1} />
    <Pastille x={B} y={596} n={2} />
    <Pastille x={A - 62} y={SOL - 4} n={3} />
    <Pastille x={B + 96} y={traverse(B + 96) + 34} n={4} />
    <Pastille x={A + 108} y={TETE + 2} n={5} />
    <Pastille x={C - 62} y={traverse(C - 62) - 28} n={6} />
    <Pastille x={A + 66} y={H1 + 34} n={7} />
    <Pastille x={C - 76} y={H1 + 34} n={8} />
    <Pastille x={A - 46} y={452} n={9} />
    <Pastille x={A - 52} y={TETE + 4} n={10} />

    {/* ================= FIG. 2 — DÉTAIL DU NŒUD JARRET-TRAVERSE ================= */}
    <RepereFigure x={946} y={110} n="2" title="Nœud jarret-traverse (×4)" w={230} />
    <g clipPath={`url(#${p}-fig2)`}>
      {/* poteau : semelles et âme, à quatre fois l'échelle */}
      <Trait x1={1016} y1={262} x2={1016} y2={330} w={FORT} />
      <Trait x1={1072} y1={262} x2={1072} y2={330} w={FORT} />
      <line x1={1040} y1={266} x2={1040} y2={330} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
      <line x1={1050} y1={266} x2={1050} y2={330} stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
      {/* traverse : semelle supérieure et semelle inférieure */}
      <Trait x1={1010} y1={168} x2={1178} y2={140} w={FORT} />
      <Trait x1={1010} y1={202} x2={1178} y2={174} w={MOYEN} />
      <line x1={1014} y1={185} x2={1178} y2={157} stroke={ENCRE} strokeWidth={FIN} opacity="0.55" />
      {/* platine d'about, boulonnée : la file est portée par la platine */}
      <Trait x1={1004} y1={160} x2={1004} y2={272} w={FORT} />
      <Trait x1={1010} y1={160} x2={1010} y2={272} w={MOYEN} />
      <FileDeBoulons x={1022} y={172} dx={0} dy={17} n={6} />
      {/* gousset du jarret : il rattrape l'about du poteau */}
      <Gousset d="M1010 202 L1010 262 L1092 178 L1058 178 z" />
      <Soudure x={1096} y={244} />
    </g>

    <circle cx="1061" cy="219" r="99" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <text className="gravure-lettrage" x={1061} y={356} fontSize="12" textAnchor="middle">
      Gousset, boulons, soudure
    </text>
    {/* renvoi depuis la FIG. 1 */}
    <CercleDetail cx={A + 56} cy={TETE + 20} r={46} label="DÉT. 2" />

    {/* ================= FIG. 3 — PLAN DE REPÉRAGE ================= */}
    <RepereFigure x={946} y={404} n="3" title="Plan de repérage" w={230} />
    <g clipPath={`url(#${p}-masse)`}>
      <HachuresVivantes x={988} y={430} w={164} h={68} pas={11} seed={17} opacity={0.35} />
    </g>
    <Cadre x={988} y={430} w={164} h={68} weight={MOYEN} over={1.5} />
    {[1022, 1070, 1118].map((x, i) => (
      <g key={x}>
        <line x1={x} y1={430} x2={x} y2={498} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="9 3 2 3" opacity="0.7" />
        <text className="gravure-lettrage" x={x} y={424} fontSize="11" textAnchor="middle">
          {['A', 'B', 'C'][i]}
        </text>
      </g>
    ))}
    {/* ligne de coupe A-A, fléchée : on voit d'où la coupe est prise */}
    <line x1={966} y1={464} x2={1174} y2={464} stroke={OXYDE} strokeWidth={MOYEN} strokeDasharray="16 5 3 5" />
    <path d="M978 464 l0 -14 l14 0" fill="none" stroke={OXYDE} strokeWidth={MOYEN} />
    <path d="M1162 464 l0 -14 l-14 0" fill="none" stroke={OXYDE} strokeWidth={MOYEN} />
    <text className="gravure-lettrage" x={962} y={456} fontSize="12" textAnchor="end">
      A
    </text>
    <text className="gravure-lettrage" x={1178} y={456} fontSize="12">
      A
    </text>

    {/* ================= NOMENCLATURE ================= */}
    <text className="gravure-lettrage" x={946} y={556} fontSize="13" fill={ENCRE}>
      Nomenclature
    </text>
    <line x1={946} y1={562} x2={1176} y2={562} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />

    <Nomenclature
      x={954}
      y={588}
      lineHeight={21}
      items={[
        'Semelle isolée',
        'Longrine',
        'Platine de pied',
        'Portique',
        'Jarret',
        'Panne',
        'Corbeau',
        'Chemin de roulement',
        'Bardage double peau',
        'Chéneau',
      ]}
    />

    {/* ================= CARTOUCHE ================= */}
    <Cartouche x={60} y={862} w={420} h={92} numeral="I" title="Unité industrielle — coupe" echelle="Éch. symb." />
  </>
);
