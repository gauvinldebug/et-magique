// Point d'entrée du site sur Cloudflare Workers (projet « et-magique » créé en Workers, pas en Pages).
// Les pages viennent de dist/ (Workers Static Assets, avec public/_redirects et public/_headers) ;
// seules les adresses /api/* passent par ce code, qui réutilise les fonctions de netlify/functions/.
import admin from '../netlify/functions/admin';
import confirmer from '../netlify/functions/confirmer';
import demandes from '../netlify/functions/demandes';
import desinscription from '../netlify/functions/desinscription';
import inscription from '../netlify/functions/inscription';
import tableau from '../netlify/functions/tableau';
import video from '../netlify/functions/video';
import { adapter } from './adaptateur';

const ROUTES: Record<string, ReturnType<typeof adapter>> = {
  '/api/confirmer': adapter(confirmer),
  '/api/demandes': adapter(demandes),
  '/api/desinscription': adapter(desinscription),
  '/api/inscription': adapter(inscription),
  '/api/tableau': adapter(tableau),
  '/api/video': adapter(video, { stockage: false, cacheSecondes: 900 }),
};
const ADMIN = adapter(admin);

type Env = Record<string, unknown> & { ASSETS: { fetch(r: Request): Promise<Response> } };

export default {
  async fetch(request: Request, env: Env, ctx: { waitUntil(p: Promise<unknown>): void }) {
    const chemin = new URL(request.url).pathname.replace(/\/$/, '');
    const c = { request, env, waitUntil: (p: Promise<unknown>) => ctx.waitUntil(p) };
    if (chemin.startsWith('/api/admin/')) return ADMIN(c);
    const route = ROUTES[chemin];
    if (route) return route(c);
    return env.ASSETS.fetch(request);
  },
};
