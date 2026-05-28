/**
 * Lego: Bricks Forever lesson page.
 * Thin wrapper — content lives in src/data/lessons/lego.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/lego';

export default function LegoPage() {
  return <LessonScaffold lesson={lesson} />;
}
