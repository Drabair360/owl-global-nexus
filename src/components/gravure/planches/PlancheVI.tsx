import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_II } from '../Cartouche';
import {
  TitrePlanche,
  BandeauZone,
  EchelleLibelles,
  Repere,
  SensLecture,
  BlocTexte,
} from '../lisibilite';
import {
  Trait,
  Cadre,
  poche,
  ChaineCotes,
  RepereFigure,
  StratesSol,
  TraceCache,
  AxeMixte,
  LigneDeCoupe,
  HachuresVivantes,
  RoseVents,
  EchelleGraphique,
} from '../primitives';

/**
 * PLANCHE VI — IMMEUBLE DE RÉFÉRENCE ORE-1 (système L).
 *
 * Volume II du dossier : le volume patrimonial. Aucun lien technique avec le
 * volume usine — le seul renvoi vrai est le modèle du groupe, PL. VII.
 *
 *   FIG. 1  plan masse : parcelle en lanière, cour, porche traversant, pieds
 *           d'immeuble commerciaux, mitoyenneté, limites séparatives ;
 *   FIG. 2  élévation sur rue : pierre appareillée à joints décalés, chaînages
 *           harpés, génoise à trois rangs en encorbellement décroissant,
 *           couverture en tuiles canal, charpente traditionnelle ;
 *   FIG. 3  coupe de détention : le même immeuble en trois temps —
 *           acquisition, restauration, exploitation — conventions de tracé
 *           différenciées d'une vignette à l'autre.
 *
 * Rehaut de laiton unique : LE SEUIL D'ENTRÉE (FIG. 2).
 * Pochés PIERRE et BOIS réservés à cette planche : la pierre sur la maçonnerie
 * réelle, le bois sur la charpente et la menuiserie.
 * Aucun montant, taux, pourcentage de détention ni condition financière :
 * les temps sont nommés, jamais quantifiés.
 */

export const PLANCHE_VI = {
  numeral: 'VI',
  title: 'Immeuble de référence ORE-1 - plan masse, élévation, coupe de détention',
  desc:
    "Gravure au trait, planche à trois figures, décrivant un immeuble de rapport provençal de référence, sans lieu ni adresse identifiables. FIGURE 1, plan masse : une parcelle en lanière bordée par la rue, l'emprise bâtie pochée pierre, une cour intérieure laissée en réserve, un porche traversant reliant la rue à la cour, deux locaux commerciaux en pied d'immeuble, un mur mitoyen en trait fort et les limites séparatives en trait mixte ; le nord est donné par une rose sobre. FIGURE 2, élévation sur rue : soubassement, appareil de pierre de taille dessiné assise par assise à joints décalés, chaînages d'angle harpés, trois niveaux de baies alignées sur une trame régulière avec allèges et linteaux, génoise à trois rangs de tuiles en encorbellement décroissant sous la rive, couverture en tuiles canal à faible pente portée par une charpente traditionnelle ; les percements du rez-de-chaussée sont plus larges, ceux des étages plus étroits, et une chaîne de cotes symbolique donne l'entraxe de trame. Le seuil de l'entrée est rehaussé de laiton : c'est le point de passage que la planche veut faire retenir. FIGURE 3, coupe de détention : le même immeuble est coupé trois fois, une vignette par temps de la détention. À l'acquisition, l'immeuble est relevé tel que constaté, tout en trait interrompu, voûte en berceau du sous-sol comprise. À la restauration, la maçonnerie reprise est pochée pierre, la charpente traditionnelle et les menuiseries sont pochées bois, les reprises portent des repères courts. À l'exploitation, l'immeuble est tracé plein, les niveaux occupés sont marqués d'une trame légère et le porche redevient le passage d'usage. Aucune phrase n'est portée dans le dessin : chaque élément porte un repère court, sa désignation vit dans les échelles de libellés en marge. Aucun montant, taux, pourcentage de détention ni condition financière n'est écrit ; les temps de la détention sont nommés par leur nature. Cotation symbolique, échelle graphique, rose des vents et cartouche de dossier, volume deuxième, mention concept.",
  viewBox: '0 0 1240 1430',
  detailViewBox: '80 620 1080 300',
};

/** Assises de pierre de taille : joints horizontaux continus, joints verticaux décalés. */
const Appareil = ({ x, y, w, h, assise = 26 }: { x: number; y: number; w: number; h: number; assise?: number }) => {
  const rangs = Math.floor(h / assise);
  return (
    <g opacity="0.62">
      {Array.from({ length: rangs }).map((_, r) => {
        const yy = y + (r + 1) * assise;
        const dec = r % 2 ? assise * 1.6 : 0;
        const larg = assise * 3.2;
        const verts: number[] = [];
        for (let vx = x + dec; vx < x + w; vx += larg) verts.push(vx);
        return (
          <g key={r}>
            {yy < y + h && <line x1={x} y1={yy} x2={x + w} y2={yy} stroke={ENCRE} strokeWidth={ULTRAFIN} />}
            {verts.map((vx) =>
              vx > x + 1 ? (
                <line key={vx} x1={vx} y1={yy - assise} x2={vx} y2={Math.min(yy, y + h)} stroke={ENCRE} strokeWidth={ULTRAFIN} />
              ) : null,
            )}
          </g>
        );
      })}
    </g>
  );
};

/** Génoise : trois rangs de tuiles en encorbellement décroissant. */
const Genoise = ({ x, y, w }: { x: number; y: number; w: number }) => (
  <g>
    {[0, 1, 2].map((r) => {
      const yy = y - r * 9;
      const deb = 8 + r * 7;
      return (
        <g key={r}>
          <line x1={x - deb} y1={yy} x2={x + w + deb} y2={yy} stroke={ENCRE} strokeWidth={FIN} />
          {Array.from({ length: Math.floor((w + 2 * deb) / 16) }).map((_, i) => (
            <path
              key={i}
              d={`M${x - deb + i * 16} ${yy} a8 6 0 0 1 16 0`}
              fill="hsl(var(--gravure-fond))"
              stroke={ENCRE}
              strokeWidth={ULTRAFIN}
            />
          ))}
        </g>
      );
    })}
  </g>
);

/**
 * Vignette de la coupe de détention : même immeuble, trois conventions.
 *   temps 1 acquisition  : tout en trait interrompu, l'état constaté ;
 *   temps 2 restauration : pochés pierre et bois sur les ouvrages repris ;
 *   temps 3 exploitation : trait plein, niveaux occupés en trame légère.
 */
const VignetteDetention = ({
  p,
  x,
  y,
  temps,
  code,
}: {
  p: string;
  x: number;
  y: number;
  temps: 1 | 2 | 3;
  code: string;
}) => {
  const w = 300;
  const h = 200;
  const constate = temps === 1;
  const trait = constate ? ULTRAFIN : temps === 2 ? FIN : MOYEN;
  const dash = constate ? '7 5' : undefined;
  const mur = temps === 2 ? poche(p, 'pierre') : 'none';
  const bois = temps === 2 ? poche(p, 'bois') : 'none';
  return (
    <g transform={`translate(${x} ${y})`}>
      <Cadre x={0} y={0} w={w} h={h} weight={FIN} />
      <Repere x={10} y={16} anchor="start">
        {code}
      </Repere>

      {/* niveaux occupés — seulement au temps de l'exploitation */}
      {temps === 3 && <HachuresVivantes x={54} y={62} w={192} h={92} pas={14} seed={31} opacity={0.2} />}

      {/* sous-sol : voûte en berceau */}
      <path
        d={`M54 172 v-14 a96 34 0 0 1 192 0 v14 z`}
        fill="none"
        stroke={ENCRE}
        strokeWidth={trait}
        strokeDasharray={dash}
      />
      {/* murs de refend et façades, maçonnerie de pierre */}
      <path
        d="M54 172 v-116 h192 v116"
        fill={mur}
        stroke={ENCRE}
        strokeWidth={temps === 3 ? FORT : trait}
        strokeDasharray={dash}
      />
      {/* planchers */}
      {[92, 124].map((yy) => (
        <line key={yy} x1={54} y1={yy} x2={246} y2={yy} stroke={ENCRE} strokeWidth={trait} strokeDasharray={dash} />
      ))}
      {/* charpente traditionnelle, poché bois au temps de la restauration */}
      <path d="M46 56 L150 22 L254 56 z" fill={bois} stroke={ENCRE} strokeWidth={trait} strokeDasharray={dash} />
      <line x1={150} y1={22} x2={150} y2={56} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray={dash} />
      {/* porche traversant : le passage */}
      <rect
        x={132}
        y={130}
        width={36}
        height={42}
        fill="hsl(var(--gravure-fond))"
        stroke={ENCRE}
        strokeWidth={trait}
        strokeDasharray={dash}
      />
      <Trait x1={30} y1={172} x2={270} y2={172} w={temps === 3 ? FORT : FIN} />
      {/* reprises repérées, seulement au temps de la restauration */}
      {temps === 2 && (
        <>
          <Repere x={70} y={84}>r1</Repere>
          <Repere x={230} y={116}>r2</Repere>
          <Repere x={150} y={44}>r3</Repere>
        </>
      )}
    </g>
  );
};

export const PlancheVIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ============ 3 SECONDES — LE TITRE ET LE SUJET ============ */}
    <TitrePlanche
      x={60}
      y={46}
      titre="Immeuble de référence ORE-1"
      sous="Plan masse - élévation sur rue - coupe de détention en trois temps"
    />

    {/* ================= FIG. 1 — PLAN MASSE ================= */}
    <RepereFigure x={60} y={126} n="1" title="Plan masse" w={300} />

    <g transform="translate(100 176)">
      <Cadre x={0} y={0} w={400} h={264} weight={MOYEN} />
      <AxeMixte x1={0} y1={-14} x2={0} y2={278} />
      <AxeMixte x1={400} y1={-14} x2={400} y2={278} />
      <rect x={0} y={264} width={400} height={40} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <Repere x={10} y={290} anchor="start">RU</Repere>

      {/* emprise bâtie, poché pierre : la maçonnerie réelle */}
      <path d="M0 190 h400 v74 h-400 z" fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <path d="M0 0 h114 v190 h-114 z" fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <Repere x={250} y={104}>CR</Repere>

      {/* porche traversant */}
      <rect x={176} y={190} width={52} height={74} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <TraceCache d="M176 190 h52" />
      <path d="M202 300 v-26 m-6 11 l6 -11 l6 11" fill="none" stroke={OXYDE} strokeWidth={FIN} />
      <Repere x={202} y={166}>P-02</Repere>

      {/* pieds d'immeuble commerciaux */}
      <line x1={58} y1={190} x2={58} y2={264} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={314} y1={190} x2={314} y2={264} stroke={ENCRE} strokeWidth={FIN} />
      <Repere x={88} y={232}>C-03</Repere>
      <Repere x={356} y={232}>C-03</Repere>

      {/* mitoyenneté et limites séparatives */}
      <Trait x1={400} y1={0} x2={400} y2={264} w={FORT} />
      <Repere x={418} y={100} anchor="start">MI-04</Repere>
      <Repere x={-16} y={100} anchor="end">M-01</Repere>

      <ChaineCotes y={336} points={[0, 176, 228, 400]} labels={['t', 'e', 't']} attache={310} />
      <RoseVents cx={470} cy={40} r={26} />
    </g>

    {/* ================= FIG. 2 — ÉLÉVATION SUR RUE ================= */}
    <RepereFigure x={640} y={126} n="2" title="Élévation sur rue" w={300} />

    <g transform="translate(680 230)">
      {/* couverture en tuiles canal, faible pente, charpente traditionnelle */}
      <path d="M-16 -46 L225 -74 L466 -46" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      {Array.from({ length: 15 }).map((_, i) => (
        <path
          key={i}
          d={`M${-10 + i * 16} ${-46 - i * 1.8} q8 -6 16 0`}
          fill="none"
          stroke={ENCRE}
          strokeWidth={ULTRAFIN}
          opacity="0.7"
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <path
          key={`d${i}`}
          d={`M${236 + i * 15} ${-72 + i * 1.8} q8 -6 16 0`}
          fill="none"
          stroke={ENCRE}
          strokeWidth={ULTRAFIN}
          opacity="0.7"
        />
      ))}
      <Repere x={225} y={-92}>T-06</Repere>

      {/* génoise à trois rangs en encorbellement décroissant */}
      <Genoise x={0} y={-14} w={450} />
      <Repere x={478} y={-24} anchor="start">G-05</Repere>

      {/* masse maçonnée en pierre appareillée à joints décalés */}
      <rect x={0} y={0} width={450} height={290} fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <Appareil x={0} y={0} w={450} h={290} assise={26} />
      <Repere x={478} y={96} anchor="start">A-09</Repere>

      {/* chaînages d'angle harpés */}
      {[0, 420].map((cx) => (
        <g key={cx}>
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={cx} y={i * 50} width={30} height={25} fill="none" stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
          ))}
        </g>
      ))}
      <Repere x={478} y={214} anchor="start">H-08</Repere>

      {/* baies d'étage : allège, linteau, trame régulière */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <g key={`${r}-${c}`}>
            <rect x={40 + c * 76} y={34 + r * 70} width={40} height={52} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
            <line x1={36 + c * 76} y1={34 + r * 70} x2={84 + c * 76} y2={34 + r * 70} stroke={ENCRE} strokeWidth={FORT} />
            <line x1={36 + c * 76} y1={86 + r * 70} x2={84 + c * 76} y2={86 + r * 70} stroke={ENCRE} strokeWidth={FIN} />
            <line x1={60 + c * 76} y1={34 + r * 70} x2={60 + c * 76} y2={86 + r * 70} stroke={ENCRE} strokeWidth={ULTRAFIN} />
          </g>
        )),
      )}
      <Repere x={-16} y={70} anchor="end">B-07</Repere>

      {/* rez-de-chaussée : percements larges */}
      {[0, 1].map((c) => (
        <rect key={c} x={26 + c * 244} y={248} width={164} height={42} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      ))}

      {/* le seuil : unique rehaut de laiton */}
      <rect x={206} y={242} width={58} height={48} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M206 242 q29 -22 58 0" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={204} y1={290} x2={266} y2={290} stroke={LAITON} strokeWidth={FORT} />
      <text
        className="gravure-lettrage gravure-reserve"
        data-lis="repere"
        data-lis-reserve="true"
        x={235}
        y={310}
        fontSize="11"
        textAnchor="middle"
        fill={LAITON}
      >
        SE
      </text>

      <Trait x1={-20} y1={290} x2={470} y2={290} w={FORT} />
      <HachuresVivantes x={-20} y={292} w={490} h={14} pas={12} seed={19} opacity={0.26} />
      <ChaineCotes y={352} points={[40, 116, 192, 268]} labels={['t', 't', 't']} attache={330} />
      <StratesSol p={p} x={-20} y={396} w={490} h={44} seed={23} />
      <Repere x={-30} y={392} anchor="end">SB</Repere>
      <LigneDeCoupe x1={170} x2={310} y={378} label="B" />
    </g>

    {/* ============ 30 SECONDES — LES TROIS TEMPS DE LA DÉTENTION ============ */}
    <RepereFigure x={60} y={606} n="3" title="Coupe de détention, trois temps" w={340} />

    <BandeauZone x={100} y={650} w={300} h={26} label="Temps 1 - acquisition, état constaté" teinte={0.03} />
    <BandeauZone x={470} y={650} w={300} h={26} label="Temps 2 - restauration, ouvrages repris" teinte={0.03} />
    <BandeauZone x={840} y={650} w={300} h={26} label="Temps 3 - exploitation, immeuble en usage" teinte={0.03} />

    <VignetteDetention p={p} x={100} y={684} temps={1} code="D-1" />
    <VignetteDetention p={p} x={470} y={684} temps={2} code="D-2" />
    <VignetteDetention p={p} x={840} y={684} temps={3} code="D-3" />

    <SensLecture x={100} y={922} w={1040} label="Sens de lecture : acquisition, puis restauration, puis exploitation" />
    <EchelleGraphique x={100} y={946} w={170} h={7} n={6} label="Éch. symb." />

    {/* ============ 3 MINUTES — LES ÉCHELLES DE LIBELLÉS ============ */}
    <BlocTexte>
      <text className="gravure-lettrage" x={100} y={1010} fontSize="12" fill={ENCRE}>
        Parcelle et plan masse
      </text>
      <line x1={100} y1={1016} x2={420} y2={1016} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
      <text className="gravure-lettrage" x={470} y={1010} fontSize="12" fill={ENCRE}>
        Ouvrages de l'élévation
      </text>
      <line x1={470} y1={1016} x2={790} y2={1016} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
      <text className="gravure-lettrage" x={840} y={1010} fontSize="12" fill={ENCRE}>
        Coupe de détention et conventions
      </text>
      <line x1={840} y1={1016} x2={1160} y2={1016} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
    </BlocTexte>

    <EchelleLibelles
      x={100}
      yStart={1042}
      yStep={24}
      side="right"
      items={[
        { label: 'M-01 - Limite séparative, trait mixte' },
        { label: 'P-02 - Porche traversant, rue vers cour' },
        { label: 'C-03 - Local commercial en pied' },
        { label: 'MI-04 - Mur mitoyen' },
        { label: 'CR - Cour intérieure, en réserve' },
        { label: 'RU - Rue, front bâti continu' },
      ]}
    />
    <EchelleLibelles
      x={470}
      yStart={1042}
      yStep={24}
      side="right"
      items={[
        { label: 'G-05 - Génoise, trois rangs décroissants' },
        { label: 'T-06 - Couverture en tuiles canal' },
        { label: 'B-07 - Baie d\u2019étage, allège et linteau' },
        { label: 'H-08 - Chaînage d\u2019angle harpé' },
        { label: 'A-09 - Pierre appareillée, joints décalés' },
        { label: 'SB - Soubassement et assise de terrain' },
        { label: 'SE - Seuil d\u2019entrée (laiton)', or: true },
      ]}
    />
    <EchelleLibelles
      x={840}
      yStart={1042}
      yStep={24}
      side="right"
      items={[
        { label: 'D-1 - Relevé de l\u2019existant, trait interrompu' },
        { label: 'D-2 - Reprises : pochés pierre et bois' },
        { label: 'D-3 - Trait plein, niveaux occupés tramés' },
        { label: 'r1 - Reprise de maçonnerie' },
        { label: 'r2 - Reprise de plancher' },
        { label: 'r3 - Charpente traditionnelle restituée' },
        { label: 'Voûte en berceau du sous-sol, aux trois temps' },
      ]}
    />

    {/* ---------- LÉGENDE DES CONVENTIONS ---------- */}
    <BlocTexte>
      <g>
        <line x1={100} y1={1256} x2={148} y2={1256} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="7 5" />
        <text className="gravure-lettrage" x={160} y={1260} fontSize="12">
          État constaté
        </text>
        <line x1={330} y1={1256} x2={378} y2={1256} stroke={ENCRE} strokeWidth={FIN} />
        <text className="gravure-lettrage" x={390} y={1260} fontSize="12">
          Ouvrage repris, poché de matière
        </text>
      </g>
      <text className="gravure-lettrage" x={100} y={1292} fontSize="12" fill={OXYDE}>
        Les temps de la détention sont nommés par leur nature, jamais quantifiés.
      </text>
      <text className="gravure-lettrage" x={100} y={1314} fontSize="12" fill={OXYDE}>
        Cotation symbolique, aucun lieu ni adresse identifiable.
      </text>
    </BlocTexte>

    <BlocTexte>
      <Cartouche
        x={800}
        y={1340}
        w={380}
        numeral="VI"
        title="Immeuble de référence ORE-1"
        echelle="Éch. symb."
        dossier={VOL_II}
        index="PL. 6/9"
        renvois={['Modèle du groupe : PL. VII']}
      />
    </BlocTexte>
  </>
);
