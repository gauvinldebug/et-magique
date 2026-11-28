---
titre: "Localisation, cartographie et mobilité"
court: "Localisation et cartes"
description: "Latitude et longitude, principe du GPS et de la trilatération, cartes numériques et couches, calcul d'itinéraire et graphe routier, trames NMEA, géolocalisation et vie privée, expliqués avec trois amis qui crient l'heure. Exercices corrigés. SNT de seconde."
ordre: 5
publie: 2026-11-28T14:49:00
video:
  youtube: ""
piege: "**Le GPS de ton téléphone n'envoie rien aux satellites.** Il se contente de recevoir leurs signaux et calcule lui-même sa position. Ce sont les applications qui, ensuite, peuvent transmettre ta position."
pdf:
  cours: /pdf/nsi/seconde/localisation-et-cartographie-cours.pdf
  fiche: /pdf/nsi/seconde/localisation-et-cartographie-fiche.pdf
  exercices: /pdf/nsi/seconde/localisation-et-cartographie-exercices.pdf
suivant: objets-connectes
---

## Le problème

Ton téléphone sait où tu es à quelques mètres près, même en pleine campagne. Personne ne lui a donné ta position. Comment la trouve-t-il ?

## L'idée : trois amis qui crient l'heure

Imagine trois amis placés à des endroits connus. Chacun crie l'heure exacte au même moment. Comme le son met du temps à arriver, tu entends les cris un peu en retard, et pas avec le même retard. Avec ces retards, tu sais à quelle distance tu es de chacun. Un seul endroit est à la bonne distance des trois : c'est là que tu es. Le GPS fait pareil avec des satellites et des ondes radio.

## Se repérer sur la Terre

<div class="encadre">

Une position sur la Terre se donne par deux coordonnées : la **latitude** (de 0° à l'équateur à 90° aux pôles, Nord ou Sud) et la **longitude** (de 0° au méridien de Greenwich à 180°, Est ou Ouest).

</div>

Paris est à environ 48,86° N et 2,35° E.

## Le principe du GPS

Une trentaine de satellites tournent autour de la Terre et envoient en permanence un signal contenant l'heure exacte et leur position. Le récepteur mesure le temps mis par le signal pour arriver et en déduit la distance :

$$d = c \times t$$

où $c = 300\,000$ km/s est la vitesse de la lumière. Avec au moins **4 satellites**, il calcule sa position et corrige l'erreur de sa propre horloge. Cette méthode s'appelle la **trilatération**.

Le GPS est américain. Il existe aussi Galileo (européen), GLONASS (russe) et BeiDou (chinois).

## Les cartes numériques

Une carte numérique superpose des **couches** : le fond de carte, les routes, les noms, les commerces, le trafic. On peut afficher ou cacher chaque couche. Certaines cartes sont collaboratives, comme OpenStreetMap, alimentée par des bénévoles.

## Calculer un itinéraire

<div class="encadre">

Le réseau routier est modélisé par un **graphe** : les carrefours sont des sommets, les routes des arêtes, chacune avec un **poids** (distance ou durée). Calculer un itinéraire, c'est chercher le chemin de poids total minimal.

</div>

## La trame NMEA

Un récepteur GPS envoie ses résultats sous forme de lignes de texte normalisées, les **trames NMEA**, qui contiennent l'heure, la latitude, la longitude et le nombre de satellites utilisés.

## Géolocalisation et vie privée

Beaucoup d'applications enregistrent ta position, parfois en continu. Avec l'historique de tes positions, on peut deviner où tu habites, où tu étudies, tes habitudes. On peut régler l'accès à la localisation dans les paramètres du téléphone.

## Les pièges

- Le téléphone reçoit les signaux GPS, il n'en envoie pas.
- Il faut au moins 4 satellites, pas 3, à cause de l'horloge du récepteur.
- Le plus court en kilomètres n'est pas toujours le plus rapide.
