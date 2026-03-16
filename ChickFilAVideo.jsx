import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  Audio,
} from 'remotion';

// ============================================
// CHICK-FIL-A EDUCATIONAL VIDEO FOR KIDS
// Target: 7 year olds
// Duration: ~2 minutes (3600 frames at 30fps)
// ============================================

// Color Palette - Bright & Fun
const COLORS = {
  chickFilaRed: '#E51636',
  chickFilaDarkRed: '#C4102D',
  sunshineYellow: '#FFD700',
  warmOrange: '#FF8C00',
  skyBlue: '#87CEEB',
  grassGreen: '#32CD32',
  white: '#FFFFFF',
  cream: '#FFF8DC',
  brown: '#8B4513',
  darkBrown: '#5D3A1A',
  pink: '#FFB6C1',
  purple: '#9370DB',
};

// ============================================
// ANIMATED COMPONENTS
// ============================================

// Bouncy Chicken Character
const ChickenCharacter = ({ x, y, scale = 1, emotion = 'happy', delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const bounce = Math.sin((frame - delay) * 0.15) * 5;
  const wingFlap = Math.sin((frame - delay) * 0.3) * 10;
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 8, stiffness: 100 },
  });
  
  const eyes = emotion === 'happy' ? '◠' : emotion === 'surprised' ? '⊙' : '◠';
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y + bounce,
      transform: `scale(${scale * springScale})`,
      transformOrigin: 'center bottom',
    }}>
      {/* Body */}
      <div style={{
        width: 120,
        height: 100,
        background: `radial-gradient(ellipse, #FFFACD 60%, #F5DEB3 100%)`,
        borderRadius: '50%',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}>
        {/* Left Wing */}
        <div style={{
          position: 'absolute',
          left: -20,
          top: 30,
          width: 40,
          height: 25,
          background: '#F5DEB3',
          borderRadius: '50%',
          transform: `rotate(${-20 + wingFlap}deg)`,
          transformOrigin: 'right center',
        }} />
        {/* Right Wing */}
        <div style={{
          position: 'absolute',
          right: -20,
          top: 30,
          width: 40,
          height: 25,
          background: '#F5DEB3',
          borderRadius: '50%',
          transform: `rotate(${20 - wingFlap}deg)`,
          transformOrigin: 'left center',
        }} />
        {/* Face */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          {/* Eyes */}
          <div style={{ fontSize: 24, letterSpacing: 20, marginBottom: 5 }}>
            {eyes} {eyes}
          </div>
          {/* Beak */}
          <div style={{
            width: 0,
            height: 0,
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderTop: '20px solid #FFA500',
            margin: '0 auto',
          }} />
        </div>
        {/* Red Comb */}
        <div style={{
          position: 'absolute',
          top: -15,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 3,
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 15,
              height: 20 + i * 3,
              background: COLORS.chickFilaRed,
              borderRadius: '50% 50% 50% 50%',
            }} />
          ))}
        </div>
      </div>
      {/* Feet */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
        marginTop: -5,
      }}>
        {[0, 1].map(i => (
          <div key={i} style={{
            width: 30,
            height: 15,
            background: '#FFA500',
            borderRadius: '0 0 10px 10px',
          }} />
        ))}
      </div>
    </div>
  );
};

// Animated Cow (EAT MOR CHIKIN mascot)
const CowCharacter = ({ x, y, scale = 1, delay = 0, showSign = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const bounce = Math.sin((frame - delay) * 0.1) * 3;
  const tailWag = Math.sin((frame - delay) * 0.4) * 15;
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y + bounce,
      transform: `scale(${scale * springScale})`,
      transformOrigin: 'center bottom',
    }}>
      {/* Body */}
      <div style={{
        width: 150,
        height: 100,
        background: 'white',
        borderRadius: '60px 60px 40px 40px',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}>
        {/* Spots */}
        <div style={{
          position: 'absolute',
          width: 30,
          height: 25,
          background: '#333',
          borderRadius: '50%',
          top: 20,
          left: 20,
        }} />
        <div style={{
          position: 'absolute',
          width: 25,
          height: 20,
          background: '#333',
          borderRadius: '50%',
          top: 40,
          right: 30,
        }} />
        {/* Head */}
        <div style={{
          position: 'absolute',
          top: -30,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 70,
          background: 'white',
          borderRadius: '40px 40px 30px 30px',
        }}>
          {/* Ears */}
          <div style={{
            position: 'absolute',
            top: 5,
            left: -15,
            width: 25,
            height: 15,
            background: 'white',
            borderRadius: '50%',
            transform: 'rotate(-30deg)',
          }} />
          <div style={{
            position: 'absolute',
            top: 5,
            right: -15,
            width: 25,
            height: 15,
            background: 'white',
            borderRadius: '50%',
            transform: 'rotate(30deg)',
          }} />
          {/* Eyes */}
          <div style={{
            position: 'absolute',
            top: 20,
            left: 15,
            width: 12,
            height: 12,
            background: '#333',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            top: 20,
            right: 15,
            width: 12,
            height: 12,
            background: '#333',
            borderRadius: '50%',
          }} />
          {/* Nose */}
          <div style={{
            position: 'absolute',
            bottom: 5,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 25,
            background: COLORS.pink,
            borderRadius: '50%',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              paddingTop: 8,
            }}>
              <div style={{ width: 8, height: 10, background: '#333', borderRadius: '50%' }} />
              <div style={{ width: 8, height: 10, background: '#333', borderRadius: '50%' }} />
            </div>
          </div>
        </div>
        {/* Tail */}
        <div style={{
          position: 'absolute',
          right: -30,
          top: 30,
          width: 40,
          height: 8,
          background: 'white',
          borderRadius: 10,
          transform: `rotate(${tailWag}deg)`,
          transformOrigin: 'left center',
        }}>
          <div style={{
            position: 'absolute',
            right: -10,
            top: -5,
            width: 20,
            height: 20,
            background: '#333',
            borderRadius: '50%',
          }} />
        </div>
      </div>
      {/* Legs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 60,
        marginTop: -5,
      }}>
        {[0, 1].map(i => (
          <div key={i} style={{
            width: 20,
            height: 30,
            background: 'white',
            borderRadius: '0 0 10px 10px',
          }} />
        ))}
      </div>
      {/* Sign */}
      {showSign && (
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'white',
          border: '3px solid #333',
          padding: '10px 15px',
          borderRadius: 10,
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: 14,
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
        }}>
          EAT MOR CHIKIN
        </div>
      )}
    </div>
  );
};

// Chicken Sandwich
const ChickenSandwich = ({ x, y, scale = 1, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  const float = Math.sin((frame - delay) * 0.08) * 5;
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y + float,
      transform: `scale(${scale * springScale})`,
    }}>
      {/* Top Bun */}
      <div style={{
        width: 100,
        height: 40,
        background: 'linear-gradient(180deg, #D4A574 0%, #C4956A 100%)',
        borderRadius: '50px 50px 10px 10px',
        position: 'relative',
      }}>
        {/* Sesame Seeds */}
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 8,
            height: 5,
            background: '#FFF8DC',
            borderRadius: '50%',
            top: 10 + Math.random() * 15,
            left: 15 + (i * 10),
            transform: `rotate(${Math.random() * 360}deg)`,
          }} />
        ))}
      </div>
      {/* Lettuce */}
      <div style={{
        width: 110,
        height: 15,
        background: '#90EE90',
        marginLeft: -5,
        borderRadius: '5px',
        clipPath: 'polygon(0% 50%, 5% 0%, 15% 50%, 25% 0%, 35% 50%, 45% 0%, 55% 50%, 65% 0%, 75% 50%, 85% 0%, 95% 50%, 100% 0%, 100% 100%, 0% 100%)',
      }} />
      {/* Chicken Patty */}
      <div style={{
        width: 95,
        height: 25,
        background: 'linear-gradient(180deg, #DAA520 0%, #CD853F 100%)',
        marginLeft: 2,
        borderRadius: 5,
      }} />
      {/* Pickles */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        marginLeft: 2,
      }}>
        {[0, 1].map(i => (
          <div key={i} style={{
            width: 25,
            height: 8,
            background: '#6B8E23',
            borderRadius: '50%',
          }} />
        ))}
      </div>
      {/* Bottom Bun */}
      <div style={{
        width: 100,
        height: 25,
        background: 'linear-gradient(180deg, #C4956A 0%, #B8860B 100%)',
        borderRadius: '5px 5px 20px 20px',
      }} />
    </div>
  );
};

// Restaurant Building
const Restaurant = ({ x, y, scale = 1, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 60 },
  });
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale * springScale})`,
      transformOrigin: 'center bottom',
    }}>
      {/* Main Building */}
      <div style={{
        width: 300,
        height: 180,
        background: 'linear-gradient(180deg, #FFF5EE 0%, #FFE4E1 100%)',
        borderRadius: '20px 20px 0 0',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}>
        {/* Roof */}
        <div style={{
          position: 'absolute',
          top: -40,
          left: -20,
          width: 340,
          height: 50,
          background: COLORS.chickFilaRed,
          borderRadius: '10px 10px 0 0',
        }} />
        {/* Sign */}
        <div style={{
          position: 'absolute',
          top: -30,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'white',
          padding: '10px 30px',
          borderRadius: 10,
          fontFamily: 'Arial Black, sans-serif',
          fontSize: 24,
          color: COLORS.chickFilaRed,
          fontWeight: 'bold',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        }}>
          Chick-fil-A
        </div>
        {/* Windows */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 30,
          marginTop: 50,
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 60,
              height: 50,
              background: 'linear-gradient(180deg, #87CEEB 0%, #ADD8E6 100%)',
              borderRadius: 10,
              border: '4px solid white',
            }} />
          ))}
        </div>
        {/* Door */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 80,
          background: '#8B4513',
          borderRadius: '10px 10px 0 0',
        }}>
          <div style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            width: 8,
            height: 8,
            background: '#FFD700',
            borderRadius: '50%',
          }} />
        </div>
      </div>
      {/* Drive-thru */}
      <div style={{
        position: 'absolute',
        right: -80,
        bottom: 0,
        width: 80,
        height: 100,
        background: '#FFE4E1',
        borderRadius: '10px 10px 0 0',
      }}>
        <div style={{
          marginTop: 20,
          marginLeft: 15,
          width: 50,
          height: 40,
          background: '#87CEEB',
          borderRadius: 8,
        }} />
      </div>
    </div>
  );
};

// Money/Coin Animation
const Coin = ({ x, y, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 8, stiffness: 100 },
  });
  
  const spin = (frame - delay) * 5;
  const float = Math.sin((frame - delay) * 0.1) * 10;
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y + float,
      transform: `scale(${springScale}) rotateY(${spin}deg)`,
      width: 50,
      height: 50,
      background: `linear-gradient(135deg, ${COLORS.sunshineYellow} 0%, #FFA500 100%)`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#8B4513',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      border: '3px solid #DAA520',
    }}>
      $
    </div>
  );
};

// Farm with barn and fields
const Farm = ({ x, y, scale = 1, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 60 },
  });
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale * springScale})`,
      transformOrigin: 'center bottom',
    }}>
      {/* Sky */}
      <div style={{
        width: 350,
        height: 150,
        background: `linear-gradient(180deg, ${COLORS.skyBlue} 0%, #E0F4FF 100%)`,
        borderRadius: '20px 20px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Sun */}
        <div style={{
          position: 'absolute',
          top: 20,
          right: 30,
          width: 50,
          height: 50,
          background: COLORS.sunshineYellow,
          borderRadius: '50%',
          boxShadow: '0 0 30px rgba(255,215,0,0.5)',
        }} />
        {/* Clouds */}
        <div style={{
          position: 'absolute',
          top: 30,
          left: 30,
          width: 60,
          height: 25,
          background: 'white',
          borderRadius: 20,
        }} />
        <div style={{
          position: 'absolute',
          top: 25,
          left: 50,
          width: 40,
          height: 30,
          background: 'white',
          borderRadius: 20,
        }} />
      </div>
      {/* Ground */}
      <div style={{
        width: 350,
        height: 80,
        background: `linear-gradient(180deg, ${COLORS.grassGreen} 0%, #228B22 100%)`,
        position: 'relative',
      }}>
        {/* Barn */}
        <div style={{
          position: 'absolute',
          bottom: 10,
          left: 30,
          width: 100,
          height: 80,
          background: COLORS.chickFilaRed,
          borderRadius: '5px 5px 0 0',
        }}>
          {/* Barn Roof */}
          <div style={{
            position: 'absolute',
            top: -30,
            left: -10,
            width: 0,
            height: 0,
            borderLeft: '60px solid transparent',
            borderRight: '60px solid transparent',
            borderBottom: `40px solid ${COLORS.chickFilaDarkRed}`,
          }} />
          {/* Barn Door */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 50,
            background: COLORS.darkBrown,
            borderRadius: '20px 20px 0 0',
          }} />
        </div>
        {/* Silo */}
        <div style={{
          position: 'absolute',
          bottom: 10,
          left: 140,
          width: 40,
          height: 90,
          background: '#C0C0C0',
          borderRadius: '20px 20px 0 0',
        }}>
          <div style={{
            position: 'absolute',
            top: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 50,
            height: 25,
            background: '#A0A0A0',
            borderRadius: '50%',
          }} />
        </div>
        {/* Fence */}
        <div style={{
          position: 'absolute',
          bottom: 10,
          right: 20,
          display: 'flex',
          gap: 15,
        }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{
              width: 8,
              height: 40,
              background: COLORS.brown,
              borderRadius: 3,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Delivery Truck
const Truck = ({ x, y, scale = 1, delay = 0, moving = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 60 },
  });
  
  const wheelSpin = moving ? (frame - delay) * 10 : 0;
  const bounce = moving ? Math.abs(Math.sin((frame - delay) * 0.3)) * 3 : 0;
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y - bounce,
      transform: `scale(${scale * springScale})`,
    }}>
      {/* Trailer */}
      <div style={{
        width: 150,
        height: 80,
        background: 'white',
        borderRadius: 10,
        position: 'relative',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      }}>
        {/* Chick-fil-A Logo on trailer */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Arial Black, sans-serif',
          fontSize: 14,
          color: COLORS.chickFilaRed,
          textAlign: 'center',
        }}>
          Chick-fil-A
          <div style={{ fontSize: 10, color: '#333' }}>🐔 Fresh Daily</div>
        </div>
      </div>
      {/* Cab */}
      <div style={{
        position: 'absolute',
        right: -70,
        bottom: 10,
        width: 70,
        height: 60,
        background: COLORS.chickFilaRed,
        borderRadius: '10px 20px 5px 5px',
      }}>
        {/* Window */}
        <div style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 35,
          height: 25,
          background: COLORS.skyBlue,
          borderRadius: 5,
        }} />
      </div>
      {/* Wheels */}
      <div style={{
        position: 'absolute',
        bottom: -20,
        left: 20,
        width: 30,
        height: 30,
        background: '#333',
        borderRadius: '50%',
        transform: `rotate(${wheelSpin}deg)`,
        border: '3px solid #666',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -20,
        left: 100,
        width: 30,
        height: 30,
        background: '#333',
        borderRadius: '50%',
        transform: `rotate(${wheelSpin}deg)`,
        border: '3px solid #666',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -20,
        right: -50,
        width: 30,
        height: 30,
        background: '#333',
        borderRadius: '50%',
        transform: `rotate(${wheelSpin}deg)`,
        border: '3px solid #666',
      }} />
    </div>
  );
};

// Happy Team Member
const TeamMember = ({ x, y, scale = 1, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  
  const wave = Math.sin((frame - delay) * 0.15) * 20;
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale * springScale})`,
    }}>
      {/* Body */}
      <div style={{
        width: 60,
        height: 80,
        background: COLORS.chickFilaRed,
        borderRadius: '30px 30px 20px 20px',
        position: 'relative',
      }}>
        {/* Head */}
        <div style={{
          position: 'absolute',
          top: -45,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 50,
          height: 50,
          background: '#FFDAB9',
          borderRadius: '50%',
        }}>
          {/* Face */}
          <div style={{
            position: 'absolute',
            top: 15,
            left: 10,
            width: 8,
            height: 8,
            background: '#333',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            top: 15,
            right: 10,
            width: 8,
            height: 8,
            background: '#333',
            borderRadius: '50%',
          }} />
          {/* Smile */}
          <div style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 20,
            height: 10,
            border: '3px solid #333',
            borderTop: 'none',
            borderRadius: '0 0 20px 20px',
          }} />
          {/* Cap */}
          <div style={{
            position: 'absolute',
            top: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 55,
            height: 20,
            background: COLORS.chickFilaRed,
            borderRadius: '10px 10px 5px 5px',
          }}>
            <div style={{
              position: 'absolute',
              bottom: -8,
              left: 5,
              width: 50,
              height: 10,
              background: COLORS.chickFilaDarkRed,
              borderRadius: 5,
            }} />
          </div>
        </div>
        {/* Arms */}
        <div style={{
          position: 'absolute',
          top: 10,
          left: -25,
          width: 30,
          height: 15,
          background: COLORS.chickFilaRed,
          borderRadius: 10,
          transform: `rotate(${-30 + wave}deg)`,
          transformOrigin: 'right center',
        }} />
        <div style={{
          position: 'absolute',
          top: 20,
          right: -20,
          width: 25,
          height: 15,
          background: COLORS.chickFilaRed,
          borderRadius: 10,
        }} />
        {/* Name Tag */}
        <div style={{
          position: 'absolute',
          top: 35,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'white',
          padding: '3px 8px',
          borderRadius: 5,
          fontSize: 10,
          fontWeight: 'bold',
        }}>
          TEAM
        </div>
      </div>
    </div>
  );
};

// Speech Bubble
const SpeechBubble = ({ x, y, text, delay = 0, direction = 'left' }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${springScale})`,
      transformOrigin: direction === 'left' ? 'bottom left' : 'bottom right',
    }}>
      <div style={{
        background: 'white',
        padding: '15px 25px',
        borderRadius: 20,
        boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
        maxWidth: 300,
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: 24,
        color: '#333',
        textAlign: 'center',
        position: 'relative',
      }}>
        {text}
        {/* Tail */}
        <div style={{
          position: 'absolute',
          bottom: -15,
          [direction]: 30,
          width: 0,
          height: 0,
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
          borderTop: '20px solid white',
        }} />
      </div>
    </div>
  );
};

// Animated Title Text
const AnimatedTitle = ({ text, y = 100, delay = 0, color = COLORS.chickFilaRed, size = 72 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  return (
    <div style={{
      position: 'absolute',
      top: y,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontFamily: 'Arial Black, sans-serif',
      fontSize: size,
      color: color,
      textShadow: '4px 4px 0 white, 6px 6px 0 rgba(0,0,0,0.2)',
    }}>
      {text.split('').map((char, i) => {
        const charSpring = spring({
          frame: frame - delay - i * 2,
          fps,
          config: { damping: 8, stiffness: 100 },
        });
        const bounce = Math.sin((frame - delay - i * 5) * 0.1) * 3;
        
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              transform: `scale(${charSpring}) translateY(${bounce}px)`,
              marginRight: char === ' ' ? 20 : 2,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

// Subtitle/Body Text
const BodyText = ({ text, x, y, delay = 0, maxWidth = 800 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = interpolate(
    frame - delay,
    [0, 15],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );
  
  const slideUp = interpolate(
    frame - delay,
    [0, 15],
    [30, 0],
    { extrapolateRight: 'clamp' }
  );
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y + slideUp,
      maxWidth: maxWidth,
      opacity,
      fontFamily: 'Comic Sans MS, cursive',
      fontSize: 32,
      color: '#333',
      textAlign: 'center',
      lineHeight: 1.4,
      textShadow: '2px 2px 0 white',
    }}>
      {text}
    </div>
  );
};

// Confetti/Celebration
const Confetti = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const colors = [COLORS.chickFilaRed, COLORS.sunshineYellow, COLORS.grassGreen, COLORS.skyBlue, COLORS.pink, COLORS.purple];
  
  return (
    <>
      {[...Array(30)].map((_, i) => {
        const startX = 100 + (i * 60) % 1720;
        const startY = -50;
        const fallSpeed = 3 + (i % 5);
        const swayAmount = 30 + (i % 20);
        const swaySpeed = 0.05 + (i % 10) * 0.01;
        const rotation = (frame - delay) * (5 + i % 10);
        
        const currentY = startY + (frame - delay) * fallSpeed;
        const currentX = startX + Math.sin((frame - delay) * swaySpeed + i) * swayAmount;
        
        if (frame < delay || currentY > 1100) return null;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: currentX,
              top: currentY,
              width: 15 + (i % 10),
              height: 15 + (i % 8),
              background: colors[i % colors.length],
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0' : '50% 0',
              transform: `rotate(${rotation}deg)`,
            }}
          />
        );
      })}
    </>
  );
};

// Arrow/Flow indicator
const FlowArrow = ({ x, y, rotation = 0, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  
  const pulse = 1 + Math.sin((frame - delay) * 0.2) * 0.1;
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${springScale * pulse}) rotate(${rotation}deg)`,
      fontSize: 60,
      color: COLORS.warmOrange,
    }}>
      ➜
    </div>
  );
};

// Star burst for emphasis
const StarBurst = ({ x, y, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const springScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 8, stiffness: 100 },
  });
  
  const rotation = (frame - delay) * 2;
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${springScale}) rotate(${rotation}deg)`,
      fontSize: 80,
    }}>
      ⭐
    </div>
  );
};

// ============================================
// SCENE COMPONENTS
// ============================================

// Scene 1: Introduction
const IntroScene = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, ${COLORS.cream} 0%, #FFE4E1 100%)`,
    }}>
      <AnimatedTitle text="Let's Learn About" y={80} delay={10} size={56} />
      <AnimatedTitle text="Chick-fil-A!" y={180} delay={30} size={80} />
      
      <ChickenSandwich x={860} y={350} scale={2} delay={50} />
      
      <ChickenCharacter x={400} y={500} scale={1.5} delay={70} />
      <CowCharacter x={1200} y={480} scale={1.2} delay={90} />
      
      <SpeechBubble
        x={550}
        y={400}
        text="Hi friends! 🐔"
        delay={100}
        direction="left"
      />
      
      <BodyText
        text="The story of America's favorite chicken restaurant!"
        x={360}
        y={800}
        delay={120}
        maxWidth={1200}
      />
    </AbsoluteFill>
  );
};

// Scene 2: The Founder's Story
const FounderScene = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${COLORS.skyBlue} 0%, ${COLORS.cream} 100%)`,
    }}>
      <AnimatedTitle text="Once Upon a Time..." y={50} delay={10} size={56} color={COLORS.darkBrown} />
      
      {/* Young Truett selling sodas illustration */}
      <div style={{
        position: 'absolute',
        left: 200,
        top: 200,
        width: 300,
        height: 400,
        background: '#FFF8DC',
        borderRadius: 20,
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Kid illustration */}
        <div style={{
          width: 80,
          height: 80,
          background: '#FFDAB9',
          borderRadius: '50%',
          marginTop: 20,
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            paddingTop: 25,
            gap: 15,
          }}>
            <div style={{ width: 10, height: 10, background: '#333', borderRadius: '50%' }} />
            <div style={{ width: 10, height: 10, background: '#333', borderRadius: '50%' }} />
          </div>
          <div style={{
            width: 20,
            height: 10,
            border: '3px solid #333',
            borderTop: 'none',
            borderRadius: '0 0 20px 20px',
            margin: '5px auto',
          }} />
        </div>
        <div style={{
          width: 60,
          height: 100,
          background: '#4169E1',
          borderRadius: '30px 30px 20px 20px',
          marginTop: -10,
        }} />
        {/* Wagon */}
        <div style={{
          width: 120,
          height: 60,
          background: COLORS.brown,
          borderRadius: 10,
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 25,
              height: 40,
              background: '#8B0000',
              borderRadius: 5,
            }} />
          ))}
        </div>
        <div style={{
          display: 'flex',
          gap: 60,
          marginTop: -5,
        }}>
          <div style={{
            width: 30,
            height: 30,
            background: '#333',
            borderRadius: '50%',
          }} />
          <div style={{
            width: 30,
            height: 30,
            background: '#333',
            borderRadius: '50%',
          }} />
        </div>
        <div style={{
          marginTop: 15,
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: 18,
          textAlign: 'center',
          color: '#333',
        }}>
          8-year-old Truett<br/>selling sodas!
        </div>
      </div>
      
      <BodyText
        text="A boy named Truett Cathy started his first business at just 8 years old, selling Coca-Cola from a wagon! 🥤"
        x={550}
        y={250}
        delay={30}
        maxWidth={700}
      />
      
      <BodyText
        text="In 1946, he opened a tiny restaurant called the 'Dwarf Grill' - it was SO small it only had 10 seats! 🏠"
        x={550}
        y={450}
        delay={60}
        maxWidth={700}
      />
      
      <BodyText
        text="Then in 1967, he invented the FIRST chicken sandwich and started Chick-fil-A! 🎉"
        x={550}
        y={650}
        delay={90}
        maxWidth={700}
      />
      
      <StarBurst x={1100} y={600} delay={100} />
      <ChickenSandwich x={1300} y={580} scale={1.5} delay={110} />
    </AbsoluteFill>
  );
};

// Scene 3: The Special Business Model
const BusinessModelScene = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)`,
    }}>
      <AnimatedTitle text="How Does It Work?" y={30} delay={10} size={56} color={COLORS.chickFilaRed} />
      
      {/* Left side - Chick-fil-A HQ */}
      <div style={{
        position: 'absolute',
        left: 100,
        top: 180,
        textAlign: 'center',
      }}>
        <Restaurant x={0} y={0} scale={0.8} delay={30} />
        <div style={{
          marginTop: 200,
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: 24,
          color: COLORS.chickFilaRed,
          fontWeight: 'bold',
        }}>
          Chick-fil-A<br/>Headquarters
        </div>
        <div style={{
          fontSize: 18,
          color: '#333',
          marginTop: 10,
        }}>
          (The Big Boss)
        </div>
      </div>
      
      {/* Arrow */}
      <FlowArrow x={480} y={350} delay={60} />
      
      {/* Middle - Partnership */}
      <div style={{
        position: 'absolute',
        left: 600,
        top: 200,
        textAlign: 'center',
      }}>
        <div style={{
          width: 200,
          height: 200,
          background: 'white',
          borderRadius: '50%',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
        }}>
          🤝
        </div>
        <div style={{
          marginTop: 20,
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: 24,
          color: COLORS.grassGreen,
          fontWeight: 'bold',
        }}>
          Partnership!
        </div>
      </div>
      
      {/* Arrow */}
      <FlowArrow x={860} y={350} delay={80} />
      
      {/* Right side - Operator */}
      <div style={{
        position: 'absolute',
        right: 150,
        top: 200,
        textAlign: 'center',
      }}>
        <TeamMember x={50} y={0} scale={1.5} delay={100} />
        <div style={{
          marginTop: 150,
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: 24,
          color: COLORS.purple,
          fontWeight: 'bold',
        }}>
          Restaurant<br/>Operator
        </div>
        <div style={{
          fontSize: 18,
          color: '#333',
          marginTop: 10,
        }}>
          (Local Owner)
        </div>
      </div>
      
      <BodyText
        text="Chick-fil-A is special! They pick very special people called 'Operators' to run each restaurant. It's like being chosen for the best team! 🌟"
        x={260}
        y={620}
        delay={120}
        maxWidth={1400}
      />
      
      <BodyText
        text="The Operator only needs $10,000 to start - that's much less than other restaurants!"
        x={260}
        y={720}
        delay={150}
        maxWidth={1400}
      />
      
      <Coin x={200} y={750} delay={160} />
      <Coin x={280} y={780} delay={170} />
      <Coin x={360} y={750} delay={180} />
    </AbsoluteFill>
  );
};

// Scene 4: The Value Chain - Farm to Table
const ValueChainScene = () => {
  const frame = useCurrentFrame();
  
  const truckX = interpolate(
    frame,
    [0, 180],
    [-200, 600],
    { extrapolateRight: 'clamp' }
  );
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${COLORS.skyBlue} 0%, ${COLORS.grassGreen} 70%, #228B22 100%)`,
    }}>
      <AnimatedTitle text="From Farm to You! 🚜" y={30} delay={10} size={56} color="white" />
      
      {/* Step 1: Farm */}
      <Farm x={50} y={150} scale={0.7} delay={30} />
      <div style={{
        position: 'absolute',
        left: 100,
        top: 420,
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      }}>
        1️⃣ Happy Farms<br/>raise chickens
      </div>
      <ChickenCharacter x={180} y={350} scale={0.6} delay={50} />
      
      {/* Arrow */}
      <FlowArrow x={380} y={300} delay={70} />
      
      {/* Step 2: Processing */}
      <div style={{
        position: 'absolute',
        left: 500,
        top: 180,
        width: 200,
        height: 150,
        background: '#E0E0E0',
        borderRadius: 15,
        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          background: '#90EE90',
          height: 30,
          borderRadius: '15px 15px 0 0',
        }} />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          marginTop: 30,
        }}>
          <div style={{ fontSize: 40 }}>🏭</div>
          <div style={{ fontSize: 40 }}>📦</div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        left: 520,
        top: 350,
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      }}>
        2️⃣ Prepare<br/>the chicken
      </div>
      
      {/* Arrow */}
      <FlowArrow x={730} y={300} delay={90} />
      
      {/* Animated Truck */}
      <Truck x={truckX} y={450} scale={0.6} delay={0} moving={frame < 180} />
      <div style={{
        position: 'absolute',
        left: 850,
        top: 350,
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      }}>
        3️⃣ Trucks deliver<br/>fresh food
      </div>
      
      {/* Arrow */}
      <FlowArrow x={1080} y={300} delay={110} />
      
      {/* Step 4: Restaurant */}
      <Restaurant x={1150} y={150} scale={0.5} delay={130} />
      <div style={{
        position: 'absolute',
        right: 150,
        top: 350,
        fontFamily: 'Comic Sans MS, cursive',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      }}>
        4️⃣ Cooked fresh<br/>just for you!
      </div>
      
      <BodyText
        text="Chick-fil-A only uses REAL chicken from American farms - no funny stuff added! 🇺🇸"
        x={260}
        y={620}
        delay={150}
        maxWidth={1400}
      />
      
      <ChickenSandwich x={1500} y={600} scale={1.2} delay={170} />
    </AbsoluteFill>
  );
};

// Scene 5: What Makes Them Special
const SpecialIngredientsScene = () => {
  const frame = useCurrentFrame();
  
  const ingredients = [
    { emoji: '😊', title: 'Super Friendly', desc: '"My Pleasure!"', delay: 30 },
    { emoji: '🍗', title: 'Simple Menu', desc: 'Focus on chicken!', delay: 60 },
    { emoji: '🌙', title: 'Closed Sundays', desc: 'Rest day for all!', delay: 90 },
    { emoji: '❤️', title: 'Care for People', desc: 'Treat everyone nice!', delay: 120 },
  ];
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)`,
    }}>
      <AnimatedTitle text="Secret Ingredients! 🌟" y={30} delay={10} size={56} />
      
      <BodyText
        text="What makes Chick-fil-A SO special?"
        x={460}
        y={120}
        delay={20}
        maxWidth={1000}
      />
      
      <div style={{
        position: 'absolute',
        top: 220,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 60,
      }}>
        {ingredients.map((item, i) => {
          const springScale = spring({
            frame: frame - item.delay,
            fps: 30,
            config: { damping: 8, stiffness: 80 },
          });
          
          return (
            <div
              key={i}
              style={{
                transform: `scale(${springScale})`,
                width: 280,
                height: 320,
                background: 'white',
                borderRadius: 30,
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 25,
              }}
            >
              <div style={{ fontSize: 80, marginBottom: 15 }}>{item.emoji}</div>
              <div style={{
                fontFamily: 'Arial Black, sans-serif',
                fontSize: 28,
                color: COLORS.chickFilaRed,
                marginBottom: 10,
                textAlign: 'center',
              }}>
                {item.title}
              </div>
              <div style={{
                fontFamily: 'Comic Sans MS, cursive',
                fontSize: 22,
                color: '#666',
                textAlign: 'center',
              }}>
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
      
      <CowCharacter x={100} y={650} scale={0.8} delay={150} showSign={true} />
      <TeamMember x={1650} y={680} scale={1.3} delay={160} />
      
      <SpeechBubble
        x={1400}
        y={620}
        text="My pleasure! 😊"
        delay={170}
        direction="right"
      />
    </AbsoluteFill>
  );
};

// Scene 6: How Everyone Wins
const EveryoneWinsScene = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 100%)`,
    }}>
      <AnimatedTitle text="Everyone Wins! 🎉" y={30} delay={10} size={56} color={COLORS.chickFilaRed} />
      
      {/* Three circles showing who benefits */}
      <div style={{
        position: 'absolute',
        top: 180,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 100,
      }}>
        {/* Customers */}
        <div style={{
          textAlign: 'center',
        }}>
          <div style={{
            width: 200,
            height: 200,
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 80,
            boxShadow: '0 15px 30px rgba(255,165,0,0.4)',
          }}>
            👨‍👩‍👧‍👦
          </div>
          <div style={{
            marginTop: 20,
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 28,
            color: '#333',
          }}>
            Customers
          </div>
          <div style={{
            fontFamily: 'Comic Sans MS, cursive',
            fontSize: 20,
            color: '#666',
            marginTop: 10,
          }}>
            Get yummy food<br/>& great service!
          </div>
        </div>
        
        {/* Operators */}
        <div style={{
          textAlign: 'center',
        }}>
          <div style={{
            width: 200,
            height: 200,
            background: `linear-gradient(135deg, ${COLORS.chickFilaRed} 0%, ${COLORS.chickFilaDarkRed} 100%)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 80,
            boxShadow: '0 15px 30px rgba(229,22,54,0.4)',
          }}>
            👩‍💼
          </div>
          <div style={{
            marginTop: 20,
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 28,
            color: '#333',
          }}>
            Operators
          </div>
          <div style={{
            fontFamily: 'Comic Sans MS, cursive',
            fontSize: 20,
            color: '#666',
            marginTop: 10,
          }}>
            Run their own<br/>business!
          </div>
        </div>
        
        {/* Team Members */}
        <div style={{
          textAlign: 'center',
        }}>
          <div style={{
            width: 200,
            height: 200,
            background: `linear-gradient(135deg, ${COLORS.grassGreen} 0%, #228B22 100%)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 80,
            boxShadow: '0 15px 30px rgba(50,205,50,0.4)',
          }}>
            🎓
          </div>
          <div style={{
            marginTop: 20,
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 28,
            color: '#333',
          }}>
            Team Members
          </div>
          <div style={{
            fontFamily: 'Comic Sans MS, cursive',
            fontSize: 20,
            color: '#666',
            marginTop: 10,
          }}>
            Get scholarships<br/>for college!
          </div>
        </div>
      </div>
      
      <BodyText
        text="Chick-fil-A has given over $175 MILLION in scholarships to help workers go to college! 📚"
        x={260}
        y={650}
        delay={60}
        maxWidth={1400}
      />
      
      <StarBurst x={200} y={700} delay={80} />
      <StarBurst x={1600} y={700} delay={90} />
      
      <Coin x={400} y={750} delay={100} />
      <Coin x={500} y={780} delay={110} />
      <Coin x={1300} y={750} delay={120} />
      <Coin x={1400} y={780} delay={130} />
    </AbsoluteFill>
  );
};

// Scene 7: Fun Facts
const FunFactsScene = () => {
  const frame = useCurrentFrame();
  
  const facts = [
    { fact: "Chick-fil-A sells over 3 BILLION nuggets every year!", emoji: "🍗" },
    { fact: "The famous cows have been saying 'Eat Mor Chikin' since 1995!", emoji: "🐄" },
    { fact: "There are over 3,000 restaurants across America!", emoji: "🏪" },
    { fact: "Waffle fries are the #1 most ordered item!", emoji: "🍟" },
  ];
  
  const currentFactIndex = Math.floor(frame / 90) % facts.length;
  const currentFact = facts[currentFactIndex];
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)`,
    }}>
      <AnimatedTitle text="Fun Facts! 🎈" y={50} delay={10} size={64} color={COLORS.purple} />
      
      <div style={{
        position: 'absolute',
        top: 250,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1000,
        height: 300,
        background: 'white',
        borderRadius: 40,
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}>
        <div style={{ fontSize: 100, marginBottom: 20 }}>
          {currentFact.emoji}
        </div>
        <div style={{
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: 36,
          color: '#333',
          textAlign: 'center',
          lineHeight: 1.4,
        }}>
          {currentFact.fact}
        </div>
      </div>
      
      <CowCharacter x={100} y={600} scale={1} delay={30} showSign={false} />
      <ChickenCharacter x={1600} y={620} scale={1.2} delay={50} />
      
      <div style={{
        position: 'absolute',
        bottom: 50,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 20,
      }}>
        {facts.map((_, i) => (
          <div
            key={i}
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: i === currentFactIndex ? COLORS.purple : '#DDD',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Scene 8: Conclusion
const ConclusionScene = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${COLORS.sunshineYellow} 0%, ${COLORS.warmOrange} 100%)`,
    }}>
      <Confetti delay={30} />
      
      <AnimatedTitle text="You Learned About" y={80} delay={10} size={48} color="white" />
      <AnimatedTitle text="Chick-fil-A! 🎉" y={160} delay={30} size={72} color="white" />
      
      <div style={{
        position: 'absolute',
        top: 300,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 100,
      }}>
        <ChickenSandwich x={-200} y={0} scale={1.5} delay={50} />
        <ChickenCharacter x={100} y={20} scale={1.3} delay={70} />
        <CowCharacter x={350} y={0} scale={1} delay={90} showSign={true} />
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: 200,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: 36,
          color: 'white',
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          marginBottom: 20,
        }}>
          ✅ Started by a boy with a dream<br/>
          ✅ Partners with special Operators<br/>
          ✅ Fresh chicken from American farms<br/>
          ✅ Treats everyone with kindness<br/>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: 60,
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: 32,
        color: 'white',
        textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
      }}>
        Thanks for learning with us! 👋
      </div>
    </AbsoluteFill>
  );
};

// ============================================
// MAIN COMPOSITION
// ============================================

export const ChickFilAVideo = () => {
  const { fps } = useVideoConfig();
  
  // Scene durations in frames (at 30fps)
  const sceneDurations = {
    intro: 180,           // 6 seconds
    founder: 180,         // 6 seconds
    businessModel: 210,   // 7 seconds
    valueChain: 210,      // 7 seconds
    specialIngredients: 210, // 7 seconds
    everyoneWins: 180,    // 6 seconds
    funFacts: 360,        // 12 seconds (shows multiple facts)
    conclusion: 180,      // 6 seconds
  };
  
  let currentFrame = 0;
  
  return (
    <AbsoluteFill>
      <Sequence from={currentFrame} durationInFrames={sceneDurations.intro}>
        <IntroScene />
      </Sequence>
      
      <Sequence from={currentFrame += sceneDurations.intro} durationInFrames={sceneDurations.founder}>
        <FounderScene />
      </Sequence>
      
      <Sequence from={currentFrame += sceneDurations.founder} durationInFrames={sceneDurations.businessModel}>
        <BusinessModelScene />
      </Sequence>
      
      <Sequence from={currentFrame += sceneDurations.businessModel} durationInFrames={sceneDurations.valueChain}>
        <ValueChainScene />
      </Sequence>
      
      <Sequence from={currentFrame += sceneDurations.valueChain} durationInFrames={sceneDurations.specialIngredients}>
        <SpecialIngredientsScene />
      </Sequence>
      
      <Sequence from={currentFrame += sceneDurations.specialIngredients} durationInFrames={sceneDurations.everyoneWins}>
        <EveryoneWinsScene />
      </Sequence>
      
      <Sequence from={currentFrame += sceneDurations.everyoneWins} durationInFrames={sceneDurations.funFacts}>
        <FunFactsScene />
      </Sequence>
      
      <Sequence from={currentFrame += sceneDurations.funFacts} durationInFrames={sceneDurations.conclusion}>
        <ConclusionScene />
      </Sequence>
    </AbsoluteFill>
  );
};

export default ChickFilAVideo;
