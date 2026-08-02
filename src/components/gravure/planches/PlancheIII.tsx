import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_I } from '../Cartouche';
import { RepereFigure, MIXTE_DASH } from '../primitives';
import {
  TitrePlanche,
  BandeauZone,
  SensLecture,
  EchelleLibelles,
  Repere,
  BlocTexte,
} from '../lisibilite';

/**
 * PLANCHE III — CONFIGURATEUR DE LIGNE, SORTIE CFG-A (VOL. I, PL. 3/9).
 * PHASE M1 — reconstruction complète sur le système L.
 *
 * LES TROIS LECTURES
 *   3 s    Le titre et la forme : une filière unique, une seule phrase qui
 *          va de la matière première (à gauche) au produit conditionné
 *          (à droite), sous une flèche de sens unique.
 *   30 s   Les six zones nommées - Réception, Nettoyage, Calibrage,
 *          Transformation, Dosage, Conditionnement - et les trois étages :
 *          aspiration au-dessus (trait fin), procédé au centre (trait fort),
 *          utilités en dessous (trait mixte) ; le laiton de la planche
 *          désigne, en FIG. 2, la colonne de filière retenue : CFG-A.
 *   3 min  Chaque symbole porte son repère au dessin (T-101, S-201...) et son
 *          libellé complet en échelle de marge ; la boucle de recyclage des
 *          refus, le rejet écarté, le by-pass de calibrage, les variantes
 *          raccordées et le bilan matière symbolique se lisent au détail.
 *
 * Rehaut de laiton unique : LA COLONNE CFG-A DE LA MATRICE (FIG. 2).
 * Les repères d'équipement sont des étiquettes de convention : aucune
 * référence normative, aucun chiffre d'exploitation.
 */

/* ---------------- géométrie du bandeau de procédé ---------------- */
const BX = 150; // bord gauche du dessin
const BW = 1030; // largeur du dessin
const BY = 170; // haut du bandeau
const BH = 310; // hauteur du bandeau

const Y_ASP = 212; // étage aspiration
const Y_PRO = 330; // étage procédé
const Y_UTI = 452; // étage utilités
const HB = 21; // demi-hauteur des masses
const WB = 23; // demi-largeur des masses
const Y_REP = 372; // ligne des repères, sous les masses

type Glyphe = (props: { x: number; y: number }) => JSX.Element;

/** Une masse d'équipement : cadre, glyphe intérieur, repère court dessous. */
const Equip = ({
  x,
  y = Y_PRO,
  rep,
  glyphe,
  yRep = Y_REP,
}: {
  x: number;
  y?: number;
  rep: string;
  glyphe: Glyphe;
  yRep?: number;
}) => (
  <g>
    <rect
      x={x - WB}
      y={y - HB}
      width={WB * 2}
      height={HB * 2}
      fill="hsl(var(--gravure-fond))"
      stroke={ENCRE}
      strokeWidth={MOYEN}
    />
    {glyphe({ x, y })}
    <Repere x={x} y={yRep}>
      {rep}
    </Repere>
  </g>
);

/* --------- glyphes : un dessin par fonction, jamais décoratif --------- */
const gTremie: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 14} ${y - 12} h28 l-9 20 h-10 z`} />
    <line x1={x - 14} y1={y - 12} x2={x + 14} y2={y - 12} strokeWidth={MOYEN} />
    {[-10, -3, 4, 11].map((d) => (
      <line key={d} x1={x + d} y1={y - 16} x2={x + d} y2={y - 12} strokeWidth={ULTRAFIN} />
    ))}
  </g>
);
const gElevateur: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <rect x={x - 7} y={y - 15} width={14} height={30} />
    {[-11, -4, 3, 10].map((d) => (
      <path key={d} d={`M${x - 5} ${y + d} h5 v4 h-5 z`} strokeWidth={ULTRAFIN} />
    ))}
  </g>
);
const gSeparateur: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 14} ${y + 2} q7 -12 14 0 q7 12 14 0`} />
    <path d={`M${x - 14} ${y + 12} q7 -12 14 0 q7 12 14 0`} strokeWidth={ULTRAFIN} />
  </g>
);
const gTamis: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <line x1={x - 15} y1={y - 8} x2={x + 15} y2={y - 3} strokeDasharray="3 3" />
    <line x1={x - 15} y1={y + 3} x2={x + 15} y2={y + 8} strokeDasharray="3 3" />
  </g>
);
const gAimant: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 11} ${y + 10} v-8 a11 11 0 0 1 22 0 v8`} />
    <line x1={x - 11} y1={y + 10} x2={x - 4} y2={y + 10} strokeWidth={MOYEN} />
    <line x1={x + 4} y1={y + 10} x2={x + 11} y2={y + 10} strokeWidth={MOYEN} />
  </g>
);
const gPlansichter: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN}>
    {[-12, -6, 0, 6, 12].map((d) => (
      <line key={d} x1={x - 15} y1={y + d} x2={x + 15} y2={y + d} />
    ))}
  </g>
);
const gBypass: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 15} ${y + 8} q15 -30 30 0`} strokeDasharray="6 4" />
    <line x1={x - 15} y1={y + 8} x2={x + 15} y2={y + 8} strokeWidth={ULTRAFIN} />
  </g>
);
const gBroyeur: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <circle cx={x - 8} cy={y} r={9} />
    <circle cx={x + 8} cy={y} r={9} />
    <line x1={x - 8} y1={y - 4} x2={x - 8} y2={y + 4} strokeWidth={ULTRAFIN} />
    <line x1={x + 8} y1={y - 4} x2={x + 8} y2={y + 4} strokeWidth={ULTRAFIN} />
  </g>
);
const gPiquage: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 12} ${y - 8} L${x} ${y} L${x - 12} ${y + 8} z`} />
    <path d={`M${x + 12} ${y - 8} L${x} ${y} L${x + 12} ${y + 8} z`} />
    <line x1={x} y1={y - 14} x2={x} y2={y - 8} strokeWidth={ULTRAFIN} />
  </g>
);
const gPeseuse: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 13} ${y - 12} h26 l-8 18 h-10 z`} />
    <line x1={x - 13} y1={y + 12} x2={x + 13} y2={y + 12} strokeWidth={MOYEN} />
    <line x1={x} y1={y + 6} x2={x} y2={y + 12} strokeWidth={ULTRAFIN} />
  </g>
);
const gMelangeur: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <rect x={x - 15} y={y - 10} width={30} height={20} rx={9} />
    <path d={`M${x - 11} ${y} q6 -9 11 0 q6 9 11 0`} strokeWidth={ULTRAFIN} />
  </g>
);
const gEnsacheuse: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 10} ${y - 14} h20 l-4 10 h-12 z`} />
    <rect x={x - 9} y={y - 2} width={18} height={16} />
  </g>
);
const gPesee: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <path d={`M${x - 13} ${y + 10} h26`} strokeWidth={MOYEN} />
    <line x1={x} y1={y + 10} x2={x} y2={y - 12} />
    <path d={`M${x - 12} ${y - 12} h24`} />
    <path d={`M${x - 12} ${y - 12} l-4 8 h8 z`} strokeWidth={ULTRAFIN} />
    <path d={`M${x + 12} ${y - 12} l-4 8 h8 z`} strokeWidth={ULTRAFIN} />
  </g>
);
const gPalettiseur: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <rect x={x - 13} y={y + 2} width={26} height={9} />
    <rect x={x - 10} y={y - 8} width={20} height={9} />
    <rect x={x - 7} y={y - 18} width={14} height={9} strokeDasharray="4 3" />
  </g>
);
const gFiltre: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <rect x={x - 14} y={y - 13} width={28} height={26} />
    {[-8, -2, 4, 10].map((d) => (
      <line key={d} x1={x + d} y1={y - 9} x2={x + d} y2={y + 9} strokeWidth={ULTRAFIN} />
    ))}
  </g>
);
const gNourrice: Glyphe = ({ x, y }) => (
  <g fill="none" stroke={ENCRE} strokeWidth={FIN}>
    <rect x={x - 15} y={y - 7} width={30} height={14} rx={7} />
    {[-8, 0, 8].map((d) => (
      <line key={d} x1={x + d} y1={y - 12} x2={x + d} y2={y - 7} strokeWidth={ULTRAFIN} />
    ))}
  </g>
);

/** Flèche de procédé posée sur l'étage fort. */
const FlecheProcede = ({ x, y = Y_PRO }: { x: number; y?: number }) => (
  <path d={`M${x} ${y} l-11 -5 v10 z`} fill={ENCRE} />
);

export const PLANCHE_III = {
  numeral: 'III',
  title: 'Configurateur de ligne, sortie CFG-A',
  desc:
    "Gravure au trait, planche à trois figures représentant la sortie du configurateur de ligne agro-industrielle pour une filière unique, la mouture. Le titre est en tête de planche et le dessin se lit strictement de gauche à droite, de la matière première au produit conditionné, sous une flèche de sens unique. FIGURE 1 : le bandeau de procédé est divisé en six zones nommées, réception, nettoyage, calibrage, transformation, dosage et conditionnement, et se lit sur trois étages distincts. Au centre, l'étage du procédé est tracé au trait fort et fléché : trémie de réception, élévateur à godets, séparateur à air, tamis vibrant, aimant à barreaux, plansichter à étages, by-pass de calibrage, broyeur à cylindres, piquage commun de variante, trémie peseuse, mélangeur à rubans, ensacheuse, pesée-contrôle et palettiseur. Au-dessus, l'étage d'aspiration est tracé au trait fin : trois descentes captent les capots du nettoyage, du calibrage et de l'ensachage et rejoignent le filtre à manches, dont le rejet filtré est fléché vers le haut. En dessous, l'étage des utilités est tracé au trait mixte depuis la nourrice, avec trois piquages remontant vers la transformation, le dosage et le conditionnement. Une boucle de recyclage ramène les refus du calibrage en amont de l'élévateur ; la part non recyclable est écartée. Chaque masse porte au dessin un repère court et rien d'autre ; tous les libellés complets vivent hors du dessin, dans une échelle de marge alignée en trois colonnes, chaque entrée liant son repère à sa désignation. Une légende de famille rappelle les trois étages. FIGURE 2, la matrice du configurateur : six familles de modules en lignes, trois filières en colonnes, mouture, oléagineux et séchage, chaque case portant un module commun, une variante ou une absence ; la colonne de la filière retenue est seule rehaussée de laiton et forme la configuration CFG-A lue en figure une. FIGURE 3, les variantes raccordées sur le piquage commun, broyeur à cylindres, presse et séchoir rotatif, en trait interrompu, avec le bilan matière symbolique, entrée, sortie, refus recyclés et refus écartés, sans aucun chiffre d'exploitation. Cartouche de dossier, volume premier, mention concept.",
  viewBox: '0 0 1240 1290',
  detailViewBox: '470 150 480 380',
};

export const PlancheIIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ============ 3 SECONDES — LE TITRE ET LE SUJET ============ */}
    <TitrePlanche
      x={60}
      y={46}
      titre="Configurateur de ligne, sortie CFG-A"
      sous="Filière mouture, de la matière première au produit conditionné - le procédé va de gauche à droite"
    />

    <RepereFigure x={60} y={126} n="1" title="La filière retenue, en une seule phrase" w={420} />

    {/* ============ 30 SECONDES — LES ZONES NOMMÉES ============ */}
    <BandeauZone x={BX} y={BY} w={160} h={BH} label="Réception" />
    <BandeauZone x={310} y={BY} w={190} h={BH} label="Nettoyage" />
    <BandeauZone x={500} y={BY} w={160} h={BH} label="Calibrage" />
    <BandeauZone x={660} y={BY} w={190} h={BH} label="Transformation" />
    <BandeauZone x={850} y={BY} w={150} h={BH} label="Dosage" />
    <BandeauZone x={1000} y={BY} w={180} h={BH} label="Conditionnement" />

    {/* ============ LES TROIS ÉTAGES, NOMMÉS EN MARGE ============ */}
    <Repere x={64} y={Y_ASP + 4} anchor="start">Aspiration</Repere>
    <Repere x={64} y={Y_PRO + 4} anchor="start">Procédé</Repere>
    <Repere x={64} y={Y_UTI + 4} anchor="start">Utilités</Repere>

    {/* ---------- ÉTAGE UTILITÉS (trait mixte, en dessous) ---------- */}
    <line
      x1={211}
      y1={Y_UTI}
      x2={1040}
      y2={Y_UTI}
      stroke={ENCRE}
      strokeWidth={FIN}
      strokeDasharray={MIXTE_DASH}
      opacity="0.85"
    />
    {[
      [748, 733],
      [926, 913],
      [1010, 1017],
    ].map(([tx, bx]) => (
      <path
        key={tx}
        d={`M${tx} ${Y_UTI} V345 H${bx}`}
        fill="none"
        stroke={ENCRE}
        strokeWidth={ULTRAFIN}
        strokeDasharray={MIXTE_DASH}
        opacity="0.85"
      />
    ))}
    <Equip x={188} y={Y_UTI} rep="U-801" glyphe={gNourrice} yRep={492} />

    {/* ---------- ÉTAGE ASPIRATION (trait fin, au-dessus) ---------- */}
    <line x1={350} y1={Y_ASP} x2={1122} y2={Y_ASP} stroke={ENCRE} strokeWidth={FIN} />
    {[350, 542, 1040].map((x) => (
      <line
        key={x}
        x1={x}
        y1={Y_ASP}
        x2={x}
        y2={Y_PRO - HB}
        stroke={ENCRE}
        strokeWidth={ULTRAFIN}
        strokeDasharray="5 4"
        opacity="0.85"
      />
    ))}
    <Equip x={1145} y={Y_ASP} rep="F-701" glyphe={gFiltre} yRep={252} />
    <line x1={1145} y1={Y_ASP - 20} x2={1145} y2={182} stroke={OXYDE} strokeWidth={FIN} />
    <path d="M1145 176 l-5 12 h10 z" fill={OXYDE} />
    <Repere x={1120} y={198} anchor="end">H-702</Repere>

    {/* ---------- ÉTAGE PROCÉDÉ (trait fort, au centre) ---------- */}
    <line x1={BX} y1={Y_PRO} x2={BX + BW} y2={Y_PRO} stroke={ENCRE} strokeWidth={FORT} />
    {[310, 500, 660, 850, 1000, 1180].map((x) => (
      <FlecheProcede key={x} x={x} />
    ))}
    <Repere x={BX + 4} y={302} anchor="start">MP</Repere>
    <Repere x={BX + BW - 4} y={302} anchor="end">PF</Repere>

    <Equip x={188} rep="T-101" glyphe={gTremie} />
    <Equip x={262} rep="E-102" glyphe={gElevateur} />
    <Equip x={350} rep="S-201" glyphe={gSeparateur} />
    <Equip x={410} rep="V-202" glyphe={gTamis} />
    <Equip x={470} rep="A-203" glyphe={gAimant} />
    <Equip x={542} rep="P-301" glyphe={gPlansichter} />
    <Equip x={620} rep="Y-302" glyphe={gBypass} />
    <Equip x={710} rep="B-401" glyphe={gBroyeur} />
    <Equip x={800} rep="K-402" glyphe={gPiquage} />
    <Equip x={890} rep="D-501" glyphe={gPeseuse} />
    <Equip x={962} rep="X-502" glyphe={gMelangeur} />
    <Equip x={1040} rep="G-601" glyphe={gEnsacheuse} />
    <Equip x={1096} rep="W-602" glyphe={gPesee} />
    <Equip x={1152} rep="Z-603" glyphe={gPalettiseur} />

    {/* ---------- BOUCLE DE RECYCLAGE DES REFUS ---------- */}
    <path
      d={`M620 ${Y_PRO + HB} V400 H225 V${Y_PRO + 6}`}
      fill="none"
      stroke={ENCRE}
      strokeWidth={MOYEN}
    />
    <path d={`M225 ${Y_PRO} l-5 12 h10 z`} fill={ENCRE} />
    <Repere x={430} y={396}>REC</Repere>
    {/* la part non recyclable, écartée */}
    <path d="M620 400 H676 V420" fill="none" stroke={OXYDE} strokeWidth={FIN} strokeDasharray="6 4" />
    <path d="M676 428 l-5 -12 h10 z" fill={OXYDE} />
    <Repere x={700} y={424} anchor="start">REJ</Repere>

    <SensLecture
      x={BX}
      y={530}
      w={BW}
      label="Sens du procédé : matière première à gauche, produit conditionné à droite"
    />

    {/* ============ 3 MINUTES — L'ÉCHELLE DE LIBELLÉS EN MARGE ============ */}
    <BlocTexte>
      <text className="gravure-lettrage" x={60} y={556} fontSize="12" fill={OXYDE}>
        Échelle de libellés - chaque repère du dessin, sa désignation complète
      </text>
    </BlocTexte>
    <EchelleLibelles
      x={64}
      yStart={578}
      yStep={24}
      side="right"
      items={[
        { label: 'MP - Matière première en vrac' },
        { label: 'T-101 - Trémie de réception et grille' },
        { label: 'E-102 - Élévateur à godets' },
        { label: 'S-201 - Séparateur à air' },
        { label: 'V-202 - Tamis vibrant' },
        { label: 'A-203 - Aimant à barreaux' },
        { label: 'P-301 - Plansichter à étages' },
      ]}
    />
    <EchelleLibelles
      x={464}
      yStart={578}
      yStep={24}
      side="right"
      items={[
        { label: 'Y-302 - By-pass de calibrage' },
        { label: 'B-401 - Broyeur à cylindres' },
        { label: 'K-402 - Piquage commun de variante' },
        { label: 'D-501 - Trémie peseuse' },
        { label: 'X-502 - Mélangeur à rubans' },
        { label: 'G-601 - Ensacheuse' },
        { label: 'W-602 - Pesée-contrôle' },
      ]}
    />
    <EchelleLibelles
      x={864}
      yStart={578}
      yStep={24}
      side="right"
      items={[
        { label: 'Z-603 - Palettiseur' },
        { label: 'F-701 - Filtre à manches' },
        { label: 'H-702 - Rejet filtré' },
        { label: 'U-801 - Nourrice d\u2019utilités' },
        { label: 'REC - Refus recyclés en amont' },
        { label: 'REJ - Refus écartés' },
        { label: 'PF - Produit conditionné' },
      ]}
    />

    {/* ---------- LÉGENDE DES TROIS FAMILLES ---------- */}
    <BlocTexte>
      <g>
        <line x1={64} y1={766} x2={124} y2={766} stroke={ENCRE} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={136} y={770} fontSize="12">
          Procédé - trait fort, étage central
        </text>
        <line x1={464} y1={766} x2={524} y2={766} stroke={ENCRE} strokeWidth={FIN} />
        <text className="gravure-lettrage" x={536} y={770} fontSize="12">
          Aspiration - trait fin, étage supérieur
        </text>
        <line
          x1={864}
          y1={766}
          x2={924}
          y2={766}
          stroke={ENCRE}
          strokeWidth={FIN}
          strokeDasharray={MIXTE_DASH}
        />
        <text className="gravure-lettrage" x={936} y={770} fontSize="12">
          Utilités - trait mixte, étage inférieur
        </text>
      </g>
    </BlocTexte>

    {/* ============ FIG. 2 — LA MATRICE, COLONNE CFG-A EN LAITON ============ */}
    <RepereFigure x={60} y={812} n="2" title="Matrice du configurateur, colonne retenue" w={400} />
    <BlocTexte>
      <g transform="translate(120 880)">
        {(() => {
          const COLX = [230, 330, 430];
          const FIL = ['Mouture', 'Oléagineux', 'Séchage'];
          const ROWS: [string, ('c' | 'v' | '-')[]][] = [
            ['Réception', ['c', 'c', 'c']],
            ['Nettoyage', ['c', 'c', 'c']],
            ['Calibrage', ['c', 'c', '-']],
            ['Transformation', ['v', 'v', 'v']],
            ['Dosage', ['c', '-', 'c']],
            ['Conditionnement', ['c', 'c', 'c']],
          ];
          return (
            <>
              <rect x={COLX[0] - 34} y={8} width={68} height={178} fill="none" stroke={LAITON} strokeWidth={FORT} />
              <text className="gravure-lettrage" x={COLX[0]} y={-26} fontSize="12" textAnchor="middle" fill={LAITON}>
                CFG-A
              </text>
              {FIL.map((f, c) => (
                <text key={f} className="gravure-lettrage" x={COLX[c]} y={-4} fontSize="12" textAnchor="middle">
                  {f}
                </text>
              ))}
              <line x1={-40} y1={8} x2={470} y2={8} stroke={ENCRE} strokeWidth={FIN} />
              {ROWS.map(([nom, cases], r) => {
                const y = 34 + r * 28;
                return (
                  <g key={nom}>
                    <text className="gravure-lettrage" x={-40} y={y + 4} fontSize="12">
                      {nom}
                    </text>
                    <line x1={-40} y1={y + 14} x2={470} y2={y + 14} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.4" />
                    {cases.map((k, c) => (
                      <g key={c}>
                        {k === 'c' && <circle cx={COLX[c]} cy={y} r={5} fill={ENCRE} />}
                        {k === 'v' && (
                          <rect x={COLX[c] - 6} y={y - 6} width={12} height={12} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
                        )}
                        {k === '-' && (
                          <line x1={COLX[c] - 5} y1={y} x2={COLX[c] + 5} y2={y} stroke={OXYDE} strokeWidth={FIN} />
                        )}
                      </g>
                    ))}
                  </g>
                );
              })}
              <text className="gravure-lettrage" x={-40} y={228} fontSize="12" fill={OXYDE}>
                Module commun (point), variante (carré), sans objet (tiret)
              </text>
              <text className="gravure-lettrage" x={-40} y={250} fontSize="12" fill={OXYDE}>
                Colonne retenue : CFG-A, la filière lue en FIG. 1
              </text>
            </>
          );
        })()}
      </g>
    </BlocTexte>

    {/* ============ FIG. 3 — LES VARIANTES ET LE BILAN ============ */}
    <RepereFigure x={700} y={812} n="3" title="Variantes raccordées sur K-402" w={330} />
    <BlocTexte>
      <g transform="translate(716 852)">
        <path d="M0 10 V160" fill="none" stroke={ENCRE} strokeWidth={FORT} />
        {[
          ['Broyeur à cylindres', 'Filière mouture - retenue'],
          ['Presse', 'Filière oléagineux'],
          ['Séchoir rotatif', 'Filière séchage'],
        ].map(([nom, filiere], i) => {
          const y = 30 + i * 54;
          return (
            <g key={nom}>
              <path d={`M0 ${y} h40`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
              <rect x={40} y={y - 21} width={230} height={44} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="6 4" />
              <text className="gravure-lettrage" x={52} y={y - 6} fontSize="12">
                {nom}
              </text>
              <text className="gravure-lettrage" x={52} y={y + 16} fontSize="12" fill={OXYDE}>
                {filiere}
              </text>
            </g>
          );
        })}
        <text className="gravure-lettrage" x={0} y={208} fontSize="12">
          Un piquage commun, une variante par filière
        </text>
        <text className="gravure-lettrage" x={0} y={230} fontSize="12">
          Bilan matière : entrée, sortie, refus recyclés, refus écartés
        </text>
        <text className="gravure-lettrage" x={0} y={252} fontSize="12" fill={OXYDE}>
          Bilan symbolique, sans chiffre d’exploitation
        </text>
      </g>
    </BlocTexte>

    <BlocTexte>
      <Cartouche
        x={800}
        y={1190}
        w={380}
        numeral="III"
        title="Configurateur de ligne, sortie CFG-A"
        echelle="Éch. symb."
        dossier={VOL_I}
        index="PL. 3/9"
        renvois={['Implantation résultante : PL. VIII', 'Socles logiciels : PL. IV']}
      />
    </BlocTexte>
  </>
);
