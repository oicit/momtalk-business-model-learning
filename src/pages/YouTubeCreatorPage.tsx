/**
 * YouTube Creator lesson page.
 * Thin wrapper — content lives in src/data/lessons/youtube-creator.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/youtube-creator';

export default function YouTubeCreatorPage() {
  return <LessonScaffold lesson={lesson} />;
}
