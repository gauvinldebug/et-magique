---
titre: "Les arbres binaires"
court: "Arbres binaires"
description: "Vocabulaire des arbres binaires (racine, nœud, feuille, sous-arbres, taille, hauteur), implémentation en Python, calcul récursif de la taille et de la hauteur, parcours préfixe, infixe, suffixe et en largeur, expliqués avec un arbre généalogique à l'envers. Exercices corrigés. Spécialité NSI de terminale."
ordre: 4
publie: 2026-11-28T13:04:00
video:
  youtube: ""
piege: "**Hauteur : vérifier la convention de l'énoncé.** Selon les sujets, un arbre réduit à sa racine a une hauteur de 0 ou de 1. Le résultat change d'une unité."
pdf:
  cours: /pdf/nsi/terminale/arbres-binaires-cours.pdf
  fiche: /pdf/nsi/terminale/arbres-binaires-fiche.pdf
  exercices: /pdf/nsi/terminale/arbres-binaires-exercices.pdf
suivant: arbres-binaires-de-recherche
---

## Le problème

Un tournoi à élimination directe, l'organisation des dossiers d'un ordinateur, une expression comme $(3 + 4) \times 2$ : ces données ne sont pas rangées en ligne, elles se ramifient. Une liste ne suffit plus.

## L'idée : l'arbre généalogique à l'envers

Pense à un arbre généalogique dessiné à l'envers : un ancêtre en haut, chacun a au plus deux enfants en dessous. Pour connaître toute la famille, il suffit de connaître l'ancêtre et les familles de ses deux enfants.

## Le vocabulaire

<div class="encadre">

Un **arbre binaire** est soit **vide**, soit un **nœud** (la **racine**) qui porte une valeur et deux sous-arbres binaires : le **sous-arbre gauche** et le **sous-arbre droit**.

- Une **feuille** est un nœud dont les deux sous-arbres sont vides.
- La **taille** est le nombre de nœuds.
- La **hauteur** est le nombre de nœuds sur le plus long chemin de la racine à une feuille (convention : arbre vide de hauteur 0, racine seule de hauteur 1).

</div>

## En Python

```python
class Noeud:
    def __init__(self, valeur, gauche=None, droit=None):
        self.valeur = valeur
        self.gauche = gauche
        self.droit = droit

# l'expression (3 + 4) * 2
a = Noeud("*", Noeud("+", Noeud(3), Noeud(4)), Noeud(2))
```

L'arbre vide est représenté par `None`.

## Taille et hauteur, en récursif

La définition est récursive, les fonctions aussi :

```python
def taille(a):
    if a is None:
        return 0
    return 1 + taille(a.gauche) + taille(a.droit)

def hauteur(a):
    if a is None:
        return 0
    return 1 + max(hauteur(a.gauche), hauteur(a.droit))
```

## Les parcours

| Parcours | Ordre | Sur l'arbre de $(3 + 4) \times 2$ |
|---|---|---|
| préfixe | racine, gauche, droit | * + 3 4 2 |
| infixe | gauche, racine, droit | 3 + 4 * 2 |
| suffixe | gauche, droit, racine | 3 4 + 2 * |
| en largeur | niveau par niveau | * + 2 3 4 |

<mark>Les trois premiers sont récursifs ; le parcours en largeur utilise une file.</mark>

## Les pièges

- La convention de hauteur varie selon les sujets : la lire dans l'énoncé.
- Gauche et droit ne sont pas interchangeables : deux arbres miroirs sont différents.
- Oublier le cas de l'arbre vide dans une fonction récursive.
