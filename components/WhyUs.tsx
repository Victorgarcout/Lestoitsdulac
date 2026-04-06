'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, MapPin, TrendingUp, Eye, HeartHandshake, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Deux hôteliers de métier',
    desc: "6+ ans en gestion multi-sites hôteliers, revenue management, standards qualité. Pas des gestionnaires — des professionnels de l'accueil.",
  },
  {
    icon: MapPin,
    title: 'Connaissance du terrain',
    desc: "Nous avons géré un hôtel à Annecy. Nous connaissons le bassin, sa saisonnalité, ses flux, ses tarifs — de l'intérieur.",
  },
  {
    icon: TrendingUp,
    title: 'Pricing dynamique pro',
    desc: 'Les mêmes techniques de yield management que les hôtels 3 et 4 étoiles, appliquées à votre bien pour maximiser chaque nuit.',
  },
  {
    icon: Eye,
    title: 'Transparence totale',
    desc: "Reporting mensuel détaillé, accès permanent à vos données de performance. Vous savez exactement ce qui se passe.",
  },
  {
    icon: HeartHandshake,
    title: 'Intérêts alignés',
    desc: "Commission sur les revenus — pas de forfait fixe. On gagne quand vous gagnez. C'est aussi simple que ça.",
  },
  {
    icon: Shield,
    title: 'Zéro engagement',
    desc: "Préavis 1 mois. Aucun frais d'avance. Vous restez libre. C'est à nous de vous convaincre chaque mois.",
  },
];

export default function WhyUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="pourquoi"
      ref={ref}
      style={{
        padding: '100px 32px',
        background: '#0C1A2E',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at right, rgba(200,165,92,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
              Pourquoi nous
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 600,
                color: '#FAF6EE',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Pas une conciergerie de plus
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
          }}
        >
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              style={{
                ...anim(0.1 + i * 0.08),
                padding: '28px 24px',
                borderRadius: 14,
                border: '1px solid rgba(200,165,92,0.12)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,165,92,0.35)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(200,165,92,0.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,165,92,0.12)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              <Icon size={22} color="#C8A55C" strokeWidth={1.5} style={{ marginBottom: 14 }} />
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#FAF6EE',
                  marginBottom: 8,
                }}
              >
                {title}
              </h4>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
