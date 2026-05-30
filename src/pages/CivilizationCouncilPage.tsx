/**
 * Civilization Council lesson page.
 * Thin wrapper — content lives in src/data/lessons/civilization-council.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/civilization-council';

export default function CivilizationCouncilPage() {
  return <LessonScaffold lesson={lesson} />;
}
