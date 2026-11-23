---
titre: Modèles démographiques, Malthus et ses limites
court: Modèles démographiques
description: Modèle linéaire et suite arithmétique, modèle exponentiel de Malthus et suite géométrique, variation absolue et variation relative, temps de doublement, limites du modèle et modèle logistique de Verhulst, expliqués avec des lapins et leur potager, avec des exercices corrigés pas à pas. Enseignement scientifique de Terminale, partie maths.
ordre: 3
publie: 2026-11-23T09:09:00
video:
  youtube: ""
piege: >-
  **Une croissance de 2 % par an ne fait pas 40 % en 20 ans.** Les pourcentages se composent : $1{,}02^{20} \approx 1{,}49$, soit $+49\,\%$. Et une suite géométrique finit toujours par dépasser une suite arithmétique croissante, même si elle part de plus bas.
pdf:
  cours: /pdf/maths/ens-scientifique-terminale/modeles-demographiques-cours.pdf
  fiche: /pdf/maths/ens-scientifique-terminale/modeles-demographiques-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-terminale/modeles-demographiques-exercices.pdf
suivant: hardy-weinberg
---

## Le problème

En 2020, la population mondiale était d'environ 7,8 milliards d'habitants, avec une croissance d'environ 1 % par an. Si ce rythme se maintenait, combien serions-nous en 2100 ? Les projections de l'ONU annoncent plutôt 10 milliards environ. Pourquoi un tel écart ?

## L'idée : les lapins et le potager

Un couple de lapins s'installe près d'un potager. Chaque année, le nombre de lapins est **multiplié** (chaque couple fait des petits, qui en font à leur tour). Le jardinier, lui, **ajoute** chaque année le même nombre de rangs de carottes.

Au début, il y a largement assez de carottes. Mais une quantité qu'on multiplie finit toujours par dépasser une quantité à laquelle on ajoute. <mark>C'est l'intuition de Malthus en 1798 : la population croît de façon géométrique, les ressources de façon arithmétique</mark>.

## Modèle linéaire, modèle exponentiel

<div class="encadre">

- **Modèle linéaire** : la variation **absolue** est constante. On ajoute $r$ chaque année : $\cbleu{u_n = u_0 + nr}$ (suite arithmétique).
- **Modèle exponentiel** : la variation **relative** est constante. Une croissance de $t$ par an revient à multiplier par $q = 1 + t$ : $\cbleu{u_n = u_0 \times q^n}$ (suite géométrique).

Pour reconnaître le modèle dans un tableau : on calcule les différences $u_{n+1} - u_n$ (constantes si linéaire) ou les quotients $\frac{u_{n+1}}{u_n}$ (constants si exponentiel).

</div>

## Temps de doublement

<div class="encadre">

Le **temps de doublement** d'une population en croissance exponentielle est le plus petit $\corange{n}$ tel que $q^{\corange{n}} \geq 2$. On le trouve à la calculatrice ou au tableur. À 1 % par an : $1{,}01^{70} \approx 2{,}01$, environ 70 ans. À 2 % : environ 35 ans.

</div>

## Les limites du modèle

<div class="encadre">

Le modèle de Malthus est plausible à court terme, mais **irréaliste à long terme** : les ressources, l'espace et les choix des sociétés (baisse de la natalité) freinent la croissance.

Le **modèle logistique** de Verhulst corrige cela : la croissance est presque exponentielle au début, puis ralentit, et la population se stabilise vers une valeur maximale appelée **capacité d'accueil**. Sa courbe a la forme d'un S.

</div>

## Retour au problème

Avec Malthus : $u_n = 7{,}8 \times 1{,}01^n$, et 2100 correspond à $n = 80$.

$$
u_{80} = 7{,}8 \times 1{,}01^{80} \approx 17{,}3 \text{ milliards}
$$

<mark>Le modèle exponentiel prévoit plus de 17 milliards, contre 10 milliards environ pour l'ONU</mark> : le taux de croissance baisse déjà, la courbe réelle ressemble davantage au modèle logistique.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-terminale/modeles-demographiques/exercices/). La suite : [le modèle de Hardy-Weinberg](/maths/ens-scientifique-terminale/hardy-weinberg/cours/). Pour revoir les suites : [suites numériques](/maths/premiere/suites-numeriques/cours/).
