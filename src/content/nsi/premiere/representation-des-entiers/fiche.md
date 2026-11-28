---
titre: "Représenter les entiers : binaire et hexadécimal"
---

<div class="encadre">

**L'image.** Un compteur kilométrique dont chaque roue n'a que 0 et 1.

</div>

## L'essentiel

<div class="etape o">

Base 2 : poids 1, 2, 4, 8, 16… Base 10 → base 2 : divisions par 2, restes lus de bas en haut. Base 16 : paquets de 4 bits, chiffres 0-9 puis A-F. Sur $n$ bits : $2^n$ valeurs, de 0 à $2^n - 1$.

</div>

Complément à deux sur $n$ bits : inverser les bits de $x$ et ajouter 1 pour obtenir $-x$. Plage : $-2^{n-1}$ à $2^{n-1} - 1$.

## Les pièges

- <span class="p">Sur 8 bits, le maximum est 255.</span>
- Restes lus de bas en haut.
