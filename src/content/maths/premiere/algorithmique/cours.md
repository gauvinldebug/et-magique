---
titre: Algorithmique et programmation en Python
court: Algorithmique et programmation
description: L'algorithmique de Première expliquée comme une recette de cuisine, les variables, les conditions, les boucles for et while, les fonctions et les listes en Python, avec les algorithmes de seuil et de calcul de termes de suites, et des exercices corrigés. Première spécialité maths.
ordre: 9
publie: 2026-11-22T21:32:00
video:
  youtube: ""
piege: "**`range(n)` s'arrête avant `n`.** `for k in range(5)` fait prendre à `k` les valeurs 0, 1, 2, 3, 4 : cinq tours, mais jamais la valeur 5. C'est l'erreur la plus fréquente dans les boucles."
pdf:
  cours: /pdf/maths/premiere/algorithmique-cours.pdf
  fiche: /pdf/maths/premiere/algorithmique-fiche.pdf
  exercices: /pdf/maths/premiere/algorithmique-exercices.pdf
---

## Le problème

Une population de 1 000 bactéries double toutes les heures. Au bout de combien d'heures dépasse-t-elle un million ? On pourrait calculer à la main, heure après heure. Mais s'il faut recommencer avec 10 000 bactéries, ou un milliard comme seuil, c'est long.

Un **algorithme** fait ce travail pour nous : on écrit une fois la méthode, et l'ordinateur la répète autant qu'il faut.

## L'idée : la recette de cuisine

Un algorithme, c'est une **recette** : une liste d'instructions précises, exécutées dans l'ordre.

- Les **variables**, ce sont les bols : chacun porte une étiquette (son nom) et contient un ingrédient (sa valeur). On peut vider un bol et le remplir avec autre chose.
- Les **conditions**, ce sont les « si la pâte est trop épaisse, ajoute du lait ».
- Les **boucles**, ce sont les « répète 3 fois » ou « remue **tant que** la sauce n'a pas épaissi ».
- Les **fonctions**, ce sont les recettes de base qu'on réutilise : « prépare une pâte brisée ».

## Les variables et l'affectation

En Python, le signe `=` ne veut pas dire « égal » : il veut dire « <mark>range dans le bol</mark> ».

```python
a = 5          # le bol a contient 5
a = a + 3      # a contient maintenant 8
print(a)       # affiche 8
```

L'instruction `a = a + 3` n'a aucun sens en maths, mais elle en a un en Python : on calcule à droite, puis on range à gauche.

Les types courants : les entiers (`int`), les décimaux (`float`, avec un **point** : `2.5`), les textes (`str`) et les booléens (`True`, `False`).

## Les conditions

```python
if note >= 10:
    print("admis")
else:
    print("refusé")
```

Les comparaisons s'écrivent `==` (égal), `!=` (différent), `<`, `<=`, `>`, `>=`. L'**indentation** (le décalage vers la droite) est obligatoire : elle dit quelles lignes sont dans le `if`.

## La boucle for : répéter un nombre connu de fois

<div class="encadre">

`for k in range(n):` répète le bloc indenté $n$ fois, avec `k` qui vaut successivement $0, 1, \dots, n - 1$.

</div>

Exemple : calculer $u_{10}$ pour la suite $u_0 = 2$ et $u_{n+1} = 3u_n - 1$.

```python
u = 2
for k in range(10):
    u = 3 * u - 1
print(u)
```

La boucle fait 10 tours : au premier, `u` devient $u_1$ ; au dixième, $u_{10}$.

## La boucle while : répéter tant qu'une condition est vraie

<div class="encadre">

`while condition:` répète le bloc indenté **tant que** la condition est vraie. On l'utilise quand on ne sait pas à l'avance combien de tours il faudra.

</div>

Retour aux bactéries, c'est un **algorithme de seuil** :

```python
p = 1000
n = 0
while p <= 1000000:
    p = 2 * p
    n = n + 1
print(n)
```

On obtient <mark>10 heures</mark> : $1\,000 \times 2^{10} = 1\,024\,000$. Attention à bien faire avancer la condition, sinon la boucle ne s'arrête jamais.

## Les fonctions

```python
def f(x):
    return x**2 - 3*x + 1

print(f(4))    # affiche 5
```

`def` crée une fonction, `return` renvoie le résultat. En Python, la puissance s'écrit `**`, pas `^`.

## Les listes

Une liste range plusieurs valeurs dans un même bol, numérotées à partir de **0**.

```python
L = [3, 8, 1]
L.append(5)       # L devient [3, 8, 1, 5]
print(L[0])       # affiche 3, le premier élément
print(len(L))     # affiche 4, le nombre d'éléments
```

On peut construire une liste en compréhension : `[k**2 for k in range(5)]` donne `[0, 1, 4, 9, 16]`.
