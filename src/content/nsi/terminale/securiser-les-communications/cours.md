---
titre: "Sécuriser les communications"
court: "Sécurité des communications"
description: "Chiffrement symétrique (César, XOR, AES) et problème de l'échange de clé, chiffrement asymétrique avec clé publique et clé privée, principe de RSA, HTTPS et certificats, attaque de l'homme du milieu, expliqués avec un cadenas ouvert qu'on envoie par la poste. Exercices corrigés. Spécialité NSI de terminale."
ordre: 12
publie: 2026-11-28T13:12:00
video:
  youtube: ""
piege: "**En chiffrement asymétrique, on chiffre avec la clé publique du destinataire**, pas avec la sienne. Seule la clé privée du destinataire peut alors déchiffrer."
pdf:
  cours: /pdf/nsi/terminale/securiser-les-communications-cours.pdf
  fiche: /pdf/nsi/terminale/securiser-les-communications-fiche.pdf
  exercices: /pdf/nsi/terminale/securiser-les-communications-exercices.pdf
suivant: diviser-pour-regner
---

## Le problème

Quand tu tapes ton mot de passe sur un site, il traverse des dizaines de routeurs que n'importe qui peut écouter. Comment l'envoyer pour que seul le site puisse le lire, sans vous être jamais rencontrés pour convenir d'un secret ?

## L'idée : le cadenas ouvert par la poste

Le site t'envoie un cadenas **ouvert** dont il garde seul la clé. Tu mets ton message dans une boîte, tu fermes le cadenas, tu renvoies. N'importe qui peut voir passer le cadenas ouvert, ça ne sert à rien : une fois fermé, seul le site peut l'ouvrir. Le cadenas, c'est la clé publique ; la clé du cadenas, c'est la clé privée.

## Le chiffrement symétrique

<div class="encadre">

La **même clé** sert à chiffrer et à déchiffrer.

</div>

Le **chiffre de César** décale chaque lettre (clé 3 : A devient D). Le **XOR** combine chaque bit du message avec un bit de la clé ; appliquer deux fois le même XOR redonne le message. **AES** est l'algorithme symétrique actuel, très rapide et sûr.

<mark>Le problème : il faut d'abord se transmettre la clé en secret.</mark> Si on l'envoie en clair, un espion la récupère.

## Le chiffrement asymétrique

<div class="encadre">

Chacun a deux clés liées : une **clé publique**, donnée à tout le monde, et une **clé privée**, gardée secrète. Ce qui est chiffré avec la clé publique ne se déchiffre qu'avec la clé privée.

</div>

**RSA** repose sur le fait qu'il est facile de multiplier deux grands nombres premiers, mais extrêmement long de retrouver ces deux facteurs à partir du produit.

## HTTPS : les deux à la fois

L'asymétrique est sûr mais lent ; le symétrique est rapide. HTTPS combine les deux :

1. le serveur envoie sa clé publique, dans un **certificat** signé par une autorité de confiance ;
2. le navigateur choisit une clé symétrique, la chiffre avec la clé publique du serveur et l'envoie ;
3. toute la suite de l'échange est chiffrée en AES avec cette clé.

## L'homme du milieu

Un attaquant peut se placer entre toi et le site et t'envoyer **sa** clé publique en se faisant passer pour le site. Le certificat sert à l'empêcher : il prouve que la clé publique appartient bien au site.

## Les pièges

- Chiffrer avec sa propre clé publique : seul soi-même pourra déchiffrer.
- Le cadenas de HTTPS garantit que la connexion est chiffrée, pas que le site est honnête.
- César se casse en essayant les 25 décalages : ce n'est pas un chiffrement sûr.
