---
titre: Les fonctions trigonométriques
court: Fonctions trigonométriques
description: Les fonctions cosinus et sinus expliquées avec une grande roue, la périodicité, la parité, les dérivées, les variations et les équations trigonométriques, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 7
publie: 2026-11-22T20:10:00
video:
  youtube: ""
piege: "**La dérivée de cos prend un signe moins.** $(\\cos \\corange{x})' = -\\sin \\corange{x}$, mais $(\\sin \\corange{x})' = \\cos \\corange{x}$, sans signe moins. Et pour $\\cos(a\\corange{x} + b)$, ne pas oublier le facteur $a$."
pdf:
  cours: /pdf/maths/terminale/fonctions-trigonometriques-cours.pdf
  fiche: /pdf/maths/terminale/fonctions-trigonometriques-fiche.pdf
  exercices: /pdf/maths/terminale/fonctions-trigonometriques-exercices.pdf
suivant: primitives-et-equations-differentielles
---

## Le problème

Les marées, le courant électrique, le son d'une note de musique, la position d'une nacelle de grande roue : tous ces phénomènes **se répètent**. Pour les décrire, il faut des fonctions qui reviennent régulièrement aux mêmes valeurs. Ce sont les fonctions $\cos$ et $\sin$.

## L'idée : la grande roue

Monte dans une nacelle d'une grande roue de rayon 1, dont le centre est à l'origine. Tu tournes d'un angle $\corange{x}$ (en radians), dans le sens inverse des aiguilles d'une montre.

- Ta position **horizontale** (gauche-droite), c'est $\cos \corange{x}$.
- Ta **hauteur** par rapport au centre, c'est $\sin \corange{x}$.

Un tour complet, c'est $2\pi$ : après un tour, tu reviens exactement au même endroit. C'est pour ça que les courbes de $\cos$ et $\sin$ sont des <span class="o">vagues</span> qui se répètent tous les $2\pi$.

Et comme tu es sur un cercle de rayon 1, <mark>$\cos^2 \corange{x} + \sin^2 \corange{x} = 1$</mark> (Pythagore), et les deux valeurs restent toujours entre $-1$ et $1$.

## Les valeurs à connaître

| $\corange{x}$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos \corange{x}$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| $\sin \corange{x}$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |

## Périodicité et parité

<div class="encadre">

**Périodicité.** Pour tout réel $\corange{x}$, $\cos(\corange{x} + 2\pi) = \cos \corange{x}$ et $\sin(\corange{x} + 2\pi) = \sin \corange{x}$ : les fonctions sont **$2\pi$-périodiques**.

**Parité.** $\cos(-\corange{x}) = \cos \corange{x}$ : $\cos$ est **paire**, sa courbe est symétrique par rapport à l'axe des ordonnées. $\sin(-\corange{x}) = -\sin \corange{x}$ : $\sin$ est **impaire**, sa courbe est symétrique par rapport à l'origine.

</div>

Conséquence pratique : pour étudier $\cos$ ou $\sin$, il suffit de l'étudier sur $[0\,;\pi]$, puis de compléter par symétrie et par périodicité.

Dans la grande roue : tourner de $-\corange{x}$ au lieu de $\corange{x}$, c'est le reflet par rapport à l'axe horizontal. La position horizontale ne change pas, la hauteur change de signe.

## Dérivées

<div class="encadre">

$\cos$ et $\sin$ sont dérivables sur $\mathbb{R}$ et :

$$
(\cos \corange{x})' = -\sin \corange{x} \qquad\qquad (\sin \corange{x})' = \cos \corange{x}
$$

Pour $a$ et $b$ réels : $\big(\cos(a\corange{x} + b)\big)' = -a\sin(a\corange{x} + b)$ et $\big(\sin(a\corange{x} + b)\big)' = a\cos(a\corange{x} + b)$.

</div>

Une limite à connaître, qui vient du nombre dérivé de $\sin$ en 0 : $\lim\limits_{\corange{x} \to 0} \dfrac{\sin \corange{x}}{\corange{x}} = 1$.

## Variations sur $[0\,;\pi]$

- $(\cos)' = -\sin$, et $\sin \corange{x} \ge 0$ sur $[0\,;\pi]$ : $\cos$ est **décroissante** sur $[0\,;\pi]$, de $1$ à $-1$.
- $(\sin)' = \cos$, positif sur $\left[0\,;\frac{\pi}{2}\right]$ et négatif sur $\left[\frac{\pi}{2}\,;\pi\right]$ : $\sin$ **croît** de 0 à 1, puis **décroît** de 1 à 0.

C'est exactement ce que fait la nacelle : pendant le premier demi-tour, elle va de droite à gauche ($\cos$ diminue), et elle monte jusqu'au sommet avant de redescendre ($\sin$).

## Équations trigonométriques

<div class="encadre">

$\cos \corange{x} = \cos a \iff \corange{x} = a + 2k\pi$ ou $\corange{x} = -a + 2k\pi$, avec $k \in \mathbb{Z}$.

$\sin \corange{x} = \sin a \iff \corange{x} = a + 2k\pi$ ou $\corange{x} = \pi - a + 2k\pi$, avec $k \in \mathbb{Z}$.

</div>

Exemple : $\cos \corange{x} = \frac{1}{2}$ sur $]-\pi\,;\pi]$. Comme $\frac{1}{2} = \cos \frac{\pi}{3}$, les solutions sont <mark>$\frac{\pi}{3}$ et $-\frac{\pi}{3}$</mark> : deux nacelles à la même position horizontale, l'une en haut, l'autre en bas.

Le **cercle trigonométrique** est le meilleur outil pour ne rien oublier : place la valeur sur l'axe, trace la droite, et lis les deux points d'intersection.
