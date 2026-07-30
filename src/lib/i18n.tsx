import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Locale = 'fr' | 'en';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = 'owl.locale';

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Dictionnaire complet FR/EN. Toute chaîne rédactionnelle passe par ici.
 * Convention : clés séparées par '.', section.souskey.
 */
const dict: Record<Locale, Record<string, string>> = {
  fr: {
    // ---- Nav / Footer / Global ----
    'nav.groupe': 'Groupe',
    'nav.portefeuille': 'Portefeuille',
    'nav.metiers': 'Métiers',
    'nav.scouts': 'Scouts',
    'nav.journal': 'Journal',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'footer.tagline': 'Holding d’investissement et de développement - Paris.',
    'footer.approche': 'Approche',
    'footer.rejoindre': 'Rejoindre',
    'footer.engagements': 'Engagements',
    'footer.privacy': 'Politique de confidentialité',
    'footer.mentions': 'Mentions légales',
    'footer.terms': 'CGU',
    'footer.president': 'Président',
    'footer.rights': 'Tous droits réservés.',
    'footer.form': 'Société par actions simplifiée',
    'footer.siege': 'Siège social',
    'common.readMore': 'Comprendre notre modèle',
    'common.status.registration': '(en cours d’immatriculation)',
    'common.status.formation': '(en formation)',
    'common.status.constitution': '(en cours de constitution)',
    'common.status.partnership': '(en formation, en partenariat)',

    // ---- Accueil ----
    'home.eyebrow': 'HOLDING D’INVESTISSEMENT ET DE DÉVELOPPEMENT - PARIS',
    'home.hero.title': 'Là où l’industrie, le logiciel et le patrimoine se construisent ensemble.',
    'home.hero.subtitle':
      'Owl International structure un groupe intégré entre l’Europe et l’Afrique : des projets industriels clé en main, les logiciels qui les accélèrent, et les actifs immobiliers qui ancrent l’ensemble dans le temps long.',
    'home.model.number': '01',
    'home.model.section': 'Le Modèle',
    'home.model.title': 'Un conglomérat en miniature, construit dans l’ordre.',
    'home.model.body':
      'Chaque société du groupe renforce les autres. L’ingénierie nourrit le logiciel, le logiciel accélère l’ingénierie, et le patrimoine capitalise l’ensemble. Une fondation après l’autre.',
    'home.model.node.cao': 'CAO Industries livre des projets industriels clé en main.',
    'home.model.node.line': 'Line Builder, né du terrain, configure les usines dès l’avant-projet.',
    'home.model.node.drabair': 'Drabair Labs développe les technologies propriétaires du groupe.',
    'home.model.node.ore': 'Owl Real Estate convertit les résultats en actifs durables.',
    'home.model.node.holding': 'Owl International alloue le capital - et recommence.',

    'home.milestones.number': '02',
    'home.milestones.section': 'Jalons',
    'home.milestones.title': 'Nous publions notre construction telle qu’elle est.',
    'home.milestones.body': 'Ce que vous lisez ici est vérifiable au registre du commerce.',
    'home.milestones.2023': 'Immatriculation d’Owl International au RCS de Paris (978 849 230).',
    'home.milestones.2026a': 'Structuration du groupe en deux pôles ; constitution de CAO Industries engagée.',
    'home.milestones.2026b': 'Lancement de la structuration d’Owl Real Estate et de sa première opération dans le sud de la France.',
    'home.milestones.2026c': 'Ouverture du programme Owl Scouts.',
    'home.milestones.next':
      'À venir - immatriculation des entités du pôle opérationnel ; premiers déploiements après l’Afrique de l’Ouest : en Afrique de l’Est et dans le Sud de la France.',

    'home.poles.number': '03',
    'home.poles.section': 'Deux pôles',
    'home.poles.operational.title': 'Pôle Opérationnel',
    'home.poles.operational.body': 'Ingénierie industrielle et logiciel - CAO Industries, Drabair Labs, Line Builder, Weavme.',
    'home.poles.patrimonial.title': 'Pôle Patrimonial',
    'home.poles.patrimonial.body': 'Immobilier de long terme - Owl Real Estate.',
    'home.poles.cta1': 'Voir le portefeuille',
    'home.poles.cta2': 'Voir les métiers',

    'home.quote': '« La confiance ne se déclare pas. Elle se construit, opération après opération. »',

    // ---- Groupe ----
    'groupe.eyebrow': 'LE GROUPE',
    'groupe.title': 'Une holding animatrice, deux pôles complémentaires.',
    'groupe.intro':
      'Owl International est une société par actions simplifiée de droit français, immatriculée au Registre du commerce et des sociétés de Paris. Holding animatrice du groupe, elle définit la stratégie, pilote les filiales et conduit la politique d’investissement, autour de deux pôles complémentaires : un pôle opérationnel (ingénierie industrielle et logiciel) et un pôle patrimonial (immobilier de long terme).',
    'groupe.gouv.title': 'Gouvernance',
    'groupe.gouv.body':
      'Le groupe est dirigé par son fondateur, Arthur Draber, Président d’Owl International. La gouvernance privilégie des structures simples, des responsabilités claires et une grande rigueur juridique et comptable, avec l’appui de conseils externes - notaire, juristes, expertise comptable.',
    'groupe.ancrage.title': 'Ancrage',
    'groupe.ancrage.body':
      'Établi à Paris, le groupe développe ses activités en France et en Afrique, où se déploient ses projets industriels.',
    'groupe.orga.title': 'Organigramme',
    'groupe.orga.holding': 'Owl International',
    'groupe.orga.op': 'Pôle Opérationnel',
    'groupe.orga.pat': 'Pôle Patrimonial',
    'groupe.ceo.eyebrow': 'LETTRE DU PRÉSIDENT',
    'groupe.ceo.name': 'Arthur Draber',
    'groupe.ceo.role': 'Président, Owl International',
    'groupe.ceo.body':
      'J’ai créé Owl International avec une conviction simple : les décennies qui viennent se joueront à l’intersection de l’industrie, du logiciel et du lien entre l’Europe et l’Afrique. Plutôt que de courir après la taille, nous construisons dans l’ordre : des structures juridiques solides, des projets réels, des actifs durables. Ce site ne contient ni chiffre gonflé ni promesse - uniquement ce que nous faisons. Si cette manière de construire vous parle, écrivez-nous.',

    // ---- Portefeuille ----
    'portfolio.eyebrow': 'PORTEFEUILLE',
    'portfolio.title': 'Cinq entités, deux pôles, une même exigence.',
    'portfolio.intro':
      'Les entités du groupe sont présentées telles qu’elles sont - opérationnelles, en formation ou en cours de constitution.',
    'portfolio.covers': 'Ce que cela recouvre',
    'portfolio.cao.mission':
      'Contractant général de projets industriels clé en main (EPC : Engineering, Procurement, Construction), en France et en Afrique. Premier terrain de déploiement : l’Afrique de l’Ouest.',
    'portfolio.cao.p1': 'Études et conception d’installations industrielles.',
    'portfolio.cao.p2': 'Achats et sélection des équipements.',
    'portfolio.cao.p3': 'Pilotage de la construction jusqu’à la livraison clé en main.',
    'portfolio.drabair.mission': 'Société de recherche et développement logiciel du groupe.',
    'portfolio.drabair.p1': 'Technologies propriétaires du groupe.',
    'portfolio.drabair.p2': 'Socles logiciels partagés entre entités.',
    'portfolio.drabair.p3': 'Propriété intellectuelle conservée en interne.',
    'portfolio.line.mission': 'Éditeur d’une application de configuration d’usines et de lignes de production.',
    'portfolio.line.p1': 'Configuration d’usines et de lignes.',
    'portfolio.line.p2': 'Accélération des avant-projets industriels.',
    'portfolio.line.p3': 'Issu directement de l’expérience terrain du groupe.',
    'portfolio.weavme.mission':
      'Logiciel de gestion et de réservation développé en co-entreprise avec un partenaire du secteur, pour les agences et les métiers du booking.',
    'portfolio.weavme.p1': 'Co-entreprise avec un partenaire du secteur.',
    'portfolio.weavme.p2': 'Outil de gestion et de réservation.',
    'portfolio.weavme.p3': 'Marché : agences et métiers du booking.',
    'portfolio.ore.mission':
      'Véhicule d’investissement immobilier du groupe : actifs résidentiels et de rendement en emplacements centraux de villes françaises attractives. Une première opération est en cours de structuration dans le sud de la France.',
    'portfolio.ore.p1': 'Emplacement d’abord - actifs rares, en centre-ville.',
    'portfolio.ore.p2': 'Détention longue - pas d’achat-revente spéculatif.',
    'portfolio.ore.p3': 'Financement discipliné, validé avec partenaires bancaires et notariaux.',

    // ---- Métiers ----
    'metiers.eyebrow': 'MÉTIERS',
    'metiers.title': 'Trois savoir-faire, un même groupe.',
    'metiers.epc.title': 'Projets industriels clé en main (EPC)',
    'metiers.epc.body':
      'De l’étude à la livraison, en France et en Afrique. Une chaîne complète : conception, achat des équipements, construction, mise en service. Portée par CAO Industries.',
    'metiers.epc.cta': 'Voir CAO Industries',
    'metiers.soft.title': 'Logiciels industriels et propriétaires',
    'metiers.soft.body':
      'Des outils conçus par le groupe, pour le groupe et pour ses clients. Configuration d’usines, socles techniques partagés, technologies propriétaires. Portés par Drabair Labs, Line Builder et Weavme.',
    'metiers.soft.cta': 'Voir Drabair Labs · Line Builder · Weavme',
    'metiers.re.title': 'Immobilier de rendement et de long terme',
    'metiers.re.body':
      'Emplacements centraux, détention patiente, financement discipliné. Un patrimoine construit pour durer. Porté par Owl Real Estate.',
    'metiers.re.cta': 'Voir Owl Real Estate',

    // ---- Scouts ----
    'scouts.eyebrow': 'PROGRAMME OWL SCOUTS',
    'scouts.title': 'Vous voyez des opportunités. Nous savons les construire.',
    'scouts.subtitle':
      'Le programme Owl Scouts ouvre le groupe à un réseau d’apporteurs d’affaires : des personnes de terrain qui identifient des opportunités - projets industriels, foncier de qualité, clients pour nos logiciels - et sont intéressées à leur concrétisation.',
    'scouts.how.title': 'Comment ça marche',
    'scouts.how.01.t': 'Vous identifiez',
    'scouts.how.01.b':
      'Un projet industriel à construire, un bien immobilier remarquable, un client potentiel pour nos logiciels - en France ou en Afrique de l’Ouest.',
    'scouts.how.02.t': 'Nous qualifions',
    'scouts.how.02.b':
      'Le groupe étudie chaque signalement avec ses conseils, en confidentialité, et revient vers vous rapidement.',
    'scouts.how.03.t': 'Vous êtes intéressé au succès',
    'scouts.how.03.b':
      'Si l’opportunité se concrétise, votre apport est rémunéré dans le cadre d’un contrat d’apport d’affaires formalisé, dans le respect des réglementations propres à chaque domaine.',
    'scouts.honest.title': 'En toute transparence',
    'scouts.honest.body':
      'Le programme a ouvert en 2026. Nous ne publions ni nombre de scouts, ni montants : le réseau se construit, membre par membre, et chaque relation est contractualisée individuellement.',
    'scouts.form.title': 'Rejoindre le programme',
    'scouts.form.name': 'Nom complet',
    'scouts.form.email': 'Email',
    'scouts.form.phone': 'Téléphone (optionnel)',
    'scouts.form.country': 'Pays / région',
    'scouts.form.domain': 'Domaine d’opportunités',
    'scouts.form.domain.industrial': 'Projets industriels',
    'scouts.form.domain.realestate': 'Immobilier',
    'scouts.form.domain.software': 'Logiciels',
    'scouts.form.domain.other': 'Autre',
    'scouts.form.message': 'Parlez-nous de votre terrain de jeu',
    'scouts.form.consent':
      'J’accepte que mes données soient traitées par Owl International pour l’examen de ma candidature, conformément à la Politique de confidentialité.',
    'scouts.form.submit': 'Envoyer ma candidature',
    'scouts.form.sending': 'Envoi en cours…',
    'scouts.form.success': 'Candidature reçue. Nous revenons vers vous personnellement.',
    'scouts.form.error': 'Une erreur est survenue. Merci de réessayer, ou d’écrire à contact@internationalowl.com.',
    'scouts.form.required': 'Ce champ est requis.',
    'scouts.form.invalidEmail': 'Adresse email invalide.',
    'scouts.form.consentRequired': 'Merci de cocher la case de consentement.',
    'scouts.form.successTitle': 'Candidature reçue.',
    'scouts.form.successBody': 'Nous accusons réception manuellement. Une réponse individuelle vous parviendra sous quelques jours ouvrés.',
    'scouts.form.successAgain': 'Soumettre une autre candidature',
    'scouts.form.errorTitle': 'Envoi impossible.',
    'scouts.form.retry': 'Réessayer',
    'scouts.form.writeUs': 'Nous écrire directement',

    // ---- 404 ----
    'nf.eyebrow': 'ERREUR 404 - PAGE INTROUVABLE',
    'nf.title': 'Cette page n\'existe pas dans notre registre.',
    'nf.body': 'L\'adresse demandée ne correspond à aucune des pages que nous publions. Cela peut venir d\'un lien ancien, d\'une faute de saisie, ou d\'une page retirée du site.',
    'nf.path': 'Adresse demandée',
    'nf.actions': 'Que faire',
    'nf.home': 'Retour à l\'accueil',
    'nf.portfolio': 'Consulter le portefeuille',
    'nf.contact': 'Nous écrire',

    // ---- Journal ----
    'journal.eyebrow': 'JOURNAL DE CONSTRUCTION',
    'journal.title': 'Ce que nous construisons, à la date près.',
    'journal.body': 'Chaque entrée correspond à un fait vérifiable. Peu d’entrées, assumé.',
    'journal.2023.title': 'Immatriculation d’Owl International',
    'journal.2023.body': 'Création de la holding au RCS de Paris (978 849 230).',
    'journal.2026a.title': 'Structuration du groupe en deux pôles',
    'journal.2026a.body': 'Structuration du groupe en deux pôles ; constitution de CAO Industries engagée.',
    'journal.2026b.title': 'Structuration d’Owl Real Estate',
    'journal.2026b.body': 'Ouverture du chantier d’Owl Real Estate et lancement d’une première opération dans le sud de la France.',
    'journal.2026c.title': 'Ouverture du programme Owl Scouts',
    'journal.2026c.body': 'Ouverture officielle du réseau d’apporteurs d’affaires du groupe.',

    // ---- Approche ----
    'approche.eyebrow': 'APPROCHE',
    'approche.title': 'Trois principes qui gouvernent chaque décision.',
    'approche.p1.t': 'Exactitude',
    'approche.p1.b':
      'Ce site ne contient ni chiffre gonflé, ni référence fabriquée. Chaque information publiée correspond à la réalité juridique et opérationnelle du groupe à la date de mise à jour.',
    'approche.p2.t': 'Discipline',
    'approche.p2.b':
      'Chaque projet est structuré avec des conseils externes - notaires, juristes, experts-comptables - avant tout engagement. La solidité des fondations passe avant la vitesse.',
    'approche.p3.t': 'Long terme',
    'approche.p3.b':
      'Owl International se construit pour durer : réinvestissement des résultats, structures simples, endettement maîtrisé.',
    'approche.not.title': 'Ce que nous ne faisons pas',
    'approche.not.body':
      'Nous ne publions pas de projections. Nous ne promettons pas de rendements. Nous ne levons pas de fonds auprès du public. Nous n’annonçons pas ce qui n’est pas signé. Cette page restera courte : c’est voulu.',
    'approche.sig.name': 'Arthur Draber',
    'approche.sig.role': 'Président, Owl International',

    // ---- Rejoindre ----
    'rejoindre.eyebrow': 'REJOINDRE',
    'rejoindre.title': 'Aucune offre ouverte à ce jour. Les candidatures spontanées de profils exceptionnels sont lues avec attention.',
    'rejoindre.body':
      'Le groupe est en phase de structuration. Nous ne publions pas d’offres tant qu’un poste n’est pas prêt à être pourvu. Les profils commercial, ingénierie, logiciel, construction, immobilier peuvent écrire à contact@internationalowl.com.',
    'rejoindre.culture.title': 'Notre culture',
    'rejoindre.culture.1': 'Exigence - sur les faits, sur le droit, sur l’exécution.',
    'rejoindre.culture.2': 'Construction longue - les meilleures histoires se écrivent en années.',
    'rejoindre.culture.3': 'Terrain France–Afrique - la rigueur d’ici, l’audace de là-bas.',
    'rejoindre.culture.4': 'Goût des fondations - préférer bâtir peu et bien.',
    'rejoindre.scouts':
      'Vous êtes un profil apporteur d’affaires ? Le programme Owl Scouts est fait pour vous.',
    'rejoindre.scouts.cta': 'Découvrir Owl Scouts',
    'rejoindre.contact.cta': 'Écrire à Owl International',

    // ---- Engagements ----
    'engagements.eyebrow': 'ENGAGEMENTS',
    'engagements.title': 'Ce à quoi nous nous engageons - sans chiffre, sans slogan.',
    'engagements.1.t': 'Industrialisation de l’Afrique de l’Ouest',
    'engagements.1.b': 'Contribuer à des projets qui créent de la valeur durable, dans le respect des cadres locaux.',
    'engagements.2.t': 'Emploi et compétences locales',
    'engagements.2.b': 'Former, embaucher et transmettre sur chaque projet, avec les personnes et les entreprises du territoire.',
    'engagements.3.t': 'Technologies conçues et détenues en Europe',
    'engagements.3.b': 'Développer et conserver la propriété intellectuelle du groupe en interne.',
    'engagements.4.t': 'Patrimoine construit pour durer',
    'engagements.4.b': 'Choisir des actifs de qualité, en emplacements centraux, financés avec prudence.',

    // ---- Contact ----
    'contact.eyebrow': 'CONTACT',
    'contact.title': 'Trois portes d’entrée. Un seul interlocuteur.',
    'contact.intro': 'contact@internationalowl.com - écrivez à l’une des adresses ci-dessous, l’objet sera pré-rempli.',
    'contact.bank.t': 'Partenaires bancaires et notariaux',
    'contact.bank.b': 'Nous travaillons avec des conseils exigeants et cherchons des partenaires de même niveau.',
    'contact.bank.cta': 'Contacter le pôle finance',
    'contact.client.t': 'Clients industriels',
    'contact.client.b': 'Un projet d’installation ou d’extension en France ou en Afrique ? Parlons process et ingénierie.',
    'contact.client.cta': 'Contacter le pôle industriel',
    'contact.partner.t': 'Partenariats et opportunités',
    'contact.partner.b': 'Foncier, co-développement, technologies : nous étudions toute proposition sérieuse.',
    'contact.partner.cta': 'Proposer un partenariat',
    'contact.partner.link': 'Voir aussi le programme Owl Scouts.',
    'contact.address.title': 'Adresse',
    'contact.address.body': 'Owl International - 47 boulevard de Courcelles, 75008 Paris, France.',

    // ---- Pages légales ----
    'legal.eyebrow': 'MENTIONS LÉGALES',
    'legal.title': 'Mentions légales',
    'legal.editor.title': 'Éditeur du site',
    'legal.editor.body':
      'Owl International, société par actions simplifiée immatriculée au RCS de Paris sous le numéro 978 849 230. Siège social : 47 boulevard de Courcelles, 75008 Paris, France. Président et directeur de la publication : Arthur Draber.',
    'legal.contact.title': 'Contact',
    'legal.contact.body': 'contact@internationalowl.com',
    'legal.host.title': 'Hébergement',
    'legal.host.body': 'Vercel Inc. - [ADRESSE ET COORDONNÉES DE L’HÉBERGEUR À CONFIRMER]',
    'legal.ip.title': 'Propriété intellectuelle',
    'legal.ip.body':
      'L’ensemble des contenus de ce site (textes, images, structure, code) est la propriété d’Owl International ou de ses ayants droit. Toute reproduction sans autorisation écrite est interdite.',

    'privacy.eyebrow': 'CONFIDENTIALITÉ',
    'privacy.title': 'Politique de confidentialité',
    'privacy.intro':
      'Owl International attache la plus grande importance au respect de vos données personnelles. Cette page décrit précisément le seul traitement mis en œuvre sur ce site.',
    'privacy.tracking.title': 'Aucun cookie de traçage, aucun analytics',
    'privacy.tracking.body':
      'Ce site n’utilise aucun cookie de traçage, aucun outil d’analyse d’audience tiers, aucun pixel publicitaire. Aucune bannière n’est donc nécessaire.',
    'privacy.data.title': 'Données collectées via le programme Owl Scouts',
    'privacy.data.body':
      'La seule collecte de données personnelles concerne le formulaire de candidature au programme Owl Scouts. Sont collectés : nom complet, adresse email, téléphone (facultatif), pays/région, domaine d’opportunités, message libre et horodatage de la candidature.',
    'privacy.purpose.title': 'Finalité',
    'privacy.purpose.body':
      'Ces données sont traitées à l’unique fin d’examiner votre candidature au programme Owl Scouts et de reprendre contact avec vous.',
    'privacy.basis.title': 'Base légale',
    'privacy.basis.body':
      'Consentement explicite de la personne concernée, matérialisé par la case à cocher obligatoire du formulaire (article 6.1.a du RGPD).',
    'privacy.storage.title': 'Durée de conservation',
    'privacy.storage.body':
      'Les données sont conservées vingt-quatre (24) mois à compter du dernier contact, puis supprimées.',
    'privacy.share.title': 'Destinataires',
    'privacy.share.body':
      'Les données sont accessibles aux seules équipes internes d’Owl International et à ses prestataires techniques nécessaires au fonctionnement du site (hébergeur, base de données). Aucun transfert commercial à un tiers n’est effectué.',
    'privacy.rights.title': 'Vos droits',
    'privacy.rights.body':
      'Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Pour exercer ces droits, écrivez à contact@internationalowl.com. Vous pouvez également introduire une réclamation auprès de la CNIL.',
    'privacy.update.title': 'Mise à jour',
    'privacy.update.body': 'Cette politique peut être mise à jour. La version en ligne fait foi.',

    'terms.eyebrow': 'CGU',
    'terms.title': 'Conditions générales d’utilisation',
    'terms.intro':
      'L’accès et l’utilisation de ce site impliquent l’acceptation pleine et entière des présentes conditions.',
    'terms.object.title': 'Objet',
    'terms.object.body':
      'Le présent site présente les activités du groupe Owl International à titre d’information. Il ne constitue ni une offre au public de titres financiers, ni une sollicitation d’investissement.',
    'terms.responsibility.title': 'Responsabilité',
    'terms.responsibility.body':
      'Owl International s’efforce d’assurer l’exactitude des informations diffusées mais ne peut en garantir l’exhaustivité à tout instant. La responsabilité d’Owl International ne saurait être engagée en cas d’erreur, d’omission ou d’indisponibilité du service.',
    'terms.law.title': 'Droit applicable',
    'terms.law.body':
      'Les présentes conditions sont soumises au droit français. Tout litige relève de la compétence des tribunaux du ressort de Paris, sous réserve des dispositions impératives applicables aux consommateurs.',
  },
  en: {
    // ---- Nav / Footer / Global ----
    'nav.groupe': 'Group',
    'nav.portefeuille': 'Portfolio',
    'nav.metiers': 'Business lines',
    'nav.scouts': 'Scouts',
    'nav.journal': 'Journal',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'footer.tagline': 'Investment and development holding company - Paris.',
    'footer.approche': 'Approach',
    'footer.rejoindre': 'Join',
    'footer.engagements': 'Commitments',
    'footer.privacy': 'Privacy policy',
    'footer.mentions': 'Legal notice',
    'footer.terms': 'Terms',
    'footer.president': 'President',
    'footer.rights': 'All rights reserved.',
    'footer.form': 'Société par actions simplifiée',
    'footer.siege': 'Registered office',
    'common.readMore': 'Understand our model',
    'common.status.registration': '(registration under way)',
    'common.status.formation': '(under formation)',
    'common.status.constitution': '(under constitution)',
    'common.status.partnership': '(under formation, in partnership)',

    // ---- Home ----
    'home.eyebrow': 'INVESTMENT & DEVELOPMENT HOLDING - PARIS',
    'home.hero.title': 'Where industry, software and real estate are built together.',
    'home.hero.subtitle':
      'Owl International structures an integrated group between Europe and Africa: turnkey industrial projects, the software that accelerates them, and the real-estate assets that anchor everything for the long term.',
    'home.model.number': '01',
    'home.model.section': 'The Model',
    'home.model.title': 'A miniature conglomerate, built in the right order.',
    'home.model.body':
      'Every company in the group strengthens the others. Engineering feeds the software; software accelerates engineering; real estate capitalises the whole. One foundation at a time.',
    'home.model.node.cao': 'CAO Industries delivers turnkey industrial projects.',
    'home.model.node.line': 'Line Builder, born on site, configures plants from the pre-project phase.',
    'home.model.node.drabair': 'Drabair Labs develops the group’s proprietary technologies.',
    'home.model.node.ore': 'Owl Real Estate turns results into lasting assets.',
    'home.model.node.holding': 'Owl International allocates capital - and starts again.',

    'home.milestones.number': '02',
    'home.milestones.section': 'Milestones',
    'home.milestones.title': 'We publish our construction as it stands.',
    'home.milestones.body': 'What you read here is verifiable at the commercial registry.',
    'home.milestones.2023': 'Registration of Owl International at the Paris Commercial Register (978 849 230).',
    'home.milestones.2026a': 'Structuring of the group into two divisions; incorporation of CAO Industries engaged.',
    'home.milestones.2026b': 'Structuring of Owl Real Estate and launch of its first operation in the south of France.',
    'home.milestones.2026c': 'Launch of the Owl Scouts programme.',
    'home.milestones.next':
      'Upcoming - incorporation of the operational entities; first deployments beyond West Africa: East Africa and the South of France.',

    'home.poles.number': '03',
    'home.poles.section': 'Two divisions',
    'home.poles.operational.title': 'Operational Division',
    'home.poles.operational.body': 'Industrial engineering and software - CAO Industries, Drabair Labs, Line Builder, Weavme.',
    'home.poles.patrimonial.title': 'Real-Estate Division',
    'home.poles.patrimonial.body': 'Long-term real estate - Owl Real Estate.',
    'home.poles.cta1': 'View portfolio',
    'home.poles.cta2': 'View business lines',

    'home.quote': '“Trust is not declared. It is built, one operation at a time.”',

    // ---- Group ----
    'groupe.eyebrow': 'THE GROUP',
    'groupe.title': 'A holding company at the helm - two complementary divisions.',
    'groupe.intro':
      'Owl International is a French société par actions simplifiée, registered at the Paris Commercial Register. As the group holding company, it sets strategy, oversees the subsidiaries and leads the investment policy across two complementary divisions: an operational one (industrial engineering and software) and a real-estate one (long-term property).',
    'groupe.gouv.title': 'Governance',
    'groupe.gouv.body':
      'The group is led by its founder, Arthur Draber, President of Owl International. Governance favours simple structures, clear responsibilities and strict legal and accounting discipline, with the support of external advisors - notary, lawyers, chartered accountants.',
    'groupe.ancrage.title': 'Anchor',
    'groupe.ancrage.body':
      'Based in Paris, the group develops its activities in France and in Africa, where its industrial projects are deployed.',
    'groupe.orga.title': 'Corporate structure',
    'groupe.orga.holding': 'Owl International',
    'groupe.orga.op': 'Operational Division',
    'groupe.orga.pat': 'Real-Estate Division',
    'groupe.ceo.eyebrow': 'LETTER FROM THE PRESIDENT',
    'groupe.ceo.name': 'Arthur Draber',
    'groupe.ceo.role': 'President, Owl International',
    'groupe.ceo.body':
      'I founded Owl International with a simple conviction: the coming decades will be played at the intersection of industry, software, and the bridge between Europe and Africa. Rather than chasing size, we build in the right order: solid legal structures, real projects, lasting assets. This website contains no inflated figures and no promises - only what we do. If this way of building resonates with you, write to us.',

    // ---- Portfolio ----
    'portfolio.eyebrow': 'PORTFOLIO',
    'portfolio.title': 'Five entities, two divisions, one standard.',
    'portfolio.intro':
      'The group’s entities are presented as they are - operational, under formation, or under constitution.',
    'portfolio.covers': 'What it covers',
    'portfolio.cao.mission':
      'General contractor for turnkey industrial projects (EPC - Engineering, Procurement, Construction), in France and in Africa. First deployment field: West Africa.',
    'portfolio.cao.p1': 'Design and engineering of industrial facilities.',
    'portfolio.cao.p2': 'Procurement and selection of equipment.',
    'portfolio.cao.p3': 'Construction management through to turnkey delivery.',
    'portfolio.drabair.mission': 'The group’s software research and development company.',
    'portfolio.drabair.p1': 'Proprietary technologies of the group.',
    'portfolio.drabair.p2': 'Shared software foundations across entities.',
    'portfolio.drabair.p3': 'Intellectual property kept in-house.',
    'portfolio.line.mission': 'Publisher of a plant and production-line configuration application.',
    'portfolio.line.p1': 'Configuration of plants and lines.',
    'portfolio.line.p2': 'Acceleration of industrial pre-projects.',
    'portfolio.line.p3': 'Directly born of the group’s field experience.',
    'portfolio.weavme.mission':
      'Booking and management software developed as a joint venture with a sector partner, for agencies and booking professions.',
    'portfolio.weavme.p1': 'Joint venture with a sector partner.',
    'portfolio.weavme.p2': 'Booking and management tool.',
    'portfolio.weavme.p3': 'Market: agencies and booking professions.',
    'portfolio.ore.mission':
      'The group’s real-estate investment vehicle: residential and yield assets in central locations of attractive French cities. A first operation is under structuring in the south of France.',
    'portfolio.ore.p1': 'Location first - rare, city-centre assets.',
    'portfolio.ore.p2': 'Long ownership - no speculative flipping.',
    'portfolio.ore.p3': 'Disciplined financing, validated with banking and notary partners.',

    // ---- Business lines ----
    'metiers.eyebrow': 'BUSINESS LINES',
    'metiers.title': 'Three crafts, one group.',
    'metiers.epc.title': 'Turnkey industrial projects (EPC)',
    'metiers.epc.body':
      'From design to delivery, in France and in Africa. A full chain: engineering, procurement, construction, commissioning. Delivered by CAO Industries.',
    'metiers.epc.cta': 'See CAO Industries',
    'metiers.soft.title': 'Industrial and proprietary software',
    'metiers.soft.body':
      'Tools designed by the group, for the group and its clients. Plant configuration, shared technical foundations, proprietary technologies. Delivered by Drabair Labs, Line Builder and Weavme.',
    'metiers.soft.cta': 'See Drabair Labs · Line Builder · Weavme',
    'metiers.re.title': 'Yield and long-term real estate',
    'metiers.re.body':
      'Central locations, patient ownership, disciplined financing. Assets built to last. Delivered by Owl Real Estate.',
    'metiers.re.cta': 'See Owl Real Estate',

    // ---- Scouts ----
    'scouts.eyebrow': 'OWL SCOUTS PROGRAMME',
    'scouts.title': 'You see opportunities. We know how to build them.',
    'scouts.subtitle':
      'The Owl Scouts programme opens the group to a network of business scouts: people on the ground who identify opportunities - industrial projects, quality real estate, clients for our software - and who share an interest in seeing them through.',
    'scouts.how.title': 'How it works',
    'scouts.how.01.t': 'You identify',
    'scouts.how.01.b':
      'An industrial project to build, a remarkable real-estate asset, a potential client for our software - in France or in West Africa.',
    'scouts.how.02.t': 'We qualify',
    'scouts.how.02.b': 'The group reviews every lead with its advisors, in confidence, and gets back to you swiftly.',
    'scouts.how.03.t': 'You share in the success',
    'scouts.how.03.b':
      'If the opportunity materialises, your contribution is rewarded through a formal business-introducer agreement, in compliance with the regulations of each field.',
    'scouts.honest.title': 'In full transparency',
    'scouts.honest.body':
      'The programme opened in 2026. We do not publish scout counts or amounts: the network is built member by member, and every relationship is contracted individually.',
    'scouts.form.title': 'Apply to the programme',
    'scouts.form.name': 'Full name',
    'scouts.form.email': 'Email',
    'scouts.form.phone': 'Phone (optional)',
    'scouts.form.country': 'Country / region',
    'scouts.form.domain': 'Opportunity area',
    'scouts.form.domain.industrial': 'Industrial projects',
    'scouts.form.domain.realestate': 'Real estate',
    'scouts.form.domain.software': 'Software',
    'scouts.form.domain.other': 'Other',
    'scouts.form.message': 'Tell us about your playing field',
    'scouts.form.consent':
      'I agree that my data may be processed by Owl International to review my application, in accordance with the Privacy Policy.',
    'scouts.form.submit': 'Send my application',
    'scouts.form.sending': 'Sending…',
    'scouts.form.success': 'Application received. We will get back to you personally.',
    'scouts.form.error': 'An error occurred. Please try again, or write to contact@internationalowl.com.',
    'scouts.form.required': 'This field is required.',
    'scouts.form.invalidEmail': 'Invalid email address.',
    'scouts.form.consentRequired': 'Please tick the consent box.',
    'scouts.form.successTitle': 'Application received.',
    'scouts.form.successBody': 'We acknowledge receipt manually. An individual reply will reach you within a few working days.',
    'scouts.form.successAgain': 'Submit another application',
    'scouts.form.errorTitle': 'Submission failed.',
    'scouts.form.retry': 'Try again',
    'scouts.form.writeUs': 'Write to us directly',

    // ---- 404 ----
    'nf.eyebrow': 'ERROR 404 - PAGE NOT FOUND',
    'nf.title': 'This page is not part of our record.',
    'nf.body': 'The requested address does not match any of the pages we publish. It may be an old link, a typo, or a page that has been retired.',
    'nf.path': 'Requested address',
    'nf.actions': 'What to do',
    'nf.home': 'Back to home',
    'nf.portfolio': 'View the portfolio',
    'nf.contact': 'Write to us',

    // ---- Journal ----
    'journal.eyebrow': 'CONSTRUCTION JOURNAL',
    'journal.title': 'What we are building, to the date.',
    'journal.body': 'Each entry corresponds to a verifiable fact. Few entries - by design.',
    'journal.2023.title': 'Registration of Owl International',
    'journal.2023.body': 'Creation of the holding at the Paris Commercial Register (978 849 230).',
    'journal.2026a.title': 'Structuring of the group into two divisions',
    'journal.2026a.body': 'Structuring of the group into two divisions; incorporation of CAO Industries under way.',
    'journal.2026b.title': 'Structuring of Owl Real Estate',
    'journal.2026b.body': 'Structuring of Owl Real Estate and launch of a first operation in the south of France.',
    'journal.2026c.title': 'Launch of the Owl Scouts programme',
    'journal.2026c.body': 'Official opening of the group’s business-scout network.',

    // ---- Approach ----
    'approche.eyebrow': 'APPROACH',
    'approche.title': 'Three principles that govern every decision.',
    'approche.p1.t': 'Accuracy',
    'approche.p1.b':
      'This website contains no inflated figures and no fabricated references. Every piece of information published matches the legal and operational reality of the group as of the last update.',
    'approche.p2.t': 'Discipline',
    'approche.p2.b':
      'Every project is structured with external advisors - notaries, lawyers, chartered accountants - before any commitment. Solid foundations come before speed.',
    'approche.p3.t': 'Long term',
    'approche.p3.b': 'Owl International is built to last: reinvested earnings, simple structures, disciplined debt.',
    'approche.not.title': 'What we do not do',
    'approche.not.body':
      'We do not publish projections. We do not promise returns. We do not raise funds from the public. We do not announce what is not signed. This page will stay short - by design.',
    'approche.sig.name': 'Arthur Draber',
    'approche.sig.role': 'President, Owl International',

    // ---- Join ----
    'rejoindre.eyebrow': 'JOIN',
    'rejoindre.title': 'No open position today. Spontaneous applications from exceptional profiles are read with care.',
    'rejoindre.body':
      'The group is being structured. We do not publish job openings until a role is ready to be filled. Commercial, engineering, software, construction and real-estate profiles may write to contact@internationalowl.com.',
    'rejoindre.culture.title': 'Our culture',
    'rejoindre.culture.1': 'Demanding - on the facts, on the law, on execution.',
    'rejoindre.culture.2': 'Long build - the best stories are written in years.',
    'rejoindre.culture.3': 'France–Africa field - the rigour of here, the audacity of there.',
    'rejoindre.culture.4': 'A taste for foundations - build less, build well.',
    'rejoindre.scouts': 'Are you a business-scout profile? The Owl Scouts programme is designed for you.',
    'rejoindre.scouts.cta': 'Discover Owl Scouts',
    'rejoindre.contact.cta': 'Write to Owl International',

    // ---- Commitments ----
    'engagements.eyebrow': 'COMMITMENTS',
    'engagements.title': 'What we commit to - without a figure, without a slogan.',
    'engagements.1.t': 'Industrialisation of West Africa',
    'engagements.1.b': 'Contribute to projects that create lasting value, within local frameworks.',
    'engagements.2.t': 'Local employment and skills',
    'engagements.2.b': 'Train, hire and transfer knowledge on every project, with local people and businesses.',
    'engagements.3.t': 'Technologies designed and owned in Europe',
    'engagements.3.b': 'Develop and retain the group’s intellectual property in-house.',
    'engagements.4.t': 'Real estate built to last',
    'engagements.4.b': 'Choose quality assets, in central locations, financed prudently.',

    // ---- Contact ----
    'contact.eyebrow': 'CONTACT',
    'contact.title': 'Three entry points. One interlocutor.',
    'contact.intro': 'contact@internationalowl.com - write to one of the addresses below; the subject line will be pre-filled.',
    'contact.bank.t': 'Banking and notary partners',
    'contact.bank.b': 'We work with demanding advisors and seek partners of the same calibre.',
    'contact.bank.cta': 'Contact the finance office',
    'contact.client.t': 'Industrial clients',
    'contact.client.b': 'A new plant or an extension in France or in Africa? Let’s talk process and engineering.',
    'contact.client.cta': 'Contact the industrial office',
    'contact.partner.t': 'Partnerships and opportunities',
    'contact.partner.b': 'Land, co-development, technologies: we study every serious proposal.',
    'contact.partner.cta': 'Suggest a partnership',
    'contact.partner.link': 'See also the Owl Scouts programme.',
    'contact.address.title': 'Address',
    'contact.address.body': 'Owl International - 47 boulevard de Courcelles, 75008 Paris, France.',

    // ---- Legal ----
    'legal.eyebrow': 'LEGAL NOTICE',
    'legal.title': 'Legal notice',
    'legal.editor.title': 'Publisher',
    'legal.editor.body':
      'Owl International, a French société par actions simplifiée registered at the Paris Commercial Register under number 978 849 230. Registered office: 47 boulevard de Courcelles, 75008 Paris, France. President and publication director: Arthur Draber.',
    'legal.contact.title': 'Contact',
    'legal.contact.body': 'contact@internationalowl.com',
    'legal.host.title': 'Hosting',
    'legal.host.body': 'Vercel Inc. - [HOSTING PROVIDER ADDRESS AND CONTACT TO BE CONFIRMED]',
    'legal.ip.title': 'Intellectual property',
    'legal.ip.body':
      'All content on this website (text, images, structure, code) is the property of Owl International or its rights-holders. Any reproduction without prior written consent is prohibited.',

    'privacy.eyebrow': 'PRIVACY',
    'privacy.title': 'Privacy policy',
    'privacy.intro':
      'Owl International attaches the utmost importance to the protection of your personal data. This page describes precisely the only processing operation carried out on this site.',
    'privacy.tracking.title': 'No tracking cookies, no analytics',
    'privacy.tracking.body':
      'This site uses no tracking cookies, no third-party analytics tool, no advertising pixel. No banner is therefore required.',
    'privacy.data.title': 'Data collected through the Owl Scouts programme',
    'privacy.data.body':
      'The only collection of personal data concerns the application form of the Owl Scouts programme. The following data is collected: full name, email address, phone number (optional), country/region, opportunity area, free-text message, and application timestamp.',
    'privacy.purpose.title': 'Purpose',
    'privacy.purpose.body':
      'This data is processed for the sole purpose of reviewing your application to the Owl Scouts programme and getting back to you.',
    'privacy.basis.title': 'Legal basis',
    'privacy.basis.body':
      'Explicit consent of the data subject, materialised by the mandatory tick box of the form (Article 6.1.a of the GDPR).',
    'privacy.storage.title': 'Retention',
    'privacy.storage.body':
      'Data is retained for twenty-four (24) months from the last contact, then deleted.',
    'privacy.share.title': 'Recipients',
    'privacy.share.body':
      'The data is accessible only to Owl International’s internal teams and to the technical providers required to operate the site (hosting, database). No commercial transfer to a third party takes place.',
    'privacy.rights.title': 'Your rights',
    'privacy.rights.body':
      'You have a right of access, rectification, erasure, restriction, objection and portability of your data. To exercise these rights, write to contact@internationalowl.com. You may also lodge a complaint with the CNIL.',
    'privacy.update.title': 'Update',
    'privacy.update.body': 'This policy may be updated. The online version prevails.',

    'terms.eyebrow': 'TERMS',
    'terms.title': 'Terms of use',
    'terms.intro': 'Accessing and using this site implies full acceptance of these terms.',
    'terms.object.title': 'Purpose',
    'terms.object.body':
      'This website presents the activities of the Owl International group for information purposes. It does not constitute a public offering of financial securities, nor a solicitation to invest.',
    'terms.responsibility.title': 'Responsibility',
    'terms.responsibility.body':
      'Owl International strives to ensure the accuracy of the information published but cannot guarantee its exhaustiveness at all times. Owl International’s liability cannot be engaged for any error, omission or service unavailability.',
    'terms.law.title': 'Applicable law',
    'terms.law.body':
      'These terms are governed by French law. Any dispute falls under the jurisdiction of the courts of Paris, subject to the mandatory provisions applicable to consumers.',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'fr';
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    return stored === 'en' || stored === 'fr' ? stored : 'fr';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, l);
  };

  const t = (key: string) => dict[locale][key] ?? dict.fr[key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
};
