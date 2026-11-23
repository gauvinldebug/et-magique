---
titre: Le calcul littéral
court: Calcul littéral
description: Expressions avec des lettres, substituer une valeur, réduire, la distributivité simple et double, et prouver une propriété avec le calcul littéral, expliqués avec les fruits d'un panier qu'on ne mélange pas, avec des exercices corrigés pas à pas. 4e maths.
ordre: 2
publie: 2026-11-23T01:11:00
video:
  youtube: ""
piege: >-
  **On n'additionne pas des $x$ et des $x^2$.** $3x + 2x^2$ ne se réduit pas, comme on n'additionne pas des pommes et des poires. Par contre $3x \times 2x = 6x^2$ : en multipliant, tout se mélange.
pdf:
  cours: /pdf/maths/4e/calcul-litteral-cours.pdf
  fiche: /pdf/maths/4e/calcul-litteral-fiche.pdf
  exercices: /pdf/maths/4e/calcul-litteral-exercices.pdf
suivant: equations
---

## Le problème

Prends trois nombres entiers qui se suivent, par exemple 7, 8 et 9. Leur somme vaut 24, un multiple de 3. Avec 15, 16 et 17 : 48, encore un multiple de 3. Est-ce toujours vrai ? On ne peut pas tester tous les nombres… mais les lettres, elles, le peuvent.

## L'idée : les fruits du panier

Une expression littérale, c'est un **panier de fruits**. La lettre $\corange{x}$ représente un fruit (une pomme), $\corange{x}^2$ un autre fruit (une poire), et les nombres seuls d'autres encore.

- **Réduire**, c'est **ranger le panier** : on regroupe les pommes avec les pommes, les poires avec les poires.
- On ne peut **pas** mélanger les pommes et les poires : $3\corange{x} + 2\corange{x}^2$ reste tel quel.

## Expressions et substitution

<div class="encadre">

Une **expression littérale** contient une ou plusieurs lettres qui représentent des nombres.

- On peut supprimer le signe $\times$ devant une lettre ou une parenthèse : $3 \times \corange{x} = 3\corange{x}$ et $2 \times (\corange{x} + 1) = 2(\corange{x} + 1)$.
- $\corange{x} \times \corange{x} = \corange{x}^2$ et $\corange{x} \times \corange{x} \times \corange{x} = \corange{x}^3$.

**Substituer**, c'est remplacer la lettre par un nombre pour calculer la valeur de l'expression.

</div>

Exemple : pour $\corange{x} = 4$, $A = 2\corange{x}^2 - 3\corange{x} = 2 \times 16 - 12 = 20$.

## Réduire

<div class="encadre">

On regroupe les termes de même nature :
$$5\corange{x} + 3 - 2\corange{x} + 7 = (5 - 2)\corange{x} + (3 + 7) = 3\corange{x} + 10.$$

</div>

## Développer

<div class="encadre">

- **Distributivité simple** : $\cbleu{k}(a + b) = \cbleu{k}a + \cbleu{k}b$ et $\cbleu{k}(a - b) = \cbleu{k}a - \cbleu{k}b$.
- **Double distributivité** : $(a + b)(c + d) = ac + ad + bc + bd$.

</div>

Exemple : $(\corange{x} + 3)(\corange{x} - 2) = \corange{x}^2 - 2\corange{x} + 3\corange{x} - 6 = \corange{x}^2 + \corange{x} - 6$.

**Un signe moins devant une parenthèse** change tous les signes à l'intérieur : $5 - (\corange{x} - 4) = 5 - \corange{x} + 4 = 9 - \corange{x}$.

## Prouver avec des lettres

Un exemple ne prouve rien : il faut que ça marche pour **tous** les nombres. On appelle $\corange{n}$ un nombre quelconque, on calcule avec $\corange{n}$, et on conclut.

## Retour au problème

Trois entiers consécutifs s'écrivent $\corange{n}$, $\corange{n} + 1$ et $\corange{n} + 2$. Leur somme :

$$
\corange{n} + (\corange{n} + 1) + (\corange{n} + 2) = 3\corange{n} + 3 = 3(\corange{n} + 1)
$$

C'est 3 fois un entier. <mark>La somme de trois entiers consécutifs est toujours un multiple de 3</mark>.

Ces calculs servent à résoudre des [équations](/maths/4e/equations/cours/), et iront plus loin en 3e avec [développer et factoriser](/maths/3e/developper-et-factoriser/cours/).
