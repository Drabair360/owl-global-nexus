import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_I } from '../Cartouche';
import {
  TitrePlanche,
  BandeauZone,
  EchelleLibelles,
  Repere,
  SensLecture,
  BlocTexte,
} from '../lisibilite';
import {
  Cadre,
  poche,
  RepereFigure,
  RoseVents,
  EchelleGraphique,
  AxeMixte,
  HachuresVivantes,
} from '../primitives';

/**
 * PLANCHE VIII — PLAN D'IMPLANTATION D'UNE USINE TYPE, CLÉ EN MAIN (système L).
 *
 * Cohérence de dossier :
 *   · la trame du plan est celle de la coupe PL. I : files A, B, C et
 *     trames 1 à 6, mêmes lettres, même ordre, entraxe constant ;
 *   · la ligne de mouture de la PL. III est dessinée EN PLACE dans la halle,
 *     sur la file B, dans le sens de la marche en avant ;
 *   · la ligne de coupe A-A est fléchée : c'est le regard de la PL. I ;
 *   · l'emprise de la centrale en toiture (PL. IX) couvre le versant nord
 *     de la halle, entre file A et file B.
 *
 * Lecture-clé à 30 s : LA MARCHE EN AVANT, unique rehaut de laiton,
 * réception -> expédition, sans jamais croiser le circuit sale.
 * Aucun toponyme, aucune donnée d'exploitation, aucun chiffre : repères
 * de convention et cotation symbolique seulement.
 */

/* ---- la trame, héritée de la PL. I ---- */
const FA = 290; // file A
const FB = 425; // file B — axe du procédé
const FC = 560; // file C
const TRAMES = [390, 470, 550, 630, 710, 790]; // trames 1 à 6
const HX = 390;
const HW = 400;

/** Chevron de sens sur le tracé de laiton. */
const Chevron = ({ x, y, dir }: { x: number; y: number; dir: 'e' | 's' }) =>
  dir === 'e' ? (
    <path d={`M${x} ${y} l-10 -6 M${x} ${y} l-10 6`} fill="none" stroke={LAITON} strokeWidth={MOYEN} />
  ) : (
    <path d={`M${x} ${y} l-6 -10 M${x} ${y} l6 -10`} fill="none" stroke={LAITON} strokeWidth={MOYEN} />
  );

/** Boîte bâtie : poché léger, cadre, repère court centré. */
const Boite = ({
  p,
  x,
  y,
  w,
  h,
  code,
  matiere = 'beton',
  weight = MOYEN,
}: {
  p: string;
  x: number;
  y: number;
  w: number;
  h: number;
  code: string;
  matiere?: 'beton' | 'acier';
  weight?: string;
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill={poche(p, matiere)} opacity="0.24" />
    <Cadre x={x} y={y} w={w} h={h} weight={weight} over={1} />
    <Repere x={x + w / 2} y={y + h / 2 + 4}>
      {code}
    </Repere>
  </g>
);

export const PLANCHE_VIII = {
  numeral: 'VIII',
  title: "Plan d'implantation d'une usine type",
  desc:
    "Gravure au trait, plan d'implantation d'une usine agro-industrielle type, clé en main, sans toponyme et sans donnée d'exploitation. Le plan reprend la trame de la coupe première : les files A, B et C du portique courent d'ouest en est, les trames 1 à 6 les traversent, et la ligne de coupe A-A est fléchée vers le regard de cette coupe. La halle de transformation occupe le centre du plan ; la ligne de mouture de la planche troisième y est dessinée en place, poste après poste, sur la file B ; le versant nord de la halle, entre file A et file B, porte l'emprise de la centrale en toiture de la planche neuvième, cernée en trait interrompu. À l'ouest, la zone de réception aligne le pont-bascule, le quai de déchargement et sa fosse, puis les silos cellulaires de matière première vus en plan. À l'est, le conditionnement, la palettisation, le magasin de produits finis et les quais d'expédition avec leur aire de manoeuvre ferment le cycle. Une bande d'utilités occupe le nord de l'emprise : poste de livraison, chaufferie et rétention, air comprimé et froid, traitement des eaux et relevage, maintenance et atelier. Le flux de procédé est tracé au trait fort rehaussé de laiton, de la réception aux quais d'expédition, en un seul geste continu fléché : c'est la marche en avant, seule lecture de trente secondes de la planche. Le circuit sale, déchets et sous-produits, est tracé en trait interrompu au sud de l'emprise et ne croise le laiton nulle part. Les voiries sont à sens unique, une limite de zonage sanitaire sépare zone grise et zone blanche en trait mixte, la défense incendie est marquée d'une réserve, de poteaux et d'un recul. Aucune phrase n'est portée dans le dessin : chaque élément porte un repère court, sa désignation vit dans les échelles de libellés en marge. Rose des vents, échelle graphique symbolique et cartouche de dossier, volume premier, mention concept.",
  viewBox: '0 0 1240 1290',
  detailViewBox: '360 250 480 350',
};

export const PlancheVIIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />
    <defs>
      <clipPath id={`${p}-pv`}>
        <rect x="400" y="300" width="380" height="90" />
      </clipPath>
    </defs>

    {/* ============ 3 SECONDES — LE TITRE ET LE SUJET ============ */}
    <TitrePlanche
      x={60}
      y={46}
      titre="Plan d'implantation d'une usine type"
      sous="Usine agro-industrielle type, clé en main - trame de la PL. I, ligne de la PL. III en place - marche en avant, réception vers expédition"
    />

    <RepereFigure x={60} y={126} n="1" title="Plan masse, marche en avant" w={460} />

    {/* ---------- EMPRISE ---------- */}
    <rect
      x={100}
      y={166}
      width={1080}
      height={580}
      fill="none"
      stroke={ENCRE}
      strokeWidth={FIN}
      strokeDasharray="14 6"
      opacity="0.7"
    />

    {/* ============ 30 SECONDES — LES ZONES NOMMÉES ============ */}
    <BandeauZone x={110} y={180} w={1060} h={58} label="Utilités" teinte={0.035} />
    <BandeauZone x={110} y={266} w={250} h={376} label="Réception et stockage" />
    <BandeauZone x={370} y={266} w={450} h={376} label="Transformation" />
    <BandeauZone x={830} y={266} w={340} h={376} label="Conditionnement et expédition" />
    <BandeauZone x={110} y={660} w={1060} h={76} label="Circuit sale et déchets" teinte={0.035} />

    {/* ---------- VOIRIES À SENS UNIQUE ---------- */}
    {[243, 648].map((y) => (
      <g key={y}>
        <line x1={112} y1={y} x2={1168} y2={y} stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="7 5" />
        {[300, 640, 980].map((x) => (
          <path key={x} d={`M${x} ${y} l-9 -5 M${x} ${y} l-9 5`} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} />
        ))}
      </g>
    ))}
    <Repere x={140} y={236} anchor="start">V-12</Repere>

    {/* ---------- BANDE DES UTILITÉS ---------- */}
    {[
      [120, 'U-01'],
      [320, 'U-02'],
      [520, 'U-03'],
      [720, 'U-04'],
      [920, 'U-05'],
    ].map(([x, code]) => (
      <Boite key={code as string} p={p} x={x as number} y={188} w={180} h={44} code={code as string} matiere="acier" weight={FIN} />
    ))}

    {/* ---------- RÉCEPTION ET STOCKAGE ---------- */}
    <g>
      {/* pont-bascule */}
      <rect x={130} y={290} width={120} height={26} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <line x1={130} y1={303} x2={250} y2={303} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" />
      <Repere x={272} y={296} anchor="start">P-01</Repere>
      {/* quai de déchargement et fosse */}
      <rect x={130} y={336} width={150} height={16} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={FIN} />
      <rect x={166} y={352} width={44} height={12} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="5 3" />
      <Repere x={300} y={344} anchor="start">Q-02</Repere>
      {/* silos cellulaires */}
      <Cadre x={128} y={380} w={220} h={150} weight={FIN} />
      {[170, 235, 300].map((cx) =>
        [420, 485].map((cy) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={24} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
        )),
      )}
      <Repere x={238} y={556}>S-03</Repere>
    </g>

    {/* ---------- HALLE DE TRANSFORMATION : LA TRAME DE LA PL. I ---------- */}
    <g>
      <rect x={HX} y={FA} width={HW} height={FC - FA} fill={poche(p, 'beton')} opacity="0.1" />
      <Cadre x={HX} y={FA} w={HW} h={FC - FA} weight={FORT} over={1} />
      <Repere x={HX + 10} y={282} anchor="start">H-04</Repere>

      {/* files A, B, C — mêmes lettres qu'en PL. I */}
      {[
        [FA, 'A'],
        [FB, 'B'],
        [FC, 'C'],
      ].map(([y, l]) => (
        <g key={l as string}>
          <AxeMixte x1={HX - 26} y1={y as number} x2={HX + HW + 20} y2={y as number} opacity={0.55} />
          <Repere x={HX - 32} y={(y as number) + 4} anchor="end">
            {l as string}
          </Repere>
        </g>
      ))}
      {/* trames 1 à 6 */}
      {TRAMES.map((x, i) => (
        <g key={x}>
          <line
            x1={x}
            y1={FA - 14}
            x2={x}
            y2={FC + 14}
            stroke={ENCRE}
            strokeWidth={ULTRAFIN}
            strokeDasharray="9 3 2 3"
            opacity="0.65"
          />
          <Repere x={x} y={578}>{String(i + 1)}</Repere>
        </g>
      ))}
      {/* joint de dilatation */}
      <line x1={670} y1={FA} x2={670} y2={FC} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="14 4 3 4" />
      <Repere x={678} y={548} anchor="start">JD</Repere>

      {/* emprise de la centrale en toiture — versant nord, PL. IX */}
      <g clipPath={`url(#${p}-pv)`}>
        <HachuresVivantes x={400} y={300} w={380} h={90} pas={13} seed={23} opacity={0.22} />
      </g>
      <rect x={400} y={300} width={380} height={90} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="8 4" />
      <Repere x={770} y={318} anchor="end">PV</Repere>

      {/* la ligne de mouture de la PL. III, dessinée en place sur la file B */}
      {[400, 466, 532, 598, 664, 730].map((x) => (
        <rect key={x} x={x} y={412} width={46} height={26} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
      ))}
      <Repere x={595} y={462}>L-05</Repere>
    </g>

    {/* ---------- LIGNE DE COUPE A-A : LE REGARD DE LA PL. I ---------- */}
    <g>
      <line x1={588} y1={262} x2={588} y2={288} stroke={OXYDE} strokeWidth={FORT} />
      <line x1={588} y1={562} x2={588} y2={590} stroke={OXYDE} strokeWidth={FORT} />
      <line
        x1={588}
        y1={288}
        x2={588}
        y2={562}
        stroke={OXYDE}
        strokeWidth={FIN}
        strokeDasharray="14 4 3 4"
        opacity="0.7"
      />
      <path d="M588 288 l-16 0 M588 562 l-16 0" stroke={OXYDE} strokeWidth={MOYEN} fill="none" />
      <path d="M572 288 l6 -5 v10 z M572 562 l6 -5 v10 z" fill={OXYDE} />
      <Repere x={588} y={254}>A</Repere>
      <Repere x={588} y={608}>A</Repere>
    </g>

    {/* ---------- CONDITIONNEMENT, MAGASIN, EXPÉDITION ---------- */}
    <Boite p={p} x={840} y={386} w={100} h={78} code="C-06" />
    <Boite p={p} x={950} y={386} w={90} h={78} code="C-07" />
    <Boite p={p} x={1050} y={330} w={110} h={190} code="M-08" />
    <rect x={1050} y={556} width={110} height={18} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={FIN} />
    <path d="M1046 620 a64 64 0 0 1 64 -64" fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="5 4" />
    <Repere x={1032} y={566} anchor="end">Q-09</Repere>

    {/* ---------- ZONAGE SANITAIRE ---------- */}
    <AxeMixte x1={828} y1={272} x2={828} y2={640} />
    <Repere x={818} y={634} anchor="end">ZS</Repere>

    {/* ============ LA MARCHE EN AVANT — REHAUT DE LAITON UNIQUE ============ */}
    <path
      d={`M136 303 H362 V${FB} H1105 V556`}
      fill="none"
      stroke={LAITON}
      strokeWidth={FORT}
      strokeLinejoin="round"
    />
    <Chevron x={258} y={303} dir="e" />
    <Chevron x={362} y={396} dir="s" />
    <Chevron x={500} y={FB} dir="e" />
    <Chevron x={790} y={FB} dir="e" />
    <Chevron x={1000} y={FB} dir="e" />
    <Chevron x={1105} y={540} dir="s" />
    <Repere x={468} y={404}>MA</Repere>

    {/* ---------- CIRCUIT SALE : IL NE CROISE JAMAIS LE LAITON ---------- */}
    <path
      d="M630 566 V700 H305"
      fill="none"
      stroke={ENCRE}
      strokeWidth={MOYEN}
      strokeDasharray="10 6"
      opacity="0.85"
    />
    <path d="M305 700 l12 -6 v12 z" fill={ENCRE} opacity="0.85" />
    <Repere x={520} y={688}>R-11</Repere>
    <Boite p={p} x={130} y={672} w={170} h={56} code="D-10" matiere="acier" weight={FIN} />

    {/* ---------- DÉFENSE INCENDIE ---------- */}
    <g>
      <circle cx={800} cy={692} r={22} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={800} cy={692} r={7} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {[400, 1000].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={716} r={6} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
          <line x1={cx - 11} y1={716} x2={cx + 11} y2={716} stroke={ENCRE} strokeWidth={ULTRAFIN} />
        </g>
      ))}
      <line x1={1000} y1={710} x2={1000} y2={664} stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="4 4" />
      <Repere x={866} y={696} anchor="start">DI</Repere>
    </g>

    {/* ---------- SENS DE LECTURE, ORIENTATION, ÉCHELLE ---------- */}
    <SensLecture x={100} y={778} w={560} label="Sens de lecture : réception (ouest) vers expédition (est)" />
    <EchelleGraphique x={700} y={790} w={170} h={7} n={6} label="Éch. symb." />
    <RoseVents cx={1120} cy={782} r={32} />

    {/* ============ 3 MINUTES — LES ÉCHELLES DE LIBELLÉS ============ */}
    <BlocTexte>
      <text className="gravure-lettrage" x={100} y={848} fontSize="12" fill={ENCRE}>
        Procédé - marche en avant
      </text>
      <line x1={100} y1={854} x2={420} y2={854} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
      <text className="gravure-lettrage" x={470} y={848} fontSize="12" fill={ENCRE}>
        Utilités et servitudes
      </text>
      <line x1={470} y1={854} x2={790} y2={854} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
      <text className="gravure-lettrage" x={840} y={848} fontSize="12" fill={ENCRE}>
        Repérage et renvois de dossier
      </text>
      <line x1={840} y1={854} x2={1160} y2={854} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
    </BlocTexte>

    <EchelleLibelles
      x={100}
      yStart={880}
      yStep={24}
      side="right"
      items={[
        { label: 'P-01 - Pont-bascule et poste de garde' },
        { label: 'Q-02 - Quai de déchargement et fosse' },
        { label: 'S-03 - Silos de matière première' },
        { label: 'H-04 - Halle de transformation' },
        { label: 'L-05 - Ligne de mouture en place (PL. III)' },
        { label: 'C-06 - Conditionnement' },
        { label: 'C-07 - Palettisation' },
        { label: 'M-08 - Magasin de produits finis' },
        { label: "Q-09 - Quais et aire de manoeuvre" },
      ]}
    />
    <EchelleLibelles
      x={470}
      yStart={880}
      yStep={24}
      side="right"
      items={[
        { label: 'U-01 - Poste de livraison' },
        { label: 'U-02 - Chaufferie et rétention' },
        { label: 'U-03 - Air comprimé et froid' },
        { label: 'U-04 - Traitement des eaux, relevage' },
        { label: 'U-05 - Maintenance et atelier' },
        { label: 'D-10 - Déchets et sous-produits' },
        { label: 'R-11 - Circuit sale, sans croisement' },
        { label: 'V-12 - Voirie à sens unique' },
        { label: 'DI - Réserve, poteaux et recul' },
      ]}
    />
    <EchelleLibelles
      x={840}
      yStart={880}
      yStep={24}
      side="right"
      items={[
        { label: 'MA - Marche en avant (laiton)', or: true },
        { label: 'A, B, C - Files du portique (PL. I)' },
        { label: '1 à 6 - Trames, entraxe constant' },
        { label: 'A-A - Ligne de coupe, regard PL. I' },
        { label: 'PV - Emprise de la centrale (PL. IX)' },
        { label: 'JD - Joint de dilatation de la halle' },
        { label: 'ZS - Limite zone grise / zone blanche' },
        { label: 'Emprise - limite en trait interrompu' },
      ]}
    />

    {/* ---------- LÉGENDE DES FAMILLES ---------- */}
    <BlocTexte>
      <g>
        <line x1={100} y1={1130} x2={148} y2={1130} stroke={LAITON} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={160} y={1134} fontSize="12">
          Marche en avant, circuit propre
        </text>
        <line x1={400} y1={1130} x2={448} y2={1130} stroke={ENCRE} strokeWidth={MOYEN} strokeDasharray="10 6" />
        <text className="gravure-lettrage" x={460} y={1134} fontSize="12">
          Circuit sale, déchets
        </text>
      </g>
      <text className="gravure-lettrage" x={100} y={1166} fontSize="12" fill={OXYDE}>
        Les deux circuits ne se croisent en aucun point du plan.
      </text>
      <text className="gravure-lettrage" x={100} y={1188} fontSize="12" fill={OXYDE}>
        Cotation symbolique, aucun toponyme ni donnée d'exploitation.
      </text>
    </BlocTexte>

    <BlocTexte>
      <Cartouche
        x={800}
        y={1176}
        w={380}
        numeral="VIII"
        title="Implantation d'une usine type"
        echelle="Éch. symb."
        dossier={VOL_I}
        index="PL. 8/9"
        renvois={['Coupe : PL. I', 'Ligne : PL. III', 'Centrale : PL. IX']}
      />
    </BlocTexte>
  </>
);
