import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSupabase } from './_supabase';
import { validateSession } from './_validate-session';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const authHeader = Array.isArray(req.headers.authorization)
      ? req.headers.authorization[0]
      : req.headers.authorization;
    const session = await validateSession(authHeader);
    if (!session) return res.status(200).json({ reviews: [], isGuest: true });

    const supabase = getSupabase();
    const { data } = await supabase
      .from('module_data')
      .select('data_value')
      .eq('profile_id', session.profileId)
      .eq('module_slug', 'business-model-learning')
      .eq('data_key', `reviews:${session.childId}`)
      .single();

    const reviews = (data?.data_value as { data: unknown[] })?.data || [];
    return res.status(200).json({ reviews, isGuest: false });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return res.status(500).json({ error: message });
  }
}
