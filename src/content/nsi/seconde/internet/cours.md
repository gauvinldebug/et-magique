---
titre: "Internet"
court: "Internet"
description: "Le réseau des réseaux, adresses IP, paquets, routeurs, protocoles TCP/IP, DNS, réseau pair à pair, expliqués avec la poste et ses colis découpés. Exercices corrigés. SNT de seconde."
ordre: 1
publie: 2026-11-28T14:45:00
video:
  youtube: ""
piege: "**Internet et le Web, ce n'est pas la même chose.** Internet est le réseau qui transporte les données. Le Web n'est qu'un des services qui l'utilisent, comme le courriel ou les jeux en ligne."
pdf:
  cours: /pdf/nsi/seconde/internet-cours.pdf
  fiche: /pdf/nsi/seconde/internet-fiche.pdf
  exercices: /pdf/nsi/seconde/internet-exercices.pdf
suivant: le-web
---

## Le problème

Tu envoies une photo à un ami à l'autre bout du monde. Elle arrive en moins d'une seconde, sans qu'aucun câble ne relie directement ton téléphone au sien. Comment fait-elle le trajet ?

## L'idée : la poste et les colis découpés

Imagine que tu envoies un meuble en kit par la poste. Tu le découpes en petits colis, tu écris l'adresse sur chacun, tu numérotes les colis. Chaque centre de tri envoie le colis vers le centre suivant, pas forcément par le même chemin. À l'arrivée, on remet les colis dans l'ordre et on remonte le meuble. Internet fonctionne exactement comme ça.

## Un réseau de réseaux

<div class="encadre">

**Internet** est un réseau mondial qui relie des millions de réseaux entre eux : réseaux de maisons, d'entreprises, d'opérateurs. Il est né aux États-Unis dans les années 1970 (ARPANET) et s'est ouvert au grand public dans les années 1990.

</div>

Aucun ordinateur ne dirige Internet. Si un câble est coupé, les données passent par un autre chemin.

## Les adresses IP

Chaque machine connectée possède une **adresse IP**. En version 4, c'est une suite de 4 nombres entre 0 et 255, par exemple `192.168.1.12`. Il existe environ 4 milliards d'adresses IPv4, ce qui ne suffit plus : la version 6 (IPv6) utilise des adresses beaucoup plus longues.

## Les paquets et les routeurs

<div class="encadre">

Les données sont découpées en **paquets**. Chaque paquet contient l'adresse IP de départ, l'adresse IP d'arrivée et un morceau des données. Les **routeurs** lisent l'adresse d'arrivée et envoient le paquet vers le routeur suivant le plus adapté.

</div>

## Les protocoles TCP et IP

Un **protocole** est un ensemble de règles que tout le monde respecte pour se comprendre.

- **IP** s'occupe de l'adressage et de l'acheminement des paquets.
- **TCP** numérote les paquets, vérifie qu'ils sont tous arrivés, redemande ceux qui manquent et les remet dans l'ordre.

## Le DNS : l'annuaire

Personne ne retient `142.250.75.238`. On tape plutôt un nom de domaine comme `wikipedia.org`. Le **DNS** (système de noms de domaine) est l'annuaire qui traduit le nom en adresse IP.

## Le pair à pair

Dans un réseau **pair à pair**, chaque machine est à la fois cliente et serveur : elle télécharge et partage en même temps. C'est le principe de certains logiciels de partage de fichiers.

## Les pièges

- Internet n'est pas le Web : le Web est un service d'Internet.
- Deux paquets d'un même fichier peuvent prendre des chemins différents.
- Le DNS ne transporte pas les données, il donne seulement l'adresse.
