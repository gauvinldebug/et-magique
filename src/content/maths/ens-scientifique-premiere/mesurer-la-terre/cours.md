---
titre: Mesurer la Terre, d'Ératosthène aux coordonnées géographiques
court: Mesurer la Terre
description: La méthode d'Ératosthène, longueur d'un arc de cercle proportionnelle à l'angle, latitude et longitude, longueur d'un parallèle, plus court chemin sur la sphère, expliqués avec les quartiers d'une orange, avec des exercices corrigés pas à pas. Enseignement scientifique de Première, partie maths.
ordre: 1
publie: 2026-11-23T09:01:00
video:
  youtube: ""
piege: >-
  **Un parallèle n'est pas un grand cercle.** Le rayon d'un parallèle de latitude $\lambda$ vaut $R\cos\lambda$, pas $R$. Et pour aller d'un point à un autre de même latitude, suivre le parallèle n'est pas le plus court chemin : le plus court passe par un arc de **grand cercle**.
pdf:
  cours: /pdf/maths/ens-scientifique-premiere/mesurer-la-terre-cours.pdf
  fiche: /pdf/maths/ens-scientifique-premiere/mesurer-la-terre-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-premiere/mesurer-la-terre-exercices.pdf
suivant: le-soleil-et-l-energie-recue
---

## Le problème

Vers 240 avant notre ère, Ératosthène apprend qu'à Syène, le jour du solstice d'été à midi, le Soleil éclaire le fond d'un puits : il est exactement à la verticale. Le même jour, à Alexandrie, à environ 800 km plus au nord, l'ombre d'un bâton indique que les rayons font un angle de $7{,}2°$ avec la verticale. Comment en déduire la longueur du tour de la Terre ?

## L'idée : les quartiers d'une orange

Coupe une orange en quartiers. Chaque quartier est délimité par un angle au **centre** de l'orange, et par un morceau de peau à l'extérieur. Si tu prends un quartier deux fois plus ouvert, tu obtiens deux fois plus de peau.

C'est toute l'idée : sur un cercle, <mark>la longueur d'un arc est proportionnelle à l'angle au centre</mark>. Ératosthène a mesuré un « quartier » de Terre (l'angle de $7{,}2°$ et la peau de 800 km) ; il n'a plus qu'à compléter l'orange.

## Longueur d'un arc de cercle

<div class="encadre">

Sur un cercle de rayon $R$, un arc d'angle au centre $\corange{\alpha}$ (en degrés) a pour longueur

$$
\cbleu{L} = \frac{\corange{\alpha}}{360} \times 2\pi R
$$

C'est un tableau de proportionnalité : $360°$ correspond au tour complet $2\pi R$.

</div>

Les rayons du Soleil arrivent parallèles sur Terre. L'angle mesuré à Alexandrie est donc égal (angles alternes-internes) à l'angle au centre de la Terre entre Syène et Alexandrie.

## Latitude, longitude et parallèles

<div class="encadre">

- Un **méridien** est un demi-grand cercle qui relie les deux pôles. Son rayon est celui de la Terre, $R \approx 6\,371$ km.
- La **latitude** $\lambda$ d'un point est l'angle, mesuré depuis le centre, entre l'équateur et ce point (de $0°$ à $90°$ Nord ou Sud).
- La **longitude** est l'angle entre le méridien de Greenwich et le méridien du point (de $0°$ à $180°$ Est ou Ouest).
- Le **parallèle** de latitude $\lambda$ est un cercle de rayon $\corange{r = R\cos\lambda}$, plus petit que l'équateur.

</div>

## Le plus court chemin

<div class="encadre">

Sur une sphère, le plus court chemin entre deux points est un arc de **grand cercle** (un cercle de même centre et de même rayon que la Terre). Deux points sur un même méridien : le méridien est un grand cercle, il donne le plus court chemin. Deux points de même latitude (hors équateur) : le parallèle n'est **pas** un grand cercle, c'est un détour.

</div>

## Retour au problème

L'angle $7{,}2°$ représente $\frac{7{,}2}{360} = \frac{1}{50}$ du tour complet. L'arc de 800 km est donc $\frac{1}{50}$ de la circonférence :

$$
C = 50 \times 800 = 40\,000 \text{ km}
$$

<mark>Ératosthène obtient une circonférence d'environ 40 000 km</mark>, très proche de la valeur actuelle (environ 40 030 km au niveau des pôles).

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-premiere/mesurer-la-terre/exercices/). La suite : [le Soleil et l'énergie reçue](/maths/ens-scientifique-premiere/le-soleil-et-l-energie-recue/cours/). Pour revoir la trigonométrie : [trigonométrie de 3e](/maths/3e/trigonometrie/cours/).
