import { useState } from 'react';
import { type ChildContext, type AuthState, getStoredAuth, clearAuth } from '../lib/auth';

interface ChildContextResult {
  child: ChildContext | null;
  isGuest: boolean;
  isLoading: boolean;
  sessionToken: string | null;
  error: string | null;
  logout: () => void;
}

export function useChildContext(): ChildContextResult {
  const [auth, setAuth] = useState<AuthState | null>(getStoredAuth);

  const logout = () => {
    clearAuth();
    setAuth(null);
  };

  if (auth) {
    return {
      child: auth.childContext,
      isGuest: false,
      isLoading: false,
      sessionToken: auth.sessionToken,
      error: null,
      logout,
    };
  }

  return {
    child: null,
    isGuest: true,
    isLoading: false,
    sessionToken: null,
    error: null,
    logout,
  };
}
