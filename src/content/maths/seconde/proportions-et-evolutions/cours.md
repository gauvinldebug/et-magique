---
titre: Proportions et pourcentages d'évolution
court: Proportions et évolutions
description: Proportions, pourcentages, coefficient multiplicateur, évolutions successives et évolution réciproque expliqués avec le zoom d'un appareil photo, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 3
publie: 2026-11-22T22:02:00
video:
  youtube: ""
piege: >-
  **Une hausse de 20 % puis une baisse de 20 % ne ramènent pas au départ.** $1{,}2 \times 0{,}8 = 0{,}96$ : on a perdu 4 %. Les pourcentages successifs **se multiplient**, ils ne s'additionnent pas.
pdf:
  cours: /pdf/maths/seconde/proportions-et-evolutions-cours.pdf
  fiche: /pdf/maths/seconde/proportions-et-evolutions-fiche.pdf
  exercices: /pdf/maths/seconde/proportions-et-evolutions-exercices.pdf
suivant: generalites-sur-les-fonctions
---

## Le problème

Un pull coûte 50 €. Il augmente de 20 %, puis il est soldé à $-20$ %. Revient-il à 50 € ? Et s'il a baissé de 25 %, de combien doit-il remonter pour retrouver son prix ?

L'intuition se trompe presque toujours sur ces questions. Il faut un outil : le **coefficient multiplicateur**.

## L'idée : le zoom de l'appareil photo

Une évolution en pourcentage, c'est un **zoom**. Augmenter de 20 %, c'est zoomer $\times 1{,}2$. Baisser de 20 %, c'est dézoomer $\times 0{,}8$.

Si tu zoomes $\times 1{,}2$ puis dézoomes $\times 0{,}8$, l'image finale est à $1{,}2 \times 0{,}8 = 0{,}96$ de l'originale : un peu plus petite. Les zooms s'**enchaînent en se multipliant**.

## Proportion et pourcentage

<div class="encadre">

Si une sous-population A a $n_A$ éléments dans une population totale de $n$ éléments, la **proportion** de A est
$$p = \frac{n_A}{n}, \quad \text{avec } 0 \le p \le 1.$$
On l'écrit souvent en pourcentage : $p = 0{,}35 = 35\,\%$.

</div>

**Proportion de proportion.** Si 40 % des élèves sont internes, et que 25 % des internes font du sport, alors la proportion d'internes sportifs parmi tous les élèves est $0{,}4 \times 0{,}25 = 0{,}1 = 10\,\%$.

## Le coefficient multiplicateur

<div class="encadre">

Une quantité passe de $\cvert{V_D}$ (valeur de départ) à $\cbleu{V_A}$ (valeur d'arrivée).

- Le **taux d'évolution** est $t = \dfrac{\cbleu{V_A} - \cvert{V_D}}{\cvert{V_D}}$.
- Le **coefficient multiplicateur** est $\corange{CM} = 1 + t$, et $\cbleu{V_A} = \corange{CM} \times \cvert{V_D}$.

Hausse de $t\,\%$ : $\corange{CM} = 1 + \frac{t}{100}$. Baisse de $t\,\%$ : $\corange{CM} = 1 - \frac{t}{100}$.

</div>

Exemples : $+15\,\%$ donne $\corange{CM} = 1{,}15$ ; $-30\,\%$ donne $\corange{CM} = 0{,}7$ ; $+100\,\%$ donne $\corange{CM} = 2$ (on double).

## Évolutions successives et réciproque

<div class="encadre">

- **Successives.** Plusieurs évolutions de coefficients $\corange{CM_1}$, $\corange{CM_2}$… équivalent à une seule de coefficient $\corange{CM_1} \times \corange{CM_2} \times \dots$
- **Réciproque.** Pour revenir à la valeur de départ après une évolution de coefficient $\corange{CM}$, il faut une évolution de coefficient $\dfrac{1}{\corange{CM}}$.

</div>

<div class="labo" data-labo="evolution"></div>

## Retour au problème

- Hausse puis baisse de 20 % : $\corange{CM} = 1{,}2 \times 0{,}8 = 0{,}96$. Le pull coûte $50 \times 0{,}96 = 48$ €. <mark>Il a perdu 4 %</mark>, il ne revient pas à 50 €.
- Après une baisse de 25 % ($\corange{CM} = 0{,}75$), la réciproque a pour coefficient $\dfrac{1}{0{,}75} \approx 1{,}333$. <mark>Il faut une hausse d'environ 33,3 %</mark>, pas de 25 %.

En Première, les [suites géométriques](/maths/premiere/suites-numeriques/cours/) répéteront ce même zoom à chaque étape.
