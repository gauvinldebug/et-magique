---
titre: "Les algorithmes de tri"
court: "Algorithmes de tri"
description: "Tri par sélection et tri par insertion, déroulement pas à pas, écriture en Python, invariant de boucle et preuve de correction, coût quadratique, comparaison avec la fonction sorted, expliqués avec une main de cartes que l'on range. Exercices corrigés. Spécialité NSI de première."
ordre: 12
publie: 2026-11-28T14:12:00
video:
  youtube: ""
piege: "**Le tri par sélection et le tri par insertion ne font pas la même chose à chaque tour.** La sélection cherche le minimum de la partie non triée ; l'insertion place l'élément suivant dans la partie déjà triée."
pdf:
  cours: /pdf/nsi/premiere/algorithmes-de-tri-cours.pdf
  fiche: /pdf/nsi/premiere/algorithmes-de-tri-fiche.pdf
  exercices: /pdf/nsi/premiere/algorithmes-de-tri-exercices.pdf
suivant: recherche-dichotomique
---

## Le problème

Trier 30 copies par note, c'est facile à la main. Mais comment le décrire à une machine, étape par étape, et combien de temps faudra-t-il pour un million de valeurs ?

## L'idée : la main de cartes

Quand tu ramasses tes cartes une à une, tu glisses chaque nouvelle carte à sa place parmi celles déjà rangées dans ta main : c'est le **tri par insertion**. Une autre méthode : chercher la plus petite carte du paquet et la poser à gauche, puis la plus petite des restantes, et ainsi de suite : c'est le **tri par sélection**.

## Le tri par sélection

<div class="encadre">

Pour chaque position `i` de gauche à droite : chercher le **minimum** de `t[i:]` et l'**échanger** avec `t[i]`.

</div>

```python
def tri_selection(t):
    n = len(t)
    for i in range(n - 1):
        imin = i
        for j in range(i + 1, n):
            if t[j] < t[imin]:
                imin = j
        t[i], t[imin] = t[imin], t[i]
```

## Le tri par insertion

<div class="encadre">

Pour chaque élément à partir du deuxième : le décaler vers la gauche tant que son voisin de gauche est plus grand.

</div>

```python
def tri_insertion(t):
    for i in range(1, len(t)):
        x = t[i]
        j = i
        while j > 0 and t[j - 1] > x:
            t[j] = t[j - 1]
            j = j - 1
        t[j] = x
```

## Pourquoi c'est juste : l'invariant

Pour le tri par insertion : <mark>au début du tour `i`, la partie `t[0:i]` est triée.</mark> C'est vrai au départ (un seul élément), chaque tour le conserve, et à la fin la partie triée est tout le tableau. Cette propriété qui reste vraie s'appelle un **invariant de boucle**.

## Combien ça coûte

Les deux tris font, dans le pire des cas, environ $\frac{n^2}{2}$ comparaisons : c'est un **coût quadratique**. Doubler la taille du tableau multiplie le temps par 4. Pour 1 000 valeurs : 500 000 comparaisons ; pour un million : $5 \times 10^{11}$, beaucoup trop. Python utilise `sorted`, un tri en $n \log n$ bien plus rapide.

Le tri par insertion a un avantage : sur un tableau **presque trié**, il est très rapide.

## Les pièges

- Ces fonctions modifient le tableau reçu et ne renvoient rien.
- Dans le tri par sélection, on échange une fois par tour, après avoir trouvé le minimum.
- Coût quadratique : 10 fois plus de données, 100 fois plus de temps.
