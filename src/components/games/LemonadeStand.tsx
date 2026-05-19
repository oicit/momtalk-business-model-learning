/**
 * Lemonade Stand mini-game.
 *
 * Mechanic (ported from kids_business_concept.html LemonadeGame):
 *   1. Setup — kid sets price ($1–$5) + cups to make (5–30). Sees total cost.
 *   2. Sell  — game simulates buyers based on price elasticity:
 *               maxBuyers = floor(20 * (1 - (price - 1) / 5))
 *               actual    = clamp(maxBuyers + rand[-2..2], 0..cups)
 *   3. Result — revenue / cost / profit breakdown, reaction message.
 *   4. Replay or finish.
 *
 * Cost per cup is fixed at $0.50. Pure unit-economics teaching moment.
 */

import { useState } from 'react';
import { T } from '../../styles/kidsTokens';
import MCard from '../kids/MCard';
import Pill from '../kids/Pill';
import FadeIn from '../kids/FadeIn';
import Emo from '../kids/Emo';
import Momo from '../kids/Momo';

const COST_PER_CUP = 0.5;

interface LemonadeStandProps {
  /** Fires once the kid clicks "I'm done!" — drives lesson completion. */
  onFinish: (result: GameResult) => void;
}

export interface GameResult {
  price: number;
  cups: number;
  sold: number;
  revenue: number;
  cost: number;
  profit: number;
  plays: number;
}

type Phase = 'setup' | 'result';

export default function LemonadeStand({ onFinish }: LemonadeStandProps) {
  const [price, setPrice] = useState(2);
  const [cups, setCups] = useState(10);
  const [sold, setSold] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>('setup');
  const [plays, setPlays] = useState(0);

  const totalCost = cups * COST_PER_CUP;
  const revenue = sold !== null ? sold * price : 0;
  const profit = revenue - totalCost;

  const handleSell = () => {
    const maxBuyers = Math.floor(20 * (1 - (price - 1) / 5));
    const actual = Math.min(
      Math.max(0, maxBuyers + Math.floor(Math.random() * 5) - 2),
      cups,
    );
    setSold(actual);
    setPhase('result');
    setPlays((p) => p + 1);
  };

  const reset = () => {
    setPrice(2);
    setCups(10);
    setSold(null);
    setPhase('setup');
  };

  const handleFinish = () => {
    onFinish({
      price,
      cups,
      sold: sold ?? 0,
      revenue,
      cost: totalCost,
      profit,
      plays,
    });
  };

  // ─── Result phase ─────────────────────────────────────────────────────
  if (phase === 'result') {
    const reactionMsg =
      profit > 5
        ? "Amazing! You're a natural entrepreneur! 🎉"
        : profit >= 0
          ? 'You made a profit! Nice work! 👍'
          : 'Uh oh, you lost money. Try different prices!';
    const reactionBg = profit >= 0 ? T.green : T.coral;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          padding: '20px 16px',
          maxWidth: 480,
          margin: '0 auto',
        }}
      >
        <FadeIn show>
          <Emo size={56}>🍋</Emo>
        </FadeIn>
        <FadeIn show delay={200}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: T.green,
              textAlign: 'center',
            }}
          >
            Results Are In!
          </div>
        </FadeIn>
        <FadeIn show delay={400}>
          <MCard style={{ width: '100%' }}>
            <Row label="Cups made:" value={String(cups)} />
            <Row label="Price per cup:" value={`$${price.toFixed(2)}`} />
            <Row
              label="Cups sold:"
              value={`${sold} of ${cups}`}
              valueColor={T.blue}
            />
            <hr style={{ border: `1px solid ${T.green}`, margin: '6px 0' }} />
            <Row
              label={`Revenue (${sold} × $${price.toFixed(2)}):`}
              value={`$${revenue.toFixed(2)}`}
              valueColor={T.green}
            />
            <Row
              label={`Costs (${cups} × $0.50):`}
              value={`-$${totalCost.toFixed(2)}`}
              valueColor={T.coral}
            />
            <hr style={{ border: `2px solid ${T.green}`, margin: '6px 0' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                fontSize: 20,
              }}
            >
              <span style={{ fontWeight: 700 }}>PROFIT:</span>
              <b
                className="num"
                style={{
                  color: profit >= 0 ? T.green : T.coral,
                  fontSize: 26,
                }}
              >
                ${profit.toFixed(2)}
              </b>
            </div>
          </MCard>
        </FadeIn>
        <FadeIn show delay={600}>
          <Pill bg={reactionBg} color={T.white} size="md">
            {reactionMsg}
          </Pill>
        </FadeIn>
        <FadeIn show delay={800}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Pill bg={T.yellow} color={T.green} onClick={reset}>
              Try Again 🔁
            </Pill>
            <Pill bg={T.green} color={T.white} onClick={handleFinish}>
              I'm done! →
            </Pill>
          </div>
        </FadeIn>
      </div>
    );
  }

  // ─── Setup phase ──────────────────────────────────────────────────────
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        padding: '8px 16px 20px',
        maxWidth: 480,
        margin: '0 auto',
      }}
    >
      <Momo
        mood="excited"
        msg="Welcome to your lemonade stand! Set your price and decide how many cups to make."
        size={52}
      />
      <MCard style={{ width: '100%' }}>
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 4,
            }}
          >
            <label style={{ fontSize: 14, fontWeight: 700, color: T.green }}>
              Price per cup
            </label>
            <span
              className="num"
              style={{ fontSize: 20, fontWeight: 800, color: T.coral }}
            >
              ${price.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            step={0.5}
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            style={{ width: '100%' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 11,
              color: T.sub,
              marginTop: 2,
            }}
          >
            <span>$1.00</span>
            <span>$5.00</span>
          </div>
        </div>

        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 4,
            }}
          >
            <label style={{ fontSize: 14, fontWeight: 700, color: T.green }}>
              Cups to make
            </label>
            <span
              className="num"
              style={{ fontSize: 20, fontWeight: 800, color: T.blue }}
            >
              {cups}
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={cups}
            onChange={(e) => setCups(parseInt(e.target.value, 10))}
            style={{ width: '100%' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 11,
              color: T.sub,
              marginTop: 2,
            }}
          >
            <span>5</span>
            <span>30</span>
          </div>
        </div>

        <hr style={{ border: `1px dashed ${T.green}`, margin: '14px 0 10px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            color: T.text,
          }}
        >
          <span>
            Total cost ({cups} × $0.50):
          </span>
          <b className="num" style={{ color: T.coral }}>
            -${totalCost.toFixed(2)}
          </b>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            color: T.text,
            marginTop: 4,
          }}
        >
          <span>
            If all sell ({cups} × ${price.toFixed(2)}):
          </span>
          <b className="num" style={{ color: T.green }}>
            +${(cups * price).toFixed(2)}
          </b>
        </div>
      </MCard>

      <div style={{ fontSize: 12, color: T.sub, textAlign: 'center', maxWidth: 380 }}>
        💡 Higher price = more profit per cup, but fewer customers will buy.
      </div>

      <Pill bg={T.green} color={T.white} size="lg" onClick={handleSell}>
        Open for business! 🍋
      </Pill>
    </div>
  );
}

function Row({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 15,
        margin: '2px 0',
      }}
    >
      <span style={{ color: T.text }}>{label}</span>
      <b
        className="num"
        style={{ color: valueColor ?? T.text, fontWeight: 700 }}
      >
        {value}
      </b>
    </div>
  );
}
