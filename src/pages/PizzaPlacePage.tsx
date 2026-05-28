/**
 * Pizza Place lesson page.
 * Thin wrapper — content lives in src/data/lessons/pizza-place.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/pizza-place';

export default function PizzaPlacePage() {
  return <LessonScaffold lesson={lesson} />;
}
