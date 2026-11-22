// Envoi des e-mails par Brevo (gratuit jusqu'à 300 e-mails par jour).
// Réglages Netlify : BREVO_API_KEY, BREVO_EXPEDITEUR (adresse validée dans Brevo), BREVO_LIST_ID (facultatif).
import { createHmac } from 'node:crypto';

const secret = () => process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || 'a-changer';
export const signer = (cle: string) => createHmac('sha256', secret()).update(`confirmer:${cle}`).digest('base64url').slice(0, 32);

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export async function brevo(chemin: string, corps: unknown) {
  const key = process.env.BREVO_API_KEY;
  if (!key) return { ok: false, status: 0, texte: 'BREVO_API_KEY manquante' };
  const r = await fetch(`https://api.brevo.com/v3/${chemin}`, {
    method: 'POST',
    headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(corps),
  });
  return { ok: r.ok, status: r.status, texte: r.ok ? '' : await r.text() };
}

export async function envoyerConfirmation(req: Request, p: { cle: string; email: string; prenom: string; moins15: boolean }) {
  if (!process.env.BREVO_API_KEY || !process.env.BREVO_EXPEDITEUR) {
    console.error('Brevo non configuré : BREVO_API_KEY et BREVO_EXPEDITEUR manquent');
    return { ok: false, detail: 'Brevo non configuré', message: '' };
  }
  const lien = `${new URL(req.url).origin}/api/confirmer?c=${p.cle}&s=${signer(p.cle)}`;
  const bonjour = p.prenom ? `Bonjour ${esc(p.prenom)},` : 'Bonjour,';
  const pour = p.moins15
    ? "Tu as inscrit ton enfant au planning de révision de Maths et Magique. Comme il a moins de 15 ans, ton accord est nécessaire : clique sur le bouton pour le confirmer."
    : 'Tu viens de demander le planning de révision du bac de Maths et Magique. Clique sur le bouton pour confirmer ton adresse.';
  const html = `<!doctype html><html lang="fr"><body style="margin:0;background:#F7F8FA;font-family:Arial,sans-serif;color:#1B2433">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" style="max-width:520px;background:#fff;border:1px solid #DDE2EA;border-radius:14px;border-left:4px solid #E5707C">
  <tr><td style="padding:28px">
    <p style="font-size:20px;font-weight:800;margin:0 0 20px"><span style="color:#1F6FD1">Maths</span> <span style="color:#5B6678;font-weight:500">et</span> Magique ✦</p>
    <p style="margin:0 0 14px;line-height:1.5">${bonjour}</p>
    <p style="margin:0 0 22px;line-height:1.5">${pour}</p>
    <p style="margin:0 0 22px"><a href="${lien}" style="display:inline-block;background:#FFE066;color:#1B2433;font-weight:700;text-decoration:none;padding:12px 20px;border-radius:10px">Je confirme mon inscription</a></p>
    <p style="margin:0;font-size:13px;color:#5B6678;line-height:1.5">Si tu n'as rien demandé, ignore cet e-mail : tu ne recevras rien.<br>Maths et Magique · etmagique.fr · gratuit, sans publicité.</p>
  </td></tr></table></td></tr></table></body></html>`;
  const r = await brevo('smtp/email', {
    sender: { name: 'Maths et Magique', email: process.env.BREVO_EXPEDITEUR },
    to: [{ email: p.email }],
    subject: 'Confirme ton inscription au planning de révision',
    htmlContent: html,
    tags: ['confirmation'],
  });
  if (!r.ok) {
    console.error('Brevo', r.status, r.texte);
    let code = '';
    try { code = String(JSON.parse(r.texte).code || ''); } catch {}
    return { ok: false, detail: `Brevo ${r.status}${code ? ' ' + code : ''}`, message: r.texte.slice(0, 300) };
  }
  return { ok: true, detail: '', message: '' };
}
