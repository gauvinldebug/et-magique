---
titre: Mouvement et forces, la variation de vitesse
court: Mouvement et forces
description: Vecteur vitesse, vecteur variation de vitesse, lien entre la somme des forces et la variation de vitesse, rôle de la masse, avec l'image d'un chariot de supermarché. Exercices corrigés sur chronophotographies. Première spécialité physique-chimie.
ordre: 10
publie: 2026-11-24T01:29:00
video:
  youtube: ""
piege: "**Une force ne sert pas à maintenir une vitesse, elle sert à la changer.** Si la somme des forces est nulle, la vitesse ne varie pas : le système peut très bien être en mouvement."
pdf:
  cours: /pdf/physique/premiere/mouvement-et-forces-cours.pdf
  fiche: /pdf/physique/premiere/mouvement-et-forces-fiche.pdf
  exercices: /pdf/physique/premiere/mouvement-et-forces-exercices.pdf
suivant: energie-electrique
---

## Le problème

Un footballeur frappe le ballon : sa vitesse change d'un coup. Un ballon lancé en l'air ralentit, s'arrête, puis redescend. Une voiture accélère au feu vert. Dans tous ces cas, la vitesse **change**, et à chaque fois il y a une force. En seconde, tu as vu que sans force (ou avec des forces qui se compensent), la vitesse ne change pas. Cette année, on mesure **de combien** une force change une vitesse.

## L'idée : le chariot de supermarché

Pousse un chariot vide : il démarre tout de suite. Pousse le même chariot rempli de packs d'eau, avec la même force : il démarre lentement.

- La **force** change la vitesse du chariot.
- Plus la **masse** est grande, plus il faut de force, ou de temps, pour obtenir le même changement.
- Et une fois lancé sur un sol bien lisse, le chariot continue tout seul : <mark>pas besoin de force pour garder sa vitesse</mark>, seulement pour la changer.

## Le vecteur vitesse

Sur une chronophotographie, le système occupe les positions $M_0, M_1, M_2, \dots$ à intervalles de temps égaux $\Delta t$. Le vecteur vitesse au point $M_i$ s'approche par

$$
\vec{v}_i \approx \frac{\overrightarrow{M_i M_{i+1}}}{\Delta t}
$$

Il a la direction du déplacement, le sens du mouvement, et pour valeur $v_i = M_i M_{i+1} / \Delta t$.

## Le vecteur variation de vitesse

<div class="encadre">

Entre deux instants proches, la variation du vecteur vitesse est

$$
\Delta \vec{v} = \vec{v}_{i+1} - \vec{v}_{i}
$$

Pour le tracer, on dessine $\vec{v}_{i+1}$ et $-\vec{v}_i$ bout à bout (ou les deux vecteurs depuis un même point, et on relie l'extrémité de $\vec{v}_i$ à celle de $\vec{v}_{i+1}$).

</div>

Trois cas à reconnaître :

- mouvement **rectiligne accéléré** : $\Delta \vec{v}$ dans le sens du mouvement ;
- mouvement **rectiligne ralenti** : $\Delta \vec{v}$ dans le sens opposé ;
- mouvement **circulaire uniforme** : la valeur de $v$ ne change pas, mais sa direction tourne, donc $\Delta \vec{v} \neq \vec{0}$. Il est dirigé vers le centre du cercle.

## Le lien avec les forces

<div class="encadre">

**Relation approchée entre forces et variation de vitesse.** Pour un système de masse $m$ constante, pendant une courte durée $\Delta t$ :

$$
\cbleu{\sum \vec{F}} \approx \corange{m}\,\frac{\Delta \vec{v}}{\Delta t}
$$

</div>

Ce qu'il faut lire dans cette relation :

- $\Delta \vec{v}$ a **la même direction et le même sens** que la somme des forces.
- Pour une même force, plus $m$ est grand, plus $\Delta \vec{v}$ est petit : c'est le chariot plein.
- Si $\sum \vec{F} = \vec{0}$, alors $\Delta \vec{v} = \vec{0}$ : on retrouve le principe d'inertie.

Exemple : une balle en chute libre ne subit que son poids $\vec{P} = m\vec{g}$. La relation donne $\Delta \vec{v} / \Delta t \approx \vec{g}$ : vertical, vers le bas, de valeur $9{,}8\ \mathrm{m \cdot s^{-1}}$ par seconde. Que la balle monte ou descende, <mark>sa vitesse diminue ou augmente de 9,8 m/s chaque seconde</mark>, et cela quelle que soit sa masse.

En terminale, cette relation devient exacte et prend le nom de **deuxième loi de Newton**.

## Les pièges

- Un système en mouvement **n'a pas besoin** d'une force dans le sens du mouvement.
- Au sommet de la trajectoire d'une balle lancée verticalement, la vitesse est nulle mais la force (le poids) ne l'est pas.
- Dans un virage à vitesse constante, la vitesse **change** (sa direction), donc des forces ne se compensent pas.
- $\Delta \vec{v}$ se lit sur la **différence** de deux vecteurs, pas sur un seul.
