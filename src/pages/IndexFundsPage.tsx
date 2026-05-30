/**
 * Index Funds lesson page.
 * Thin wrapper — content lives in src/data/lessons/index-funds.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/index-funds';

export default function IndexFundsPage() {
  return <LessonScaffold lesson={lesson} />;
}
