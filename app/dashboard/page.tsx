import type { Metadata } from 'next';
import { TrendingUp, Star, CalendarDays, Euro, AlertCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard — Espace propriétaire | Les Toits du Lac',
};

const kpis = [
  {
    label: "Taux d'occupation (avril)",
    value: '72%',
    sub: '+8% vs mois dernier',
    positive: true,
    icon: CalendarDays,
    color: '#C8A55C',
  },
  {
    label: 'Revenus nets (avril)',
    value: '1 840 €',
    sub: 'Après commission 18%',
    positive: true,
    icon: Euro,
    color: '#C8A55C',
  },
  {
    label: 'Note voyageurs',
    value: '4.87 ★',
    sub: '32 avis au total',
    positive: true,
    icon: Star,
    color: '#C8A55C',
  },
  {
    label: 'RevPAR (avril)',
    value: '89 €',
    sub: 'Revenu par nuit disponible',
    positive: true,
    icon: TrendingUp,
    color: '#C8A55C',
  },
];

const reservations = [
  { voyageur: 'Marie L.', arrivee: '28 avr.', depart: '02 mai', nuits: 4, montant: '480 €', statut: 'Confirmée', plateforme: 'Airbnb' },
  { voyageur: 'Thomas R.', arrivee: '04 mai', depart: '07 mai', nuits: 3, montant: '360 €', statut: 'Confirmée', plateforme: 'Booking' },
  { voyageur: 'Sarah & Marc', arrivee: '10 mai', depart: '17 mai', nuits: 7, montant: '1 050 €', statut: 'Confirmée', plateforme: 'Airbnb' },
  { voyageur: 'Camille D.', arrivee: '19 mai', depart: '21 mai', nuits: 2, montant: '240 €', statut: 'En attente', plateforme: 'Airbnb' },
  { voyageur: 'Famille Petit', arrivee: '24 mai', depart: '31 mai', nuits: 7, montant: '1 120 €', statut: 'Confirmée', plateforme: 'Abritel' },
];

const alertes = [
  { type: 'info', text: 'Prochaine inspection trimestrielle : 15 mai 2026' },
  { type: 'success', text: 'Rapport mensuel mars disponible dans Rapports' },
  { type: 'info', text: 'Haute saison : les prix ont été ajustés pour juin–août' },
];

const revenusParMois = [
  { mois: 'Jan', revenu: 1120, taux: 42 },
  { mois: 'Fév', revenu: 980, taux: 38 },
  { mois: 'Mar', revenu: 1480, taux: 58 },
  { mois: 'Avr', revenu: 1840, taux: 72 },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
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
          Bonjour 👋
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14,
            color: '#64748B',
            fontWeight: 300,
          }}
        >
          Vue d&apos;ensemble de votre bien — T2 Rue Carnot, Annecy
        </p>
      </div>

      {/* KPIs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          marginBottom: 32,
        }}
      >
        {kpis.map(({ label, value, sub, icon: Icon, color }) => (
          <div
            key={label}
            style={{
              background: '#FFFFFF',
              borderRadius: 14,
              padding: '22px 24px',
              border: '1px solid #F0EADE',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 12,
                  color: '#64748B',
                  fontWeight: 300,
                  lineHeight: 1.4,
                  maxWidth: 120,
                }}
              >
                {label}
              </p>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: 'rgba(200,165,92,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={16} color={color} strokeWidth={1.5} />
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 700,
                color: '#0C1A2E',
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
                color: '#C8A55C',
                fontWeight: 400,
              }}
            >
              {sub}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, marginBottom: 24 }}>
        {/* Mini graphique revenus */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 14,
            padding: '24px',
            border: '1px solid #F0EADE',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontWeight: 600,
              color: '#0C1A2E',
              marginBottom: 20,
            }}
          >
            Revenus & occupation — 2026
          </h2>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 120 }}>
            {revenusParMois.map(({ mois, revenu, taux }) => {
              const maxRevenu = 2000;
              const h = Math.round((revenu / maxRevenu) * 100);
              return (
                <div key={mois} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 10,
                      color: '#64748B',
                      fontWeight: 300,
                    }}
                  >
                    {revenu.toLocaleString('fr-FR')} €
                  </span>
                  <div
                    style={{
                      width: '100%',
                      height: h,
                      background: 'linear-gradient(180deg, #C8A55C, #B8943F)',
                      borderRadius: '4px 4px 0 0',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 11,
                      color: '#0C1A2E',
                      fontWeight: 500,
                    }}
                  >
                    {mois}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 10,
                      color: '#64748B',
                      fontWeight: 300,
                    }}
                  >
                    {taux}%
                  </span>
                </div>
              );
            })}
          </div>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11,
              color: '#64748B',
              fontWeight: 300,
              marginTop: 12,
            }}
          >
            Revenus nets propriétaire (après commission 18%) · Taux d&apos;occupation mensuel
          </p>
        </div>

        {/* Alertes */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 14,
            padding: '24px',
            border: '1px solid #F0EADE',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontWeight: 600,
              color: '#0C1A2E',
              marginBottom: 16,
            }}
          >
            Notifications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {alertes.map(({ type, text }, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  padding: '10px 14px',
                  borderRadius: 8,
                  background: type === 'success' ? 'rgba(200,165,92,0.06)' : 'rgba(12,26,46,0.04)',
                  border: `1px solid ${type === 'success' ? 'rgba(200,165,92,0.2)' : 'rgba(12,26,46,0.08)'}`,
                }}
              >
                {type === 'success' ? (
                  <CheckCircle2 size={14} color="#C8A55C" strokeWidth={1.5} style={{ marginTop: 1, flexShrink: 0 }} />
                ) : (
                  <AlertCircle size={14} color="#64748B" strokeWidth={1.5} style={{ marginTop: 1, flexShrink: 0 }} />
                )}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12,
                    color: '#0C1A2E',
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Réservations à venir */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 14,
          padding: '24px',
          border: '1px solid #F0EADE',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontWeight: 600,
              color: '#0C1A2E',
            }}
          >
            Réservations à venir
          </h2>
          <a
            href="/dashboard/reservations"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: '#C8A55C',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Voir tout →
          </a>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
            <thead>
              <tr>
                {['Voyageur', 'Arrivée', 'Départ', 'Nuits', 'Montant', 'Plateforme', 'Statut'].map((h) => (
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
                      padding: '8px 12px',
                      borderBottom: '1px solid #F0EADE',
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
                  <td style={{ padding: '12px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: '#0C1A2E' }}>
                    {r.voyageur}
                  </td>
                  <td style={{ padding: '12px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {r.arrivee}
                  </td>
                  <td style={{ padding: '12px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {r.depart}
                  </td>
                  <td style={{ padding: '12px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>
                    {r.nuits}n
                  </td>
                  <td style={{ padding: '12px', fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 600, color: '#0C1A2E' }}>
                    {r.montant}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: '#64748B',
                        background: '#F4F0E8',
                        borderRadius: 20,
                        padding: '3px 10px',
                      }}
                    >
                      {r.plateforme}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: r.statut === 'Confirmée' ? '#C8A55C' : '#64748B',
                        background: r.statut === 'Confirmée' ? 'rgba(200,165,92,0.1)' : 'rgba(100,116,139,0.1)',
                        borderRadius: 20,
                        padding: '3px 10px',
                      }}
                    >
                      {r.statut}
                    </span>
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
