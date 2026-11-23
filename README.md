# Et Magique · le site

Le site des chaînes YouTube « … et Magique », en commençant par **Maths et Magique** : `etmagique.fr/maths/…`.
Gratuit, sans compte, sans publicité, sans cookie de suivi.

## Ce qu'il y a dedans

| Page | Adresse |
|---|---|
| Accueil maths | `/maths/` |
| Un niveau | `/maths/terminale/` (6e, 5e, 4e, 3e, seconde, premiere, terminale) |
| Un chapitre, 4 onglets | `/maths/terminale/suites-et-recurrence/` + `cours/`, `exercices/`, `qcm/` |
| Fiche à imprimer | `/maths/terminale/suites-et-recurrence/fiche/` |
| Fiches, annales, planning bac, recherche | `/maths/fiches/`, `/maths/annales/`, `/maths/planning-bac/`, `/maths/recherche/` |
| Demandes (formulaire + tableau « moi aussi ») | `/demandes/` |
| Espace admin (mot de passe) | `/admin/` |
| Liens courts YouTube / QR code | `/r/terminale/suites-et-recurrence`, `/qr/terminale/suites-et-recurrence` |

## Technique

- **Astro 5**, site statique. Le contenu est en Markdown et YAML dans `src/content/` (voir [CONTRIBUER.md](CONTRIBUER.md)).
- Formules en **KaTeX**, avec le code couleur des vidéos (`\cbleu`, `\corange`, `\cvert`, `\crouge`, `\un`, `\unn`…).
- Recherche **Pagefind** (index construit au build, aucun service externe).
- **Netlify** : hébergement, fonctions (`netlify/functions/`) et stockage **Netlify Blobs** pour les demandes, les votes et les inscriptions.
- Stats **Umami** (sans cookie, donc sans bandeau). E‑mails **Brevo** (double confirmation), branché dès que les clés sont là.
- Vidéos YouTube chargées seulement au clic, depuis `youtube-nocookie.com`.

```sh
npm install
npm run dev        # http://localhost:4321/maths/
npm run build      # site dans dist/ + index de recherche
npm run pdf        # régénère les PDF (cours, fiche, exercices) depuis dist/, puis relancer npm run build
```

## Mise en ligne sur Cloudflare Pages (hébergeur principal)

1. dash.cloudflare.com → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* → `et-magique`. Preset Astro, build `npm run build`, dossier `dist`, variable `NODE_VERSION=22`.
2. *Settings → Runtime → Compatibility flags* : `nodejs_compat` (production et preview).
3. *Storage & Databases → KV* : créer un espace (par ex. `et-magique-donnees`), puis *Settings → Bindings → KV namespace* : nom de variable `DONNEES`.
4. *Settings → Variables and Secrets* : les variables de `.env.example` (clés en « Secret »), dont `SITE_URL=https://etmagique.fr`.
5. *Custom domains* : `etmagique.fr` et `www.etmagique.fr` (redirection www → racine : *Rules → Redirect Rules*, modèle « WWW to root »).
6. Données de l'ancien site : se connecter à `/admin` sur la nouvelle adresse, onglet Inscrits, bouton « Récupérer les données de l'ancien site » (même `ADMIN_SECRET` des deux côtés).

Les fonctions de l'API restent écrites dans `netlify/functions/` ; `functions/api/` (Cloudflare) les appelle via `cloudflare/adaptateur.ts`, et Cloudflare KV remplace Netlify Blobs. Les liens courts `/r/` et `/qr/` et les en-têtes sont dans `public/_redirects` et `public/_headers`. Chaque fusion dans `main` est mise en ligne (500 constructions gratuites par mois).

## Ancien hébergement : Netlify (secours pendant la transition)

1. Créer un compte sur netlify.com (gratuit), « Add new project » → « Import from GitHub » → choisir `et-magique`. Netlify lit `netlify.toml`, rien à régler.
2. Dans *Project configuration → Environment variables*, ajouter `ADMIN_PASSWORD` et `ADMIN_SECRET` (voir `.env.example`).
3. *Domain management* : ajouter `etmagique.fr` (domaine principal), puis `mathsetmagique.fr` en alias. Les redirections sont déjà dans `netlify.toml`.
4. Stats : créer le site sur cloud.umami.is, puis ajouter `PUBLIC_UMAMI_ID` et `PUBLIC_UMAMI_SHARE_URL`, et redéployer.
5. Plus tard, e‑mails : `BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_DOI_TEMPLATE_ID`.
