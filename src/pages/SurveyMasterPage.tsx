/**
 * Survey Master lesson page.
 * Thin wrapper — content lives in src/data/lessons/survey-master.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/survey-master';

export default function SurveyMasterPage() {
  return <LessonScaffold lesson={lesson} />;
}
