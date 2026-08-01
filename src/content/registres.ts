/**
 * CABINET §4 — REGISTRES DE SAVOIR ET NOTES DE MARGE.
 *
 * PROPOSITION DE RÉDACTION. Ce fichier n'alimente que /studio/registres.
 * Rien n'entre en production avant validation mot à mot ; l'anglais se
 * rédige après la validation française, en réécriture et non en traduction.
 *
 * CHARTE : trois temps (le problème du métier - la discipline qu'il exige -
 * la manière dont le groupe l'aborde), cent vingt à cent quatre-vingts mots,
 * phrases courtes, aucun chiffre, aucun « nous avons », aucun superlatif.
 * Bannis : leader, unique, révolution, passion, excellence, sur-mesure, ADN.
 * Chaque affirmation vaut du métier en général, jamais du groupe déguisé.
 */

export interface Registre {
  id: string;
  page: string;
  titre: string;
  /** Trois temps, un paragraphe chacun. */
  temps: [string, string, string];
  /** Notes de marge appelées en regard (colonne d'appel). */
  notes: string[];
}

export interface Note {
  id: string;
  terme: string;
  /** Vingt-cinq mots au plus. */
  texte: string;
}

export const NOTES: Note[] = [
  {
    id: 'epc',
    terme: 'EPC',
    texte:
      "Engineering, Procurement, Construction : conception, achats et construction tenus sous une seule responsabilité contractuelle.",
  },
  {
    id: 'avant-projet',
    terme: 'Avant-projet',
    texte:
      "Phase où le principe technique se fixe. L'essentiel du coût futur y est engagé, avant tout achat et toute mise en œuvre.",
  },
  {
    id: 'reception',
    terme: 'Réception',
    texte:
      "Acte par lequel le client prend possession de l'ouvrage, avec ou sans réserves. Il ouvre les garanties et clôt le chantier.",
  },
  {
    id: 'ordonnancement',
    terme: 'Ordonnancement',
    texte:
      "Mise en ordre des tâches et des ressources dans le temps, pour qu'une ligne produise sans attendre ni s'engorger.",
  },
  {
    id: 'socle',
    terme: 'Socle technique',
    texte:
      "Couche basse d'un logiciel : stockage, calcul, identité. Ce qui ne se voit pas et dont tout le reste dépend.",
  },
  {
    id: 'detention-longue',
    terme: 'Détention longue',
    texte:
      "Choix de conserver un actif au-delà d'un cycle de marché, en tirant le rendement de l'usage plutôt que de la revente.",
  },
  {
    id: 'reversibilite',
    terme: 'Réversibilité',
    texte:
      "Aptitude d'un bâtiment à changer d'usage sans être démoli : structure, hauteurs et accès le permettent ou l'interdisent.",
  },
  {
    id: 'apport-affaires',
    terme: "Apport d'affaires",
    texte:
      "Mise en relation rémunérée entre un besoin et celui qui peut y répondre, formalisée avant tout échange d'information utile.",
  },
  {
    id: 'holding-animatrice',
    terme: 'Holding animatrice',
    texte:
      "Société de tête qui participe activement à la conduite de ses filiales, au-delà de la simple détention de titres.",
  },
  {
    id: 'corridor',
    terme: 'Corridor',
    texte:
      "Couple de zones économiques reliées par des flux réguliers de biens, de personnes et de compétences, dans les deux sens.",
  },
];

export const REGISTRES: Registre[] = [
  {
    id: 'cao',
    page: '/portefeuille/cao-industries',
    titre: "Ce qu'exige un clé en main",
    notes: ['epc', 'avant-projet', 'reception'],
    temps: [
      "Un contrat clé en main déplace le risque. Le client achète un résultat, pas une somme de prestations. Celui qui s'engage répond de la conception, des achats et de la construction, y compris des écarts entre les trois.",
      "La discipline commence en amont. L'avant-projet fixe le principe technique et, avec lui, l'essentiel du coût futur : ce qui n'a pas été tranché à ce moment se paie ensuite en modifications. Vient l'arbitrage des achats, où le moins-disant apparent devient souvent le plus cher, faute de délai tenu ou de pièce conforme. Vient enfin la réception, moment de vérité : elle constate ce qui a été fait, non ce qui avait été promis.",
      "Le groupe aborde ce métier par l'amont. Les études précèdent l'engagement, les fournisseurs se qualifient avant d'être consultés, et les réserves se traitent comme un enseignement plutôt que comme un incident.",
    ],
  },
  {
    id: 'line-builder',
    page: '/portefeuille/line-builder',
    titre: "L'avant-projet est le nerf de l'usine",
    notes: ['avant-projet', 'ordonnancement'],
    temps: [
      "Une ligne de production se juge en marche, quand il est tard pour la reprendre. Les défauts constatés au démarrage ont presque tous été décidés sur le papier, longtemps avant la première pièce.",
      "La discipline consiste à dessiner le flux avant les machines. Où la matière entre, où elle attend, où elle se contrôle. Un poste mal placé impose un déplacement à chaque cycle ; répété, ce déplacement devient la capacité perdue de l'atelier. L'ordonnancement se pense au même moment : une ligne équilibrée vaut mieux qu'une ligne rapide et engorgée. Reste la question qu'on oublie : que devient l'installation quand le produit change ? Une ligne conçue pour un seul produit vieillit avec lui.",
      "Le groupe travaille la configuration plutôt que le cas particulier : châssis communs, interfaces définies, modules qui se remplacent sans refaire l'ensemble.",
    ],
  },
  {
    id: 'drabair',
    page: '/portefeuille/drabair-labs',
    titre: 'Pourquoi posséder ses socles',
    notes: ['socle'],
    temps: [
      "Un logiciel dépend toujours de couches qu'il n'a pas écrites. Tant qu'elles tiennent, personne n'y pense. Le jour où l'une change de prix, de conditions ou de cap, c'est le produit entier qui se déplace.",
      "La discipline tient en deux gestes. D'abord, savoir ce dont on dépend : nommer les couches, leurs points de contact, ce qu'il en coûterait d'en sortir. Ensuite, choisir ce que l'on garde en propre. Tout posséder est un gaspillage, tout emprunter est une remise de clés. La ligne se trace là où passe la valeur du produit : ce qui le distingue se possède, ce qui l'outille se loue. Un contrat entre deux couches doit être écrit, et le rester quand l'une des deux évolue.",
      "Le groupe garde la maîtrise des socles dont dépend la continuité de service, et documente les interfaces plutôt que les intentions.",
    ],
  },
  {
    id: 'weavme',
    page: '/portefeuille/weavme',
    titre: "Le booking est un problème d'engagements tenus",
    notes: ['ordonnancement'],
    temps: [
      "Réserver semble simple : une demande, une ressource, une confirmation. La difficulté n'est pas de prendre la demande, elle est de tenir ce qui a été confirmé quand tout bouge autour.",
      "La discipline est celle du registre. Une ressource ne peut être promise deux fois ; une confirmation doit rester vraie après l'annulation qui la précède ; un report doit se propager à tous ceux qu'il concerne, sans qu'on ait à y penser. Le métier se joue dans les cas rares : le chevauchement, l'indisponibilité de dernière heure, la demande qui arrive pendant qu'on répond à la précédente. Ces cas ne sont pas des exceptions à traiter plus tard, ils sont la matière même du système.",
      "Le groupe traite la confirmation comme un engagement écrit : traçable, réversible selon des règles connues, et jamais implicite.",
    ],
  },
  {
    id: 'ore',
    page: '/portefeuille/owl-real-estate',
    titre: "La grammaire de l'emplacement",
    notes: ['detention-longue', 'reversibilite'],
    temps: [
      "Un immeuble ne se déplace pas. Tout ce qui peut être corrigé plus tard - la distribution, les finitions, le locataire - se corrige. L'emplacement, non.",
      "La discipline consiste à lire trois choses avant le prix. La rareté d'abord : ce qui ne peut pas être reproduit à côté garde sa valeur quand l'offre augmente. La valeur d'usage ensuite : un bien se juge à ce qu'il permet de faire au quotidien, pas à sa façade. La réversibilité enfin : hauteurs, structure et accès décident si le bâtiment pourra changer d'usage lorsque le quartier changera. Un actif détenu longtemps traverse plusieurs cycles ; il doit pouvoir servir à autre chose que ce pour quoi il a été acheté.",
      "Le groupe raisonne en détention longue, et regarde d'abord ce qu'un lieu autorise avant de regarder ce qu'il rapporte.",
    ],
  },
  {
    id: 'scouts',
    page: '/scouts',
    titre: "Ce qu'est un bon signalement",
    notes: ['apport-affaires'],
    temps: [
      "Un signalement utile n'est pas une intuition, c'est une information vérifiable arrivée à temps. La plupart des mises en relation échouent parce qu'elles sont trop vagues, trop tardives, ou hors sujet.",
      "Cinq critères permettent de trancher. Précis : une société, un besoin, un interlocuteur, pas un secteur. Sourçable : on peut dire d'où vient l'information et comment elle a été obtenue. Actionnable : il existe un geste concret à faire dans les semaines qui viennent. Dans le périmètre : le besoin relève des métiers exercés, sans quoi la mise en relation dessert tout le monde. Apporté en premier : une information déjà connue de plusieurs n'est plus une information, c'est une rumeur de marché.",
      "Le groupe formalise le cadre avant l'échange : ce qui est attendu, ce qui est rémunéré, et ce qui ne l'est pas.",
    ],
  },
  {
    id: 'engagements',
    page: '/engagements',
    titre: 'La doctrine du corridor',
    notes: ['corridor'],
    temps: [
      "Relier deux zones économiques n'est pas y être présent des deux côtés. Un corridor n'existe que si quelque chose circule dans les deux sens, régulièrement, et pour longtemps.",
      "Trois convictions le rendent tenable. La première : la compétence se transporte moins bien que le matériel, elle se forme sur place ou ne s'installe pas. La deuxième : un flux à sens unique n'est pas un corridor mais un débouché, et il s'interrompt au premier changement de conjoncture. La troisième : la durée se gagne par la maintenance, pas par la livraison ; un équipement qu'on ne sait pas entretenir localement cesse d'être un actif et devient une charge.",
      "Le groupe engage ses opérations sur cette lecture : ce qui se conçoit d'un côté doit pouvoir se réparer de l'autre.",
    ],
  },
  {
    id: 'approche',
    page: '/approche',
    titre: 'Pourquoi nous publions si peu de chiffres',
    notes: ['holding-animatrice'],
    temps: [
      "Un groupe jeune est tenté de compenser son histoire courte par des chiffres. Objectifs annoncés, volumes potentiels, projections : autant de nombres qui ressemblent à des faits sans en être.",
      "La discipline consiste à ne publier que ce qui est arrêté et vérifiable. Un chiffre déposé peut être consulté par un tiers ; une projection ne peut qu'être crue. Publier la seconde en la présentant comme le premier revient à demander une confiance qu'on n'a pas encore méritée. Cette retenue a un coût : elle laisse des pages plus sobres que celles des groupes qui communiquent en intentions. Elle a un avantage : chaque élément publié reste vrai l'année suivante, et le lecteur peut le contrôler lui-même.",
      "Le groupe s'en tient donc aux faits datés, aux mentions légales et aux comptes déposés, et laisse la démonstration aux ouvrages livrés.",
    ],
  },
];
