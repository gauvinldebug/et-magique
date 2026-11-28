---
titre: La lumière, onde et photon, et les niveaux d'énergie de l'atome
court: Photons et spectres
description: Ondes électromagnétiques et leurs domaines, relation entre longueur d'onde et fréquence, le photon et son énergie, niveaux d'énergie quantifiés de l'atome, spectres d'émission et d'absorption, avec l'image d'un escalier. Exercices corrigés. Première spécialité physique-chimie.
ordre: 16
publie: 2026-11-24T01:35:00
video:
  youtube: ""
piege: "**Plus la longueur d'onde est courte, plus le photon est énergétique.** $E = hc/\\lambda$ : un photon ultraviolet porte plus d'énergie qu'un photon rouge, c'est pour cela qu'il abîme la peau."
pdf:
  cours: /pdf/physique/premiere/photons-et-spectres-cours.pdf
  fiche: /pdf/physique/premiere/photons-et-spectres-fiche.pdf
  exercices: /pdf/physique/premiere/photons-et-spectres-exercices.pdf
---

## Le problème

Une lampe au sodium des vieux lampadaires éclaire en orange, et seulement en orange. Passée à travers un prisme, sa lumière ne donne pas un arc-en-ciel, mais une seule raie fine. Pourquoi un atome n'émet-il que certaines couleurs, toujours les mêmes ? La réponse a fondé la physique quantique.

## L'idée : l'escalier

Imagine l'électron d'un atome sur un **escalier**. Il peut se tenir sur une marche, jamais entre deux marches. Chaque marche correspond à une énergie précise.

- Pour monter d'une marche, il doit recevoir **exactement** la bonne quantité d'énergie : ni plus, ni moins.
- Quand il redescend, il rend l'énergie de la hauteur de marche, d'un seul coup, sous forme d'un **grain de lumière**, le photon.

Chaque atome a son propre escalier. Les hauteurs de marches donnent les couleurs qu'il peut émettre : <mark>le spectre est la signature de l'atome</mark>.

## La lumière, une onde électromagnétique

La lumière est une onde électromagnétique. Contrairement au son, elle se propage aussi dans le vide, à la célérité $c = 3{,}00 \times 10^{8}\ \mathrm{m \cdot s^{-1}}$.

<div class="encadre">

$$
\lambda = \frac{c}{\nu}
$$

$\lambda$ la longueur d'onde dans le vide (en m), $\nu$ la fréquence (en Hz).

</div>

| Domaine | Longueur d'onde dans le vide |
|---|---|
| rayons gamma, X | moins de 10 nm |
| ultraviolet | 10 nm à 400 nm |
| **visible** | **400 nm (violet) à 800 nm (rouge)** |
| infrarouge | 800 nm à 1 mm |
| micro-ondes, ondes radio | au-delà de 1 mm |

## La lumière, un flux de photons

La lumière a aussi un aspect **particulaire** : elle est faite de photons, grains d'énergie sans masse qui se déplacent à la vitesse $c$.

<div class="encadre">

**Énergie d'un photon :**

$$
\cbleu{E} = h\,\corange{\nu} = \frac{h\,c}{\cvert{\lambda}}
$$

avec $h = 6{,}63 \times 10^{-34}\ \mathrm{J \cdot s}$, la constante de Planck.

</div>

Ces énergies sont minuscules en joules. On utilise souvent l'**électronvolt** : $1\ \mathrm{eV} = 1{,}60 \times 10^{-19}\ \mathrm{J}$. Un photon visible porte entre 1,6 et 3,1 eV.

<div class="labo" data-labo="spectre"></div>

## Les niveaux d'énergie de l'atome

L'énergie d'un atome est **quantifiée** : elle ne peut prendre que certaines valeurs, les **niveaux d'énergie**, notés $E_1, E_2, E_3, \dots$ Le niveau le plus bas est l'**état fondamental**, les autres sont des **états excités**. Ce sont les marches de l'escalier.

Pour l'hydrogène : $E_1 = -13{,}6\ \mathrm{eV}$, $E_2 = -3{,}40\ \mathrm{eV}$, $E_3 = -1{,}51\ \mathrm{eV}$… Le niveau $0$ correspond à l'atome ionisé, l'électron arraché.

<div class="encadre">

**Émission.** Quand l'atome passe d'un niveau $E_p$ à un niveau inférieur $E_n$, il émet un photon d'énergie

$$
h\,\nu = E_p - E_n
$$

**Absorption.** Un atome au niveau $E_n$ ne peut absorber un photon que si son énergie vaut **exactement** $E_p - E_n$ pour un niveau $E_p$ supérieur.

</div>

## Spectres d'émission et d'absorption

- Un gaz chaud émet un **spectre de raies d'émission** : des raies colorées sur fond noir, aux longueurs d'onde des transitions vers le bas.
- Une lumière blanche traversant un gaz froid donne un **spectre de raies d'absorption** : un fond coloré barré de raies noires, **aux mêmes longueurs d'onde**.

C'est ainsi qu'on sait de quoi sont faites les étoiles : leur lumière traverse leur atmosphère, et les raies noires du spectre disent quels atomes s'y trouvent.

## Les pièges

- $\lambda$ en **mètres** dans $E = hc/\lambda$ : $500\ \mathrm{nm} = 5{,}00 \times 10^{-7}\ \mathrm{m}$.
- Convertir les eV en joules avant d'utiliser $h$, ou l'inverse à la fin.
- L'énergie du photon est la **différence** de deux niveaux, pas la valeur d'un niveau.
- Les niveaux sont négatifs, mais une différence $E_p - E_n$ avec $p > n$ est positive.
