---
titre: "Modularité et mise au point"
court: "Modularité et tests"
description: "Découper un programme en fonctions et en modules, import et bibliothèques, API et documentation, spécification avec docstring, tests avec assert et doctest, gestion des erreurs avec try et except, expliqués avec des briques de construction aux formes standard. Exercices corrigés. Spécialité NSI de terminale."
ordre: 18
publie: 2026-11-28T13:18:00
video:
  youtube: ""
piege: "**Un test qui passe ne prouve pas que le programme est juste.** Il montre seulement qu'il est juste sur ce cas : il faut tester les cas limites (liste vide, zéro, valeurs négatives)."
pdf:
  cours: /pdf/nsi/terminale/modularite-et-mise-au-point-cours.pdf
  fiche: /pdf/nsi/terminale/modularite-et-mise-au-point-fiche.pdf
  exercices: /pdf/nsi/terminale/modularite-et-mise-au-point-exercices.pdf
---

## Le problème

Un programme de 3 000 lignes dans un seul fichier, sans fonctions : impossible de trouver une erreur, de le partager entre plusieurs développeurs ou d'en réutiliser un morceau. Comment construire un gros programme qui reste fiable ?

## L'idée : les briques standard

Avec des briques de construction aux attaches standard, tu assembles une maison sans savoir comment chaque brique a été fabriquée. Il suffit que chacune respecte sa forme. En programmation, une brique est une fonction ou un module, et sa forme, c'est sa **spécification**.

## Découper en fonctions et en modules

<div class="encadre">

- Une **fonction** fait une seule tâche précise.
- Un **module** est un fichier `.py` qui regroupe des fonctions sur un même thème.
- On l'utilise avec `import`.

</div>

```python
# fichier geometrie.py
from math import pi

def aire_disque(r):
    """Renvoie l'aire d'un disque de rayon r (r >= 0)."""
    return pi * r ** 2
```

```python
# fichier principal
import geometrie
print(geometrie.aire_disque(2))
```

L'ensemble des fonctions qu'un module met à disposition, avec leur documentation, forme son **API** (interface de programmation). On peut s'en servir sans lire son code.

## Spécifier

La **docstring** (entre triples guillemets, juste sous `def`) dit ce que fait la fonction, ce qu'elle attend (**préconditions**) et ce qu'elle garantit (**postconditions**).

## Tester

```python
def moyenne(t):
    """Renvoie la moyenne d'une liste non vide de nombres."""
    assert len(t) > 0, "liste vide"
    return sum(t) / len(t)

assert moyenne([10, 20]) == 15
assert moyenne([7]) == 7
```

`assert condition` ne fait rien si la condition est vraie, et arrête le programme avec une `AssertionError` sinon. <mark>On écrit les tests avant ou pendant le code, en pensant aux cas limites.</mark>

## Gérer les erreurs

Quand une erreur est prévisible (saisie incorrecte, fichier absent), on la traite au lieu de laisser le programme planter :

```python
try:
    age = int(input("Âge : "))
except ValueError:
    print("Il faut un nombre entier.")
```

## Les pièges

- Ne tester que des cas « normaux » : les erreurs se cachent dans les cas limites.
- Comparer des flottants avec `==` dans un test : `0.1 + 0.2 == 0.3` est faux.
- Un `except` sans type d'erreur attrape tout, même les fautes de frappe : préciser l'erreur attendue.
