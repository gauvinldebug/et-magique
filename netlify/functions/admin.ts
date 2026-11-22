// API de l'espace admin (/admin). Protégée par ADMIN_PASSWORD.
//   POST  /api/admin/connexion   { motDePasse } -> { jeton }
//   GET   /api/admin/demandes
//   PATCH /api/admin/demandes    { id, statut?, titrePublic?, notePublique? }
//   DELETE /api/admin/demandes?id=…
//   GET   /api/admin/inscriptions        (résumé)   ?format=csv (export)
import type { Config, Context } from '@netlify/functions';
import {
  store, json, erreur, empreinte, limiter, nettoyer, estAdmin, creerJeton, motDePasseOk,
  toutesLesDemandes, cleDemande, reconstruireTableau, type Demande, type Statut,
} from '../lib/outils';

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
    return json({ ok: true, total: items.length, moins15: items.filter((i) => i.age === 'moins15').length, parNiveau });
  }

  return erreur('Route inconnue', 404);
};

export const config: Config = { path: ['/api/admin/connexion', '/api/admin/demandes', '/api/admin/inscriptions'] };
