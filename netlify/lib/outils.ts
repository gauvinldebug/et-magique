// Outils partagés par les fonctions Netlify (API du site).
import { getStore } from '@netlify/blobs';
import { createHmac, createHash, timingSafeEqual } from 'node:crypto';

export const store = (nom: 'demandes' | 'inscriptions' | 'limites') => getStore({ name: nom, consistency: 'strong' });

export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export const erreur = (message: string, status = 400) => json({ ok: false, erreur: message }, status);

const secret = () => process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || 'a-changer';

/** Empreinte anonyme d'un visiteur (IP + secret, hachée) : on ne stocke jamais l'IP. */
export function empreinte(req: Request, ctx?: { ip?: string }) {
  const ip = ctx?.ip || req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for') || 'inconnu';
  return createHash('sha256').update(`${ip}|${secret()}`).digest('hex').slice(0, 24);
}

/** Limite simple : `max` actions par fenêtre de `fenetreMin` minutes pour une même empreinte. */
export async function limiter(cle: string, max: number, fenetreMin: number) {
  const s = store('limites');
  const tranche = Math.floor(Date.now() / (fenetreMin * 60_000));
  const k = `${cle}/${tranche}`;
  const n = Number((await s.get(k)) ?? 0);
  if (n >= max) return false;
  await s.set(k, String(n + 1));
  return true;
}

export const nettoyer = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '';

export const emailValide = (e: string) => /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,}$/i.test(e);

/* ---------- Jeton admin (signé, valable 12 h) ---------- */
const signer = (s: string) => createHmac('sha256', secret()).update(s).digest('base64url');

export function creerJeton() {
  const exp = String(Date.now() + 12 * 3600_000);
  return `${exp}.${signer(exp)}`;
}

export function estAdmin(req: Request) {
  const t = (req.headers.get('authorization') || '').replace(/^Bearer /, '');
  const [exp, sig] = t.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const a = Buffer.from(sig), b = Buffer.from(signer(exp));
  return a.length === b.length && timingSafeEqual(a, b);
}

export function motDePasseOk(essai: string) {
  const vrai = process.env.ADMIN_PASSWORD;
  if (!vrai) return false;
  const a = createHash('sha256').update(essai).digest(), b = createHash('sha256').update(vrai).digest();
  return timingSafeEqual(a, b);
}

/* ---------- Demandes ---------- */
export type Statut = 'nouvelle' | 'prevu' | 'en-cours' | 'fait' | 'refusee';
export type Demande = {
  id: number;
  type: 'chapitre' | 'erreur' | 'question' | 'autre';
  niveau: string;
  message: string;
  page?: string;
  email?: string;
  date: string;
  statut: Statut;
  titrePublic?: string; // ce qui s'affiche sur le tableau public (écrit par l'admin)
  notePublique?: string; // « en décembre », « vidéo en ligne »…
  votes: number;
};

export const cleDemande = (id: number) => `d/${String(id).padStart(6, '0')}`;

export async function toutesLesDemandes() {
  const s = store('demandes');
  const { blobs } = await s.list({ prefix: 'd/' });
  const items = await Promise.all(blobs.map((b) => s.get(b.key, { type: 'json' }) as Promise<Demande | null>));
  return items.filter(Boolean) as Demande[];
}

/** Le tableau public : seulement les demandes de chapitre relues par l'admin, sans e-mail ni texte brut. */
export async function reconstruireTableau() {
  const publiques = (await toutesLesDemandes())
    .filter((d) => d.type === 'chapitre' && d.titrePublic && ['prevu', 'en-cours', 'fait'].includes(d.statut))
    .sort((a, b) => b.votes - a.votes)
    .map((d) => ({ id: d.id, titre: d.titrePublic, statut: d.statut, note: d.notePublique ?? '', votes: d.votes }));
  await store('demandes').setJSON('tableau', publiques);
  return publiques;
}
