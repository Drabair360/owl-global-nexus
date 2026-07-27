# Ce qui reste à implémenter du plan complet

État actuel : la structure de base est en place (13 pages, i18n FR/EN, formulaire Scouts branché sur la base, redirections 301, sitemap, `index.html` SEO de base, footer/mentions). Il reste principalement des finitions de contenu, de design « wow » et de SEO institutionnel.

## 1. SEO institutionnel avancé
- Balises `hreflang` FR/EN sur chaque page (actuellement absentes).
- `og:image` dédiée (visuel institutionnel 1200×630) — actuellement aucune image sociale.
- JSON-LD étendu : `BreadcrumbList` par page, `WebSite` + `SearchAction`, `Person` pour Arthur Draber (dirigeant), `Organization` enrichi avec `sameAs` (LinkedIn), `foundingDate`, `founder`.
- `<title>` et meta description spécifiques par page injectés via `useSEO` avec mots-clés cibles (holding France-Afrique, EPC industriel, immobilier patrimonial, logiciel propriétaire).
- Génération dynamique du `sitemap.xml` avec balises `xhtml:link` hreflang.

## 2. Finitions design « wow » (Phase 4 du plan)
- Micro-animations éditoriales : apparitions au scroll (fade/translate discret) sur les sections clés, sans surcharge.
- Traitement typographique renforcé sur les titres de page (kerning, filets, numéros de section) — Playfair + filet doré déjà partiel, à généraliser.
- Cohérence des hero : `Groupe`, `Portefeuille`, `Metiers`, `Approche`, `Engagements` utilisent un hero clair ; unifier avec un traitement plus institutionnel (fond sombre ou visuel abstrait cohérent avec Scouts et Index).
- Visuels : intégrer 3–5 photographies institutionnelles (Paris, chantier, atelier, portrait) pour casser le tout-typographique. À valider avec toi (photos à fournir ou générées).
- Cartes portefeuille : passer d'une liste simple à des fiches structurées (statut, périmètre, géographie, année) avec un système visuel commun.

## 3. Contenu à approfondir
- **Journal** : n'a que 5 entrées types ; enrichir avec les jalons réels manquants (à fournir).
- **Portefeuille** : chaque entité mérite une fiche dédiée (une section par filiale) plutôt qu'une liste ; mention systématique du statut juridique.
- **Approche / Engagements** : contenu court, à étoffer avec la doctrine d'investissement, les critères de sélection, la gouvernance ESG.
- **Contact** : ajouter un vrai formulaire (aujourd'hui probablement infos statiques) avec insertion en base + notification email.

## 4. Emails transactionnels
- Notification email quand un dossier Scout est soumis (destinataire `contact@internationalowl.com`).
- Accusé de réception automatique au candidat (FR/EN selon `locale`).
- Nécessite la configuration du domaine d'envoi (via `notify.internationalowl.com` ou équivalent).

## 5. Accessibilité et performance
- Audit `alt` sur toutes les images (logo, photos, patterns).
- Contraste AA vérifié sur les textes ambre/slate.
- Lazy-loading systématique des images en dessous du pli.
- Preload de la police Playfair Display (fichier critique du hero).

## 6. Points bloqués en attente de ton input
- Photo institutionnelle pour `og:image` et hero.
- Numéros RCS des filiales à mesure des immatriculations.
- Liens sociaux réels (LinkedIn du groupe / d'Arthur) pour `sameAs`.
- Liste enrichie du Journal.

## Ordre d'exécution proposé
1. SEO institutionnel (hreflang, JSON-LD étendu, meta par page) — impact référencement immédiat.
2. Emails transactionnels Scouts — impact opérationnel immédiat.
3. Finitions design (hero unifiés, animations scroll, fiches portefeuille).
4. Approfondissement contenu (Approche, Engagements, Journal, Contact formulaire).
5. Audit accessibilité / performance final avant republication.

Dis-moi par quel lot tu veux commencer, ou si je prends l'ordre ci-dessus tel quel.
