// GET ou POST /api/desinscription?c=…&s=… : le lien « Me désinscrire » en bas de chaque e-mail.
// POST = désinscription en un clic depuis Gmail ou Apple Mail (en-tête List-Unsubscribe-Post).
import type { Config } from '@netlify/functions';
import { store } from '../lib/outils';
import { desinscriptionValide, brevo } from '../lib/emails';

export default async (req: Request) => {
  const u = new URL(req.url);
  const c = u.searchParams.get('c') ?? '';
  const valide = desinscriptionValide(c, u.searchParams.get('s') ?? '');
  const s = store('inscriptions');
  const ins = valide ? ((await s.get(c, { type: 'json' })) as Record<string, string> | null) : null;
  if (ins && ins.statut !== 'desinscrit') {
    ins.statut = 'desinscrit';
    ins.desinscrit = new Date().toISOString();
    await s.setJSON(c, ins);
    if (process.env.BREVO_LIST_ID) {
      await brevo(`contacts/${encodeURIComponent(ins.email)}`, { unlinkListIds: [Number(process.env.BREVO_LIST_ID)] }, 'PUT');
    }
  }
  if (req.method === 'POST') return new Response(null, { status: ins ? 200 : 400 });
  return Response.redirect(`${u.origin}/desinscription/${ins ? '' : '?lien=invalide'}`, 302);
};

export const config: Config = { path: '/api/desinscription' };
