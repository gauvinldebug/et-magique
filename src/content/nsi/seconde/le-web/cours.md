---
titre: "Le Web"
court: "Le Web"
description: "Pages web, hypertexte, URL, HTML et CSS, navigateur et serveur, protocole HTTP et HTTPS, moteurs de recherche et cookies, expliqués avec une bibliothèque géante aux livres reliés par des fils. Exercices corrigés. SNT de seconde."
ordre: 2
publie: 2026-11-28T14:46:00
video:
  youtube: ""
piege: "**HTTPS ne veut pas dire que le site est honnête.** Le cadenas garantit seulement que les échanges sont chiffrés entre toi et le site. Un site malveillant peut très bien être en HTTPS."
pdf:
  cours: /pdf/nsi/seconde/le-web-cours.pdf
  fiche: /pdf/nsi/seconde/le-web-fiche.pdf
  exercices: /pdf/nsi/seconde/le-web-exercices.pdf
suivant: reseaux-sociaux
---

## Le problème

Tu cliques sur un lien et une page s'affiche, avec du texte, des images, des boutons. D'où vient cette page, et comment ton navigateur sait-il comment l'afficher ?

## L'idée : la bibliothèque aux fils

Imagine une bibliothèque immense où chaque livre est relié à d'autres par des fils. Tu tires sur un fil et tu arrives directement à la bonne page d'un autre livre. Le Web, c'est cette bibliothèque : les livres sont les pages, les fils sont les **liens hypertextes**.

## Un service d'Internet

<div class="encadre">

Le **Web** (World Wide Web) a été inventé en 1989 au CERN par Tim Berners-Lee. C'est un ensemble de pages reliées par des liens, consultables avec un **navigateur**. Il utilise Internet pour circuler.

</div>

## L'adresse d'une page : l'URL

Une **URL** indique où trouver une ressource. Dans `https://www.exemple.fr/sport/foot.html` :

- `https` est le protocole ;
- `www.exemple.fr` est le nom de domaine du serveur ;
- `/sport/foot.html` est le chemin du fichier sur le serveur.

## HTML et CSS

<div class="encadre">

**HTML** décrit le contenu et la structure de la page grâce à des balises : `<h1>` pour un titre, `<p>` pour un paragraphe, `<a href="…">` pour un lien. **CSS** décrit l'apparence : couleurs, tailles, positions.

</div>

```html
<h1>Mon club</h1>
<p>Entraînement le <b>mercredi</b>.</p>
<a href="https://www.exemple.fr">Le site</a>
```

## Client et serveur : HTTP

Ton navigateur est le **client**. Il envoie une **requête** au **serveur** qui héberge la page. Le serveur répond en envoyant le fichier HTML. Cet échange suit le protocole **HTTP**. En **HTTPS**, les échanges sont chiffrés : personne ne peut les lire en route.

## Les moteurs de recherche

Un moteur de recherche parcourt le Web avec des robots qui suivent les liens, range les pages dans un index, puis classe les résultats selon leur pertinence et leur popularité. Les liens qui pointent vers une page comptent dans ce classement.

## Les cookies

Un **cookie** est un petit fichier déposé par un site sur ton appareil. Il peut servir à garder ton panier ou ta connexion, mais aussi à te suivre pour la publicité. En Europe, le site doit te demander ton accord.

## Les pièges

- Le Web n'est pas Internet.
- HTML décrit le contenu, CSS l'apparence.
- Le cadenas HTTPS protège l'échange, pas l'honnêteté du site.
