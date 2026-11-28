---
titre: "Les objets connectés"
court: "Objets connectés"
description: "Objet connecté, réseau, application et serveur, protocoles sans fil (Wi-Fi, Bluetooth, réseaux longue portée), échange de données, programmer un objet communicant, sécurité et données personnelles, expliqués avec une boîte aux lettres qui prévient quand le facteur passe. Exercices corrigés. Technologie de 3e."
ordre: 2
publie: 2026-11-28T15:11:00
video:
  youtube: ""
piege: "**Le Bluetooth n'est pas fait pour les longues distances.** Il porte à une dizaine de mètres. Pour un capteur dans un champ ou une ville, on utilise un réseau longue portée ou le réseau mobile."
pdf:
  cours: /pdf/technologie/3e/objets-connectes-cours.pdf
  fiche: /pdf/technologie/3e/objets-connectes-fiche.pdf
  exercices: /pdf/technologie/3e/objets-connectes-exercices.pdf
suivant: cycle-de-vie-des-objets
---

## Le problème

Ta montre envoie tes pas à ton téléphone, un thermostat se règle depuis le bus, une poubelle publique prévient quand elle est pleine. Comment ces objets communiquent-ils, et que deviennent leurs données ?

## L'idée : la boîte aux lettres qui prévient

Imagine une boîte aux lettres équipée d'un capteur. Quand le facteur ouvre la trappe, elle envoie un message à ton téléphone : « Courrier arrivé ». Elle sent (capteur), décide (programme), et **communique** (réseau). C'est un objet connecté.

## Un objet connecté

<div class="encadre">

Un **objet connecté** comprend des capteurs ou des actionneurs, un microcontrôleur, et un **module de communication** qui échange des données avec d'autres objets, un téléphone ou un **serveur** sur Internet.

</div>

## Le chemin des données

1. L'objet mesure et envoie sa donnée.
2. Elle passe par un réseau (Wi-Fi, Bluetooth, réseau mobile).
3. Elle est stockée et traitée sur un serveur (le cloud).
4. Une application affiche le résultat et permet d'envoyer des ordres à l'objet.

## Les moyens de communication

| Technologie | Portée | Usage |
|---|---|---|
| Bluetooth | ~10 m | montre, écouteurs |
| Wi-Fi | ~50 m | maison, enceinte |
| réseau mobile (4G, 5G) | kilomètres | voiture, téléphone |
| réseaux longue portée basse consommation | kilomètres | capteurs en ville ou aux champs |

Plus on veut de portée et de débit, plus on consomme d'énergie.

## Programmer un objet communicant

Avec une carte programmable, on peut envoyer un message radio quand un bouton est appuyé, et allumer une LED quand un message est reçu. On utilise des **événements** : « quand un message est reçu, faire… ».

## Sécurité et vie privée

<div class="encadre">

Les objets connectés collectent des données personnelles : présence à la maison, santé, habitudes. Il faut changer les mots de passe d'origine, faire les mises à jour, lire ce que l'application fait des données. En Europe, le **RGPD** protège les données personnelles.

</div>

## Les pièges

- Bluetooth : courte portée.
- L'objet ne stocke souvent rien : les données partent sur un serveur.
- Connecté ne veut pas dire sécurisé.
