# Matière v3 — Gel, partition, mouvement, micro-échelle

Séance de lab du 01/08/2026. Intensité **cible** gelée. Ce document est la
recette de franchissement : toute case non cochée bloque la bascule.

## 1. GEL (verdicts)

| Matériau / état | Verdict | Tokens gelés |
| --- | --- | --- |
| Grès | cible telle quelle | macro 0.040 · vergeure 0.025 · micro 0.070 · fibre 0.055 |
| Béton | cible telle quelle (bulles au bon niveau de rareté) | macro 0.045 · micro 0.110 · bulle 0.500 |
| Laiton | cible telle quelle | brossage 0.200 |
| Plaque (hover / pression / focus) | validés tels quels | §2 inchangé |
| Letterpress | force **sobre**, display sur béton uniquement | `.v3-letterpress` |
| Grain 1x hérité | confirmé | `--mat-grain-1x: 0.07` |

Non-régression : `node scripts/matiere-gel-check.mjs` — échoue à la moindre
dérive de token, de portée du letterpress ou de force de letterpress.

Après le gel : **aucune retouche de texture** hors révision de partition.

## 2. A — Partition §4 (10 routes + fiche)

Chaque page porte en tête un commentaire `PARTITION §4` qui déclare sa
matière dominante, ses surfaces secondaires et son unique moment de
signature.

| Route | Dominante | Signature unique |
| --- | --- | --- |
| `/` | alternance béton / grès | seuil typographique 3 temps |
| `/groupe` | grès (hero béton) | tracé de l'organigramme |
| `/portefeuille` | grès | aucune |
| `/portefeuille/:slug` | grès + béton d'autorité | arête de laiton M7 |
| `/journal` | grès seul | aucune |
| `/metiers` | grès | aucune |
| `/scouts` | grès | bande `terrain` laiton |
| `/engagements` | grès | bande `terrain` encre |
| `/approche` | grès | visuel de signature (laiton) |
| `/contact` | grès | aucune |
| `/rejoindre` | grès | aucune |

Les modèles physiques v3 sont promus sur les classes de production
(`mat-gres*`, `mat-beton*`) : les 10 routes basculent sans réécriture de
gabarit. Le grain plat hérité est retiré (`.mat-grain` devient un marqueur
sémantique inerte).

## 3. B — Migration des onze visuels sur la référence `prestigeWide` / laiton

| Visuel | Route | Ton Matière |
| --- | --- | --- |
| prestigeWide | `/` | laiton (référence validée) |
| skyline | `/groupe` | encre |
| archive | `/journal` | grès |
| terrain | `/scouts` | laiton |
| terrain | `/engagements` | encre (cadrage identique 50 % / 50 %) |
| corridor | `/contact` | encre |
| signature | `/approche` | laiton, ni vignettage ni halation appuyés |
| industrial / lab / atelier / patrimoine (fiches) | `/portefeuille/:slug` | laiton (pôle industriel) · encre (pôle logiciel) |
| 404 | `*` | encre |

Point noir ~6 %, hautes lumières ~92 %, vignettage réduit de 20 %, jamais de
vignettage ni de halation sur grès.

## 4. C — G4, passe de mouvement

Audit contre la physique de pose (M5) et la quatrième couche (§2) :

- **Supprimé** : `band-breathe` (zoom lent des bandes 21/9). Une surface ne
  bouge pas toute seule ; c'était un effet de curseur.
- **Conservé** : `mat-pose` (la page se pose), `mat-arete` (signature M7),
  dévoilement `clip-path` des visuels, micro-parallaxe bornée ±12 px.
- **Conservé, requalifié** : états de plaque (hover / pression / focus) — ce
  n'est pas de l'animation, c'est la matière qui répond au contact.
- **Règle** : un seul moment de signature par page (tableau §2 ci-dessus).
- `prefers-reduced-motion` : pose, arête, parallaxe et clip-path neutralisés.

## 5. D — G5, micro-échelle (zoom 200 %)

Checklist « dessiné / justifié », composant par composant.

| Composant | Dessiné au zoom 200 % | Justification |
| --- | --- | --- |
| Navbar | filet laiton brossé, chant 1 px | séparation, pas décoration |
| InstitutionalHero | béton coffré + banches 1 px, letterpress sobre | autorité coulée |
| GutterRule | filet 1 px discret | ancrage de gouttière |
| Plaque / carte | chants haut clair / bas ombre | la plaque est posée |
| Champs de formulaire | filet au repos, arête laiton à la saisie | états en langage Matière |
| Bouton | béton plein, arête laiton au survol | contact, pas halo |
| Cachet de registre | filets haut/bas, sceau laiton | scelle un bloc d'autorité |
| Folio-chouette | chiffres tabulaires, œil 0.42 rem | numérotation gravée |
| Joint de section | 3 px creux (ombre / lumière) | joint de bâtiment |
| Bandes 21/9 | grain image accordé à la page | même matière que la page |
| Légende (figcaption) | encre 2, pas d'italique | honnêteté de provenance |
| Scrollbar | laiton mat | continuité de matière |

## 6. Recette de franchissement (à valider avant bascule)

- [ ] Planche 10 routes × 390 / 1440 px × FR / EN
- [ ] Passe `prefers-reduced-motion` sur les mêmes routes
- [ ] `node scripts/matiere-gel-check.mjs` — conforme
- [ ] Greps doctrine à 0 (AKOULA, CAOAGRO, OWLOMA, KIDZ LAB, Agard, Meyreuil, Passage)
- [ ] axe-core : 0 violation
- [ ] Budget texture ≤ 60 Ko, zéro filtre vivant
- [ ] Test des 5 secondes sur `/` et `/portefeuille`
