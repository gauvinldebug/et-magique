// POST /api/inscription : inscription au planning de révision par e-mail.
// Moins de 15 ans : c'est un parent qui s'inscrit avec son adresse et confirme (RGPD, art. 8 ; loi française : 15 ans).
// Double confirmation par e-mail via Brevo dès que BREVO_API_KEY est configurée.
import type { Config, Context } from '@netlify/functions';
import { createHash } from 'node:crypto';
import { store, json, erreur, empreinte, limiter, nettoyer, emailValide } from '../lib/outils';

const NIVEAUX = ['terminale', 'premiere', '3e', 'autre'];

export default async (req: Request, ctx: Context) => {
  if (req.method !== 'POST') return erreur('Méthode non autorisée', 405);
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return erreur('Requête illisible'); }
  if (nettoyer(b.site, 200)) return json({ ok: true });
  if (!(await limiter(`ins/${empreinte(req, ctx)}`, 5, 60))) return erreur('Trop de tentatives. Réessaie dans une heure.', 429);

  const email = nettoyer(b.email, 200).toLowerCase();
  if (!emailValide(email)) return erreur("L'e-mail n'a pas l'air valide.");
  const age = b.age === 'moins15' ? 'moins15' : b.age === '15plus' ? '15plus' : '';
  if (!age) return erreur('Indique si tu as 15 ans ou plus.');
  if (b.accord !== true) return erreur(age === 'moins15' ? "Il faut l'accord du parent." : 'Coche la case pour accepter de recevoir les e-mails.');
  const niveau = NIVEAUX.includes(String(b.niveau)) ? String(b.niveau) : 'autre';
  const prenom = nettoyer(b.prenom, 40);

  const cle = createHash('sha256').update(email).digest('hex').slice(0, 32);
  await store('inscriptions').setJSON(cle, {
    email, prenom, niveau, age, date: new Date().toISOString(), statut: 'a-confirmer',
  });

  // Brevo : e-mail de double confirmation (le contact n'est ajouté à la liste qu'après le clic).
  const key = process.env.BREVO_API_KEY;
  if (key && process.env.BREVO_LIST_ID && process.env.BREVO_DOI_TEMPLATE_ID) {
    const r = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        email,
        attributes: { PRENOM: prenom, NIVEAU: niveau, MOINS_15: age === 'moins15' },
        includeListIds: [Number(process.env.BREVO_LIST_ID)],
        templateId: Number(process.env.BREVO_DOI_TEMPLATE_ID),
        redirectionUrl: `${new URL(req.url).origin}/maths/planning-bac/merci/`,
      }),
    });
    if (!r.ok && r.status !== 204) {
      console.error('Brevo', r.status, await r.text());
      return erreur("L'inscription n'a pas marché, réessaie plus tard.", 502);
    }
  }
  return json({ ok: true });
};

export const config: Config = { path: '/api/inscription' };
