---
titre: "Les paradigmes de programmation"
---

<div class="encadre">

**L'image.** Trois recettes : une liste d'ordres (impératif), un enchaînement de transformations (fonctionnel), des ustensiles qui ont leurs méthodes (objet).

</div>

## L'essentiel

| Paradigme | Principe |
|---|---|
| impératif | instructions qui modifient l'état |
| fonctionnel | composition de fonctions pures, sans effet de bord |
| objet | objets avec attributs et méthodes |

<div class="etape o">

Fonction pure : même entrée, même sortie, rien modifié à l'extérieur. Fonctions passées en paramètre : `map`, `filter`.

</div>

## Les pièges

- <span class="p">Modifier une liste reçue = effet de bord.</span>
- `map` et `filter` ne renvoient pas des listes.
