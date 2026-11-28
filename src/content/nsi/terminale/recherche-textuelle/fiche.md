---
titre: "La recherche textuelle"
---

<div class="encadre">

**L'image.** Un pochoir qui glisse : si la lettre sous son bout n'existe pas dans le motif, on saute toute sa longueur.

</div>

## L'essentiel

<div class="etape o">

Naïf : toutes les positions, environ $n \times m$ comparaisons. Boyer-Moore-Horspool : comparaison de droite à gauche, décalage selon la lettre du texte sous la dernière case du motif.

</div>

Table de décalage : distance de la dernière occurrence de la lettre à la fin du motif (dernière case exclue). Lettre absente : $m$.

## Les pièges

- <span class="p">Motif comparé de droite à gauche.</span>
- Lettre absente : décalage $m$.
