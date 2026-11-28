---
titre: "La recherche dichotomique"
court: "Recherche dichotomique"
description: "Recherche séquentielle et recherche dichotomique dans un tableau trié, algorithme avec bornes gauche et droite, terminaison avec un variant, coût logarithmique comparé au coût linéaire, expliqués avec le jeu du nombre mystère. Exercices corrigés. Spécialité NSI de première."
ordre: 13
publie: 2026-11-28T14:13:00
video:
  youtube: ""
piege: "**La dichotomie ne marche que sur un tableau trié.** Sur un tableau en désordre, éliminer une moitié n'a aucun sens : on peut rater la valeur."
pdf:
  cours: /pdf/nsi/premiere/recherche-dichotomique-cours.pdf
  fiche: /pdf/nsi/premiere/recherche-dichotomique-fiche.pdf
  exercices: /pdf/nsi/premiere/recherche-dichotomique-exercices.pdf
suivant: algorithmes-gloutons
---

## Le problème

Chercher un mot dans un dictionnaire papier de 60 000 mots en lisant depuis la première page, c'est des heures. Personne ne fait ça : on ouvre au milieu et on choisit une moitié. Combien d'étapes faut-il vraiment ?

## L'idée : le nombre mystère

Je pense à un nombre entre 1 et 100. Tu proposes 50 ; je réponds « plus grand ». Tu proposes 75 ; « plus petit ». À chaque question, tu élimines la moitié des possibilités. En 7 questions au plus, tu trouves.

## La recherche séquentielle

On parcourt le tableau du début à la fin. Dans le pire des cas, on regarde les $n$ éléments : **coût linéaire**. Elle fonctionne sur n'importe quel tableau.

## La recherche dichotomique

<div class="encadre">

Dans un tableau **trié**, on compare la valeur cherchée à l'élément du **milieu**, puis on ne garde que la moitié où elle peut se trouver. On recommence jusqu'à la trouver ou jusqu'à ce que la zone soit vide.

</div>

```python
def dichotomie(t, x):
    g, d = 0, len(t) - 1
    while g <= d:
        m = (g + d) // 2
        if t[m] == x:
            return m
        if t[m] < x:
            g = m + 1
        else:
            d = m - 1
    return -1
```

## Pourquoi elle s'arrête

La quantité `d - g` est un entier qui **diminue strictement** à chaque tour (on retire au moins le milieu). Elle finit par devenir négative et la boucle s'arrête : c'est un **variant**.

## Combien ça coûte

À chaque tour, la zone est divisée par 2. Pour $n$ éléments, il faut au plus environ $\log_2 n$ tours : **coût logarithmique**.

| $n$ | séquentielle | dichotomique |
|---|---|---|
| 1 000 | 1 000 | 10 |
| 1 000 000 | 1 000 000 | 20 |
| 1 milliard | 1 milliard | 30 |

<mark>Multiplier la taille par 1 000 n'ajoute qu'une dizaine d'étapes.</mark>

## Les pièges

- Tableau non trié : résultat faux.
- Écrire `g = m` au lieu de `g = m + 1` : la boucle peut ne jamais s'arrêter.
- Trier un tableau juste pour une seule recherche coûte plus cher que la recherche séquentielle.
