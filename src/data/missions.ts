/**
 * Mission registry — lets pages look up any mission by id (lesson or weekly).
 */

import type { RealWorldMissionDef } from './lessons/types';
import lemonadeStand from './lessons/lemonade-stand';
import chickFilA from './lessons/chick-fil-a';
import business101 from './lessons/business-101';
import garageSale from './lessons/garage-sale';
import petShop from './lessons/pet-shop';
import youtubeCreator from './lessons/youtube-creator';
import cookieBakery from './lessons/cookie-bakery';
import { currentWeeklyBonus, weeklyPool } from './weeklyBonus';

const LESSONS = [business101, garageSale, lemonadeStand, chickFilA, petShop, youtubeCreator, cookieBakery];

/** Pull every per-lesson mission out of all known lessons. */
export function listLessonMissions(): RealWorldMissionDef[] {
  const out: RealWorldMissionDef[] = [];
  for (const lesson of LESSONS) {
    for (const beat of lesson.beats) {
      if (beat.kind === 'real-world-mission') out.push(beat.mission);
    }
  }
  return out;
}

/** Look up a mission by id, including weekly variants (with `@<weekIdx>` suffix). */
export function findMissionById(id: string): RealWorldMissionDef | null {
  // Per-lesson missions
  for (const m of listLessonMissions()) {
    if (m.id === id) return m;
  }

  // Weekly missions — strip "@<weekIdx>" suffix to match pool entry
  const baseId = id.includes('@') ? id.split('@')[0] : id;
  for (const m of weeklyPool) {
    if (m.id === baseId) return { ...m, id }; // restore the requested id
  }

  // Try matching the current week's selected mission directly
  const current = currentWeeklyBonus();
  if (current.id === id) return current;

  return null;
}
