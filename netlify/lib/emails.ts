// Envoi des e-mails par Brevo (gratuit jusqu'à 300 e-mails par jour).
// Réglages Netlify : BREVO_API_KEY, BREVO_EXPEDITEUR (adresse validée dans Brevo), BREVO_LIST_ID (facultatif).
// Les textes des e-mails (bienvenue, annonces, planning) sont dans ./newsletters.ts.
import { createHmac } from 'node:crypto';

const secret = () => process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || 'a-changer';
export const signer = (cle: string) => createHmac('sha256', secret()).update(`confirmer:${cle}`).digest('base64url').slice(0, 32);
const signerDesinscription = (cle: string) => createHmac('sha256', secret()).update(`desinscrire:${cle}`).digest('base64url').slice(0, 32);
export const desinscriptionValide = (cle: string, s: string) => !!cle && s === signerDesinscription(cle);
export const lienDesinscription = (origine: string, cle: string) => `${origine}/api/desinscription?c=${cle}&s=${signerDesinscription(cle)}`;

export const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export const RESEAUX = {
  youtube: 'https://www.youtube.com/@mathsetmagique',
  instagram: 'https://www.instagram.com/maths_et_magique/',
};

export async function brevo(chemin: string, corps: unknown, method = 'POST') {
  const key = process.env.BREVO_API_KEY;
  if (!key) return { ok: false, status: 0, texte: 'BREVO_API_KEY manquante' };
  const r = await fetch(`https://api.brevo.com/v3/${chemin}`, {
    method,
    headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(corps),
  });
  return { ok: r.ok, status: r.status, texte: r.ok ? '' : await r.text() };
}

/* ---------- Gabarit commun : la page de cahier (marge rouge, surligneur jaune) ---------- */

const C = { encre: '#1B2433', gris: '#5B6678', bleu: '#1F6FD1', marge: '#E5707C', trait: '#DDE2EA', jaune: '#FFE066', fond: '#F7F8FA', vert: '#2E9E6B' };

/** Mot surligné en jaune, comme sur le site. */
export const surligne = (t: string) => `<span style="background:${C.jaune};padding:0 3px;border-radius:3px">${t}</span>`;
export const bouton = (texte: string, href: string, jaune = true) =>
  `<a href="${href}" style="display:inline-block;background:${jaune ? C.jaune : '#fff'};color:${C.encre};font-weight:700;text-decoration:none;padding:12px 20px;border-radius:10px;border:1px solid ${jaune ? C.jaune : C.trait}">${texte}</a>`;
export const p = (html: string, style = '') => `<p style="margin:0 0 16px;line-height:1.55;${style}">${html}</p>`;
export const titre = (html: string) => `<p style="margin:26px 0 10px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.marge}">${html}</p>`;
export const liste = (items: string[]) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 16px">${items
    .map((i) => `<tr><td valign="top" style="padding:0 10px 8px 0;color:${C.marge};font-weight:700">&ndash;</td><td style="padding:0 0 8px;line-height:1.5">${i}</td></tr>`)
    .join('')}</table>`;
/** Encadré « séance » : numéro dans la marge, comme les étapes du cahier. */
export const etape = (n: string, titreHtml: string, corps: string) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 14px"><tr>
    <td valign="top" width="34" style="font-family:'Comic Sans MS','Segoe Print',cursive;font-size:22px;color:${C.marge};line-height:1.2">${n}</td>
    <td style="border:1px solid ${C.trait};border-radius:10px;padding:12px 14px;line-height:1.5"><b>${titreHtml}</b><br>${corps}</td></tr></table>`;
export const piege = (html: string) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 18px"><tr><td style="background:#FDEEEF;border-left:4px solid ${C.marge};border-radius:8px;padding:12px 14px;line-height:1.5">${html}</td></tr></table>`;

export function gabarit(o: { preheader: string; corps: string; origine: string; desinscription?: string; raison?: string }) {
  const site = o.origine.replace(/^https?:\/\//, '');
  const lienSite = `<a href="${o.origine}/maths/" style="color:${C.gris}">${site}</a>`;
  const pied = [
    `<a href="${RESEAUX.youtube}" style="color:${C.gris}">YouTube</a>`,
    `<a href="${RESEAUX.instagram}" style="color:${C.gris}">Instagram</a>`,
    lienSite,
  ].join(' &middot; ');
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;background:${C.fond};font-family:Arial,Helvetica,sans-serif;color:${C.encre};font-size:16px">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(o.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:28px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border:1px solid ${C.trait};border-radius:14px;border-left:4px solid ${C.marge}">
<tr><td style="padding:26px 26px 8px">
  <p style="font-size:20px;font-weight:800;margin:0 0 22px"><span style="color:${C.bleu}">Maths</span> <span style="color:${C.gris};font-weight:500">et</span> Magique <span style="color:${C.jaune}">&#10022;</span></p>
  ${o.corps}
</td></tr>
<tr><td style="padding:8px 26px 24px;border-top:1px solid ${C.trait};font-size:13px;color:${C.gris};line-height:1.6">
  ${pied}<br>
  Gratuit, sans publicité. Tous droits réservés.
  ${o.raison ? `<br>${o.raison}` : ''}
  ${o.desinscription ? `<br><a href="${o.desinscription}" style="color:${C.gris}">Me désinscrire</a> (un clic suffit)` : ''}
</td></tr></table></td></tr></table></body></html>`;
}

/** Envoie un e-mail. Avec `desinscription`, ajoute l'en-tête de désinscription en un clic (Gmail, Apple Mail…). */
export async function envoyer(m: { email: string; sujet: string; html: string; tag: string; desinscription?: string }) {
  const r = await brevo('smtp/email', {
    sender: { name: 'Maths et Magique', email: process.env.BREVO_EXPEDITEUR },
    to: [{ email: m.email }],
    subject: m.sujet,
    htmlContent: m.html,
    tags: [m.tag],
    ...(m.desinscription ? { headers: { 'List-Unsubscribe': `<${m.desinscription}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' } } : {}),
  });
  if (!r.ok) {
    console.error('Brevo', r.status, r.texte);
    let code = '';
    try { code = String(JSON.parse(r.texte).code || ''); } catch {}
    return { ok: false, detail: `Brevo ${r.status}${code ? ' ' + code : ''}`, message: r.texte.slice(0, 300) };
  }
  return { ok: true, detail: '', message: '' };
}

/* ---------- E-mail 1 : confirmation de l'adresse (double opt-in) ---------- */

export function emailConfirmation(origine: string, p0: { cle: string; prenom: string; moins15: boolean }) {
  const lien = `${origine}/api/confirmer?c=${p0.cle}&s=${signer(p0.cle)}`;
  const bonjour = p0.prenom ? `Bonjour ${esc(p0.prenom)},` : 'Bonjour,';
  const pour = p0.moins15
    ? `Tu as inscrit ton enfant au planning de révision de Maths et Magique. Comme il a moins de 15 ans, ${surligne('ton accord est nécessaire')} : clique sur le bouton pour le confirmer.`
    : `Tu viens de demander le planning de révision de Maths et Magique. Il reste ${surligne('une seule étape')} : confirmer ton adresse.`;
  const corps =
    p(bonjour) +
    p(pour) +
    `<p style="margin:6px 0 22px">${bouton('Je confirme mon inscription', lien)}</p>` +
    p("Si tu n'as rien demandé, ignore cet e-mail : tu ne recevras rien d'autre.", `font-size:14px;color:${C.gris}`);
  return {
    sujet: 'Confirme ton inscription au planning de révision',
    html: gabarit({ preheader: 'Un clic pour confirmer, et le planning arrive chaque semaine.', corps, origine }),
  };
}

export async function envoyerConfirmation(req: Request, p0: { cle: string; email: string; prenom: string; moins15: boolean }) {
  if (!process.env.BREVO_API_KEY || !process.env.BREVO_EXPEDITEUR) {
    console.error('Brevo non configuré : BREVO_API_KEY et BREVO_EXPEDITEUR manquent');
    return { ok: false, detail: 'Brevo non configuré', message: '' };
  }
  const m = emailConfirmation(new URL(req.url).origin, p0);
  return envoyer({ email: p0.email, sujet: m.sujet, html: m.html, tag: 'confirmation' });
}
