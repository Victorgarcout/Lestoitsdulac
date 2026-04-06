'use client';

import Link from 'next/link';
import { Mountain, ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <header
      style={{
        background: 'linear-gradient(180deg, #060D1A 0%, #0A1628 40%, #0C1A2E 100%)',
        padding: '0 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '80%',
          height: '200%',
          background: 'radial-gradient(ellipse, rgba(200,165,92,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Nav bar inside header */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '24px 0 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
          }}
        >
          <Mountain size={20} color="#C8A55C" strokeWidth={1.5} />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              fontWeight: 700,
              color: '#FAF6EE',
              letterSpacing: 2,
            }}
          >
            LES TOITS DU LAC
          </span>
        </Link>
        <Link
          href="/#contact"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
            color: '#0C1A2E',
            borderRadius: 8,
            padding: '10px 22px',
            textDecoration: 'none',
            letterSpacing: 0.5,
          }}
        >
          Estimation gratuite
        </Link>
      </div>

      {/* Back link */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '24px 0 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#C8A55C')}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)')
          }
        >
          <ArrowLeft size={14} />
          Retour à l&apos;accueil
        </Link>
      </div>

      {/* Header content */}
      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
          padding: '60px 0 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            color: '#C8A55C',
            letterSpacing: 3,
            textTransform: 'uppercase',
            border: '1px solid rgba(200,165,92,0.3)',
            borderRadius: 20,
            padding: '6px 18px',
            marginBottom: 24,
          }}
        >
          {badge}
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 58px)',
            fontWeight: 600,
            color: '#FAF6EE',
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          {title}
        </h1>
        <div
          style={{
            width: 50,
            height: 2,
            background: 'linear-gradient(90deg, transparent, #C8A55C, transparent)',
            margin: '0 auto 24px',
            borderRadius: 1,
          }}
        />
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 17,
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 580,
            margin: '0 auto',
          }}
        >
          {subtitle}
        </p>
      </div>
    </header>
  );
}
