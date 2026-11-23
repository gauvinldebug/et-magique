// Fait tourner les fonctions de netlify/functions/ sur Cloudflare Pages Functions, sans les réécrire.
// Réglages Cloudflare (projet Pages > Settings) :
//   - Runtime > Compatibility flags : nodejs_compat (node:crypto, Buffer, process.env)
//   - Bindings > KV namespace : nom de variable DONNEES (remplace Netlify Blobs)
//   - Variables and Secrets : ADMIN_PASSWORD, ADMIN_SECRET, BREVO_API_KEY, BREVO_EXPEDITEUR… (voir .env.example)
import { utiliserKV, type EspaceKV } from '../netlify/lib/outils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Gestionnaire = (req: Request, ctx: any) => Promise<Response> | Response; // ctx : seule l'IP est lue
type ContexteCF = {
  request: Request;
  env: Record<string, unknown> & { DONNEES?: EspaceKV };
  waitUntil(p: Promise<unknown>): void;
};

declare const caches: { default: { match(r: Request): Promise<Response | undefined>; put(r: Request, res: Response): Promise<void> } };

export function adapter(h: Gestionnaire, o: { stockage?: boolean; cacheSecondes?: number } = {}) {
  const { stockage = true, cacheSecondes = 0 } = o;
  return async (c: ContexteCF) => {
    // Les variables du projet Cloudflare arrivent dans env : on les recopie dans process.env, comme sur Netlify.
    for (const [k, v] of Object.entries(c.env)) if (typeof v === 'string') process.env[k] = v;
    if (stockage) {
      if (!c.env.DONNEES) {
        return new Response(JSON.stringify({ ok: false, erreur: "Stockage non branché : ajoute l'espace KV « DONNEES » dans Cloudflare." }), {
          status: 500, headers: { 'content-type': 'application/json; charset=utf-8' },
        });
      }
      utiliserKV(c.env.DONNEES);
    }
    const ctx = { ip: c.request.headers.get('cf-connecting-ip') ?? undefined };
    if (!cacheSecondes || c.request.method !== 'GET') return h(c.request, ctx);

    // Cache du CDN de Cloudflare (équivalent de netlify-cdn-cache-control).
    const cache = caches.default;
    const deja = await cache.match(c.request);
    if (deja) return deja;
    const r = await h(c.request, ctx);
    if (!r.ok) return r;
    const copie = new Response(r.body, r);
    copie.headers.set('cache-control', `public, max-age=0, s-maxage=${cacheSecondes}`);
    c.waitUntil(cache.put(c.request, copie.clone()));
    return copie;
  };
}
