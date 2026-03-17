const SESSION_KEY = 'bml-session-token';

export interface ChildContext {
  childName: string;
  childAge: number;
  interests: string[];
  personality: string[];
  ceoLevel: number;
  ceoPoints: number;
}

export interface AuthState {
  sessionToken: string;
  childContext: ChildContext;
}

export function getStoredAuth(): AuthState | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function storeAuth(auth: AuthState): void {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(auth));
}

export function clearAuth(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export async function exchangeAuthCode(code: string): Promise<AuthState> {
  const res = await fetch('/api/auth/code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  if (!res.ok) throw new Error('Invalid auth code');
  const data = await res.json();
  const auth: AuthState = { sessionToken: data.sessionToken, childContext: data.childContext };
  storeAuth(auth);
  return auth;
}

export async function exchangeKidCode(kidCode: string): Promise<AuthState> {
  const res = await fetch('/api/auth/kid-code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kidCode }),
  });
  if (!res.ok) {
    if (res.status === 429) throw new Error('Too many attempts. Please wait and try again.');
    throw new Error('Invalid code');
  }
  const data = await res.json();
  const auth: AuthState = { sessionToken: data.sessionToken, childContext: data.childContext };
  storeAuth(auth);
  return auth;
}
