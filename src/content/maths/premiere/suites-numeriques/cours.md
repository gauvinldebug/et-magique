---
titre: Les suites numériques
court: Suites numériques
description: Les suites numériques expliquées avec un escalier et une photocopieuse, les suites arithmétiques et géométriques, le sens de variation, les sommes de termes et la notion de limite, avec des exercices corrigés pas à pas. Première spécialité maths.
ordre: 2
publie: 2026-11-22T20:31:00
video:
  youtube: ""
piege: "**On ajoute ou on multiplie ?** Une suite arithmétique **ajoute** toujours la même raison ($\\unn = \\un + r$). Une suite géométrique **multiplie** toujours par la même raison ($\\unn = q \\times \\un$). Une hausse de 3 % par an, c'est multiplier par 1,03 : la suite est géométrique, pas arithmétique."
pdf:
  cours: /pdf/maths/premiere/suites-numeriques-cours.pdf
  fiche: /pdf/maths/premiere/suites-numeriques-fiche.pdf
  exercices: /pdf/maths/premiere/suites-numeriques-exercices.pdf
suivant: derivation
---

## Le problème

Léa place 1 000 € sur un livret. Deux offres : on lui ajoute **50 € par an**, ou on augmente son capital de **4 % par an**. Laquelle est la plus intéressante au bout de 10 ans ? Au bout de 30 ans ?

Pour répondre, il faut suivre une liste de nombres année après année : c'est une **suite**.

## L'idée : l'escalier et la photocopieuse

Une suite, c'est une liste de nombres numérotés : $\uz$, $u_1$, $u_2$… Le numéro $\corange{n}$ s'appelle l'**indice**, et $\un$ est le **terme de rang $\corange{n}$**.

Deux machines fabriquent les suites les plus importantes.

- **L'escalier.** Chaque marche a la même hauteur $r$. Pour passer d'une marche à la suivante, on <mark>ajoute</mark> $r$. C'est une suite <span class="o">arithmétique</span>.
- **La photocopieuse.** Elle agrandit (ou réduit) chaque copie avec le même zoom $q$. Pour passer d'une copie à la suivante, on <mark>multiplie</mark> par $q$. C'est une suite <span class="o">géométrique</span>.

L'offre « + 50 € » est un escalier. L'offre « + 4 % » est une photocopieuse réglée sur $1{,}04$.

## Deux façons de définir une suite

- **Formule explicite** : $\un = \cbleu{f}(\corange{n})$, par exemple $\un = 3\corange{n} + 2$. On calcule directement n'importe quel terme.
- **Relation de récurrence** : on donne le premier terme et la façon de passer d'un terme au suivant, par exemple $\uz = 1$ et $\unn = 2\un + 3$. Pour connaître $u_{10}$, il faut calculer tous les termes avant.

## Suites arithmétiques

<div class="encadre">

$\cbleu{u}$ est **arithmétique** de raison $r$ si, pour tout $\corange{n}$, $\unn = \un + r$.

- Terme général : $\un = \uz + \corange{n}\,r$ (et plus généralement $\un = u_p + (\corange{n} - p)\,r$).
- Sens de variation : croissante si $r > 0$, décroissante si $r < 0$.
- Somme : $1 + 2 + \dots + \corange{n} = \dfrac{\corange{n}(\corange{n} + 1)}{2}$.

</div>

Pour prouver qu'une suite est arithmétique, on calcule $\unn - \un$ et on montre que c'est une **constante**.

## Suites géométriques

<div class="encadre">

$\cbleu{u}$ est **géométrique** de raison $q$ si, pour tout $\corange{n}$, $\unn = q \times \un$.

- Terme général : $\un = \uz \times q^{\corange{n}}$ (et plus généralement $\un = u_p \times q^{\corange{n} - p}$).
- Sens de variation (si $\uz > 0$) : croissante si $q > 1$, décroissante si $0 < q < 1$.
- Somme : $1 + q + q^2 + \dots + q^{\corange{n}} = \dfrac{1 - q^{\corange{n}+1}}{1 - q}$ pour $q \ne 1$.

</div>

Pour prouver qu'une suite à termes non nuls est géométrique, on calcule $\dfrac{\unn}{\un}$ et on montre que c'est une **constante**.

Une **évolution de $t\,\%$** correspond à une multiplication par $1 + \frac{t}{100}$ : une hausse de 4 %, c'est $\times 1{,}04$ ; une baisse de 20 %, c'est $\times 0{,}8$.

## Sens de variation d'une suite

<div class="encadre">

$\cbleu{u}$ est **croissante** si $\unn \ge \un$ pour tout $\corange{n}$, **décroissante** si $\unn \le \un$ pour tout $\corange{n}$.

</div>

Méthodes : étudier le signe de $\unn - \un$ ; ou, si $\un = \cbleu{f}(\corange{n})$, étudier les variations de $\cbleu{f}$ sur $[0\,;+\infty[$ ; ou, pour des termes strictement positifs, comparer $\frac{\unn}{\un}$ à 1.

## Une première idée de limite

Quand $\corange{n}$ devient très grand :

- l'escalier monte sans s'arrêter si $r > 0$ : $\un \to +\infty$ ;
- avec $q > 1$, la photocopieuse grossit l'image sans limite : $q^{\corange{n}} \to +\infty$ ;
- avec $0 < q < 1$, elle la rétrécit jusqu'à presque rien : $q^{\corange{n}} \to 0$.

Les limites seront étudiées en détail en Terminale, dans le chapitre [Limites de suites](/maths/terminale/limites-de-suites/cours/).

## Retour au problème

Escalier : $a_{\corange{n}} = 1\,000 + 50\corange{n}$. Photocopieuse : $b_{\corange{n}} = 1\,000 \times 1{,}04^{\corange{n}}$.

| Année | 10 | 20 | 30 |
|---|---|---|---|
| $a_{\corange{n}}$ (+ 50 €) | 1 500 € | 2 000 € | 2 500 € |
| $b_{\corange{n}}$ (+ 4 %) | 1 480 € | 2 191 € | 3 243 € |

Au début, l'escalier est légèrement devant. Mais à partir de la 12e année, la photocopieuse le dépasse, et l'écart ne cesse de grandir : <mark>une croissance géométrique finit toujours par battre une croissance arithmétique</mark>.
