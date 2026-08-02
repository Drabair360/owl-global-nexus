import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Cadre,
  poche,
  Attache,
  RepereFigure,
  Pastille,
  Nomenclature,
  NomenclatureLettres,
  PastilleLettre,
  ChaineCotes,
  CercleDetail,
  StratesSol,
  TraceRegulateur,
  ArcRegulateur,
  TraceCache,
  AxeMixte,
  Boulon,
  Rupture,
} from '../primitives';

/**
 * PLANCHE IX — FERME SOLAIRE RACCORDÉE.
 *   FIG. 1  élévation d'une table photovoltaïque : modules, inclinaison,
 *           structure porteuse sur pieux battus, garde au sol, entraxe
 *   FIG. 2  schéma de raccordement : string, boîte DC, onduleur,
 *           transformateur élévateur, poste de livraison, comptage
 *   FIG. 3  tranchée de câbles en coupe et réseau de terre
 * Rehaut de laiton unique : LA LIGNE DE RACCORDEMENT, du champ au point
 * de livraison. Les repères DC et AC sont des étiquettes de convention.
 */

const SOL = 396; // ligne de terre naturelle, FIG. 1

export const PLANCHE_IX = {
  numeral: 'IX',
  title: 'Ferme solaire raccordée',
  desc:
    "Gravure au trait, planche à trois figures représentant une ferme solaire raccordée au réseau. FIGURE 1, élévation d'une table photovoltaïque : les modules sont figurés par un plan incliné à joints réguliers, portés par une structure de profilés contreventée et fondée sur pieux battus pochés acier ; la hauteur de garde au sol et l'entraxe entre deux rangées sont cotés en symbolique, l'entraxe portant la mention d'ombrage ; une seconde rangée est amorcée puis coupée par une ligne de rupture, et le sol est figuré par ses strates, terre végétale, terrain et bon sol, avec le niveau de fondation. Un diagramme de course solaire est tracé en régulateur ultrafin au-dessus des tables, sans graduation chiffrée. FIGURE 2, schéma de raccordement lu de gauche à droite : les modules sont mis en série en string avec leurs polarités, rejoignent une boîte de jonction en courant continu équipée d'un parafoudre, puis un onduleur en armoire ventilée, puis un transformateur élévateur, enfin le poste de livraison avec son comptage et sa protection de découplage ; la partie continue et la partie alternative sont séparées par une limite en trait mixte, et la ligne qui va du champ au point de livraison est le seul rehaut de laiton de la planche. FIGURE 3, tranchée de câbles en coupe : lit de sable, câbles, grillage avertisseur et remblai compacté, accompagnée du réseau de terre, piquets, ceinturage et liaison équipotentielle. La clôture de site et la piste de maintenance ferment le plan. Aucune puissance, aucune tension et aucune donnée d'exploitation ne sont portées ; les repères sont des étiquettes de convention. Nomenclature à deux colonnes, continu et alternatif, et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '80 200 420 300',
};

/** Table photovoltaïque : plan de modules incliné, structure, pieux. */
const Table = ({
  x,
  p,
  principal = false,
}: {
  x: number;
  p: string;
  principal?: boolean;
}) => (
  <g>
    {/* plan de modules */}
    <path d={`M${x} ${SOL - 62} L${x + 168} ${SOL - 146} L${x + 180} ${SOL - 132} L${x + 12} ${SOL - 48} z`} fill="none" stroke={ENCRE} strokeWidth={FORT} />
    {[1, 2, 3, 4].map((i) => (
      <line
        key={i}
        x1={x + i * 33.6}
        y1={SOL - 62 - i * 16.8}
        x2={x + 12 + i * 33.6}
        y2={SOL - 48 - i * 16.8}
        stroke={ENCRE}
        strokeWidth={FIN}
      />
    ))}
    {/* structure porteuse et contreventement */}
    <line x1={x + 30} y1={SOL - 71} x2={x + 30} y2={SOL} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={x + 144} y1={SOL - 128} x2={x + 144} y2={SOL} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={x + 30} y1={SOL - 22} x2={x + 144} y2={SOL - 92} stroke={ENCRE} strokeWidth={FIN} />
    <line x1={x + 30} y1={SOL - 71} x2={x + 144} y2={SOL - 22} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="6 4" />
    <Boulon x={x + 30} y={SOL - 62} r={2.4} />
    <Boulon x={x + 144} y={SOL - 118} r={2.4} />
    {/* pieux battus */}
    {[30, 144].map((o) => (
      <rect key={o} x={x + o - 5} y={SOL} width={10} height={64} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
    ))}
    {principal && (
      <>
        <PastilleLettre x={x + 176} y={SOL - 152} l="a" />
        <PastilleLettre x={x + 12} y={SOL - 20} l="b" />
        <PastilleLettre x={x + 152} y={SOL + 74} l="c" />
      </>
    )}
  </g>
);

export const PlancheIXDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LA TABLE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Table photovoltaïque, élévation" w={320} />

    {/* diagramme de course solaire, tracé régulateur */}
    <ArcRegulateur cx={330} cy={SOL} r={268} />
    <ArcRegulateur cx={330} cy={SOL} r={214} />
    <TraceRegulateur d={`M62 ${SOL} H598`} />

    {/* sol et strates */}
    <StratesSol p={p} x={62} y={SOL} w={560} h={110} seed={19} />
    <Trait x1={62} y1={SOL} x2={622} y2={SOL} w={FORT} />
    <line x1={62} y1={SOL + 64} x2={622} y2={SOL + 64} stroke={ENCRE} strokeWidth={FIN} strokeDasharray="10 5" opacity="0.8" />
    <text className="gravure-lettrage" x={70} y={SOL + 82} fontSize="11" fill={OXYDE}>
      Niveau de fondation
    </text>

    <Table x={92} p={p} principal />
    <Table x={392} p={p} />
    <Rupture x={600} y={SOL - 90} length={100} vertical />

    {/* cotes : garde au sol et entraxe de rangées */}
    <ChaineCotes y={SOL + 132} points={[122, 422]} labels={["e - entraxe d'ombrage"]} attache={SOL + 64} />
    <ChaineCotes y={68} points={[SOL - 48, SOL]} labels={['g']} attache={110} vertical />
    <text className="gravure-lettrage" x={84} y={SOL - 24} fontSize="11" textAnchor="end">
      Garde au sol
    </text>

    {/* clôture de site et piste de maintenance */}
    <g>
      <line x1={640} y1={SOL} x2={640} y2={SOL - 74} stroke={ENCRE} strokeWidth={MOYEN} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={632} y1={SOL - 20 - i * 22} x2={648} y2={SOL - 20 - i * 22} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      <text className="gravure-lettrage" x={654} y={SOL - 40} fontSize="11">
        Clôture de site
      </text>
      <line x1={62} y1={SOL + 22} x2={330} y2={SOL + 22} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="5 4" opacity="0.7" />
      <text className="gravure-lettrage" x={70} y={SOL + 40} fontSize="10" fill={OXYDE}>
        Piste de maintenance
      </text>
    </g>

    <NomenclatureLettres
      x={62}
      y={608}
      items={['Module et cadre', 'Profilé porteur contreventé', 'Pieu battu']}
    />

    {/* ================= FIG. 2 — RACCORDEMENT ================= */}
    <RepereFigure x={700} y={96} n="2" title="Du champ au point de livraison" w={330} />

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

    <Attache x={748} y={560} dx={-190} dy={-140} label="Ligne de raccordement" anchor="end" />

    {/* ================= FIG. 3 — TRANCHÉE ET TERRE ================= */}
    <RepereFigure x={62} y={664} n="3" title="Tranchée de câbles et réseau de terre" w={330} />

    <g transform="translate(62 690)">
      <rect x={0} y={0} width={220} height={110} fill={`url(#${p}-sol-terrain)`} opacity="0.7" />
      <Cadre x={0} y={0} w={220} h={110} weight={MOYEN} />
      {/* remblai compacté */}
      <rect x={0} y={0} width={220} height={34} fill={`url(#${p}-sol-remblai)`} />
      {/* grillage avertisseur */}
      <line x1={8} y1={44} x2={212} y2={44} stroke={OXYDE} strokeWidth={MOYEN} strokeDasharray="6 4" />
      <text className="gravure-lettrage" x={230} y={48} fontSize="11">
        Grillage avertisseur
      </text>
      {/* lit de sable et câbles */}
      <rect x={8} y={62} width={204} height={34} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={48 + i * 56} cy={79} r={9} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      ))}
      <text className="gravure-lettrage" x={230} y={84} fontSize="11">
        Lit de sable et câbles
      </text>
    </g>

    <g transform="translate(430 700)">
      <line x1={0} y1={20} x2={200} y2={20} stroke={ENCRE} strokeWidth={FIN} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1={30 + i * 70} y1={20} x2={30 + i * 70} y2={72} stroke={ENCRE} strokeWidth={MOYEN} />
          <path d={`M${24 + i * 70} 72 h12 M${26 + i * 70} 78 h8 M${28 + i * 70} 84 h4`} stroke={ENCRE} strokeWidth={ULTRAFIN} fill="none" />
        </g>
      ))}
      <text className="gravure-lettrage" x={0} y={104} fontSize="11">
        Réseau de terre, ceinturage et liaison équipotentielle
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
          'Cheminement en tranchée',
          'Onduleur',
          'Transformateur élévateur',
          'Poste de livraison et comptage',
        ]}
      />
    </g>

    <Cartouche x={880} y={846} numeral="IX" title="Ferme solaire raccordée" echelle="Éch. symb." />
  </>
);
