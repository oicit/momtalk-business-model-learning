/**
 * Real-world missions state + persistence.
 *
 * State machine per mission id:
 *   not-started → accepted → reflected (done)
 *
 * - "accepted" means the kid clicked "I'm going to try it" — Momo will
 *   follow up next visit.
 * - "reflected" means they came back, filled in the reflection, and
 *   optionally uploaded a photo.
 *
 * Storage: localStorage-first with best-effort server sync. Mirrors
 * src/lib/cards.ts. When the kid is logged in, /api/missions keeps a
 * server copy keyed by `missions:${childId}`; otherwise just localStorage.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { getStoredAuth } from './auth';

const LS_KEY = 'bml.missions.v1';
const API = '/api/missions';

export type MissionStatus = 'accepted' | 'reflected';

export interface MissionRecord {
  id: string;
  status: MissionStatus;
  /** ISO when the kid accepted the mission. */
  acceptedAt: string;
  /** ISO when they completed reflection (set on reflect). */
  reflectedAt?: string;
  /** Free-form answers keyed by ReflectionField.key. */
  answers: Record<string, string>;
  /** Optional photo as a data URL (resized client-side). */
  photo?: string;
  /** Optional kid-supplied photo caption. */
  photoCaption?: string;
}

export interface MissionsState {
  byId: Record<string, MissionRecord>;
}

const EMPTY: MissionsState = { byId: {} };

function loadLocal(): MissionsState {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as MissionsState;
    if (!parsed || typeof parsed !== 'object' || !parsed.byId) return { ...EMPTY };
    return { byId: { ...parsed.byId } };
  } catch {
    return { ...EMPTY };
  }
}

function saveLocal(s: MissionsState): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(s));
  } catch {
    // localStorage may be full (large photos!) — silently ignore.
  }
}

async function fetchServer(token: string): Promise<MissionsState | null> {
  try {
    const res = await fetch(API, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const { missions } = await res.json();
    if (!missions || !missions.byId) return null;
    return { byId: { ...missions.byId } };
  } catch {
    return null;
  }
}

async function pushServer(token: string, missions: MissionsState): Promise<void> {
  try {
    await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ missions }),
    });
  } catch {
    // Best-effort — localStorage is the fallback.
  }
}

/**
 * Merge local + server missions. Strategy: latest write wins per mission.
 * - If a mission exists only on one side, take it.
 * - If both sides have it: prefer 'reflected' over 'accepted' (later state),
 *   else prefer the record with the later acceptedAt timestamp.
 */
function merge(local: MissionsState, server: MissionsState): MissionsState {
  const byId: Record<string, MissionRecord> = { ...local.byId };
  for (const [id, sRec] of Object.entries(server.byId)) {
    const lRec = byId[id];
    if (!lRec) {
      byId[id] = sRec;
      continue;
    }
    // Both sides have it — latest state wins.
    const localIsReflected = lRec.status === 'reflected';
    const serverIsReflected = sRec.status === 'reflected';
    if (serverIsReflected && !localIsReflected) {
      byId[id] = sRec;
    } else if (localIsReflected && !serverIsReflected) {
      // Keep local.
    } else {
      // Same state — prefer later acceptedAt (latest action wins).
      byId[id] = (sRec.acceptedAt > lRec.acceptedAt) ? sRec : lRec;
    }
  }
  return { byId };
}

export function useMissions() {
  const [state, setState] = useState<MissionsState>(loadLocal);
  const initialSyncDone = useRef(false);

  // On mount: pull server state if authenticated, merge with local
  useEffect(() => {
    const auth = getStoredAuth();
    if (!auth?.sessionToken) {
      initialSyncDone.current = true;
      return;
    }

    fetchServer(auth.sessionToken).then((server) => {
      if (server) {
        setState((local) => {
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
    saveLocal(state);
    const auth = getStoredAuth();
    if (auth?.sessionToken) pushServer(auth.sessionToken, state);
  }, [state]);

  const acceptMission = useCallback((id: string) => {
    setState((prev) => {
      if (prev.byId[id]) return prev; // already accepted/reflected
      return {
        byId: {
          ...prev.byId,
          [id]: {
            id,
            status: 'accepted',
            acceptedAt: new Date().toISOString(),
            answers: {},
          },
        },
      };
    });
  }, []);

  const reflectMission = useCallback(
    (id: string, answers: Record<string, string>, photo?: string, photoCaption?: string) => {
      setState((prev) => {
        const existing = prev.byId[id];
        if (!existing) return prev;
        return {
          byId: {
            ...prev.byId,
            [id]: {
              ...existing,
              status: 'reflected',
              reflectedAt: new Date().toISOString(),
              answers,
              ...(photo ? { photo } : {}),
              ...(photoCaption ? { photoCaption } : {}),
            },
          },
        };
      });
    },
    [],
  );

  const removeMission = useCallback((id: string) => {
    setState((prev) => {
      if (!prev.byId[id]) return prev;
      const next = { ...prev.byId };
      delete next[id];
      return { byId: next };
    });
  }, []);

  const getMission = useCallback(
    (id: string): MissionRecord | undefined => state.byId[id],
    [state.byId],
  );

  return {
    missions: state,
    acceptMission,
    reflectMission,
    removeMission,
    getMission,
    /** Convenience selectors. */
    pending: Object.values(state.byId).filter((m) => m.status === 'accepted'),
    completed: Object.values(state.byId).filter((m) => m.status === 'reflected'),
  };
}
