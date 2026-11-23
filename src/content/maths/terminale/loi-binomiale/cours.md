---
titre: Succession d'épreuves et loi binomiale
court: Loi binomiale
description: La loi binomiale expliquée avec une planche de Galton, l'épreuve et le schéma de Bernoulli, la formule des probabilités, l'espérance, la variance et la calculatrice, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 12
publie: 2026-11-22T20:22:00
video:
  youtube: ""
piege: "**Pas de binomiale sans indépendance.** Tirer 5 boules **sans remise** n'est pas un schéma de Bernoulli : la probabilité change à chaque tirage. Il faut des épreuves identiques et indépendantes (tirages **avec remise**, ou population très grande)."
pdf:
  cours: /pdf/maths/terminale/loi-binomiale-cours.pdf
  fiche: /pdf/maths/terminale/loi-binomiale-fiche.pdf
  exercices: /pdf/maths/terminale/loi-binomiale-exercices.pdf
suivant: loi-des-grands-nombres
---

## Le problème

Un basketteur réussit 70 % de ses lancers francs. Il en tente 10. Quelle est la probabilité qu'il en réussisse exactement 7 ? Au moins 8 ? Combien en réussira-t-il en moyenne ?

On pourrait faire un arbre, mais avec 10 lancers il aurait $2^{10} = 1\,024$ branches. Il faut une formule.

## L'idée : la planche de Galton

Une bille tombe sur une planche hérissée de clous. À chaque clou, elle part **à droite** avec la probabilité $p$, ou **à gauche** avec la probabilité $1 - p$. Il y a $n$ rangées de clous, et chaque rebond ne dépend pas des précédents.

En bas, la bille tombe dans une case numérotée par **le nombre de fois où elle est partie à droite**. Ce nombre, c'est une variable aléatoire qui suit une <span class="o">loi binomiale</span>.

- Chaque clou est une **épreuve de Bernoulli** : deux issues, succès (droite) ou échec (gauche).
- La descente complète est un **schéma de Bernoulli** : $n$ épreuves identiques et indépendantes.
- Pour arriver dans la case $k$, la bille doit faire $k$ rebonds à droite parmi $n$ : il y a <mark>$\binom{n}{k}$ chemins</mark> qui y mènent (voir le chapitre [Dénombrement](/maths/terminale/denombrement/cours/)).

## Épreuve et schéma de Bernoulli

<div class="encadre">

Une **épreuve de Bernoulli** de paramètre $p$ est une expérience à deux issues : succès (probabilité $p$) et échec (probabilité $1 - p$).

Un **schéma de Bernoulli** de paramètres $n$ et $p$ est la répétition de $n$ épreuves de Bernoulli **identiques et indépendantes**.

</div>

## La loi binomiale

<div class="encadre">

La variable aléatoire $X$ qui compte le nombre de succès dans un schéma de Bernoulli de paramètres $n$ et $p$ suit la **loi binomiale** $\mathcal{B}(n\,;p)$. Pour tout entier $k$ entre $0$ et $n$ :

$$
P(X = k) = \binom{n}{k}\,p^k\,(1 - p)^{n - k}
$$

</div>

D'où vient la formule ? Un chemin précis avec $k$ succès et $n - k$ échecs a pour probabilité $p^k(1 - p)^{n - k}$ (on multiplie le long des branches). Et il y a $\binom{n}{k}$ chemins de ce type, autant que de façons de placer les $k$ succès parmi les $n$ épreuves.

Retour au basketteur : $X \sim \mathcal{B}(10\,;0{,}7)$.

$$
P(X = 7) = \binom{10}{7} \times 0{,}7^7 \times 0{,}3^3 = 120 \times 0{,}7^7 \times 0{,}3^3 \approx \cvert{0{,}267}
$$

## Espérance, variance, écart type

<div class="encadre">

Si $X \sim \mathcal{B}(n\,;p)$ :

$$
E(X) = np \qquad V(X) = np(1 - p) \qquad \sigma(X) = \sqrt{np(1 - p)}
$$

</div>

Le basketteur réussit en moyenne $E(X) = 10 \times 0{,}7 = 7$ lancers sur 10, avec un écart type $\sqrt{10 \times 0{,}7 \times 0{,}3} \approx 1{,}45$.

Sur la planche de Galton, la case la plus remplie se trouve vers $np$ : c'est là que les billes s'accumulent.

## Avec la calculatrice

| On cherche | Commande |
|---|---|
| $P(X = k)$ | « Binomiale FdP » (ou « binomFdp ») |
| $P(X \le k)$ | « Binomiale FRép » (ou « binomFRép ») |
| $P(X \ge k)$ | $1 - P(X \le k - 1)$ |
| $P(a \le X \le b)$ | $P(X \le b) - P(X \le a - 1)$ |

Pour le basketteur, $P(X \ge 8) = 1 - P(X \le 7) \approx 1 - 0{,}617 = \cvert{0{,}383}$.

## Chercher un seuil

Une question classique : « Combien de lancers faut-il pour que la probabilité de réussir **au moins un** lancer dépasse 0,999 ? »

$$
P(X \ge 1) = 1 - P(X = 0) = 1 - 0{,}3^{n} \ge 0{,}999 \iff 0{,}3^{n} \le 0{,}001 \iff n \ge \frac{\ln 0{,}001}{\ln 0{,}3} \approx 5{,}7
$$

Il faut donc <mark>au moins 6 lancers</mark>. Attention : $\ln 0{,}3 < 0$, le sens de l'inégalité change quand on divise.
