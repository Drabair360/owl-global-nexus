import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_I } from '../Cartouche';
import {
  poche,
  RepereFigure,
  PanneZ,
  Echantignole,
  Boulon,
  Rupture,
  AxeMixte,
  MIXTE_DASH,
} from '../primitives';
import { TitrePlanche, BandeauZone, EchelleLibelles, Repere, BlocTexte } from '../lisibilite';

/**
 * PLANCHE IX — CENTRALE EN TOITURE (DOSSIER OWL, VOL. I, PL. 9/9).
 * PHASE M2 — reconstruction sur le système L + cohérence de toiture.
 *
 * COHÉRENCE AVEC LA PL. I (qui fait foi) : le toit d'OWL-1 est un BAC ACIER
 * NERVURÉ EN PENTE, porté par des pannes en Z sur échantignoles, elles-mêmes
 * portées par l'arbalétrier du portique. La pente du versant est celle de la
 * PL. I : 22,5°, le même dessin, le même ordre de couches. Il n'y a ni
 * membrane ni isolant de toiture-terrasse, et donc aucun plot ballasté : les
 * modules sont posés PARALLÈLES AU VERSANT, sans surinclinaison, fixés par
 * pinces sur mini-rails vissés dans les nervures ; le drainage naturel du bac
 * vers le chéneau de rive est conservé.
 *
 * LES TROIS LECTURES
 *   3 s    Un versant en pente, couvert de modules qui suivent la pente, et
 *          une ligne de laiton qui descend jusqu'au point de livraison.
 *   30 s   Les zones nommées du versant - rive basse et chéneau, champ de
 *          modules, faîtage et cheminement - et l'ordre des couches :
 *          arbalétrier, panne, bac, mini-rail, pince, module.
 *   3 min  La maille type en plan (fixation sur nervure), la traversée
 *          d'étanchéité sur nervure, et le raccordement continu/alternatif
 *          jusqu'au comptage.
 *
 * Rehaut de laiton unique : LA LIGNE DE RACCORDEMENT, de la toiture au point
 * de livraison.
 */

/* ---- géométrie du versant : celle de la PL. I ---- */
const PENTE = 22.5; // degrés - PL. I : atan((262-150)/(470-200))
const RAD = (PENTE * Math.PI) / 180;
const COS = Math.cos(RAD);
const SIN = Math.sin(RAD);
const OX = 170; // égout, bas du versant
const OY = 520;
/** Point du repère local du versant (u le long de la pente, v perpendiculaire). */
const PT = (u: number, v: number): [number, number] => [
  OX + COS * u + SIN * v,
  OY - SIN * u + COS * v,
];

/** Repère court porté au dessin, relié à sa cible par une attache à un coude. */
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

export const PLANCHE_IX = {
  numeral: 'IX',
  title: 'Centrale en toiture',
  desc:
    "Gravure au trait, planche à trois figures et un détail, représentant une centrale photovoltaïque posée sur le versant en bac d'acier nervuré de l'unité industrielle de référence. FIGURE 1, coupe partielle du versant, dessinée à la pente de la planche première, dont elle reprend exactement le support : l'arbalétrier du portique porte des pannes en Z posées sur échantignoles, qui portent le bac d'acier nervuré ; il n'y a ni isolant ni membrane de toiture-terrasse, et donc aucun plot ballasté. Les modules sont posés parallèlement au versant, sans surinclinaison : ils reposent sur des mini-rails fixés dans les nervures du bac et sont tenus par des pinces, de sorte que l'écoulement naturel de l'eau dans les ondes du bac, du faîtage vers le chéneau de rive, est intégralement conservé. Le versant se lit en trois zones nommées, rive basse et chéneau, champ de modules, faîtage et cheminement ; un chemin de câbles longe le haut du champ, un garde-corps tient la rive basse, une flèche donne le sens d'écoulement et une ligne de rupture coupe la coupe au faîtage. Aucune phrase n'est portée dans le dessin : chaque élément porte un repère court, relié par une attache à un coude, et sa désignation complète vit dans l'échelle de libellés en marge. FIGURE 2, schéma de raccordement lu de haut en bas : string de modules, boîte de jonction en courant continu avec parafoudre, onduleur en armoire ventilée, limite entre partie continue et partie alternative en trait mixte, transformateur élévateur, poste de livraison avec comptage et protection de découplage ; la ligne qui va de la toiture au point de livraison est le seul rehaut de laiton de la planche. FIGURE 3, la maille type en plan : les nervures du bac courent dans le sens de la pente, deux mini-rails les traversent, dix modules en deux rangées y sont pincés, l'ensemble réuni par une seule mise en série et cerclé en trait interrompu, à répéter selon le versant. DÉTAIL 1, la traversée d'étanchéité reprise pour cette fixation : elle se fait en sommet de nervure, embase vissée sur l'onde haute, joint comprimé, manchon et collerette, l'étanchéité du bac n'étant perforée nulle part ailleurs, avec liaison équipotentielle des rails. Aucune puissance, aucune tension, aucune donnée d'exploitation ne sont portées ; les repères sont des étiquettes de convention. Cartouche de dossier, volume premier, mention concept.",
  viewBox: '0 0 1240 1290',
  detailViewBox: '150 170 640 390',
};

export const PlancheIXDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ============ 3 SECONDES — LE TITRE ET LE SUJET ============ */}
    <TitrePlanche
      x={60}
      y={46}
      titre="Centrale en toiture"
      sous="Versant en bac acier de l'usine OWL-1 (PL. I) - modules parallèles au versant, fixés sur nervures"
    />

    {/* ================= FIG. 1 — LE VERSANT ÉQUIPÉ ================= */}
    <RepereFigure x={60} y={126} n="1" title="Versant équipé, coupe partielle à la pente de la PL. I" w={480} />

    <BandeauZone x={150} y={170} w={140} h={390} label="Rive basse et chéneau" />
    <BandeauZone x={290} y={170} w={340} h={390} label="Champ de modules" />
    <BandeauZone x={630} y={170} w={160} h={390} label="Faîtage et cheminement" />

    {/* ---- le versant, dans son repère incliné : l'ordre des couches de la PL. I ---- */}
    <g transform={`translate(${OX} ${OY}) rotate(${-PENTE})`}>
      {/* arbalétrier du portique */}
      <line x1={-16} y1={7} x2={660} y2={7} stroke={ENCRE} strokeWidth={FORT} />
      <line x1={-16} y1={21} x2={660} y2={21} stroke={ENCRE} strokeWidth={MOYEN} />

      {/* pannes en Z sur échantignoles - même dessin qu'en PL. I */}
      {[52, 182, 312, 442, 572].map((u) => (
        <g key={u}>
          <PanneZ x={u} y={-4} />
          <Echantignole x={u} y={5} />
        </g>
      ))}

      {/* bac d'acier nervuré, posé sur les pannes : la peau de la PL. I */}
      <line x1={-14} y1={-12} x2={664} y2={-12} stroke={ENCRE} strokeWidth={MOYEN} />
      <path
        d={Array.from({ length: 26 }, (_, i) => {
          const u = -8 + i * 26;
          return `M${u} -12 v-10 h11 v10`;
        }).join(' ')}
        fill="none"
        stroke={ENCRE}
        strokeWidth={FIN}
      />

      {/* mini-rail sur nervures + pinces de fixation : aucune surinclinaison */}
      <line x1={70} y1={-27} x2={652} y2={-27} stroke={ENCRE} strokeWidth={MOYEN} />
      {[96, 174, 252, 330, 408, 486, 564, 642].map((u) => (
        <g key={u}>
          <path d={`M${u - 5} -22 v-6 h10 v6`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
          <Boulon x={u} y={-27} r={2} />
        </g>
      ))}

      {/* modules, parallèles au versant */}
      {[
        [92, 256],
        [264, 428],
        [436, 600],
      ].map(([u1, u2]) => (
        <g key={u1}>
          <rect
            x={u1}
            y={-38}
            width={u2 - u1}
            height={10}
            fill="hsl(var(--gravure-fond))"
            stroke={ENCRE}
            strokeWidth={FORT}
          />
          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              x1={u1 + (u2 - u1) * f}
              y1={-38}
              x2={u1 + (u2 - u1) * f}
              y2={-28}
              stroke={ENCRE}
              strokeWidth={ULTRAFIN}
            />
          ))}
        </g>
      ))}

      {/* chemin de câbles en haut de champ */}
      <rect x={612} y={-46} width={40} height={14} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <line x1={612} y1={-39} x2={652} y2={-39} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.7" />

      {/* sens d'écoulement : dans l'onde du bac, vers l'égout */}
      <line x1={230} y1={-54} x2={130} y2={-54} stroke={OXYDE} strokeWidth={FIN} />
      <path d="M124 -54 l12 -5 v10 z" fill={OXYDE} />
    </g>

    {/* faîtage : la coupe s'arrête ici */}
    <Rupture x={PT(664, -8)[0]} y={PT(664, -8)[1]} length={70} />

    {/* rive basse : chéneau et garde-corps, d'aplomb */}
    <path d="M140 522 h34 v24 h-34 z" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={140} y1={528} x2={174} y2={528} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.7" />
    <line x1={160} y1={510} x2={160} y2={438} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={150} y1={444} x2={196} y2={444} stroke={ENCRE} strokeWidth={FIN} />
    <line x1={150} y1={472} x2={186} y2={472} stroke={ENCRE} strokeWidth={ULTRAFIN} />

    {/* ---- repères courts, en attache : aucune phrase dans le dessin ---- */}
    <Marque rep="M-01" cible={PT(150, -38)} x={200} y={212} />
    <Marque rep="EP" cible={PT(180, -54)} x={200} y={238} />
    <Marque rep="G-02" cible={[160, 452]} x={200} y={264} />
    <Marque rep="E-03" cible={[157, 534]} x={200} y={290} />

    <Marque rep="R-04" cible={PT(330, -27)} x={682} y={344} />
    <Marque rep="R-05" cible={PT(408, -25)} x={682} y={370} />
    <Marque rep="T-01" cible={PT(452, -17)} x={682} y={396} />
    <Marque rep="T-02" cible={PT(442, -4)} x={682} y={422} />
    <Marque rep="T-03" cible={PT(500, 14)} x={682} y={448} />
    <Marque rep="C-06" cible={PT(632, -39)} x={682} y={474} />
    <Marque rep="F-07" cible={PT(660, -6)} x={682} y={500} />

    {/* ================= FIG. 2 — LE RACCORDEMENT ================= */}
    <RepereFigure x={840} y={126} n="2" title="De la toiture au point de livraison" w={330} />

    {/* string de modules */}
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x={880 + i * 34}
        y={192}
        width={26}
        height={38}
        fill="none"
        stroke={ENCRE}
        strokeWidth={MOYEN}
      />
    ))}
    <Marque rep="S-01" cible={[880, 211]} x={862} y={215} anchor="end" />

    {/* boîte de jonction en courant continu, parafoudre */}
    <rect x={900} y={282} width={110} height={52} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <path d="M930 296 v14 l16 -7 z" fill="none" stroke={ENCRE} strokeWidth={FIN} />
    <line x1={956} y1={296} x2={956} y2={320} stroke={ENCRE} strokeWidth={FIN} />
    <path d="M968 300 h14 v16 h-14 z" fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />
    <Marque rep="J-02" cible={[900, 308]} x={882} y={312} anchor="end" />

    {/* onduleur en armoire ventilée */}
    <rect x={900} y={374} width={110} height={64} fill="none" stroke={ENCRE} strokeWidth={FORT} />
    <path d="M920 420 q14 -32 28 -18 q14 14 28 -18" fill="none" stroke={ENCRE} strokeWidth={FIN} />
    <line x1={900} y1={398} x2={1010} y2={398} stroke={ENCRE} strokeWidth={ULTRAFIN} />
    {[0, 1, 2].map((i) => (
      <line key={i} x1={918 + i * 12} y1={380} x2={918 + i * 12} y2={392} stroke={ENCRE} strokeWidth={ULTRAFIN} />
    ))}
    <Marque rep="O-03" cible={[900, 406]} x={882} y={410} anchor="end" />

    {/* limite continu / alternatif */}
    <AxeMixte x1={846} y1={466} x2={1180} y2={466} />
    <Repere x={846} y={458} anchor="start">DC</Repere>
    <Repere x={846} y={484} anchor="start">AC</Repere>

    {/* transformateur élévateur */}
    <circle cx={934} cy={522} r={22} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <circle cx={962} cy={522} r={22} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <Marque rep="TR-04" cible={[912, 522]} x={886} y={526} anchor="end" />

    {/* poste de livraison, comptage et découplage */}
    <rect x={900} y={568} width={140} height={64} fill="none" stroke={ENCRE} strokeWidth={FORT} />
    <rect x={916} y={584} width={36} height={36} fill="none" stroke={ENCRE} strokeWidth={FIN} />
    <circle cx={934} cy={602} r={10} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />
    <line x1={984} y1={584} x2={984} y2={606} stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={984} y1={606} x2={1004} y2={620} stroke={ENCRE} strokeWidth={MOYEN} />
    <Marque rep="L-05" cible={[900, 600]} x={882} y={604} anchor="end" />

    {/* la ligne de raccordement : rehaut de laiton unique */}
    <path
      d="M928 230 V282 M928 334 V374 M928 438 V500 M928 544 V568 M1040 600 H1136"
      fill="none"
      stroke={LAITON}
      strokeWidth={FORT}
    />
    <circle cx={1136} cy={600} r={5} fill={LAITON} />
    <Marque rep="PDL" cible={[1136, 600]} x={1104} y={640} anchor="end" />

    {/* ================= FIG. 3 — LA MAILLE TYPE ================= */}
    <RepereFigure x={60} y={676} n="3" title="Maille type en plan, pincée sur les nervures" w={380} />

    <g transform="translate(90 706)">
      {/* nervures du bac : elles courent dans le sens de la pente */}
      {Array.from({ length: 19 }).map((_, i) => (
        <line
          key={i}
          x1={i * 26}
          y1={0}
          x2={i * 26}
          y2={150}
          stroke={ENCRE}
          strokeWidth={ULTRAFIN}
          opacity="0.5"
        />
      ))}
      {/* mini-rails, perpendiculaires aux nervures */}
      {[38, 112].map((y) => (
        <line key={y} x1={-8} y1={y} x2={476} y2={y} stroke={ENCRE} strokeWidth={MOYEN} />
      ))}
      {/* pinces, en sommet de nervure */}
      {[26, 130, 234, 338, 442].map((x) =>
        [38, 112].map((y) => (
          <rect key={`${x}-${y}`} x={x - 5} y={y - 4} width={10} height={8} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={ULTRAFIN} />
        )),
      )}
      {/* dix modules, deux rangées */}
      {[0, 1].map((r) =>
        Array.from({ length: 5 }).map((_, i) => (
          <rect
            key={`${r}-${i}`}
            x={i * 94 + 6}
            y={12 + r * 74}
            width={86}
            height={52}
            fill="none"
            stroke={ENCRE}
            strokeWidth={FIN}
          />
        )),
      )}
      {/* une seule mise en série */}
      <path d="M28 38 H452 V112 H28" fill="none" stroke={ENCRE} strokeWidth={FORT} />
      {/* cerclage : ce qui se répète */}
      <rect x={-14} y={-8} width={496} height={182} fill="none" stroke={OXYDE} strokeWidth={FIN} strokeDasharray="7 5" />
    </g>

    <Marque rep="MT" cible={[86, 700]} x={104} y={906} anchor="start" />
    <Marque rep="N-08" cible={[142, 850]} x={230} y={906} anchor="start" />
    <Marque rep="S-01" cible={[120, 744]} x={340} y={906} anchor="start" />

    {/* ================= DÉT. 1 — TRAVERSÉE SUR NERVURE ================= */}
    <BlocTexte>
      <text className="gravure-lettrage" x={640} y={690} fontSize="12" fill={ENCRE}>
        DÉT. 1
      </text>
      <text className="gravure-lettrage" x={700} y={690} fontSize="12">
        Traversée d&apos;étanchéité en sommet de nervure
      </text>
      <line x1={640} y1={696} x2={1010} y2={696} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
    </BlocTexte>

    <circle cx={840} cy={806} r={86} fill="none" stroke={OXYDE} strokeWidth={FIN} strokeDasharray="7 5" />
    <g transform="translate(840 826)">
      {/* le bac, en coupe : onde basse, onde haute */}
      <path
        d="M-72 12 h20 v-22 h22 v22 h20 v-22 h22 v22 h20"
        fill="none"
        stroke={ENCRE}
        strokeWidth={FORT}
      />
      {/* embase vissée en sommet d'onde, joint comprimé */}
      <rect x={-13} y={-30} width={26} height={8} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={-13} y1={-22} x2={13} y2={-22} stroke={OXYDE} strokeWidth={MOYEN} />
      <Boulon x={-6} y={-26} r={2} />
      <Boulon x={6} y={-26} r={2} />
      {/* manchon et collerette */}
      <rect x={-9} y={-66} width={18} height={36} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M-17 -30 v-10 q0 -6 8 -6 M17 -30 v-10 q0 -6 -8 -6" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {/* liaison équipotentielle */}
      <path d="M13 -26 h22 v-10" fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray={MIXTE_DASH} />
    </g>
    <Marque rep="D-09" cible={[840, 796]} x={952} y={764} anchor="start" />
    <Marque rep="T-01" cible={[790, 838]} x={952} y={790} anchor="start" />
    <Marque rep="EQ" cible={[875, 800]} x={952} y={816} anchor="start" />

    {/* ============ 3 MINUTES — L'ÉCHELLE DE LIBELLÉS EN MARGE ============ */}
    <BlocTexte>
      <text className="gravure-lettrage" x={60} y={954} fontSize="12" fill={OXYDE}>
        Échelle de libellés - chaque repère du dessin, sa désignation complète
      </text>
    </BlocTexte>
    <EchelleLibelles
      x={64}
      yStart={982}
      yStep={24}
      side="right"
      items={[
        { label: 'T-01 - Bac acier nervuré en pente (PL. I)' },
        { label: 'T-02 - Panne en Z sur échantignole (PL. I)' },
        { label: 'T-03 - Arbalétrier du portique (PL. I)' },
        { label: 'M-01 - Module posé parallèle au versant' },
        { label: 'R-04 - Mini-rail vissé sur nervure' },
        { label: 'R-05 - Pince de fixation du module' },
        { label: 'N-08 - Nervure du bac, ligne de fixation' },
      ]}
    />
    <EchelleLibelles
      x={464}
      yStart={982}
      yStep={24}
      side="right"
      items={[
        { label: 'E-03 - Chéneau de rive' },
        { label: 'EP - Écoulement naturel dans les ondes' },
        { label: 'G-02 - Garde-corps de rive' },
        { label: 'C-06 - Chemin de câbles en haut de champ' },
        { label: 'F-07 - Faîtage, limite de la coupe' },
        { label: 'MT - Maille type, à répéter selon versant' },
        { label: 'D-09 - Traversée en sommet de nervure' },
      ]}
    />
    <EchelleLibelles
      x={864}
      yStart={982}
      yStep={24}
      side="right"
      items={[
        { label: 'S-01 - String de modules' },
        { label: 'J-02 - Boîte de jonction et parafoudre' },
        { label: 'O-03 - Onduleur en armoire ventilée' },
        { label: 'TR-04 - Transformateur élévateur' },
        { label: 'L-05 - Poste de livraison et comptage' },
        { label: 'PDL - Point de livraison' },
        { label: 'EQ - Liaison équipotentielle des rails' },
      ]}
    />

    {/* ---------- LÉGENDE DES FAMILLES ---------- */}
    <BlocTexte>
      <g>
        <line x1={64} y1={1160} x2={112} y2={1160} stroke={ENCRE} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={124} y={1164} fontSize="12">
          Structure de toiture (PL. I)
        </text>
        <line x1={300} y1={1160} x2={348} y2={1160} stroke={ENCRE} strokeWidth={MOYEN} />
        <text className="gravure-lettrage" x={360} y={1164} fontSize="12">
          Champ photovoltaïque
        </text>
        <line x1={540} y1={1160} x2={588} y2={1160} stroke={LAITON} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={600} y={1164} fontSize="12">
          Raccordement, laiton
        </text>
      </g>
      <text className="gravure-lettrage" x={64} y={1196} fontSize="12" fill={OXYDE}>
        Ni membrane ni isolant de toiture-terrasse, aucun plot ballasté.
      </text>
      <text className="gravure-lettrage" x={64} y={1218} fontSize="12" fill={OXYDE}>
        Étanchéité perforée en sommet de nervure seulement, DÉT. 1 - drainage naturel conservé.
      </text>
    </BlocTexte>

    <BlocTexte>
      <Cartouche
        x={800}
        y={1200}
        w={380}
        numeral="IX"
        title="Centrale en toiture"
        echelle="Éch. symb."
        dossier={VOL_I}
        index="PL. 9/9"
        renvois={['Toiture porteuse : PL. I', 'Emprise en toiture : PL. VIII']}
      />
    </BlocTexte>
  </>
);
