import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_III } from '../Cartouche';
import { RepereFigure, Pastille, Nomenclature, CercleDetail, PastilleLettre } from '../primitives';
import {
  TitrePlanche,
  BandeauZone,
  SensLecture,
  EchelleLibelles,
  Repere,
  BlocTexte,
} from '../lisibilite';

/**
 * PLANCHE V — GRAPHIQUE D'ENGAGEMENTS (dossier OWL, VOL. III, PL. 5/9).
 * PILOTE DU SYSTÈME L : échelles de libellés en marge, zones nommées,
 * trois lectures (titre / zones + sens / détails et nomenclature).
 *
 *   FIG. 1  le graphique : huit périodes, six ressources, cinq engagements,
 *           un conflit au croisement, sa résolution en laiton
 *   FIG. 2  détail x3 du conflit et de sa résolution
 *   FIG. 3  nomenclature des signes
 * Rehaut de laiton unique : LE SEGMENT DE RÉSOLUTION.
 */

const X0 = 300;
const PAS = 76;
const Y0 = 180;
const RANG = 42;
const NB_P = 8;
const NB_R = 6;

const X = (w: number) => X0 + w * PAS;
const Y = (r: number) => Y0 + r * RANG;

const HAUT = Y(0) - 16;
const BAS = Y(NB_R - 1) + 18;

/** Un engagement : polyligne oblique reliant ressources et périodes. */
const Engagement = ({
  pts,
  type = 'ferme',
  or = false,
}: {
  pts: [number, number][];
  type?: 'ferme' | 'option' | 'recurrent';
  or?: boolean;
}) => {
  const d = pts.map(([w, r], i) => `${i === 0 ? 'M' : 'L'}${X(w)} ${Y(r)}`).join(' ');
  const c = or ? LAITON : ENCRE;
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={c}
        strokeWidth={type === 'ferme' ? (or ? FIN : MOYEN) : FIN}
        strokeDasharray={type === 'option' ? '7 5' : type === 'recurrent' ? '14 4 3 4' : undefined}
      />
      {pts.map(([w, r], i) => (
        <circle
          key={`${w}-${r}-${i}`}
          cx={X(w)}
          cy={Y(r)}
          r={3}
          fill={type === 'option' ? 'hsl(var(--gravure-fond))' : c}
          stroke={c}
          strokeWidth={ULTRAFIN}
        />
      ))}
    </g>
  );
};

/** Ligne de la nomenclature des signes : l'échantillon de trait, puis sa lecture. */
const Signe = ({ x, y, children, draw }: { x: number; y: number; children: string; draw: React.ReactNode }) => (
  <g transform={`translate(${x} ${y})`}>
    {draw}
    <text className="gravure-lettrage" data-lis="libelle" x={90} y={4} fontSize="12">
      {children}
    </text>
  </g>
);

export const PLANCHE_V = {
  numeral: 'V',
  title: "Graphique d'engagements",
  desc:
    "Gravure au trait, planche à trois figures, où le registre des engagements est porté sur un graphique horaire du type employé par les chemins de fer au dix-neuvième siècle. Le titre est en tête de planche ; le graphique se lit de gauche à droite en trois zones nommées : saisie des engagements, détection du conflit, résolution par report. FIGURE 1 : l'abscisse porte huit périodes symboliques, l'ordonnée six ressources rangées de A à F, et chaque engagement est un segment oblique qui relie une ressource à une période ; les engagements confirmés sont au trait fort, les options au trait interrompu, la récurrence au trait mixte, le préavis marqué d'un fanion à l'oxyde. Deux segments se croisent : c'est un conflit d'engagement, cerclé sur place, et sa résolution est portée en trait fin rehaussé de laiton, l'engagement étant déplacé sur une ressource libre. Tous les libellés de la figure vivent en marge, en échelles alignées, reliés au dessin par des lignes d'attache à un seul coude ; dans le dessin ne subsistent que des repères courts. FIGURE 2, détail à trois fois l'échelle du croisement : les deux segments en cause, le point de conflit, le segment de résolution, la marge de préavis et la ressource de report, décrits par huit lettres de nomenclature secondaire. FIGURE 3, nomenclature des signes : chaque convention de trait est montrée en échantillon puis nommée. Les périodes et les ressources sont symboliques, aucune donnée réelle, aucun nom, aucun lieu ne figure. Nomenclature de quatre entrées et cartouche de dossier, volume trois, portant la mention concept.",
  viewBox: '0 0 1240 900',
  detailViewBox: '160 500 460 260',
};

export const PlancheVDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ============ 3 SECONDES — LE TITRE ET LE SUJET ============ */}
    <TitrePlanche
      x={60}
      y={46}
      titre="Graphique d'engagements"
      sous="Registre des ressources et des périodes - le temps va de gauche à droite"
    />

    {/* ============ 30 SECONDES — LES ZONES ET LE SENS ============ */}
    <BandeauZone x={274} y={150} w={216} h={272} label="Saisie des engagements" />
    <BandeauZone x={490} y={150} w={228} h={272} label="Détection du conflit" />
    <BandeauZone x={718} y={150} w={152} h={272} label="Résolution par report" />

    {/* ================= FIG. 1 — LE GRAPHIQUE ================= */}
    <RepereFigure x={60} y={110} n="1" title="Le registre porté au graphique" w={520} />

    {/* trame : périodes */}
    {Array.from({ length: NB_P }).map((_, i) => (
      <g key={`p${i}`}>
        <line x1={X(i)} y1={HAUT} x2={X(i)} y2={BAS} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity={i % 2 === 0 ? 0.7 : 0.45} />
        <Repere x={X(i)} y={BAS + 20}>{`S${i + 1}`}</Repere>
      </g>
    ))}
    {/* trame : ressources */}
    {Array.from({ length: NB_R }).map((_, r) => (
      <g key={`r${r}`}>
        <line x1={X0 - 26} y1={Y(r)} x2={X(NB_P - 1) + 26} y2={Y(r)} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
        <Repere x={X0 - 38} y={Y(r) + 4} anchor="end">
          {String.fromCharCode(65 + r)}
        </Repere>
      </g>
    ))}
    <line x1={X0 - 26} y1={BAS} x2={X(NB_P - 1) + 26} y2={BAS} stroke={ENCRE} strokeWidth={FORT} />
    <line x1={X0 - 26} y1={HAUT} x2={X0 - 26} y2={BAS} stroke={ENCRE} strokeWidth={FORT} />

    {/* engagements */}
    <Engagement pts={[[0, 0], [2, 1], [5, 1], [7, 3]]} />
    <Engagement pts={[[1, 2], [6, 2]]} />
    <Engagement pts={[[2, 4], [5, 1]]} />
    <Engagement pts={[[0, 3], [3, 5], [6, 5]]} type="option" />
    <Engagement pts={[[4, 0], [7, 0]]} type="recurrent" />

    {/* tenue sur deux périodes : crochet sous le segment maintenu */}
    <path d={`M${X(2)} ${Y(1) + 12} v8 h${PAS * 3} v-8`} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />

    {/* préavis : fanion à l'oxyde en amont d'un engagement */}
    <g>
      <line x1={X(1) - 26} y1={Y(2) - 22} x2={X(1) - 26} y2={Y(2)} stroke={OXYDE} strokeWidth={FIN} />
      <path d={`M${X(1) - 26} ${Y(2) - 22} l16 6 -16 6 z`} fill={OXYDE} />
    </g>

    {/* conflit détecté au croisement, et résolution en laiton */}
    <g>
      <path d={`M${604 - 9} ${Y(2) - 9} l18 18 M${604 + 9} ${Y(2) - 9} l-18 18`} stroke={OXYDE} strokeWidth={FIN} />
      <circle cx={604} cy={Y(2)} r={13} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" />
    </g>
    <Engagement pts={[[2, 4], [5, 0]]} or />

    {/* repères courts dans le dessin, phrases en marge */}
    <Pastille x={X0 - 62} y={Y(0)} n={1} />
    <Pastille x={X0 - 62} y={BAS + 16} n={2} />
    <Pastille x={X(3) + 6} y={Y(5) - 20} n={3} />
    <Pastille x={X(5) + 16} y={Y(0) + 24} n={4} />

    <SensLecture x={X0} y={BAS + 72} w={X(NB_P - 1) - X0} label="Sens de lecture : les périodes" />

    {/* échelle de marge, à gauche */}
    <EchelleLibelles
      x={236}
      yStart={244}
      yStep={30}
      side="left"
      coude={26}
      items={[
        { label: 'Rangs de ressource, A à F', cible: [X0 - 26, Y(2)] },
        { label: 'Préavis avant engagement', cible: [X(1) - 26, Y(2) - 16] },
      ]}
    />

    {/* échelle de marge, à droite */}
    <EchelleLibelles
      x={900}
      yStart={176}
      yStep={30}
      side="right"
      coude={26}
      items={[
        { label: 'Segment de résolution : report sur ressource libre', cible: [642, 208], or: true },
        { label: 'Conflit : même ressource, même période', cible: [604, Y(2)] },
        { label: 'Tenue sur trois périodes', cible: [X(3), Y(1) + 20] },
        { label: 'Engagement récurrent', cible: [X(6), Y(0)] },
      ]}
    />

    {/* ================= FIG. 2 — DÉTAIL DU CONFLIT ================= */}
    <RepereFigure x={60} y={512} n="2" title="Le conflit et sa résolution x3" w={300} />

    <g transform="translate(300 640)">
      <CercleDetail cx={0} cy={0} r={108} label="x3" />
      <line x1={-98} y1={26} x2={98} y2={26} stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={-60} y1={94} x2={78} y2={-82} stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={6} cy={26} r={12} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" />
      <path d="M-3 17 l18 18 M15 17 l-18 18" stroke={OXYDE} strokeWidth={FIN} />
      {/* le segment de résolution : trait fin, laiton */}
      <line x1={-60} y1={94} x2={88} y2={-44} stroke={LAITON} strokeWidth={FIN} />
      {/* marge de préavis */}
      <line x1={-60} y1={94} x2={-60} y2={62} stroke={OXYDE} strokeWidth={ULTRAFIN} />
      <PastilleLettre x={-92} y={-16} l="a" />
      <PastilleLettre x={-36} y={0} l="b" />
      <PastilleLettre x={28} y={2} l="c" />
      <PastilleLettre x={80} y={-26} l="d" />
      <PastilleLettre x={92} y={48} l="e" />
      <PastilleLettre x={24} y={86} l="f" />
      <PastilleLettre x={-52} y={54} l="g" />
      <PastilleLettre x={-94} y={62} l="h" />
    </g>

    <BlocTexte>
      <g>
        {[
          'Engagement confirmé, ressource tenue',
          'Engagement entrant, pente de report',
          'Point de conflit',
          'Segment de résolution',
          'Ressource de report, libre',
          'Origine de la demande',
          'Marge de préavis',
          'Ligne de ressource',
        ].map((it, i) => (
          <g key={it}>
            <PastilleLettre x={448} y={546 + i * 24} l={String.fromCharCode(97 + i)} />
            <text className="gravure-lettrage" data-lis="libelle" x={464} y={550 + i * 24} fontSize="12">
              {it}
            </text>
          </g>
        ))}
      </g>
    </BlocTexte>

    {/* ================= FIG. 3 — NOMENCLATURE DES SIGNES ================= */}
    <RepereFigure x={760} y={506} n="3" title="Nomenclature des signes" w={300} />

    <BlocTexte>
      <g transform="translate(772 534)">
        <Signe x={0} y={0} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={ENCRE} strokeWidth={MOYEN} />}>
          Engagement confirmé
        </Signe>
        <Signe x={0} y={30} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={ENCRE} strokeWidth={FIN} strokeDasharray="7 5" />}>
          Option, non ferme
        </Signe>
        <Signe x={0} y={60} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={ENCRE} strokeWidth={FIN} strokeDasharray="14 4 3 4" />}>
          Engagement récurrent
        </Signe>
        <Signe x={0} y={90} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={LAITON} strokeWidth={FIN} />}>
          Segment de résolution
        </Signe>
        <Signe x={0} y={120} draw={<path d="M29 -9 l18 18 M47 -9 l-18 18" stroke={OXYDE} strokeWidth={FIN} />}>
          Conflit détecté
        </Signe>
        <Signe
          x={0}
          y={150}
          draw={
            <g>
              <line x1={38} y1={-14} x2={38} y2={6} stroke={OXYDE} strokeWidth={FIN} />
              <path d="M38 -14 l16 5 -16 5 z" fill={OXYDE} />
            </g>
          }
        >
          Préavis
        </Signe>
        <Signe x={0} y={180} draw={<path d="M8 -8 v10 h60 v-10" fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />}>
          Tenue sur plusieurs périodes
        </Signe>
      </g>
    </BlocTexte>

    {/* ================= NOMENCLATURE ================= */}
    <BlocTexte>
      <Nomenclature
        x={72}
        y={800}
        perCol={2}
        colGap={340}
        items={[
          'Rang de ressource, A à F',
          'Période symbolique, S1 à S8',
          'Engagement porté au registre',
          'Résolution de conflit',
        ]}
      />
    </BlocTexte>

    <BlocTexte>
      <Cartouche
        x={880}
        y={802}
        numeral="V"
        title="Graphique d'engagements"
        echelle="Éch. symb."
        dossier={VOL_III}
        index="PL. 5/9"
        renvois={['Modèle du groupe : PL. VII', 'Socles logiciels : PL. IV']}
      />
    </BlocTexte>
  </>
);
