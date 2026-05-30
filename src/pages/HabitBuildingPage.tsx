/**
 * Habit Building lesson page.
 * Thin wrapper — content lives in src/data/lessons/habit-building.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/habit-building';

export default function HabitBuildingPage() {
  return <LessonScaffold lesson={lesson} />;
}
