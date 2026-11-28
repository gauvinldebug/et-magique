---
titre: "Les bases de données relationnelles"
court: "Bases de données"
description: "Modèle relationnel, relation, attribut, domaine, n-uplet, schéma relationnel, clé primaire et clé étrangère, contraintes d'intégrité, système de gestion de bases de données (SGBD), expliqués avec les fiches d'une bibliothèque. Exercices corrigés. Spécialité NSI de terminale."
ordre: 8
publie: 2026-11-28T13:08:00
video:
  youtube: ""
piege: "**Une clé primaire ne peut pas se répéter.** Le nom d'un élève n'est pas une bonne clé : deux élèves peuvent s'appeler pareil. On utilise un identifiant unique."
pdf:
  cours: /pdf/nsi/terminale/bases-de-donnees-cours.pdf
  fiche: /pdf/nsi/terminale/bases-de-donnees-fiche.pdf
  exercices: /pdf/nsi/terminale/bases-de-donnees-exercices.pdf
suivant: langage-sql
---

## Le problème

Une bibliothèque note dans un seul grand tableau chaque emprunt avec le titre, l'auteur et l'adresse de l'emprunteur. Quand un lecteur déménage, il faut corriger son adresse sur des dizaines de lignes, et on finit par en oublier. Comment organiser les données pour éviter ces doublons ?

## L'idée : les fichiers de la bibliothèque

Une vraie bibliothèque a plusieurs fichiers : un pour les livres, un pour les lecteurs, un pour les emprunts. Une fiche d'emprunt ne recopie pas l'adresse du lecteur : elle donne seulement son numéro de carte. Pour retrouver l'adresse, on va voir dans le fichier des lecteurs.

## Le vocabulaire

<div class="encadre">

- Une **relation** (ou **table**) regroupe des données de même nature : Livre, Lecteur, Emprunt.
- Un **attribut** est une colonne, avec un **domaine** (le type de ses valeurs : entier, texte, date).
- Un **n-uplet** (ou **enregistrement**) est une ligne.
- Le **schéma** d'une relation donne son nom et ses attributs : `Lecteur(id_lecteur, nom, adresse)`.

</div>

## Les clés

<mark>Une **clé primaire** identifie chaque ligne de façon unique.</mark> On la souligne dans le schéma. Une **clé étrangère** est un attribut qui fait référence à la clé primaire d'une autre table.

- `Livre(`<u>`id_livre`</u>`, titre, auteur, annee)`
- `Lecteur(`<u>`id_lecteur`</u>`, nom, adresse)`
- `Emprunt(`<u>`id_emprunt`</u>`, #id_livre, #id_lecteur, date)`

Le `#` signale les clés étrangères : un emprunt pointe vers un livre et vers un lecteur. L'adresse n'est écrite qu'une fois, dans `Lecteur`.

## Les contraintes d'intégrité

Le système vérifie trois règles :

| Contrainte | Exemple refusé |
|---|---|
| de domaine | une année égale à « bleu » |
| de relation (clé primaire unique et non vide) | deux lecteurs avec le même `id_lecteur` |
| de référence (clé étrangère existante) | un emprunt pour un lecteur qui n'existe pas |

## Le SGBD

Un **système de gestion de bases de données** (SQLite, PostgreSQL, MySQL) stocke les tables, fait respecter les contraintes, gère les accès simultanés de nombreux utilisateurs et répond aux requêtes, écrites en SQL.

## Les pièges

- Choisir comme clé primaire un attribut qui peut se répéter (nom, date).
- Recopier une information dans plusieurs tables : elle finira par être incohérente.
- Supprimer une ligne référencée par une clé étrangère : le SGBD le refuse.
