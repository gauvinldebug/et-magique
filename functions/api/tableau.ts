import h from '../../netlify/functions/tableau';
import { adapter } from '../../cloudflare/adaptateur';

export const onRequest = adapter(h);
