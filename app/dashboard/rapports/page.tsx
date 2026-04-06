import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import DownloadButton from './DownloadButton';

export const metadata: Metadata = {
  title: 'Rapports — Dashboard propriétaire | Les Toits du Lac',
};

const rapports = [
  {
    mois: 'Mars 2026',
    date: '02 avril 2026',
    revenus: '1 480 €',
    taux: '58%',
    nuits: 18,
    note: '4.82',
    disponible: true,
  },
  {
    mois: 'Février 2026',
    date: '02 mars 2026',
    revenus: '980 €',
    taux: '38%',
    nuits: 11,
    note: '4.90',
    disponible: true,
  },
  {
    mois: 'Janvier 2026',
    date: '01 février 2026',
    revenus: '1 120 €',
    taux: '42%',
    nuits: 13,
    note: '4.85',
    disponible: true,
  },
];

export default function RapportsPage() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 34,
            fontWeight: 600,
            color: '#0C1A2E',
            marginBottom: 4,
          }}
        >
          Rapports mensuels
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14,
            color: '#64748B',
            fontWeight: 300,
          }}
        >
          Rapports de performance de votre bien — T2 Rue Carnot, Annecy
        </p>
      </div>

      {/* Rapport courant — Avril */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0C1A2E, #162742)',
          borderRadius: 16,
          padding: '32px 36px',
          marginBottom: 28,
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
            background: 'radial-gradient(ellipse at right, rgba(200,165,92,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-block',
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10,
              color: '#C8A55C',
              letterSpacing: 2,
              textTransform: 'uppercase',
              border: '1px solid rgba(200,165,92,0.3)',
              borderRadius: 20,
              padding: '4px 12px',
              marginBottom: 16,
            }}
          >
            Rapport en cours
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 600,
              color: '#FAF6EE',
              marginBottom: 20,
            }}
          >
            Avril 2026
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 20,
            }}
          >
            {[
              { label: 'Revenu net', value: '1 840 €' },
              { label: "Taux d'occupation", value: '72%' },
              { label: 'Nuits louées', value: '22 nuits' },
              { label: 'Note moyenne', value: '4.87 ★' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.4)',
                    fontWeight: 300,
                    marginBottom: 4,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#C8A55C',
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 300,
              marginTop: 16,
            }}
          >
            Rapport disponible début mai 2026
          </p>
        </div>
      </div>

      {/* Rapports archivés */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 14,
          border: '1px solid #F0EADE',
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #F0EADE' }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 600,
              color: '#0C1A2E',
            }}
          >
            Rapports archivés
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rapports.map((r, i) => (
            <div
              key={r.mois}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 16,
                padding: '20px 24px',
                borderBottom: i < rapports.length - 1 ? '1px solid #F0EADE' : 'none',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'rgba(200,165,92,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={18} color="#C8A55C" strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#0C1A2E',
                      marginBottom: 2,
                    }}
                  >
                    {r.mois}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      color: '#64748B',
                      fontWeight: 300,
                    }}
                  >
                    Envoyé le {r.date}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  {[
                    ['Revenu net', r.revenus],
                    ["Taux d'occ.", r.taux],
                    ['Nuits', String(r.nuits)],
                    ['Note', r.note + ' ★'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: '#64748B', fontWeight: 300, marginBottom: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                        {label}
                      </p>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 600, color: '#0C1A2E' }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <DownloadButton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
