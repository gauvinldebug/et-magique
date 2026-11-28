---
titre: "Les arbres binaires"
---

<div class="encadre">

**L'image.** Un arbre généalogique à l'envers : un ancêtre, au plus deux enfants chacun.

</div>

## L'essentiel

<div class="etape o">

Arbre binaire : vide, ou racine + sous-arbre gauche + sous-arbre droit. Feuille : deux sous-arbres vides. Taille = nombre de nœuds. Hauteur = nombre de nœuds du plus long chemin racine-feuille.

</div>

| Parcours | Ordre |
|---|---|
| préfixe | racine, G, D |
| infixe | G, racine, D |
| suffixe | G, D, racine |
| largeur | niveau par niveau (file) |

## Les pièges

- <span class="p">Convention de hauteur : lire l'énoncé.</span>
- Toujours traiter l'arbre vide.
