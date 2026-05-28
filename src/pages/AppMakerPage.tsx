/**
 * App Maker lesson page.
 * Thin wrapper — content lives in src/data/lessons/app-maker.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/app-maker';

export default function AppMakerPage() {
  return <LessonScaffold lesson={lesson} />;
}
