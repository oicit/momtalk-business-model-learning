/**
 * Healing & Life lesson page.
 * Thin wrapper — content lives in src/data/lessons/healing-life.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/healing-life';

export default function HealingLifePage() {
  return <LessonScaffold lesson={lesson} />;
}
