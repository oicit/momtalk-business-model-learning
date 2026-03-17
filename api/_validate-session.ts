import { getSupabase } from './_supabase';

export interface SessionData {
  profileId: string;
  childId: string;
  childContext: Record<string, unknown>;
}

export async function validateSession(authHeader: string | undefined): Promise<SessionData | null> {
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
