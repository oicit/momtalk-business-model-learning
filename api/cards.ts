/**
 * /api/cards — read & write a child's earned-card list.
 *
 * Mirrors /api/progress.ts exactly. Stored under module_data with
 * data_key = `cards:${childId}` so no new table/migration is needed.
 *
 * GET  → { cards: EarnedCards | null, isGuest: bool, childContext }
 * POST → { cards: EarnedCards } → { ok: true }
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  return createClient(url, key);
}

interface SessionData {
  profileId: string;
  childId: string;
  childContext: Record<string, unknown>;
}

async function validateSession(authHeader: string | undefined): Promise<SessionData | null> {
  if (!authHeader?.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7);
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('bml_sessions')
    .select('profile_id, child_id, child_context')
    .eq('token', token)
    .gt('expires_at', new Date().toISOString())
    .single();
  if (error || !data) return null;
  return {
    profileId: data.profile_id,
    childId: data.child_id,
    childContext: data.child_context as Record<string, unknown>,
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const authHeader = Array.isArray(req.headers.authorization)
      ? req.headers.authorization[0]
      : req.headers.authorization;
    const session = await validateSession(authHeader);

    if (req.method === 'GET') {
      if (!session) return res.status(200).json({ cards: null, isGuest: true });

      const supabase = getSupabase();
      const { data } = await supabase
        .from('module_data')
        .select('data_value')
        .eq('profile_id', session.profileId)
        .eq('module_slug', 'business-model-learning')
        .eq('data_key', `cards:${session.childId}`)
        .single();

      // Unwrap schemaVersion wrapper (matches progress endpoint pattern)
      const value = data?.data_value as { data?: unknown } | null;
      const cards = value?.data ?? value ?? null;

      return res.status(200).json({
        cards,
        isGuest: false,
        childContext: session.childContext,
      });
    }

    if (req.method === 'POST') {
      if (!session) return res.status(401).json({ error: 'Authentication required' });

      const { cards } = req.body;
      if (!cards) return res.status(400).json({ error: 'Missing cards data' });

      const supabase = getSupabase();
      const { error } = await supabase
        .from('module_data')
        .upsert(
          {
            profile_id: session.profileId,
            module_slug: 'business-model-learning',
            data_key: `cards:${session.childId}`,
            data_value: { schemaVersion: 1, data: cards },
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'profile_id,module_slug,data_key' },
        );

      if (error) return res.status(500).json({ error: 'Failed to save cards' });
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return res.status(500).json({ error: message });
  }
}
