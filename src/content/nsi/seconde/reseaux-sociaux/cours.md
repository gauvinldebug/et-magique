---
titre: "Les réseaux sociaux"
court: "Réseaux sociaux"
description: "Graphe social, abonnés et amis, rayon, diamètre et centre, effet petit monde, modèle économique, algorithmes de recommandation, cyberharcèlement et identité numérique, expliqués avec une cour de récréation géante. Exercices corrigés. SNT de seconde."
ordre: 3
publie: 2026-11-28T14:47:00
video:
  youtube: ""
piege: "**Un réseau social gratuit n'est pas sans contrepartie.** Il gagne de l'argent grâce à la publicité, et ce qu'il vend aux annonceurs, c'est ton attention et tes données."
pdf:
  cours: /pdf/nsi/seconde/reseaux-sociaux-cours.pdf
  fiche: /pdf/nsi/seconde/reseaux-sociaux-fiche.pdf
  exercices: /pdf/nsi/seconde/reseaux-sociaux-exercices.pdf
suivant: donnees-structurees
---

## Le problème

Tu ouvres une application et elle te montre exactement les vidéos qui vont te garder une heure. Comment sait-elle ce qui te plaît, et pourquoi tient-elle tant à ce que tu restes ?

## L'idée : la cour de récréation géante

Imagine une cour de récréation avec des milliards d'élèves. Chacun connaît quelques personnes, qui en connaissent d'autres. Un surveillant observe tout : qui parle avec qui, qui regarde quoi, combien de temps. Puis il choisit ce que chacun va entendre ensuite. Ce surveillant, c'est l'algorithme du réseau social.

## Le graphe social

<div class="encadre">

On représente un réseau social par un **graphe** : chaque personne est un **sommet**, chaque relation est une **arête**. Si la relation est réciproque (amis), l'arête n'a pas de sens. Si elle ne l'est pas (je te suis, tu ne me suis pas), on dessine une flèche.

</div>

## Distance, excentricité, rayon, diamètre

- La **distance** entre deux sommets est le plus petit nombre d'arêtes pour aller de l'un à l'autre.
- L'**excentricité** d'un sommet est sa plus grande distance à un autre sommet.
- Le **diamètre** du graphe est la plus grande excentricité ; le **rayon** est la plus petite.
- Le **centre** est formé des sommets dont l'excentricité est égale au rayon.

## L'effet petit monde

<div class="encadre">

Dans les grands réseaux sociaux, deux personnes prises au hasard sont reliées par une chaîne très courte, souvent moins de 6 intermédiaires. C'est l'**effet petit monde**.

</div>

## Le modèle économique

L'inscription est gratuite. Le réseau gagne de l'argent en vendant des espaces publicitaires ciblés. Plus tu restes, plus il montre de publicités, et plus il connaît tes goûts, plus il les vend cher.

## Les algorithmes de recommandation

L'algorithme choisit ce que tu vois à partir de ce que tu as aimé, regardé jusqu'au bout, partagé, et de ce qu'ont aimé des personnes proches de toi. Il peut t'enfermer dans une **bulle** où tu ne vois plus que des contenus qui vont dans ton sens.

## Identité numérique et cyberharcèlement

Ton **identité numérique** est l'ensemble des traces que tu laisses en ligne : publications, photos, commentaires, mentions. Ce qui est publié peut être copié et rester longtemps. Le **cyberharcèlement** est puni par la loi ; en France, on peut appeler le 3018, numéro gratuit et anonyme.

## Les pièges

- Gratuit pour toi ne veut pas dire sans contrepartie.
- La distance compte les arêtes, pas les sommets.
- Supprimer une publication ne supprime pas les copies.
