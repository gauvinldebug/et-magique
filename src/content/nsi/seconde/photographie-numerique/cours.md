---
titre: "La photographie numérique"
court: "Photo numérique"
description: "Capteur et pixels, définition et résolution, couleurs RVB, codage sur 8 bits, poids d'une image, compression, traitement par algorithmes et métadonnées EXIF, expliqués avec une mosaïque de carreaux colorés. Exercices corrigés. SNT de seconde."
ordre: 7
publie: 2026-11-28T14:51:00
video:
  youtube: ""
piege: "**Plus de pixels ne veut pas dire une meilleure photo.** La qualité dépend aussi de la taille du capteur, de l'objectif et de la lumière. Un capteur minuscule avec beaucoup de pixels donne souvent une image bruitée."
pdf:
  cours: /pdf/nsi/seconde/photographie-numerique-cours.pdf
  fiche: /pdf/nsi/seconde/photographie-numerique-fiche.pdf
  exercices: /pdf/nsi/seconde/photographie-numerique-exercices.pdf
---

## Le problème

Ton téléphone prend une photo, et une fraction de seconde plus tard elle est nette, lumineuse, et pèse quelques mégaoctets. Que s'est-il passé entre la lumière qui entre et l'image qui s'affiche ?

## L'idée : la mosaïque

Approche-toi très près d'une mosaïque : tu ne vois que des petits carreaux colorés. Recule : une image apparaît. Une photo numérique est une mosaïque dont chaque carreau est un **pixel**.

## Le capteur

<div class="encadre">

Le **capteur** d'un appareil photo est couvert de millions de cellules sensibles à la lumière, les **photosites**. Chacun est recouvert d'un filtre rouge, vert ou bleu. Le processeur combine ces mesures pour donner une couleur à chaque pixel.

</div>

## Définition et résolution

- La **définition** est le nombre de pixels : par exemple $4000 \times 3000 = 12$ millions de pixels, soit 12 mégapixels.
- La **résolution** est le nombre de pixels par unité de longueur (pixels par pouce, ppp) : elle dit si l'image sera nette à l'impression.

## Les couleurs : RVB

<div class="encadre">

Chaque pixel est codé par trois nombres : l'intensité de **rouge**, de **vert** et de **bleu**, chacune entre 0 et 255 (codée sur 8 bits, donc un octet). Cela fait 3 octets par pixel et $256^3$, soit environ 16,7 millions de couleurs possibles.

</div>

- (255, 0, 0) : rouge ; (0, 0, 0) : noir ; (255, 255, 255) : blanc ; (255, 255, 0) : jaune.

## Le poids d'une image

Une image de 12 mégapixels non compressée pèse $12\,000\,000 \times 3 = 36$ millions d'octets, soit 36 Mo. Pour la rendre plus légère, on la **compresse** : le format JPEG supprime des détails peu visibles et divise souvent le poids par 10.

## Des algorithmes partout

Le téléphone ne se contente pas d'enregistrer : des algorithmes corrigent la lumière, réduisent le bruit, combinent plusieurs prises (HDR), floutent l'arrière-plan. La photo est en partie **calculée**.

## Les métadonnées EXIF

Chaque photo contient des **métadonnées EXIF** : date, heure, modèle d'appareil, réglages, et souvent les coordonnées GPS.

## Les pièges

- Définition (nombre de pixels) et résolution (pixels par pouce) sont différentes.
- Un pixel, c'est 3 octets en RVB, pas 1.
- Une photo peut révéler l'endroit où elle a été prise.
