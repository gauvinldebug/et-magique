---
titre: "Les réseaux informatiques"
court: "Réseaux informatiques"
description: "Réseau local, commutateur, routeur et box, adresse IP et adresse MAC, client et serveur, câble, Wi-Fi et fibre, débit, expliqués avec le réseau d'un collège comme une ville avec ses rues et sa poste. Exercices corrigés. Technologie de 3e."
ordre: 1
publie: 2026-11-28T15:10:00
video:
  youtube: ""
piege: "**Le commutateur relie les machines d'un même réseau, le routeur relie des réseaux différents.** Ta box fait les deux : elle relie tes appareils entre eux, et relie ta maison à Internet."
pdf:
  cours: /pdf/technologie/3e/reseaux-informatiques-cours.pdf
  fiche: /pdf/technologie/3e/reseaux-informatiques-fiche.pdf
  exercices: /pdf/technologie/3e/reseaux-informatiques-exercices.pdf
suivant: objets-connectes
---

## Le problème

Au collège, tu enregistres un fichier sur le serveur et tu l'ouvres depuis une autre salle. Chez toi, tous les appareils partagent la même connexion Internet. Comment les machines se parlent-elles ?

## L'idée : la ville et la poste

Imagine un quartier. Chaque maison a une adresse. Les rues du quartier relient les maisons entre elles : c'est le **réseau local**. Pour envoyer une lettre dans une autre ville, il faut passer par la **poste**, qui connaît les routes vers les autres villes : c'est le **routeur**.

## Le réseau local

<div class="encadre">

Un **réseau local** relie des machines proches (une maison, un collège). Les câbles arrivent sur un **commutateur** (switch), qui transmet chaque message uniquement à la machine destinataire.

</div>

## Les adresses

- L'**adresse IP** identifie une machine dans un réseau, par exemple `192.168.1.25`. Elle peut changer selon le réseau.
- L'**adresse MAC** est gravée dans la carte réseau, par exemple `3C:5A:B4:12:9F:01`. Elle est unique et ne change pas.

## Le routeur

<div class="encadre">

Un **routeur** relie des réseaux différents et choisit le chemin des données. La **box** Internet contient un routeur, un commutateur et une borne Wi-Fi.

</div>

## Client et serveur

Un **serveur** est une machine qui fournit un service (fichiers, pages web, impression). Un **client** est une machine qui le demande. Au collège, ton poste est client, le serveur de fichiers est serveur.

## Les supports et le débit

- Câble en cuivre (Ethernet), fibre optique (lumière), ondes radio (Wi-Fi, 4G, 5G).
- Le **débit** est la quantité de données transmises par seconde, en bits par seconde (Mbit/s, Gbit/s). Attention : 1 octet = 8 bits.

## Les pièges

- Commutateur : dans un réseau ; routeur : entre réseaux.
- Débit en bits par seconde, taille d'un fichier en octets : diviser par 8.
- L'adresse MAC ne change pas, l'adresse IP oui.
