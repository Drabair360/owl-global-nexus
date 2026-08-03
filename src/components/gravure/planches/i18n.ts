import type { PlancheMeta } from './index';

/**
 * CABINET — VERSION ANGLAISE DES PLANCHES.
 *
 * Réécriture de registre institutionnel, pas traduction littérale.
 * Les termes de convention du dossier restent en français quand c'est
 * l'usage savant (« catalogue raisonné », « registre ») ; les vocabulaires
 * techniques passent en anglais de métier (portal frame, purlin, gear train).
 * La description anglaise est une description d'accessibilité resserrée :
 * elle donne le sujet, les figures et le rehaut de laiton.
 */
export const PLANCHES_EN: Record<string, { title: string; desc: string }> = {
  I: {
    title: 'Cross section of a reference industrial unit',
    desc:
      'Line engraving, three figures. Figure 1: cross section of a steel portal-frame building from founding soil to ridge - strata of made ground, natural ground and founding soil, pad footings on blinding concrete tied by a ground beam, slab build-up with hardcore, membrane, insulation and expansion joint, portal columns on base plates with holdown bolts and shear key, haunched rafters, Z purlins on cleats, side rails, double-skin cladding, cross bracing, corbel-mounted crane runway with hoist, gutter and rainwater downpipe. The ground line is the single brass highlight. Figure 2: enlarged detail of the haunch-to-rafter connection - end plate, bolt rows, stiffeners and welding symbols. Figure 3: setting-out plan with grid lines A, B, C, bays 1 to 3 and section line A-A.',
  },
  II: {
    title: 'The complete project life cycle',
    desc:
      'Line engraving, a seven-stage frieze of an industrial project life cycle, each stage carried by an emblem drawn in working-drawing language: concept design, engineering, procurement, construction and erection, capacity testing, commissioning, preventive maintenance. A brass thread links the seven stages in order and closes with a single loop - maintenance returning to design, the only upstream feedback on the sheet. Dimension chains stand for the programme; all figures are drawing conventions, never operating data.',
  },
  III: {
    title: 'Line configurator, output CFG-A',
    desc:
      'Line engraving, three figures showing the configurator output for a single milling line, read strictly left to right from raw material to packed product. Figure 1: six named zones on three levels - process at the centre in heavy line, dust extraction above in fine line, utilities below in chain line - with a recycling loop returning screening rejects upstream. Every item carries a short tag only; full designations live in the margin schedules. Figure 2: the configurator matrix, six module families against three lines, the retained column alone highlighted in brass as CFG-A. Figure 3: variants on the common tapping point and a symbolic material balance, with no operating figures.',
  },
  IV: {
    title: 'The gear train of the group',
    desc:
      'Line engraving, two figures and two details in which the organisation of the group is drawn as a workshop gear train. Figure 1: two involute spur gears in mesh at the same module, pitch circles in chain line touching at the pitch point, base circles dashed, line of action tangent to both base circles, pressure angle marked; details give face width and backlash. Figure 2: a standard kinematic diagram - shafts as heavy lines, gears reduced to pitch circles, bearings and frame hatched. The common intermediate shaft is the only brass highlight. Two facing margin schedules read line by line: the mechanical member on the left, what it stands for in the group on the right.',
  },
  V: {
    title: 'Commitment chart, Ibry graph',
    desc:
      'Line engraving in the manner of an Ibry train graph: time along one axis, stages of commitment along the other, each undertaking a sloped line whose gradient states its pace. Crossings, waits and resolutions are read directly. The resolution segment is the single brass highlight. Margin schedules carry the designations; the drawing carries short tags and convention marks only, with no dates, amounts or rates.',
  },
  VI: {
    title: 'Reference building ORE-1',
    desc:
      'Line engraving, three figures on a stone building of traditional construction. Figure 1: elevation and section - coursed stonework with staggered joints, toothed quoins, three-course corbelled génoise, canal tiles, traditional roof carpentry and a barrel vault below. Figure 2: bay detail. Figure 3: the holding section in three vignettes - acquisition, restoration, occupation - each drawn with its own convention. Stone and timber poché are reserved to this sheet. The entrance threshold is the single brass highlight. No amount, rate or share of ownership appears.',
  },
  VII: {
    title: 'Flow diagram of the group model',
    desc:
      'Line engraving drawn as a hydraulic schematic: the head of the group at the centre, five medallions around it referring to the sheets of the dossier, and six typed flows named by their nature. Figure 2 is the legend of flow types; figure 3 is the regulator. The closed brass loop is the circuit of the model and the single highlight. Flows are named or noted in symbols, never quantified: no amount, rate or share of ownership appears.',
  },
  VIII: {
    title: 'General layout of the reference unit',
    desc:
      'Line engraving, general layout plan on the grid of the cross section - lines A, B, C and bays 1 to 6 at constant spacing. The milling line of sheet III is drawn in place in the hall, post by post; section line A-A is marked with heavy ends and viewing arrows towards sheet I; the roof array of sheet IX covers the north slope. The forward flow - intake, silos, hall, packing, palletising, store, loading docks - is one continuous brass gesture with direction chevrons, and never crosses the soiled circuit drawn in broken line. Setting out is symbolic; no figures are given.',
  },
  IX: {
    title: 'Rooftop power array',
    desc:
      'Line engraving of a rooftop photovoltaic array on the pitched roof of sheet I: profiled steel decking on Z purlins, rails fixed to the deck ribs, modules in portrait rows with edge and ridge setbacks, cable trays, string routing and the connection point. The connecting line is the single brass highlight. Margin schedules carry the designations; the drawing carries short tags and symbolic setting out only.',
  },
};

/** Métadonnées de planche dans la langue de lecture. */
export const metaFor = (meta: PlancheMeta, locale: string) =>
  locale === 'en' && PLANCHES_EN[meta.numeral]
    ? { ...meta, ...PLANCHES_EN[meta.numeral] }
    : meta;

/** Préfixe de légende de planche. */
export const plancheLegende = (numeral: string, title: string, locale: string) =>
  locale === 'en' ? `Plate ${numeral} - ${title}` : `Planche ${numeral} - ${title}`;
