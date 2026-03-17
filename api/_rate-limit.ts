const attempts: Record<string, { count: number; resetAt: number }> = {};
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = attempts[ip];
  if (!entry || now > entry.resetAt) {
    attempts[ip] = { count: 1, resetAt: now + WINDOW_MS };
    return true;
  }
  if (entry.count >= MAX_ATTEMPTS) return false;
  entry.count++;
  return true;
}
