/**
 * Roblox: Platform Economy lesson page.
 * Thin wrapper — content lives in src/data/lessons/roblox.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/roblox';

export default function RobloxPage() {
  return <LessonScaffold lesson={lesson} />;
}
