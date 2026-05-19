/**
 * Pet Shop lesson page.
 * Thin wrapper — content lives in src/data/lessons/pet-shop.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/pet-shop';

export default function PetShopPage() {
  return <LessonScaffold lesson={lesson} />;
}
