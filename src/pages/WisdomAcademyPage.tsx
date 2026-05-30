/**
 * Wisdom Academy lesson page.
 * Thin wrapper — content lives in src/data/lessons/wisdom-academy.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/wisdom-academy';

export default function WisdomAcademyPage() {
  return <LessonScaffold lesson={lesson} />;
}
