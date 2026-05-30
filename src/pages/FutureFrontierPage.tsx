/**
 * Future Frontier lesson page.
 * Thin wrapper — content lives in src/data/lessons/future-frontier.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/future-frontier';

export default function FutureFrontierPage() {
  return <LessonScaffold lesson={lesson} />;
}
