// API de l'espace admin (/admin). Protégée par ADMIN_PASSWORD.
//   POST  /api/admin/connexion   { motDePasse } -> { jeton }
//   GET   /api/admin/demandes
//   PATCH /api/admin/demandes    { id, statut?, titrePublic?, notePublique? }
//   DELETE /api/admin/demandes?id=…
//   GET   /api/admin/inscriptions        (résumé)   ?format=csv (export)
//   GET   /api/admin/emails              liste des e-mails prêts (annonces, plannings) et combien sont partis
//   POST  /api/admin/emails  { id, test } test = envoi à BREVO_EXPEDITEUR seulement ; sinon envoi aux inscrits
import type { Config, Context } from '@netlify/functions';
import {
  store, json, erreur, empreinte, limiter, nettoyer, estAdmin, creerJeton, motDePasseOk,
  toutesLesDemandes, cleDemande, reconstruireTableau, type Demande, type Statut,
} from '../lib/outils';
import { envoyer, lienDesinscription, emailConfirmation } from '../lib/emails';
import { NEWSLETTERS, newsletter, bienvenue, type Inscrit, type Email } from '../lib/newsletters';

const STATUTS: Statut[] = ['nouvelle', 'prevu', 'en-cours', 'fait', 'refusee'];

export default async (req: Request, ctx: Context) => {
  const url = new URL(req.url);
  const route = url.pathname.replace(/^\/api\/admin\/?/, '');

  if (route === 'connexion' && req.method === 'POST') {
    if (!(await limiter(`login/${empreinte(req, ctx)}`, 10, 60))) return erreur('Trop de tentatives.', 429);
    let mdp = '';
    try { mdp = String((await req.json()).motDePasse ?? ''); } catch { /* vide */ }
    if (!process.env.ADMIN_PASSWORD) return erreur("ADMIN_PASSWORD n'est pas configuré sur Netlify.", 500);
    if (!motDePasseOk(mdp)) return erreur('Mot de passe incorrect.', 401);
    return json({ ok: true, jeton: creerJeton() });
  }

  if (!estAdmin(req)) return erreur('Non connecté.', 401);

  if (route === 'demandes') {
    const s = store('demandes');
    if (req.method === 'GET') {
      const items = (await toutesLesDemandes()).sort((a, b) => b.id - a.id);
      return json({ ok: true, demandes: items });
    }
    if (req.method === 'PATCH') {
      const b = await req.json();
      const d = (await s.get(cleDemande(Number(b.id)), { type: 'json' })) as Demande | null;
      if (!d) return erreur('Introuvable', 404);
      if (b.statut && STATUTS.includes(b.statut)) d.statut = b.statut;
      if (typeof b.titrePublic === 'string') d.titrePublic = nettoyer(b.titrePublic, 80) || undefined;
      if (typeof b.notePublique === 'string') d.notePublique = nettoyer(b.notePublique, 60) || undefined;
      await s.setJSON(cleDemande(d.id), d);
      await reconstruireTableau();
      return json({ ok: true, demande: d });
    }
    if (req.method === 'DELETE') {
      await s.delete(cleDemande(Number(url.searchParams.get('id'))));
      await reconstruireTableau();
      return json({ ok: true });
    }
  }

  if (route === 'inscriptions' && req.method === 'GET') {
    const s = store('inscriptions');
    const { blobs } = await s.list();
    const items = (await Promise.all(blobs.map((b) => s.get(b.key, { type: 'json' })))).filter(Boolean) as Record<string, string>[];
    if (url.searchParams.get('format') === 'csv') {
      const lignes = [['email', 'prenom', 'niveau', 'age', 'date', 'statut'], ...items.map((i) => [i.email, i.prenom, i.niveau, i.age, i.date, i.statut])];
      const csv = lignes.map((l) => l.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';')).join('\n');
      return new Response('﻿' + csv, { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="inscriptions.csv"' } });
    }
    const parNiveau: Record<string, number> = {};
    items.forEach((i) => { parNiveau[i.niveau] = (parNiveau[i.niveau] ?? 0) + 1; });
    const brevo = await store('limites').get('brevo/derniere-erreur', { type: 'json' });
    return json({ ok: true, total: items.length, confirmes: items.filter((i) => i.statut === 'confirme').length, desinscrits: items.filter((i) => i.statut === 'desinscrit').length, moins15: items.filter((i) => i.age === 'moins15').length, parNiveau, brevo });
  }

  if (route === 'emails') {
    const origine = url.origin;
    const inscrits = await confirmes();
    const lim = store('limites');
    if (req.method === 'GET') {
      const items = await Promise.all(NEWSLETTERS.map(async (n) => {
        const { blobs } = await lim.list({ prefix: `envois/${n.id}/` });
        const cible = inscrits.filter((i) => n.niveaux.includes(i.niveau)).length;
        return { id: n.id, type: n.type, nom: n.nom, niveaux: n.niveaux, pret: n.pret, attente: n.attente, envoyes: blobs.length, cible };
      }));
      return json({ ok: true, emails: [...TESTS.map((t) => ({ id: t.id, type: 'test', nom: t.nom, niveaux: [], pret: true, envoyes: 0, cible: 0 })), ...items] });
    }
    if (req.method === 'POST') {
      const b = await req.json();
      const expediteur = process.env.BREVO_EXPEDITEUR;
      if (!process.env.BREVO_API_KEY || !expediteur) return erreur('Brevo non configuré.', 500);
      const t = TESTS.find((x) => x.id === b.id);
      const n = newsletter(String(b.id));
      if (!t && !n) return erreur('E-mail inconnu.', 404);

      if (b.test || t) {
        const faux: Inscrit = { cle: 'test', email: expediteur, prenom: 'Louison', niveau: t?.niveau ?? n!.niveaux[0], age: t?.age ?? '15plus' };
        const m: Email = t ? t.rendu(origine, faux) : n!.rendu(origine, faux);
        const r = await envoyer({ email: expediteur, sujet: `[Test] ${m.sujet}`, html: m.html, tag: 'test' });
        return r.ok ? json({ ok: true, test: expediteur }) : erreur(`${r.detail} ${r.message}`, 502);
      }

      if (!n!.pret) return erreur(n!.attente ?? "Cet e-mail n'est pas prêt.");
      // Par paquets de 40 (la page relance jusqu'au bout) ; Brevo gratuit : 300 e-mails par jour.
      const deja = new Set((await lim.list({ prefix: `envois/${n!.id}/` })).blobs.map((x) => x.key.split('/').pop()));
      const reste = inscrits.filter((i) => n!.niveaux.includes(i.niveau) && !deja.has(i.cle));
      let envoyes = 0;
      for (const i of reste.slice(0, 40)) {
        const m = n!.rendu(origine, i);
        const r = await envoyer({ email: i.email, sujet: m.sujet, html: m.html, tag: n!.id, desinscription: lienDesinscription(origine, i.cle) });
        if (!r.ok) {
          await lim.setJSON('brevo/derniere-erreur', { date: new Date().toISOString(), detail: r.detail, message: r.message });
          return json({ ok: false, erreur: `Arrêt après ${envoyes} envois : ${r.detail}. Relance demain si c'est la limite de 300 par jour.`, envoyes, reste: reste.length - envoyes });
        }
        await lim.set(`envois/${n!.id}/${i.cle}`, new Date().toISOString());
        envoyes++;
      }
      return json({ ok: true, envoyes, reste: reste.length - envoyes });
    }
  }

  return erreur('Route inconnue', 404);
};

// Inscrits qui ont confirmé et ne se sont pas désinscrits.
async function confirmes(): Promise<Inscrit[]> {
  const s = store('inscriptions');
  const { blobs } = await s.list();
  const items = await Promise.all(blobs.map(async (b) => ({ ...((await s.get(b.key, { type: 'json' })) as Record<string, string>), cle: b.key }) as Record<string, string>));
  return items.filter((i) => i.statut === 'confirme').map((i) => ({ cle: i.cle, email: i.email, prenom: i.prenom ?? '', niveau: i.niveau, age: i.age }));
}

// Aperçus des e-mails automatiques (confirmation, bienvenue), envoyés seulement à l'adresse d'envoi.
const TESTS: { id: string; nom: string; niveau: string; age: string; rendu: (o: string, i: Inscrit) => Email }[] = [
  { id: 'test-confirmation', nom: 'Automatique : confirmation de l\'adresse', niveau: 'terminale', age: '15plus', rendu: (o, i) => emailConfirmation(o, { cle: i.cle, prenom: i.prenom, moins15: false }) },
  { id: 'test-bienvenue-terminale', nom: 'Automatique : bienvenue (terminale)', niveau: 'terminale', age: '15plus', rendu: bienvenue },
  { id: 'test-bienvenue-premiere', nom: 'Automatique : bienvenue (niveau sans chapitre en ligne)', niveau: 'premiere', age: '15plus', rendu: bienvenue },
  { id: 'test-bienvenue-parent', nom: 'Automatique : bienvenue (parent, moins de 15 ans)', niveau: '3e', age: 'moins15', rendu: bienvenue },
];

export const config: Config = { path: ['/api/admin/connexion', '/api/admin/demandes', '/api/admin/inscriptions', '/api/admin/emails'] };
