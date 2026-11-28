---
titre: "La programmation dynamique"
court: "Programmation dynamique"
description: "Sous-problèmes qui se répètent, suite de Fibonacci naïve et mémoïsée, dictionnaire de mémoïsation, méthode ascendante avec un tableau, problème du rendu de monnaie optimal, comparaison avec l'algorithme glouton, expliqués avec un carnet où l'on note les calculs déjà faits. Exercices corrigés. Spécialité NSI de terminale."
ordre: 14
publie: 2026-11-28T13:14:00
video:
  youtube: ""
piege: "**La programmation dynamique ne sert que si les sous-problèmes se répètent.** Pour le tri fusion, chaque moitié est différente : mémoriser ne ferait rien gagner."
pdf:
  cours: /pdf/nsi/terminale/programmation-dynamique-cours.pdf
  fiche: /pdf/nsi/terminale/programmation-dynamique-fiche.pdf
  exercices: /pdf/nsi/terminale/programmation-dynamique-exercices.pdf
suivant: recherche-textuelle
---

## Le problème

La suite de Fibonacci : $F_0 = 0$, $F_1 = 1$, $F_n = F_{n-1} + F_{n-2}$. La fonction récursive directe met plusieurs secondes pour $F_{40}$ et des années pour $F_{100}$. Pourtant le calcul à la main est rapide. Où passe le temps ?

## L'idée : le carnet de calculs

Pour calculer $F_{40}$, la fonction naïve calcule $F_{38}$ dans une branche, puis le recalcule entièrement dans une autre, et ainsi de suite : des milliards de fois les mêmes calculs. Avec un carnet où l'on note chaque résultat la première fois, on n'a jamais à le refaire : on regarde dans le carnet.

## Le principe

<div class="encadre">

La **programmation dynamique** s'applique quand un problème se découpe en **sous-problèmes qui se répètent**. On calcule chaque sous-problème **une seule fois** et on **mémorise** son résultat.

</div>

## Version descendante : la mémoïsation

```python
memo = {}

def fibo(n):
    if n <= 1:
        return n
    if n not in memo:
        memo[n] = fibo(n - 1) + fibo(n - 2)
    return memo[n]
```

Chaque valeur de 0 à $n$ est calculée une fois : environ $n$ opérations au lieu d'un nombre qui double à chaque rang.

## Version ascendante : le tableau

On part des petits cas et on remplit un tableau jusqu'au cas voulu :

```python
def fibo(n):
    f = [0, 1]
    for i in range(2, n + 1):
        f.append(f[i - 1] + f[i - 2])
    return f[n]
```

## Le rendu de monnaie optimal

Avec des pièces de 1, 6 et 10, comment rendre 12 avec le moins de pièces ? L'algorithme glouton prend d'abord la plus grosse pièce : 10 + 1 + 1, soit 3 pièces. Or 6 + 6 n'en utilise que 2.

En programmation dynamique, `nb[s]` est le nombre minimal de pièces pour la somme `s` :

```python
def rendu(pieces, somme):
    nb = [0] + [float("inf")] * somme
    for s in range(1, somme + 1):
        for p in pieces:
            if p <= s:
                nb[s] = min(nb[s], nb[s - p] + 1)
    return nb[somme]
```

<mark>On essaie toutes les pièces pour chaque somme, mais chaque sous-somme n'est calculée qu'une fois.</mark>

## Les pièges

- Appliquer la mémoïsation à un problème dont les sous-problèmes ne se répètent pas : aucun gain.
- Croire que le glouton donne toujours la meilleure réponse au rendu de monnaie : cela dépend des pièces.
- Une variable `memo` partagée garde ses valeurs d'un appel à l'autre : c'est voulu, mais attention si le problème change.
