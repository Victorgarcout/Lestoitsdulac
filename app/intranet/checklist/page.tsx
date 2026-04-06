'use client';

import { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

const checklistCheckin = [
  { id: 'ci1', category: 'Avant l\'arrivée', items: [
    'Vérifier que le bien est propre et rangé',
    'Tester la boîte à clés / serrure connectée',
    'S\'assurer que le linge est frais et bien disposé',
    'Vérifier les produits d\'accueil (café, thé, eau, savon)',
    'Activer le chauffage / climatisation selon la saison',
    'Vérifier que tous les équipements fonctionnent (TV, WiFi, électroménager)',
    'Laisser le guide d\'accueil visible (table ou bureau)',
  ]},
  { id: 'ci2', category: 'Propreté', items: [
    'Sol nettoyé et aspiré',
    'Salle de bain impeccable (WC, douche, lavabo, miroir)',
    'Cuisine propre (plans de travail, four, micro-ondes, évier)',
    'Vaisselle rangée et propre',
    'Poubelles vidées et sacs changés',
    'Vitres et surfaces sans traces',
  ]},
  { id: 'ci3', category: 'Confort voyageur', items: [
    'Oreillers disposés proprement',
    'Serviettes pliées et visibles',
    'Thermostat réglé à 20°C',
    'Rideaux / volets ouverts pour une belle lumière',
    'Une petite attention si applicable (panier, chocolats…)',
    'Informations WiFi visibles',
  ]},
];

const checklistCheckout = [
  { id: 'co1', category: 'État général', items: [
    'Vérification de l\'état général du bien',
    'Inventaire rapide des équipements',
    'Signaler tout dommage ou perte au responsable',
    'Récupérer les clés / vérifier le code boîte à clés',
    'Vérifier que le voyageur a bien pris toutes ses affaires',
  ]},
  { id: 'co2', category: 'Ménage post-départ', items: [
    'Collecter tout le linge (draps, serviettes, torchons)',
    'Trier et mettre en machine ou en sac blanchisserie',
    'Lancer le nettoyage complet',
    'Vider le frigo (restes de nourriture)',
    'Vider toutes les poubelles',
    'Vérifier les consommables (café, thé, savon) à réassortir',
  ]},
  { id: 'co3', category: 'Sécurité & fermeture', items: [
    'Toutes les fenêtres fermées',
    'Volets / stores baissés',
    'Eau chaude / chauffage en veille',
    'Tous les appareils éteints (sauf frigo)',
    'Portes verrouillées',
    'Compte rendu envoyé au propriétaire si anomalie',
  ]},
];

type ChecklistItem = {
  id: string;
  category: string;
  items: string[];
};

function Checklist({ title, checklists, color }: { title: string; checklists: ChecklistItem[]; color: string }) {
  const allItems = checklists.flatMap((c) => c.items.map((_, i) => `${c.id}-${i}`));
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  const totalDone = Object.values(checked).filter(Boolean).length;
  const totalItems = allItems.length;
  const pct = Math.round((totalDone / totalItems) * 100);

  const resetAll = () => setChecked({});
  const checkAll = () => {
    const all: Record<string, boolean> = {};
    allItems.forEach((k) => (all[k] = true));
    setChecked(all);
  };

  return (
    <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid rgba(200,165,92,0.15)', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '20px 24px', background: color === 'gold' ? 'linear-gradient(135deg, #0C1A2E, #162742)' : 'linear-gradient(135deg, #162742, #1A2D4A)', borderBottom: '1px solid rgba(200,165,92,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#FAF6EE', marginBottom: 4 }}>{title}</h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
              {totalDone} / {totalItems} tâches complétées
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={checkAll} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 400,
              background: 'rgba(200,165,92,0.15)', color: '#C8A55C',
              border: '1px solid rgba(200,165,92,0.25)', borderRadius: 6,
              padding: '6px 12px', cursor: 'pointer',
            }}>
              Tout cocher
            </button>
            <button onClick={resetAll} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 400,
              background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6,
              padding: '6px 12px', cursor: 'pointer',
            }}>
              Réinitialiser
            </button>
          </div>
        </div>
        {/* Barre de progression */}
        <div style={{ marginTop: 16, height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #C8A55C, #B8943F)', borderRadius: 3, transition: 'width 0.3s ease' }} />
        </div>
      </div>

      {/* Checklists */}
      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {checklists.map((cl) => (
          <div key={cl.id}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, color: '#C8A55C', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
              {cl.category}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {cl.items.map((item, i) => {
                const key = `${cl.id}-${i}`;
                const done = !!checked[key];
                return (
                  <div
                    key={key}
                    onClick={() => toggle(key)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      cursor: 'pointer',
                      padding: '8px 12px',
                      borderRadius: 8,
                      background: done ? 'rgba(200,165,92,0.05)' : 'transparent',
                      transition: 'background 0.2s',
                      userSelect: 'none',
                    }}
                  >
                    {done ? (
                      <CheckSquare size={16} color="#C8A55C" strokeWidth={1.5} style={{ marginTop: 1, flexShrink: 0 }} />
                    ) : (
                      <Square size={16} color="#D0C8BC" strokeWidth={1.5} style={{ marginTop: 1, flexShrink: 0 }} />
                    )}
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      fontWeight: 300,
                      color: done ? '#64748B' : '#0C1A2E',
                      textDecoration: done ? 'line-through' : 'none',
                      lineHeight: 1.4,
                    }}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ChecklistPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 600, color: '#0C1A2E', marginBottom: 4 }}>
          Checklists
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#64748B', fontWeight: 300 }}>
          Processus standardisés check-in et check-out
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: 24 }}>
        <Checklist
          title="Check-in — Préparation arrivée"
          checklists={checklistCheckin}
          color="gold"
        />
        <Checklist
          title="Check-out — Départ voyageur"
          checklists={checklistCheckout}
          color="navy"
        />
      </div>
    </div>
  );
}
