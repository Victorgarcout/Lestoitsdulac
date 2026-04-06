'use client';

import { useState, useEffect } from 'react';
import { Mountain, Menu, X } from 'lucide-react';

const navLinks = [
  ['probleme', 'Le constat'],
  ['services', 'Services'],
  ['pourquoi', 'Pourquoi nous'],
  ['process', 'Comment ça marche'],
  ['equipe', "L'équipe"],
  ['contact', 'Contact'],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
          onClick={() => scrollTo('hero')}
        >
          <Mountain size={24} color="#C8A55C" strokeWidth={1.5} />
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 700,
                color: '#FAF6EE',
                letterSpacing: 2,
                lineHeight: 1,
              }}
            >
              LES TOITS DU LAC
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 9,
                color: '#C8A55C',
                letterSpacing: 3,
                fontWeight: 400,
                textTransform: 'uppercase',
              }}
            >
              Conciergerie hôtelière
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {navLinks.map(([id, label]) => (
            <span
              key={id}
              onClick={() => scrollTo(id)}
              className="hidden md:block"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: activeSection === id ? '#C8A55C' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                transition: 'color 0.3s',
                letterSpacing: 0.5,
                borderBottom: activeSection === id ? '1px solid #C8A55C' : '1px solid transparent',
                paddingBottom: 2,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C8A55C')}
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
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
              color: '#0C1A2E',
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#FAF6EE',
              padding: 4,
            }}
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
          {navLinks.map(([id, label]) => (
            <span
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                color: activeSection === id ? '#C8A55C' : 'rgba(255,255,255,0.7)',
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
              background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
              color: '#0C1A2E',
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
