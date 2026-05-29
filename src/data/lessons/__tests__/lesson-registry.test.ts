/**
 * Lesson registry integrity tests.
 *
 * These tests guard the structural invariants of the lessons-as-data
 * system. They run on `npm run test` and should catch the most common
 * regressions when adding or editing a lesson.
 */

import { describe, it, expect } from 'vitest';

// All shipped lessons
import business101 from '../business-101';
import garageSale from '../garage-sale';
import lemonadeStand from '../lemonade-stand';
import chickFilA from '../chick-fil-a';
import petShop from '../pet-shop';
import youtubeCreator from '../youtube-creator';
import cookieBakery from '../cookie-bakery';
import piggyBank from '../piggy-bank';
import stockMarket from '../stock-market';
import mcdonalds from '../mcdonalds';
import inventorsLab from '../inventors-lab';
import dealMaker from '../deal-maker';
import charityLab from '../charity-lab';
import riskPoolIsland from '../risk-pool-island';
import taxTown from '../tax-town';
import subscriptionSense from '../subscription-sense';
import roblox from '../roblox';
import costco from '../costco';
import amazon from '../amazon';
import lego from '../lego';
import disney from '../disney';
import farmStand from '../farm-stand';
import snowDayHustle from '../snow-day-hustle';
import marketingMountain from '../marketing-mountain';
import surveyMaster from '../survey-master';
import etsyShop from '../etsy-shop';
import pizzaPlace from '../pizza-place';
import startupPitch from '../startup-pitch';
import appMaker from '../app-maker';

import { resolveText, type LessonDef, type AdaptiveText } from '../types';
import { cardData, earnedCardFor } from '../../cards';

const ALL_LESSONS: LessonDef[] = [
  business101, garageSale, lemonadeStand, chickFilA, petShop, youtubeCreator,
  cookieBakery, piggyBank, stockMarket, mcdonalds, inventorsLab, dealMaker,
  charityLab, riskPoolIsland, taxTown, subscriptionSense, roblox, costco,
  amazon, lego, disney, farmStand, snowDayHustle, marketingMountain,
  surveyMaster, etsyShop, pizzaPlace, startupPitch, appMaker,
];

describe('lesson registry', () => {
  it('has 29 shipped lessons', () => {
    expect(ALL_LESSONS).toHaveLength(29);
  });

  it('each lesson has a unique id', () => {
    const ids = ALL_LESSONS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each lesson has a non-empty title + themeKey + emoji', () => {
    for (const l of ALL_LESSONS) {
      expect(l.id, `lesson ${l.id}`).toBeTruthy();
      expect(l.title, `lesson ${l.id}`).toBeTruthy();
      expect(l.themeKey, `lesson ${l.id}`).toBeTruthy();
      expect(l.emoji, `lesson ${l.id}`).toBeTruthy();
    }
  });

  it('every lesson has at least one beat', () => {
    for (const l of ALL_LESSONS) {
      expect(l.beats.length, `lesson ${l.id}`).toBeGreaterThan(0);
    }
  });

  it('every lesson starts with an intro beat', () => {
    for (const l of ALL_LESSONS) {
      expect(l.beats[0].kind, `lesson ${l.id}`).toBe('intro');
    }
  });
});

describe('lesson → card mapping', () => {
  it('every lesson is awarded by exactly one card', () => {
    for (const l of ALL_LESSONS) {
      const card = earnedCardFor(l.id);
      expect(card, `lesson ${l.id} has no awarding card`).not.toBeNull();
    }
  });

  it('every card with awardedBy points to a real lesson', () => {
    const lessonIds = new Set(ALL_LESSONS.map((l) => l.id));
    for (const c of cardData) {
      if (c.awardedBy) {
        expect(lessonIds.has(c.awardedBy), `card ${c.id} awardedBy '${c.awardedBy}' has no matching lesson`).toBe(true);
      }
    }
  });

  it('every card has a skill assigned', () => {
    for (const c of cardData) {
      expect(c.skill, `card ${c.id}`).toBeTruthy();
    }
  });
});

describe('adaptive text resolution', () => {
  it('resolveText returns the plain string when given a string', () => {
    expect(resolveText('hello', 'easy')).toBe('hello');
    expect(resolveText('hello', 'medium')).toBe('hello');
    expect(resolveText('hello', 'hard')).toBe('hello');
  });

  it('resolveText picks the right difficulty', () => {
    const t: AdaptiveText = { easy: 'E', medium: 'M', hard: 'H' };
    expect(resolveText(t, 'easy')).toBe('E');
    expect(resolveText(t, 'medium')).toBe('M');
    expect(resolveText(t, 'hard')).toBe('H');
  });
});

describe('lesson real-world mission integrity', () => {
  it('every lesson with a real-world-mission beat has a mission id matching the lesson id', () => {
    for (const l of ALL_LESSONS) {
      const missionBeat = l.beats.find((b) => b.kind === 'real-world-mission');
      if (missionBeat && missionBeat.kind === 'real-world-mission') {
        expect(missionBeat.mission.id, `lesson ${l.id} mission id mismatch`).toBe(l.id);
      }
    }
  });
});
