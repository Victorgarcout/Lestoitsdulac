import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réservations — Dashboard propriétaire | Les Toits du Lac',
};

const reservations = [
  { voyageur: 'Famille Bernard', arrivee: '2026-04-14', depart: '2026-04-18', nuits: 4, montant: 480, commission: 86, net: 394, plateforme: 'Airbnb', statut: 'Terminée', note: 5 },
  { voyageur: 'Pierre M.', arrivee: '2026-04-20', depart: '2026-04-22', nuits: 2, montant: 240, commission: 43, net: 197, plateforme: 'Booking', statut: 'Terminée', note: 5 },
  { voyageur: 'Alice & Julien', arrivee: '2026-04-24', depart: '2026-04-28', nuits: 4, montant: 520, commission: 94, net: 426, plateforme: 'Airbnb', statut: 'Terminée', note: 4 },
  { voyageur: 'Marie L.', arrivee: '2026-04-28', depart: '2026-05-02', nuits: 4, montant: 480, commission: 86, net: 394, plateforme: 'Airbnb', statut: 'Confirmée', note: null },
  { voyageur: 'Thomas R.', arrivee: '2026-05-04', depart: '2026-05-07', nuits: 3, montant: 360, commission: 65, net: 295, plateforme: 'Booking', statut: 'Confirmée', note: null },
  { voyageur: 'Sarah & Marc', arrivee: '2026-05-10', depart: '2026-05-17', nuits: 7, montant: 1050, commission: 189, net: 861, plateforme: 'Airbnb', statut: 'Confirmée', note: null },
  { voyageur: 'Camille D.', arrivee: '2026-05-19', depart: '2026-05-21', nuits: 2, montant: 240, commission: 43, net: 197, plateforme: 'Airbnb', statut: 'En attente', note: null },
  { voyageur: 'Famille Petit', arrivee: '2026-05-24', depart: '2026-05-31', nuits: 7, montant: 1120, commission: 202, net: 918, plateforme: 'Abritel', statut: 'Confirmée', note: null },
];

const statutColor = {
  'Terminée': { bg: 'rgba(200,165,92,0.08)', color: '#C8A55C' },
  'Confirmée': { bg: 'rgba(12,26,46,0.06)', color: '#0C1A2E' },
  'En attente': { bg: 'rgba(100,116,139,0.08)', color: '#64748B' },
};

export default function ReservationsPage() {
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
          Réservations
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14,
            color: '#64748B',
            fontWeight: 300,
          }}
        >
          Historique et à venir — T2 Rue Carnot, Annecy
        </p>
      </div>

      {/* Stats rapides */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 14,
          marginBottom: 28,
        }}
      >
        {[
          { label: 'Total réservations', value: reservations.length },
          { label: 'Confirmées', value: reservations.filter((r) => r.statut === 'Confirmée').length },
          { label: 'Terminées', value: reservations.filter((r) => r.statut === 'Terminée').length },
          { label: 'Revenu net total', value: reservations.reduce((s, r) => s + r.net, 0).toLocaleString('fr-FR') + ' €' },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: '#FFFFFF',
              borderRadius: 12,
              padding: '18px 20px',
              border: '1px solid #F0EADE',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 700,
                color: '#C8A55C',
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                color: '#64748B',
                fontWeight: 300,
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

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
            Toutes les réservations
          </h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
            <thead>
              <tr style={{ background: '#FAF6EE' }}>
                {['Voyageur', 'Arrivée', 'Départ', 'Nuits', 'Montant brut', 'Commission', 'Net propriétaire', 'Plateforme', 'Statut', 'Note'].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      color: '#64748B',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      textAlign: 'left',
                      padding: '10px 14px',
                      borderBottom: '1px solid #F0EADE',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reservations.map((r, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #F0EADE' }}>
                  <td style={{ padding: '12px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: '#0C1A2E', whiteSpace: 'nowrap' }}>
                    {r.voyageur}
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B', whiteSpace: 'nowrap' }}>
                    {new Date(r.arrivee).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B', whiteSpace: 'nowrap' }}>
                    {new Date(r.depart).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {r.nuits}n
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {r.montant.toLocaleString('fr-FR')} €
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#9B3B2A' }}>
                    − {r.commission.toLocaleString('fr-FR')} €
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 700, color: '#C8A55C' }}>
                    {r.net.toLocaleString('fr-FR')} €
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#64748B', background: '#F4F0E8', borderRadius: 20, padding: '3px 9px' }}>
                      {r.plateforme}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: statutColor[r.statut as keyof typeof statutColor]?.color,
                        background: statutColor[r.statut as keyof typeof statutColor]?.bg,
                        borderRadius: 20,
                        padding: '3px 9px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {r.statut}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#C8A55C' }}>
                    {r.note ? '★'.repeat(r.note) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
