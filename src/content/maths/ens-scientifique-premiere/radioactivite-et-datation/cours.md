---
titre: Radioactivité, demi-vie et datation
court: Radioactivité et datation
description: Désintégration aléatoire, demi-vie, nombre de noyaux restants divisé par 2 à chaque demi-vie, proportion restante, datation au carbone 14 par encadrement, expliqués avec un sac de pièces que l'on lance, avec des exercices corrigés pas à pas. Enseignement scientifique de Première, partie maths.
ordre: 4
publie: 2026-11-23T09:04:00
video:
  youtube: ""
piege: >-
  **Deux demi-vies ne font pas disparaître l'échantillon.** Après une demi-vie, il reste la moitié ; après deux, la moitié de la moitié, soit un quart. Le nombre de noyaux est **divisé** par 2 à chaque demi-vie, il ne diminue pas de la même quantité.
pdf:
  cours: /pdf/maths/ens-scientifique-premiere/radioactivite-et-datation-cours.pdf
  fiche: /pdf/maths/ens-scientifique-premiere/radioactivite-et-datation-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-premiere/radioactivite-et-datation-exercices.pdf
suivant: gammes-et-frequences
---

## Le problème

Un morceau de charbon de bois trouvé dans une grotte ne contient plus que 25 % du carbone 14 qu'il contenait quand l'arbre était vivant. La demi-vie du carbone 14 est de 5 730 ans. Quel âge a ce charbon ?

## L'idée : le sac de pièces

Prends un sac de 1 000 pièces. Lance-les toutes : celles qui tombent sur pile sont retirées. Il en reste environ 500. Relance les survivantes : il en reste environ 250. Puis 125…

Tu ne peux pas prévoir **quelle** pièce va partir, mais tu sais qu'**environ la moitié** part à chaque lancer. Les noyaux radioactifs se comportent ainsi : chacun se désintègre au hasard, mais <mark>la population est divisée par 2 à chaque demi-vie</mark>.

## Une désintégration aléatoire

<div class="encadre">

La désintégration d'un noyau radioactif est un phénomène **aléatoire** : on ne peut pas prédire l'instant où un noyau donné se désintègre. Sur un très grand nombre de noyaux, en revanche, l'évolution est prévisible.

La **demi-vie** $\corange{t_{1/2}}$ est la durée au bout de laquelle la moitié des noyaux d'un échantillon s'est désintégrée.

</div>

## Le nombre de noyaux restants

<div class="encadre">

Si $N_0$ est le nombre initial de noyaux, au bout de $\corange{n}$ demi-vies :

$$
\cbleu{N} = \frac{N_0}{2^{\corange{n}}}
$$

La proportion restante est $\frac{1}{2^n}$ : 50 %, 25 %, 12,5 %, 6,25 %… C'est une **suite géométrique** de raison $\frac{1}{2}$. Entre deux demi-vies, la courbe décroît régulièrement sans jamais atteindre 0.

</div>

## Dater un échantillon

<div class="encadre">

Un être vivant échange du carbone avec l'atmosphère : sa proportion de carbone 14 reste constante. À sa mort, les échanges s'arrêtent et le carbone 14 décroît.

1. On mesure la proportion $p$ de carbone 14 restante.
2. On cherche $n$ tel que $\frac{1}{2^n} = p$ (exactement, ou par encadrement).
3. L'âge vaut $n \times t_{1/2}$.

</div>

## Retour au problème

25 % $= \frac{1}{4} = \frac{1}{2^2}$ : il s'est écoulé $n = 2$ demi-vies.

$$
\text{âge} = 2 \times 5\,730 = 11\,460 \text{ ans}
$$

<mark>Le charbon a environ 11 460 ans</mark>.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-premiere/radioactivite-et-datation/exercices/). La suite : [gammes et fréquences](/maths/ens-scientifique-premiere/gammes-et-frequences/cours/). Pour revoir les suites géométriques : [suites et modélisation](/maths/premiere-tronc-commun/suites-et-modelisation/cours/).
