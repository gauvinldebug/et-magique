---
titre: "Les réseaux et leurs protocoles"
court: "Réseaux"
description: "Transmission de données en paquets, adresses IP et masques, modèle en couches (TCP/IP), protocoles IP et TCP, accusés de réception, protocole du bit alterné, rôle des routeurs et des commutateurs, DNS, expliqués avec un colis découpé en cartons numérotés. Exercices corrigés. Spécialité NSI de première."
ordre: 10
publie: 2026-11-28T14:10:00
video:
  youtube: ""
piege: "**IP n'assure pas que les paquets arrivent, ni dans l'ordre.** C'est TCP, au-dessus, qui numérote les paquets, demande des accusés de réception et renvoie ceux qui sont perdus."
pdf:
  cours: /pdf/nsi/premiere/reseaux-cours.pdf
  fiche: /pdf/nsi/premiere/reseaux-fiche.pdf
  exercices: /pdf/nsi/premiere/reseaux-exercices.pdf
suivant: bases-de-la-programmation
---

## Le problème

Une vidéo de 500 Mo traverse la France en passant par des dizaines de machines, sur des câbles et des ondes qui perdent parfois des données. Pourtant elle arrive complète et dans le bon ordre. Comment ?

## L'idée : le colis en cartons numérotés

Pour déménager un piano en pièces détachées, on le met dans des cartons numérotés, chacun avec l'adresse du destinataire. Les cartons peuvent prendre des camions différents et arriver dans le désordre. À l'arrivée, on les remet dans l'ordre et on réclame ceux qui manquent.

## Les paquets

<div class="encadre">

Les données sont découpées en **paquets**. Chaque paquet porte l'**adresse IP** de l'expéditeur et du destinataire, et voyage indépendamment des autres.

</div>

Une adresse IPv4 comme `192.168.1.17/24` s'écrit sur 32 bits. Le `/24` est le **masque** : les 24 premiers bits identifient le **réseau** (`192.168.1`), les autres la **machine** (`17`). Deux machines du même réseau communiquent directement ; sinon, elles passent par un **routeur**.

## Le modèle en couches

Chaque couche a un rôle et s'appuie sur celle du dessous :

| Couche | Protocole | Rôle |
|---|---|---|
| application | HTTP, DNS | ce que veut l'utilisateur |
| transport | TCP | fiabilité, ordre des paquets |
| internet | IP | adressage, acheminement |
| accès réseau | Ethernet, Wi-Fi | transmission physique locale |

## IP et TCP

- **IP** achemine chaque paquet vers son adresse, sans garantie : un paquet peut se perdre.
- **TCP** numérote les paquets ; le destinataire renvoie un **accusé de réception** (ACK) ; <mark>un paquet sans accusé est renvoyé</mark>, et les paquets sont remis dans l'ordre.

## Le protocole du bit alterné

C'est la version la plus simple d'un protocole fiable. Chaque message porte un bit (0 ou 1) qui alterne. L'expéditeur envoie le message 0 et attend l'accusé 0. S'il ne reçoit rien au bout d'un certain temps, il renvoie. Quand il reçoit l'accusé 0, il passe au message suivant, marqué 1. Le bit permet au destinataire de repérer un doublon.

## Le DNS

On retient `exemple.fr`, pas `93.184.216.34`. Le **DNS** est l'annuaire qui traduit un nom de domaine en adresse IP.

## Les pièges

- IP seul ne garantit ni l'arrivée ni l'ordre.
- Le masque `/24` ne veut pas dire 24 machines : il reste 8 bits, soit 254 adresses de machines utilisables.
- Un commutateur relie les machines d'un même réseau ; un routeur relie des réseaux différents.
