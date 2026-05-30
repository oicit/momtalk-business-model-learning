/**
 * Mega Build lesson page.
 * Thin wrapper — content lives in src/data/lessons/mega-build.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/mega-build';

export default function MegaBuildPage() {
  return <LessonScaffold lesson={lesson} />;
}
