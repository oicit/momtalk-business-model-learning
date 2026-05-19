/**
 * /practice/print/:missionId — printable worksheet pack for a mission.
 *
 * Unauthenticated by design — kids can share the URL with a parent who
 * has a printer. The page itself only reads mission *definitions* (no
 * personal data beyond the optional auto-filled name).
 */

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MissionPrintView from '../components/kids/MissionPrintView';
import { findMissionById } from '../data/missions';

export default function MissionPrintPage() {
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();
  const mission = missionId ? findMissionById(missionId) : null;

  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

  if (!mission) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        <h1>Mission not found</h1>
        <p>
          <code>{missionId}</code> doesn't match any known mission id.
        </p>
        <a href="/practice">← Back to practice</a>
      </div>
    );
  }

  return (
    <MissionPrintView
      mission={mission}
      onBack={() => navigate('/practice')}
    />
  );
}
