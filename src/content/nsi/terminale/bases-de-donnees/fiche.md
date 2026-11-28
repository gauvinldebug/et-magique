---
titre: "Les bases de données relationnelles"
---

<div class="encadre">

**L'image.** Les fichiers d'une bibliothèque : une fiche d'emprunt donne le numéro du lecteur, pas son adresse.

</div>

## L'essentiel

<div class="etape o">

Relation = table. Attribut = colonne (avec un domaine). N-uplet = ligne. Clé primaire : identifie chaque ligne de façon unique. Clé étrangère : renvoie à la clé primaire d'une autre table.

</div>

| Contrainte | Vérifie |
|---|---|
| domaine | le type des valeurs |
| relation | clé primaire unique |
| référence | clé étrangère existante |

## Les pièges

- <span class="p">Un nom n'est pas une clé primaire.</span>
- Ne pas recopier une information dans plusieurs tables.
