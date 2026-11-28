---
titre: "Traiter des données en tables"
court: "Données en tables"
description: "Données en tables et format CSV, lecture d'un fichier CSV avec le module csv en Python, table représentée par une liste de dictionnaires, sélection de lignes, tri selon une colonne avec sorted et key, fusion de deux tables, expliqués avec un tableur que l'on interroge en Python. Exercices corrigés. Spécialité NSI de première."
ordre: 6
publie: 2026-11-28T14:06:00
video:
  youtube: ""
piege: "**Les valeurs lues dans un CSV sont des chaînes de caractères.** `\"12\" > \"9\"` vaut False, car on compare des textes : il faut convertir avec `int()` ou `float()`."
pdf:
  cours: /pdf/nsi/premiere/donnees-en-tables-cours.pdf
  fiche: /pdf/nsi/premiere/donnees-en-tables-fiche.pdf
  exercices: /pdf/nsi/premiere/donnees-en-tables-exercices.pdf
suivant: web-et-http
---

## Le problème

Une ville publie la liste de ses 2 000 arbres : espèce, hauteur, quartier, année de plantation. On veut les platanes de plus de 20 m, ou les arbres triés par hauteur. À la main, c'est des heures ; dans un tableur, c'est possible ; en Python, c'est quelques lignes réutilisables.

## L'idée : le tableur interrogé en Python

Imagine un tableur dont chaque ligne serait une fiche, avec des étiquettes en haut de colonne. En Python, chaque ligne devient un dictionnaire dont les clés sont ces étiquettes. La table entière est une liste de ces fiches.

## Le format CSV

<div class="encadre">

Un fichier **CSV** (*comma-separated values*) est un fichier texte : la première ligne donne les noms des colonnes (les **descripteurs**), chaque ligne suivante est un enregistrement, les valeurs sont séparées par une virgule ou un point-virgule.

</div>

```
espece;hauteur;quartier
platane;24;Centre
tilleul;12;Nord
platane;18;Sud
```

## Lire un CSV

```python
import csv

with open("arbres.csv", encoding="utf-8") as f:
    table = list(csv.DictReader(f, delimiter=";"))

table[0]   # {'espece': 'platane', 'hauteur': '24', 'quartier': 'Centre'}
```

<mark>Toutes les valeurs lues sont des chaînes</mark> : on convertit les nombres.

```python
for ligne in table:
    ligne["hauteur"] = int(ligne["hauteur"])
```

## Sélectionner

```python
grands_platanes = [a for a in table
                   if a["espece"] == "platane" and a["hauteur"] > 20]
```

## Trier

`sorted` reçoit une fonction `key` qui dit sur quelle colonne trier :

```python
par_hauteur = sorted(table, key=lambda a: a["hauteur"], reverse=True)
```

## Fusionner deux tables

Si une seconde table donne la population de chaque quartier, on associe chaque arbre à son quartier en comparant la colonne commune `quartier` : c'est une **jointure**, comme en SQL.

## Les pièges

- Oublier de convertir : `"9" > "12"` est vrai (ordre alphabétique).
- Se tromper de séparateur : avec `;` dans le fichier, préciser `delimiter=";"`.
- Les accents mal lus : préciser `encoding="utf-8"`.
