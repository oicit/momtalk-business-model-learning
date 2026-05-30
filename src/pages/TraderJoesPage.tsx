/**
 * Trader Joe's lesson page.
 * Thin wrapper — content lives in src/data/lessons/trader-joes.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/trader-joes';

export default function TraderJoesPage() {
  return <LessonScaffold lesson={lesson} />;
}
