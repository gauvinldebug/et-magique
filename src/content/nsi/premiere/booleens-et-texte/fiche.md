---
titre: "Booléens et encodage du texte"
---

<div class="encadre">

**L'image.** Un interrupteur (vrai ou faux) et un dictionnaire de codes (un numéro par caractère).

</div>

## L'essentiel

<div class="etape o">

`and` : vrai si les deux sont vrais. `or` : vrai si au moins un est vrai. `not` : inverse. XOR : exactement un vrai. Évaluation paresseuse en Python.

</div>

| Encodage | Taille | Contenu |
|---|---|---|
| ASCII | 7 bits | 128 caractères, sans accents |
| Latin-1 | 8 bits | accents d'Europe de l'Ouest |
| UTF-8 | 1 à 4 octets | tout Unicode |

## Les pièges

- <span class="p">« Ã© » : mauvais encodage à la lecture.</span>
- `and` avant `or` : mettre des parenthèses.
