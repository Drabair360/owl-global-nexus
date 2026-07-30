import type { TextureKey } from '@/assets/textures';
import type { DuotoneTone } from '@/components/Duotone';

export type VentureSlug =
  | 'cao-industries'
  | 'drabair-labs'
  | 'line-builder'
  | 'weavme'
  | 'owl-real-estate';

export interface Venture {
  slug: VentureSlug;
  name: string;
  /** Pôle du groupe. */
  pole: { fr: string; en: string };
  /** Statut factuel (clé i18n existante). */
  statusKey: string;
  /** Mission (clé i18n existante). */
  missionKey: string;
  /** Points (clés i18n existantes). */
  pointsKeys: string[];
  /** Contexte éditorial court, ne dépasse jamais le factuel. */
  context: { fr: string; en: string };
  /** Repère opérationnel factuel. */
  operating: { fr: string; en: string };
  /** Texture (illustration honnête, jamais un actif du groupe). */
  texture: TextureKey;
  tone: DuotoneTone;
  /** Numéro d'ordre éditorial (§6). */
  order: string; // '01' à '05'
}

export const ventures: Venture[] = [
  {
    slug: 'cao-industries',
    name: 'CAO Industries',
    pole: { fr: 'Pôle industriel', en: 'Industrial division' },
    statusKey: 'common.status.registration',
    missionKey: 'portfolio.cao.mission',
    pointsKeys: ['portfolio.cao.p1', 'portfolio.cao.p2', 'portfolio.cao.p3'],
    context: {
      fr: "Contractant général de projets industriels clé en main. CAO Industries porte le pôle industriel du groupe et intervient de l'étude à la livraison.",
      en: "General contractor for turnkey industrial projects. CAO Industries carries the group's industrial division, from design to delivery.",
    },
    operating: {
      fr: "Premier terrain de déploiement : Afrique de l'Ouest. Ingénierie et pilotage depuis la France.",
      en: "First operating ground: West Africa. Engineering and management from France.",
    },
    texture: 'industrial',
    tone: 'gold',
    order: '01',
  },
  {
    slug: 'drabair-labs',
    name: 'Drabair Labs',
    pole: { fr: 'Pôle technologique', en: 'Technology division' },
    statusKey: 'common.status.formation',
    missionKey: 'portfolio.drabair.mission',
    pointsKeys: ['portfolio.drabair.p1', 'portfolio.drabair.p2', 'portfolio.drabair.p3'],
    context: {
      fr: "Société de recherche et développement logiciel du groupe. Drabair Labs conserve la propriété intellectuelle et outille les autres entités.",
      en: "The group's software research and development company. Drabair Labs keeps intellectual property in-house and tools other entities.",
    },
    operating: {
      fr: "Équipe en formation. Socles logiciels partagés en priorité avec le pôle industriel.",
      en: "Team in formation. Software foundations shared first with the industrial division.",
    },
    texture: 'lab',
    tone: 'ink',
    order: '02',
  },
  {
    slug: 'line-builder',
    name: 'Line Builder',
    pole: { fr: 'Pôle technologique', en: 'Technology division' },
    statusKey: 'common.status.formation',
    missionKey: 'portfolio.line.mission',
    pointsKeys: ['portfolio.line.p1', 'portfolio.line.p2', 'portfolio.line.p3'],
    context: {
      fr: "Éditeur d'une application de configuration d'usines et de lignes de production, née de l'expérience terrain du groupe.",
      en: "Publisher of a plant and production-line configuration application, born of the group's field experience.",
    },
    operating: {
      fr: "Application en développement. Utilisée en interne pour accélérer les avant-projets industriels.",
      en: "Application under development. Used in-house to accelerate industrial pre-projects.",
    },
    texture: 'studio',
    tone: 'gold',
    order: '03',
  },
  {
    slug: 'weavme',
    name: 'Weavme',
    pole: { fr: 'Pôle technologique', en: 'Technology division' },
    statusKey: 'common.status.partnership',
    missionKey: 'portfolio.weavme.mission',
    pointsKeys: ['portfolio.weavme.p1', 'portfolio.weavme.p2', 'portfolio.weavme.p3'],
    context: {
      fr: "Logiciel de gestion et de réservation développé en co-entreprise avec un partenaire du secteur.",
      en: "Booking and management software developed as a joint venture with a sector partner.",
    },
    operating: {
      fr: "Marché : agences et métiers du booking. Gouvernance partagée avec le partenaire opérationnel.",
      en: "Market: agencies and booking professions. Governance shared with the operational partner.",
    },
    texture: 'atelier',
    tone: 'sepia',
    order: '04',
  },
  {
    slug: 'owl-real-estate',
    name: 'Owl Real Estate',
    pole: { fr: 'Pôle patrimonial', en: 'Real estate division' },
    statusKey: 'common.status.constitution',
    missionKey: 'portfolio.ore.mission',
    pointsKeys: ['portfolio.ore.p1', 'portfolio.ore.p2', 'portfolio.ore.p3'],
    context: {
      fr: "Véhicule d'investissement immobilier du groupe. Actifs résidentiels et de rendement en emplacements centraux.",
      en: "The group's real estate investment vehicle. Residential and yield assets in central locations.",
    },
    operating: {
      fr: "Première opération en cours de structuration dans le sud de la France. Détention longue.",
      en: "First operation being structured in the south of France. Long-term ownership.",
    },
    texture: 'prestige',
    tone: 'gold',
    order: '05',
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);
