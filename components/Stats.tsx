'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '6+', label: "Années d'hôtellerie" },
  { value: '20%', label: 'Commission transparente' },
  { value: '0', label: 'Engagement longue durée' },
  { value: '48h', label: 'Estimation gratuite' },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      style={{ background: '#0C1A2E', padding: '52px 32px', position: 'relative', zIndex: 3 }}
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
        {stats.map(({ value, label }, i) => (
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
                color: '#C8A55C',
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
