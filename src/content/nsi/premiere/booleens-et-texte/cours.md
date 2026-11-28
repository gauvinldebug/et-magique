---
titre: "Booléens et encodage du texte"
court: "Booléens et texte"
description: "Valeurs booléennes, opérateurs et, ou, non, tables de vérité, ou exclusif, expressions booléennes et évaluation paresseuse en Python, encodage des caractères en ASCII, ISO-8859-1 et UTF-8 (Unicode), problèmes d'accents mal affichés, expliqués avec un interrupteur et un dictionnaire de codes. Exercices corrigés. Spécialité NSI de première."
ordre: 3
publie: 2026-11-28T14:03:00
video:
  youtube: ""
piege: "**Un texte mal décodé affiche des caractères bizarres (« Ã© » au lieu de « é »).** Le fichier a été écrit en UTF-8 et lu comme du Latin-1, ou l'inverse : il faut le même encodage des deux côtés."
pdf:
  cours: /pdf/nsi/premiere/booleens-et-texte-cours.pdf
  fiche: /pdf/nsi/premiere/booleens-et-texte-fiche.pdf
  exercices: /pdf/nsi/premiere/booleens-et-texte-exercices.pdf
suivant: tableaux-et-tuples
---

## Le problème

Un ordinateur doit prendre des décisions (« si le mot de passe est bon et que le compte n'est pas bloqué ») et stocker du texte avec des accents, des emojis et des alphabets du monde entier, alors qu'il ne connaît que des 0 et des 1.

## L'idée : l'interrupteur et le dictionnaire de codes

Un booléen, c'est un interrupteur : allumé ou éteint, vrai ou faux. Du texte, c'est un message chiffré avec un dictionnaire de codes : chaque caractère a un numéro. Si l'expéditeur et le lecteur n'utilisent pas le même dictionnaire, le message est déformé.

## Les booléens

<div class="encadre">

Un **booléen** vaut `True` ou `False`. Trois opérateurs de base :

| a | b | a and b | a or b | not a |
|---|---|---|---|---|
| F | F | F | F | V |
| F | V | F | V | V |
| V | F | F | V | F |
| V | V | V | V | F |

</div>

Le **ou exclusif** (XOR) est vrai quand exactement un des deux est vrai.

En Python, `and` et `or` sont **paresseux** : dans `a and b`, si `a` est faux, `b` n'est même pas évalué. C'est utile pour écrire `i < len(t) and t[i] > 0` sans risquer de sortir du tableau.

## Encoder le texte

- **ASCII** (1963) : 128 caractères codés sur 7 bits, lettres anglaises sans accents. `A` = 65, `a` = 97, `0` = 48.
- **ISO-8859-1** (Latin-1) : 256 caractères sur 8 bits, avec les accents d'Europe de l'Ouest.
- **Unicode** attribue un numéro à chaque caractère de toutes les écritures (plus de 150 000). **UTF-8** les encode sur 1 à 4 octets ; les caractères ASCII gardent leur code sur 1 octet.

<mark>UTF-8 est aujourd'hui l'encodage de presque tout le web.</mark>

En Python : `ord("A")` donne 65, `chr(233)` donne `"é"`, et `"é".encode("utf-8")` donne deux octets.

## Les pièges

- `a or b and c` : `and` est prioritaire sur `or`. Mettre des parenthèses.
- Lire un fichier UTF-8 en Latin-1 : « é » devient « Ã© ».
- Un caractère n'occupe pas toujours un octet en UTF-8.
