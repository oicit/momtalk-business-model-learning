import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { type ChildContext, type AuthState, getStoredAuth, exchangeAuthCode, clearAuth } from '../lib/auth';

interface ChildContextResult {
  child: ChildContext | null;
  isGuest: boolean;
  isLoading: boolean;
  sessionToken: string | null;
  error: string | null;
  logout: () => void;
}

export function useChildContext(): ChildContextResult {
  const [searchParams, setSearchParams] = useSearchParams();
  const [auth, setAuth] = useState<AuthState | null>(getStoredAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle auth code from URL (app launch flow)
  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;

    setIsLoading(true);
    exchangeAuthCode(code)
      .then((result) => {
        setAuth(result);
        // Strip code from URL
        searchParams.delete('code');
        setSearchParams(searchParams, { replace: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []); // Only on mount

  const logout = () => {
    clearAuth();
    setAuth(null);
  };

  if (auth) {
    return {
      child: auth.childContext,
      isGuest: false,
      isLoading,
      sessionToken: auth.sessionToken,
      error,
      logout,
    };
  }

  return {
    child: null,
    isGuest: true,
    isLoading,
    sessionToken: null,
    error,
    logout,
  };
}
