---
titre: Intensité sonore, diffraction, interférences et effet Doppler
court: Ondes, Doppler, interférences
description: Niveau d'intensité sonore en décibels, atténuation, diffraction, interférences et fentes d'Young, effet Doppler, expliqués avec des vagues dans un port. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 14
publie: 2026-11-24T01:13:00
video:
  youtube: ""
piege: "**Deux sources identiques ne font pas deux fois plus de décibels.** Doubler l'intensité sonore ajoute environ 3 dB : 60 dB + 60 dB = 63 dB, pas 120 dB."
pdf:
  cours: /pdf/physique/terminale/ondes-et-sons-cours.pdf
  fiche: /pdf/physique/terminale/ondes-et-sons-fiche.pdf
  exercices: /pdf/physique/terminale/ondes-et-sons-exercices.pdf
suivant: lunette-astronomique
---

## Le problème

Le son d'une sirène est plus aigu quand l'ambulance arrive, plus grave quand elle s'éloigne. On entend quelqu'un parler derrière une porte entrouverte, sans le voir. Une bulle de savon se colore. Trois phénomènes ondulatoires : l'**effet Doppler**, la **diffraction**, les **interférences**. Et d'abord : comment mesurer la force d'un son ?

## L'idée : les vagues dans un port

Regarde la mer qui entre dans un port.

- La houle arrive par une **entrée étroite** : derrière, les vagues ne continuent pas en ligne droite, elles **s'étalent** en arcs de cercle dans tout le bassin. C'est la diffraction.
- Deux bateaux font des vagues : là où deux crêtes se rencontrent, la vague est plus haute ; là où une crête rencontre un creux, l'eau reste calme. Ce sont les interférences.
- Un bateau qui avance **tasse** les vagues devant lui (plus serrées) et **étire** celles de derrière. C'est l'effet Doppler.

Tout ce chapitre se lit dans ce port. Le son et la lumière, qui sont aussi des ondes, font exactement pareil.

## Intensité et niveau sonores

<div class="encadre">

**Intensité sonore** $I$ : puissance reçue par unité de surface, en $\mathrm{W \cdot m^{-2}}$.

**Niveau d'intensité sonore**, en décibels (dB) :

$$
\cbleu{L} = 10 \log\left(\frac{I}{I_0}\right) \qquad I_0 = 1{,}0 \times 10^{-12}\ \mathrm{W \cdot m^{-2}}
$$

</div>

$I_0$ est le seuil d'audibilité (0 dB). Le seuil de douleur est vers 120 dB.

Comme pour le pH, l'échelle est logarithmique : <mark>multiplier l'intensité par 10 ajoute 10 dB ; la multiplier par 2 ajoute environ 3 dB</mark>.

**Atténuation.** En s'éloignant d'une source, l'énergie se répartit sur une sphère de plus en plus grande : $I = \dfrac{P}{4\pi r^2}$ (atténuation **géométrique**). Doubler la distance divise l'intensité par 4, soit environ $-6$ dB. Une partie de l'énergie est aussi absorbée par le milieu traversé ou par une paroi (atténuation **par absorption**) : $A = L_{\text{avant}} - L_{\text{après}}$.

## La diffraction

<div class="encadre">

Une onde de longueur d'onde $\lambda$ qui rencontre une ouverture (ou un obstacle) de taille $a$ est **diffractée** : elle s'étale. Le phénomène est marqué quand $a$ est du même ordre de grandeur que $\lambda$ ou plus petit.

**Écart angulaire** (demi-largeur de la tache centrale, en radians) :

$$
\theta = \frac{\lambda}{a}
$$

</div>

Le son ($\lambda$ de l'ordre du mètre) est diffracté par une porte : on l'entend derrière. La lumière ($\lambda \approx 0{,}5\ \mu\mathrm{m}$) ne l'est que par des ouvertures minuscules. Sur un écran à la distance $D$, la tache centrale a une largeur $\ell \approx 2 D \theta = \dfrac{2\lambda D}{a}$ (petits angles).

## Les interférences

Deux ondes de **même fréquence** et de déphasage constant (sources **cohérentes**) se superposent. En un point M, on compare les trajets : la **différence de marche** est $\delta = d_2 - d_1$.

<div class="encadre">

- **Interférences constructives** (amplitude maximale) : $\delta = k\,\lambda$, avec $k$ entier.
- **Interférences destructives** (amplitude minimale) : $\delta = \left(k + \frac{1}{2}\right)\lambda$.

**Fentes d'Young** (fentes séparées de $b$, écran à $D$) : franges alternativement brillantes et sombres, d'**interfrange**

$$
\cbleu{i} = \frac{\lambda D}{b}
$$

</div>

Ce sont les deux bateaux du port : crête sur crête, ou crête sur creux. Les couleurs d'une bulle de savon ou d'une flaque d'essence viennent d'interférences entre la lumière réfléchie par les deux faces d'un film très mince.

## L'effet Doppler

Quand la source s'approche du récepteur, les ondes arrivent **tassées** : la fréquence reçue est plus grande que la fréquence émise. Quand elle s'éloigne, elles arrivent **étirées** : fréquence reçue plus petite.

<div class="encadre">

Pour une source en mouvement rectiligne uniforme de vitesse $v$, vers un récepteur fixe (onde de célérité $c$) :

$$
f_R = \frac{f_E}{1 - \frac{v}{c}} \ \text{(approche)} \qquad f_R = \frac{f_E}{1 + \frac{v}{c}} \ \text{(éloignement)}
$$

Si $v \ll c$, le décalage Doppler vaut approximativement $|\Delta f| = |f_R - f_E| \approx f_E \dfrac{v}{c}$.

</div>

On s'en sert pour mesurer des vitesses : radars routiers, échographie Doppler du sang, et en astronomie le décalage des raies d'une étoile qui s'éloigne ou s'approche de nous.

<div class="labo" data-labo="doppler"></div>

## Les pièges

- Les décibels ne s'additionnent pas : on additionne les **intensités**, puis on recalcule $L$.
- Dans $\theta = \lambda/a$, l'angle est en **radians**.
- Interférences : il faut des sources **cohérentes** (même fréquence, déphasage constant).
- Doppler : source qui s'approche = fréquence reçue **plus grande** (son plus aigu).
