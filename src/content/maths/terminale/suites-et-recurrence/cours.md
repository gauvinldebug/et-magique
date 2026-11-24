---
titre: Suites et raisonnement par récurrence
court: Suites et récurrence
description: Le raisonnement par récurrence expliqué avec des dominos, la méthode en 3 étapes et des exercices corrigés pas à pas, type bac. Terminale spécialité maths.
ordre: 1
publie: 2026-11-22
video:
  youtube: "HrNc7dBiWTQ"
  duree: 10 min
  chapitres:
    - { t: "0:00", titre: "Bonjour et objectif" }
    - { t: "0:15", titre: "Le problème" }
    - { t: "1:00", titre: "Les dominos" }
    - { t: "2:30", titre: "Le cours" }
    - { t: "4:00", titre: "Montrer que uₙ ≤ 3" }
    - { t: "6:00", titre: "Montrer que la suite est croissante" }
    - { t: "8:00", titre: "Le piège" }
    - { t: "8:50", titre: "À toi" }
piege: "**L'hérédité seule ne prouve rien.** Sans initialisation, rien ne tombe : la propriété « $\\un > 3$ » est héréditaire, et pourtant elle est fausse."
pdf:
  cours: /pdf/maths/terminale/suites-et-recurrence-cours.pdf
  fiche: /pdf/maths/terminale/suites-et-recurrence-fiche.pdf
  exercices: /pdf/maths/terminale/suites-et-recurrence-exercices.pdf
suivant: limites-de-suites
---

## Le problème

On étudie la suite définie par $\uz = 2$ et, pour tout entier naturel $\corange{n}$ :

$$
\unn = \frac{1}{3}\,\un + 2
$$

On calcule les premiers termes : $\cbleu{u}_{\corange{1}} = \frac{8}{3} \approx 2{,}67$, puis $\cbleu{u}_{\corange{2}} = \frac{26}{9} \approx 2{,}89$ et $\cbleu{u}_{\corange{3}} = \frac{80}{27} \approx 2{,}96$.

On dirait que la suite augmente et ne dépasse jamais 3. Mais <mark>« on dirait » n'est pas une preuve</mark>, et on ne peut pas calculer une infinité de termes. Il faut une méthode qui marche pour tous les $\corange{n}$ d'un coup : le raisonnement par récurrence.

## L'idée : les dominos

Imagine une rangée infinie de dominos. Pour être sûr qu'ils tombent tous, il suffit de deux choses :

1. **le premier domino tombe** : c'est l'<span class="o">initialisation</span> ;
2. **chaque domino, en tombant, fait tomber le suivant** : c'est l'<span class="i">hérédité</span>.

Alors le premier fait tomber le deuxième, qui fait tomber le troisième, et ainsi de suite : tous tombent.

<div class="labo" data-labo="dominos"></div>

## La méthode en 3 étapes

<div class="encadre">

**Raisonnement par récurrence.** On veut démontrer qu'une propriété $P(\corange{n})$ est vraie pour tout entier naturel $\corange{n}$.

<div class="etape o">

**1. Initialisation.** On vérifie que $P(0)$ est vraie.

</div>
<div class="etape i">

**2. Hérédité.** On suppose que $P(\corange{k})$ est vraie pour un entier $\corange{k}$ quelconque : c'est l'<mark>hypothèse de récurrence</mark>. On démontre qu'alors $P(\corange{k+1})$ est vraie.

</div>
<div class="etape t">

**3. Conclusion.** $P$ est vraie au rang 0 et héréditaire, donc $P(\corange{n})$ est vraie pour tout entier naturel $\corange{n}$.

</div>

</div>

Si la suite commence à un autre rang, par exemple $\corange{n} = 1$, l'initialisation se fait à ce rang-là.

## Un exemple rédigé : montrer que $\un \le 3$

**Initialisation.** $\uz = 2$ et $2 \le 3$ : la propriété est vraie au rang 0.

**Hérédité.** On suppose que pour un entier $\corange{k}$ quelconque, $\uk \le 3$. On veut montrer que $\ukk \le 3$.

$$
\begin{aligned}
\uk &\le 3 && \text{on suppose} \\
\tfrac{1}{3}\,\uk &\le 1 && \times \tfrac{1}{3} \text{, positif : le sens ne change pas} \\
\tfrac{1}{3}\,\uk + 2 &\le 3 && + 2 \\
\ukk &\le 3 && \text{c'est la formule de la suite}
\end{aligned}
$$

**Conclusion.** Par récurrence, pour tout entier naturel $\corange{n}$, $\un \le 3$.

On a transformé l'hypothèse pas à pas, jusqu'à faire apparaître la formule de la suite. C'est presque toujours comme ça qu'on fait.

## À retenir sur les suites

- Une suite est **croissante** si, pour tout $\corange{n}$, $\un \le \unn$. Ça se démontre souvent par récurrence (exercice 3).
- Elle est **majorée par 3** si, pour tout $\corange{n}$, $\un \le 3$.
- Une suite croissante et majorée **converge**. On verra vers quoi dans le chapitre sur les limites.
