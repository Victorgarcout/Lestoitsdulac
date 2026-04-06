'use client';

import { useEffect, useState } from 'react';
import { useScrollY } from '@/hooks/useScrollY';
import { useIsMobile } from '@/hooks/useIsMobile';
import { GOLD, NAVY } from '@/constants/colors';

export default function StickyEstimationCTA() {
  const scrollY = useScrollY();
  const isMobile = useIsMobile();
  const [heroHeight, setHeroHeight] = useState(600);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) setHeroHeight(hero.offsetHeight);
  }, []);

  useEffect(() => {
    const contact = document.getElementById('contact');
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (!isMobile) return null;

  const show = scrollY > heroHeight * 0.6 && !contactVisible;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          display: 'block',
          width: '100%',
          fontFamily: "'Outfit', sans-serif",
          fontSize: 16,
          fontWeight: 500,
          background: GOLD,
          color: NAVY,
          border: 'none',
          padding: `18px 24px calc(18px + env(safe-area-inset-bottom, 0px))`,
          cursor: 'pointer',
          letterSpacing: 0.5,
        }}
      >
        Estimation gratuite →
      </button>
    </div>
  );
}
