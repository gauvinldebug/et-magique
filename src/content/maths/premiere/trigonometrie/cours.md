---
titre: Trigonométrie et cercle trigonométrique
court: Trigonométrie
description: La trigonométrie de Première expliquée avec un fil enroulé autour d'une bobine, le radian, le cercle trigonométrique, le cosinus et le sinus d'un réel, les valeurs remarquables, les angles associés et les fonctions cosinus et sinus, avec des exercices corrigés. Première spécialité maths.
ordre: 5
publie: 2026-11-22T21:30:00
video:
  youtube: ""
piege: "**La calculatrice en radians.** Au lycée, les angles du cercle trigonométrique se mesurent en **radians**. Une calculatrice réglée en degrés donne $\\cos(\\pi) \\approx 0{,}998$ au lieu de $-1$ : toujours vérifier le mode avant de calculer."
pdf:
  cours: /pdf/maths/premiere/trigonometrie-cours.pdf
  fiche: /pdf/maths/premiere/trigonometrie-fiche.pdf
  exercices: /pdf/maths/premiere/trigonometrie-exercices.pdf
suivant: produit-scalaire
---

## Le problème

Au collège, le cosinus et le sinus servaient à calculer des longueurs dans un triangle rectangle, avec des angles entre 0° et 90°. Mais une roue tourne bien plus loin que 90°, elle fait des tours entiers, dans un sens ou dans l'autre. Comment parler du cosinus d'un angle de 200°, ou de $-3$ tours ?

Il faut une nouvelle façon de mesurer les angles, et un nouvel outil : le **cercle trigonométrique**.

## L'idée : le fil et la bobine

Prends une bobine de rayon 1 et un fil gradué comme une règle : $0$, $1$, $2$, $3$… et aussi $-1$, $-2$… Pose le zéro du fil sur le point $I(1\,;0)$ de la bobine, puis **enroule** le fil autour : les nombres positifs dans le sens inverse des aiguilles d'une montre, les négatifs dans l'autre sens.

Chaque nombre réel $\corange{x}$ du fil vient se poser sur un point $M$ de la bobine. Le cosinus et le sinus de $\corange{x}$, ce sont simplement <mark>les coordonnées de ce point</mark> : $M(\cos \corange{x}\,;\sin \corange{x})$.

Comme la bobine a pour rayon 1, son tour complet mesure $2\pi$. Après un tour de fil, on retombe au même endroit : $\corange{x}$ et $\corange{x} + 2\pi$ arrivent sur le même point.

## Le radian

<div class="encadre">

Le **cercle trigonométrique** est le cercle de centre $O$ et de rayon 1, orienté dans le sens inverse des aiguilles d'une montre (sens direct).

Le **radian** est l'unité d'angle telle qu'un tour complet mesure $2\pi$ radians. Ainsi $180° = \pi$ rad, et pour convertir : $\text{angle en rad} = \text{angle en degrés} \times \dfrac{\pi}{180}$.

</div>

| Degrés | 0 | 30 | 45 | 60 | 90 | 180 | 360 |
|---|---|---|---|---|---|---|---|
| Radians | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ | $2\pi$ |

Un même point du cercle est atteint par une infinité de réels : $\corange{x}$, $\corange{x} + 2\pi$, $\corange{x} - 2\pi$, $\corange{x} + 4\pi$… On les écrit $\corange{x} + 2k\pi$ avec $k \in \mathbb{Z}$. Celui qui est dans $]-\pi\,;\pi]$ s'appelle la **mesure principale**.

## Cosinus et sinus d'un réel

<div class="encadre">

Si le réel $\corange{x}$ s'enroule sur le point $M$ du cercle trigonométrique, alors $\cos \corange{x}$ est l'**abscisse** de $M$ et $\sin \corange{x}$ son **ordonnée**.

Pour tout réel $\corange{x}$ : $-1 \le \cos \corange{x} \le 1$, $-1 \le \sin \corange{x} \le 1$ et $\cos^2 \corange{x} + \sin^2 \corange{x} = 1$.

</div>

La dernière égalité, c'est Pythagore dans le cercle de rayon 1.

## Les valeurs remarquables

| $\corange{x}$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos \corange{x}$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| $\sin \corange{x}$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |

Astuce pour s'en souvenir : le sinus monte $\frac{\sqrt{0}}{2}, \frac{\sqrt{1}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, \frac{\sqrt{4}}{2}$, et le cosinus fait le chemin inverse.

## Les angles associés

On les retrouve par symétrie sur le cercle, sans rien apprendre par cœur.

<div class="encadre">

- $\cos(-\corange{x}) = \cos \corange{x}$ et $\sin(-\corange{x}) = -\sin \corange{x}$ (symétrie par rapport à l'axe des abscisses) ;
- $\cos(\pi - \corange{x}) = -\cos \corange{x}$ et $\sin(\pi - \corange{x}) = \sin \corange{x}$ (symétrie par rapport à l'axe des ordonnées) ;
- $\cos(\pi + \corange{x}) = -\cos \corange{x}$ et $\sin(\pi + \corange{x}) = -\sin \corange{x}$ (symétrie par rapport à $O$) ;
- $\cos\left(\frac{\pi}{2} - \corange{x}\right) = \sin \corange{x}$ et $\sin\left(\frac{\pi}{2} - \corange{x}\right) = \cos \corange{x}$.

</div>

Exemple : $\cos\frac{2\pi}{3} = \cos\left(\pi - \frac{\pi}{3}\right) = -\cos\frac{\pi}{3} = -\frac{1}{2}$.

## Les fonctions cosinus et sinus

<div class="encadre">

Les fonctions $\cos$ et $\sin$ sont définies sur $\mathbb{R}$ et **$2\pi$-périodiques** : $\cos(\corange{x} + 2\pi) = \cos \corange{x}$ et $\sin(\corange{x} + 2\pi) = \sin \corange{x}$.

$\cos$ est **paire** (courbe symétrique par rapport à l'axe des ordonnées) ; $\sin$ est **impaire** (courbe symétrique par rapport à l'origine).

</div>

Leurs courbes sont des vagues qui se répètent tous les $2\pi$ : c'est le fil qui repasse sans fin sur la bobine. Sur $[0\,;\pi]$, $\cos$ décroît de 1 à $-1$ ; $\sin$ croît de 0 à 1 sur $\left[0\,;\frac{\pi}{2}\right]$ puis décroît jusqu'à 0.

## Résoudre une équation simple

Pour résoudre $\cos \corange{x} = \frac{1}{2}$ dans $]-\pi\,;\pi]$ : on place $\frac{1}{2}$ sur l'axe des abscisses, on trace la verticale, elle coupe le cercle en **deux** points, ceux de $\frac{\pi}{3}$ et $-\frac{\pi}{3}$. Les solutions sont <mark>$-\frac{\pi}{3}$ et $\frac{\pi}{3}$</mark>.
