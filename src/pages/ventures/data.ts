
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
  /** Numéro d'ordre éditorial (§6). */
  order: string; // '01' à '05'
  /** Fait daté de constitution ou d'immatriculation, uniquement lorsqu'il est vérifiable. */
  incorporation?: { fr: string; en: string };
}

export const ventures: Venture[] = [
  {
    slug: 'cao-industries',
    name: 'CAO Industries',
    pole: { fr: 'Pôle industriel', en: 'Industrial division' },
    statusKey: 'common.status.registered',
    missionKey: 'portfolio.cao.mission',
    pointsKeys: ['portfolio.cao.p1', 'portfolio.cao.p2', 'portfolio.cao.p3'],
    context: {
      fr: "Contractant général de projets industriels clé en main. CAO Industries porte le pôle industriel du groupe et intervient de l'étude à la livraison.",
      en: "General contractor for turnkey industrial projects. CAO Industries carries the group's industrial division, from design to delivery.",
    },
    operating: {
      fr: "Immatriculée au RCS de Marseille le 5 août 2026. Premier terrain de déploiement : Afrique de l'Ouest.",
      en: "Registered at the Marseille Commercial Register on 5 August 2026. First operating ground: West Africa.",
    },
    order: '01',
    incorporation: {
      fr: 'Immatriculée le 5 août 2026 au RCS de Marseille',
      en: 'Registered on 5 August 2026 at the Marseille Commercial Register',
    },
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
    order: '02',
  },
  {
    slug: 'line-builder',
    name: 'Line Builder',
    pole: { fr: 'Pôle technologique', en: 'Technology division' },
    statusKey: 'common.status.registered',
    missionKey: 'portfolio.line.mission',
    pointsKeys: ['portfolio.line.p1', 'portfolio.line.p2', 'portfolio.line.p3'],
    context: {
      fr: "Éditeur d'une application de configuration d'usines et de lignes de production, née de l'expérience terrain du groupe.",
      en: "Publisher of a plant and production-line configuration application, born of the group's field experience.",
    },
    operating: {
      fr: "Immatriculée au RCS de Paris le 17 août 2026. Application en développement, utilisée en interne pour accélérer les avant-projets industriels.",
      en: "Registered at the Paris Commercial Register on 17 August 2026. Application under development, used in-house to accelerate industrial pre-projects.",
    },
    order: '03',
    incorporation: {
      fr: 'Immatriculée le 17 août 2026 au RCS de Paris',
      en: 'Registered on 17 August 2026 at the Paris Commercial Register',
    },
  },
  {
    slug: 'weavme',
    name: 'Weavme',
    pole: { fr: 'Pôle technologique', en: 'Technology division' },
    statusKey: 'common.status.formation',
    missionKey: 'portfolio.weavme.mission',
    pointsKeys: ['portfolio.weavme.p1', 'portfolio.weavme.p2', 'portfolio.weavme.p3'],
    context: {
      fr: "Logiciel de gestion et de réservation développé en co-entreprise avec un partenaire du secteur.",
      en: "Booking and management software developed as a joint venture with a sector partner.",
    },
    operating: {
      fr: "En formation. Marché : agences et métiers du booking. Gouvernance partagée avec le partenaire opérationnel.",
      en: "Under formation. Market: agencies and booking professions. Governance shared with the operational partner.",
    },
    order: '04',
  },
  {
    slug: 'owl-real-estate',
    name: 'Owl Real Estate',
    pole: { fr: 'Pôle patrimonial', en: 'Real estate division' },
    statusKey: 'common.status.notarial',
    missionKey: 'portfolio.ore.mission',
    pointsKeys: ['portfolio.ore.p1', 'portfolio.ore.p2', 'portfolio.ore.p3'],
    context: {
      fr: "Véhicule d'investissement immobilier du groupe. Actifs résidentiels et de rendement en emplacements centraux.",
      en: "The group's real estate investment vehicle. Residential and yield assets in central locations.",
    },
    operating: {
      fr: "En formation par voie de Notaire. Première opération en cours de structuration dans le sud de la France.",
      en: "Under formation by notarial deed. First operation being structured in the south of France.",
    },
    order: '05',
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);
