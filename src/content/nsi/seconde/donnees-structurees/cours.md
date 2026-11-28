---
titre: "Les données structurées"
court: "Données structurées"
description: "Données et métadonnées, tables, descripteurs et collections, fichiers CSV, tri et filtre, croisement de données, cloud et centres de données, expliqués avec un fichier de bibliothèque à fiches cartonnées. Exercices corrigés. SNT de seconde."
ordre: 4
publie: 2026-11-28T14:48:00
video:
  youtube: ""
piege: "**Les métadonnées en disent souvent plus que les données.** Une photo contient la date, l'heure et parfois le lieu exact de la prise de vue, même si personne ne les voit à l'écran."
pdf:
  cours: /pdf/nsi/seconde/donnees-structurees-cours.pdf
  fiche: /pdf/nsi/seconde/donnees-structurees-fiche.pdf
  exercices: /pdf/nsi/seconde/donnees-structurees-exercices.pdf
suivant: localisation-et-cartographie
---

## Le problème

Ton lycée enregistre des milliers d'élèves, de notes, d'absences. Comment ranger toutes ces informations pour retrouver en une seconde la moyenne d'un élève ou la liste des absents du lundi ?

## L'idée : le fichier à fiches cartonnées

Avant les ordinateurs, les bibliothèques rangeaient leurs livres sur des fiches cartonnées. Chaque fiche avait les mêmes cases : titre, auteur, année, genre. Toutes les fiches ensemble formaient le fichier. On pouvait les trier par auteur ou sortir toutes celles d'une année. Une table de données, c'est ce fichier.

## Données, descripteurs, collection

<div class="encadre">

Une **collection** est un ensemble d'objets de même nature (les livres, les élèves). Chaque objet est décrit par des **descripteurs** (titre, auteur, année), qui prennent des **valeurs**. On range tout dans une **table** : une ligne par objet, une colonne par descripteur.

</div>

| titre | auteur | année |
|---|---|---|
| Les Misérables | Hugo | 1862 |
| L'Étranger | Camus | 1942 |

## Le format CSV

Un fichier **CSV** est un simple fichier texte où chaque ligne est un objet, et les valeurs sont séparées par une virgule ou un point-virgule. La première ligne donne souvent le nom des descripteurs.

```
titre;auteur;annee
Les Misérables;Hugo;1862
L'Étranger;Camus;1942
```

## Trier, filtrer, croiser

- **Trier** : ranger les lignes selon un descripteur (par année croissante).
- **Filtrer** : ne garder que les lignes qui vérifient une condition (les livres d'avant 1900).
- **Croiser** : rapprocher deux tables qui partagent un descripteur. Croiser des données apparemment anodines peut permettre d'identifier une personne.

## Les métadonnées

<div class="encadre">

Les **métadonnées** sont des données qui décrivent d'autres données : la date et le lieu d'une photo, l'auteur d'un document, la taille d'un fichier.

</div>

## Où sont stockées les données ?

Dans le **cloud**, les données sont stockées dans des **centres de données** : des bâtiments remplis de serveurs, qui consomment beaucoup d'électricité, surtout pour les refroidir. Stocker n'est donc pas sans impact sur l'environnement.

## Les pièges

- Une ligne = un objet, une colonne = un descripteur, pas l'inverse.
- Les métadonnées peuvent révéler des informations personnelles.
- Le cloud n'est pas immatériel : ce sont des machines bien réelles.
