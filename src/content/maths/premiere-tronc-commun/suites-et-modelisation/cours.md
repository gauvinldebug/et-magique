---
titre: Suites et modélisation des évolutions
court: Suites et modélisation
description: Suites numériques, croissance linéaire et suites arithmétiques, croissance exponentielle et suites géométriques, représentation graphique et calcul au tableur, expliquées avec un escalier et une rumeur, avec des exercices corrigés pas à pas. Première, maths du tronc commun.
ordre: 4
publie: 2026-11-23T02:23:00
video:
  youtube: ""
piege: >-
  **Attention au rang du premier terme.** Si $u_0$ est la valeur de départ, la valeur après 10 ans est $u_{10}$, mais si l'on commence à $u_1$, c'est $u_{11}$. Et une croissance exponentielle peut être plus lente qu'une croissance linéaire **au début**, avant de la dépasser.
pdf:
  cours: /pdf/maths/premiere-tronc-commun/suites-et-modelisation-cours.pdf
  fiche: /pdf/maths/premiere-tronc-commun/suites-et-modelisation-fiche.pdf
  exercices: /pdf/maths/premiere-tronc-commun/suites-et-modelisation-exercices.pdf
suivant: statistiques-et-probabilites
---

## Le problème

On te propose un salaire de départ de 1 800 € par mois, avec deux options d'augmentation chaque année : **A**, + 50 € par an ; **B**, + 2 % par an. Laquelle choisir ?

## L'idée : l'escalier et la rumeur

Un **escalier** monte de marches toutes **égales** : à chaque pas, tu gagnes la même hauteur. C'est une croissance **linéaire**.

Une **rumeur**, elle, se propage autrement : chaque personne qui la connaît la raconte à d'autres. Plus il y a de gens au courant, plus elle va vite. Le nombre est **multiplié** à chaque étape : c'est une croissance **exponentielle**. Au début elle semble lente, puis elle dépasse n'importe quel escalier.

## Suites numériques

<div class="encadre">

Une **suite** $(u_n)$ est une liste de nombres numérotés : $u_0$, $u_1$, $u_2$, … Le nombre $u_n$ est le **terme de rang $n$**.

On peut la définir par une **formule** ($u_n = 3n + 1$) ou par une **relation de récurrence** ($u_{n+1} = u_n + 3$, avec $u_0 = 1$), qui donne chaque terme à partir du précédent.

Au tableur : si $u_0$ est en A2, on écrit `=A2+3` en A3 puis on recopie vers le bas.

</div>

## Les deux modèles

<div class="encadre">

| | Croissance linéaire | Croissance exponentielle |
|---|---|---|
| suite | **arithmétique** de raison $r$ | **géométrique** de raison $q$ |
| récurrence | $u_{n+1} = u_n + r$ | $u_{n+1} = q \times u_n$ |
| formule | $u_n = u_0 + nr$ | $\corange{u_n = u_0 \times q^n}$ |
| graphique | points alignés | points sur une courbe qui s'envole |

Une évolution de $t\,\%$ par étape donne une suite géométrique de raison $q = 1 + \frac{t}{100}$.

</div>

## Retour au problème

Avec A : $a_n = 1800 + 50n$. Avec B : $b_n = 1800 \times 1{,}02^n$.

Après 10 ans : $a_{10} = 2300$ € et $b_{10} \approx 2194$ €. L'option A est meilleure. Mais au tableur, on voit que B dépasse A à partir de $n = 33$ : $a_{33} = 3450$ € et $b_{33} \approx 3460$ €.

<mark>Sur une carrière de moins de 33 ans, l'option A rapporte plus ; au-delà, l'option B finit par gagner</mark>.

La suite : [statistiques et probabilités](/maths/premiere-tronc-commun/statistiques-et-probabilites/cours/). Pour aller plus loin : les [suites de 1re spécialité](/maths/premiere/suites-numeriques/cours/).
