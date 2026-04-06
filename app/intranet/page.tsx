import type { Metadata } from 'next';
import { AlertTriangle, CheckCircle2, Clock, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tableau de bord opérationnel — Intranet | Les Toits du Lac',
};

const tasksDuJour = [
  { heure: '10:00', bien: 'T2 Rue Carnot', tache: 'Ménage départ Marie L.', statut: 'fait', priorite: 'haute' },
  { heure: '14:00', bien: 'Studio Vieille-Ville', tache: "Check-in Thomas R. (code: 4821)", statut: 'a-faire', priorite: 'haute' },
  { heure: '16:00', bien: 'T2 Rue Carnot', tache: 'Préparation arrivée Thomas R.', statut: 'a-faire', priorite: 'haute' },
  { heure: '17:00', bien: 'Appartement Lac', tache: 'Réassort produits accueil', statut: 'a-faire', priorite: 'normale' },
];

const alertes = [
  { type: 'warning', bien: 'T2 Rue Carnot', texte: 'Ampoule grillée salon — à remplacer avant prochaine arrivée' },
  { type: 'info', bien: 'Studio Vieille-Ville', texte: 'Voyageur Thomas R. demande early check-in 13h (accordé)' },
  { type: 'info', bien: 'Appartement Lac', texte: 'Inspection trimestrielle planifiée le 15 mai' },
];

const prochaines = [
  { date: '28 avr.', bien: 'T2 Rue Carnot', voyageur: 'Marie L.', type: 'départ', plateforme: 'Airbnb' },
  { date: '28 avr.', bien: 'Studio Vieille-Ville', voyageur: 'Thomas R.', type: 'arrivée', plateforme: 'Booking' },
  { date: '01 mai', bien: 'Appartement Lac', voyageur: 'Dupont Family', type: 'arrivée', plateforme: 'Airbnb' },
  { date: '04 mai', bien: 'T2 Rue Carnot', voyageur: 'Thomas R.', type: 'départ', plateforme: 'Booking' },
  { date: '04 mai', bien: 'T2 Rue Carnot', voyageur: 'Sarah & Marc', type: 'arrivée', plateforme: 'Airbnb' },
];

export default function IntranetPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 600, color: '#0C1A2E', marginBottom: 4 }}>
          Tableau de bord opérationnel
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#64748B', fontWeight: 300 }}>
          Lundi 28 avril 2026 — 3 biens actifs
        </p>
      </div>

      {/* KPIs rapides */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 28 }}>
        {[
          { label: 'Biens actifs', value: '3', icon: Home, color: '#C8A55C' },
          { label: 'Tâches aujourd\'hui', value: '4', icon: Clock, color: '#C8A55C' },
          { label: 'Alertes', value: '3', icon: AlertTriangle, color: '#9B3B2A' },
          { label: 'Arrivées cette semaine', value: '2', icon: CheckCircle2, color: '#C8A55C' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} style={{ background: '#FFFFFF', borderRadius: 12, padding: '18px 20px', border: '1px solid rgba(200,165,92,0.15)', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(200,165,92,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={16} color={color} strokeWidth={1.5} />
            </div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: '#0C1A2E', lineHeight: 1 }}>{value}</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#64748B', fontWeight: 300, marginTop: 2 }}>{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, marginBottom: 20 }}>
        {/* Tâches du jour */}
        <div style={{ background: '#FFFFFF', borderRadius: 14, border: '1px solid rgba(200,165,92,0.15)', overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(200,165,92,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: '#0C1A2E' }}>Tâches du jour</h2>
            <a href="/intranet/planning" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#C8A55C', textDecoration: 'none' }}>Planning complet →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {tasksDuJour.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '14px 22px', borderBottom: i < tasksDuJour.length - 1 ? '1px solid rgba(200,165,92,0.06)' : 'none', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#64748B', fontWeight: 400, minWidth: 44 }}>{t.heure}</span>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: t.statut === 'fait' ? '#C8A55C' : t.priorite === 'haute' ? '#9B3B2A' : '#64748B',
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: t.statut === 'fait' ? 300 : 500, color: t.statut === 'fait' ? '#64748B' : '#0C1A2E', textDecoration: t.statut === 'fait' ? 'line-through' : 'none' }}>
                    {t.tache}
                  </p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#64748B', fontWeight: 300 }}>{t.bien}</p>
                </div>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 10,
                  color: t.statut === 'fait' ? '#C8A55C' : '#64748B',
                  background: t.statut === 'fait' ? 'rgba(200,165,92,0.1)' : 'rgba(100,116,139,0.1)',
                  borderRadius: 20,
                  padding: '3px 8px',
                  whiteSpace: 'nowrap',
                }}>
                  {t.statut === 'fait' ? '✓ Fait' : 'À faire'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alertes */}
        <div style={{ background: '#FFFFFF', borderRadius: 14, border: '1px solid rgba(200,165,92,0.15)', overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(200,165,92,0.08)' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: '#0C1A2E' }}>Alertes</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {alertes.map(({ type, bien, texte }, i) => (
              <div key={i} style={{
                padding: '14px 22px',
                borderBottom: i < alertes.length - 1 ? '1px solid rgba(200,165,92,0.06)' : 'none',
                borderLeft: `3px solid ${type === 'warning' ? '#9B3B2A' : 'rgba(200,165,92,0.4)'}`,
              }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: type === 'warning' ? '#9B3B2A' : '#C8A55C', fontWeight: 500, marginBottom: 3, textTransform: 'uppercase', letterSpacing: 0.5 }}>{bien}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#0C1A2E', fontWeight: 300, lineHeight: 1.5 }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prochaines transitions */}
      <div style={{ background: '#FFFFFF', borderRadius: 14, border: '1px solid rgba(200,165,92,0.15)', overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(200,165,92,0.08)' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: '#0C1A2E' }}>Prochaines transitions</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
            <thead>
              <tr style={{ background: '#FAF6EE' }}>
                {['Date', 'Bien', 'Voyageur', 'Type', 'Plateforme'].map((h) => (
                  <th key={h} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 500, color: '#64748B', letterSpacing: 0.5, textTransform: 'uppercase', textAlign: 'left', padding: '10px 16px', borderBottom: '1px solid rgba(200,165,92,0.08)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prochaines.map((p, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(200,165,92,0.06)' }}>
                  <td style={{ padding: '11px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: '#0C1A2E' }}>{p.date}</td>
                  <td style={{ padding: '11px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>{p.bien}</td>
                  <td style={{ padding: '11px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>{p.voyageur}</td>
                  <td style={{ padding: '11px 16px' }}>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 400,
                      color: p.type === 'arrivée' ? '#C8A55C' : '#64748B',
                      background: p.type === 'arrivée' ? 'rgba(200,165,92,0.1)' : 'rgba(100,116,139,0.1)',
                      borderRadius: 20, padding: '3px 9px',
                    }}>
                      {p.type === 'arrivée' ? '→ Arrivée' : '← Départ'}
                    </span>
                  </td>
                  <td style={{ padding: '11px 16px', fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#64748B', fontWeight: 300 }}>{p.plateforme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
