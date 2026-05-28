/**
 * Inventor's Lab lesson page.
 * Thin wrapper — content lives in src/data/lessons/inventors-lab.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/inventors-lab';

export default function InventorsLabPage() {
  return <LessonScaffold lesson={lesson} />;
}
