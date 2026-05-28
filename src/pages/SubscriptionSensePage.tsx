/**
 * Subscription Sense lesson page.
 * Thin wrapper — content lives in src/data/lessons/subscription-sense.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/subscription-sense';

export default function SubscriptionSensePage() {
  return <LessonScaffold lesson={lesson} />;
}
