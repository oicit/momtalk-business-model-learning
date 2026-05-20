/**
 * Portal (kids-mode board-game map).
 *
 * Replaces the legacy tile-grid Portal. The old version is preserved at
 * Portal.legacy.tsx and rendered when `?legacy=1` is in the URL.
 *
 * Path: GET /
 */

import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LegacyPortal from './Portal.legacy';

import { T, themes } from '../styles/kidsTokens';
import BoardMap from '../components/kids/BoardMap';
import Momo, { type MomoMood } from '../components/kids/Momo';
import FadeIn from '../components/kids/FadeIn';
import Pill from '../components/kids/Pill';
import { portalStops, lessonStopCount, type MapStop } from '../data/portalStops';
import { useProgress } from '../hooks/useProgress';
import { useMissions } from '../lib/missions';
import { currentWeeklyBonus } from '../data/weeklyBonus';
import { resolveText } from '../data/lessons/types';

export default function Portal() {
  const [params] = useSearchParams();

  // Legacy fallback for QA / rollback
  if (params.get('legacy') === '1') {
    return <LegacyPortal />;
  }

  return <KidsPortal />;
}

function KidsPortal() {
  const navigate = useNavigate();
  const { isCompleted } = useProgress();
  const { pending, getMission } = useMissions();
  const weekly = useMemo(() => currentWeeklyBonus(), []);
  const weeklyStatus = getMission(weekly.id)?.status;
  const pendingCount = pending.length;
  const [ready, setReady] = useState(false);

  // Enable kids-mode global styling while this page is mounted
  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    setReady(true);
    return () => {
      document.documentElement.classList.remove('kids-mode');
    };
  }, []);

  // Compute visited set from progress
  const visitedIds = useMemo(() => {
    const set = new Set<string>();
    for (const stop of portalStops) {
      if (stop.progressKey && isCompleted(stop.progressKey)) {
        set.add(stop.progressKey);
      }
    }
    return set;
  }, [isCompleted]);

  const visitedCount = visitedIds.size;
  const totalLessons = lessonStopCount;
  const pct =
    totalLessons === 0 ? 0 : Math.round((visitedCount / totalLessons) * 100);

  const { mood, msg } = useMemo<{ mood: MomoMood; msg: string }>(() => {
    if (visitedCount === 0) {
      return {
        mood: 'excited',
        msg: "Welcome to your money adventure! Tap any stop on the map to start a lesson.",
      };
    }
    if (visitedCount < totalLessons) {
      return {
        mood: 'encouraging',
        msg: `Awesome! You finished ${visitedCount} of ${totalLessons} lessons. Keep going!`,
      };
    }
    return {
      mood: 'celebrating',
      msg: 'WOW! You completed every lesson! Time to earn your certificate!',
    };
  }, [visitedCount, totalLessons]);

  const handleStopTap = (stop: MapStop) => {
    if (stop.status === 'coming-soon') {
      // eslint-disable-next-line no-alert
      alert('Coming soon! 🚀');
      return;
    }
    if (stop.path === '#') return;
    navigate(stop.path);
  };

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

      <main style={{ flex: 1, padding: '32px 20px 60px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn show={ready}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <Momo mood={mood} msg={msg} size={64} />
            </div>
          </FadeIn>

          <FadeIn show={ready} delay={200}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginTop: 14,
                marginBottom: 28,
                flexWrap: 'wrap',
              }}
            >
              <h1
                style={{
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 700,
                  color: T.green,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Money Adventure
              </h1>
              <Pill color={T.green} bg={T.white} size="md">
                <span style={{ fontSize: 14 }}>
                  ⭐ <b className="num">{visitedCount}</b> / {totalLessons}
                  &nbsp;lessons
                </span>
              </Pill>
              {pct > 0 && (
                <div
                  style={{
                    flex: '1 0 200px',
                    height: 12,
                    background: T.white,
                    border: `2px solid ${T.green}`,
                    borderRadius: 999,
                    overflow: 'hidden',
                    maxWidth: 360,
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${T.coral}, ${T.yellow})`,
                      transition: 'width .6s ease',
                    }}
                  />
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn show={ready} delay={300}>
            <PracticeBanner
              navigate={navigate}
              weeklyEmoji={weekly.emoji}
              weeklyTitle={resolveText(weekly.title, 'medium')}
              weeklyStatus={weeklyStatus}
              pendingCount={pendingCount}
            />
          </FadeIn>

          <FadeIn show={ready} delay={400}>
            <BoardMap
              stops={portalStops}
              visitedIds={visitedIds}
              onStopTap={handleStopTap}
            />
          </FadeIn>

          <FadeIn show={ready} delay={600}>
            <div
              style={{
                textAlign: 'center',
                marginTop: 36,
                fontSize: 13,
                color: T.sub,
              }}
            >
              Tap any glowing stop to begin a lesson.{' '}
              <a
                href="?legacy=1"
                style={{
                  color: T.sub,
                  textDecoration: 'underline',
                  textDecorationStyle: 'dashed',
                }}
              >
                Switch to classic view
              </a>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface PracticeBannerProps {
  navigate: ReturnType<typeof useNavigate>;
  weeklyEmoji: string;
  weeklyTitle: string;
  weeklyStatus: 'accepted' | 'reflected' | undefined;
  pendingCount: number;
}

function PracticeBanner({
  navigate, weeklyEmoji, weeklyTitle, weeklyStatus, pendingCount,
}: PracticeBannerProps) {
  const ctaLabel =
    weeklyStatus === 'reflected' ? 'Done — see more' :
    weeklyStatus === 'accepted' ? 'How did it go?' :
    'Try this week';

  const statusBadge =
    weeklyStatus === 'reflected' ? { label: 'COMPLETE', bg: T.green, fg: T.white } :
    weeklyStatus === 'accepted' ? { label: 'IN PROGRESS', bg: T.yellow, fg: T.green } :
    { label: 'NEW', bg: T.coral, fg: T.white };

  return (
    <button
      type="button"
      onClick={() => navigate('/practice')}
      style={{
        width: '100%',
        margin: '0 0 24px',
        textAlign: 'left',
        background: T.white,
        border: `3px solid ${T.coral}`,
        borderRadius: 18,
        padding: '14px 18px',
        boxShadow: `4px 4px 0 rgba(45,155,110,.10)`,
        cursor: 'pointer',
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <div
        style={{
          width: 52, height: 52, flexShrink: 0,
          background: '#FFFBEB',
          border: `3px solid ${T.green}`,
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26,
        }}
      >
        {weeklyEmoji}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 2 }}>
          <span
            style={{
              fontSize: 10, fontWeight: 800, color: statusBadge.fg,
              background: statusBadge.bg, padding: '2px 8px', borderRadius: 999,
              letterSpacing: '.06em',
            }}
          >
            {statusBadge.label}
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.coral, letterSpacing: '.06em' }}>
            ⭐ WEEKLY CHALLENGE
          </span>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: T.green }}>
          {weeklyTitle}
        </div>
        <div style={{ fontSize: 12, color: T.sub, marginTop: 2 }}>
          {pendingCount > 0
            ? `Plus ${pendingCount} mission${pendingCount === 1 ? '' : 's'} waiting for your reflection`
            : 'Practice missions you can try in real life'}
        </div>
      </div>
      <span
        style={{
          background: T.green, color: T.white,
          padding: '6px 12px', borderRadius: 999,
          fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap',
        }}
      >
        {ctaLabel} →
      </span>
    </button>
  );
}
