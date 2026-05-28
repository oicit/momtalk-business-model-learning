/**
 * Startup Pitch lesson page.
 * Thin wrapper — content lives in src/data/lessons/startup-pitch.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/startup-pitch';

export default function StartupPitchPage() {
  return <LessonScaffold lesson={lesson} />;
}
