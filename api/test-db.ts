import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return res.status(500).json({ error: 'Missing env vars' });
    
    const supabase = createClient(url, key);
    const { data, error } = await supabase.from('bml_sessions').select('token').limit(1);
    
    return res.status(200).json({ 
      ok: true, 
      data: data?.length ?? 0, 
      error: error?.message ?? null 
    });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
