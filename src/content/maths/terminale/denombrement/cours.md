---
titre: Dénombrement et combinatoire
court: Dénombrement
description: Le dénombrement expliqué avec un vestiaire, un podium et une poignée de cartes, le principe multiplicatif, les k-uplets, les arrangements, les permutations et les combinaisons, avec des exercices corrigés. Terminale spécialité maths.
ordre: 11
publie: 2026-11-22T20:21:00
video:
  youtube: ""
piege: "**L'ordre compte-t-il ?** Un podium (1er, 2e, 3e) n'est pas une poignée de cartes. Si l'ordre compte, ce sont des arrangements ; s'il ne compte pas, des combinaisons. Se tromper donne un résultat $k!$ fois trop grand ou trop petit."
pdf:
  cours: /pdf/maths/terminale/denombrement-cours.pdf
  fiche: /pdf/maths/terminale/denombrement-fiche.pdf
  exercices: /pdf/maths/terminale/denombrement-exercices.pdf
suivant: loi-binomiale
---

## Le problème

Combien de codes différents pour un cadenas à 4 chiffres ? Combien de podiums possibles dans une course de 8 coureurs ? Combien de mains de 5 cartes dans un jeu de 32 ? On ne peut pas tout écrire : il faut **compter sans énumérer**.

## L'idée : le vestiaire, le podium et la poignée de cartes

Trois situations reviennent tout le temps.

- **Le vestiaire.** Tu as 3 t-shirts et 4 pantalons. Pour chaque t-shirt, 4 pantalons possibles : $3 \times 4 = 12$ tenues. Les choix s'enchaînent, <mark>les nombres se multiplient</mark>.
- **Le podium.** 8 coureurs, 3 places. Pour l'or, 8 choix ; pour l'argent, il en reste 7 ; pour le bronze, 6. L'ordre compte et on ne peut pas être deux fois sur le podium : $8 \times 7 \times 6 = 336$.
- **La poignée de cartes.** Tu prends 3 cartes d'un coup. L'ordre ne compte pas : avoir « roi, dame, as » ou « as, roi, dame », c'est la même main.

Toute la difficulté du chapitre est de reconnaître dans quelle situation on est.

## Le principe multiplicatif

<div class="encadre">

**Cardinal d'un produit cartésien.** Si $E$ a $n$ éléments et $F$ en a $p$, alors $E \times F$ a $n \times p$ éléments.

**$k$-uplets.** Le nombre de $k$-uplets d'éléments d'un ensemble à $n$ éléments (on choisit $k$ fois, **avec répétition**, **ordre important**) est $n^k$.

</div>

Le cadenas à 4 chiffres : $10^4 = 10\,000$ codes. Une même roue peut afficher le même chiffre que sa voisine.

Le nombre de **parties** d'un ensemble à $n$ éléments est $2^n$ : pour chaque élément, deux choix, dedans ou dehors.

## Arrangements et permutations

<div class="encadre">

Un **arrangement** de $k$ éléments parmi $n$ est un $k$-uplet d'éléments **distincts** (ordre important, **sans répétition**). Leur nombre est :

$$
n \times (n - 1) \times \dots \times (n - k + 1) = \frac{n!}{(n - k)!}
$$

Une **permutation** de $n$ éléments est un arrangement des $n$ éléments. Il y en a $n! = n \times (n - 1) \times \dots \times 2 \times 1$.

</div>

Par convention, $0! = 1$. Exemple : il y a $5! = 120$ façons de ranger 5 livres sur une étagère.

## Les combinaisons

<div class="encadre">

Une **combinaison** de $k$ éléments parmi $n$ est une **partie** à $k$ éléments (ordre **sans importance**, sans répétition). Leur nombre est :

$$
\binom{n}{k} = \frac{n!}{k!\,(n - k)!}
$$

</div>

D'où vient la formule ? Chaque poignée de $k$ cartes donne $k!$ podiums différents (on peut ranger les $k$ cartes de $k!$ façons). Donc le nombre de poignées est le nombre de podiums divisé par $k!$.

Mains de 5 cartes dans un jeu de 32 : $\binom{32}{5} = \frac{32 \times 31 \times 30 \times 29 \times 28}{5 \times 4 \times 3 \times 2 \times 1} = 201\,376$.

## Les propriétés des coefficients binomiaux

<div class="encadre">

- $\binom{n}{0} = \binom{n}{n} = 1$ et $\binom{n}{1} = n$.
- **Symétrie** : $\binom{n}{k} = \binom{n}{n - k}$. Choisir les $k$ cartes qu'on garde, c'est choisir les $n - k$ qu'on laisse.
- **Relation de Pascal** : $\binom{n}{k} + \binom{n}{k + 1} = \binom{n + 1}{k + 1}$.
- $\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n$.

</div>

La relation de Pascal permet de construire le **triangle de Pascal**, ligne après ligne : chaque nombre est la somme des deux nombres au-dessus de lui.

| $n$ | | | | | |
|---|---|---|---|---|---|
| 0 | 1 | | | | |
| 1 | 1 | 1 | | | |
| 2 | 1 | 2 | 1 | | |
| 3 | 1 | 3 | 3 | 1 | |
| 4 | 1 | 4 | 6 | 4 | 1 |

## Le tableau de décision

| L'ordre compte ? | Répétitions possibles ? | Outil | Nombre |
|---|---|---|---|
| oui | oui | $k$-uplets | $n^k$ |
| oui | non | arrangements | $\frac{n!}{(n-k)!}$ |
| non | non | combinaisons | $\binom{n}{k}$ |
