/**
 * Real-world mission card.
 *
 * Three states drive the UI:
 *
 *   not-started:  pitch + steps + "I'll try it!" / "Maybe later"
 *   accepted:     same steps with checkboxes + "I tried it!" → opens reflection
 *   reflected:    summary card with answers + photo + "Try a new spin"
 *
 * The kid's check-marks and reflection are persisted to localStorage via
 * useMissions. No server sync yet — that's a follow-up.
 */

import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { T } from '../../styles/kidsTokens';
import { resolveText, type RealWorldMissionDef } from '../../data/lessons/types';
import { useMissions } from '../../lib/missions';
import { useChildContext } from '../../hooks/useChildContext';
import { useAdaptive } from '../../hooks/useAdaptive';
import { fileToCompressedDataUrl } from '../../lib/imageCompress';
import Emo from './Emo';
import Pill from './Pill';
import Momo from './Momo';

interface Props {
  mission: RealWorldMissionDef;
}

const LS_CHECKED_KEY = (id: string) => `bml.mission-checks.${id}.v1`;

function loadChecks(id: string): Record<number, boolean> {
  try {
    const raw = localStorage.getItem(LS_CHECKED_KEY(id));
    return raw ? (JSON.parse(raw) as Record<number, boolean>) : {};
  } catch {
    return {};
  }
}
function saveChecks(id: string, checks: Record<number, boolean>) {
  try {
    localStorage.setItem(LS_CHECKED_KEY(id), JSON.stringify(checks));
  } catch {
    // ignore
  }
}

export default function RealWorldMission({ mission }: Props) {
  const navigate = useNavigate();
  const { child } = useChildContext();
  const { difficultyLevel } = useAdaptive(child);
  const { getMission, acceptMission, reflectMission } = useMissions();
  const record = getMission(mission.id);
  const goPrint = () => navigate(`/practice/print/${encodeURIComponent(mission.id)}`);

  // Per-step checkboxes — used while accepted.
  const [checks, setChecks] = useState<Record<number, boolean>>(() =>
    loadChecks(mission.id),
  );
  const toggleCheck = (i: number) => {
    setChecks((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      saveChecks(mission.id, next);
      return next;
    });
  };

  // Reflection form state.
  const [showReflect, setShowReflect] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>(() =>
    record?.answers ?? {},
  );
  const [photo, setPhoto] = useState<string | undefined>(record?.photo);
  const [photoCaption, setPhotoCaption] = useState(record?.photoCaption ?? '');
  const [photoErr, setPhotoErr] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const titleStr = resolveText(mission.title, difficultyLevel);
  const pitchStr = resolveText(mission.pitch, difficultyLevel);
  const parentNoteStr = mission.parentNote
    ? resolveText(mission.parentNote, difficultyLevel)
    : null;

  const stepsRendered = useMemo(
    () =>
      mission.steps.map((s, i) => ({
        emoji: s.emoji,
        text: resolveText(s.text, difficultyLevel),
        idx: i,
      })),
    [mission.steps, difficultyLevel],
  );

  const allRequiredAnswered = mission.reflection.every(
    (f) => (answers[f.key] ?? '').toString().trim().length > 0,
  );

  const onPhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoErr(null);
    try {
      const url = await fileToCompressedDataUrl(file);
      setPhoto(url);
    } catch (err) {
      setPhotoErr(err instanceof Error ? err.message : 'Could not load photo');
    } finally {
      e.target.value = ''; // allow re-selecting same file
    }
  };

  const submitReflection = async () => {
    setSubmitting(true);
    try {
      reflectMission(mission.id, answers, photo, photoCaption || undefined);
    } finally {
      setSubmitting(false);
      setShowReflect(false);
    }
  };

  const status = record?.status;

  // ── reflected (done) state ──────────────────────────────────────────
  if (status === 'reflected' && record) {
    return (
      <section style={card(T.green)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <Emo size={36}>🏅</Emo>
          <div>
            <div style={{ fontSize: 12, color: T.sub, fontWeight: 700, letterSpacing: '.08em' }}>
              MISSION COMPLETE
            </div>
            <h3 style={{ margin: 0, fontSize: 22, color: T.green, fontWeight: 700 }}>
              {titleStr}
            </h3>
          </div>
        </div>

        <Momo
          mood="celebrating"
          name="Momo"
          size={56}
          msg={`Amazing! You actually did it. Real practice = real learning.`}
        />

        <div style={{ marginTop: 16, display: 'grid', gap: 10 }}>
          {mission.reflection.map((f) => {
            const v = record.answers[f.key];
            if (!v) return null;
            return (
              <div key={f.key} style={summaryRow}>
                <div style={summaryLabel}>{resolveText(f.prompt, difficultyLevel)}</div>
                <div style={summaryValue}>
                  {v}
                  {f.suffix ? <span style={{ color: T.sub, fontWeight: 500, marginLeft: 4 }}>{f.suffix}</span> : null}
                </div>
              </div>
            );
          })}
        </div>

        {record.photo && (
          <div style={{ marginTop: 16 }}>
            <img
              src={record.photo}
              alt={record.photoCaption || 'My mission photo'}
              style={{
                width: '100%',
                maxWidth: 360,
                borderRadius: 14,
                border: `3px solid ${T.green}`,
                boxShadow: `4px 4px 0 rgba(45,155,110,.15)`,
                display: 'block',
              }}
            />
            {record.photoCaption && (
              <div style={{ marginTop: 6, fontSize: 13, color: T.sub, fontStyle: 'italic' }}>
                "{record.photoCaption}"
              </div>
            )}
          </div>
        )}
      </section>
    );
  }

  // ── accepted state (with optional reflection form open) ─────────────
  if (status === 'accepted') {
    if (showReflect) {
      return (
        <section style={card(T.green)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <Emo size={36}>{mission.emoji}</Emo>
            <div>
              <div style={{ fontSize: 12, color: T.green, fontWeight: 700, letterSpacing: '.08em' }}>
                HOW DID IT GO?
              </div>
              <h3 style={{ margin: 0, fontSize: 22, color: T.green, fontWeight: 700 }}>
                Tell Momo what happened
              </h3>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {mission.reflection.map((f) => (
              <label key={f.key} style={{ display: 'block' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 6 }}>
                  {resolveText(f.prompt, difficultyLevel)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {f.type === 'longtext' ? (
                    <textarea
                      value={answers[f.key] ?? ''}
                      onChange={(e) =>
                        setAnswers({ ...answers, [f.key]: e.target.value })
                      }
                      placeholder={f.placeholder}
                      rows={3}
                      style={inputStyle}
                    />
                  ) : (
                    <input
                      type={f.type === 'number' ? 'number' : 'text'}
                      inputMode={f.type === 'number' ? 'decimal' : 'text'}
                      value={answers[f.key] ?? ''}
                      onChange={(e) =>
                        setAnswers({ ...answers, [f.key]: e.target.value })
                      }
                      placeholder={f.placeholder}
                      style={inputStyle}
                    />
                  )}
                  {f.suffix && (
                    <span style={{ color: T.sub, fontWeight: 600, fontSize: 14 }}>
                      {f.suffix}
                    </span>
                  )}
                </div>
              </label>
            ))}

            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 6 }}>
                📸 Add a photo (optional)
              </div>
              {photo ? (
                <div>
                  <img
                    src={photo}
                    alt="Preview"
                    style={{
                      width: '100%',
                      maxWidth: 280,
                      borderRadius: 12,
                      border: `2px solid ${T.green}`,
                      display: 'block',
                    }}
                  />
                  <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                    <Pill
                      size="sm"
                      bg={T.white}
                      color={T.green}
                      onClick={() => {
                        setPhoto(undefined);
                        setPhotoCaption('');
                      }}
                    >
                      Remove
                    </Pill>
                  </div>
                  <input
                    type="text"
                    placeholder="Add a caption"
                    value={photoCaption}
                    onChange={(e) => setPhotoCaption(e.target.value)}
                    style={{ ...inputStyle, marginTop: 8 }}
                  />
                </div>
              ) : (
                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 14px',
                    border: `2px dashed ${T.green}`,
                    borderRadius: 12,
                    color: T.green,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 13,
                    background: T.white,
                  }}
                >
                  <Emo size={16}>📷</Emo> Pick a photo
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={onPhotoChange}
                    style={{ display: 'none' }}
                  />
                </label>
              )}
              {photoErr && (
                <div style={{ color: T.coral, fontSize: 12, marginTop: 6 }}>{photoErr}</div>
              )}
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
              <Pill
                bg={T.green}
                color={T.white}
                size="lg"
                onClick={() => {
                  if (!allRequiredAnswered || submitting) return;
                  void submitReflection();
                }}
              >
                {allRequiredAnswered ? "✅ Save it" : 'Answer all questions first'}
              </Pill>
              <Pill
                bg={T.white}
                color={T.green}
                onClick={() => setShowReflect(false)}
              >
                Not yet
              </Pill>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section style={card(T.yellow)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <Emo size={36}>{mission.emoji}</Emo>
          <div>
            <div style={{ fontSize: 12, color: T.green, fontWeight: 700, letterSpacing: '.08em' }}>
              MISSION IN PROGRESS
            </div>
            <h3 style={{ margin: 0, fontSize: 22, color: T.green, fontWeight: 700 }}>
              {titleStr}
            </h3>
          </div>
        </div>
        <p style={{ color: T.text, margin: '0 0 12px', fontSize: 15 }}>{pitchStr}</p>
        <StepList
          steps={stepsRendered}
          checked={checks}
          onToggle={toggleCheck}
          interactive
        />
        <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
          <Pill
            bg={T.green}
            color={T.white}
            size="lg"
            onClick={() => setShowReflect(true)}
          >
            🎯 I tried it!
          </Pill>
          <Pill bg={T.white} color={T.green} onClick={goPrint}>
            🖨️ Print materials
          </Pill>
        </div>
      </section>
    );
  }

  // ── not-started state ───────────────────────────────────────────────
  return (
    <section style={card(T.coral)}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <Emo size={36}>{mission.emoji}</Emo>
        <div>
          <div style={{ fontSize: 12, color: T.coral, fontWeight: 700, letterSpacing: '.08em' }}>
            🚀 REAL-WORLD MISSION
          </div>
          <h3 style={{ margin: 0, fontSize: 22, color: T.green, fontWeight: 700 }}>
            {titleStr}
          </h3>
        </div>
      </div>
      <p style={{ color: T.text, margin: '0 0 12px', fontSize: 15 }}>{pitchStr}</p>

      <StepList steps={stepsRendered} checked={checks} onToggle={toggleCheck} />

      {parentNoteStr && (
        <div
          style={{
            background: '#FFF8E5',
            border: `2px solid ${T.yellow}`,
            borderRadius: 12,
            padding: '8px 12px',
            fontSize: 13,
            color: T.text,
            marginTop: 12,
          }}
        >
          <b style={{ color: T.green }}>👨‍👩‍👧 Parent note:</b> {parentNoteStr}
        </div>
      )}

      <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
        <Pill
          bg={T.green}
          color={T.white}
          size="lg"
          onClick={() => acceptMission(mission.id)}
        >
          🙋 I'll try it!
        </Pill>
        <Pill bg={T.white} color={T.green} onClick={goPrint}>
          🖨️ Print materials
        </Pill>
      </div>
    </section>
  );
}

/* ── helpers ──────────────────────────────────────────────────────── */

function card(accent: string): React.CSSProperties {
  return {
    background: T.white,
    border: `3px solid ${accent}`,
    borderRadius: 20,
    padding: '18px 20px',
    boxShadow: `5px 5px 0 rgba(45,155,110,.12)`,
    maxWidth: 640,
    margin: '0 auto',
  };
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: `2px solid ${T.green}`,
  borderRadius: 10,
  padding: '8px 12px',
  fontSize: 15,
  fontFamily: 'inherit',
  color: T.text,
  background: T.white,
  outline: 'none',
};

const summaryRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 12,
  padding: '8px 12px',
  background: '#F7FFF9',
  border: `2px solid ${T.green}`,
  borderRadius: 12,
};
const summaryLabel: React.CSSProperties = {
  fontSize: 13,
  color: T.sub,
  flex: 1,
};
const summaryValue: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: T.green,
};

interface StepListProps {
  steps: Array<{ emoji: string; text: string; idx: number }>;
  checked: Record<number, boolean>;
  onToggle: (i: number) => void;
  interactive?: boolean;
}

function StepList({ steps, checked, onToggle, interactive = false }: StepListProps) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
      {steps.map((s) => {
        const isChecked = !!checked[s.idx];
        return (
          <li key={s.idx}>
            <button
              type="button"
              onClick={() => (interactive ? onToggle(s.idx) : null)}
              disabled={!interactive}
              style={{
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 12px',
                background: isChecked ? '#E8FFF0' : T.white,
                border: `2px solid ${isChecked ? T.green : '#E5E5E5'}`,
                borderRadius: 12,
                cursor: interactive ? 'pointer' : 'default',
                fontFamily: 'inherit',
                fontSize: 14,
                color: T.text,
                transition: 'background 200ms ease, border 200ms ease',
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  border: `2px solid ${T.green}`,
                  background: isChecked ? T.green : T.white,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: T.white,
                  fontSize: 14,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {isChecked ? '✓' : ''}
              </span>
              <Emo size={22}>{s.emoji}</Emo>
              <span style={{ flex: 1, textDecoration: isChecked ? 'line-through' : 'none' }}>
                {s.text}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
