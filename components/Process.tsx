'use client';

import { useInView } from '@/hooks/useInView';
import { STEPS } from '@/constants/content';
import { CREAM, GOLD, NAVY, NAVY_LIGHT, SLATE } from '@/constants/colors';

export default function Process() {
  const { ref, inView: visible } = useInView<HTMLElement>(0.1);

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="process"
      ref={ref}
      style={{ padding: '100px 32px', background: '#FAF6EE' }}
    >
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
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
              Comment ça marche
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
              De l&apos;estimation à la performance
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {STEPS.map(({ num, title, desc }, i) => (
            <div
              key={i}
              style={{
                ...anim(0.1 + i * 0.1),
                display: 'flex',
                gap: 24,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  minWidth: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0C1A2E, #162742)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#C8A55C',
                }}
              >
                {num}
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#0C1A2E',
                    marginBottom: 6,
                  }}
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14,
                    color: '#64748B',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
