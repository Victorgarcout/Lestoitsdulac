'use client';

import { useInView } from '@/hooks/useInView';
import { useIsMobile } from '@/hooks/useIsMobile';
import { SERVICES } from '@/constants/content';
import { CREAM, CREAM_DARK, GOLD, NAVY, NAVY_LIGHT, SLATE, WHITE } from '@/constants/colors';

export default function Services() {
  const { ref, inView: visible } = useInView<HTMLElement>(0.08);
  const isMobile = useIsMobile();

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="services"
      ref={ref}
      style={{ padding: isMobile ? '48px 20px 56px' : '80px 32px 100px', background: '#FAF6EE' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
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
              Nos services
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
              Une gestion hôtelière complète
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              style={{
                ...anim(0.1 + i * 0.05),
                background: '#FFFFFF',
                borderRadius: 16,
                padding: '36px 28px',
                border: '1px solid #F0EADE',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(12,26,46,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = '#C8A55C';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = '#F0EADE';
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #0C1A2E, #162742)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Icon size={24} color="#C8A55C" strokeWidth={1.5} />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#0C1A2E',
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
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
          ))}
        </div>

        <div style={{ ...anim(0.4), textAlign: 'center', marginTop: 48 }}>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15,
              color: '#64748B',
              fontWeight: 300,
              marginBottom: 8,
            }}
          >
            Kit d&apos;accueil savoyard · Shooting photo pro · Panier gourmand · Réservation
            activités · Et plus encore
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              color: '#C8A55C',
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            OPTIONS À LA CARTE DISPONIBLES
          </p>
        </div>
      </div>
    </section>
  );
}
