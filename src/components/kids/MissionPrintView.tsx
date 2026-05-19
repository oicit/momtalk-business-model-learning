/**
 * MissionPrintView — printable worksheet pack for a mission.
 *
 * Renders one US-letter-sized sheet per artifact: mission plan, tracker(s),
 * worksheet(s), sign(s), checklist(s). Each sheet starts on a new page so
 * the kid (or parent) can print just one or all of them.
 *
 * Hit the browser's Print dialog (Cmd/Ctrl+P or the "Print" button). The
 * @media print styles hide app chrome and force page breaks between sheets.
 */

import type {
  RealWorldMissionDef,
  PrintableTracker,
  PrintableWorksheet,
  PrintableSign,
  PrintableChecklist,
  AdaptiveText,
} from '../../data/lessons/types';
import { resolveText } from '../../data/lessons/types';
import { T } from '../../styles/kidsTokens';
import { useChildContext } from '../../hooks/useChildContext';
import { useAdaptive } from '../../hooks/useAdaptive';
import Pill from './Pill';

interface Props {
  mission: RealWorldMissionDef;
  /** Optional kid name shown in the header. */
  kidName?: string;
  /** Called when the user clicks "Back" in the on-screen toolbar. */
  onBack?: () => void;
}

export default function MissionPrintView({ mission, kidName, onBack }: Props) {
  const { child } = useChildContext();
  const { difficultyLevel } = useAdaptive(child);
  const displayName = kidName ?? child?.childName ?? '________________';
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const t = (x: AdaptiveText) => resolveText(x, difficultyLevel);
  const print = () => window.print();

  const p = mission.printables ?? {};

  return (
    <div style={{ background: '#F4F4F0', minHeight: '100vh' }}>
      {/* On-screen toolbar — hidden in print */}
      <div
        className="no-print"
        style={{
          position: 'sticky',
          top: 0,
          background: T.white,
          borderBottom: `2px solid ${T.green}`,
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          zIndex: 10,
          flexWrap: 'wrap',
        }}
      >
        {onBack && (
          <Pill size="sm" bg={T.white} color={T.green} onClick={onBack}>
            ← Back
          </Pill>
        )}
        <div style={{ fontWeight: 700, color: T.green, flex: 1 }}>
          {mission.emoji} {t(mission.title)} — Print pack
        </div>
        <Pill size="md" bg={T.green} color={T.white} onClick={print}>
          🖨️ Print all
        </Pill>
      </div>

      <div className="print-pages" style={{ padding: '20px 8px' }}>
        {/* 1) Mission plan / todo list */}
        <Sheet>
          <SheetHeader
            kicker="MISSION PLAN"
            title={`${mission.emoji} ${t(mission.title)}`}
            name={displayName}
            date={today}
          />
          <p style={pitchStyle}>{t(mission.pitch)}</p>

          <h2 style={h2Style}>✅ My To-Do List</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'grid', gap: 8 }}>
            {mission.steps.map((s, i) => (
              <li key={i} style={todoRow}>
                <span style={checkbox} />
                <span style={{ fontSize: 18, marginRight: 6 }}>{s.emoji}</span>
                <span style={{ fontSize: 15, flex: 1 }}>{t(s.text)}</span>
              </li>
            ))}
          </ol>

          <h2 style={h2Style}>🧠 Think about while you do it</h2>
          <ul style={{ paddingLeft: 18, margin: '0 0 18px', display: 'grid', gap: 6 }}>
            {mission.reflection.map((f, i) => (
              <li key={i} style={{ fontSize: 13, color: '#333' }}>
                {t(f.prompt)}
              </li>
            ))}
          </ul>

          {mission.parentNote && (
            <div style={parentNoteStyle}>
              <b style={{ color: T.green }}>👨‍👩‍👧 Parent note:</b> {t(mission.parentNote)}
            </div>
          )}
        </Sheet>

        {/* 2) Trackers */}
        {(p.trackers ?? []).map((tracker, i) => (
          <TrackerSheet key={`tr-${i}`} tracker={tracker} name={displayName} date={today} mission={mission} t={t} />
        ))}

        {/* 3) Worksheets */}
        {(p.worksheets ?? []).map((ws, i) => (
          <WorksheetSheet key={`ws-${i}`} worksheet={ws} name={displayName} date={today} mission={mission} t={t} />
        ))}

        {/* 4) Signs/posters */}
        {(p.signs ?? []).map((s, i) => (
          <SignSheet key={`sn-${i}`} sign={s} />
        ))}

        {/* 5) Extra checklists */}
        {(p.checklists ?? []).map((cl, i) => (
          <ChecklistSheet key={`cl-${i}`} checklist={cl} name={displayName} date={today} mission={mission} t={t} />
        ))}
      </div>

      <style>{`
        @page {
          size: letter;
          margin: 0.6in;
        }
        @media print {
          html, body { background: white !important; }
          .no-print { display: none !important; }
          .print-pages { padding: 0 !important; }
          .print-sheet {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            page-break-after: always;
            min-height: auto !important;
          }
          .print-sheet:last-child { page-break-after: auto; }
        }
      `}</style>
    </div>
  );
}

/* ── sheet primitives ────────────────────────────────────────────── */

function Sheet({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="print-sheet"
      style={{
        background: T.white,
        margin: '0 auto 22px',
        padding: '28px 32px 34px',
        maxWidth: 740,
        minHeight: 980,
        boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        borderRadius: 8,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </section>
  );
}

interface SheetHeaderProps {
  kicker: string;
  title: string;
  name: string;
  date: string;
  accent?: string;
}

function SheetHeader({ kicker, title, name, date, accent = T.green }: SheetHeaderProps) {
  return (
    <header
      style={{
        borderBottom: `2px solid ${accent}`,
        paddingBottom: 12,
        marginBottom: 16,
      }}
    >
      <div style={{ fontSize: 11, letterSpacing: '.18em', color: accent, fontWeight: 800 }}>
        {kicker} · BUSINESS MODEL LEARNING
      </div>
      <h1 style={{ fontSize: 24, fontWeight: 800, margin: '4px 0 8px', color: '#1a1a1a' }}>
        {title}
      </h1>
      <div style={{ display: 'flex', gap: 18, fontSize: 12, color: '#555', flexWrap: 'wrap' }}>
        <div>Name: <b style={{ color: '#1a1a1a' }}>{name}</b></div>
        <div>Date: <b style={{ color: '#1a1a1a' }}>{date}</b></div>
      </div>
    </header>
  );
}

/* ── tracker sheet ──────────────────────────────────────────────── */

interface TrackerSheetProps {
  tracker: PrintableTracker;
  name: string;
  date: string;
  mission: RealWorldMissionDef;
  t: (x: AdaptiveText) => string;
}

function TrackerSheet({ tracker, name, date, mission, t }: TrackerSheetProps) {
  return (
    <Sheet>
      <SheetHeader
        kicker="TRACKING SHEET"
        title={`${mission.emoji} ${tracker.title}`}
        name={name}
        date={date}
      />
      {tracker.note && (
        <p style={{ fontSize: 13, color: '#444', margin: '0 0 14px' }}>{tracker.note}</p>
      )}
      <p style={{ fontSize: 11, color: '#888', margin: '0 0 6px' }}>
        Mission: {t(mission.title)}
      </p>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>#</th>
            {tracker.columns.map((c) => (
              <th key={c} style={thStyle}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: tracker.rows }).map((_, i) => (
            <tr key={i}>
              <td style={tdNumStyle}>{i + 1}</td>
              {tracker.columns.map((c) => (
                <td key={c} style={tdStyle}>&nbsp;</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 16, fontSize: 12, color: '#666' }}>
        Total at the end: ___________ &nbsp;&nbsp; / &nbsp;&nbsp; What was the busiest moment? ___________
      </div>
    </Sheet>
  );
}

/* ── worksheet sheet ──────────────────────────────────────────── */

interface WorksheetSheetProps {
  worksheet: PrintableWorksheet;
  name: string;
  date: string;
  mission: RealWorldMissionDef;
  t: (x: AdaptiveText) => string;
}

function WorksheetSheet({ worksheet, name, date, mission, t }: WorksheetSheetProps) {
  return (
    <Sheet>
      <SheetHeader
        kicker="WORKSHEET"
        title={`${mission.emoji} ${worksheet.title}`}
        name={name}
        date={date}
      />
      <p style={{ fontSize: 11, color: '#888', margin: '0 0 14px' }}>
        Mission: {t(mission.title)}
      </p>
      <div style={{ display: 'grid', gap: 18 }}>
        {worksheet.blocks.map((b, i) => (
          <div key={i}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: b.hint ? 2 : 6 }}>
              {b.label}
            </div>
            {b.hint && (
              <div style={{ fontSize: 11, color: '#666', marginBottom: 6, fontStyle: 'italic' }}>
                {b.hint}
              </div>
            )}
            {b.equation ? (
              <div style={equationStyle}>{b.equation}</div>
            ) : (
              <>
                {Array.from({ length: b.lines ?? 1 }).map((_, j) => (
                  <div
                    key={j}
                    style={{
                      borderBottom: '1.5px solid #555',
                      height: 28,
                      marginBottom: 4,
                      position: 'relative',
                    }}
                  >
                    {b.suffix && j === 0 && (
                      <span
                        style={{
                          position: 'absolute',
                          right: 0,
                          bottom: 6,
                          fontSize: 12,
                          color: '#888',
                          paddingLeft: 6,
                          background: T.white,
                        }}
                      >
                        {b.suffix}
                      </span>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </Sheet>
  );
}

/* ── sign sheet ──────────────────────────────────────────── */

function SignSheet({ sign }: { sign: PrintableSign }) {
  const accent = sign.accent ?? T.yellow;
  return (
    <Sheet>
      <div
        style={{
          height: 920,
          border: `8px solid ${accent}`,
          borderRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
          textAlign: 'center',
          background: T.white,
          position: 'relative',
        }}
      >
        {/* corner decorations */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              [['top', 'top', 'bottom', 'bottom'][i] as 'top' | 'bottom']: 20,
              [['left', 'right', 'left', 'right'][i] as 'left' | 'right']: 20,
              fontSize: 64,
              opacity: 0.18,
            }}
          >
            {sign.emoji ?? '⭐'}
          </div>
        ))}

        {sign.emoji && (
          <div style={{ fontSize: 110, marginBottom: 8, lineHeight: 1 }}>{sign.emoji}</div>
        )}
        <h1
          style={{
            fontSize: 96,
            fontWeight: 900,
            margin: 0,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          {sign.headline}
        </h1>
        {sign.subline && (
          <div
            style={{
              fontSize: 28,
              marginTop: 18,
              color: '#444',
              fontStyle: 'italic',
            }}
          >
            {sign.subline}
          </div>
        )}
        {sign.pricePlaceholder && (
          <div
            style={{
              marginTop: 40,
              padding: '14px 32px',
              background: accent,
              borderRadius: 22,
              fontSize: 54,
              fontWeight: 800,
              color: '#1a1a1a',
              border: '3px solid #1a1a1a',
            }}
          >
            {sign.pricePlaceholder}
          </div>
        )}
      </div>
    </Sheet>
  );
}

/* ── checklist sheet ──────────────────────────────────────── */

interface ChecklistSheetProps {
  checklist: PrintableChecklist;
  name: string;
  date: string;
  mission: RealWorldMissionDef;
  t: (x: AdaptiveText) => string;
}

function ChecklistSheet({ checklist, name, date, mission, t }: ChecklistSheetProps) {
  return (
    <Sheet>
      <SheetHeader
        kicker="CHECKLIST"
        title={`${mission.emoji} ${checklist.title}`}
        name={name}
        date={date}
      />
      <p style={{ fontSize: 11, color: '#888', margin: '0 0 14px' }}>
        Mission: {t(mission.title)}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
        {checklist.items.map((it, i) => (
          <li key={i} style={todoRow}>
            <span style={checkbox} />
            <span style={{ fontSize: 16, flex: 1 }}>{it}</span>
          </li>
        ))}
      </ul>
      {checklist.note && (
        <div style={{ marginTop: 18, fontSize: 12, color: '#666', fontStyle: 'italic' }}>
          {checklist.note}
        </div>
      )}
    </Sheet>
  );
}

/* ── shared styles ────────────────────────────────────────── */

const h2Style: React.CSSProperties = {
  fontSize: 16, fontWeight: 800, color: T.green,
  margin: '14px 0 10px', letterSpacing: '0.02em',
};
const pitchStyle: React.CSSProperties = {
  fontSize: 13, color: '#444', margin: '0 0 18px', lineHeight: 1.45,
};
const parentNoteStyle: React.CSSProperties = {
  background: '#FFF8E5', border: '1.5px dashed #C9A33A',
  borderRadius: 8, padding: '10px 14px', fontSize: 12, color: '#3a3a3a',
};
const todoRow: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 10,
  padding: '6px 0', borderBottom: '1px dotted #ccc',
};
const checkbox: React.CSSProperties = {
  width: 18, height: 18, border: '2px solid #1a1a1a', borderRadius: 4,
  flexShrink: 0, display: 'inline-block',
};

const tableStyle: React.CSSProperties = {
  width: '100%', borderCollapse: 'collapse', fontSize: 13, marginTop: 6,
};
const thStyle: React.CSSProperties = {
  border: '1.5px solid #1a1a1a', padding: '8px 10px',
  textAlign: 'left', fontWeight: 800, background: '#F2F2F2', fontSize: 12,
};
const tdStyle: React.CSSProperties = {
  border: '1px solid #888', padding: '8px 10px', height: 28,
};
const tdNumStyle: React.CSSProperties = {
  ...tdStyle, width: 28, textAlign: 'center', color: '#888', fontSize: 11,
};
const equationStyle: React.CSSProperties = {
  fontSize: 28, fontFamily: 'Space Mono, monospace', letterSpacing: '0.04em',
  padding: '14px 10px', background: '#FAFAF6', border: '1.5px dashed #aaa',
  borderRadius: 6, textAlign: 'center',
};
