/**
 * /certificate — final scene: printable personalized certificate.
 *
 * Eligibility: collect 3+ cards (configurable in CERT_MIN_CARDS).
 * Below that, shows a friendly "keep going" screen.
 *
 * Rank from cards earned:
 *   ≥10 → Master · 7-9 → Expert · 4-6 → Scholar · else Learner
 */

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { T, themes } from '../styles/kidsTokens';
import { cardData } from '../data/cards';
import { useEarnedCards } from '../lib/cards';
import { useProgress } from '../hooks/useProgress';
import { useChildContext } from '../hooks/useChildContext';
import Momo from '../components/kids/Momo';
import Pill from '../components/kids/Pill';
import Emo from '../components/kids/Emo';
import FadeIn from '../components/kids/FadeIn';

const CERT_MIN_CARDS = 3;

type Rank = 'Learner' | 'Scholar' | 'Expert' | 'Master';

function computeRank(cardsEarned: number): Rank {
  if (cardsEarned >= 10) return 'Master';
  if (cardsEarned >= 7) return 'Expert';
  if (cardsEarned >= 4) return 'Scholar';
  return 'Learner';
}

const RANK_COLOR: Record<Rank, string> = {
  Master: T.coral,
  Expert: T.lavender,
  Scholar: T.blue,
  Learner: T.green,
};

export default function CertificatePage() {
  const navigate = useNavigate();
  const { earned } = useEarnedCards();
  const { progress } = useProgress();
  const { child } = useChildContext();

  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

  const earnedCount = earned.size;
  const eligible = earnedCount >= CERT_MIN_CARDS;
  const rank = computeRank(earnedCount);
  const lessonsCount = progress?.lessonsCompleted?.length ?? 0;
  const totalXP = progress?.totalXP ?? 0;
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Auto-fill name from child context if available
  const displayName = useMemo(() => {
    if (nameInput.trim()) return nameInput.trim();
    if (child?.childName) return child.childName;
    return '';
  }, [nameInput, child]);

  const earnedCards = useMemo(
    () => cardData.filter((c) => earned.has(c.id)),
    [earned],
  );

  const handlePrint = () => window.print();

  if (!eligible) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: themes.certificate.bg,
        }}
      >
        <Header />
        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
            gap: 22,
            textAlign: 'center',
          }}
        >
          <Emo size={80}>🔒</Emo>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: T.green,
              margin: 0,
            }}
          >
            Certificate Locked
          </h1>
          <Momo
            mood="encouraging"
            msg={`Collect ${CERT_MIN_CARDS - earnedCount} more card${CERT_MIN_CARDS - earnedCount === 1 ? '' : 's'} to unlock your certificate!`}
            size={56}
          />
          <p style={{ color: T.text, fontSize: 14, fontWeight: 500 }}>
            You have <b style={{ color: T.green }}>{earnedCount}</b> of{' '}
            <b>{CERT_MIN_CARDS}</b> cards needed.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Pill bg={T.green} color={T.white} onClick={() => navigate('/')}>
              Back to map
            </Pill>
            <Pill bg={T.white} color={T.green} onClick={() => navigate('/cards')}>
              See my cards
            </Pill>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: themes.certificate.bg,
      }}
    >
      <Header />

      <main style={{ flex: 1, padding: '24px 20px 48px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Mascot greeting + name input */}
          <div
            className="no-print"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              marginBottom: 22,
            }}
          >
            <Momo
              mood="celebrating"
              msg="You did it! Type your name and print your certificate to keep!"
              size={56}
            />
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder={
                child?.childName ? `Default: ${child.childName}` : 'Type your name here!'
              }
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: T.green,
                border: `3px solid ${T.green}`,
                borderRadius: 16,
                padding: '10px 18px',
                width: '100%',
                maxWidth: 480,
                margin: '0 auto',
                textAlign: 'center',
                fontFamily: 'inherit',
                background: T.white,
              }}
            />
          </div>

          {/* The certificate itself */}
          <FadeIn show>
            <div
              id="certificate-print-area"
              style={{
                background: T.white,
                border: `6px solid ${T.green}`,
                borderRadius: 28,
                padding: '34px 36px 26px',
                position: 'relative',
                boxShadow: `8px 8px 0 rgba(45,155,110,.15)`,
              }}
            >
              {/* Decorative inner border */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 14,
                  border: `2px dashed ${T.yellow}`,
                  borderRadius: 18,
                  pointerEvents: 'none',
                }}
              />

              <div style={{ textAlign: 'center' }}>
                <Emo size={56}>🏆</Emo>
                <div
                  style={{
                    fontSize: 12,
                    color: T.sub,
                    letterSpacing: '0.32em',
                    marginTop: 8,
                    fontWeight: 600,
                  }}
                >
                  OFFICIAL CERTIFICATE
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: T.green,
                    marginTop: 4,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Business Brain
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: T.sub,
                    marginTop: 6,
                  }}
                >
                  This certifies that
                </div>
                <div
                  style={{
                    fontFamily: 'Fredoka, sans-serif',
                    fontSize: 30,
                    fontWeight: 700,
                    color: T.pink,
                    margin: '6px 0 4px',
                    minHeight: 40,
                  }}
                >
                  {displayName || '[Your Name]'}
                </div>
                <div style={{ fontSize: 14, color: T.text }}>
                  has completed the{' '}
                  <b>Business Learning</b> adventure
                </div>
                <div style={{ fontSize: 14, color: T.text, marginTop: 4 }}>
                  with{' '}
                  <b style={{ color: T.green }} className="num">
                    {earnedCount}
                  </b>{' '}
                  cards earned across{' '}
                  <b style={{ color: T.green }} className="num">
                    {lessonsCount}
                  </b>{' '}
                  lessons, achieving the rank of
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    background: RANK_COLOR[rank],
                    color: T.white,
                    borderRadius: 999,
                    padding: '8px 28px',
                    fontSize: 22,
                    fontWeight: 800,
                    margin: '12px 0',
                    border: `3px solid ${T.green}`,
                    boxShadow: `4px 4px 0 ${T.green}`,
                  }}
                >
                  {rank}
                </div>

                {/* Card badges */}
                {earnedCards.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 6,
                      marginTop: 8,
                      flexWrap: 'wrap',
                      maxWidth: 520,
                      margin: '8px auto 0',
                    }}
                  >
                    {earnedCards.slice(0, 12).map((c) => (
                      <div
                        key={c.id}
                        style={{
                          background: c.color,
                          border: `2px solid ${T.green}`,
                          borderRadius: 10,
                          padding: '4px 10px',
                          fontSize: 11,
                          fontWeight: 700,
                          color: T.green,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <Emo size={14}>{c.emoji}</Emo> {c.title}
                      </div>
                    ))}
                  </div>
                )}

                <div
                  style={{
                    fontSize: 12,
                    color: T.sub,
                    marginTop: 14,
                  }}
                >
                  {today}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 28,
                    marginTop: 18,
                  }}
                >
                  <SigBlock label="Momo the Mentor" />
                  <SigBlock label="MomTalk Biz Lab" />
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: T.sub,
                    marginTop: 14,
                    fontStyle: 'italic',
                  }}
                >
                  Total XP earned: {totalXP}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Action buttons */}
          <div
            className="no-print"
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 22,
            }}
          >
            <Pill bg={T.green} color={T.white} size="lg" onClick={handlePrint}>
              🖨️ Print Certificate
            </Pill>
            <Pill bg={T.yellow} color={T.green} onClick={() => navigate('/')}>
              ← Back to map
            </Pill>
            <Pill bg={T.white} color={T.green} onClick={() => navigate('/cards')}>
              See my cards
            </Pill>
          </div>
        </div>
      </main>

      <Footer />

      {/* Print-only CSS — hides everything but the certificate */}
      <style>{`
        @media print {
          html, body { background: white !important; }
          header, footer, .no-print { display: none !important; }
          #certificate-print-area {
            box-shadow: none !important;
            border-color: #2D9B6E !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}

function SigBlock({ label }: { label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: 100,
          borderBottom: `2px solid ${T.green}`,
          marginBottom: 2,
        }}
      />
      <div style={{ fontSize: 10, color: T.sub, fontWeight: 600 }}>
        {label}
      </div>
    </div>
  );
}
