'use client';

import { Sparkles } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { GOLD, GOLD_LIGHT, NAVY } from '@/constants/colors';

export default function OffreDecouverte() {
  const { ref, inView: visible } = useInView<HTMLDivElement>(0.1);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '0 32px' }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          borderRadius: 20,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #C8A55C, #B8943F, #E8D5A3)',
          padding: '56px 48px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <Sparkles size={32} color="#0C1A2E" strokeWidth={1.5} style={{ marginBottom: 16 }} />
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: '#0C1A2E',
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Offre Découverte
          </h3>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 18,
              color: 'rgba(12,26,46,0.8)',
              fontWeight: 400,
              marginBottom: 8,
              lineHeight: 1.6,
            }}
          >
            1 à 2 mois à 0% de commission — testez notre gestion sans risque.
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14,
              color: 'rgba(12,26,46,0.6)',
              fontWeight: 300,
              marginBottom: 28,
            }}
          >
            Puis 18% de commission (vs 20% tarif standard). Réservée à nos premiers partenaires.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                background: '#0C1A2E',
                color: '#C8A55C',
                border: 'none',
                borderRadius: 10,
                padding: '16px 40px',
                cursor: 'pointer',
                letterSpacing: 0.5,
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(12,26,46,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              En profiter maintenant
            </button>
            <a
              href="/offre-decouverte"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                background: 'transparent',
                color: '#0C1A2E',
                border: '1px solid rgba(12,26,46,0.3)',
                borderRadius: 10,
                padding: '16px 40px',
                cursor: 'pointer',
                letterSpacing: 0.5,
                transition: 'all 0.3s',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#0C1A2E';
                (e.currentTarget as HTMLElement).style.background = 'rgba(12,26,46,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(12,26,46,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              Voir le détail de l&apos;offre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
