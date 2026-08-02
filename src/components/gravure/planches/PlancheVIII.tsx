import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_I } from '../Cartouche';
import {
  Trait,
  Cadre,
  poche,
  Attache,
  RepereFigure,
  Pastille,
  Nomenclature,
  ChaineCotes,
  RoseVents,
  EchelleGraphique,
  TraceCache,
  AxeMixte,
  FlechePente,
  Rupture,
} from '../primitives';

/**
 * PLANCHE VIII — PLAN D'IMPLANTATION D'UNE USINE AGRO TYPE.
 * Le dessin qui prouve qu'on sait organiser une usine : zones, utilités,
 * voiries, zonage sanitaire, défense incendie, marche en avant.
 * Rehaut de laiton unique : LA MARCHE EN AVANT, réception -> expédition.
 * Aucun toponyme, aucune donnée d'exploitation, repères de convention.
 */

/** Zone bâtie : cadre, remplissage léger, repère et intitulé. */
const Zone = ({
  x,
  y,
  w,
  h,
  n,
  label,
  p,
  matiere = 'beton',
  weight = MOYEN,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  n: number;
  label: string;
  p: string;
  matiere?: 'beton' | 'acier';
  weight?: string;
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill={`url(#${p}-poche-${matiere})`} opacity="0.28" />
    <Cadre x={x} y={y} w={w} h={h} weight={weight} over={1} />
    <text className="gravure-lettrage" x={x + 10} y={y + 20} fontSize="11">
      {label}
    </text>
    <Pastille x={x + w - 12} y={y + 12} n={n} r={8} />
  </g>
);

export const PLANCHE_VIII = {
  numeral: 'VIII',
  title: "Plan d'implantation d'une usine agro type",
  desc:
    "Gravure au trait, plan d'implantation d'une usine de transformation agro-industrielle type, sans toponyme et sans donnée d'exploitation. Le plan porte, dans l'ordre du procédé, une zone de réception matière avec son pont-bascule, son quai de déchargement et sa fosse ; un stockage de matière première en silos cellulaires vus en plan, avec sa cellule de reprise ; une halle de transformation dont la trame de poteaux est cotée et dont le joint de dilatation est figuré en trait mixte ; une zone de conditionnement et de palettisation ; un magasin de produits finis prolongé par des quais d'expédition et leur aire de manoeuvre poids lourds. Les utilités occupent leur propre bande : chaufferie avec cuve, cheminée et rétention, centrale d'air comprimé avec compresseur, sécheur et ballon, groupe froid et local technique, poste électrique de livraison avec transformateur, tableau général et groupe de secours, traitement des eaux avec bâche, station de relevage et rejet, enfin un local de maintenance et son atelier, posé au contact de la halle. Le flux de procédé est tracé en trait fort rehaussé de laiton, de la réception à l'expédition, sans croisement entre circuit propre et circuit sale : c'est la marche en avant. Les voiries figurent le sens unique de circulation et les rayons de giration, une limite de zonage sanitaire sépare zone grise et zone blanche en trait mixte, la défense incendie est marquée par une réserve, des poteaux et des distances de recul. Une rose des vents oriente le plan, une échelle graphique et une chaîne de cotes donnent la mesure symbolique. Nomenclature de douze entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '80 150 460 340',
};

export const PlancheVIIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    <RepereFigure x={60} y={96} n="1" title="Plan masse, marche en avant" w={340} />

    {/* ---------- EMPRISE ET VOIRIES ---------- */}
    <rect x={70} y={130} width={900} height={560} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="14 6" opacity="0.7" />
    <path
      d="M96 156 H944 V664 H96 z"
      fill="none"
      stroke={ENCRE}
      strokeWidth={ULTRAFIN}
      opacity="0.5"
    />

    {/* ---------- ZONES DE PROCÉDÉ ---------- */}
    <Zone p={p} x={110} y={196} w={148} h={112} n={1} label="Réception matière" />
    {/* pont-bascule et quai */}
    <rect x={124} y={252} width={92} height={20} fill="none" stroke={ENCRE} strokeWidth={FIN} />
    <line x1={124} y1={262} x2={216} y2={262} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" />
    <rect x={124} y={284} width={120} height={12} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={FIN} />

    {/* silos cellulaires */}
    <g>
      <Cadre x={288} y={188} w={160} h={128} weight={FIN} />
      {[0, 1, 2].map((i) =>
        [0, 1].map((j) => (
          <circle
            key={`${i}${j}`}
            cx={320 + i * 48}
            cy={222 + j * 56}
            r={22}
            fill="none"
            stroke={ENCRE}
            strokeWidth={MOYEN}
          />
        )),
      )}
      <circle cx={368} cy={250} r={7} fill={ENCRE} opacity="0.6" />
      <text className="gravure-lettrage" x={296} y={182} fontSize="11">
        Stockage matière première
      </text>
      <Pastille x={436} y={200} n={2} r={8} />
    </g>

    {/* halle de transformation, trame de poteaux */}
    <g>
      <rect x={478} y={186} width={300} height={196} fill={`url(#${p}-poche-beton)`} opacity="0.1" />
      <Cadre x={478} y={186} w={300} h={196} weight={FORT} />
      {[0, 1, 2, 3, 4, 5].map((i) =>
        [0, 1, 2, 3].map((j) => (
          <rect
            key={`${i}${j}`}
            x={498 + i * 52 - 4}
            y={210 + j * 52 - 4}
            width={8}
            height={8}
            fill={ENCRE}
          />
        )),
      )}
      {/* joint de dilatation */}
      <line x1={628} y1={186} x2={628} y2={382} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="14 4 3 4" opacity="0.8" />
      <text className="gravure-lettrage" x={486} y={180} fontSize="11">
        Halle de transformation
      </text>
      <Pastille x={766} y={198} n={3} r={8} />
      <ChaineCotes y={168} points={[498, 550, 602, 654, 706, 758]} labels={['t', 't', 't', 't', 't']} attache={186} />
    </g>

    <Zone p={p} x={478} y={404} w={168} h={104} n={4} label="Conditionnement" />
    <Zone p={p} x={666} y={404} w={112} h={104} n={5} label="Palettisation" />
    <Zone p={p} x={806} y={404} w={138} h={172} n={6} label="Magasin produits finis" />

    {/* quais d'expédition et giration */}
    <g>
      <rect x={806} y={596} width={138} height={16} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={806} y={634} fontSize="11">
        Quais d'expédition
      </text>
      <path d="M792 660 a72 72 0 0 1 72 -72" fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="5 4" />
      <text className="gravure-lettrage" x={648} y={686} fontSize="11" fill={OXYDE}>
        Rayon de giration
      </text>
    </g>

    {/* ---------- BANDE DES UTILITÉS ---------- */}
    <g>
      <Zone p={p} matiere="acier" x={806} y={186} w={138} h={80} n={7} label="Chaufferie" weight={FIN} />
      <line x1={930} y1={186} x2={930} y2={150} stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={840} cy={240} r={14} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <rect x={818} y={218} width={62} height={40} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" />

      <Zone p={p} matiere="acier" x={806} y={288} w={138} h={88} n={8} label="Air comprimé, froid" weight={FIN} />
      <circle cx={846} cy={344} r={12} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <rect x={874} y={330} width={40} height={26} fill="none" stroke={ENCRE} strokeWidth={FIN} />

      <Zone p={p} matiere="acier" x={110} y={340} w={148} h={92} n={9} label="Poste de livraison" weight={FIN} />
      <circle cx={152} cy={398} r={13} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={168} cy={398} r={13} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={200} y={384} width={40} height={28} fill="none" stroke={ENCRE} strokeWidth={FIN} />

      <Zone p={p} matiere="acier" x={110} y={456} w={148} h={92} n={10} label="Traitement des eaux" weight={FIN} />
      <circle cx={150} cy={512} r={18} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <path d="M182 520 h56" stroke={ENCRE} strokeWidth={FIN} fill="none" />
      <FlechePente x={238} y={520} dx={26} dy={0} label="" />

      {/* local maintenance et atelier, au contact de la halle */}
      <Zone p={p} matiere="acier" x={288} y={404} w={160} h={104} n={11} label="Maintenance, atelier" weight={MOYEN} />
      <line x1={288} y1={452} x2={448} y2={452} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      <rect x={302} y={464} width={44} height={26} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={396} cy={478} r={13} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <line x1={396} y1={465} x2={396} y2={491} stroke={ENCRE} strokeWidth={ULTRAFIN} />
    </g>

    {/* ---------- MARCHE EN AVANT : rehaut de laiton unique ---------- */}
    <path
      d="M184 308 V352 H262 M184 308 V330"
      fill="none"
      stroke="none"
    />
    <path
      d="M184 240 H288 M448 250 H478 M628 382 V404 M646 456 H666 M778 456 H806 M876 508 V596"
      fill="none"
      stroke={LAITON}
      strokeWidth={FORT}
    />
    <path d="M628 382 V404" fill="none" stroke={LAITON} strokeWidth={FORT} />
    {[
      [236, 240, 1, 0],
      [463, 250, 1, 0],
      [628, 393, 0, 1],
      [656, 456, 1, 0],
      [792, 456, 1, 0],
      [876, 552, 0, 1],
    ].map(([x, y, dx, dy], i) => (
      <path
        key={i}
        d={`M${x} ${y} l${-9 * (dx as number) - 5 * (dy as number)} ${-9 * (dy as number) - 5 * (dx as number)} M${x} ${y} l${-9 * (dx as number) + 5 * (dy as number)} ${-9 * (dy as number) + 5 * (dx as number)}`}
        stroke={LAITON}
        strokeWidth={MOYEN}
        fill="none"
      />
    ))}
    <Attache x={628} y={404} dx={-30} dy={196} label="Marche en avant, sans croisement" anchor="end" />

    {/* ---------- ZONAGE SANITAIRE ---------- */}
    <AxeMixte x1={466} y1={160} x2={466} y2={620} />
    <text className="gravure-lettrage" x={472} y={640} fontSize="11" fill={OXYDE}>
      Limite zone grise / zone blanche
    </text>

    {/* ---------- VOIRIES ET SENS UNIQUE ---------- */}
    <TraceCache d="M96 620 H944" />
    <FlechePente x={300} y={620} dx={80} dy={0} label="Sens unique" />

    {/* ---------- DÉFENSE INCENDIE ---------- */}
    <g>
      <circle cx={720} cy={584} r={20} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={720} cy={584} r={6} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={720} y={620} fontSize="11" textAnchor="middle">
        Réserve incendie
      </text>
      {[
        [560, 560],
        [640, 660],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={6} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
          <line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke={ENCRE} strokeWidth={ULTRAFIN} />
        </g>
      ))}
      <line x1={560} y1={560} x2={560} y2={508} stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="4 4" />
      <text className="gravure-lettrage" x={566} y={540} fontSize="10" fill={OXYDE}>
        Recul
      </text>
    </g>

    {/* ---------- ORIENTATION, ÉCHELLE, RUPTURE ---------- */}
    <RoseVents cx={1052} cy={210} r={44} />
    <EchelleGraphique x={1000} y={306} w={160} h={7} n={6} label="Éch. symb." />
    <Rupture x={992} y={430} length={120} vertical />

    {/* ---------- NOMENCLATURE ---------- */}
    <Nomenclature
      x={1000}
      y={470}
      perCol={12}
      lineHeight={20}
      items={[
        'Réception, pont-bascule',
        'Silos de matière première',
        'Halle de transformation',
        'Conditionnement',
        'Palettisation',
        'Magasin produits finis',
        'Chaufferie',
        'Air comprimé et froid',
        'Poste de livraison',
        'Traitement des eaux',
        'Maintenance et atelier',
        'Quais et aire de manoeuvre',
      ]}
    />

    <Cartouche
      x={880} y={760} numeral="VIII" title="Implantation d'usine agro type" echelle="Éch. symb."
      dossier={VOL_I}
      index="PL. 8/9"
      renvois={['Coupe de l\'unité : PL. I', 'Centrale en toiture : PL. IX']}
    />
  </>
);
