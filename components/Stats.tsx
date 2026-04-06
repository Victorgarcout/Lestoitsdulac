'use client';

import { useInView } from '@/hooks/useInView';
import { STATS } from '@/constants/content';
import { NAVY, GOLD } from '@/constants/colors';

export default function Stats() {
  const { ref, inView: visible } = useInView<HTMLElement>(0.2);

  return (
    <section
      id="stats"
      ref={ref}
      style={{ background: NAVY, padding: '52px 32px', position: 'relative', zIndex: 3 }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 32,
        }}
      >
        {STATS.map(({ value, label }, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              padding: '0 20px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 42,
                fontWeight: 700,
                color: GOLD,
                lineHeight: 1,
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                color: 'rgba(255,255,255,0.6)',
                fontWeight: 300,
                marginTop: 8,
                letterSpacing: 0.5,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
