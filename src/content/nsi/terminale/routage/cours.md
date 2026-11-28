---
titre: "Le routage"
court: "Routage"
description: "Routeurs et tables de routage, adresses IP et réseaux, protocole RIP fondé sur le nombre de sauts, protocole OSPF fondé sur le coût lié au débit, calcul du coût d'une liaison, expliqués avec un réseau de panneaux indicateurs sur les routes. Exercices corrigés. Spécialité NSI de terminale."
ordre: 11
publie: 2026-11-28T13:11:00
video:
  youtube: ""
piege: "**RIP et OSPF ne choisissent pas forcément la même route.** RIP minimise le nombre de routeurs traversés, OSPF le coût total, lié au débit des liaisons."
pdf:
  cours: /pdf/nsi/terminale/routage-cours.pdf
  fiche: /pdf/nsi/terminale/routage-fiche.pdf
  exercices: /pdf/nsi/terminale/routage-exercices.pdf
suivant: securiser-les-communications
---

## Le problème

Un message envoyé de Lille à Marseille traverse des dizaines de routeurs. Aucun ne connaît le trajet complet, et pourtant le paquet arrive. Comment chaque routeur sait-il où l'envoyer ?

## L'idée : les panneaux indicateurs

Sur la route, aucun panneau ne te donne l'itinéraire entier. À chaque carrefour, un panneau indique seulement la direction à prendre pour Marseille. En suivant les panneaux de carrefour en carrefour, tu arrives. Un routeur est un carrefour, sa **table de routage** est son panneau.

## La table de routage

<div class="encadre">

Pour chaque réseau destination, la table indique la **passerelle** (le prochain routeur), l'**interface** de sortie et une **métrique** (le coût de la route).

</div>

| Destination | Passerelle | Interface | Métrique |
|---|---|---|---|
| 192.168.1.0/24 | directe | eth0 | 0 |
| 10.0.5.0/24 | 172.16.0.2 | eth1 | 2 |

Le routeur lit l'adresse IP de destination du paquet, cherche la ligne correspondante et transmet au routeur suivant.

## RIP : le moins de sauts

Avec **RIP**, la métrique est le **nombre de sauts** (routeurs traversés). Chaque routeur envoie régulièrement sa table à ses voisins ; chacun met à jour la sienne en gardant la route la plus courte. Une distance de 16 signifie « injoignable », ce qui limite RIP aux petits réseaux.

## OSPF : le moins coûteux

Avec **OSPF**, chaque routeur connaît la carte complète du réseau et calcule les meilleures routes (algorithme de Dijkstra). La métrique est un **coût** qui dépend du débit :

$$
\text{coût} = \frac{10^8}{\text{débit en bit/s}}
$$

Une liaison à 100 Mbit/s coûte 1, une liaison à 10 Mbit/s coûte 10. <mark>On additionne les coûts des liaisons et on prend la route de coût total minimal.</mark>

## Les pièges

- RIP compte des routeurs, OSPF additionne des coûts : les deux choix peuvent différer.
- Le coût OSPF diminue quand le débit augmente.
- Un routeur ne connaît que le prochain saut, pas tout le trajet (sauf OSPF, qui calcule à partir de la carte).
