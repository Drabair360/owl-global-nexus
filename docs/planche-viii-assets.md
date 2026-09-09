# Planche VIII (B) - assets de référence

Tous les fichiers sont dans le même repère : viewBox "30 90 1790 1500" (unités = points du plan de synthèse A1 au 1/500, nord en haut).
Chaque calque est un SVG autonome (defs inclus) à superposer tel quel, sans transformation supplémentaire.

layers/base-synthese.svg   fond de plan : plan de synthèse (géométrie exacte, 48 libellés vivants data-i18n)
layers/base-a0.svg         fond de plan alternatif : plan de masse directeur A0 (géométrie exacte, cotes, comptages, 40 notes J re-typographiées)
layers/ov-circulation.svg  calque 1 : circulation et pesées (quais, ponts, portails, clôture, séquence camion 1 à 12)
layers/ov-securite.svg     calque 2 : sécurité et incendie (PI1-PI13 et rayons 100 m, S1-S17, PR1/PR2, réserve, voie pompiers, caméras)
layers/ov-reseaux.svg      calque 3 : réseaux, eaux et énergie (EP/EU/EI, STEP, bassin, noues, forage, poste HTA/BT, PV par toiture)
layers/ov-stockage.svg     calque 5 : lots 25 T dessinés par cellule, BR/EX/PF-P1..P3 avec tonnages et positions
layers/ov-ph1.svg, ov-ph2.svg, ov-ph3.svg, ov-chantier.svg   calque 4 : phasage (à afficher en opacité 0.6)
insets/admin-rdc-etage.svg calque 6 : bloc administratif, plans RDC et étage (1/100)
insets/coupe-aa.svg, coupe-bb.svg, campagne-stock.svg   coupes A-A et B-B, courbe de campagne / stock brousse (plan directeur)
i18n.json                  toutes les chaînes {clé: {fr, en}} - 1 186 clés ; chaque <text data-i18n="clé"> des SVG et chaque élément data-i18n des panneaux s'y réfère
panels.html                panneaux de contenu (textes du carnet par thème, tables du plan directeur, 46 vérifications, légende, notes J1-J40)
planche-viii-calques-v2.html   prototype complet fonctionnel (référence de comportement : calques, fond A1/A0, FR/EN, zoom/pan, panneaux)

Règles de rendu des libellés : <text> avec data-i18n ; en FR, appliquer textLength=data-len et lengthAdjust=spacingAndGlyphs
(emprise identique à l'original) ; en EN, retirer textLength. Les notes J (data-wrap=N) sont à re-couper en tspan de N caractères max.

Anonymisation (déjà appliquée dans tous les fichiers ; ne pas réintroduire) : nom du client, ville et port, noms des riverains,
concessionnaire électrique, cabinet d'architecture, marque d'équipement. Mots à rechercher pour contrôle : CADESA, San Pedro,
Grand-Grabo, ASSOUMOU, GOU NEMLIN, CIE, ZLS, PROBAT.
