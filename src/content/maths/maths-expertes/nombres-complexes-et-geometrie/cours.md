---
titre: Nombres complexes et géométrie
court: Complexes et géométrie
description: Le plan complexe, affixe, module, argument, forme trigonométrique et exponentielle, formule de Moivre, racines n-ièmes de l'unité et applications à la géométrie, expliqués avec une boussole qui tourne et zoome, avec des exercices corrigés pas à pas. Terminale maths expertes.
ordre: 2
publie: 2026-11-23T02:01:00
video:
  youtube: ""
piege: >-
  **L'argument dépend des signes de $a$ et $b$, pas seulement de $\frac{b}{a}$.** $1 + i$ et $-1 - i$ ont le même rapport $\frac{b}{a} = 1$, mais des arguments $\frac{\pi}{4}$ et $-\frac{3\pi}{4}$. Place toujours le point dans le plan avant de choisir l'angle.
pdf:
  cours: /pdf/maths/maths-expertes/nombres-complexes-et-geometrie-cours.pdf
  fiche: /pdf/maths/maths-expertes/nombres-complexes-et-geometrie-fiche.pdf
  exercices: /pdf/maths/maths-expertes/nombres-complexes-et-geometrie-exercices.pdf
suivant: divisibilite-et-congruences
---

## Le problème

Calculer $(1 + i)^{10}$ en développant serait interminable. Pourtant, ça se fait de tête en une ligne. Comment ?

## L'idée : la boussole qui tourne et qui zoome

Dans le chapitre [forme algébrique](/maths/maths-expertes/nombres-complexes-forme-algebrique/cours/), $i$ était un quart de tour. Plus généralement, chaque complexe est une **flèche** partant de l'origine, décrite par deux réglages, comme une aiguille de boussole :

- sa **longueur**, le **module** ;
- sa **direction**, l'**argument** (un angle).

Multiplier deux complexes, c'est **multiplier les longueurs** (zoomer) et **additionner les angles** (tourner). Élever à la puissance 10, c'est zoomer 10 fois et tourner 10 fois.

## Le plan complexe

<div class="encadre">

Dans un repère orthonormé direct $(O\,;\vec{u}, \vec{v})$, le point $M(a\,;b)$ a pour **affixe** $z = a + ib$. Le vecteur $\overrightarrow{AB}$ a pour affixe $z_B - z_A$.

- Le **module** $|z| = \sqrt{a^2 + b^2} = OM$ ; et $AB = |z_B - z_A|$.
- Un **argument** $\arg(z)$, pour $z \ne 0$, est une mesure de l'angle $(\vec{u}, \overrightarrow{OM})$, défini à $2\pi$ près.

</div>

## Formes trigonométrique et exponentielle

<div class="encadre">

Si $|z| = \cbleu{r}$ et $\arg(z) = \corange{\theta}$, alors $a = r\cos\theta$, $b = r\sin\theta$ et

$$
z = \cbleu{r}(\cos\corange{\theta} + i\sin\corange{\theta}) = \cbleu{r}\,e^{i\corange{\theta}}.
$$

**Règles** : $|zz'| = |z|\,|z'|$ et $\arg(zz') = \arg z + \arg z'$ ; $e^{i\theta}e^{i\theta'} = e^{i(\theta + \theta')}$.

**Formule de Moivre** : $(e^{i\theta})^n = e^{in\theta}$, soit $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$.

</div>

Exemple : $1 + i\sqrt{3}$ a pour module $\sqrt{1 + 3} = 2$, et $\cos\theta = \frac{1}{2}$, $\sin\theta = \frac{\sqrt{3}}{2}$, donc $\theta = \frac{\pi}{3}$ : $1 + i\sqrt{3} = 2e^{i\pi/3}$.

## Racines n-ièmes de l'unité

<div class="encadre">

Les solutions de $z^n = 1$ sont les $n$ nombres $e^{2ik\pi/n}$, pour $k = 0, 1, \dots, n - 1$. Leurs points forment un **polygone régulier** à $n$ sommets inscrit dans le cercle de centre $O$ et de rayon 1. Leur somme est nulle (pour $n \ge 2$).

</div>

Exemple : les racines cubiques de l'unité sont $1$, $j = e^{2i\pi/3}$ et $j^2$, sommets d'un triangle équilatéral, avec $1 + j + j^2 = 0$.

## Géométrie

- **Distance** : $AB = |z_B - z_A|$.
- **Angle orienté** : $(\overrightarrow{AB}, \overrightarrow{AC}) = \arg\left(\dfrac{z_C - z_A}{z_B - z_A}\right)$.
- $\dfrac{z_C - z_A}{z_B - z_A}$ réel $\iff A$, $B$, $C$ alignés ; imaginaire pur $\iff (AB) \perp (AC)$.

## Retour au problème

$1 + i = \sqrt{2}\,e^{i\pi/4}$. Avec Moivre :

$$
(1 + i)^{10} = (\sqrt{2})^{10}\,e^{i\,10\pi/4} = 32\,e^{i\,5\pi/2} = 32\,e^{i\pi/2} = 32i
$$

<mark>$(1 + i)^{10} = 32i$</mark> : on zoome 10 fois par $\sqrt{2}$, et on tourne 10 fois de 45°, soit 450°, c'est-à-dire un quart de tour.
