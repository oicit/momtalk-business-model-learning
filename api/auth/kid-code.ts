import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabase } from '../_supabase';
import { checkRateLimit } from '../_rate-limit';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 'unknown';
  if (!checkRateLimit(ip)) return res.status(429).json({ error: 'Too many attempts. Try again later.' });

  const { kidCode } = req.body;
  if (!kidCode || typeof kidCode !== 'string' || kidCode.length !== 6) {
    return res.status(400).json({ error: 'Invalid code format' });
  }

  const supabase = getSupabase();

  // Look up kid code in module_data
  const { data, error } = await supabase
    .from('module_data')
    .select('data_value')
    .eq('module_slug', 'business-model-learning')
    .eq('data_key', `kid-code:${kidCode.toUpperCase()}`)
    .single();

  if (error || !data) return res.status(401).json({ error: 'Invalid code' });

  const codeData = data.data_value as { profileId: string; childId: string; expiresAt: string; childContext?: Record<string, unknown> };

  // Check expiry
  if (new Date(codeData.expiresAt) < new Date()) {
    return res.status(401).json({ error: 'Code expired' });
  }

  // Create session
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  const { data: session, error: sessionError } = await supabase
    .from('bml_sessions')
    .insert({
      profile_id: codeData.profileId,
      child_id: codeData.childId,
      child_context: codeData.childContext || {},
      expires_at: expiresAt,
    })
    .select('token, child_context')
    .single();

  if (sessionError) return res.status(500).json({ error: 'Failed to create session' });

  return res.status(200).json({
    sessionToken: session.token,
    childContext: session.child_context,
  });
}
