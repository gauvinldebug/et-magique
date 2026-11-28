---
titre: "Sécuriser les communications"
---

<div class="encadre">

**L'image.** Un cadenas ouvert envoyé par la poste : tout le monde peut le fermer, seul son propriétaire peut l'ouvrir.

</div>

## L'essentiel

| Chiffrement | Clés | Exemples | Atout |
|---|---|---|---|
| symétrique | une clé partagée | César, XOR, AES | rapide |
| asymétrique | publique + privée | RSA | pas de secret à échanger |

<div class="etape o">

HTTPS : certificat avec la clé publique du serveur, échange d'une clé symétrique chiffrée en asymétrique, puis tout en AES.

</div>

## Les pièges

- <span class="p">On chiffre avec la clé publique du destinataire.</span>
- Le certificat protège de l'homme du milieu.
