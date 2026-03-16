import { useState, useEffect, useRef } from "react";

const LEVELS = [
  { id: 0, title: "Welcome", icon: "🚀", color: "#FF6B35" },
  { id: 1, title: "What's a Garage Sale?", icon: "🏠", color: "#4ECDC4" },
  { id: 2, title: "Business Brain", icon: "🧠", color: "#FFE66D" },
  { id: 3, title: "Treasure Hunt", icon: "🔍", color: "#A78BFA" },
  { id: 4, title: "Price It Right", icon: "💰", color: "#34D399" },
  { id: 5, title: "Brand Boss", icon: "🎨", color: "#F472B6" },
  { id: 6, title: "Marketing Magic", icon: "📣", color: "#FB923C" },
  { id: 7, title: "Sale Day Plan", icon: "📋", color: "#60A5FA" },
  { id: 8, title: "Customer Pro", icon: "🤝", color: "#C084FC" },
  { id: 9, title: "Final Quiz", icon: "🏆", color: "#FBBF24" },
  { id: 10, title: "Your Plan!", icon: "🎉", color: "#FF6B35" },
];

const XP_PER_LESSON = 50;
const XP_PER_QUIZ = 100;
const STREAK_BONUS = 25;

// ─── Confetti ───
function Confetti({ active }) {
  if (!active) return null;
  const pieces = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1.5 + Math.random() * 1.5,
    color: ["#FF6B35", "#4ECDC4", "#FFE66D", "#A78BFA", "#F472B6", "#34D399"][i % 6],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      {pieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.size > 10 ? "50%" : "2px",
            transform: `rotate(${p.rotation}deg)`,
            animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Progress Ring ───
function ProgressRing({ progress, size = 48, stroke = 4, color = "#FF6B35" }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - progress * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1a1a2e" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
    </svg>
  );
}

// ─── Animated Character ───
function Buddy({ mood = "happy", size = 80 }) {
  const faces = { happy: "😄", thinking: "🤔", excited: "🤩", proud: "😎", wave: "👋" };
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, #FF6B35, #FFE66D)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.5, boxShadow: "0 4px 20px rgba(255,107,53,0.3)",
      animation: "buddyBounce 2s ease-in-out infinite",
      flexShrink: 0,
    }}>
      {faces[mood] || "😄"}
    </div>
  );
}

// ─── Speech Bubble ───
function SpeechBubble({ children, color = "#2a2a4a" }) {
  return (
    <div style={{
      background: color, borderRadius: 16, padding: "14px 18px",
      color: "#fff", fontSize: 15, lineHeight: 1.6, position: "relative",
      maxWidth: 500, boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      animation: "fadeSlideUp 0.4s ease",
    }}>
      {children}
      <div style={{
        position: "absolute", left: -8, top: 16, width: 0, height: 0,
        borderTop: "8px solid transparent", borderBottom: "8px solid transparent",
        borderRight: `10px solid ${color}`,
      }} />
    </div>
  );
}

// ─── Quiz Component ───
function QuizCard({ question, options, correctIndex, explanation, onAnswer, answered, selectedIdx }) {
  return (
    <div style={{
      background: "#1e1e3a", borderRadius: 20, padding: 24,
      border: "2px solid #2a2a5a", animation: "fadeSlideUp 0.4s ease",
    }}>
      <p style={{ color: "#FFE66D", fontWeight: 700, fontSize: 17, margin: "0 0 18px", lineHeight: 1.5 }}>
        {question}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {options.map((opt, i) => {
          let bg = "#252550";
          let border = "2px solid #3a3a6a";
          let emoji = "";
          if (answered) {
            if (i === correctIndex) { bg = "#065F46"; border = "2px solid #34D399"; emoji = " ✅"; }
            else if (i === selectedIdx && i !== correctIndex) { bg = "#7F1D1D"; border = "2px solid #F87171"; emoji = " ❌"; }
          }
          return (
            <button key={i} onClick={() => !answered && onAnswer(i)} style={{
              background: bg, border, borderRadius: 14, padding: "14px 18px",
              color: "#fff", fontSize: 15, textAlign: "left", cursor: answered ? "default" : "pointer",
              transition: "all 0.2s", fontFamily: "inherit", lineHeight: 1.4,
              transform: !answered ? "scale(1)" : undefined,
            }}
              onMouseEnter={(e) => { if (!answered) { e.target.style.background = "#3a3a6a"; e.target.style.transform = "scale(1.02)"; } }}
              onMouseLeave={(e) => { if (!answered) { e.target.style.background = bg; e.target.style.transform = "scale(1)"; } }}
            >
              <span style={{ fontWeight: 600, marginRight: 8, color: "#A78BFA" }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}{emoji}
            </button>
          );
        })}
      </div>
      {answered && (
        <div style={{
          marginTop: 16, padding: "14px 16px", borderRadius: 12,
          background: selectedIdx === correctIndex ? "#064E3B" : "#7F1D1D20",
          border: `1px solid ${selectedIdx === correctIndex ? "#34D39950" : "#F8717150"}`,
          animation: "fadeSlideUp 0.3s ease",
        }}>
          <p style={{ color: "#E5E7EB", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
            {selectedIdx === correctIndex ? "🎉 " : "💡 "}{explanation}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Drag & Drop Sorting ───
function SortChallenge({ title, items, correctOrder, onComplete, completed }) {
  const [order, setOrder] = useState(items);
  const [dragIdx, setDragIdx] = useState(null);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleDragStart = (i) => setDragIdx(i);
  const handleDrop = (i) => {
    if (dragIdx === null) return;
    const newOrder = [...order];
    const [item] = newOrder.splice(dragIdx, 1);
    newOrder.splice(i, 0, item);
    setOrder(newOrder);
    setDragIdx(null);
  };

  const moveItem = (idx, dir) => {
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= order.length) return;
    const newOrder = [...order];
    [newOrder[idx], newOrder[newIdx]] = [newOrder[newIdx], newOrder[idx]];
    setOrder(newOrder);
  };

  const check = () => {
    const isCorrect = JSON.stringify(order) === JSON.stringify(correctOrder);
    setCorrect(isCorrect);
    setChecked(true);
    if (isCorrect) onComplete();
  };

  return (
    <div style={{
      background: "#1e1e3a", borderRadius: 20, padding: 24,
      border: "2px solid #2a2a5a", animation: "fadeSlideUp 0.4s ease",
    }}>
      <p style={{ color: "#FFE66D", fontWeight: 700, fontSize: 16, margin: "0 0 6px" }}>{title}</p>
      <p style={{ color: "#9CA3AF", fontSize: 13, margin: "0 0 16px" }}>Tap arrows or drag to reorder!</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {order.map((item, i) => (
          <div
            key={item}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(i)}
            style={{
              background: checked ? (correctOrder[i] === item ? "#065F46" : "#7F1D1D") : "#252550",
              border: `2px solid ${checked ? (correctOrder[i] === item ? "#34D399" : "#F87171") : "#3a3a6a"}`,
              borderRadius: 12, padding: "12px 14px",
              color: "#fff", fontSize: 15, display: "flex", alignItems: "center", gap: 10,
              cursor: completed ? "default" : "grab",
            }}
          >
            <span style={{ color: "#A78BFA", fontWeight: 700, fontSize: 13, minWidth: 20 }}>{i + 1}.</span>
            <span style={{ flex: 1 }}>{item}</span>
            {!completed && (
              <span style={{ display: "flex", gap: 4 }}>
                <button onClick={() => moveItem(i, -1)} style={{ background: "none", border: "none", color: "#9CA3AF", cursor: "pointer", fontSize: 16, padding: 2 }}>▲</button>
                <button onClick={() => moveItem(i, 1)} style={{ background: "none", border: "none", color: "#9CA3AF", cursor: "pointer", fontSize: 16, padding: 2 }}>▼</button>
              </span>
            )}
          </div>
        ))}
      </div>
      {!completed && (
        <button onClick={check} style={{
          marginTop: 16, padding: "12px 28px", borderRadius: 12,
          background: "linear-gradient(135deg, #A78BFA, #7C3AED)",
          color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: 15,
        }}>
          Check Order!
        </button>
      )}
      {checked && !correct && !completed && (
        <p style={{ color: "#F87171", fontSize: 14, marginTop: 10 }}>Not quite! Try rearranging and check again 💪</p>
      )}
    </div>
  );
}

// ─── Interactive Pricing Game ───
function PricingGame({ items, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const item = items[current];

  const handlePick = (price) => {
    setSelected(price);
    const isCorrect = price === item.best;
    if (isCorrect) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 >= items.length) {
        setDone(true);
        onComplete();
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 1200);
  };

  if (done) return (
    <div style={{ background: "#1e1e3a", borderRadius: 20, padding: 24, textAlign: "center", border: "2px solid #34D399" }}>
      <p style={{ fontSize: 40, margin: 0 }}>🎯</p>
      <p style={{ color: "#34D399", fontWeight: 700, fontSize: 20, margin: "8px 0" }}>
        You scored {score}/{items.length}!
      </p>
      <p style={{ color: "#9CA3AF", fontSize: 14 }}>Great pricing instincts!</p>
    </div>
  );

  return (
    <div style={{
      background: "#1e1e3a", borderRadius: 20, padding: 24,
      border: "2px solid #2a2a5a", animation: "fadeSlideUp 0.3s ease",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ color: "#9CA3AF", fontSize: 13 }}>Item {current + 1} of {items.length}</span>
        <span style={{ color: "#34D399", fontSize: 13, fontWeight: 600 }}>Score: {score}</span>
      </div>
      <div style={{ textAlign: "center", fontSize: 48, margin: "8px 0" }}>{item.emoji}</div>
      <p style={{ color: "#fff", fontWeight: 700, fontSize: 17, textAlign: "center", margin: "8px 0" }}>{item.name}</p>
      <p style={{ color: "#9CA3AF", fontSize: 13, textAlign: "center", margin: "0 0 16px" }}>{item.condition}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {item.prices.map((price) => {
          let bg = "#252550";
          if (selected !== null) {
            if (price === item.best) bg = "#065F46";
            else if (price === selected) bg = "#7F1D1D";
          }
          return (
            <button key={price} onClick={() => selected === null && handlePick(price)} style={{
              background: bg, border: "2px solid #3a3a6a", borderRadius: 14,
              padding: "14px 8px", color: "#fff", fontWeight: 700, fontSize: 18,
              cursor: selected ? "default" : "pointer", fontFamily: "inherit",
              transition: "all 0.2s",
            }}>
              ${price}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <p style={{
          color: selected === item.best ? "#34D399" : "#F87171",
          fontSize: 14, textAlign: "center", marginTop: 12, animation: "fadeSlideUp 0.3s ease",
        }}>
          {selected === item.best ? "Perfect pricing! 🎉" : `The sweet spot is $${item.best} — ${item.tip}`}
        </p>
      )}
    </div>
  );
}

// ─── Sign Designer ───
function SignDesigner({ onComplete }) {
  const [saleName, setSaleName] = useState("");
  const [date, setDate] = useState("");
  const [tagline, setTagline] = useState("");
  const [colorScheme, setColorScheme] = useState(0);
  const [generated, setGenerated] = useState(false);

  const schemes = [
    { bg: "linear-gradient(135deg, #FF6B35, #FFE66D)", text: "#1a1a2e", accent: "#FF6B35" },
    { bg: "linear-gradient(135deg, #4ECDC4, #44CF6C)", text: "#1a1a2e", accent: "#4ECDC4" },
    { bg: "linear-gradient(135deg, #A78BFA, #F472B6)", text: "#fff", accent: "#A78BFA" },
    { bg: "linear-gradient(135deg, #60A5FA, #34D399)", text: "#1a1a2e", accent: "#60A5FA" },
  ];

  const generate = () => {
    if (saleName && date) { setGenerated(true); onComplete({ saleName, date, tagline, colorScheme }); }
  };

  const scheme = schemes[colorScheme];

  return (
    <div style={{ animation: "fadeSlideUp 0.4s ease" }}>
      {!generated ? (
        <div style={{
          background: "#1e1e3a", borderRadius: 20, padding: 24,
          border: "2px solid #2a2a5a",
        }}>
          <p style={{ color: "#F472B6", fontWeight: 700, fontSize: 17, margin: "0 0 16px" }}>
            🎨 Design Your Sale Sign!
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input value={saleName} onChange={(e) => setSaleName(e.target.value)}
              placeholder="Your sale name (e.g., 'Max's Mega Sale')"
              style={{
                background: "#252550", border: "2px solid #3a3a6a", borderRadius: 12,
                padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none",
                fontFamily: "inherit",
              }}
            />
            <input value={date} onChange={(e) => setDate(e.target.value)}
              placeholder="Date & Time (e.g., 'Saturday, April 5 • 9am-2pm')"
              style={{
                background: "#252550", border: "2px solid #3a3a6a", borderRadius: 12,
                padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none",
                fontFamily: "inherit",
              }}
            />
            <input value={tagline} onChange={(e) => setTagline(e.target.value)}
              placeholder="Fun tagline (e.g., 'Treasures at Tiny Prices!')"
              style={{
                background: "#252550", border: "2px solid #3a3a6a", borderRadius: 12,
                padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none",
                fontFamily: "inherit",
              }}
            />
            <div>
              <p style={{ color: "#9CA3AF", fontSize: 13, margin: "0 0 8px" }}>Pick your colors:</p>
              <div style={{ display: "flex", gap: 10 }}>
                {schemes.map((s, i) => (
                  <button key={i} onClick={() => setColorScheme(i)} style={{
                    width: 44, height: 44, borderRadius: 12, background: s.bg,
                    border: colorScheme === i ? "3px solid #fff" : "3px solid transparent",
                    cursor: "pointer", transition: "all 0.2s",
                  }} />
                ))}
              </div>
            </div>
            <button onClick={generate} disabled={!saleName || !date} style={{
              marginTop: 8, padding: "14px 28px", borderRadius: 14,
              background: saleName && date ? "linear-gradient(135deg, #F472B6, #A78BFA)" : "#3a3a6a",
              color: "#fff", fontWeight: 700, border: "none", cursor: saleName && date ? "pointer" : "default",
              fontSize: 16, fontFamily: "inherit",
            }}>
              Generate My Sign! ✨
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{
            background: scheme.bg, borderRadius: 20, padding: 32,
            textAlign: "center", position: "relative", overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            <div style={{
              position: "absolute", top: -30, right: -30, width: 120, height: 120,
              borderRadius: "50%", background: "rgba(255,255,255,0.15)",
            }} />
            <div style={{
              position: "absolute", bottom: -20, left: -20, width: 80, height: 80,
              borderRadius: "50%", background: "rgba(255,255,255,0.1)",
            }} />
            <p style={{ fontSize: 22, margin: "0 0 4px", fontWeight: 400, color: scheme.text, opacity: 0.7 }}>⭐ GARAGE SALE ⭐</p>
            <p style={{
              fontSize: 36, fontWeight: 900, color: scheme.text, margin: "8px 0",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              fontFamily: "'Fredoka', 'Baloo 2', sans-serif",
            }}>
              {saleName}
            </p>
            {tagline && <p style={{ fontSize: 18, color: scheme.text, opacity: 0.8, margin: "4px 0 16px", fontStyle: "italic" }}>"{tagline}"</p>}
            <div style={{
              background: "rgba(255,255,255,0.25)", borderRadius: 12,
              padding: "10px 20px", display: "inline-block",
            }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: scheme.text, margin: 0 }}>📅 {date}</p>
            </div>
            <p style={{ fontSize: 14, color: scheme.text, opacity: 0.6, marginTop: 16, marginBottom: 0 }}>
              Something for everyone! Come find your next treasure! 🎁
            </p>
          </div>
          <p style={{ color: "#34D399", fontSize: 14, textAlign: "center" }}>
            ✅ Your sign is ready! Screenshot it or recreate it on poster board!
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Checklist Builder ───
function ChecklistBuilder({ onComplete }) {
  const tasks = [
    { cat: "1 Week Before", items: ["Get permission from parents/guardians", "Pick your sale date (Saturday mornings are best!)", "Start collecting items to sell", "Make your price list", "Design your signs and flyers"] },
    { cat: "2 Days Before", items: ["Sort items into categories", "Clean and test everything", "Stick price tags on items", "Put up signs around the neighborhood", "Get change ($20 in small bills & coins)"] },
    { cat: "Sale Day!", items: ["Set up tables and blankets early", "Arrange items neatly by category", "Put best items where people walk by first", "Have a money box and calculator ready", "Smile and greet every customer! 😊"] },
  ];

  const [checked, setChecked] = useState({});
  const total = tasks.reduce((a, c) => a + c.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  const toggle = (key) => {
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    if (Object.values(next).filter(Boolean).length === total) onComplete();
  };

  return (
    <div style={{
      background: "#1e1e3a", borderRadius: 20, padding: 24,
      border: "2px solid #2a2a5a", animation: "fadeSlideUp 0.4s ease",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <p style={{ color: "#60A5FA", fontWeight: 700, fontSize: 17, margin: 0 }}>📋 Your Garage Sale Checklist</p>
        <span style={{ color: "#34D399", fontSize: 13, fontWeight: 600 }}>{done}/{total}</span>
      </div>
      <div style={{
        height: 6, background: "#252550", borderRadius: 3, marginBottom: 20, overflow: "hidden",
      }}>
        <div style={{
          height: "100%", width: `${(done / total) * 100}%`,
          background: "linear-gradient(90deg, #34D399, #4ECDC4)",
          borderRadius: 3, transition: "width 0.4s ease",
        }} />
      </div>
      {tasks.map((cat) => (
        <div key={cat.cat} style={{ marginBottom: 16 }}>
          <p style={{ color: "#FFE66D", fontWeight: 700, fontSize: 14, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 1 }}>
            {cat.cat}
          </p>
          {cat.items.map((item) => {
            const key = `${cat.cat}-${item}`;
            return (
              <button key={key} onClick={() => toggle(key)} style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%",
                background: checked[key] ? "#065F4620" : "transparent",
                border: "none", padding: "8px 10px", borderRadius: 8, cursor: "pointer",
                textAlign: "left", transition: "all 0.2s",
              }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                  border: checked[key] ? "2px solid #34D399" : "2px solid #3a3a6a",
                  background: checked[key] ? "#34D399" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, color: "#fff", transition: "all 0.2s",
                }}>
                  {checked[key] && "✓"}
                </span>
                <span style={{
                  color: checked[key] ? "#9CA3AF" : "#E5E7EB", fontSize: 14,
                  textDecoration: checked[key] ? "line-through" : "none",
                  transition: "all 0.2s",
                }}>
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// ─── Lesson Content Data ───
function getLessonContent(levelId) {
  const lessons = {
    0: {
      type: "intro",
      buddy: "wave",
      messages: [
        "Hey there, future entrepreneur! 👋 I'm **Penny** — your business buddy!",
        "We're going on an adventure to set up your very own **GARAGE SALE**! 🏠✨",
        "You'll learn how REAL businesses work, price things like a pro, create awesome signs, and make your first money!",
        "Every lesson earns you **XP** and **coins**. Complete quizzes to unlock the next level. Ready to start your business journey? Let's go! 🚀",
      ],
    },
    1: {
      type: "lesson",
      buddy: "happy",
      messages: [
        "A garage sale is when you sell things you don't need anymore — right from your driveway or yard! It's like having your **own mini store** for a day! 🏪",
        "Here's the cool part: garage sales are a **real business**! You have products (your stuff), customers (neighbors & visitors), and revenue (the money you earn)! 💰",
        "**Fun Fact:** Americans hold over **165,000 garage sales every week!** That's a LOT of treasure being discovered! 🗺️",
        "The best part? YOU are the boss. You decide what to sell, how much to charge, and how to get people to show up. That's called being an **entrepreneur**!",
      ],
      quiz: [
        {
          question: "What makes a garage sale a REAL business?",
          options: ["It happens outside", "You have products, customers, and earn money", "You need a business license", "Your parents run it"],
          correctIndex: 1,
          explanation: "A business has products or services, customers, and earns revenue — your garage sale has all three!",
        },
        {
          question: "About how many garage sales happen in the US every week?",
          options: ["1,000", "50,000", "165,000", "1 million"],
          correctIndex: 2,
          explanation: "Over 165,000! That's a huge marketplace — and soon you'll be part of it!",
        },
      ],
    },
    2: {
      type: "lesson",
      buddy: "thinking",
      messages: [
        "Every business needs a **business model** — that's just a fancy way of saying your PLAN for making money! 🧠",
        "Your garage sale business model is simple:\n• **What you sell:** Items you don't use anymore\n• **Who buys it:** Neighbors, families, bargain hunters\n• **How you make money:** Selling items for more than $0 (pure profit since items were free to you!)",
        "Here's a secret: in business, your **profit** = what you earn MINUS what you spend. Since your items cost you nothing, almost everything you make is profit! 📈",
        "But wait — you might have some costs too! Things like poster board for signs, tape, stickers for price tags. These are called **expenses**. Smart business owners keep expenses LOW! 💡",
      ],
      quiz: [
        {
          question: "If you sell $45 worth of stuff and spent $5 on supplies, what's your profit?",
          options: ["$45", "$40", "$50", "$5"],
          correctIndex: 1,
          explanation: "Profit = Revenue ($45) minus Expenses ($5) = $40! You're already thinking like a business owner!",
        },
        {
          question: "Why is a garage sale such a good first business?",
          options: ["Because it's really hard", "Because the items cost you nothing, so almost all revenue is profit", "Because you need to borrow money to start", "Because only adults can do it"],
          correctIndex: 1,
          explanation: "Your 'inventory' (stuff to sell) cost you $0 because you already own it. That means super low risk and high profit!",
        },
      ],
    },
    3: {
      type: "lesson",
      buddy: "excited",
      messages: [
        "Time for a **Treasure Hunt**! 🔍 Let's find awesome stuff to sell! The best items are things you've outgrown or don't use anymore.",
        "**HOT SELLERS at garage sales:**\n🎮 Video games & toys you've outgrown\n📚 Books you've already read\n👕 Clothes that don't fit\n🎨 Art supplies & craft kits\n⚽ Sports equipment\n🧩 Puzzles & board games",
        "**Pro Tip:** The \"Would I miss it?\" test! Hold each item and ask yourself — if it disappeared tomorrow, would you even notice? If not, it's perfect for selling! ✨",
        "**Quality Check:** Only sell things that WORK and look decent. Broken or stained items make your whole sale look bad. You want customers to trust your stuff!",
      ],
      quiz: [
        {
          question: "What's the best way to decide if something should be sold?",
          options: [
            "Sell everything you own",
            "Only sell broken things",
            "Ask: 'Would I miss this if it was gone?'",
            "Only sell expensive things",
          ],
          correctIndex: 2,
          explanation: "The 'Would I miss it?' test is perfect! If you wouldn't notice it gone, someone else can enjoy it AND you earn money!",
        },
        {
          question: "Why should you NOT sell broken items?",
          options: [
            "Broken items sell for more",
            "It makes your whole sale look untrustworthy",
            "People prefer broken things",
            "It doesn't matter",
          ],
          correctIndex: 1,
          explanation: "Trust is everything in business! One broken item can make customers doubt ALL your products. Quality builds reputation!",
        },
      ],
    },
    4: {
      type: "pricing",
      buddy: "thinking",
      messages: [
        "Pricing is an ART! 🎨💰 Price too high = nobody buys. Price too low = you lose money. Let's find the sweet spot!",
        "**The Garage Sale Pricing Rules:**\n💎 Price items at 10-30% of what they cost new\n🏷️ Round to nice numbers ($0.50, $1, $2, $5)\n📦 Bundle small items (\"3 books for $2!\")\n⏰ Drop prices in the last hour to sell more!",
        "**Power Move: The $1 Table!** Put a bunch of small items on a table with a big \"EVERYTHING $1\" sign. People LOVE the simplicity and you'll sell WAY more! 💪",
      ],
      pricingGame: [
        { emoji: "🎮", name: "Video Game", condition: "Works great, 2 years old", prices: [1, 5, 15], best: 5, tip: "Games hold value but buyers want a deal!" },
        { emoji: "📚", name: "Chapter Book", condition: "Good condition, read once", prices: [0.5, 1, 4], best: 1, tip: "Books sell best at $0.50-$1 each" },
        { emoji: "🧸", name: "Stuffed Animal", condition: "Clean, like new", prices: [0.5, 2, 8], best: 2, tip: "Cute & clean = good impulse buy at $2" },
        { emoji: "⚽", name: "Soccer Ball", condition: "Slightly worn but works fine", prices: [1, 3, 10], best: 3, tip: "Sports gear at 20-30% of original price" },
        { emoji: "🎨", name: "Art Supply Set", condition: "Half used, paints are good", prices: [1, 2, 6], best: 2, tip: "Partial sets at $1-2 are still useful!" },
      ],
    },
    5: {
      type: "branding",
      buddy: "excited",
      messages: [
        "Time to create your BRAND! 🎨 A brand is how people remember you. Think of it as your sale's personality!",
        "**Pick a memorable name!** Great names are:\n✨ Fun & catchy (\"Max's Mega Deals\")\n✨ Easy to remember\n✨ Tell people it's a SALE\n\nExamples: \"Tiny Treasures Sale\", \"The Great Cleanout\", \"[Your Name]'s Bargain Barn\" 🏷️",
        "**Your sale sign is like your storefront!** It needs to be:\n📍 Big enough to read from a car\n🎨 Colorful with thick letters\n📅 Show the DATE, TIME, and ADDRESS\n👉 Use arrows pointing to your house!",
        "Let's design YOUR sign right now! Fill in the details below and watch your brand come to life! ⬇️",
      ],
    },
    6: {
      type: "lesson",
      buddy: "proud",
      messages: [
        "Marketing is how you get people to SHOW UP! Even the best sale fails if nobody knows about it! 📣",
        "**Marketing Channels for Kids:**\n📱 Ask parents to post on neighborhood apps (Nextdoor, Facebook)\n📋 Put up signs at busy intersections (with permission!)\n🗣️ Tell friends, family & neighbors\n📬 Make flyers for mailboxes nearby\n🎈 Put balloons outside on sale day — people notice them from the road!",
        "**Timing Tricks:** Post online 3-5 days before. Put up signs 2 days before. The BEST garage sale day? **Saturday morning, 8am-1pm!** Early birds get the best deals! 🐦",
        "**Pro Hack: The \"Lemonade Stand Combo\"** 🍋 Set up a small drink stand next to your sale. People stay longer when they have something to drink, and you earn extra money!",
      ],
      quiz: [
        {
          question: "When should you start promoting your garage sale?",
          options: ["The morning of the sale", "3-5 days before", "One month before", "Never — people just show up"],
          correctIndex: 1,
          explanation: "3-5 days before is the sweet spot! Too early and people forget, too late and they've made other plans.",
        },
        {
          question: "Why is adding balloons to your sale a great marketing move?",
          options: ["They're expensive and fancy", "People driving by notice them and stop", "They scare away competition", "They make noise"],
          correctIndex: 1,
          explanation: "Balloons are cheap, colorful, and catch the eye of people driving by! Many of your customers will be impulse visitors!",
        },
      ],
    },
    7: {
      type: "planning",
      buddy: "thinking",
      messages: [
        "A great sale needs a great PLAN! Let's organize your Sale Day so everything runs smoothly! 📋✨",
        "**Layout is everything!** Arrange your sale like a real store:\n🚶 Put eye-catching items up front (they're called \"loss leaders\" in business!)\n📦 Group similar items together\n🏷️ Make sure EVERY item has a price tag\n💺 Have a comfy spot for you to sit with your cash box",
        "**The Money System:** Get a small box or bag for money. Start with about $20 in change (quarters, ones, fives). Count your money BEFORE and AFTER to know your total earnings! 🏦",
        "Let's put the steps in order! This sorting challenge will test your planning skills:",
      ],
      sortChallenge: {
        title: "Put these Sale Day steps in the right order!",
        correctOrder: [
          "Count your starting change ($20)",
          "Set up tables and display items",
          "Put up directional signs",
          "Greet customers with a smile",
          "Drop prices in the last hour",
          "Count total earnings & celebrate!",
        ],
        shuffled: [
          "Drop prices in the last hour",
          "Greet customers with a smile",
          "Set up tables and display items",
          "Count total earnings & celebrate!",
          "Count your starting change ($20)",
          "Put up directional signs",
        ],
      },
    },
    8: {
      type: "lesson",
      buddy: "happy",
      messages: [
        "Customers are the HEART of your business! Let's learn how to give them an amazing experience! 🤝✨",
        "**Customer Service Superpowers:**\n😊 Smile and say hi to everyone\n💬 \"Let me know if you have questions!\" is magic\n🤝 Be okay with people offering lower prices (it's called **negotiating!**)\n👋 Thank everyone, even if they don't buy anything",
        "**The Art of Negotiation:** When someone asks \"Would you take $3 instead of $5?\" — don't panic! You can say:\n✅ \"How about $4?\" (meet in the middle)\n✅ \"I'll do $3 if you buy two items!\"\n✅ \"Let me think about it\" (then decide)\nThis is how EVERY business works! 🤝",
        "**Handle tough moments like a pro:**\n• Someone says your price is too high? Stay friendly: \"I understand! Feel free to make an offer!\"\n• Item turns out to be broken? Offer a refund — honesty builds GREAT reputation! 💎",
      ],
      quiz: [
        {
          question: "A customer offers $3 for your $5 toy. What's the BEST response?",
          options: [
            "No way, the price is $5!",
            "Okay fine, $3 it is...",
            "How about $4? Or I can do $3 if you buy two items!",
            "I don't negotiate.",
          ],
          correctIndex: 2,
          explanation: "Meeting in the middle or offering a bundle deal keeps the customer happy AND gets you a fair price. That's smart negotiating!",
        },
        {
          question: "Why should you thank customers even if they don't buy anything?",
          options: [
            "It's a waste of time",
            "They might come back later, tell friends, or remember you for your next sale!",
            "You have to by law",
            "It doesn't matter",
          ],
          correctIndex: 1,
          explanation: "Every person who visits could become a future customer! Being friendly creates goodwill and word-of-mouth marketing!",
        },
      ],
    },
    9: {
      type: "finalQuiz",
      buddy: "proud",
      messages: [
        "This is it — the **FINAL BOSS QUIZ!** 🏆 Let's see how much you've learned on your entrepreneur journey!",
        "Get 4 or more right to earn your **Garage Sale Pro Certificate!** 🎓",
      ],
      quiz: [
        {
          question: "What is PROFIT?",
          options: ["All the money you make", "Revenue minus expenses", "The price of your items", "How much change you start with"],
          correctIndex: 1,
          explanation: "Profit = Revenue (money earned) - Expenses (money spent). This is the #1 formula in ALL of business!",
        },
        {
          question: "What's the ideal pricing strategy for garage sale items?",
          options: ["Same as store price", "10-30% of original price", "Whatever you feel like", "Always $1"],
          correctIndex: 1,
          explanation: "10-30% of retail price is the sweet spot — fair for buyers, profitable for you!",
        },
        {
          question: "Your sale sign should include:",
          options: ["Just your name", "Date, time, address, and an eye-catching design", "Only the word 'SALE'", "A full list of every item"],
          correctIndex: 1,
          explanation: "People need to know WHAT (sale), WHEN (date/time), and WHERE (address)! Good design makes them want to come!",
        },
        {
          question: "What's a 'loss leader' at a garage sale?",
          options: ["Something you lose money on", "An eye-catching item placed up front to attract customers", "The worst item you sell", "An item with no price"],
          correctIndex: 1,
          explanation: "Loss leaders are attention-grabbers placed where people see them first. They draw people in to discover your other items!",
        },
        {
          question: "When negotiating, what's the BEST strategy?",
          options: ["Never lower your price", "Always accept the first offer", "Meet in the middle or offer bundle deals", "Get angry and refuse"],
          correctIndex: 2,
          explanation: "Meeting in the middle is a win-win! Bundle deals are even better because you sell MORE items!",
        },
      ],
    },
    10: { type: "final", buddy: "excited" },
  };
  return lessons[levelId];
}

// ─── Main App ───
export default function GarageSaleApp() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [messageIdx, setMessageIdx] = useState(0);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizSelected, setQuizSelected] = useState(null);
  const [phase, setPhase] = useState("lesson"); // lesson | quiz | sort | pricing | sign | checklist
  const [showConfetti, setShowConfetti] = useState(false);
  const [pricingDone, setPricingDone] = useState(false);
  const [sortDone, setSortDone] = useState(false);
  const [signData, setSignData] = useState(null);
  const [checklistDone, setChecklistDone] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const scrollRef = useRef(null);

  const lesson = getLessonContent(currentLevel);
  const totalXpNeeded = LEVELS.length * (XP_PER_LESSON + XP_PER_QUIZ);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageIdx, phase, quizIdx, quizAnswered]);

  const fireConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const completeLevel = () => {
    setCompletedLevels((prev) => new Set([...prev, currentLevel]));
    setXp((x) => x + XP_PER_LESSON);
    setCoins((c) => c + 10);
    fireConfetti();
  };

  const nextMessage = () => {
    if (messageIdx < lesson.messages.length - 1) {
      setMessageIdx((i) => i + 1);
    } else {
      // Check what comes next
      if (lesson.quiz && lesson.quiz.length > 0 && phase === "lesson") {
        setPhase("quiz");
        setQuizIdx(0);
        setQuizAnswered(false);
        setQuizSelected(null);
        setCorrectAnswers(0);
      } else if (lesson.pricingGame && phase === "lesson") {
        setPhase("pricing");
      } else if (lesson.type === "branding" && phase === "lesson") {
        setPhase("sign");
      } else if (lesson.sortChallenge && phase === "lesson") {
        setPhase("sort");
      } else if (lesson.type === "final") {
        setPhase("checklist");
      } else {
        completeLevel();
      }
    }
  };

  const handleQuizAnswer = (idx) => {
    setQuizSelected(idx);
    setQuizAnswered(true);
    const isCorrect = idx === lesson.quiz[quizIdx].correctIndex;
    if (isCorrect) {
      setCorrectAnswers((c) => c + 1);
      setStreak((s) => s + 1);
      setXp((x) => x + XP_PER_QUIZ / lesson.quiz.length + (streak > 0 ? STREAK_BONUS : 0));
      setCoins((c) => c + 5);
    } else {
      setStreak(0);
    }
  };

  const nextQuiz = () => {
    if (quizIdx < lesson.quiz.length - 1) {
      setQuizIdx((i) => i + 1);
      setQuizAnswered(false);
      setQuizSelected(null);
    } else {
      if (currentLevel === 9) {
        // Final quiz done
        completeLevel();
        setPhase("results");
      } else {
        completeLevel();
      }
    }
  };

  const goToLevel = (id) => {
    if (id === 0 || id <= Math.max(...completedLevels, 0) + 1) {
      setCurrentLevel(id);
      setMessageIdx(0);
      setQuizIdx(0);
      setQuizAnswered(false);
      setQuizSelected(null);
      setPhase("lesson");
      setPricingDone(false);
      setSortDone(false);
      setChecklistDone(false);
      setShowMap(false);
    }
  };

  const maxUnlocked = Math.max(...completedLevels, -1) + 1;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f23",
      fontFamily: "'Nunito', 'Quicksand', system-ui, sans-serif",
      color: "#fff",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); opacity:1; } 100% { transform: translateY(100vh) rotate(720deg); opacity:0; } }
        @keyframes buddyBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes fadeSlideUp { 0% { opacity:0; transform: translateY(12px); } 100% { opacity:1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f0f23; }
        ::-webkit-scrollbar-thumb { background: #3a3a6a; border-radius: 3px; }
      `}</style>

      <Confetti active={showConfetti} />

      {/* ─── Top Bar ─── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "linear-gradient(180deg, #0f0f23 80%, transparent)",
        padding: "12px 16px 20px",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: 600, margin: "0 auto",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 22 }}>🏪</span>
            <span style={{
              fontWeight: 900, fontSize: 16, fontFamily: "'Fredoka', sans-serif",
              background: "linear-gradient(135deg, #FF6B35, #FFE66D)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Garage Sale Pro
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 16 }}>🔥</span>
              <span style={{ color: "#FB923C", fontWeight: 800, fontSize: 14 }}>{streak}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 16 }}>💎</span>
              <span style={{ color: "#60A5FA", fontWeight: 800, fontSize: 14 }}>{coins}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 16 }}>⚡</span>
              <span style={{ color: "#FFE66D", fontWeight: 800, fontSize: 14 }}>{xp} XP</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 16px 100px" }}>

        {/* ─── Level Map ─── */}
        {showMap ? (
          <div style={{ animation: "fadeSlideUp 0.4s ease" }}>
            <button onClick={() => setShowMap(false)} style={{
              background: "none", border: "none", color: "#9CA3AF", cursor: "pointer",
              fontSize: 14, marginBottom: 16, fontFamily: "inherit",
            }}>
              ← Back to lesson
            </button>
            <div style={{
              display: "flex", flexDirection: "column", gap: 12, alignItems: "center",
            }}>
              {LEVELS.map((level, i) => {
                const unlocked = i <= maxUnlocked;
                const completed = completedLevels.has(i);
                const active = i === currentLevel;
                return (
                  <button key={level.id} onClick={() => unlocked && goToLevel(i)} style={{
                    display: "flex", alignItems: "center", gap: 14, width: "100%", maxWidth: 400,
                    background: active ? "#2a2a5a" : completed ? "#1a3a2a" : "#1a1a2e",
                    border: `2px solid ${active ? level.color : completed ? "#34D39950" : "#2a2a4a"}`,
                    borderRadius: 16, padding: "14px 18px", cursor: unlocked ? "pointer" : "default",
                    opacity: unlocked ? 1 : 0.4, transition: "all 0.2s", fontFamily: "inherit",
                    textAlign: "left",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: completed ? "#065F46" : `${level.color}20`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, flexShrink: 0,
                    }}>
                      {completed ? "✅" : unlocked ? level.icon : "🔒"}
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "#9CA3AF", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                        Level {level.id}
                      </p>
                      <p style={{ margin: "2px 0 0", color: "#fff", fontWeight: 700, fontSize: 15 }}>
                        {level.title}
                      </p>
                    </div>
                    {active && (
                      <div style={{
                        marginLeft: "auto", background: level.color, borderRadius: 8,
                        padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#1a1a2e",
                      }}>
                        CURRENT
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* ─── Lesson Content ─── */
          <div>
            {/* Level Header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              marginBottom: 20,
            }}>
              <div>
                <p style={{ color: "#9CA3AF", fontSize: 12, fontWeight: 600, margin: 0, textTransform: "uppercase", letterSpacing: 1.5 }}>
                  Level {currentLevel}
                </p>
                <h2 style={{
                  margin: "4px 0 0", fontSize: 24, fontWeight: 900,
                  fontFamily: "'Fredoka', sans-serif",
                  color: LEVELS[currentLevel].color,
                }}>
                  {LEVELS[currentLevel].icon} {LEVELS[currentLevel].title}
                </h2>
              </div>
              <button onClick={() => setShowMap(true)} style={{
                background: "#1e1e3a", border: "2px solid #2a2a5a", borderRadius: 12,
                padding: "8px 14px", color: "#9CA3AF", cursor: "pointer", fontSize: 13,
                fontWeight: 600, fontFamily: "inherit",
              }}>
                🗺️ Map
              </button>
            </div>

            {/* Progress */}
            <div style={{
              height: 8, background: "#1e1e3a", borderRadius: 4, marginBottom: 24, overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${phase === "lesson" ? ((messageIdx + 1) / lesson.messages.length) * (lesson.quiz || lesson.pricingGame || lesson.sortChallenge || lesson.type === "branding" ? 50 : 100) : phase === "quiz" ? 50 + ((quizIdx + (quizAnswered ? 1 : 0)) / lesson.quiz.length) * 50 : 80}%`,
                background: `linear-gradient(90deg, ${LEVELS[currentLevel].color}, ${LEVELS[currentLevel].color}aa)`,
                borderRadius: 4, transition: "width 0.5s ease",
              }} />
            </div>

            {/* Messages */}
            {phase === "lesson" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {lesson.messages.slice(0, messageIdx + 1).map((msg, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 12, alignItems: "flex-start",
                    animation: i === messageIdx ? "fadeSlideUp 0.4s ease" : undefined,
                  }}>
                    {i === messageIdx && <Buddy mood={lesson.buddy} size={52} />}
                    {i !== messageIdx && <div style={{ width: 52, flexShrink: 0 }} />}
                    <SpeechBubble>
                      <span dangerouslySetInnerHTML={{
                        __html: msg.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#FFE66D">$1</strong>')
                          .replace(/\n/g, "<br/>"),
                      }} />
                    </SpeechBubble>
                  </div>
                ))}

                <button onClick={nextMessage} style={{
                  alignSelf: "center", marginTop: 8,
                  padding: "14px 36px", borderRadius: 16,
                  background: `linear-gradient(135deg, ${LEVELS[currentLevel].color}, ${LEVELS[currentLevel].color}cc)`,
                  color: "#fff", fontWeight: 800, fontSize: 16, border: "none",
                  cursor: "pointer", fontFamily: "'Fredoka', sans-serif",
                  boxShadow: `0 4px 20px ${LEVELS[currentLevel].color}40`,
                  animation: "pulse 2s ease-in-out infinite",
                }}>
                  {messageIdx < lesson.messages.length - 1
                    ? "Continue →"
                    : lesson.quiz ? "Quiz Time! 🎯"
                    : lesson.pricingGame ? "Play Pricing Game! 💰"
                    : lesson.type === "branding" ? "Design My Sign! 🎨"
                    : lesson.sortChallenge ? "Sorting Challenge! 📋"
                    : lesson.type === "final" ? "Build My Plan! 📋"
                    : "Complete ✓"}
                </button>
              </div>
            )}

            {/* Quiz Phase */}
            {phase === "quiz" && lesson.quiz && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{
                  display: "flex", justifyContent: "center", gap: 8, marginBottom: 4,
                }}>
                  {lesson.quiz.map((_, i) => (
                    <div key={i} style={{
                      width: 10, height: 10, borderRadius: "50%",
                      background: i < quizIdx ? "#34D399" : i === quizIdx ? LEVELS[currentLevel].color : "#2a2a5a",
                      transition: "all 0.3s",
                    }} />
                  ))}
                </div>
                <QuizCard
                  {...lesson.quiz[quizIdx]}
                  onAnswer={handleQuizAnswer}
                  answered={quizAnswered}
                  selectedIdx={quizSelected}
                />
                {quizAnswered && (
                  <div style={{ display: "flex", justifyContent: "center", gap: 12, animation: "fadeSlideUp 0.3s ease" }}>
                    {quizSelected === lesson.quiz[quizIdx].correctIndex && streak > 1 && (
                      <div style={{
                        background: "#FB923C20", border: "1px solid #FB923C50", borderRadius: 12,
                        padding: "8px 16px", fontSize: 14, fontWeight: 700, color: "#FB923C",
                      }}>
                        🔥 {streak} streak! +{STREAK_BONUS} bonus XP
                      </div>
                    )}
                    <button onClick={nextQuiz} style={{
                      padding: "14px 36px", borderRadius: 16,
                      background: `linear-gradient(135deg, ${LEVELS[currentLevel].color}, ${LEVELS[currentLevel].color}cc)`,
                      color: "#fff", fontWeight: 800, fontSize: 16, border: "none",
                      cursor: "pointer", fontFamily: "'Fredoka', sans-serif",
                    }}>
                      {quizIdx < lesson.quiz.length - 1 ? "Next Question →" : "Continue →"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Pricing Game */}
            {phase === "pricing" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <PricingGame
                  items={lesson.pricingGame}
                  onComplete={() => { setPricingDone(true); completeLevel(); }}
                />
                {pricingDone && (
                  <button onClick={() => goToLevel(currentLevel + 1)} style={{
                    alignSelf: "center", padding: "14px 36px", borderRadius: 16,
                    background: "linear-gradient(135deg, #34D399, #4ECDC4)",
                    color: "#fff", fontWeight: 800, fontSize: 16, border: "none", cursor: "pointer",
                    fontFamily: "'Fredoka', sans-serif",
                  }}>
                    Next Level →
                  </button>
                )}
              </div>
            )}

            {/* Sign Designer */}
            {phase === "sign" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <SignDesigner onComplete={(data) => { setSignData(data); completeLevel(); }} />
                {signData && (
                  <button onClick={() => goToLevel(currentLevel + 1)} style={{
                    alignSelf: "center", padding: "14px 36px", borderRadius: 16,
                    background: "linear-gradient(135deg, #F472B6, #A78BFA)",
                    color: "#fff", fontWeight: 800, fontSize: 16, border: "none", cursor: "pointer",
                    fontFamily: "'Fredoka', sans-serif",
                  }}>
                    Next Level →
                  </button>
                )}
              </div>
            )}

            {/* Sort Challenge */}
            {phase === "sort" && lesson.sortChallenge && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <SortChallenge
                  title={lesson.sortChallenge.title}
                  items={lesson.sortChallenge.shuffled}
                  correctOrder={lesson.sortChallenge.correctOrder}
                  onComplete={() => { setSortDone(true); completeLevel(); }}
                  completed={sortDone}
                />
                {sortDone && (
                  <button onClick={() => goToLevel(currentLevel + 1)} style={{
                    alignSelf: "center", padding: "14px 36px", borderRadius: 16,
                    background: "linear-gradient(135deg, #60A5FA, #34D399)",
                    color: "#fff", fontWeight: 800, fontSize: 16, border: "none", cursor: "pointer",
                    fontFamily: "'Fredoka', sans-serif",
                  }}>
                    Next Level →
                  </button>
                )}
              </div>
            )}

            {/* Final Quiz Results */}
            {phase === "results" && (
              <div style={{
                textAlign: "center", animation: "fadeSlideUp 0.5s ease",
                background: "#1e1e3a", borderRadius: 24, padding: 32,
                border: "2px solid #FFE66D50",
              }}>
                <div style={{ fontSize: 64, marginBottom: 8 }}>{correctAnswers >= 4 ? "🏆" : "💪"}</div>
                <h3 style={{
                  fontFamily: "'Fredoka', sans-serif", fontSize: 28, margin: "0 0 8px",
                  color: correctAnswers >= 4 ? "#FFE66D" : "#FB923C",
                }}>
                  {correctAnswers >= 4 ? "CERTIFIED GARAGE SALE PRO!" : "Almost There!"}
                </h3>
                <p style={{ color: "#9CA3AF", fontSize: 16, margin: "0 0 20px" }}>
                  You got {correctAnswers} out of {lesson.quiz.length} correct!
                </p>
                {correctAnswers >= 4 ? (
                  <div style={{
                    background: "linear-gradient(135deg, #FFE66D15, #FF6B3515)",
                    borderRadius: 16, padding: 20, border: "1px solid #FFE66D30",
                    marginBottom: 16,
                  }}>
                    <p style={{ fontSize: 14, color: "#FFE66D", fontWeight: 700, margin: "0 0 8px" }}>🎓 CERTIFICATE OF COMPLETION</p>
                    <p style={{ fontSize: 18, color: "#fff", fontWeight: 800, margin: "0 0 4px", fontFamily: "'Fredoka', sans-serif" }}>
                      Garage Sale Entrepreneur
                    </p>
                    <p style={{ fontSize: 13, color: "#9CA3AF", margin: 0 }}>
                      Completed all levels • Passed final assessment • Ready to launch!
                    </p>
                  </div>
                ) : (
                  <p style={{ color: "#FB923C", fontSize: 14 }}>Review the lessons and try again — you've got this!</p>
                )}
                <button onClick={() => goToLevel(10)} style={{
                  padding: "14px 36px", borderRadius: 16,
                  background: "linear-gradient(135deg, #FF6B35, #FFE66D)",
                  color: "#1a1a2e", fontWeight: 800, fontSize: 16, border: "none",
                  cursor: "pointer", fontFamily: "'Fredoka', sans-serif",
                }}>
                  Get My Action Plan! 🎉
                </button>
              </div>
            )}

            {/* Final Plan & Checklist */}
            {phase === "checklist" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20, animation: "fadeSlideUp 0.4s ease" }}>
                <div style={{
                  background: "linear-gradient(135deg, #FF6B3520, #FFE66D10)",
                  borderRadius: 20, padding: 24, border: "1px solid #FF6B3530",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>🎉</div>
                  <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 24, color: "#FFE66D", margin: "0 0 8px" }}>
                    You Did It!
                  </h3>
                  <p style={{ color: "#E5E7EB", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    You've learned everything you need to run a successful garage sale! Here's your personalized action plan. Check off each task as you go!
                  </p>
                </div>

                {signData && (
                  <div style={{
                    background: "#1e1e3a", borderRadius: 20, padding: 20,
                    border: "2px solid #F472B650",
                  }}>
                    <p style={{ color: "#F472B6", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>🎨 Your Sale Brand</p>
                    <p style={{ color: "#fff", fontWeight: 800, fontSize: 20, margin: "0 0 4px", fontFamily: "'Fredoka', sans-serif" }}>{signData.saleName}</p>
                    <p style={{ color: "#9CA3AF", fontSize: 14, margin: 0 }}>📅 {signData.date} {signData.tagline && `• "${signData.tagline}"`}</p>
                  </div>
                )}

                <ChecklistBuilder onComplete={() => { setChecklistDone(true); fireConfetti(); }} />

                <div style={{
                  background: "#1e1e3a", borderRadius: 20, padding: 24,
                  border: "2px solid #2a2a5a",
                }}>
                  <p style={{ color: "#4ECDC4", fontWeight: 700, fontSize: 17, margin: "0 0 12px" }}>💡 Quick Reference Cheat Sheet</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[
                      { label: "Pricing", tip: "10-30% of retail" },
                      { label: "Best Day", tip: "Saturday 8am-1pm" },
                      { label: "Starting Change", tip: "$20 in small bills" },
                      { label: "Marketing", tip: "Signs + online 3-5 days early" },
                      { label: "Negotiating", tip: "Meet in the middle!" },
                      { label: "Pro Move", tip: "Add a lemonade stand!" },
                    ].map((item) => (
                      <div key={item.label} style={{
                        background: "#252550", borderRadius: 12, padding: "12px 14px",
                      }}>
                        <p style={{ color: "#FFE66D", fontSize: 12, fontWeight: 700, margin: "0 0 4px", textTransform: "uppercase" }}>
                          {item.label}
                        </p>
                        <p style={{ color: "#E5E7EB", fontSize: 14, margin: 0 }}>{item.tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {checklistDone && (
                  <div style={{
                    textAlign: "center", padding: 24, animation: "fadeSlideUp 0.5s ease",
                    background: "linear-gradient(135deg, #34D39920, #4ECDC420)",
                    borderRadius: 20, border: "1px solid #34D39950",
                  }}>
                    <div style={{ fontSize: 48 }}>🚀</div>
                    <p style={{ color: "#34D399", fontWeight: 800, fontSize: 20, fontFamily: "'Fredoka', sans-serif", margin: "8px 0" }}>
                      YOU'RE READY TO LAUNCH!
                    </p>
                    <p style={{ color: "#9CA3AF", fontSize: 14 }}>
                      Total XP earned: {xp} • Coins: {coins} 💎
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Level Complete CTA */}
            {completedLevels.has(currentLevel) && phase !== "pricing" && phase !== "sign" && phase !== "sort" && phase !== "results" && phase !== "checklist" && phase === "lesson" && (
              <div style={{ textAlign: "center", marginTop: 20, animation: "fadeSlideUp 0.4s ease" }}>
                <div style={{
                  background: "#065F4620", borderRadius: 16, padding: 16,
                  border: "1px solid #34D39950", marginBottom: 12,
                }}>
                  <p style={{ color: "#34D399", fontWeight: 700, fontSize: 15, margin: 0 }}>
                    ✅ Level Complete! +{XP_PER_LESSON} XP
                  </p>
                </div>
                {currentLevel < LEVELS.length - 1 && (
                  <button onClick={() => goToLevel(currentLevel + 1)} style={{
                    padding: "14px 36px", borderRadius: 16,
                    background: `linear-gradient(135deg, ${LEVELS[Math.min(currentLevel + 1, LEVELS.length - 1)].color}, ${LEVELS[Math.min(currentLevel + 1, LEVELS.length - 1)].color}cc)`,
                    color: "#fff", fontWeight: 800, fontSize: 16, border: "none",
                    cursor: "pointer", fontFamily: "'Fredoka', sans-serif",
                  }}>
                    Next Level →
                  </button>
                )}
              </div>
            )}

            <div ref={scrollRef} />
          </div>
        )}
      </div>
    </div>
  );
}