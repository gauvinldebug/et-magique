---
titre: "Le Web : client, serveur et HTTP"
---

<div class="encadre">

**L'image.** Le client commande, le serveur rapporte le plat. Leur langue : HTTP.

</div>

## L'essentiel

<div class="etape o">

Requête (méthode, ressource, en-têtes) → réponse (code, en-têtes, contenu). GET : données dans l'URL. POST : données dans le corps. HTTPS : HTTP chiffré.

</div>

| Code | Sens |
|---|---|
| 200 | OK |
| 404 | introuvable |
| 500 | erreur serveur |

Côté client : HTML, CSS, JavaScript. Côté serveur : PHP, Python, base de données.

## Les pièges

- <span class="p">Mot de passe : POST et HTTPS, jamais GET.</span>
- POST seul ne chiffre rien.
