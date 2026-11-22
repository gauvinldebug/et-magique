// GET /api/confirmer?c=…&s=… : le lien de l'e-mail de confirmation.
import type { Config } from '@netlify/functions';
import { store } from '../lib/outils';
import { signer, brevo, envoyer, lienDesinscription } from '../lib/emails';
import { bienvenue } from '../lib/newsletters';

export default async (req: Request) => {
  const u = new URL(req.url);
  const c = u.searchParams.get('c') ?? '';
  const ok = c && u.searchParams.get('s') === signer(c);
  const s = store('inscriptions');
  const ins = ok ? ((await s.get(c, { type: 'json' })) as Record<string, string> | null) : null;
  if (!ins) return Response.redirect(`${u.origin}/maths/planning-bac/?lien=invalide`, 302);
  if (ins.statut !== 'confirme') {
    ins.statut = 'confirme';
    ins.confirme = new Date().toISOString();
    await s.setJSON(c, ins);
    if (process.env.BREVO_LIST_ID) {
      await brevo('contacts', {
        email: ins.email,
        attributes: { PRENOM: ins.prenom, NIVEAU: ins.niveau, MOINS_15: ins.age === 'moins15' },
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
      });
    }
    // E-mail de bienvenue : une seule fois, au premier clic sur le lien.
    const m = bienvenue(u.origin, { cle: c, email: ins.email, prenom: ins.prenom, niveau: ins.niveau, age: ins.age });
    const r = await envoyer({ email: ins.email, sujet: m.sujet, html: m.html, tag: 'bienvenue', desinscription: lienDesinscription(u.origin, c) });
    if (!r.ok) await store('limites').setJSON('brevo/derniere-erreur', { date: new Date().toISOString(), detail: r.detail, message: r.message });
  }
  return Response.redirect(`${u.origin}/maths/planning-bac/merci/`, 302);
};

export const config: Config = { path: '/api/confirmer' };
