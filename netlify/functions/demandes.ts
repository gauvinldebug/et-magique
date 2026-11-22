// POST /api/demandes : un élève envoie une demande (sans compte).
import type { Config, Context } from '@netlify/functions';
import { store, json, erreur, empreinte, limiter, nettoyer, emailValide, cleDemande, type Demande } from '../lib/outils';

const TYPES = ['chapitre', 'erreur', 'question', 'autre'] as const;

export default async (req: Request, ctx: Context) => {
  if (req.method !== 'POST') return erreur('Méthode non autorisée', 405);
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return erreur('Requête illisible'); }

  // Anti-spam : champ piège invisible, temps de remplissage, limite par visiteur.
  if (nettoyer(body.site, 200)) return json({ ok: true, id: 0 });
  const t0 = Number(body.t0);
  if (!t0 || Date.now() - t0 < 3000) return erreur('Un peu trop rapide : réessaie dans quelques secondes.');
  if (!(await limiter(`dem/${empreinte(req, ctx)}`, 5, 60))) return erreur('Tu as déjà envoyé plusieurs demandes. Réessaie dans une heure.', 429);

  const type = TYPES.includes(body.type as (typeof TYPES)[number]) ? (body.type as Demande['type']) : 'autre';
  const message = nettoyer(body.message, 1000);
  if (message.length < 5) return erreur('Écris ta demande en quelques mots.');
  const email = nettoyer(body.email, 200);
  if (email && !emailValide(email)) return erreur("L'e-mail n'a pas l'air valide.");

  const s = store('demandes');
  const n = Number((await s.get('compteur')) ?? 100) + 1;
  await s.set('compteur', String(n));
  const d: Demande = {
    id: n,
    type,
    niveau: nettoyer(body.niveau, 40),
    message,
    page: nettoyer(body.page, 300) || undefined,
    email: email || undefined,
    date: new Date().toISOString(),
    statut: 'nouvelle',
    votes: 1,
  };
  await s.setJSON(cleDemande(n), d);
  return json({ ok: true, id: n });
};

export const config: Config = { path: '/api/demandes' };
