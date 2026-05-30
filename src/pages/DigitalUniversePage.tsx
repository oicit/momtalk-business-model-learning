/**
 * Digital Universe lesson page.
 * Thin wrapper — content lives in src/data/lessons/digital-universe.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/digital-universe';

export default function DigitalUniversePage() {
  return <LessonScaffold lesson={lesson} />;
}
