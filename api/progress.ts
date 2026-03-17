import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabase } from './_supabase';
import { validateSession } from './_validate-session';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const session = await validateSession(req.headers.authorization);

  if (req.method === 'GET') {
    // Guest mode: no session required, return empty
    if (!session) return res.status(200).json({ progress: null, isGuest: true });

    const supabase = getSupabase();
    const { data } = await supabase
      .from('module_data')
      .select('data_value')
      .eq('profile_id', session.profileId)
      .eq('module_slug', 'business-model-learning')
      .eq('data_key', `progress:${session.childId}`)
      .single();

    return res.status(200).json({
      progress: data?.data_value || null,
      isGuest: false,
      childContext: session.childContext,
    });
  }

  if (req.method === 'POST') {
    if (!session) return res.status(401).json({ error: 'Authentication required' });

    const { progress } = req.body;
    if (!progress) return res.status(400).json({ error: 'Missing progress data' });

    const supabase = getSupabase();

    // Upsert progress
    const { error } = await supabase
      .from('module_data')
      .upsert({
        profile_id: session.profileId,
        module_slug: 'business-model-learning',
        data_key: `progress:${session.childId}`,
        data_value: { schemaVersion: 1, data: progress },
        updated_at: new Date().toISOString(),
      }, { onConflict: 'profile_id,module_slug,data_key' });

    if (error) return res.status(500).json({ error: 'Failed to save progress' });
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
