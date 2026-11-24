---
titre: Sommes de variables aléatoires et loi des grands nombres
court: Loi des grands nombres
description: Les sommes de variables aléatoires, l'inégalité de Bienaymé-Tchebychev, l'inégalité de concentration et la loi des grands nombres expliquées avec une chorale où chacun chante un peu faux, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 13
publie: 2026-11-22T20:23:00
video:
  youtube: ""
piege: "**Les variances ne s'additionnent que si les variables sont indépendantes.** $E(X + Y) = E(X) + E(Y)$ est toujours vrai. Mais $V(X + Y) = V(X) + V(Y)$ exige l'indépendance. Et $V(aX) = a^2V(X)$, avec un carré."
pdf:
  cours: /pdf/maths/terminale/loi-des-grands-nombres-cours.pdf
  fiche: /pdf/maths/terminale/loi-des-grands-nombres-fiche.pdf
  exercices: /pdf/maths/terminale/loi-des-grands-nombres-exercices.pdf
---

## Le problème

Tu lances un dé une fois : tu peux obtenir n'importe quoi entre 1 et 6. Tu le lances 10 000 fois et tu fais la moyenne des résultats : tu obtiendras presque sûrement un nombre très proche de 3,5. Pourquoi ? Et peut-on dire **à quel point** on est sûr d'être proche ?

## L'idée : la chorale

Dans une chorale, chaque chanteur chante **un peu faux** : un peu trop haut, un peu trop bas, au hasard. Écouté seul, un chanteur s'écarte nettement de la bonne note.

Mais quand 200 chanteurs chantent ensemble, les erreurs vers le haut et vers le bas **se compensent** : l'oreille entend une note très proche de la note juste. Plus la chorale est grande, plus elle sonne juste.

- Chaque chanteur, c'est une variable aléatoire $X_i$.
- La note juste, c'est l'**espérance** $\mu$.
- Ce qu'on entend, c'est la **moyenne** $M_n = \frac{X_1 + \dots + X_n}{n}$.

La <span class="o">loi des grands nombres</span> dit exactement ça : <mark>la moyenne se rapproche de l'espérance quand $n$ grandit</mark>.

## Sommes de variables aléatoires

<div class="encadre">

Pour des variables aléatoires $X$ et $Y$ et des réels $a$ et $b$ :

- $E(X + Y) = E(X) + E(Y)$ et $E(aX + b) = aE(X) + b$ (**toujours**).
- $V(aX + b) = a^2\,V(X)$.
- Si $X$ et $Y$ sont **indépendantes**, $V(X + Y) = V(X) + V(Y)$.

</div>

Exemple : une [loi binomiale](/maths/terminale/loi-binomiale/cours/) $\mathcal{B}(n\,;p)$ est la somme de $n$ variables de Bernoulli indépendantes, chacune d'espérance $p$ et de variance $p(1 - p)$. On retrouve $E = np$ et $V = np(1 - p)$.

## Échantillon et moyenne

<div class="encadre">

Un **échantillon** de taille $n$ d'une loi est une liste $(X_1, \dots, X_n)$ de variables aléatoires **indépendantes** qui suivent toutes cette loi, d'espérance $\mu$ et de variance $V$.

Sa somme $S_n = X_1 + \dots + X_n$ et sa moyenne $M_n = \frac{S_n}{n}$ vérifient :

$$
E(S_n) = n\mu \qquad V(S_n) = nV \qquad E(M_n) = \mu \qquad V(M_n) = \frac{V}{n}
$$

</div>

La variance de la moyenne est divisée par $n$ : plus la chorale est grande, moins le son global s'écarte de la note juste.

## L'inégalité de Bienaymé-Tchebychev

<div class="encadre">

Pour toute variable aléatoire $X$ d'espérance $\mu$ et de variance $V$, et pour tout réel $\delta > 0$ :

$$
P\big(|X - \mu| \ge \delta\big) \le \frac{V}{\delta^2}
$$

</div>

Elle donne une **majoration** de la probabilité de s'écarter de l'espérance d'au moins $\delta$. Elle est souvent grossière, mais elle marche pour **n'importe quelle** loi.

Exemple : $X$ a pour espérance 50 et pour variance 25. Alors $P(|X - 50| \ge 10) \le \frac{25}{100} = 0{,}25$, donc $P(40 < X < 60) \ge 0{,}75$.

## L'inégalité de concentration

En appliquant Bienaymé-Tchebychev à la moyenne $M_n$ d'un échantillon :

<div class="encadre">

$$
P\big(|M_n - \mu| \ge \delta\big) \le \frac{V}{n\,\delta^2}
$$

</div>

C'est l'outil des exercices du type « quelle taille d'échantillon faut-il pour que… ».

## La loi des grands nombres

<div class="encadre">

Pour tout $\delta > 0$ :

$$
\lim_{n \to +\infty} P\big(|M_n - \mu| \ge \delta\big) = 0
$$

</div>

Quand la chorale devient immense, la probabilité d'entendre une note éloignée de la note juste devient aussi petite qu'on veut. C'est ce qui justifie qu'on estime une probabilité par une **fréquence** observée sur un très grand nombre d'expériences.

<div class="labo" data-labo="grands-nombres"></div>

## Retour au problème

Pour un dé, $\mu = 3{,}5$ et $V = \frac{35}{12} \approx 2{,}92$. Avec $n = 10\,000$ lancers et $\delta = 0{,}1$ :

$$
P\big(|M_n - 3{,}5| \ge 0{,}1\big) \le \frac{35/12}{10\,000 \times 0{,}01} \approx 0{,}029
$$

La moyenne est entre 3,4 et 3,6 avec une probabilité d'au moins <mark>97 %</mark>.
