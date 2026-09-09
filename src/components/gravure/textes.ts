import { useI18n } from '@/lib/i18n';

/**
 * CABINET — TRADUCTION DES TEXTES PORTÉS AU DESSIN.
 *
 * Les planches restent écrites en français dans le code : c'est la langue
 * de dessin du cabinet. La lecture anglaise passe par ce dictionnaire,
 * appliqué au niveau des primitives de lettrage (titre de planche, bandeaux
 * de zone, échelles de libellés, repères de figure, nomenclatures,
 * cartouche). Une chaîne absente du dictionnaire reste en français.
 */
export const GRAVURE_EN: Record<string, string> = {
  // ---- cartouche et dossier ----
  'DOSSIER OWL - VOL. I : USINE DE RÉFÉRENCE (CONCEPT)':
    'OWL DOSSIER - VOL. I : REFERENCE PLANT (CONCEPT)',
  'DOSSIER OWL - VOL. II : IMMEUBLE DE RÉFÉRENCE ORE-1 (CONCEPT)':
    'OWL DOSSIER - VOL. II : REFERENCE BUILDING ORE-1 (CONCEPT)',
  'DOSSIER OWL - VOL. III : LE GROUPE (MODÈLE CIBLE, CONCEPT)':
    'OWL DOSSIER - VOL. III : THE GROUP (TARGET MODEL, CONCEPT)',
  'Éch. symb.': 'Symb. scale',
  "Coupe de l'unité : PL. I": 'Unit section: PL. I',
  'Implantation générale : PL. VIII': 'General layout: PL. VIII',
  'Coupe : PL. I': 'Section: PL. I',
  'Ligne : PL. III': 'Line: PL. III',
  'Centrale : PL. IX': 'PV plant: PL. IX',
  'Toiture porteuse : PL. I': 'Load-bearing roof: PL. I',
  'Emprise en toiture : PL. VIII': 'Footprint: PL. VIII',

  // ---- PL. II — le cycle de vie complet ----
  'Le cycle de vie complet': 'The complete life cycle',
  "Les sept temps, dans l'ordre": 'The seven stages, in order',
  'Boucle de retour : la maintenance revient à la conception':
    'Feedback loop: maintenance returns to design',
  'Avant-projet': 'Preliminary design',
  Engineering: 'Engineering',
  'Repère colis': 'Package mark',
  Procurement: 'Procurement',
  'Construction et montage': 'Construction and erection',
  'Tests capacitaires': 'Capacity tests',
  'Mise en service': 'Commissioning',
  'Maintenance préventive': 'Preventive maintenance',
  'Jalons et calendrier': 'Milestones and schedule',
  'Revues, réserves, réception': 'Reviews, punch lists, acceptance',
  'Le seul retour amont': 'The only upstream return',
  'Avant-projet et études de faisabilité': 'Preliminary design and feasibility studies',
  'Engineering, trois disciplines': 'Engineering, three disciplines',
  'Procurement et réception': 'Procurement and acceptance',
  'Fil conducteur des sept temps': 'Common thread of the seven stages',
  'Boucle maintenance vers conception': 'Maintenance-to-design loop',
  'Jalons de calendrier, repères de convention': 'Schedule milestones, conventional marks',

  // ---- PL. VIII — implantation générale ----
  "Plan d'implantation d'une usine type": 'General layout of a type plant',
  "Implantation d'une usine type": 'General layout of a type plant',
  "Usine agro-industrielle type, clé en main - trame de la PL. I, ligne de la PL. III en place - marche en avant, réception vers expédition":
    'Type agro-industrial plant, turnkey - grid of PL. I, line of PL. III in place - forward flow, from reception to dispatch',
  'Plan masse, marche en avant': 'Site plan, forward flow',
  'Utilités': 'Utilities',
  'Réception et stockage': 'Reception and storage',
  Transformation: 'Processing',
  'Conditionnement et expédition': 'Packing and dispatch',
  'Circuit sale et déchets': 'Dirty circuit and waste',
  'Sens de lecture : réception (ouest) vers expédition (est)':
    'Reading direction: reception (west) to dispatch (east)',
  'Procédé - marche en avant': 'Process - forward flow',
  'Utilités et servitudes': 'Utilities and services',
  'Repérage et renvois de dossier': 'Marks and cross-references',
  'P-01 - Pont-bascule et poste de garde': 'P-01 - Weighbridge and guard post',
  'Q-02 - Quai de déchargement et fosse': 'Q-02 - Unloading dock and pit',
  'S-03 - Silos de matière première': 'S-03 - Raw-material silos',
  'H-04 - Halle de transformation': 'H-04 - Processing hall',
  'L-05 - Ligne de mouture en place (PL. III)': 'L-05 - Milling line in place (PL. III)',
  'C-06 - Conditionnement': 'C-06 - Packing',
  'C-07 - Palettisation': 'C-07 - Palletising',
  'M-08 - Magasin de produits finis': 'M-08 - Finished-goods store',
  'Q-09 - Quais et aire de manoeuvre': 'Q-09 - Docks and manoeuvring area',
  'U-01 - Poste de livraison': 'U-01 - Power delivery substation',
  'U-02 - Chaufferie et rétention': 'U-02 - Boiler room and retention',
  'U-03 - Air comprimé et froid': 'U-03 - Compressed air and cooling',
  'U-04 - Traitement des eaux, relevage': 'U-04 - Water treatment, lifting',
  'U-05 - Maintenance et atelier': 'U-05 - Maintenance and workshop',
  'D-10 - Déchets et sous-produits': 'D-10 - Waste and by-products',
  'R-11 - Circuit sale, sans croisement': 'R-11 - Dirty circuit, no crossing',
  'V-12 - Voirie à sens unique': 'V-12 - One-way roads',
  'DI - Réserve, poteaux et recul': 'DI - Reserve, hydrants and setback',
  'MA - Marche en avant (laiton)': 'MA - Forward flow (brass)',
  'A, B, C - Files du portique (PL. I)': 'A, B, C - Portal frame rows (PL. I)',
  '1 à 6 - Trames, entraxe constant': '1 to 6 - Grid lines, constant spacing',
  'A-A - Ligne de coupe, regard PL. I': 'A-A - Section line, see PL. I',
  'PV - Emprise de la centrale (PL. IX)': 'PV - PV plant footprint (PL. IX)',
  'JD - Joint de dilatation de la halle': 'JD - Hall expansion joint',
  'ZS - Limite zone grise / zone blanche': 'ZS - Grey zone / white zone boundary',
  'Emprise - limite en trait interrompu': 'Footprint - dashed boundary line',
  'Marche en avant, circuit propre': 'Forward flow, clean circuit',
  'Circuit sale, déchets': 'Dirty circuit, waste',
  'Les deux circuits ne se croisent en aucun point du plan.':
    'The two circuits never cross at any point of the plan.',
  "Cotation symbolique, aucun toponyme ni donnée d'exploitation.":
    'Symbolic dimensions; no place names, no operating data.',

  // ---- PL. IX — centrale en toiture ----
  'Centrale en toiture': 'Rooftop PV plant',
  "Versant en bac acier de l'unité de référence (PL. I) - modules parallèles au versant, fixés sur nervures":
    'Steel-deck roof slope of the reference unit (PL. I) - modules parallel to the slope, fixed on the ribs',
  'Versant équipé, coupe partielle à la pente de la PL. I':
    'Equipped slope, partial section at the pitch of PL. I',
  'Rive basse et chéneau': 'Low eave and gutter',
  'Champ de modules': 'Module array',
  'Faîtage et cheminement': 'Ridge and walkway',
  'De la toiture au point de livraison': 'From the roof to the delivery point',
  'Maille type en plan, pincée sur les nervures': 'Typical bay in plan, clamped on the ribs',
  'DÉT. 1': 'DET. 1',
  "Traversée d’étanchéité en sommet de nervure": 'Weathertight penetration at rib crest',
  "Traversée d'étanchéité en sommet de nervure": 'Weathertight penetration at rib crest',
  'Échelle de libellés - chaque repère du dessin, sa désignation complète':
    'Label scale - every mark on the drawing with its full designation',
  'T-01 - Bac acier nervuré en pente (PL. I)': 'T-01 - Sloped ribbed steel deck (PL. I)',
  'T-02 - Panne en Z sur échantignole (PL. I)': 'T-02 - Z-purlin on cleat (PL. I)',
  'T-03 - Arbalétrier du portique (PL. I)': 'T-03 - Portal frame rafter (PL. I)',
  'M-01 - Module posé parallèle au versant': 'M-01 - Module laid parallel to the slope',
  'R-04 - Mini-rail vissé sur nervure': 'R-04 - Mini-rail screwed to the rib',
  'R-05 - Pince de fixation du module': 'R-05 - Module fixing clamp',
  'N-08 - Nervure du bac, ligne de fixation': 'N-08 - Deck rib, fixing line',
  'E-03 - Chéneau de rive': 'E-03 - Eaves gutter',
  'EP - Écoulement naturel dans les ondes': 'EP - Natural drainage in the troughs',
  'G-02 - Garde-corps de rive': 'G-02 - Edge guardrail',
  'C-06 - Chemin de câbles en haut de champ': 'C-06 - Cable tray at the top of the array',
  'F-07 - Faîtage, limite de la coupe': 'F-07 - Ridge, section boundary',
  'MT - Maille type, à répéter selon versant': 'MT - Typical bay, repeated along the slope',
  'D-09 - Traversée en sommet de nervure': 'D-09 - Penetration at rib crest',
  'S-01 - String de modules': 'S-01 - Module string',
  'J-02 - Boîte de jonction et parafoudre': 'J-02 - Junction box and surge arrester',
  'O-03 - Onduleur en armoire ventilée': 'O-03 - Inverter in ventilated cabinet',
  'TR-04 - Transformateur élévateur': 'TR-04 - Step-up transformer',
  'L-05 - Poste de livraison et comptage': 'L-05 - Delivery substation and metering',
  'PDL - Point de livraison': 'PDL - Delivery point',
  'EQ - Liaison équipotentielle des rails': 'EQ - Equipotential bonding of the rails',
  'Structure de toiture (PL. I)': 'Roof structure (PL. I)',
  'Champ photovoltaïque': 'Photovoltaic array',
  'Raccordement, laiton': 'Connection, brass',
  'Ni membrane ni isolant de toiture-terrasse, aucun plot ballasté.':
    'No flat-roof membrane or insulation, no ballasted mounts.',
  'Étanchéité perforée en sommet de nervure seulement, DÉT. 1 - drainage naturel conservé.':
    'Weathertightness pierced at rib crests only, DET. 1 - natural drainage preserved.',
};

/** Traduction d'une chaîne de dessin dans la langue de lecture. */
export const gravureTexte = (fr: string, locale: string) =>
  locale === 'en' ? GRAVURE_EN[fr] ?? fr : fr;

/** Hook de lettrage : g('chaîne française') rend la chaîne de lecture. */
export const useGravure = () => {
  const { locale } = useI18n();
  return (fr?: string) => (fr === undefined ? fr : gravureTexte(fr, locale));
};

/** Langue de lecture courante, pour les libellés fixes du cartouche. */
export const useGravureLocale = () => useI18n().locale;
