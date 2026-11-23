---
titre: Condensateur et circuit RC
---

<div class="encadre">

**L'image.** Un château d'eau ($E$) remplit un réservoir ($C$) par un tuyau étroit ($R$). Le débit ($i$) diminue à mesure que le niveau ($u_C$) monte.

</div>

## Définitions

- $i = \dfrac{\mathrm{d}q}{\mathrm{d}t}$, $\ q = C\,u_C$ (F), $\ i = C\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t}$ (convention récepteur).

## Charge et décharge

<div class="etape o">

Charge : $RC\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = E$, $\ u_C = E(1 - \mathrm{e}^{-t/\tau})$. Décharge : $u_C = E\,\mathrm{e}^{-t/\tau}$. $\ \tau = RC$.

</div>

| Date | Charge | Décharge |
|---|---|---|
| $\tau$ | $0{,}63\,E$ | $0{,}37\,E$ |
| $5\tau$ | $0{,}99\,E$ | $0{,}007\,E$ |

Lecture de $\tau$ : 63 % de $E$, ou tangente à l'origine. Capteur capacitif : $C$ varie, donc $\tau$ varie.

## Les pièges

- <span class="p">À $\tau$, chargé à 63 %</span>, pas 100 %.
- $\tau$ en secondes : $\mathrm{k\Omega}$ et $\mu\mathrm{F}$ à convertir.
- $u_C$ continue, $i$ peut sauter.
