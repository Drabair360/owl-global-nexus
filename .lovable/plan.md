# Mise à jour factuelle du groupe — août 2026

Deux changements de fond : retirer les montants du premier exercice, et faire passer CAO Industries et Line Builder du statut « en formation » au statut « immatriculée », KBis à l'appui. Weavme et Owl Real Estate restent en formation, cette dernière par voie notariale.

## 1. Chiffres du premier exercice retirés

Nouvelle formulation, FR et EN, partout où la phrase apparaît :

- FR : « Premier exercice clos. Résultat net à deux chiffres en pourcentage. Comptes déposés au greffe. »
- EN : « First financial year closed. Double digit % net income. Accounts filed with the commercial court registry. »

Emplacements : jalons de l'accueil, entrée 2024 du journal. Les pages d'étude internes (`/studio/…`) qui citent encore 141/130 sont alignées pour que le grep reste propre.

## 2. Statuts réels des cinq sociétés

| Société | Statut publié |
|---|---|
| CAO Industries | Immatriculée le 5 août 2026 au RCS de Marseille (SAS, présidée par Owl International) |
| Line Builder | Immatriculée le 17 août 2026 au RCS de Paris (SAS, présidée par Owl International) |
| Drabair Labs | En formation |
| Weavme | En formation, en partenariat |
| Owl Real Estate | En cours de constitution par voie notariale |

Ce qui est publié à partir des KBis : dénomination, forme (SAS), date et greffe d'immatriculation, qualité d'Owl International comme président. Ce qui n'est **pas** publié, conformément à la doctrine de confidentialité du cabinet : capital social, adresse de siège, domiciliataire, numéro de gestion, code de vérification, durée, dates de clôture, libellé complet de l'objet social. Aucun montant nulle part.

Par défaut, le numéro RCS de chaque filiale n'est pas affiché (seul celui de la holding l'est déjà) ; dites-le si vous préférez qu'il figure pour la vérifiabilité.

Répercussions :

- Nouveaux libellés de statut : « (immatriculée) » / « (registered) » et « (en constitution par voie notariale) » / « (under constitution, by notarial deed) ».
- Notice de fiche : le champ « constitution » devient un fait daté d'immatriculation pour CAO et Line Builder.
- Repères opérationnels et contextes ajustés pour ne plus parler de constitution en cours pour ces deux sociétés.

## 3. Journal et jalons

- Entrée 2026 existante « constitution de CAO Industries engagée » corrigée en immatriculation effective, avec la date.
- Nouvelle entrée pour Line Builder (immatriculation du 17 août 2026).
- Jalon « à venir » reformulé : l'immatriculation des entités du pôle opérationnel est en partie réalisée.
- Mention Owl Real Estate précisée (constitution par voie notariale).

## 4. Cohérence du reste du site

Passage sur les pages Groupe, Métiers, Approche, Engagements et le portefeuille pour supprimer toute formulation qui suppose encore que le pôle opérationnel n'est pas immatriculé. Les KPI restent inchangés (jeu fermé 02/05/02/2023/10). Aucune planche gravée n'est touchée.

## 5. Contrôles avant livraison

- `node scripts/doctrine-check.mjs` : conforme.
- Grep de non-régression : zéro occurrence de « 141 », « 130 k », « EUR 141k », et zéro adresse de filiale, capital ou numéro de gestion dans `src`.
- Parité FR/EN : chaque clé modifiée existe dans les deux langues.
- Micro-typo FR et checks de gel Matière v3 exécutés.
- Revue visuelle accueil, journal, portefeuille et les cinq fiches.

## Détails techniques

Les textes vivent dans `src/lib/i18n.tsx` (blocs fr et en) ; les statuts et faits datés dans `src/pages/ventures/data.ts` (`statusKey`, `incorporation`, `context`, `operating`). Le journal lit `src/pages/Journal.tsx` avec ses clés `journal.*`. Ajout de deux clés de statut dans `common.status.*`. Les fichiers `/studio/Direction*.tsx` et `MatiereJournal.tsx` sont des maquettes internes : simple alignement de chaîne.

Rien n'est publié tant que vous n'avez pas validé le rendu.
