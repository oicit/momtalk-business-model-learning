/**
 * TikTok lesson page.
 * Thin wrapper — content lives in src/data/lessons/tiktok.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/tiktok';

export default function TikTokPage() {
  return <LessonScaffold lesson={lesson} />;
}
