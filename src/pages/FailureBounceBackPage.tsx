/**
 * Failure & Bounce Back lesson page.
 * Thin wrapper — content lives in src/data/lessons/failure-bounce-back.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/failure-bounce-back';

export default function FailureBounceBackPage() {
  return <LessonScaffold lesson={lesson} />;
}
