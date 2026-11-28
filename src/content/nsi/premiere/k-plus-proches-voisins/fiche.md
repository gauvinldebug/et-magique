---
titre: "Les k plus proches voisins"
---

<div class="encadre">

**L'image.** Dis-moi qui sont tes voisins, je te dirai qui tu es.

</div>

## L'essentiel

<div class="etape o">

k-NN : distances à toutes les données connues, garder les k plus proches, vote majoritaire. Distance : $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

</div>

| k | Effet |
|---|---|
| 1 | sensible à une donnée isolée |
| trop grand | la classe la plus nombreuse gagne partout |
| impair | évite les égalités |

## Les pièges

- <span class="p">Le résultat dépend de k.</span>
- Mettre les caractéristiques à des échelles comparables.
