// GET /api/tableau : le tableau public des chapitres demandés.
// POST /api/tableau { id } : « moi aussi » (une fois par visiteur et par demande).
import type { Config, Context } from '@netlify/functions';
import { store, json, erreur, empreinte, limiter, cleDemande, reconstruireTableau, type Demande } from '../lib/outils';

export default async (req: Request, ctx: Context) => {
  const s = store('demandes');
  if (req.method === 'GET') {
    const t = (await s.get('tableau', { type: 'json' })) ?? (await reconstruireTableau());
    return new Response(JSON.stringify(t), { headers: { 'content-type': 'application/json', 'cache-control': 'public, max-age=60' } });
  }
  if (req.method !== 'POST') return erreur('Méthode non autorisée', 405);
  let id = 0;
  try { id = Number((await req.json()).id); } catch { return erreur('Requête illisible'); }
  const d = (await s.get(cleDemande(id), { type: 'json' })) as Demande | null;
  if (!d || d.type !== 'chapitre' || !d.titrePublic) return erreur('Demande introuvable', 404);
  const qui = empreinte(req, ctx);
  if (!(await limiter(`vote/${qui}`, 30, 60))) return erreur('Trop de votes, réessaie plus tard.', 429);
  const k = `v/${id}/${qui}`;
  if (await s.get(k)) return json({ ok: true, votes: d.votes, deja: true });
  await s.set(k, '1');
  d.votes += 1;
  await s.setJSON(cleDemande(id), d);
  await reconstruireTableau();
  return json({ ok: true, votes: d.votes });
};

export const config: Config = { path: '/api/tableau' };
