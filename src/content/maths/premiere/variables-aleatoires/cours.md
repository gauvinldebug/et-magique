---
titre: Variables aléatoires réelles
court: Variables aléatoires
description: Les variables aléatoires expliquées avec un stand de fête foraine, la loi de probabilité, l'espérance, la variance, l'écart type et les transformations aX + b, avec des exercices corrigés pas à pas. Première spécialité maths.
ordre: 8
publie: 2026-11-22T21:31:00
video:
  youtube: ""
piege: "**L'espérance n'est pas forcément une valeur possible.** Avec un dé, $E(X) = 3{,}5$, alors qu'aucune face ne porte 3,5. L'espérance est une **moyenne** sur un très grand nombre de parties, pas le résultat d'une partie."
pdf:
  cours: /pdf/maths/premiere/variables-aleatoires-cours.pdf
  fiche: /pdf/maths/premiere/variables-aleatoires-fiche.pdf
  exercices: /pdf/maths/premiere/variables-aleatoires-exercices.pdf
suivant: algorithmique
---

## Le problème

À la fête foraine, un stand propose : « 2 € la partie. Tu lances un dé : avec un 6, tu gagnes 8 € ; avec un 5, on te rembourse ; sinon, tu perds ta mise. » Faut-il jouer ? Le forain gagne-t-il de l'argent ?

Pour répondre, on ne s'intéresse plus seulement aux issues (1, 2, …, 6) mais à **ce qu'elles rapportent**. C'est le rôle d'une variable aléatoire.

## L'idée : le stand de fête foraine

Chaque issue de l'expérience est une case du stand. Sur chaque case, le forain a collé une **étiquette avec un nombre** : ce que tu gagnes (ou perds) si la boule tombe là.

- La **variable aléatoire** $X$, c'est la lecture de l'étiquette.
- La **loi** de $X$, c'est le tableau qui dit, pour chaque montant possible, avec quelle probabilité tu le lis.
- L'<span class="o">espérance</span>, c'est ce que tu gagnes **en moyenne par partie** si tu joues un très grand nombre de fois.
- La **variance** et l'**écart type** mesurent si les gains sont sages ou très dispersés.

## Variable aléatoire et loi

<div class="encadre">

Une **variable aléatoire** $X$ sur un univers $\Omega$ est une fonction qui associe un nombre réel à chaque issue.

La **loi de probabilité** de $X$ donne, pour chaque valeur $x_i$ prise par $X$, la probabilité $p_i = P(X = x_i)$. On a toujours $p_1 + p_2 + \dots + p_n = 1$.

</div>

Pour le stand, le gain **net** $X$ (gain moins la mise de 2 €) vaut $6$ avec un 6, $0$ avec un 5, et $-2$ sinon :

| $x_i$ | $-2$ | $0$ | $6$ |
|---|---|---|---|
| $P(X = x_i)$ | $\frac{4}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ |

On note aussi $P(X \le a)$, $P(X > a)$… Par exemple $P(X \ge 0) = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$.

## L'espérance

<div class="encadre">

$$
E(X) = p_1x_1 + p_2x_2 + \dots + p_nx_n = \sum_{i=1}^{n} p_i\,x_i
$$

</div>

Pour le stand : $E(X) = \frac{4}{6} \times (-2) + \frac{1}{6} \times 0 + \frac{1}{6} \times 6 = \frac{-8 + 6}{6} = \cvert{-\frac{1}{3}}$.

En moyenne, le joueur perd environ 33 centimes par partie : <mark>le jeu est défavorable au joueur</mark>, et le forain gagne en moyenne 33 centimes par partie. Un jeu est **équitable** si $E(X) = 0$.

## Variance et écart type

<div class="encadre">

$$
V(X) = \sum_{i=1}^{n} p_i\,\big(x_i - E(X)\big)^2 \qquad\qquad \sigma(X) = \sqrt{V(X)}
$$

Formule pratique (König-Huygens) : $V(X) = E(X^2) - E(X)^2$, avec $E(X^2) = \sum p_i\,x_i^2$.

</div>

Deux stands peuvent avoir la même espérance mais des risques très différents : l'un fait gagner ou perdre quelques centimes, l'autre fait perdre souvent mais rapporte parfois un gros lot. L'écart type mesure cette **dispersion**, dans la même unité que $X$ (ici, en euros).

## Transformation affine

<div class="encadre">

Pour tous réels $a$ et $b$ :

$$
E(aX + b) = a\,E(X) + b \qquad V(aX + b) = a^2\,V(X) \qquad \sigma(aX + b) = |a|\,\sigma(X)
$$

</div>

Si le forain double tous les gains et ajoute 1 € de bonus à chaque partie, le nouveau gain est $Y = 2X + 1$ : $E(Y) = 2 \times \left(-\frac{1}{3}\right) + 1 = \frac{1}{3}$. Ajouter une constante décale tout, mais ne change pas la dispersion : le $+ 1$ disparaît dans la variance.

## Répéter l'expérience

Simule le stand 10 000 fois à l'ordinateur et calcule le gain moyen : tu trouveras un nombre très proche de $-0{,}33$. C'est le sens concret de l'espérance, que la [loi des grands nombres](/maths/terminale/loi-des-grands-nombres/cours/) rendra précis en Terminale.
