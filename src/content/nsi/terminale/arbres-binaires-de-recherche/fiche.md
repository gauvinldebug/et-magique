---
titre: "Les arbres binaires de recherche"
---

<div class="encadre">

**L'image.** Le jeu « plus grand ou plus petit » : à chaque nœud, on choisit un seul côté.

</div>

## L'essentiel

<div class="etape o">

ABR : à gauche tout est plus petit, à droite tout est plus grand. Recherche et insertion : au plus la hauteur comparaisons. Parcours infixe : valeurs triées.

</div>

| Arbre de $n$ nœuds | Hauteur | Recherche |
|---|---|---|
| équilibré | environ $\log_2 n$ | très rapide |
| filiforme | $n$ | aussi lente qu'une liste |

## Les pièges

- <span class="p">La propriété vaut pour tout le sous-arbre.</span>
- Valeurs insérées triées : arbre filiforme.
