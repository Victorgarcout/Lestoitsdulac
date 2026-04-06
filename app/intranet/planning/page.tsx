import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planning ménage — Intranet | Les Toits du Lac',
};

const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const dates = [28, 29, 30, 1, 2, 3, 4];
const mois = ['', '', '', 'mai', 'mai', 'mai', 'mai'];

type Couleur = 'gold' | 'red' | 'slate';

const taches: Record<number, { bien: string; tache: string; couleur: Couleur; heure?: string }[]> = {
  0: [
    { bien: 'T2 Rue Carnot', tache: 'Ménage complet — départ Marie L.', couleur: 'gold', heure: '10h' },
    { bien: 'Studio Vieille-Ville', tache: 'Check-in Thomas R.', couleur: 'red', heure: '14h' },
  ],
  1: [
    { bien: 'Appartement Lac', tache: 'Réassort produits accueil', couleur: 'slate' },
  ],
  2: [],
  3: [
    { bien: 'Appartement Lac', tache: 'Ménage + arrivée Dupont Family', couleur: 'gold', heure: '11h' },
  ],
  4: [
    { bien: 'T2 Rue Carnot', tache: 'Départ Thomas R. — état des lieux', couleur: 'slate', heure: '11h' },
    { bien: 'T2 Rue Carnot', tache: 'Ménage — arrivée Sarah & Marc', couleur: 'gold', heure: '15h' },
  ],
  5: [
    { bien: 'Studio Vieille-Ville', tache: 'Inspection trimestrielle', couleur: 'red', heure: '10h' },
  ],
  6: [],
};

const couleurStyle: Record<Couleur, { bg: string; color: string; border: string }> = {
  gold: { bg: 'rgba(200,165,92,0.12)', color: '#B8943F', border: 'rgba(200,165,92,0.3)' },
  red: { bg: 'rgba(155,59,42,0.08)', color: '#9B3B2A', border: 'rgba(155,59,42,0.2)' },
  slate: { bg: 'rgba(100,116,139,0.08)', color: '#64748B', border: 'rgba(100,116,139,0.2)' },
};

const tasksDuMois = [
  { date: '28 avr', bien: 'T2 Rue Carnot', tache: 'Ménage départ + Check-in Thomas R.', duree: '3h' },
  { date: '30 avr', bien: 'Appartement Lac', tache: 'Réassort produits', duree: '30min' },
  { date: '01 mai', bien: 'Appartement Lac', tache: 'Ménage + arrivée Dupont Family', duree: '2h' },
  { date: '04 mai', bien: 'T2 Rue Carnot', tache: 'Départ + ménage + arrivée Sarah & Marc', duree: '4h' },
  { date: '05 mai', bien: 'Studio Vieille-Ville', tache: 'Inspection trimestrielle', duree: '1h30' },
  { date: '10 mai', bien: 'T2 Rue Carnot', tache: 'Ménage départ + arrivée voyage scolaire', duree: '2h30' },
  { date: '17 mai', bien: 'T2 Rue Carnot', tache: 'Ménage complet départ Sarah & Marc', duree: '2h' },
];

export default function PlanningPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 600, color: '#0C1A2E', marginBottom: 4 }}>
          Planning ménage
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#64748B', fontWeight: 300 }}>
          Semaine du 28 avril au 4 mai 2026
        </p>
      </div>

      {/* Légende */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        {[
          { label: 'Ménage / Arrivée', couleur: 'gold' as Couleur },
          { label: 'Check-in / Urgence', couleur: 'red' as Couleur },
          { label: 'Tâche maintenance', couleur: 'slate' as Couleur },
        ].map(({ label, couleur }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: couleurStyle[couleur].bg, border: `1px solid ${couleurStyle[couleur].border}` }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#64748B', fontWeight: 300 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Calendrier semaine */}
      <div style={{ background: '#FFFFFF', borderRadius: 14, border: '1px solid rgba(200,165,92,0.15)', overflow: 'hidden', marginBottom: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid rgba(200,165,92,0.08)' }}>
          {jours.map((j, i) => (
            <div key={j} style={{
              padding: '14px 10px',
              textAlign: 'center',
              borderRight: i < 6 ? '1px solid rgba(200,165,92,0.06)' : 'none',
              background: i === 0 ? 'rgba(200,165,92,0.04)' : 'transparent',
            }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, color: '#64748B', textTransform: 'uppercase', letterSpacing: 0.5 }}>{j}</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: i === 0 ? '#C8A55C' : '#0C1A2E', lineHeight: 1.2 }}>
                {dates[i]}
              </p>
              {mois[i] && (
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 9, color: '#64748B', fontWeight: 300 }}>{mois[i]}</p>
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', minHeight: 160 }}>
          {jours.map((_, i) => (
            <div key={i} style={{
              padding: '10px 8px',
              borderRight: i < 6 ? '1px solid rgba(200,165,92,0.06)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              background: i === 0 ? 'rgba(200,165,92,0.02)' : 'transparent',
            }}>
              {(taches[i] || []).map((t, j) => {
                const s = couleurStyle[t.couleur];
                return (
                  <div key={j} style={{
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    borderRadius: 6,
                    padding: '6px 8px',
                  }}>
                    {t.heure && (
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 500, color: s.color, marginBottom: 2 }}>{t.heure}</p>
                    )}
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 400, color: '#0C1A2E', lineHeight: 1.3, marginBottom: 2 }}>{t.tache}</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 300, color: '#64748B' }}>{t.bien}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Liste complète mai */}
      <div style={{ background: '#FFFFFF', borderRadius: 14, border: '1px solid rgba(200,165,92,0.15)', overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(200,165,92,0.08)' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#0C1A2E' }}>
            Toutes les interventions — Avril / Mai 2026
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {tasksDuMois.map((t, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr auto',
              gap: 16,
              padding: '14px 22px',
              borderBottom: i < tasksDuMois.length - 1 ? '1px solid rgba(200,165,92,0.06)' : 'none',
              alignItems: 'center',
            }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 500, color: '#C8A55C' }}>{t.date}</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: '#64748B' }}>{t.bien}</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 400, color: '#0C1A2E' }}>{t.tache}</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#64748B', background: 'rgba(100,116,139,0.08)', borderRadius: 20, padding: '3px 10px', whiteSpace: 'nowrap' }}>
                {t.duree}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
