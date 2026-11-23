---
titre: Les puissances et la notation scientifique
court: Puissances
description: Puissances d'un nombre, exposants négatifs, puissances de 10, préfixes et notation scientifique, expliqués avec une feuille de papier qu'on plie en deux encore et encore, avec des exercices corrigés pas à pas. 4e maths.
ordre: 1
publie: 2026-11-23T01:10:00
video:
  youtube: ""
piege: >-
  **$2^3$ n'est pas $2 \times 3$.** $2^3 = 2 \times 2 \times 2 = 8$, alors que $2 \times 3 = 6$. L'exposant compte **combien de fois** on multiplie le nombre par lui-même.
pdf:
  cours: /pdf/maths/4e/puissances-cours.pdf
  fiche: /pdf/maths/4e/puissances-fiche.pdf
  exercices: /pdf/maths/4e/puissances-exercices.pdf
suivant: calcul-litteral
---

## Le problème

Une feuille de papier a une épaisseur de 0,1 mm. On la plie en deux, puis encore en deux, et ainsi de suite, 42 fois (en imaginant que ce soit possible). Quelle serait l'épaisseur obtenue ? Plus ou moins que la distance de la Terre à la Lune, environ 384 000 km ?

## L'idée : la feuille pliée

À chaque pliage, l'épaisseur **double**. Après 1 pli : $\times 2$. Après 2 plis : $\times 2 \times 2$. Après 3 plis : $\times 2 \times 2 \times 2$.

Écrire « $\times 2$ » quarante-deux fois serait interminable. On écrit $2^{42}$ : c'est une **puissance**. Et ça grandit beaucoup plus vite qu'on ne l'imagine.

## Les puissances

<div class="encadre">

Pour un nombre $a$ et un entier $n \ge 1$ :
$$a^{\corange{n}} = \underbrace{a \times a \times \dots \times a}_{\corange{n} \text{ facteurs}}$$
On lit « $a$ exposant $\corange{n}$ » ou « $a$ puissance $\corange{n}$ ».

Par convention, $a^1 = a$ et $a^0 = 1$ (pour $a \ne 0$).

**Exposant négatif** : $a^{-\corange{n}} = \dfrac{1}{a^{\corange{n}}}$. Exemple : $2^{-3} = \dfrac{1}{8}$.

</div>

**Attention aux parenthèses** : $(-3)^2 = 9$, mais $-3^2 = -9$ (seul le 3 est au carré).

## Les puissances de 10

<div class="encadre">

- $10^{\corange{n}} = 1\underbrace{0\dots0}_{\corange{n} \text{ zéros}}$ ; exemple : $10^6 = 1\,000\,000$.
- $10^{-\corange{n}} = 0{,}\underbrace{0\dots0}_{\corange{n} - 1}1$ ; exemple : $10^{-3} = 0{,}001$.
- $10^{\corange{n}} \times 10^{\corange{p}} = 10^{\corange{n} + \corange{p}}$ ; $\dfrac{10^{\corange{n}}}{10^{\corange{p}}} = 10^{\corange{n} - \corange{p}}$ ; $(10^{\corange{n}})^{\corange{p}} = 10^{\corange{n}\corange{p}}$.

</div>

Les **préfixes** : kilo ($10^3$), méga ($10^6$), giga ($10^9$), milli ($10^{-3}$), micro ($10^{-6}$), nano ($10^{-9}$).

## La notation scientifique

<div class="encadre">

Tout nombre décimal positif s'écrit de façon unique sous la forme
$$\cbleu{a} \times 10^{\corange{n}}, \quad \text{avec } 1 \le \cbleu{a} < 10 \text{ et } \corange{n} \text{ entier.}$$

</div>

Exemples : $384\,000 = 3{,}84 \times 10^5$ ; $0{,}00072 = 7{,}2 \times 10^{-4}$.

C'est l'écriture des scientifiques : on voit tout de suite l'**ordre de grandeur** (la puissance de 10).

## Retour au problème

L'épaisseur est $0{,}1 \times 2^{42}$ mm. La calculatrice donne $2^{42} \approx 4{,}4 \times 10^{12}$.

$$
0{,}1 \times 4{,}4 \times 10^{12} = 4{,}4 \times 10^{11} \text{ mm} = 4{,}4 \times 10^{5} \text{ km}
$$

Soit environ 440 000 km. <mark>Avec 42 plis, on dépasserait la Lune</mark>.

Au lycée, les puissances se retrouvent dans les [ensembles de nombres](/maths/seconde/ensembles-de-nombres/cours/) de Seconde, et ce doublement répété deviendra une [suite géométrique](/maths/premiere/suites-numeriques/cours/) en Première.
