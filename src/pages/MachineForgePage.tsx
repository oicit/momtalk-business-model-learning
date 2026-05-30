/**
 * Machine Forge lesson page.
 * Thin wrapper — content lives in src/data/lessons/machine-forge.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/machine-forge';

export default function MachineForgePage() {
  return <LessonScaffold lesson={lesson} />;
}
