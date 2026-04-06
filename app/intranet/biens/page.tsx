import type { Metadata } from 'next';
import { MapPin, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Biens gérés — Intranet | Les Toits du Lac',
};

const biens = [
  {
    nom: 'T2 Rue Carnot',
    adresse: '12 rue Carnot, Annecy 74000',
    type: 'T2 — 38m²',
    proprietaire: 'Mme Fournier',
    telephone: '06 XX XX XX XX',
    capacite: 4,
    code: '4821',
    wifi: 'ToitsDuLac_1 / mdp: annecy2024',
    statut: 'occupé',
    offre: 'Offre Découverte — 18%',
    note: 4.87,
    avis: 32,
    prochaine: 'Départ 28 avr. 11h → Arrivée 28 avr. 16h',
    notes: "Clé boîte noire facade. Parking gratuit rue. Poubelles jaunes mercredi matin.",
  },
  {
    nom: 'Studio Vieille-Ville',
    adresse: '3 rue Grenette, Annecy 74000',
    type: 'Studio — 24m²',
    proprietaire: 'M. Blanc',
    telephone: '06 XX XX XX XX',
    capacite: 2,
    code: '6203',
    wifi: 'VilleAnnecy_2 / mdp: vieilleville',
    statut: 'occupé',
    offre: 'Gestion annuelle — 20%',
    note: 4.92,
    avis: 18,
    prochaine: 'Départ 4 mai 10h → Arrivée 5 mai 14h',
    notes: "Serrure connectée Nuki. Interphone code 25B. Linge en armoire droite.",
  },
  {
    nom: 'Appartement Lac',
    adresse: '8 allée des Pins, Annecy-le-Vieux 74940',
    type: 'T3 — 62m²',
    proprietaire: 'Famille Morel',
    telephone: '06 XX XX XX XX',
    capacite: 6,
    code: '9034',
    wifi: 'LacAnnecy_Pro / mdp: lestoits2026',
    statut: 'libre',
    offre: 'Pack Sérénité — 20%',
    note: 4.75,
    avis: 24,
    prochaine: 'Arrivée 1 mai 15h — Dupont Family (6 pers.)',
    notes: "Vue lac. Parking 2 voitures. Barbecue en terrasse (à ranger après usage). Voisin du dessus sensible au bruit.",
  },
];

const statutStyle: Record<string, { bg: string; color: string; label: string }> = {
  occupé: { bg: 'rgba(155,59,42,0.1)', color: '#9B3B2A', label: 'Occupé' },
  libre: { bg: 'rgba(200,165,92,0.1)', color: '#C8A55C', label: 'Libre' },
};

export default function BiensPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 600, color: '#0C1A2E', marginBottom: 4 }}>
          Biens gérés
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#64748B', fontWeight: 300 }}>
          3 biens actifs — Bassin annecien
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {biens.map((b, i) => (
          <div key={i} style={{
            background: '#FFFFFF',
            borderRadius: 16,
            border: '1px solid rgba(200,165,92,0.15)',
            overflow: 'hidden',
          }}>
            {/* Header bien */}
            <div style={{
              padding: '20px 24px',
              background: 'linear-gradient(135deg, #0C1A2E, #162742)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 12,
            }}>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#FAF6EE', marginBottom: 4 }}>
                  {b.nom}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={12} color="#C8A55C" strokeWidth={1.5} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{b.adresse}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  color: statutStyle[b.statut].color,
                  background: statutStyle[b.statut].bg,
                  borderRadius: 20,
                  padding: '4px 12px',
                }}>
                  {statutStyle[b.statut].label}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Star size={12} color="#C8A55C" strokeWidth={1.5} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#C8A55C', fontWeight: 500 }}>{b.note}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>({b.avis} avis)</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              {/* Infos pratiques */}
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 500, color: '#C8A55C', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
                  Infos pratiques
                </p>
                {[
                  ['Type', b.type],
                  ['Propriétaire', b.proprietaire],
                  ['Téléphone', b.telephone],
                  ['Capacité', `${b.capacite} pers.`],
                  ['Offre', b.offre],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 300, color: '#64748B', minWidth: 90 }}>{label}</span>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 500, color: '#0C1A2E' }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Accès */}
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 500, color: '#C8A55C', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
                  Accès
                </p>
                <div style={{ background: 'rgba(200,165,92,0.06)', border: '1px solid rgba(200,165,92,0.15)', borderRadius: 8, padding: '12px 14px', marginBottom: 10 }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: '#64748B', fontWeight: 300, marginBottom: 2 }}>Code boîte à clés</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#0C1A2E', letterSpacing: 4 }}>{b.code}</p>
                </div>
                <div style={{ background: '#FAF6EE', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: '#64748B', fontWeight: 300, marginBottom: 2 }}>WiFi</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 400, color: '#0C1A2E' }}>{b.wifi}</p>
                </div>
              </div>

              {/* Prochaine transition + notes */}
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 500, color: '#C8A55C', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
                  Prochaine transition
                </p>
                <div style={{ background: 'rgba(12,26,46,0.04)', borderRadius: 8, padding: '10px 14px', marginBottom: 14 }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#0C1A2E', fontWeight: 400, lineHeight: 1.5 }}>{b.prochaine}</p>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 500, color: '#C8A55C', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
                  Notes
                </p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 300, color: '#64748B', lineHeight: 1.6 }}>{b.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
