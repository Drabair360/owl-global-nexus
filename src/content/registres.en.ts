/**
 * CABINET §4 — REGISTRES ET NOTES DE MARGE, VERSION ANGLAISE.
 *
 * Réécriture de registre institutionnel, pas traduction littérale : même
 * charte (trois temps, aucun chiffre, aucun superlatif, aucun « we have »),
 * même ancrage vérifiable. Les termes de convention du dossier restent en
 * français quand c'est l'usage savant ; les vocabulaires techniques passent
 * en anglais de métier.
 */

export const NOTES_EN: Record<string, { terme: string; texte: string }> = {
  epc: {
    terme: 'EPC',
    texte:
      'Engineering, procurement and construction held under a single contractual responsibility.',
  },
  'avant-projet': {
    terme: 'Concept design',
    texte:
      'The stage where the technical principle is settled. Most of the future cost is committed here, before any purchase or works.',
  },
  reception: {
    terme: 'Handover',
    texte:
      'The act by which the client takes possession of the works, with or without reservations. It starts the warranties and closes the site.',
  },
  ordonnancement: {
    terme: 'Scheduling',
    texte:
      'Ordering tasks and resources in time so that a line produces without waiting and without choking.',
  },
  socle: {
    terme: 'Technical foundation',
    texte:
      'The lower layer of a software product: storage, compute, identity. What nobody sees and everything else depends on.',
  },
  'detention-longue': {
    terme: 'Long holding',
    texte:
      'Keeping an asset beyond one market cycle, taking the return from use rather than from resale.',
  },
  reversibilite: {
    terme: 'Reversibility',
    texte:
      'A building’s capacity to change use without demolition: structure, floor heights and access either allow it or forbid it.',
  },
  'apport-affaires': {
    terme: 'Business introduction',
    texte:
      'A paid introduction between a need and whoever can answer it, put in writing before any useful information changes hands.',
  },
  'holding-animatrice': {
    terme: 'Holding animatrice',
    texte:
      'A parent company that takes active part in running its subsidiaries, beyond merely holding their shares.',
  },
  corridor: {
    terme: 'Corridor',
    texte:
      'Two economic areas linked by regular flows of goods, people and skills, in both directions.',
  },
  'test-capacitaire': {
    terme: 'Capacity test',
    texte:
      'A loaded trial checking that an installation holds its stated throughput over time, on real material and nominal rate, before handover.',
  },
  constitution: {
    terme: 'Successive incorporation',
    texte:
      'Founding a new company rather than buying one, each trade set up once its market and its team are in place.',
  },
  maintenabilite: {
    terme: 'Maintainability',
    texte:
      'The capacity of an installation to be serviced: parts reachable, spares available, tasks within reach of the site teams.',
  },
};

export const REGISTRES_EN: Record<string, { titre: string; temps: [string, string, string] }> = {
  cao: {
    titre: 'What a turnkey agro-industrial contract demands',
    temps: [
      'A turnkey contract moves the risk. The client buys a processing capacity that works, not a sum of services. Whoever signs answers for design, procurement and construction, and for the gaps between the three.',
      'The discipline is settled early. Concept design fixes the technical principle, and with it most of the cost: whatever is left open at that moment is paid for later in variations. The capacity test is the moment of truth; it records what the installation holds on real material, not what the calculation note promised. Maintenance begins at the drawing board: a component that cannot be reached will not be serviced, and a spare that cannot be found on the continent stops the line.',
      'This company was incorporated for the Europe-West Africa corridor, on agro-industrial processing. Studies come before commitment, maintainability weighs in the arbitration alongside price, and handover is prepared from concept design onwards.',
    ],
  },
  'line-builder': {
    titre: 'Concept design is the nerve of the plant',
    temps: [
      'A production line is judged once running, when it is late to take it back. Almost every defect found at start-up was decided on paper, long before the first part.',
      'The discipline is to draw the flow before the machines. Where material enters, where it waits, where it is checked. A badly placed station imposes a movement on every cycle; repeated, that movement becomes the lost capacity of the workshop. Scheduling is thought through at the same moment: a balanced line is worth more than a fast, congested one. Then the question that gets forgotten: what becomes of the installation when the product changes?',
      'This company was founded alongside the construction business to hold that phase separately: configuration rather than special case, common frames, defined interfaces, modules replaceable without rebuilding the whole. What is configured here must stay repairable where the line is installed.',
    ],
  },
  drabair: {
    titre: 'Why foundations are owned',
    temps: [
      'Software always rests on layers it did not write. As long as they hold, nobody thinks about them. The day one changes price, terms or direction, the whole product moves with it.',
      'The discipline holds in two gestures. Know what you depend on: name the layers, their points of contact, what leaving would cost. Then choose what to keep in hand. Owning everything is waste; borrowing everything is handing over the keys. The line is drawn where the value passes: what sets the product apart is owned, what merely tools it is rented.',
      'The group set up its software workshop rather than acquiring one, and has owned the foundations from the start: storage, identity and data processing for the portfolio companies. Interfaces are written down; intentions are not.',
    ],
  },
  weavme: {
    titre: 'Booking is a problem of commitments kept',
    temps: [
      'Booking looks simple: a request, a resource, a confirmation. The difficulty is not taking the request, it is holding what was confirmed while everything around it moves.',
      'The discipline is that of a register. A resource cannot be promised twice; a confirmation must stay true after the cancellation that precedes it; a postponement propagates to everyone it concerns without anyone having to think about it. The trade is played in the rare cases: the overlap, the last-hour unavailability, the request arriving while the previous one is being answered. Those cases are not exceptions to be handled later.',
      'This product was born inside the group, on the foundations it owns: a confirmation is treated as a written commitment, traceable, reversible under known rules, never implicit. The service depends on no third party to keep running.',
    ],
  },
  ore: {
    titre: 'The grammar of location',
    temps: [
      'A building does not move. Everything that can be corrected later - the layout, the finishes, the tenant - gets corrected. Location does not.',
      'The discipline is to read three things before the price. Scarcity: what cannot be reproduced next door keeps its value when supply rises. Use value: a property is judged on what it allows day to day, not on its façade. Reversibility: heights, structure and access decide whether the building can change use when the district changes.',
      'The property arm of the group works on long holding: an asset kept through several cycles must be able to serve a purpose other than the one it was bought for. What the place allows is looked at before what it yields, and the restoration arbitration is taken in that order.',
    ],
  },
  scouts: {
    titre: 'What makes a signal worth acting on',
    temps: [
      'A useful signal is not a hunch, it is verifiable information arriving in time. Most introductions fail because they are too vague, too late, or off the point.',
      'Five criteria settle it. Precise: one company, one need, one contact, not a sector. Sourceable: you can say where the information comes from and how it was obtained. Actionable: there is a concrete step to take in the coming weeks. In scope: the need falls within the trades practised. Brought first: information already known to several is no longer information, it is market rumour.',
      'The scope is stated here: the trades of the group and the corridor it serves. The frame is put in writing before the exchange - what is expected, what counts as a business introduction and what does not - because an introduction is protected in writing or not at all.',
    ],
  },
  engagements: {
    titre: 'The doctrine of the corridor',
    temps: [
      'Linking two economic areas is not being present on both sides. A corridor exists only if something moves both ways, regularly, and for a long time.',
      'Three convictions make it tenable. Skill travels less well than equipment: it is trained on site or it does not settle. A flow going one way only is not a corridor but an outlet, and it stops at the first turn of the cycle. Duration is earned through maintenance, not through delivery: equipment that cannot be serviced locally stops being an asset and becomes a burden.',
      'The group is organised on that reading between Europe and West Africa: what is designed on one side must be repairable on the other, and spares as much as servicing tasks enter the technical choice, before signature.',
    ],
  },
  approche: {
    titre: 'Why this site publishes so few figures',
    temps: [
      'A young group is tempted to make up for its short history with figures. Announced targets, potential volumes, projections: numbers that look like facts without being any.',
      'The discipline is to publish only what is settled and verifiable. A filed figure can be checked by a third party; a projection can only be believed. Publishing the second as though it were the first asks for a trust that is not yet owed. This restraint has a cost: plainer pages than those of groups that communicate in intentions. It has an advantage: everything published here still holds true the following year.',
      'The group is built by successive incorporations, company after company, and its parent animates what it owns rather than managing it from a distance. What appears here is therefore limited to dated facts and filed accounts; the demonstration belongs to the works delivered.',
    ],
  },
};
