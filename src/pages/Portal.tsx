import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MODULES = [
  {
    id: 'garage-sale',
    title: 'Garage Sale Business',
    emoji: '🏷️',
    description: 'Learn how to run a real garage sale! Pricing, marketing, customer service — the full business experience.',
    path: '/garage-sale',
    gradient: 'linear-gradient(135deg, #FFE5EC 0%, #FFCCD8 50%, #FFB5C5 100%)',
    tag: '10 Levels',
    tagColor: '#FF6B8A',
    status: 'available' as const,
    skills: ['Pricing', 'Marketing', 'Customer Service', 'Branding'],
  },
  {
    id: 'chick-fil-a',
    title: 'Chick-fil-A: How a Restaurant Works',
    emoji: '🐔',
    description: 'Discover how Chick-fil-A became one of the most loved restaurants. Supply chain, service, and secret sauce!',
    path: '/chick-fil-a',
    gradient: 'linear-gradient(135deg, #FEF9C3 0%, #FDE68A 50%, #FCD34D 100%)',
    tag: 'Video',
    tagColor: '#F4C430',
    status: 'available' as const,
    skills: ['Supply Chain', 'Customer Service', 'Brand Building', 'Operations'],
  },
  {
    id: 'lemonade-stand',
    title: 'Lemonade Stand Empire',
    emoji: '🍋',
    description: 'Start with one stand, grow into a lemonade empire! Learn supply & demand, profit margins, and scaling.',
    path: '/lemonade-stand',
    gradient: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 50%, #86EFAC 100%)',
    tag: 'Coming Soon',
    tagColor: '#86EFAC',
    status: 'coming-soon' as const,
    skills: ['Supply & Demand', 'Profit Margins', 'Scaling', 'Location Strategy'],
  },
  {
    id: 'pet-shop',
    title: 'My Pet Shop',
    emoji: '🐾',
    description: 'Run your own pet shop! Inventory management, caring for animals, and making customers happy.',
    path: '/pet-shop',
    gradient: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%)',
    tag: 'Coming Soon',
    tagColor: '#C4B5FD',
    status: 'coming-soon' as const,
    skills: ['Inventory', 'Animal Care', 'Customer Relations', 'Budgeting'],
  },
  {
    id: 'youtube-creator',
    title: 'YouTube Creator Studio',
    emoji: '🎬',
    description: 'Learn the business of content creation! Planning, production, audience building, and earning.',
    path: '/youtube-creator',
    gradient: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 50%, #7DD3FC 100%)',
    tag: 'Coming Soon',
    tagColor: '#7DD3FC',
    status: 'coming-soon' as const,
    skills: ['Content Planning', 'Audience Building', 'Revenue Streams', 'Branding'],
  },
  {
    id: 'cookie-bakery',
    title: 'Cookie Bakery Business',
    emoji: '🍪',
    description: 'From kitchen to customers! Recipe costing, packaging, selling, and growing a baking business.',
    path: '/cookie-bakery',
    gradient: 'linear-gradient(135deg, #FFF8F0 0%, #F5E6D3 50%, #EDCFB3 100%)',
    tag: 'Coming Soon',
    tagColor: '#F4C430',
    status: 'coming-soon' as const,
    skills: ['Cost of Goods', 'Packaging', 'Sales', 'Growth'],
  },
];

const BUBBLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 20 + Math.random() * 40,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  color: [
    'rgba(255, 107, 138, 0.15)',
    'rgba(125, 211, 252, 0.15)',
    'rgba(134, 239, 172, 0.15)',
    'rgba(252, 211, 77, 0.15)',
    'rgba(196, 181, 253, 0.15)',
    'rgba(249, 168, 212, 0.15)',
  ][i % 6],
}));

export default function Portal() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '60px 24px 80px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FFF8F0 0%, #F5E6D3 100%)',
      }}>
        {/* Floating Bubbles */}
        {BUBBLES.map(b => (
          <div
            key={b.id}
            style={{
              position: 'absolute',
              width: b.size,
              height: b.size,
              borderRadius: '50%',
              background: b.color,
              left: `${b.left}%`,
              bottom: '-10%',
              animation: `bubbleFloat ${b.duration}s ease-in-out ${b.delay}s infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Big Icon */}
          <div
            className={loaded ? 'animate-in' : ''}
            style={{
              fontSize: 72,
              marginBottom: 16,
              animation: loaded ? 'float 3s ease-in-out infinite' : undefined,
            }}
          >
            🏪
          </div>

          {/* Title */}
          <h1
            className={loaded ? 'animate-in animate-in-delay-1' : ''}
            style={{
              fontSize: 'clamp(32px, 6vw, 52px)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 16,
              background: 'linear-gradient(135deg, #FF6B8A 0%, #7DD3FC 50%, #86EFAC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Business Model<br />Learning Lab
          </h1>

          {/* Subtitle */}
          <p
            className={loaded ? 'animate-in animate-in-delay-2' : ''}
            style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: '#5E8C7F',
              fontWeight: 600,
              maxWidth: 560,
              margin: '0 auto 24px',
            }}
          >
            Real businesses, real lessons. Learn how the world works through fun,
            interactive adventures designed for young entrepreneurs.
          </p>

          {/* Stats Bar */}
          <div
            className={loaded ? 'animate-in animate-in-delay-3' : ''}
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'Modules', value: '6', icon: '📚' },
              { label: 'Skills', value: '24+', icon: '⚡' },
              { label: 'Ages', value: '5-12', icon: '👦' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '3px solid #2D7B5F',
                  borderRadius: 100,
                  padding: '8px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                <span>{stat.icon}</span>
                <span style={{ color: '#2D7B5F' }}>{stat.value}</span>
                <span style={{ color: '#5E8C7F', fontWeight: 600 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section style={{
        padding: '0 24px 60px',
        maxWidth: 1100,
        margin: '0 auto',
        width: '100%',
        marginTop: -40,
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Section Title */}
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <span style={{
            background: '#F4C430',
            padding: '6px 16px',
            borderRadius: 100,
            fontSize: 12,
            fontWeight: 800,
            textTransform: 'uppercase' as const,
            border: '2px solid #2D7B5F',
            letterSpacing: 1,
          }}>
            Choose Your Adventure
          </span>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {MODULES.map((mod, i) => (
            <ModuleCard key={mod.id} module={mod} index={i} loaded={loaded} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        padding: '60px 24px',
        background: 'linear-gradient(180deg, #F5E6D3 0%, #FFF8F0 100%)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            textAlign: 'center',
            marginBottom: 40,
          }}>
            How It Works
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}>
            {[
              {
                step: '1',
                icon: '🎯',
                title: 'Pick a Business',
                desc: 'Choose a real-world business model that excites you.',
                gradient: 'var(--gradient-pink)',
              },
              {
                step: '2',
                icon: '🧠',
                title: 'Learn by Doing',
                desc: 'Interactive lessons, quizzes, and hands-on challenges.',
                gradient: 'var(--gradient-blue)',
              },
              {
                step: '3',
                icon: '🏆',
                title: 'Earn & Build',
                desc: 'Collect XP, unlock badges, and build your business plan.',
                gradient: 'var(--gradient-yellow)',
              },
              {
                step: '4',
                icon: '🚀',
                title: 'Launch It!',
                desc: 'Put your knowledge into practice with a real mini-project.',
                gradient: 'var(--gradient-green)',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: item.gradient,
                  borderRadius: 32,
                  padding: 24,
                  border: '6px solid #2D7B5F',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(45,123,95,0.1)',
                }}
              >
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: '#2D7B5F',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 16,
                  margin: '0 auto 12px',
                }}>
                  {item.step}
                </div>
                <div style={{ fontSize: 40, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#5E8C7F', fontWeight: 600 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for App */}
      <section style={{
        padding: '48px 24px',
        textAlign: 'center',
        background: 'var(--mt-warm-white)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📱</div>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>
            Part of the MomTalk Family
          </h2>
          <p style={{ color: '#5E8C7F', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>
            Business Model Learning is a module inside MomTalk — the AI-powered family operating system
            that helps moms and kids thrive together.
          </p>
          <a
            href="https://momtalk.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              background: '#2D7B5F',
              color: 'white',
              borderRadius: 100,
              fontWeight: 800,
              fontSize: 16,
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(45,123,95,0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            Explore MomTalk.ai
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Module Card Component ─── */
interface Module {
  id: string;
  title: string;
  emoji: string;
  description: string;
  path: string;
  gradient: string;
  tag: string;
  tagColor: string;
  status: 'available' | 'coming-soon';
  skills: string[];
}

function ModuleCard({ module: mod, index, loaded }: { module: Module; index: number; loaded: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isAvailable = mod.status === 'available';

  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={loaded ? `animate-in animate-in-delay-${Math.min(index + 1, 5)}` : ''}
      style={{
        background: mod.gradient,
        borderRadius: 32,
        border: '6px solid #2D7B5F',
        padding: 24,
        cursor: isAvailable ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        transform: hovered && isAvailable ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered && isAvailable
          ? '0 12px 40px rgba(45,123,95,0.2)'
          : '0 4px 20px rgba(45,123,95,0.1)',
        opacity: isAvailable ? 1 : 0.7,
        position: 'relative' as const,
        overflow: 'hidden',
      }}
    >
      {/* Emoji + Tag Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{
          width: 56,
          height: 56,
          background: 'rgba(255,255,255,0.9)',
          borderRadius: 20,
          border: '3px solid #2D7B5F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          animation: hovered ? 'wiggle 0.5s ease' : undefined,
        }}>
          {mod.emoji}
        </div>
        <span style={{
          background: isAvailable ? mod.tagColor : 'rgba(94,140,127,0.3)',
          padding: '6px 14px',
          borderRadius: 100,
          fontSize: 11,
          fontWeight: 800,
          textTransform: 'uppercase' as const,
          border: '2px solid #2D7B5F',
          letterSpacing: 0.5,
          color: '#2D7B5F',
        }}>
          {mod.tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 20,
        fontWeight: 800,
        marginBottom: 8,
        color: '#2D7B5F',
      }}>
        {mod.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 14,
        color: '#5E8C7F',
        fontWeight: 600,
        marginBottom: 16,
        lineHeight: 1.5,
      }}>
        {mod.description}
      </p>

      {/* Skills */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {mod.skills.map((skill) => (
          <span
            key={skill}
            style={{
              background: 'rgba(255,255,255,0.7)',
              padding: '4px 10px',
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 700,
              color: '#2D7B5F',
              border: '1.5px solid rgba(45,123,95,0.3)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Arrow indicator for available modules */}
      {isAvailable && (
        <div style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#2D7B5F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 18,
          transition: 'transform 0.2s ease',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        }}>
          →
        </div>
      )}
    </div>
  );

  if (isAvailable) {
    return <Link to={mod.path} style={{ textDecoration: 'none' }}>{card}</Link>;
  }
  return card;
}
