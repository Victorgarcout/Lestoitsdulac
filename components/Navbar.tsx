'use client';

import { useState, useEffect } from 'react';
import { Mountain, Menu, X } from 'lucide-react';
import { useScrollY } from '@/hooks/useScrollY';
import { NAV_LINKS } from '@/constants/content';
import { GOLD, CREAM, NAVY } from '@/constants/colors';

export default function Navbar() {
  const scrollY = useScrollY();
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'probleme', 'services', 'pourquoi', 'process', 'equipe', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrolled = scrollY > 60;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(12,26,46,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,165,92,0.15)' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '14px 0' : '24px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', flexShrink: 0 }}
          onClick={() => scrollTo('hero')}
        >
          <Mountain size={24} color={GOLD} strokeWidth={1.5} />
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? 16 : 20,
                fontWeight: 700,
                color: CREAM,
                letterSpacing: isMobile ? 1.5 : 2,
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              LES TOITS DU LAC
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 9,
                color: GOLD,
                letterSpacing: isMobile ? 2 : 3,
                fontWeight: 400,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              Conciergerie hôtelière
            </div>
          </div>
        </div>

        {/* Desktop nav + CTA + Hamburger */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LINKS.map(([id, label]) => (
            <span
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                display: isMobile ? 'none' : 'block',
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: activeSection === id ? GOLD : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                transition: 'color 0.3s',
                letterSpacing: 0.5,
                borderBottom: activeSection === id ? `1px solid ${GOLD}` : '1px solid transparent',
                paddingBottom: 2,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = GOLD)}
              onMouseLeave={(e) => {
                if (activeSection !== id)
                  (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              {label}
            </span>
          ))}

          <button
            onClick={() => scrollTo('contact')}
            style={{
              display: isMobile ? 'none' : 'block',
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              background: `linear-gradient(135deg, ${GOLD}, #B8943F)`,
              color: NAVY,
              border: 'none',
              borderRadius: 8,
              padding: '10px 24px',
              cursor: 'pointer',
              letterSpacing: 0.5,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(200,165,92,0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Estimation gratuite
          </button>

          {/* Hamburger */}
          <button
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: CREAM,
              padding: 4,
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(12,26,46,0.98)',
            backdropFilter: 'blur(16px)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            borderTop: '1px solid rgba(200,165,92,0.15)',
          }}
        >
          {NAV_LINKS.map(([id, label]) => (
            <span
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                color: activeSection === id ? GOLD : 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
            >
              {label}
            </span>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              background: `linear-gradient(135deg, ${GOLD}, #B8943F)`,
              color: NAVY,
              border: 'none',
              borderRadius: 8,
              padding: '12px 24px',
              cursor: 'pointer',
              letterSpacing: 0.5,
              marginTop: 8,
            }}
          >
            Estimation gratuite
          </button>
        </div>
      )}
    </nav>
  );
}
