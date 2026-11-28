---
titre: "Le routage"
---

<div class="encadre">

**L'image.** Des panneaux indicateurs : à chaque carrefour, seulement la direction suivante.

</div>

## L'essentiel

<div class="etape o">

Table de routage : destination, passerelle (prochain routeur), interface, métrique.

</div>

| Protocole | Métrique | Principe |
|---|---|---|
| RIP | nombre de sauts | échange des tables entre voisins, 16 = injoignable |
| OSPF | coût = $10^8$ / débit | carte complète, Dijkstra |

## Les pièges

- <span class="p">RIP et OSPF peuvent choisir des routes différentes.</span>
- Plus le débit est grand, plus le coût OSPF est petit.
