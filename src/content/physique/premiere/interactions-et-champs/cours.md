---
titre: Interactions fondamentales et notion de champ
court: Interactions et champs
description: Loi de Coulomb, loi de la gravitation universelle, champ électrostatique, champ de gravitation, lignes de champ et condensateur plan, expliqués avec une carte des vents. Exercices corrigés. Première spécialité physique-chimie.
ordre: 8
publie: 2026-11-24T01:27:00
video:
  youtube: ""
piege: "**La force dépend de $1/d^2$, pas de $1/d$.** Doubler la distance entre deux charges divise la force par 4, pas par 2."
pdf:
  cours: /pdf/physique/premiere/interactions-et-champs-cours.pdf
  fiche: /pdf/physique/premiere/interactions-et-champs-fiche.pdf
  exercices: /pdf/physique/premiere/interactions-et-champs-exercices.pdf
suivant: statique-des-fluides
---

## Le problème

La Terre attire la Lune sans la toucher. Un ballon frotté sur un pull attire des cheveux sans les toucher. Comment un objet peut-il agir sur un autre à distance, à travers le vide ? La physique répond avec une idée simple et puissante : le **champ**.

## L'idée : la carte des vents

Sur une carte météo, à chaque endroit, une flèche indique le vent : sa direction et sa force. Tu n'as pas besoin de savoir d'où vient le vent pour savoir ce qui arrivera à un cerf-volant lâché là : tu regardes la flèche.

Un <span class="o">champ</span>, c'est exactement cela. Un objet (la Terre, une charge) modifie l'espace autour de lui. En chaque point, une flèche dit quelle force subirait un objet témoin qu'on y placerait. La Terre crée un champ de gravitation, une charge crée un champ électrique.

## Deux forces à distance

<div class="encadre">

**Loi de Coulomb.** Deux charges ponctuelles $q_A$ et $q_B$, à la distance $d$, exercent l'une sur l'autre une force de valeur

$$
F = k\,\frac{|q_A\,q_B|}{d^2} \qquad k = 9{,}0 \times 10^{9}\ \mathrm{N \cdot m^2 \cdot C^{-2}}
$$

Attractive si les charges sont de signes opposés, répulsive si elles sont de même signe.

**Loi de la gravitation universelle.** Deux masses $m_A$ et $m_B$ à la distance $d$ s'attirent toujours, avec une force de valeur

$$
F = G\,\frac{m_A\,m_B}{d^2} \qquad G = 6{,}67 \times 10^{-11}\ \mathrm{N \cdot m^2 \cdot kg^{-2}}
$$

</div>

Les deux lois ont la même forme : produit des deux « sources », divisé par le carré de la distance. Les forces sont dirigées selon la droite qui joint les deux objets, et les deux forces sont **opposées** (même valeur, sens contraires).

En écriture vectorielle, avec $\vec{u}_{AB}$ le vecteur unitaire dirigé de A vers B, la force exercée par A sur B est

$$
\vec{F}_{A/B} = k\,\frac{q_A\,q_B}{d^2}\,\vec{u}_{AB} \qquad \vec{F}_{A/B} = -G\,\frac{m_A\,m_B}{d^2}\,\vec{u}_{AB}
$$

Le signe moins de la gravitation dit qu'elle est toujours attractive : B est tiré vers A.

## Qui gagne ?

Dans un atome d'hydrogène, le proton et l'électron sont à $5{,}3 \times 10^{-11}\ \mathrm{m}$. La force électrique vaut environ $8 \times 10^{-8}\ \mathrm{N}$, la force de gravitation environ $4 \times 10^{-47}\ \mathrm{N}$. <mark>À l'échelle des atomes, la gravitation est négligeable</mark>, et de très loin.

À notre échelle et au-delà, c'est l'inverse : la matière est globalement neutre, les forces électriques se compensent, et seule la gravitation, toujours attractive, s'additionne. C'est elle qui gouverne les planètes.

## Le champ, en formule

<div class="encadre">

**Champ électrostatique.** Une charge $q$ placée en un point où règne le champ $\vec{E}$ subit la force

$$
\vec{F} = q\,\vec{E} \qquad E \text{ en } \mathrm{V \cdot m^{-1}} \text{ (ou } \mathrm{N \cdot C^{-1}})
$$

**Champ de gravitation.** Une masse $m$ placée en un point où règne le champ $\vec{\mathcal{G}}$ subit la force $\vec{F} = m\,\vec{\mathcal{G}}$. Près de la surface de la Terre, $\vec{\mathcal{G}}$ se confond avec le champ de pesanteur $\vec{g}$ : vertical, vers le bas, $g \approx 9{,}8\ \mathrm{N \cdot kg^{-1}}$.

</div>

Le champ créé par une charge $Q$ à la distance $d$ vaut $E = k\,|Q|/d^2$. Le champ de gravitation créé par la Terre à la distance $d$ de son centre vaut $\mathcal{G} = G\,M_T/d^2$. À la surface ($d = R_T = 6{,}37 \times 10^{6}\ \mathrm{m}$, $M_T = 5{,}97 \times 10^{24}\ \mathrm{kg}$), on trouve bien $9{,}8\ \mathrm{N \cdot kg^{-1}}$.

<span class="p">Attention au signe de la charge</span> : pour $q > 0$, la force a le sens du champ ; pour $q < 0$, comme un électron, elle est de **sens opposé**.

## Les lignes de champ

Une ligne de champ est une courbe tangente au champ en chacun de ses points, orientée dans le sens du champ. Ce sont les flèches de la carte des vents reliées entre elles.

- Autour d'une charge positive, les lignes **partent** de la charge, comme des rayons.
- Autour d'une charge négative, elles **arrivent** sur la charge.
- Autour de la Terre, les lignes du champ de gravitation pointent vers son centre.

## Le condensateur plan : un champ uniforme

Deux plaques métalliques parallèles, distantes de $d$, reliées à une tension $U$. Entre les plaques, loin des bords, le champ est **uniforme** : même direction, même sens, même valeur partout.

$$
E = \frac{U}{d}
$$

Il est perpendiculaire aux plaques et dirigé de la plaque **positive** vers la plaque **négative**. Les lignes de champ sont des droites parallèles.

## Les pièges

- $d^2$ au dénominateur : distance doublée, force divisée par 4.
- Dans la loi de Coulomb, les distances en **mètres**, les charges en **coulombs**.
- Un électron subit une force **opposée** au champ électrique.
- Le champ d'un condensateur va du **+ vers le −**.
