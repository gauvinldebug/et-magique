---
titre: "Le langage SQL"
court: "SQL"
description: "Requêtes SQL de consultation avec SELECT, FROM, WHERE, ORDER BY, DISTINCT, fonctions d'agrégation COUNT, SUM, AVG, MIN, MAX, jointures avec JOIN ON, et requêtes de mise à jour INSERT, UPDATE, DELETE, expliquées avec un serveur de restaurant qui prend une commande précise. Exercices corrigés. Spécialité NSI de terminale."
ordre: 9
publie: 2026-11-28T13:09:00
video:
  youtube: ""
piege: "**Un UPDATE ou un DELETE sans WHERE modifie toute la table.** `DELETE FROM Lecteur` efface tous les lecteurs, pas un seul."
pdf:
  cours: /pdf/nsi/terminale/langage-sql-cours.pdf
  fiche: /pdf/nsi/terminale/langage-sql-fiche.pdf
  exercices: /pdf/nsi/terminale/langage-sql-exercices.pdf
suivant: processus
---

## Le problème

La base de la bibliothèque contient des milliers de livres. On veut la liste des romans parus après 2000, le nombre d'emprunts par lecteur, ou le nom de ceux qui ont emprunté un livre précis. Il faut un langage pour poser ces questions.

## L'idée : la commande au restaurant

SQL, c'est passer commande à un serveur très précis : tu dis **quoi** tu veux (les colonnes), **où** le chercher (la table) et **à quelles conditions** (les filtres). Tu ne dis pas comment aller en cuisine : le SGBD s'en charge.

## Consulter : SELECT

<div class="encadre">

```sql
SELECT titre, annee
FROM Livre
WHERE auteur = 'Hugo' AND annee > 1850
ORDER BY annee DESC;
```

- `SELECT` : les colonnes voulues (`*` pour toutes) ;
- `FROM` : la table ;
- `WHERE` : la condition sur les lignes ;
- `ORDER BY` : le tri (`ASC` croissant, `DESC` décroissant).

</div>

`SELECT DISTINCT auteur FROM Livre` donne chaque auteur une seule fois.

## Compter et calculer

```sql
SELECT COUNT(*) FROM Emprunt WHERE id_lecteur = 12;
SELECT AVG(annee), MIN(annee), MAX(annee) FROM Livre;
```

`COUNT`, `SUM`, `AVG`, `MIN` et `MAX` résument une colonne en une seule valeur.

## Croiser deux tables : la jointure

Pour avoir le **titre** des livres empruntés par Léa, il faut relier `Emprunt` à `Livre` et à `Lecteur` :

```sql
SELECT Livre.titre
FROM Emprunt
JOIN Livre ON Emprunt.id_livre = Livre.id_livre
JOIN Lecteur ON Emprunt.id_lecteur = Lecteur.id_lecteur
WHERE Lecteur.nom = 'Léa';
```

<mark>La condition `ON` relie la clé étrangère à la clé primaire correspondante.</mark>

## Modifier les données

```sql
INSERT INTO Lecteur VALUES (57, 'Sami', '3 rue Haute');
UPDATE Lecteur SET adresse = '8 rue Basse' WHERE id_lecteur = 57;
DELETE FROM Emprunt WHERE date < '2020-01-01';
```

## Les pièges

- `UPDATE` ou `DELETE` sans `WHERE` : toute la table est touchée.
- Les textes s'écrivent entre apostrophes : `'Hugo'`.
- Dans une jointure, préciser la table quand deux colonnes ont le même nom : `Livre.id_livre`.
