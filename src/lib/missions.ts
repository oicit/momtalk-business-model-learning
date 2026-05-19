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
 * Storage: localStorage-first. Server sync can be added by mirroring
 * src/lib/cards.ts (the API is identical pattern — module_data with
 * data_key = `missions:${childId}`).
 */

import { useCallback, useEffect, useState } from 'react';

const LS_KEY = 'bml.missions.v1';

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

export function useMissions() {
  const [state, setState] = useState<MissionsState>(loadLocal);

  useEffect(() => {
    saveLocal(state);
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
