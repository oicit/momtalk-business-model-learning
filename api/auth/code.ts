import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabase } from '../_supabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { code } = req.body;
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const supabase = getSupabase();

  // Look up one-time code
  const { data: authCode, error } = await supabase
    .from('bml_auth_codes')
    .select('*')
    .eq('code', code)
    .eq('used', false)
    .gt('expires_at', new Date().toISOString())
    .single();

  if (error || !authCode) return res.status(401).json({ error: 'Invalid or expired code' });

  // Mark as used
  await supabase.from('bml_auth_codes').update({ used: true }).eq('code', code);

  // Create session (24-hour expiry)
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  const { data: session, error: sessionError } = await supabase
    .from('bml_sessions')
    .insert({
      profile_id: authCode.profile_id,
      child_id: authCode.child_id,
      child_context: authCode.child_context,
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
