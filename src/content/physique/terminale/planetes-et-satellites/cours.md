---
titre: Mouvement des planètes et des satellites
court: Planètes et satellites
description: Lois de Kepler, gravitation, mouvement circulaire des satellites, vitesse et période orbitales, satellite géostationnaire, expliqués avec un boulet qui tombe sans jamais toucher le sol. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 11
publie: 2026-11-24T01:10:00
video:
  youtube: ""
piege: "**La vitesse d'un satellite ne dépend pas de sa masse.** Dans $v = \\sqrt{\\frac{GM}{r}}$, $M$ est la masse de l'astre attracteur. Une station spatiale et une vis perdue sur la même orbite vont à la même vitesse."
pdf:
  cours: /pdf/physique/terminale/planetes-et-satellites-cours.pdf
  fiche: /pdf/physique/terminale/planetes-et-satellites-fiche.pdf
  exercices: /pdf/physique/terminale/planetes-et-satellites-exercices.pdf
suivant: mecanique-des-fluides
---

## Le problème

La Station spatiale internationale fait le tour de la Terre en 92 minutes environ. Un satellite de télévision, lui, reste toujours au-dessus du même point de l'équateur. Pourquoi ces deux satellites, soumis à la même attraction terrestre, ont-ils des mouvements si différents ? Et pourquoi ne tombent-ils pas ?

## L'idée : le boulet qui tombe à côté

Du sommet d'une très haute montagne, on tire un boulet de canon à l'horizontale. Il tombe un peu plus loin. Plus fort : il tombe encore plus loin. Mais la Terre est ronde : le sol se dérobe sous le boulet à mesure qu'il avance.

Si on tire assez fort, le boulet tombe exactement aussi vite que le sol s'éloigne sous lui. Il **tombe en permanence**, mais ne touche jamais le sol : il est en orbite.

<mark>Un satellite ne flotte pas : il est en chute libre permanente</mark>. C'est aussi pour cela que les astronautes de la station paraissent en apesanteur : eux et la station tombent ensemble.

## Les lois de Kepler

Kepler les a tirées des observations des planètes, avant Newton. Elles s'appliquent à tout corps en orbite autour d'un astre.

<div class="encadre">

**Première loi (orbites).** Dans le référentiel héliocentrique, chaque planète décrit une **ellipse** dont le Soleil occupe un des foyers.

**Deuxième loi (aires).** Le segment Soleil-planète balaie des **aires égales pendant des durées égales**. La planète va plus vite quand elle est proche du Soleil.

**Troisième loi (périodes).** Pour toutes les planètes d'un même astre, le rapport entre le carré de la période $T$ et le cube du demi-grand axe $a$ est le même :

$$
\frac{T^2}{a^3} = \text{constante}
$$

</div>

Les orbites des planètes du Système solaire sont presque circulaires. On les modélise souvent par des cercles, et l'on remplace $a$ par le rayon $r$.

## Le mouvement circulaire d'un satellite

Un satellite de masse $m$ tourne autour d'un astre de masse $M$ sur un cercle de rayon $r$ (distance entre les **centres**). Seule force : l'attraction gravitationnelle, dirigée vers le centre de l'astre,

$$
F = \frac{G\,m\,M}{r^2} \qquad G = 6{,}67 \times 10^{-11}\ \mathrm{N \cdot m^2 \cdot kg^{-2}}
$$

On applique la deuxième loi de Newton dans le **repère de Frenet** (référentiel géocentrique pour un satellite de la Terre, héliocentrique pour une planète) :

$$
m\,\vec{a} = \frac{G m M}{r^2}\,\vec{u}_N \quad\Longrightarrow\quad \frac{\mathrm{d}v}{\mathrm{d}t} = 0 \quad\text{et}\quad \frac{v^2}{r} = \frac{GM}{r^2}
$$

<div class="encadre">

Le mouvement circulaire d'un satellite est **uniforme**, de vitesse

$$
\cbleu{v} = \sqrt{\frac{G M}{r}}
$$

et de période (durée d'un tour, $T = \frac{2\pi r}{v}$)

$$
\cbleu{T} = 2\pi \sqrt{\frac{r^3}{G M}} \qquad\Longleftrightarrow\qquad \frac{T^2}{r^3} = \frac{4\pi^2}{G M}
$$

</div>

On retrouve la troisième loi de Kepler, et on apprend ce que vaut la constante : elle ne dépend que de la masse de l'astre central. Mesurer la période et le rayon d'une lune permet donc de **peser** sa planète.

Plus le satellite est loin, plus il est lent et plus sa période est longue. La station spatiale, à environ 400 km d'altitude, fait un tour en une heure et demie ; la Lune, à 384 000 km, en un peu plus de 27 jours.

## Le satellite géostationnaire

Un satellite **géostationnaire** reste immobile pour un observateur terrestre. Il faut pour cela :

- une orbite circulaire dans le **plan de l'équateur** ;
- un mouvement dans le **même sens** que la rotation de la Terre ;
- une période égale à la période de rotation de la Terre sur elle-même, le **jour sidéral**, $T \approx 86\,164\ \mathrm{s}$ (23 h 56 min).

La troisième loi impose alors le rayon de l'orbite : $r \approx 42\,200$ km, soit une altitude d'environ 35 800 km.

## Les pièges

- $r$ est la distance **entre les centres** : rayon de l'astre + altitude.
- La vitesse et la période ne dépendent **pas** de la masse du satellite.
- La période d'un géostationnaire est le jour **sidéral** (23 h 56 min), pas 24 h.
- La deuxième loi de Kepler interdit une vitesse constante sur une ellipse : seule l'orbite circulaire donne un mouvement uniforme.
