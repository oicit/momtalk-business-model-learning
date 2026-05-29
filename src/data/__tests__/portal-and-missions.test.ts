/**
 * Cross-registry integrity tests: portalStops + missions registry.
 */

import { describe, it, expect } from 'vitest';
import { portalStops, lessonStopCount } from '../portalStops';
import { listLessonMissions, findMissionById } from '../missions';

describe('portalStops', () => {
  it('every stop has a unique id', () => {
    const ids = portalStops.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every stop with a progressKey has progressKey === id (lesson stops)', () => {
    for (const s of portalStops) {
      if (s.progressKey) {
        expect(s.progressKey, `stop ${s.id}`).toBe(s.id);
      }
    }
  });

  it('lessonStopCount matches stops with progressKey', () => {
    const counted = portalStops.filter((s) => s.progressKey).length;
    expect(lessonStopCount).toBe(counted);
  });

  it('every available lesson stop has a non-# path', () => {
    for (const s of portalStops) {
      if (s.progressKey && s.status === 'available') {
        expect(s.path.startsWith('/'), `stop ${s.id} path`).toBe(true);
      }
    }
  });
});

describe('missions registry', () => {
  it('listLessonMissions returns one mission per lesson', () => {
    const missions = listLessonMissions();
    // 29 lessons all have real-world-mission beats
    expect(missions.length).toBeGreaterThanOrEqual(29);
  });

  it('findMissionById round-trips for every per-lesson mission', () => {
    const missions = listLessonMissions();
    for (const m of missions) {
      const found = findMissionById(m.id);
      expect(found, `mission ${m.id}`).not.toBeNull();
      expect(found!.id).toBe(m.id);
    }
  });
});
