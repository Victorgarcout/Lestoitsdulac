'use client';

import { useInView } from '@/hooks/useInView';
import { TEAM_MEMBERS } from '@/constants/content';
import { GOLD, NAVY, NAVY_LIGHT, CREAM, WHITE } from '@/constants/colors';

export default function Team() {
  const { ref, inView: visible } = useInView<HTMLElement>(0.1);

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="equipe"
      ref={ref}
      style={{ padding: '100px 32px', background: '#FFFFFF' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={anim(0)}>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: '#C8A55C',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              L&apos;équipe
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 600,
                color: '#0C1A2E',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Deux hôteliers, un objectif
            </h2>
            <div
              style={{
                width: 50,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #C8A55C, transparent)',
                margin: '0 auto',
                borderRadius: 1,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 40,
          }}
        >
          {TEAM_MEMBERS.map(({ icon: Icon, name, role, bio, tags }, i) => (
            <div key={i} style={anim(0.15 + i * 0.1)}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #0C1A2E, #162742)',
                  borderRadius: 20,
                  padding: '40px 32px',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <Icon size={28} color="#0C1A2E" strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: '#FAF6EE',
                    marginBottom: 4,
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    color: '#C8A55C',
                    fontWeight: 500,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    marginBottom: 20,
                  }}
                >
                  {role}
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {bio}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 11,
                        color: '#C8A55C',
                        border: '1px solid rgba(200,165,92,0.3)',
                        borderRadius: 20,
                        padding: '5px 12px',
                        fontWeight: 400,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
