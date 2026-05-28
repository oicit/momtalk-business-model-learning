/**
 * Disney: 100 Years of Magic lesson page.
 * Thin wrapper — content lives in src/data/lessons/disney.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/disney';

export default function DisneyPage() {
  return <LessonScaffold lesson={lesson} />;
}
