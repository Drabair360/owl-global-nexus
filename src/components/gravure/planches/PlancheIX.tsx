import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_I } from '../Cartouche';
import {
  Trait,
  Cadre,
  poche,
  RepereFigure,
  Pastille,
  Nomenclature,
  NomenclatureLettres,
  PastilleLettre,
  ChaineCotes,
  TraceRegulateur,
  ArcRegulateur,
  AxeMixte,
  Boulon,
  Rupture,
} from '../primitives';

/**
 * PLANCHE IX — CENTRALE EN TOITURE (DOSSIER OWL, VOL. I, PL. 9/9).
 *   FIG. 1  coupe partielle de la toiture-terrasse de l'usine de référence :
 *           complexe d'étanchéité, pannes, plots ballastés non perçants,
 *           rangées de modules inclinés, recul de rive, garde-corps
 *   FIG. 2  schéma de raccordement : string, boîte DC, onduleur,
 *           transformateur élévateur, poste de livraison, comptage
 *   FIG. 3  traversée d'étanchéité et chemin de câbles, liaison équipotentielle
 * Rehaut de laiton unique : LA LIGNE DE RACCORDEMENT, de la toiture au point
 * de livraison. Le support est celui de la PL. I : le toit qui la porte.
 */

const TOIT = 470; // niveau fini de l'étanchéité, FIG. 1

export const PLANCHE_IX = {
  numeral: 'IX',
  title: 'Centrale en toiture',
  desc:
    "Gravure au trait, planche à trois figures représentant une centrale photovoltaïque posée sur la toiture-terrasse de l'unité industrielle de référence. FIGURE 1, coupe partielle de la toiture : le complexe est figuré par ses couches, support en bac d'acier nervuré, isolant et membrane d'étanchéité, porté par des pannes et une poutre principale dont la descente de charge est amorcée puis coupée par une ligne de rupture. Trois rangées de modules inclinés sont posées sur des plots ballastés non perçants, reliés par des rails ; l'entraxe d'ombrage entre rangées et le recul de rive sont cotés en symbolique, la rive est équipée d'un garde-corps et d'un chemin de câbles. Un arc de course solaire est tracé en régulateur ultrafin, sans graduation chiffrée. FIGURE 2, schéma de raccordement lu de haut en bas : les modules sont mis en série en string avec leurs polarités, rejoignent une boîte de jonction en courant continu équipée d'un parafoudre, puis un onduleur en armoire ventilée, puis un transformateur élévateur, enfin le poste de livraison avec son comptage et sa protection de découplage ; la partie continue et la partie alternative sont séparées par une limite en trait mixte, et la ligne qui va de la toiture au point de livraison est le seul rehaut de laiton de la planche. FIGURE 3, détail de la traversée d'étanchéité : platine, manchon, collerette soudée et relevé, avec le chemin de câbles sur support et la liaison équipotentielle des rails. Aucune puissance, aucune tension et aucune donnée d'exploitation ne sont portées ; les repères sont des étiquettes de convention. Nomenclature à deux colonnes, continu et alternatif, et cartouche de dossier portant la mention concept.",
  viewBox: '0 0 1240 900',
  detailViewBox: '80 300 420 300',
};

/** Rangée de modules inclinés sur plots ballastés, en coupe. */
const Rangee = ({
  x,
  p,
  principal = false,
}: {
  x: number;
  p: string;
  principal?: boolean;
}) => (
  <g>
    {/* plan de modules incliné */}
    <path
      d={`M${x} ${TOIT - 26} L${x + 128} ${TOIT - 90} L${x + 138} ${TOIT - 80} L${x + 10} ${TOIT - 16} z`}
      fill="none"
      stroke={ENCRE}
      strokeWidth={FORT}
    />
    {[1, 2, 3].map((i) => (
      <line
        key={i}
        x1={x + i * 32}
        y1={TOIT - 26 - i * 16}
        x2={x + 10 + i * 32}
        y2={TOIT - 16 - i * 16}
        stroke={ENCRE}
        strokeWidth={FIN}
      />
    ))}
    {/* rail et jambe de reprise */}
    <line x1={x + 16} y1={TOIT - 30} x2={x + 112} y2={TOIT - 78} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={x + 16} y1={TOIT - 30} x2={x + 16} y2={TOIT - 14} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={x + 112} y1={TOIT - 78} x2={x + 112} y2={TOIT - 14} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={x + 16} y1={TOIT - 22} x2={x + 112} y2={TOIT - 60} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="6 4" />
    <Boulon x={x + 16} y={TOIT - 30} r={2.2} />
    <Boulon x={x + 112} y={TOIT - 78} r={2.2} />
    {/* plots ballastés, aucune perforation de l'étanchéité */}
    {[16, 112].map((o) => (
      <rect key={o} x={x + o - 17} y={TOIT - 14} width={34} height={14} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={MOYEN} />
    ))}
    {/* natte de protection sous plot */}
    {[16, 112].map((o) => (
      <line key={`n${o}`} x1={x + o - 21} y1={TOIT + 1.5} x2={x + o + 21} y2={TOIT + 1.5} stroke={OXYDE} strokeWidth={MOYEN} />
    ))}
    {principal && (
      <>
        <PastilleLettre x={x + 146} y={TOIT - 96} l="a" />
        <PastilleLettre x={x - 12} y={TOIT - 6} l="b" />
      </>
    )}
  </g>
);

export const PlancheIXDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LA TOITURE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Toiture-terrasse équipée, coupe partielle" w={360} />

    {/* course solaire, tracé régulateur */}
    <ArcRegulateur cx={340} cy={TOIT} r={300} />
    <ArcRegulateur cx={340} cy={TOIT} r={244} />
    <TraceRegulateur d={`M62 ${TOIT} H622`} />

    {/* complexe d'étanchéité : membrane, isolant, bac acier nervuré */}
    <Trait x1={62} y1={TOIT} x2={640} y2={TOIT} w={FORT} />
    <line x1={62} y1={TOIT + 8} x2={640} y2={TOIT + 8} stroke={ENCRE} strokeWidth={FIN} />
    <rect x={62} y={TOIT + 8} width={578} height={16} fill={poche(p, 'beton')} opacity="0.5" stroke="none" />
    <line x1={62} y1={TOIT + 24} x2={640} y2={TOIT + 24} stroke={ENCRE} strokeWidth={FIN} />
    {/* bac acier nervuré */}
    <path
      d={Array.from({ length: 24 }, (_, i) => {
        const bx = 62 + i * 24;
        return `M${bx} ${TOIT + 24} v10 h12 v-10`;
      }).join(' ')}
      fill="none"
      stroke={ENCRE}
      strokeWidth={FIN}
    />
    <text className="gravure-lettrage" x={70} y={TOIT + 52} fontSize="11" fill={OXYDE}>
      Membrane, isolant, bac d&apos;acier nervuré
    </text>

    {/* pannes et poutre principale, descente de charge amorcée */}
    {[150, 330, 510].map((o) => (
      <g key={o}>
        <rect x={o - 9} y={TOIT + 36} width={18} height={22} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      </g>
    ))}
    <rect x={62} y={TOIT + 58} width={578} height={14} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={330} y1={TOIT + 72} x2={330} y2={TOIT + 132} stroke={ENCRE} strokeWidth={FORT} />
    <Rupture x={330} y={TOIT + 132} length={80} />
    <text className="gravure-lettrage" x={344} y={TOIT + 112} fontSize="11">
      Descente de charge, voir PL. I
    </text>
    <PastilleLettre x={124} y={TOIT + 48} l="c" />

    <Rangee x={96} p={p} principal />
    <Rangee x={276} p={p} />
    <Rangee x={456} p={p} />

    {/* cotes : entraxe d'ombrage et recul de rive */}
    <ChaineCotes y={TOIT + 168} points={[112, 292, 472]} labels={["e - entraxe d'ombrage", 'e']} attache={TOIT + 72} />
    <ChaineCotes y={196} points={[TOIT - 90, TOIT]} labels={['h']} attache={110} vertical />
    <text className="gravure-lettrage" x={84} y={TOIT - 118} fontSize="11" textAnchor="end">
      Hors-tout
    </text>

    {/* rive : recul, garde-corps et chemin de câbles */}
    <g>
      <line x1={620} y1={TOIT} x2={620} y2={TOIT - 74} stroke={ENCRE} strokeWidth={MOYEN} />
      {[0, 1].map((i) => (
        <line key={i} x1={612} y1={TOIT - 30 - i * 26} x2={628} y2={TOIT - 30 - i * 26} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      <text className="gravure-lettrage" x={634} y={TOIT - 52} fontSize="11">
        Garde-corps de rive
      </text>
      <line x1={596} y1={TOIT - 8} x2={596} y2={TOIT} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      <rect x={572} y={TOIT - 20} width={26} height={12} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={634} y={TOIT - 14} fontSize="11" fill={OXYDE}>
        Chemin de câbles
      </text>
      <line x1={584} y1={TOIT + 96} x2={620} y2={TOIT + 96} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="5 4" opacity="0.7" />
      <text className="gravure-lettrage" x={470} y={TOIT + 114} fontSize="10" fill={OXYDE}>
        Recul de rive, circulation de maintenance
      </text>
    </g>

    <NomenclatureLettres
      x={62}
      y={646}
      items={['Module et cadre', 'Plot ballasté non perçant', 'Panne et poutre porteuse']}
    />

    {/* ================= FIG. 2 — RACCORDEMENT ================= */}
    <RepereFigure x={700} y={96} n="2" title="De la toiture au point de livraison" w={330} />

    <g transform="translate(700 140)">
      {/* string de modules */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={0 + i * 34} y={0} width={26} height={40} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
        ))}
        <text className="gravure-lettrage" x={0} y={-10} fontSize="11">
          String de modules
        </text>
        <text className="gravure-lettrage" x={0} y={58} fontSize="11" fill={OXYDE}>
          + / -
        </text>
        <Pastille x={-14} y={20} n={1} r={8} />
      </g>

      {/* boîte de jonction DC et parafoudre */}
      <g transform="translate(0 96)">
        <Cadre x={0} y={0} w={96} h={54} weight={MOYEN} />
        <path d="M24 14 v12 l14 -6 z" fill="none" stroke={ENCRE} strokeWidth={FIN} />
        <line x1={24} y1={40} x2={72} y2={40} stroke={ENCRE} strokeWidth={ULTRAFIN} />
        <line x1={38} y1={46} x2={58} y2={46} stroke={ENCRE} strokeWidth={ULTRAFIN} />
        <text className="gravure-lettrage" x={106} y={22} fontSize="11">
          Boîte de jonction
        </text>
        <text className="gravure-lettrage" x={106} y={40} fontSize="11" fill={OXYDE}>
          Parafoudre
        </text>
        <Pastille x={-14} y={26} n={2} r={8} />
      </g>

      {/* onduleur */}
      <g transform="translate(0 200)">
        <Cadre x={0} y={0} w={96} h={72} weight={FORT} />
        <path d="M20 46 q14 -32 28 -18 q14 14 28 -18" fill="none" stroke={ENCRE} strokeWidth={FIN} />
        <line x1={0} y1={26} x2={96} y2={26} stroke={ENCRE} strokeWidth={ULTRAFIN} />
        {[0, 1, 2].map((i) => (
          <line key={i} x1={16 + i * 12} y1={6} x2={16 + i * 12} y2={20} stroke={ENCRE} strokeWidth={ULTRAFIN} />
        ))}
        <text className="gravure-lettrage" x={106} y={30} fontSize="11">
          Onduleur, armoire ventilée
        </text>
        <Pastille x={-14} y={36} n={3} r={8} />
      </g>

      {/* limite continu / alternatif */}
      <AxeMixte x1={-40} y1={296} x2={330} y2={296} />
      <text className="gravure-lettrage" x={-40} y={290} fontSize="11" fill={OXYDE}>
        Partie continue
      </text>
      <text className="gravure-lettrage" x={-40} y={314} fontSize="11" fill={OXYDE}>
        Partie alternative
      </text>

      {/* transformateur élévateur */}
      <g transform="translate(0 336)">
        <circle cx={34} cy={26} r={22} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
        <circle cx={62} cy={26} r={22} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
        <text className="gravure-lettrage" x={106} y={30} fontSize="11">
          Transformateur élévateur
        </text>
        <Pastille x={-14} y={26} n={4} r={8} />
      </g>

      {/* poste de livraison, comptage, découplage */}
      <g transform="translate(0 412)">
        <Cadre x={0} y={0} w={140} h={72} weight={FORT} />
        <rect x={16} y={16} width={40} height={40} fill="none" stroke={ENCRE} strokeWidth={FIN} />
        <circle cx={36} cy={36} r={11} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />
        <line x1={84} y1={16} x2={84} y2={40} stroke={ENCRE} strokeWidth={MOYEN} />
        <line x1={84} y1={40} x2={104} y2={56} stroke={ENCRE} strokeWidth={MOYEN} />
        <text className="gravure-lettrage" x={150} y={26} fontSize="11">
          Poste de livraison
        </text>
        <text className="gravure-lettrage" x={150} y={44} fontSize="11" fill={OXYDE}>
          Comptage et découplage
        </text>
        <Pastille x={-14} y={36} n={5} r={8} />
      </g>

      {/* la ligne de raccordement : rehaut de laiton unique */}
      <path
        d="M48 40 V96 M48 150 V200 M48 272 V336 M48 384 V412 M140 448 H236"
        fill="none"
        stroke={LAITON}
        strokeWidth={FORT}
      />
      <circle cx={236} cy={448} r={5} fill={LAITON} />
      <text className="gravure-lettrage" x={186} y={474} fontSize="11">
        Point de livraison
      </text>
    </g>

    {/* ================= FIG. 3 — TRAVERSÉE ET CHEMINEMENT ================= */}
    <RepereFigure x={62} y={706} n="3" title="Traversée d&apos;étanchéité et cheminement" w={330} />

    <g transform="translate(62 730)">
      {/* complexe de toiture en coupe, détail */}
      <rect x={0} y={30} width={220} height={16} fill={poche(p, 'beton')} opacity="0.5" stroke="none" />
      <line x1={0} y1={30} x2={220} y2={30} stroke={ENCRE} strokeWidth={FORT} />
      <line x1={0} y1={46} x2={220} y2={46} stroke={ENCRE} strokeWidth={FIN} />
      <rect x={0} y={46} width={220} height={12} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      {/* manchon et relevé d'étanchéité */}
      <rect x={92} y={-14} width={26} height={44} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M86 30 v-22 q0 -8 8 -8 M124 30 v-22 q0 -8 -8 -8" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <rect x={78} y={26} width={54} height={6} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={98} y1={-14} x2={112} y2={30} stroke={LAITON} strokeWidth={MOYEN} />
      <text className="gravure-lettrage" x={140} y={2} fontSize="11">
        Manchon et collerette
      </text>
      <text className="gravure-lettrage" x={140} y={20} fontSize="11" fill={OXYDE}>
        Relevé et platine
      </text>
      <text className="gravure-lettrage" x={0} y={82} fontSize="11" fill={OXYDE}>
        Étanchéité non perforée hors traversée
      </text>
    </g>

    <g transform="translate(430 730)">
      {/* chemin de câbles sur supports */}
      <line x1={0} y1={46} x2={210} y2={46} stroke={ENCRE} strokeWidth={FORT} />
      {[16, 100, 184].map((o) => (
        <g key={o}>
          <rect x={o - 10} y={20} width={20} height={26} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
          <rect x={o - 18} y={46} width={36} height={8} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={FIN} />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <line key={i} x1={4} y1={26 + i * 6} x2={206} y2={26 + i * 6} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      <text className="gravure-lettrage" x={0} y={82} fontSize="11">
        Chemin de câbles sur supports lestés
      </text>
      <path d="M0 100 h210" stroke={OXYDE} strokeWidth={MOYEN} strokeDasharray="7 5" fill="none" />
      <text className="gravure-lettrage" x={0} y={118} fontSize="11" fill={OXYDE}>
        Liaison équipotentielle des rails
      </text>
    </g>

    {/* ================= NOMENCLATURE DC / AC ================= */}
    <g>
      <text className="gravure-lettrage" x={700} y={640} fontSize="12" fill={OXYDE}>
        Continu
      </text>
      <text className="gravure-lettrage" x={960} y={640} fontSize="12" fill={OXYDE}>
        Alternatif
      </text>
      <Nomenclature
        x={706}
        y={666}
        perCol={3}
        colGap={260}
        lineHeight={22}
        items={[
          'String de modules',
          'Boîte de jonction et parafoudre',
          'Cheminement en chemin de câbles',
          'Onduleur',
          'Transformateur élévateur',
          'Poste de livraison et comptage',
        ]}
      />
    </g>

    <Cartouche
      x={880}
      y={846}
      numeral="IX"
      title="Centrale en toiture"
      echelle="Éch. symb."
      dossier={VOL_I}
      index="PL. 9/9"
      renvois={['Toiture porteuse : PL. I', 'Emprise en toiture : PL. VIII']}
    />
  </>
);
