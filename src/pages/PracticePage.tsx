/**
 * /practice — index of all real-world missions.
 *
 * Two sections:
 *   1. THIS WEEK'S CHALLENGE — the rotating weekly bonus mission
 *   2. LESSON MISSIONS — one per lesson that has a real-world-mission beat
 *
 * Each card shows the mission status (not-started / in-progress / completed)
 * and tapping opens the full mission flow inline.
 */

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { T, themes } from '../styles/kidsTokens';
import { useMissions } from '../lib/missions';
import { currentWeeklyBonus } from '../data/weeklyBonus';
import type { LessonDef, RealWorldMissionDef } from '../data/lessons/types';
import RealWorldMission from '../components/kids/RealWorldMission';
import Emo from '../components/kids/Emo';
import Pill from '../components/kids/Pill';
import Momo from '../components/kids/Momo';
import lemonadeStand from '../data/lessons/lemonade-stand';
import chickFilA from '../data/lessons/chick-fil-a';

const ALL_LESSONS: LessonDef[] = [lemonadeStand, chickFilA];

interface LessonMissionRef {
  lesson: LessonDef;
  mission: RealWorldMissionDef;
}

function collectLessonMissions(): LessonMissionRef[] {
  const out: LessonMissionRef[] = [];
  for (const lesson of ALL_LESSONS) {
    for (const beat of lesson.beats) {
      if (beat.kind === 'real-world-mission') {
        out.push({ lesson, mission: beat.mission });
      }
    }
  }
  return out;
}

export default function PracticePage() {
  const navigate = useNavigate();
  const { getMission } = useMissions();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

  const weekly = useMemo(() => currentWeeklyBonus(), []);
  const lessonMissions = useMemo(collectLessonMissions, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: themes.portal.bg,
      }}
    >
      <Header />

      <main style={{ flex: 1, padding: '24px 16px 48px', width: '100%' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* Hero */}
          <div style={{ marginBottom: 22 }}>
            <Momo
              mood="encouraging"
              name="Momo"
              size={64}
              msg="This is where you actually try stuff in real life. That's where the real learning happens!"
            />
          </div>

          {/* This week's challenge */}
          <SectionHeader emoji="⭐" label="THIS WEEK'S CHALLENGE" />
          {openId === weekly.id ? (
            <div style={{ marginBottom: 24 }}>
              <RealWorldMission mission={weekly} />
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <Pill bg={T.white} color={T.green} onClick={() => setOpenId(null)}>
                  ← Back to list
                </Pill>
              </div>
            </div>
          ) : (
            <MissionTile
              mission={weekly}
              status={getMission(weekly.id)?.status}
              onOpen={() => setOpenId(weekly.id)}
              accent={T.coral}
            />
          )}

          {/* Lesson missions */}
          <SectionHeader emoji="🎒" label="LESSON MISSIONS" />
          <div style={{ display: 'grid', gap: 12 }}>
            {lessonMissions.map(({ lesson, mission }) =>
              openId === mission.id ? (
                <div key={mission.id}>
                  <RealWorldMission mission={mission} />
                  <div style={{ textAlign: 'center', marginTop: 10 }}>
                    <Pill bg={T.white} color={T.green} onClick={() => setOpenId(null)}>
                      ← Back to list
                    </Pill>
                  </div>
                </div>
              ) : (
                <MissionTile
                  key={mission.id}
                  mission={mission}
                  status={getMission(mission.id)?.status}
                  onOpen={() => setOpenId(mission.id)}
                  accent={themes[lesson.themeKey]?.accent ?? T.green}
                  lessonTitle={lesson.title}
                  onGoToLesson={() => navigate(`/${lesson.id}`)}
                />
              ),
            )}
          </div>

          <div style={{ marginTop: 28, textAlign: 'center' }}>
            <Pill bg={T.white} color={T.green} onClick={() => navigate('/')}>
              ← Back to map
            </Pill>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const subLinkStyle: React.CSSProperties = {
  fontSize: 11,
  color: T.green,
  fontWeight: 600,
  textDecoration: 'underline',
  cursor: 'pointer',
  display: 'inline-block',
};

function SectionHeader({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div style={{ margin: '8px 0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
      <Emo size={20}>{emoji}</Emo>
      <span style={{ fontSize: 12, fontWeight: 800, color: T.green, letterSpacing: '.08em' }}>
        {label}
      </span>
      <span style={{ flex: 1, height: 2, background: T.green, borderRadius: 999, opacity: 0.15 }} />
    </div>
  );
}

interface MissionTileProps {
  mission: RealWorldMissionDef;
  status: 'accepted' | 'reflected' | undefined;
  onOpen: () => void;
  accent: string;
  lessonTitle?: string;
  onGoToLesson?: () => void;
}

function MissionTile({
  mission, status, onOpen, accent, lessonTitle, onGoToLesson,
}: MissionTileProps) {
  const navigateTo = useNavigate();
  const titleStr = typeof mission.title === 'string' ? mission.title : mission.title.medium;
  const pitchStr = typeof mission.pitch === 'string' ? mission.pitch : mission.pitch.medium;
  const statusLabel =
    status === 'reflected' ? 'COMPLETE' :
    status === 'accepted' ? 'IN PROGRESS' :
    'NEW';
  const statusBg =
    status === 'reflected' ? T.green :
    status === 'accepted' ? T.yellow :
    accent;
  const statusFg = statusBg === T.yellow ? T.green : T.white;

  return (
    <button
      type="button"
      onClick={onOpen}
      style={{
        textAlign: 'left',
        background: T.white,
        border: `3px solid ${accent}`,
        borderRadius: 18,
        padding: '14px 16px',
        boxShadow: `4px 4px 0 rgba(22,101,52,.10)`,
        cursor: 'pointer',
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
      }}
    >
      <div
        style={{
          width: 52, height: 52, flexShrink: 0,
          background: '#FFFBEB',
          border: `3px solid ${T.green}`,
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <Emo size={28}>{mission.emoji}</Emo>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
          <span
            style={{
              fontSize: 10, fontWeight: 800, color: statusFg,
              background: statusBg, padding: '2px 8px', borderRadius: 999,
              letterSpacing: '.06em',
            }}
          >
            {statusLabel}
          </span>
          {lessonTitle && (
            <span style={{ fontSize: 11, color: T.sub, fontWeight: 600 }}>{lessonTitle}</span>
          )}
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: T.green, lineHeight: 1.3 }}>
          {titleStr}
        </div>
        <div style={{ fontSize: 13, color: T.sub, lineHeight: 1.4, marginTop: 2 }}>
          {pitchStr}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
          {onGoToLesson && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onGoToLesson();
              }}
              style={subLinkStyle}
            >
              Open lesson →
            </span>
          )}
          <span
            onClick={(e) => {
              e.stopPropagation();
              navigateTo(`/practice/print/${encodeURIComponent(mission.id)}`);
            }}
            style={subLinkStyle}
          >
            🖨️ Print materials
          </span>
        </div>
      </div>
      <span style={{ color: T.green, fontWeight: 800, fontSize: 18 }}>›</span>
    </button>
  );
}
