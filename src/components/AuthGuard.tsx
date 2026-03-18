import { Navigate, useLocation } from 'react-router-dom';
import { getStoredAuth } from '../lib/auth';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const auth = getStoredAuth();
  const location = useLocation();

  if (!auth) {
    // Redirect to auth page, preserving where they wanted to go
    return <Navigate to={`/auth?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  return <>{children}</>;
}
