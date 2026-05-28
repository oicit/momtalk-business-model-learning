/**
 * Amazon: Speed Empire lesson page.
 * Thin wrapper — content lives in src/data/lessons/amazon.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/amazon';

export default function AmazonPage() {
  return <LessonScaffold lesson={lesson} />;
}
