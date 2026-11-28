---
titre: "Tableaux et p-uplets"
court: "Tableaux et tuples"
description: "Les p-uplets (tuples) non modifiables et leur usage pour renvoyer plusieurs valeurs, les tableaux (listes Python) modifiables, indices, parcours, listes en compréhension, tableaux de tableaux pour les matrices, copie et alias, expliqués avec des casiers numérotés. Exercices corrigés. Spécialité NSI de première."
ordre: 4
publie: 2026-11-28T14:04:00
video:
  youtube: ""
piege: "**`b = a` ne copie pas la liste.** Les deux noms désignent le même tableau : modifier `b[0]` modifie aussi `a[0]`. Pour une vraie copie : `b = a.copy()` ou `b = list(a)`."
pdf:
  cours: /pdf/nsi/premiere/tableaux-et-tuples-cours.pdf
  fiche: /pdf/nsi/premiere/tableaux-et-tuples-fiche.pdf
  exercices: /pdf/nsi/premiere/tableaux-et-tuples-exercices.pdf
suivant: dictionnaires
---

## Le problème

Stocker les notes de 30 élèves dans 30 variables `n1`, `n2`… est ingérable. Et une fonction qui doit renvoyer à la fois un minimum et un maximum ne peut renvoyer qu'une valeur. Il faut des valeurs qui en regroupent plusieurs.

## L'idée : les casiers numérotés

Un tableau, c'est une rangée de casiers numérotés à partir de 0. On peut ouvrir le casier 3, changer son contenu, ajouter un casier au bout. Un p-uplet, c'est une enveloppe scellée qui contient plusieurs valeurs : on peut lire ce qu'il y a dedans, pas le changer.

## Les p-uplets (tuples)

<div class="encadre">

Un **p-uplet** est une suite **non modifiable** de valeurs, éventuellement de types différents : `point = (3, 5)`, `eleve = ("Léa", 16, "1re")`.

</div>

On lit `point[0]`, mais `point[0] = 4` provoque une erreur. Ils servent à **renvoyer plusieurs valeurs** :

```python
def min_max(t):
    return min(t), max(t)

a, b = min_max([4, 9, 1])   # a = 1, b = 9
```

## Les tableaux (listes Python)

<div class="encadre">

Un **tableau** est une suite **modifiable** de valeurs, accessibles par leur **indice**, de `0` à `len(t) - 1`.

</div>

```python
t = [12, 15, 9]
t[1] = 16          # modification
t.append(14)       # ajout à la fin
for x in t:        # parcours des valeurs
    print(x)
for i in range(len(t)):   # parcours des indices
    print(i, t[i])
```

Une **liste en compréhension** construit un tableau en une ligne :

```python
carres = [x ** 2 for x in range(5)]      # [0, 1, 4, 9, 16]
pairs = [x for x in t if x % 2 == 0]
```

## Les tableaux de tableaux

Une grille (morpion, image, matrice) est un tableau de lignes :

```python
grille = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
grille[1][1]   # ligne 1, colonne 1 : vaut 1
```

## Alias et copie

<mark>`b = a` ne crée pas de nouveau tableau : `a` et `b` sont deux noms pour le même.</mark> Pour copier : `b = a.copy()`. Et pour une grille, `[[0] * 3] * 3` crée trois fois la **même** ligne : on écrit `[[0] * 3 for _ in range(3)]`.

## Les pièges

- Le dernier indice est `len(t) - 1`, pas `len(t)`.
- `b = a` est un alias, pas une copie.
- `[[0] * 3] * 3` partage la même ligne trois fois.
