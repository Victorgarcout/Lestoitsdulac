import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revenus — Dashboard propriétaire | Les Toits du Lac',
};

const monthly = [
  { mois: 'Janvier 2026', revenuBrut: 1366, commission: 246, revenuNet: 1120, taux: 42, nuits: 13, tarifMoyen: 105 },
  { mois: 'Février 2026', revenuBrut: 1195, commission: 215, revenuNet: 980, taux: 38, nuits: 11, tarifMoyen: 109 },
  { mois: 'Mars 2026', revenuBrut: 1805, commission: 325, revenuNet: 1480, taux: 58, nuits: 18, tarifMoyen: 100 },
  { mois: 'Avril 2026', revenuBrut: 2244, commission: 404, revenuNet: 1840, taux: 72, nuits: 22, tarifMoyen: 102 },
];

const total = monthly.reduce(
  (acc, m) => ({
    revenuBrut: acc.revenuBrut + m.revenuBrut,
    commission: acc.commission + m.commission,
    revenuNet: acc.revenuNet + m.revenuNet,
    nuits: acc.nuits + m.nuits,
  }),
  { revenuBrut: 0, commission: 0, revenuNet: 0, nuits: 0 }
);

const plateformes = [
  { nom: 'Airbnb', part: 62, revenus: '3 958 €', reservations: 18 },
  { nom: 'Booking.com', part: 28, revenus: '1 789 €', reservations: 8 },
  { nom: 'Abritel', part: 10, revenus: '639 €', reservations: 3 },
];

export default function RevenusPage() {
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
          Revenus
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14,
            color: '#64748B',
            fontWeight: 300,
          }}
        >
          Détail des revenus par mois — T2 Rue Carnot, Annecy
        </p>
      </div>

      {/* Total 2026 */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0C1A2E, #162742)',
          borderRadius: 16,
          padding: '28px 32px',
          marginBottom: 28,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 24,
        }}
      >
        {[
          { label: 'Revenu brut YTD', value: total.revenuBrut.toLocaleString('fr-FR') + ' €' },
          { label: 'Commission LTDL', value: total.commission.toLocaleString('fr-FR') + ' €' },
          { label: 'Revenu net propriétaire', value: total.revenuNet.toLocaleString('fr-FR') + ' €' },
          { label: 'Nuits louées YTD', value: total.nuits + ' nuits' },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 300,
                marginBottom: 6,
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 700,
                color: '#C8A55C',
                lineHeight: 1,
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Tableau mensuel */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 14,
          border: '1px solid #F0EADE',
          overflow: 'hidden',
          marginBottom: 28,
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
            Détail mensuel
          </h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
            <thead>
              <tr style={{ background: '#FAF6EE' }}>
                {['Mois', 'Nuits', 'Tarif moyen', 'Taux occ.', 'Revenu brut', 'Commission (18%)', 'Revenu net'].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: '#64748B',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      textAlign: 'left',
                      padding: '12px 16px',
                      borderBottom: '1px solid #F0EADE',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthly.map((m, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #F0EADE' }}>
                  <td style={{ padding: '14px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, color: '#0C1A2E' }}>
                    {m.mois}
                  </td>
                  <td style={{ padding: '14px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {m.nuits}
                  </td>
                  <td style={{ padding: '14px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {m.tarifMoyen} €
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 48,
                          height: 5,
                          background: '#F0EADE',
                          borderRadius: 3,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${m.taux}%`,
                            height: '100%',
                            background: '#C8A55C',
                            borderRadius: 3,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 12,
                          color: '#64748B',
                          fontWeight: 300,
                        }}
                      >
                        {m.taux}%
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {m.revenuBrut.toLocaleString('fr-FR')} €
                  </td>
                  <td style={{ padding: '14px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#9B3B2A' }}>
                    − {m.commission.toLocaleString('fr-FR')} €
                  </td>
                  <td style={{ padding: '14px 16px', fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700, color: '#C8A55C' }}>
                    {m.revenuNet.toLocaleString('fr-FR')} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Répartition plateformes */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 14,
          border: '1px solid #F0EADE',
          padding: '24px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontWeight: 600,
            color: '#0C1A2E',
            marginBottom: 20,
          }}
        >
          Répartition par plateforme
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {plateformes.map(({ nom, part, revenus, reservations }) => (
            <div key={nom}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, color: '#0C1A2E' }}>
                    {nom}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      color: '#64748B',
                      fontWeight: 300,
                      marginLeft: 8,
                    }}
                  >
                    {reservations} réservations
                  </span>
                </div>
                <div>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, color: '#0C1A2E' }}>
                    {revenus}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      color: '#C8A55C',
                      fontWeight: 400,
                      marginLeft: 8,
                    }}
                  >
                    {part}%
                  </span>
                </div>
              </div>
              <div
                style={{
                  height: 6,
                  background: '#F0EADE',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${part}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #C8A55C, #B8943F)',
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
