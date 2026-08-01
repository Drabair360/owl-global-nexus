import React from 'react';
import { GravureDefs, Cote, ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN } from '../defs';
import Cartouche from '../Cartouche';

/**
 * PLANCHE I — Coupe transversale d'une unité industrielle type.
 * Fondations, charpente, pont roulant, réseaux : le clé en main en un dessin.
 * Rehaut de laiton (un seul, §1) : LA LIGNE DE SOL — là où tout se pose.
 * Aucun lieu, aucune marque, aucune donnée chiffrée réelle : cotes symboliques.
 */

export const PLANCHE_I = {
  numeral: 'I',
  title: "Coupe transversale d'une unité industrielle type",
  desc:
    "Gravure au trait. Coupe verticale d'un bâtiment industriel générique. En bas, le terrain figuré par de fines horizontales espacées ; deux massifs de fondation hachurés à 45 degrés portent les poteaux ; entre eux, un dallage en coupe de matière figuré par des hachures croisées. La ligne de sol, rehaussée de laiton, traverse toute la planche : c'est le plan de pose. Deux poteaux montent jusqu'à une charpente en treillis triangulé qui couvre la portée. À mi-hauteur, deux chemins de roulement portent un pont roulant, dessiné en caisson avec son treuil et son crochet. Au-dessus, un réseau technique figuré en pointillé indique les tracés projetés, non encore posés. Des cotations symboliques, sans valeur chiffrée, portent les lettres A, B et H. Un cartouche d'angle porte le numéro de planche, son titre et le sceau du registre.",
  viewBox: '0 0 1200 700',
  detailViewBox: '620 235 440 275',
};

export const PlancheIDrawing = ({ p }: { p: string }) => {
  const SOL = 520;
  return (
    <>
      <GravureDefs p={p} />

      {/* — TERRAIN : horizontales espacées = sol (grammaire §1) — */}
      <rect x="0" y={SOL} width="1200" height="180" fill={`url(#${p}-hsol)`} opacity="0.9" />

      {/* — DALLAGE en coupe de matière : hachures croisées — */}
      <rect x="200" y={SOL} width="780" height="26" fill={`url(#${p}-hx)`} stroke={ENCRE} strokeWidth={MOYEN} />

      {/* — MASSIFS DE FONDATION : masse pleine, hachures 45° — */}
      {[170, 930].map((x) => (
        <g key={x}>
          <path
            d={`M${x} ${SOL} h110 v52 l-18 34 h-74 l-18 -34 z`}
            fill={`url(#${p}-h45)`}
            stroke={ENCRE}
            strokeWidth={FORT}
          />
          <line x1={x - 14} y1={SOL + 52} x2={x + 124} y2={SOL + 52} stroke={ENCRE} strokeWidth={FIN} opacity="0.6" />
        </g>
      ))}

      {/* — LIGNE DE SOL : le seul rehaut de laiton de la planche — */}
      <line x1="40" y1={SOL} x2="1160" y2={SOL} stroke={LAITON} strokeWidth={FORT} />
      <text className="gravure-lettrage" x="40" y={SOL - 9} fontSize="13">
        Ligne de sol
      </text>

      {/* — POTEAUX — */}
      {[
        [206, 262],
        [938, 994],
      ].map(([x1, x2]) => (
        <g key={x1}>
          <rect x={x1} y={168} width={x2 - x1} height={SOL - 168} fill="none" stroke={ENCRE} strokeWidth={FORT} />
          <line x1={(x1 + x2) / 2} y1={176} x2={(x1 + x2) / 2} y2={SOL - 8} stroke={ENCRE} strokeWidth={FIN} opacity="0.45" />
        </g>
      ))}

      {/* — CHARPENTE : treillis triangulé — */}
      <g stroke={ENCRE} fill="none">
        <path d="M206 168 L600 104 L994 168" strokeWidth={FORT} />
        <path d="M206 168 L994 168" strokeWidth={FORT} />
        <path d="M206 196 L600 132 L994 196" strokeWidth={MOYEN} />
        {Array.from({ length: 12 }).map((_, i) => {
          const t = i / 11;
          const x = 206 + t * 788;
          const yTop = 168 - (1 - Math.abs(0.5 - t) * 2) * 64;
          return <line key={i} x1={x} y1={168} x2={x} y2={yTop} strokeWidth={FIN} opacity="0.75" />;
        })}
        {Array.from({ length: 11 }).map((_, i) => {
          const t = i / 11;
          const t2 = (i + 1) / 11;
          const x = 206 + t * 788;
          const x2 = 206 + t2 * 788;
          const y = 168 - (1 - Math.abs(0.5 - t) * 2) * 64;
          const y2 = 168 - (1 - Math.abs(0.5 - t2) * 2) * 64;
          return <line key={`d${i}`} x1={x} y1={i % 2 ? y : 168} x2={x2} y2={i % 2 ? 168 : y2} strokeWidth={FIN} opacity="0.6" />;
        })}
      </g>
      <text className="gravure-lettrage" x="600" y="92" fontSize="13" textAnchor="middle">
        Charpente
      </text>

      {/* — PONT ROULANT : chemins de roulement, caisson, treuil, crochet — */}
      <g stroke={ENCRE} fill="none">
        <line x1="262" y1="300" x2="938" y2="300" strokeWidth={FORT} />
        <line x1="262" y1="308" x2="938" y2="308" strokeWidth={FIN} opacity="0.7" />
        <rect x="470" y="270" width="260" height="30" strokeWidth={FORT} />
        <line x1="470" y1="285" x2="730" y2="285" strokeWidth={FIN} opacity="0.6" />
        <rect x="566" y="300" width="68" height="34" strokeWidth={MOYEN} />
        <line x1="600" y1="334" x2="600" y2="392" strokeWidth={MOYEN} />
        <path d="M592 392 a8 8 0 1 0 16 0 v-6" strokeWidth={MOYEN} />
        <circle cx="492" cy="266" r="7" strokeWidth={FIN} />
        <circle cx="708" cy="266" r="7" strokeWidth={FIN} />
      </g>
      <text className="gravure-lettrage" x="750" y="264" fontSize="13">
        Pont roulant
      </text>

      {/* — RÉSEAUX : pointillé = projeté / en constitution (§1) — */}
      <g stroke={OXYDE} fill="none" strokeWidth={MOYEN} strokeDasharray="5 6" opacity="0.9">
        <path d="M262 224 H938" />
        <path d="M330 224 V500" />
        <path d="M870 224 V500" />
        <path d="M330 380 H470" />
        <path d="M730 380 H870" />
      </g>
      <text className="gravure-lettrage" x="262" y="214" fontSize="13">
        Réseaux — tracés projetés
      </text>

      {/* — COTATIONS SYMBOLIQUES (jamais de valeur réelle) — */}
      <Cote p={p} x1={206} y1={636} x2={994} y2={636} label="A" />
      <Cote p={p} x1={470} y1={604} x2={730} y2={604} label="B" />
      <g>
        <line x1="1120" y1="104" x2="1120" y2={SOL} stroke={OXYDE} strokeWidth={FIN} markerStart={`url(#${p}-cote)`} markerEnd={`url(#${p}-cote)`} />
        <text className="gravure-lettrage" x="1134" y="312" fontSize="13">H</text>
      </g>
      <text className="gravure-lettrage" x="170" y={SOL + 118} fontSize="13">
        Fondations
      </text>

      {/* — CARTOUCHE (composant unique, §1) — */}
      <Cartouche
        x={40}
        y={600}
        numeral="I"
        title="Unité industrielle — coupe"
        echelle="Éch. symb."
      />
    </>
  );
};
