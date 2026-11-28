---
titre: "Les arbres binaires de recherche"
court: "Arbres de recherche"
description: "Arbre binaire de recherche (ABR), propriété d'ordre, recherche et insertion récursives, parcours infixe trié, coût lié à la hauteur, arbre équilibré ou filiforme, expliqués avec le jeu du plus grand ou plus petit. Exercices corrigés. Spécialité NSI de terminale."
ordre: 5
publie: 2026-11-28T13:05:00
video:
  youtube: ""
piege: "**Un ABR n'est pas toujours rapide.** Si on insère des valeurs déjà triées, l'arbre devient un long fil : chercher coûte autant que dans une liste."
pdf:
  cours: /pdf/nsi/terminale/arbres-binaires-de-recherche-cours.pdf
  fiche: /pdf/nsi/terminale/arbres-binaires-de-recherche-fiche.pdf
  exercices: /pdf/nsi/terminale/arbres-binaires-de-recherche-exercices.pdf
suivant: graphes
---

## Le problème

Un annuaire contient un million de noms. Les parcourir un à un pour en trouver un est trop long. Un tableau trié permet la dichotomie, mais insérer un nouveau nom oblige à tout décaler. Peut-on chercher vite et insérer vite ?

## L'idée : plus grand ou plus petit

Dans le jeu « je pense à un nombre », chaque réponse « plus grand » ou « plus petit » élimine la moitié des possibilités. Un arbre binaire de recherche range les valeurs pour qu'à chaque nœud, on se pose cette question et qu'on ne descende que d'un côté.

## La propriété d'ordre

<div class="encadre">

Un **arbre binaire de recherche** (ABR) est un arbre binaire où, pour chaque nœud de valeur $v$ :

- toutes les valeurs du sous-arbre gauche sont **inférieures** à $v$ ;
- toutes les valeurs du sous-arbre droit sont **supérieures** à $v$.

</div>

## Chercher

```python
def appartient(a, x):
    if a is None:
        return False
    if x == a.valeur:
        return True
    if x < a.valeur:
        return appartient(a.gauche, x)
    return appartient(a.droit, x)
```

On ne descend que dans un seul sous-arbre : <mark>le nombre de comparaisons est au plus la hauteur de l'arbre.</mark>

## Insérer

On descend comme pour chercher, et on place la nouvelle valeur à l'endroit vide où l'on arrive : elle devient une feuille.

```python
def inserer(a, x):
    if a is None:
        return Noeud(x)
    if x < a.valeur:
        a.gauche = inserer(a.gauche, x)
    else:
        a.droit = inserer(a.droit, x)
    return a
```

## Le parcours infixe trie

Gauche, racine, droit : on visite d'abord les plus petites valeurs, puis la racine, puis les plus grandes. Le parcours infixe d'un ABR donne les valeurs **dans l'ordre croissant**.

## Équilibré ou filiforme

Un arbre **équilibré** de $n$ nœuds a une hauteur proche de $\log_2 n$ : environ 20 pour un million de valeurs. Mais en insérant 1, 2, 3, 4… dans cet ordre, chaque valeur va à droite de la précédente : l'arbre est **filiforme**, de hauteur $n$.

## Les pièges

- La propriété porte sur **tout** le sous-arbre, pas seulement sur les fils directs.
- Insérer des valeurs triées donne un arbre filiforme, donc lent.
- La plus petite valeur est tout en bas à gauche, pas forcément une feuille quelconque.
