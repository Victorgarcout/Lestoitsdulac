'use client';

import { useInView } from '@/hooks/useInView';
import { CREAM, GOLD, NAVY, SLATE } from '@/constants/colors';

export default function Constat() {
  const { ref, inView: visible } = useInView<HTMLElement>(0.15);

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="probleme"
      ref={ref}
      style={{ padding: '100px 32px 80px', background: '#FAF6EE' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
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
            Le constat
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
            Vous êtes propriétaire,<br />pas hôtelier
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

        <p
          style={{
            ...anim(0.2),
            fontFamily: "'Outfit', sans-serif",
            fontSize: 17,
            color: '#64748B',
            lineHeight: 1.8,
            fontWeight: 300,
            marginTop: 32,
            maxWidth: 650,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Optimisation des annonces, gestion des réservations, arrivées tardives, ménage, avis
          voyageurs, pricing dynamique — la charge est réelle. Et un bien mal géré, c&apos;est du
          revenu perdu.
        </p>

        <p
          style={{
            ...anim(0.3),
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            color: '#0C1A2E',
            fontWeight: 600,
            fontStyle: 'italic',
            marginTop: 32,
            lineHeight: 1.5,
          }}
        >
          La plupart des conciergeries publient votre annonce et gèrent les clés.<br />
          Nous, on fait bien plus.
        </p>
      </div>
    </section>
  );
}
