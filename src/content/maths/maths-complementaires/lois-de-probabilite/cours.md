---
titre: Lois de probabilité discrètes et continues
court: Lois de probabilité
description: Variable aléatoire, espérance et variance, loi de Bernoulli, loi binomiale, loi géométrique et loi uniforme sur un intervalle, expliquées avec une série de tirs au but, avec des exercices corrigés pas à pas. Terminale maths complémentaires.
ordre: 5
publie: 2026-11-23T02:14:00
video:
  youtube: ""
piege: >-
  **La loi binomiale exige des épreuves identiques et indépendantes, avec seulement deux issues.** Tirer 3 cartes **sans remise** n'est pas binomial : la probabilité change à chaque tirage. Et « au moins 1 » se calcule plus vite par le contraire : $P(X \ge 1) = 1 - P(X = 0)$.
pdf:
  cours: /pdf/maths/maths-complementaires/lois-de-probabilite-cours.pdf
  fiche: /pdf/maths/maths-complementaires/lois-de-probabilite-fiche.pdf
  exercices: /pdf/maths/maths-complementaires/lois-de-probabilite-exercices.pdf
suivant: statistiques-a-deux-variables
---

## Le problème

Une joueuse réussit 80 % de ses tirs au but. Elle en tire 5, de façon indépendante. Quelle est la probabilité qu'elle en marque au moins 4 ?

## L'idée : la série de tirs au but

Chaque tir, c'est la même expérience, avec deux issues : **but** ou **raté**. Les tirs ne s'influencent pas. On ne s'intéresse qu'au **nombre de buts** à la fin de la série.

Pour compter, on imagine l'arbre de tous les tirs : chaque chemin avec 4 buts a la même probabilité, il suffit de compter **combien** il y en a. C'est tout le principe de la **loi binomiale**.

## Variable aléatoire

<div class="encadre">

Une **variable aléatoire** $X$ associe un nombre à chaque issue. Si $X$ prend les valeurs $x_i$ avec les probabilités $p_i$ :

- **espérance** : $E(X) = \sum p_ix_i$ (la moyenne sur un grand nombre d'expériences) ;
- **variance** : $V(X) = \sum p_i(x_i - E(X))^2$ et **écart type** $\sigma = \sqrt{V(X)}$.

</div>

## Loi binomiale

<div class="encadre">

Une **épreuve de Bernoulli** a deux issues : succès (probabilité $p$) et échec. On la répète $n$ fois de façon **identique et indépendante** ; $X$ compte les succès. Alors $X$ suit la **loi binomiale** $\mathcal{B}(n\,;p)$ :

$$
\corange{P(X = k) = \binom{n}{k}p^k(1 - p)^{n - k}}
$$

$E(X) = np$ et $V(X) = np(1 - p)$.

</div>

$\binom{n}{k}$ est le nombre de chemins de l'arbre avec $k$ succès (calculatrice).

<div class="labo" data-labo="binomiale"></div>

## Loi géométrique

<div class="encadre">

On répète l'épreuve **jusqu'au premier succès** ; $X$ est le rang de ce succès. Pour $k \ge 1$ :

$$
P(X = k) = (1 - p)^{k - 1}p \quad \text{et} \quad E(X) = \frac{1}{p}.
$$

</div>

## Loi uniforme sur un intervalle

<div class="encadre">

$X$ suit la **loi uniforme** sur $[a\,;b]$ si toutes les valeurs de l'intervalle sont « également probables ». Pour $[c\,;d] \subset [a\,;b]$ :

$$
P(c \le X \le d) = \frac{d - c}{b - a} \quad \text{et} \quad E(X) = \frac{a + b}{2}.
$$

</div>

## Retour au problème

$X$, le nombre de buts, suit $\mathcal{B}(5\,;0{,}8)$.

$$
P(X \ge 4) = \binom{5}{4}0{,}8^4 \times 0{,}2 + 0{,}8^5 = 0{,}4096 + 0{,}32768 \approx 0{,}737.
$$

<mark>Elle marque au moins 4 buts avec une probabilité d'environ 0,74</mark>. En moyenne, elle en marque $E(X) = 5 \times 0{,}8 = 4$.

La suite : les [statistiques à deux variables](/maths/maths-complementaires/statistiques-a-deux-variables/cours/). Pour aller plus loin : la [loi binomiale de spécialité](/maths/terminale/loi-binomiale/cours/).
