---
titre: "Les processus et l'ordonnancement"
---

<div class="encadre">

**L'image.** Un cuisinier seul qui jongle entre les plats : chacun avance, un seul est touché à la fois.

</div>

## L'essentiel

<div class="etape o">

Processus = programme en cours d'exécution (PID). États : élu, prêt, bloqué. L'ordonnanceur choisit le prochain élu. Tourniquet : un quantum chacun, à tour de rôle.

</div>

| Algorithme | Idée |
|---|---|
| premier arrivé | ordre d'arrivée |
| plus court d'abord | le moins long en premier |
| tourniquet | quantum de temps, chacun son tour |

Interblocage : chacun attend une ressource que l'autre détient.

## Les pièges

- <span class="p">Bloqué → prêt → élu, jamais bloqué → élu.</span>
- Programme ≠ processus.
