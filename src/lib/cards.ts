/**
 * Earned-cards state + persistence.
 *
 * Pattern mirrors useProgress: localStorage-first with best-effort server sync.
 * If the kid is logged in, /api/cards keeps a server copy. If not, it's just
 * localStorage and survives reloads on the same device.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { getStoredAuth } from './auth';

const LS_KEY = 'bml.earnedCards.v1';
const API = '/api/cards';

export interface EarnedCards {
  /** Set of card ids the kid has earned. */
  ids: string[];
  /** Map of card id → ISO timestamp first earned. */
  earnedAt: Record<string, string>;
}

const EMPTY: EarnedCards = { ids: [], earnedAt: {} };

function loadLocal(): EarnedCards {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as EarnedCards;
    return {
      ids: Array.isArray(parsed.ids) ? parsed.ids : [],
      earnedAt: parsed.earnedAt && typeof parsed.earnedAt === 'object'
        ? parsed.earnedAt
        : {},
    };
  } catch {
    return { ...EMPTY };
  }
}

function saveLocal(c: EarnedCards): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(c));
  } catch {
    // localStorage may be full or disabled — silently ignore.
  }
}

async function fetchServer(token: string): Promise<EarnedCards | null> {
  try {
    const res = await fetch(API, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const { cards } = await res.json();
    if (!cards) return null;
    return {
      ids: Array.isArray(cards.ids) ? cards.ids : [],
      earnedAt:
        cards.earnedAt && typeof cards.earnedAt === 'object'
          ? cards.earnedAt
          : {},
    };
  } catch {
    return null;
  }
}

async function pushServer(token: string, cards: EarnedCards): Promise<void> {
  try {
    await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cards }),
    });
  } catch {
    // Best-effort — localStorage is the fallback.
  }
}

function merge(local: EarnedCards, server: EarnedCards): EarnedCards {
  const ids = Array.from(new Set([...local.ids, ...server.ids]));
  const earnedAt: Record<string, string> = { ...local.earnedAt };
  for (const [id, ts] of Object.entries(server.earnedAt)) {
    // Earliest wins
    if (!earnedAt[id] || ts < earnedAt[id]!) earnedAt[id] = ts;
  }
  return { ids, earnedAt };
}

export function useEarnedCards() {
  const [cards, setCards] = useState<EarnedCards>(loadLocal);
  const initialSyncDone = useRef(false);
  const lastEarned = useRef<string | null>(null);

  // On mount: pull server state if authenticated, merge with local
  useEffect(() => {
    const auth = getStoredAuth();
    if (!auth?.sessionToken) return;

    fetchServer(auth.sessionToken).then((server) => {
      if (server) {
        setCards((local) => {
          const merged = merge(local, server);
          saveLocal(merged);
          return merged;
        });
      }
      initialSyncDone.current = true;
    });
  }, []);

  // Persist to localStorage + push to server on every change
  useEffect(() => {
    saveLocal(cards);
    const auth = getStoredAuth();
    if (auth?.sessionToken) pushServer(auth.sessionToken, cards);
  }, [cards]);

  const earnCard = useCallback((cardId: string) => {
    setCards((prev) => {
      if (prev.ids.includes(cardId)) {
        lastEarned.current = null; // already had it — don't trigger toast
        return prev;
      }
      lastEarned.current = cardId;
      return {
        ids: [...prev.ids, cardId],
        earnedAt: { ...prev.earnedAt, [cardId]: new Date().toISOString() },
      };
    });
  }, []);

  const hasCard = useCallback(
    (cardId: string) => cards.ids.includes(cardId),
    [cards.ids],
  );

  /** Consume + return the most recently earned card id (for one-shot toast). */
  const consumeLastEarned = useCallback((): string | null => {
    const id = lastEarned.current;
    lastEarned.current = null;
    return id;
  }, []);

  return {
    cards,
    earned: new Set(cards.ids),
    earnCard,
    hasCard,
    consumeLastEarned,
  };
}
