---
titre: Continuité et théorème des valeurs intermédiaires
court: Continuité
description: La continuité expliquée avec un crayon qui ne se lève pas et une rivière à traverser, le théorème des valeurs intermédiaires, son corollaire et la méthode par balayage, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 4
publie: 2026-11-22T20:01:00
video:
  youtube: ""
piege: "**Sans « strictement monotone », pas d'unicité.** Le théorème des valeurs intermédiaires dit qu'il existe **au moins** une solution. Pour affirmer qu'il y en a **une seule**, il faut que la fonction soit continue **et** strictement monotone sur l'intervalle."
pdf:
  cours: /pdf/maths/terminale/continuite-cours.pdf
  fiche: /pdf/maths/terminale/continuite-fiche.pdf
  exercices: /pdf/maths/terminale/continuite-exercices.pdf
suivant: derivation-et-convexite
---

## Le problème

On cherche à résoudre $\corange{x}^3 + \corange{x} - 1 = 0$. Aucune formule du cours ne donne la solution. Pourtant, on aimerait savoir **s'il existe** une solution, **combien** il y en a, et en donner une **valeur approchée**.

C'est exactement à ça que sert la continuité.

## L'idée : le crayon et la rivière

Une fonction est <span class="o">continue</span> sur un intervalle si on peut tracer sa courbe **sans lever le crayon** : pas de saut, pas de trou.

Maintenant, imagine une rivière horizontale à la hauteur $k$. Ton crayon part d'un point **sous** la rivière et arrive à un point **au-dessus**. Sans lever le crayon, tu es <mark>obligé de traverser la rivière</mark> au moins une fois. C'est le théorème des valeurs intermédiaires.

Et si en plus ton crayon ne fait que monter (fonction strictement croissante), tu ne la traverses **qu'une seule fois**.

## La définition

<div class="encadre">

**Continuité.** Une fonction $\cbleu{f}$ définie sur un intervalle $I$ est continue en $a \in I$ si $\lim\limits_{\corange{x} \to a} \cbleu{f}(\corange{x}) = \cbleu{f}(a)$. Elle est continue sur $I$ si elle est continue en tout point de $I$.

</div>

Ce qu'il faut retenir pour les exercices :

- Les fonctions polynômes, $\mathrm{e}^{\corange{x}}$, $\cos$, $\sin$ sont continues sur $\mathbb{R}$ ; $\sqrt{\corange{x}}$ est continue sur $[0\,;+\infty[$ ; les fractions rationnelles sont continues sur chaque intervalle de leur ensemble de définition.
- Sommes, produits, quotients et composées de fonctions continues sont continues.
- <mark>Une fonction dérivable sur $I$ est continue sur $I$</mark>. La réciproque est fausse : $|\corange{x}|$ est continue en 0 mais pas dérivable en 0.

Un exemple de fonction **non** continue : la partie entière, qui fait des marches d'escalier. Le crayon doit se lever à chaque entier.

## Le théorème des valeurs intermédiaires

<div class="encadre">

**TVI.** Si $\cbleu{f}$ est continue sur $[a\,;b]$, alors pour tout réel $k$ compris entre $\cbleu{f}(a)$ et $\cbleu{f}(b)$, l'équation $\cbleu{f}(\corange{x}) = k$ admet **au moins une** solution dans $[a\,;b]$.

</div>

<div class="encadre">

**Corollaire (bijection).** Si $\cbleu{f}$ est continue **et strictement monotone** sur $[a\,;b]$, alors pour tout $k$ compris entre $\cbleu{f}(a)$ et $\cbleu{f}(b)$, l'équation $\cbleu{f}(\corange{x}) = k$ admet **une unique** solution dans $[a\,;b]$.

</div>

Le corollaire marche aussi sur un intervalle ouvert ou infini, en remplaçant $\cbleu{f}(a)$ et $\cbleu{f}(b)$ par les limites aux bornes.

## Retour au problème

Soit $\cbleu{f}(\corange{x}) = \corange{x}^3 + \corange{x} - 1$ sur $[0\,;1]$.

$$
\begin{aligned}
\cbleu{f}'(\corange{x}) &= 3\corange{x}^2 + 1 > 0 && \text{donc } \cbleu{f} \text{ est strictement croissante} \\
\cbleu{f}(0) &= -1 < 0 && \text{le crayon part sous la rivière} \\
\cbleu{f}(1) &= 1 > 0 && \text{et arrive au-dessus}
\end{aligned}
$$

$\cbleu{f}$ est continue (polynôme) et strictement croissante sur $[0\,;1]$, et $0$ est compris entre $\cbleu{f}(0)$ et $\cbleu{f}(1)$. D'après le corollaire du TVI, l'équation $\cbleu{f}(\corange{x}) = 0$ admet une unique solution $\alpha$ dans $[0\,;1]$.

## Encadrer la solution : le balayage

On calcule $\cbleu{f}$ avec un pas de $0{,}1$, et on regarde où le signe change :

| $\corange{x}$ | $0{,}6$ | $0{,}7$ |
|---|---|---|
| $\cbleu{f}(\corange{x})$ | $-0{,}184$ | $0{,}043$ |

Le signe change entre $0{,}6$ et $0{,}7$, donc $0{,}6 < \alpha < 0{,}7$. On recommence avec un pas de $0{,}01$ pour aller plus loin : $\cbleu{f}(0{,}68) \approx -0{,}006$ et $\cbleu{f}(0{,}69) \approx 0{,}018$, donc <mark>$0{,}68 < \alpha < 0{,}69$</mark>.

La méthode par **dichotomie** fait la même chose en coupant l'intervalle en deux à chaque étape : c'est un algorithme classique en Python.

## Continuité et suites

<div class="encadre">

Si $\unn = \cbleu{f}(\un)$, si la suite $\cbleu{u}$ converge vers $\cvert{\ell}$ et si $\cbleu{f}$ est continue en $\cvert{\ell}$, alors $\cvert{\ell} = \cbleu{f}(\cvert{\ell})$.

</div>

C'est ce qui permet de trouver la [limite d'une suite](/maths/terminale/limites-de-suites/cours/) récurrente : avec $\unn = \frac{1}{3}\un + 2$, la limite vérifie $\ell = \frac{1}{3}\ell + 2$, donc $\ell = 3$.
