/**
 * Public Speaking lesson page.
 * Thin wrapper — content lives in src/data/lessons/public-speaking.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/public-speaking';

export default function PublicSpeakingPage() {
  return <LessonScaffold lesson={lesson} />;
}
