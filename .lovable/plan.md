# Statuts des sociétés immatriculées — formulation « SAS au RCS »

Remplacer la mention « (immatriculée) » par une formulation de registre holding : forme juridique + greffe, sans verbe. La date d'immatriculation reste portée par la notice et le journal.

## 1. Nouvelle ligne de statut

| Société | Avant | Après |
|---|---|---|
| CAO Industries | (immatriculée) | SAS au RCS de Marseille |
| Line Builder | (immatriculée) | SAS au RCS de Paris |
| Drabair Labs | (en formation) | inchangé |
| Weavme | (en formation) | inchangé |
| Owl Real Estate | (en formation par voie notariale) | inchangé |

EN : « SAS registered with the Marseille Commercial Register » / « …Paris Commercial Register ».

Clés i18n : `common.status.registered` est remplacée par deux clés par société (`common.status.cao`, `common.status.line`) — ou une clé paramétrée si plus propre. FR/EN en parité.

## 2. Ce qui ne bouge pas

- Notices de fiche : le champ immatriculation daté (5 août 2026 / 17 août 2026) reste tel quel — c'est lui le fait vérifiable.
- Journal : entrées des 5 et 17 août inchangées.
- Intro portefeuille « Cinq sociétés, dont deux immatriculées » : reformulée si la ligne de statut ne dit plus « immatriculée » — proposition : « Cinq sociétés, deux pôles opérationnels immatriculés » → à trancher à l'usage, par défaut on garde le mot « immatriculées » ici (c'est un constat de groupe, pas une étiquette).
- Doctrine : aucun capital, adresse, ni numéro RCS de filiale publié (sauf instruction contraire — voir point ouvert).

## 3. Point ouvert

Numéro RCS des deux filiales : non publié par défaut (doctrine actuelle, cohérente avec le retrait des autres champs du KBis). Si vous préférez l'afficher pour la vérifiabilité immédiate, il s'ajoute dans la notice de fiche, pas dans la ligne de statut.

## 4. Contrôles avant livraison

- `node scripts/doctrine-check.mjs` : conforme.
- Parité FR/EN sur chaque clé touchée.
- Micro-typo FR (espaces avant ponctuation) sur les nouvelles chaînes.
- Revue visuelle portefeuille + deux fiches concernées.

## Détails techniques

Statuts dans `src/lib/i18n.tsx` (`common.status.*`), référencés par `statusKey` dans `src/pages/ventures/data.ts`. Rendu : `Portefeuille.tsx` (ligne `.statut`) et `src/pages/ventures/Venture.tsx` (fiche). Rien n'est publié sans validation du rendu.
