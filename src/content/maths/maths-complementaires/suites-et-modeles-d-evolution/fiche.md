---
titre: Suites et modèles d'évolution
---

<div class="encadre">

**L'image.** La tirelire ajoute toujours la même somme (arithmétique). La boule de neige est multipliée à chaque tour (géométrique).

</div>

## Les deux suites

<div class="etape o">

| | Arithmétique | Géométrique |
|---|---|---|
| relation | $u_{n+1} = u_n + r$ | $u_{n+1} = qu_n$ |
| terme général | $u_0 + nr$ | $u_0q^n$ |
| modèle | ajout fixe | taux fixe |

</div>

- Taux $t\,\%$ : $q = 1 + \frac{t}{100}$.
- $1 + q + \cdots + q^n = \frac{1 - q^{n+1}}{1 - q}$.

## Seuil et limite

1. Écrire l'inéquation $u_0q^n > S$.
2. Résoudre avec $\ln$ ou la calculatrice.
3. Vérifier les deux entiers autour.

- $q > 1$ : $q^n \to +\infty$. $0 < q < 1$ : $q^n \to 0$.

## Les pièges

- <span class="p">+3 % par an : $q = 1{,}03$</span>.
- $\ln q < 0$ si $q < 1$ : le sens de l'inégalité change.
- La somme compte $n + 1$ termes de $u_0$ à $u_n$.
