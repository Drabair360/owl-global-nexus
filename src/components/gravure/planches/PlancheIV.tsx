import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_III } from '../Cartouche';
import {
  poche,
  RepereFigure,
  ChaineCotes,
  CercleDetail,
  AxeMixte,
  Rupture,
  Boulon,
  MIXTE_DASH,
  CACHE_DASH,
} from '../primitives';
import { TitrePlanche, BandeauZone, EchelleLibelles, Repere, BlocTexte } from '../lisibilite';

/**
 * PLANCHE IV — LE TRAIN D'ENGRENAGES DU GROUPE (DOSSIER OWL, VOL. III, PL. 4/9).
 * PHASE M3 — reconstruction complète sur le système L.
 *
 * FIG. 1  La denture, poussée : deux roues en prise au même module, flancs en
 *         développante, cercles primitifs et cercles de base au trait mixte,
 *         LIGNE D'ACTION tangente aux deux cercles de base et passant par le
 *         point primitif, ANGLE DE PRESSION figuré sur la tangente commune.
 *         DÉT. 1 : largeur de denture en vue partielle, coupe interrompue.
 *         DÉT. 2 : jeu de flanc, mesuré sur le flanc non chargé.
 * FIG. 2  Le schéma cinématique normalisé : arbres au trait fort, roues
 *         réduites à leurs cercles primitifs, paliers en hachures d'appui,
 *         bâti en hachures de masse. DOUBLE NOMENCLATURE en échelles de
 *         marge : colonne gauche l'organe mécanique, colonne droite ce que
 *         l'organe désigne dans le groupe, repère commun en tête de ligne.
 *         Les deux colonnes se lisent EN REGARD, sans phrase de liaison.
 *
 * LES TROIS LECTURES
 *   3 s    Un couple entre à gauche, un arbre commun le reçoit, deux sorties
 *          en partent : une rapide au-dessus, une lente à fort couple dessous.
 *   30 s   Les zones nommées - entrée du couple, arbre commun, sorties - et
 *          la lecture en regard des deux colonnes : chaque organe mécanique
 *          en face de ce qu'il désigne dans le groupe.
 *   3 min  La denture réelle : module commun, angle de pression, ligne
 *          d'action tangente aux cercles de base, largeur de denture et jeu
 *          de flanc aux deux détails.
 *
 * Rehaut de laiton unique : L'ARBRE INTERMÉDIAIRE COMMUN (les socles partagés).
 * §1.6 — aucun poché pierre ni bois : la matière dessinée ici est l'acier.
 */

/* ------------------------------------------------------------------ *
 * GÉOMÉTRIE DE DENTURE
 * ------------------------------------------------------------------ */
const ALPHA = 20; // angle de pression, degrés
const ARAD = (ALPHA * Math.PI) / 180;
const COSA = Math.cos(ARAD);
const SINA = Math.sin(ARAD);

/** Profil de dent approché de la développante : flancs concaves, tête arrondie, congé de pied. */
const dentPath = (r: number, a: number, pas: number) => {
  const rp = r;
  const rt = r * 1.11;
  const rf = r * 0.87;
  const demi = pas * 0.21;
  const pt = (rad: number, ang: number) =>
    `${(Math.cos(ang) * rad).toFixed(2)} ${(Math.sin(ang) * rad).toFixed(2)}`;
  return [
    `M${pt(rf, a - demi * 1.55)}`,
    `Q${pt(rp * 0.97, a - demi * 1.15)} ${pt(rp, a - demi)}`,
    `Q${pt(rt * 0.99, a - demi * 0.62)} ${pt(rt, a - demi * 0.42)}`,
    `A${rt.toFixed(2)} ${rt.toFixed(2)} 0 0 1 ${pt(rt, a + demi * 0.42)}`,
    `Q${pt(rt * 0.99, a + demi * 0.62)} ${pt(rp, a + demi)}`,
    `Q${pt(rp * 0.97, a + demi * 1.15)} ${pt(rf, a + demi * 1.55)}`,
  ].join(' ');
};

/** Roue à denture tracée : jante pochée acier, toile évidée, moyeu et clavette. */
const Roue = ({
  cx,
  cy,
  r,
  dents,
  rot = 0,
  p,
}: {
  cx: number;
  cy: number;
  r: number;
  dents: number;
  rot?: number;
  p: string;
}) => {
  const pas = (Math.PI * 2) / dents;
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <g transform={`rotate(${(rot * 180) / Math.PI})`}>
        <circle cx={0} cy={0} r={r * 0.86} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
        <circle cx={0} cy={0} r={r * 0.6} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i * Math.PI * 2) / 5 + Math.PI / 5;
          return (
            <circle
              key={i}
              cx={Math.cos(a) * r * 0.42}
              cy={Math.sin(a) * r * 0.42}
              r={r * 0.1}
              fill="hsl(var(--gravure-fond))"
              stroke={ENCRE}
              strokeWidth={ULTRAFIN}
            />
          );
        })}
        {Array.from({ length: dents }).map((_, i) => (
          <path
            key={i}
            d={dentPath(r, i * pas, pas)}
            fill={poche(p, 'acier')}
            stroke={ENCRE}
            strokeWidth={MOYEN}
          />
        ))}
        {/* moyeu et clavette */}
        <circle cx={0} cy={0} r={r * 0.19} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
        <rect
          x={-r * 0.05}
          y={-r * 0.25}
          width={r * 0.1}
          height={r * 0.08}
          fill="hsl(var(--gravure-fond))"
          stroke={ENCRE}
          strokeWidth={ULTRAFIN}
        />
      </g>
      {/* cercle primitif : trait mixte */}
      <circle
        cx={0}
        cy={0}
        r={r}
        fill="none"
        stroke={ENCRE}
        strokeWidth={ULTRAFIN}
        strokeDasharray={MIXTE_DASH}
        opacity="0.9"
      />
      {/* cercle de base : trait interrompu fin, celui auquel la ligne d'action est tangente */}
      <circle
        cx={0}
        cy={0}
        r={r * COSA}
        fill="none"
        stroke={OXYDE}
        strokeWidth={ULTRAFIN}
        strokeDasharray={CACHE_DASH}
      />
    </g>
  );
};

/** Palier en hachures d'appui : bague, éléments roulants, appui hachuré sur le bâti. */
const Appui = ({ x, y, sens = 1 }: { x: number; y: number; sens?: number }) => {
  const yb = sens > 0 ? y + 8 : y - 24;
  return (
    <g>
      <rect x={x - 17} y={yb} width={34} height={16} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
      {[-1, 0, 1].map((i) => (
        <circle key={i} cx={x + i * 10} cy={yb + 8} r={3.4} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      {/* hachures d'appui */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={x - 17 + i * 6.8}
          y1={sens > 0 ? yb + 16 : yb}
          x2={x - 17 + i * 6.8 - 7}
          y2={sens > 0 ? yb + 23 : yb - 7}
          stroke={ENCRE}
          strokeWidth={ULTRAFIN}
          opacity="0.8"
        />
      ))}
      <line
        x1={x - 22}
        y1={sens > 0 ? yb + 16 : yb}
        x2={x + 22}
        y2={sens > 0 ? yb + 16 : yb}
        stroke={ENCRE}
        strokeWidth={FIN}
      />
    </g>
  );
};

/** Roue du schéma cinématique : le cercle primitif seul, et son épaisseur au trait. */
const RouePrimitive = ({ cx, cy, r, or = false }: { cx: number; cy: number; r: number; or?: boolean }) => {
  const c = or ? LAITON : ENCRE;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={c} strokeWidth={MOYEN} strokeDasharray={MIXTE_DASH} />
      <rect x={cx - 6} y={cy - r} width={12} height={2 * r} fill="hsl(var(--gravure-fond))" stroke={c} strokeWidth={FIN} />
    </g>
  );
};

/** Repère court porté au dessin, attache à un seul coude. */
const Marque = ({
  rep,
  cible,
  x,
  y,
  anchor = 'start',
}: {
  rep: string;
  cible: [number, number];
  x: number;
  y: number;
  anchor?: 'start' | 'end';
}) => {
  const kx = anchor === 'start' ? x - 16 : x + 16;
  return (
    <g>
      <g data-lis="attache">
        <circle cx={cible[0]} cy={cible[1]} r="1.8" fill={OXYDE} />
        <path
          d={`M${cible[0]} ${cible[1]} L${kx} ${y - 4} L${x + (anchor === 'start' ? -4 : 4)} ${y - 4}`}
          fill="none"
          stroke={OXYDE}
          strokeWidth={ULTRAFIN}
        />
      </g>
      <Repere x={x} y={y} anchor={anchor}>
        {rep}
      </Repere>
    </g>
  );
};

/* ---- FIG. 1 : les deux roues en prise ---- */
const AX = 270;
const AY = 402;
const RA = 130;
const ZA = 26;
const PAS = (Math.PI * 2 * RA) / ZA; // module commun aux deux roues
const ZB = 18;
const RB = (PAS * ZB) / (Math.PI * 2);
const BX = AX + RA + RB;
const PX = AX + RA; // point primitif
const PY = AY;
/** Direction de la ligne d'action : la tangente commune inclinée de l'angle de pression. */
const LX = SINA;
const LY = COSA;

/* ---- FIG. 2 : le train cinématique ---- */
const Y_INT = 890; // arbre intermédiaire commun
const R_MOT = 20;
const R_INT = 72;
const R_INT_B = 32;
const R_INT_C = 18;
const R_RAP = 20;
const R_LEN = 70;
const Y_MOT = Y_INT - (R_MOT + R_INT); // 768 - tangence des primitifs
const Y_RAP = Y_INT - (R_RAP + R_INT_B); // 826
const Y_LEN = Y_INT + (R_LEN + R_INT_C); // 1002

export const PLANCHE_IV = {
  numeral: 'IV',
  title: "Le train d'engrenages du groupe",
  desc:
    "Gravure au trait, planche à deux figures et deux détails, où l'organisation du groupe est dessinée comme un train d'engrenages d'atelier. FIGURE 1, la denture elle-même : deux roues au même module engrènent, une roue de vingt-six dents et une roue de dix-huit dents ; les flancs sont tracés en développante avec tête arrondie et congé de pied, les cercles primitifs sont au trait mixte et se touchent au point primitif, les cercles de base sont au trait interrompu, et la ligne d'action est tracée tangente aux deux cercles de base en passant par le point primitif. L'angle de pression est figuré entre cette ligne d'action et la tangente commune aux cercles primitifs, arc et repère à l'appui. Un détail donne la largeur de denture en vue partielle, coupe interrompue à ses deux extrémités, jante pochée acier et cote de largeur ; un second détail donne le jeu de flanc, mesuré du côté du flanc non chargé, à grande échelle. FIGURE 2, le schéma cinématique normalisé : les arbres sont des traits forts, les roues sont réduites à leurs cercles primitifs, les paliers sont figurés en hachures d'appui et le bâti en hachures de masse. Un arbre moteur apporte le couple, un arbre intermédiaire commun le reçoit, et deux sorties en partent, une roue de sortie rapide au-dessus et une roue de sortie lente à fort couple au-dessous ; l'arbre intermédiaire commun est le seul rehaut de laiton de la planche. La planche se lit en double nomenclature : dans l'échelle de marge de gauche l'organe mécanique, dans l'échelle de marge de droite ce que cet organe désigne dans le groupe, les deux colonnes en regard, ligne à ligne, repère commun en tête, sans phrase de liaison. Aucune donnée chiffrée d'exploitation n'est portée : les nombres de dents et les cotes sont des conventions de dessin. Cartouche de dossier, volume troisième, mention concept.",
  viewBox: '0 0 1240 1330',
  detailViewBox: '90 170 620 470',
};

export const PlancheIVDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ============ 3 SECONDES — LE TITRE ET LE SUJET ============ */}
    <TitrePlanche
      x={60}
      y={46}
      titre="Le train d'engrenages du groupe"
      sous="Un couple d'entrée, un arbre commun, deux sorties - modèle du groupe (PL. VII)"
    />

    {/* ================= FIG. 1 — LA DENTURE ================= */}
    <RepereFigure x={60} y={126} n="1" title="Denture en prise, module commun" w={420} />

    <BandeauZone x={100} y={168} w={230} h={470} label="Roue menante, 26 dents" />
    <BandeauZone x={330} y={168} w={150} h={470} label="Engrènement" />
    <BandeauZone x={480} y={168} w={140} h={470} label="Roue menée, 18 dents" />

    {/* entraxe et axes */}
    <AxeMixte x1={AX - RA - 30} y1={AY} x2={BX + RB + 30} y2={AY} />
    <AxeMixte x1={AX} y1={AY - RA - 26} x2={AX} y2={AY + RA + 26} />
    <AxeMixte x1={BX} y1={AY - RB - 26} x2={BX} y2={AY + RB + 26} />

    <Roue p={p} cx={AX} cy={AY} r={RA} dents={ZA} />
    <Roue p={p} cx={BX} cy={AY} r={RB} dents={ZB} rot={Math.PI / ZB} />

    {/* tangente commune aux cercles primitifs, au point primitif */}
    <line x1={PX} y1={PY - 96} x2={PX} y2={PY + 96} stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="5 4" />

    {/* LIGNE D'ACTION : tangente aux deux cercles de base, par le point primitif */}
    <line
      x1={PX - LX * 152}
      y1={PY - LY * 152}
      x2={PX + LX * 152}
      y2={PY + LY * 152}
      stroke={OXYDE}
      strokeWidth={MOYEN}
    />
    {/* points de tangence sur les cercles de base */}
    <circle cx={AX + RA * COSA * COSA} cy={AY - RA * COSA * SINA} r={2.4} fill={OXYDE} />
    <circle cx={BX - RB * COSA * COSA} cy={AY + RB * COSA * SINA} r={2.4} fill={OXYDE} />
    <line
      x1={AX}
      y1={AY}
      x2={AX + RA * COSA * COSA}
      y2={AY - RA * COSA * SINA}
      stroke={OXYDE}
      strokeWidth={ULTRAFIN}
      opacity="0.7"
    />
    <line
      x1={BX}
      y1={AY}
      x2={BX - RB * COSA * COSA}
      y2={AY + RB * COSA * SINA}
      stroke={OXYDE}
      strokeWidth={ULTRAFIN}
      opacity="0.7"
    />

    {/* ANGLE DE PRESSION : arc entre la tangente commune et la ligne d'action */}
    <path
      d={`M${PX} ${PY - 74} A74 74 0 0 0 ${PX - LX * 74} ${PY - LY * 74}`}
      fill="none"
      stroke={OXYDE}
      strokeWidth={ULTRAFIN}
    />
    <Boulon x={PX} y={PY} r={2.6} />

    {/* cercle de détail : le jeu de flanc, repris en DÉT. 2 */}
    <CercleDetail cx={PX + 6} cy={PY + 62} r={40} label="x8" />

    {/* repères courts au dessin */}
    <Marque rep="C-01" cible={[AX - RA * 0.71, AY - RA * 0.71]} x={168} y={224} anchor="start" />
    <Marque rep="C-02" cible={[AX - RA * COSA * 0.72, AY - RA * COSA * 0.66]} x={168} y={252} anchor="start" />
    <Marque rep="D-03" cible={[AX - RA * 1.05, AY + RA * 0.22]} x={128} y={470} anchor="start" />
    <Marque rep="L-04" cible={[PX - LX * 120, PY - LY * 120]} x={436} y={224} anchor="start" />
    <Marque rep="A-05" cible={[PX - 22, PY - 70]} x={436} y={252} anchor="start" />
    <Marque rep="P-06" cible={[PX, PY]} x={436} y={280} anchor="start" />
    <Marque rep="E-07" cible={[(AX + BX) / 2, AY + 4]} x={330} y={604} anchor="start" />
    <Marque rep="J-08" cible={[PX + 22, PY + 78]} x={470} y={560} anchor="start" />

    <ChaineCotes y={640} points={[AX, BX]} labels={['a']} attache={AY + RA + 20} />

    {/* ---------- ÉCHELLE DE LIBELLÉS DE LA FIG. 1 ---------- */}
    <BlocTexte>
      <text className="gravure-lettrage" x={664} y={186} fontSize="12" fill={OXYDE}>
        Échelle de libellés - FIG. 1
      </text>
    </BlocTexte>
    <EchelleLibelles
      x={664}
      yStart={214}
      yStep={26}
      side="right"
      items={[
        { label: 'C-01 - Cercle primitif, trait mixte' },
        { label: 'C-02 - Cercle de base, trait interrompu' },
        { label: 'D-03 - Flanc en développante' },
        { label: "L-04 - Ligne d'action, tangente aux bases" },
        { label: 'A-05 - Angle de pression sur la tangente' },
        { label: 'P-06 - Point primitif' },
        { label: 'E-07 - Entraxe, cote a' },
        { label: 'J-08 - Jeu de flanc, voir DÉT. 2' },
        { label: 'b - Largeur de denture, voir DÉT. 1' },
      ]}
    />

    {/* ================= DÉT. 1 — LARGEUR DE DENTURE ================= */}
    <BlocTexte>
      <text className="gravure-lettrage" x={664} y={470} fontSize="12" fill={ENCRE}>
        DÉT. 1
      </text>
      <text className="gravure-lettrage" x={724} y={470} fontSize="12">
        Largeur de denture, vue partielle
      </text>
      <line x1={664} y1={476} x2={962} y2={476} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
    </BlocTexte>

    <g transform="translate(700 512)">
      {/* jante en coupe interrompue : la largeur b portée par la denture */}
      <rect x={0} y={0} width={172} height={54} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={0} y={0} width={172} height={12} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FIN} />
      {/* sommets de dents, vus de champ */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={0} y1={10 + i * 8.5} x2={172} y2={10 + i * 8.5} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
      ))}
      <line x1={0} y1={0} x2={172} y2={0} stroke={ENCRE} strokeWidth={FORT} />
      <line x1={0} y1={54} x2={172} y2={54} stroke={ENCRE} strokeWidth={FORT} />
      <Rupture x={0} y={16} length={44} vertical />
      <Rupture x={172} y={16} length={44} vertical />
      {/* arbre et clavette, en bout */}
      <rect x={54} y={62} width={64} height={22} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
      <AxeMixte x1={-14} y1={73} x2={186} y2={73} />
    </g>
    <ChaineCotes y={636} points={[700, 872]} labels={['b']} attache={566} />

    {/* ================= DÉT. 2 — JEU DE FLANC ================= */}
    <BlocTexte>
      <text className="gravure-lettrage" x={1000} y={186} fontSize="12" fill={ENCRE}>
        DÉT. 2
      </text>
      <text className="gravure-lettrage" x={1060} y={186} fontSize="12">
        Jeu de flanc x8
      </text>
      <line x1={1000} y1={192} x2={1190} y2={192} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
    </BlocTexte>

    <g transform="translate(1092 290)">
      <circle cx={0} cy={0} r={78} fill="none" stroke={OXYDE} strokeWidth={FIN} strokeDasharray="7 5" />
      {/* dent menante : le flanc chargé est en contact */}
      <path d="M-72 -70 L-30 -70 Q-6 -4 -34 68 L-72 68 Z" fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      {/* dent menée : le flanc non chargé laisse le jeu */}
      <path d="M72 -70 L26 -70 Q8 -4 30 68 L72 68 Z" fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      {/* le jeu, mesuré normalement au flanc non chargé */}
      <line x1={-8} y1={-44} x2={-8} y2={-24} stroke={OXYDE} strokeWidth={ULTRAFIN} />
      <line x1={14} y1={-44} x2={14} y2={-24} stroke={OXYDE} strokeWidth={ULTRAFIN} />
      <line x1={-8} y1={-34} x2={14} y2={-34} stroke={OXYDE} strokeWidth={FIN} />
      <path d="M-8 -34 l8 -3.5 v7 z" fill={OXYDE} />
      <path d="M14 -34 l-8 -3.5 v7 z" fill={OXYDE} />
      <Repere x={3} y={-46}>j</Repere>
      {/* ligne primitive au droit du contact */}
      <line x1={-72} y1={12} x2={72} y2={12} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray={MIXTE_DASH} opacity="0.8" />
    </g>
    <Marque rep="J-08" cible={[1095, 256]} x={1006} y={402} anchor="start" />
    <Marque rep="D-03" cible={[1108, 300]} x={1108} y={402} anchor="start" />

    {/* ================= FIG. 2 — SCHÉMA CINÉMATIQUE ================= */}
    <RepereFigure x={60} y={700} n="2" title="Schéma cinématique normalisé - double nomenclature" w={520} />

    <BandeauZone x={330} y={730} w={190} h={366} label="Entrée du couple" />
    <BandeauZone x={520} y={730} w={190} h={366} label="Arbre commun" />
    <BandeauZone x={710} y={730} w={210} h={366} label="Sorties" />

    {/* bâti : hachures de masse, le plan qui tient les paliers */}
    <line x1={340} y1={1084} x2={910} y2={1084} stroke={ENCRE} strokeWidth={FIN} />
    {Array.from({ length: 29 }).map((_, i) => (
      <line
        key={`b-${i}`}
        x1={344 + i * 20}
        y1={1084}
        x2={337 + i * 20}
        y2={1091}
        stroke={ENCRE}
        strokeWidth={ULTRAFIN}
        opacity="0.7"
      />
    ))}

    {/* --- arbre moteur : le couple entre --- */}
    <line x1={366} y1={Y_MOT} x2={556} y2={Y_MOT} stroke={ENCRE} strokeWidth={FORT} />
    <Appui x={412} y={Y_MOT} sens={-1} />
    <RouePrimitive cx={534} cy={Y_MOT} r={R_MOT} />
    <path d="M368 768 m-16 0 a16 16 0 1 0 16 -16" fill="none" stroke={OXYDE} strokeWidth={FIN} />
    <path d="M368 748 l-6 9 h12 z" fill={OXYDE} />
    <Repere x={456} y={Y_MOT - 14} anchor="start">A-01</Repere>

    {/* --- arbre intermédiaire commun : le seul laiton --- */}
    <line x1={452} y1={Y_INT} x2={856} y2={Y_INT} stroke={LAITON} strokeWidth={FORT} />
    <Appui x={478} y={Y_INT} />
    <Appui x={832} y={Y_INT} />
    <RouePrimitive cx={534} cy={Y_INT} r={R_INT} or />
    <RouePrimitive cx={672} cy={Y_INT} r={R_INT_B} or />
    <RouePrimitive cx={776} cy={Y_INT} r={R_INT_C} or />
    <Repere x={620} y={Y_INT - 12} anchor="middle">A-02</Repere>
    <Repere x={478} y={Y_INT + 52} anchor="middle">P-06</Repere>

    {/* --- sortie rapide, au-dessus --- */}
    <line x1={636} y1={Y_RAP} x2={900} y2={Y_RAP} stroke={ENCRE} strokeWidth={FORT} />
    <Appui x={856} y={Y_RAP} sens={-1} />
    <RouePrimitive cx={672} cy={Y_RAP} r={R_RAP} />
    <path d={`M900 ${Y_RAP} l-14 -5 v10 z`} fill={ENCRE} />
    <Repere x={710} y={Y_RAP - 14} anchor="start">R-03</Repere>

    {/* --- sortie lente à fort couple, au-dessous --- */}
    <line x1={706} y1={Y_LEN} x2={900} y2={Y_LEN} stroke={ENCRE} strokeWidth={FORT} />
    <Appui x={860} y={Y_LEN} />
    <RouePrimitive cx={776} cy={Y_LEN} r={R_LEN} />
    <path d={`M900 ${Y_LEN} l-14 -5 v10 z`} fill={ENCRE} />
    <Repere x={812} y={Y_LEN - 12} anchor="start">R-04</Repere>
    <Repere x={366} y={1078} anchor="start">B-05</Repere>

    {/* points d'engrènement, marqués au trait */}
    {[
      [534, (Y_MOT + Y_INT) / 2],
      [672, (Y_RAP + Y_INT) / 2],
      [776, (Y_LEN + Y_INT) / 2],
    ].map(([x, y]) => (
      <line key={x} x1={x - 9} y1={y} x2={x + 9} y2={y} stroke={ENCRE} strokeWidth={MOYEN} />
    ))}

    {/* ---------- DOUBLE NOMENCLATURE, LES DEUX COLONNES EN REGARD ---------- */}
    <BlocTexte>
      <text className="gravure-lettrage" x={274} y={760} fontSize="12" textAnchor="end" fill={ENCRE}>
        Colonne mécanique
      </text>
      <line x1={30} y1={768} x2={274} y2={768} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
      <text className="gravure-lettrage" x={966} y={760} fontSize="12" fill={ENCRE}>
        Colonne du groupe
      </text>
      <line x1={966} y1={768} x2={1210} y2={768} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
    </BlocTexte>

    <EchelleLibelles
      x={274}
      yStart={800}
      yStep={36}
      side="left"
      items={[
        { label: "A-01 - Arbre moteur, couple d'entrée" },
        { label: 'A-02 - Arbre intermédiaire commun', or: true },
        { label: 'R-03 - Roue de sortie rapide' },
        { label: 'R-04 - Roue de sortie lente, fort couple' },
        { label: 'B-05 - Bâti, ce qui tient les paliers' },
        { label: 'P-06 - Paliers' },
      ]}
    />
    <EchelleLibelles
      x={966}
      yStart={800}
      yStep={36}
      side="right"
      items={[
        { label: 'A-01 - Drabair Labs' },
        { label: 'A-02 - Les socles partagés', or: true },
        { label: 'R-03 - Weavme (PL. V)' },
        { label: 'R-04 - Line Builder (PL. III)' },
        { label: 'B-05 - Owl International' },
        { label: 'P-06 - Les conventions intra-groupe' },
      ]}
    />

    {/* ---------- LÉGENDE DES FAMILLES ---------- */}
    <BlocTexte>
      <g>
        <line x1={64} y1={1140} x2={112} y2={1140} stroke={ENCRE} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={124} y={1144} fontSize="12">
          Arbre
        </text>
        <line x1={220} y1={1140} x2={268} y2={1140} stroke={ENCRE} strokeWidth={MOYEN} strokeDasharray={MIXTE_DASH} />
        <text className="gravure-lettrage" x={280} y={1144} fontSize="12">
          Cercle primitif
        </text>
        <line x1={420} y1={1140} x2={468} y2={1140} stroke={OXYDE} strokeWidth={FIN} />
        <text className="gravure-lettrage" x={480} y={1144} fontSize="12">
          Ligne d&apos;action
        </text>
        <line x1={620} y1={1140} x2={668} y2={1140} stroke={LAITON} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={680} y={1144} fontSize="12" fill={LAITON}>
          Arbre commun, laiton
        </text>
      </g>
      <text className="gravure-lettrage" x={64} y={1180} fontSize="12" fill={OXYDE}>
        Même module aux deux roues de la FIG. 1 : le pas se conserve sur les cercles primitifs.
      </text>
      <text className="gravure-lettrage" x={64} y={1202} fontSize="12" fill={OXYDE}>
        Nombres de dents et cotes : conventions de dessin, aucune donnée d&apos;exploitation.
      </text>
    </BlocTexte>

    <BlocTexte>
      <Cartouche
        x={800}
        y={1240}
        w={380}
        numeral="IV"
        title="Le train d'engrenages du groupe"
        echelle="Éch. symb."
        dossier={VOL_III}
        index="PL. 4/9"
        renvois={['Modèle du groupe : PL. VII', 'Weavme : PL. V', 'Line Builder : PL. III']}
      />
    </BlocTexte>
  </>
);
