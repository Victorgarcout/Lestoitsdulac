import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pack Été — Votre bien travaille pendant vos vacances | Les Toits du Lac',
  description:
    "Partez en vacances cet été et laissez votre logement générer des revenus. On gère tout, de la mise en ligne à la remise des clés. 20% de commission, aucune avance.",
};

const inclus = [
  { title: 'Visite du bien + estimation de revenus', detail: 'Gratuit, sans engagement' },
  { title: 'Shooting photo du bien', detail: 'Inclus dans la mise en route' },
  { title: "Création d'annonce de zéro", detail: 'Titre, description, équipements, règles, optimisation référencement' },
  { title: 'Pricing dynamique', detail: "Ajustement continu des prix par un spécialiste hôtelier" },
  { title: 'Multi-diffusion', detail: 'Publication sur Airbnb, Booking et autres plateformes' },
  { title: 'Gestion des réservations', detail: "Acceptation, communication, instructions d'arrivée" },
  { title: 'Check-in / check-out', detail: 'Accès automatisé pour chaque voyageur' },
  { title: 'Ménage + linge entre chaque séjour', detail: 'Standards hôteliers. Facturé aux voyageurs, pas au propriétaire.' },
  { title: 'Contrôle qualité', detail: 'Vérification systématique du bien avant chaque arrivée' },
  { title: 'État des lieux de restitution', detail: 'Bien rendu propre et en parfait état à votre retour' },
  { title: 'Bilan de performance', detail: "Revenus générés, taux d'occupation, avis voyageurs, recommandations" },
];

const etapes = [
  {
    num: '1',
    titre: 'Rendez-vous à domicile',
    nous: "On visite votre bien, on évalue son potentiel locatif, on vous donne une estimation de revenus.",
    vous: 'Vous nous faites visiter.',
  },
  {
    num: '2',
    titre: 'Préparation du bien',
    nous: "On vous guide sur les préparatifs : rangement des affaires personnelles, petits ajustements.",
    vous: 'Vous suivez la checklist à votre rythme.',
  },
  {
    num: '3',
    titre: 'Shooting photo',
    nous: "Séance photo professionnelle du bien : lumière, cadrage, staging.",
    vous: 'Rien.',
  },
  {
    num: '4',
    titre: "Création de l'annonce",
    nous: "Rédaction du titre et de la description optimisés. Mise en ligne sur Airbnb, Booking et autres plateformes.",
    vous: 'Rien.',
  },
  {
    num: '5',
    titre: 'Pricing & calendrier',
    nous: "Définition de la stratégie tarifaire avec techniques de revenue management hôtelier.",
    vous: 'Vous nous indiquez vos dates de départ et de retour.',
  },
  {
    num: '6',
    titre: 'Remise des clés',
    nous: "On récupère les clés ou on installe un système d'accès autonome.",
    vous: 'Vous nous confiez les clés.',
  },
  {
    num: '7',
    titre: 'Vous partez',
    nous: "On gère tout : réservations, communication voyageurs, check-in/out, ménage, linge, contrôle qualité.",
    vous: 'Vous profitez de vos vacances.',
  },
  {
    num: '8',
    titre: 'Votre retour',
    nous: "Ménage complet final, état des lieux de restitution, bien rendu en parfait état.",
    vous: 'Vous récupérez vos clés et un virement.',
  },
];

export default function PackEte() {
  return (
    <>
      <PageHeader
        badge="Pack Été — Juin à Septembre"
        title="Partez en vacances.&#10;Votre bien travaille pour vous."
        subtitle="Votre logement reste vide cet été ? Annecy est l'une des destinations les plus demandées de France entre juin et septembre. Votre bien peut générer des revenus pendant votre absence."
      />

      <main style={{ background: '#FAF6EE' }}>
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 32px' }}>

          {/* Principe */}
          <div
            style={{
              background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
              borderRadius: 20,
              padding: '40px 40px',
              marginBottom: 72,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 28,
              textAlign: 'center',
            }}
          >
            {[
              { val: '20%', label: 'de commission sur les revenus générés' },
              { val: '0€', label: "d'avance, aucun frais fixe" },
              { val: '80%', label: 'des revenus locatifs pour vous' },
              { val: '5-10j', label: 'de mise en route dès le rendez-vous' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 40,
                    fontWeight: 700,
                    color: '#0C1A2E',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    color: 'rgba(12,26,46,0.7)',
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Comment ça se passe */}
          <div style={{ marginBottom: 72 }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 600,
                color: '#0C1A2E',
                marginBottom: 8,
              }}
            >
              Comment ça se passe
            </h2>
            <div
              style={{
                width: 40,
                height: 2,
                background: 'linear-gradient(90deg, #C8A55C, transparent)',
                borderRadius: 1,
                marginBottom: 40,
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {etapes.map(({ num, titre, nous, vous }, i) => (
                <div
                  key={num}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '56px 1fr 1fr',
                    gap: 24,
                    padding: '24px 0',
                    borderBottom: i < etapes.length - 1 ? '1px solid #F0EADE' : 'none',
                    alignItems: 'start',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0C1A2E, #162742)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#C8A55C',
                      flexShrink: 0,
                    }}
                  >
                    {num}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#0C1A2E',
                        marginBottom: 4,
                      }}
                    >
                      {titre}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 13,
                        color: '#64748B',
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      <strong style={{ color: '#C8A55C', fontWeight: 500 }}>Nous : </strong>
                      {nous}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 13,
                        color: '#64748B',
                        fontWeight: 300,
                        lineHeight: 1.6,
                        marginTop: 22,
                      }}
                    >
                      <strong style={{ color: '#0C1A2E', fontWeight: 500 }}>Vous : </strong>
                      {vous}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ce qui est inclus */}
          <div style={{ marginBottom: 72 }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 600,
                color: '#0C1A2E',
                marginBottom: 8,
              }}
            >
              Ce qui est inclus
            </h2>
            <div
              style={{
                width: 40,
                height: 2,
                background: 'linear-gradient(90deg, #C8A55C, transparent)',
                borderRadius: 1,
                marginBottom: 32,
              }}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 16,
              }}
            >
              {inclus.map(({ title, detail }) => (
                <div
                  key={title}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #F0EADE',
                    borderRadius: 10,
                    padding: '16px 20px',
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                  }}
                >
                  <CheckCircle
                    size={16}
                    color="#C8A55C"
                    strokeWidth={1.5}
                    style={{ marginTop: 3, flexShrink: 0 }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#0C1A2E',
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 12,
                        color: '#64748B',
                        fontWeight: 300,
                      }}
                    >
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simulation revenus */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0C1A2E, #162742)',
              borderRadius: 20,
              padding: '48px 40px',
              marginBottom: 72,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 600,
                color: '#FAF6EE',
                marginBottom: 8,
              }}
            >
              Combien ça peut rapporter ?
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14,
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 300,
                marginBottom: 32,
              }}
            >
              Estimation pour un T2 bien situé à Annecy, juillet–août 2026
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 2,
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              {[
                ['', 'Estimation basse', 'Estimation haute'],
                ['Tarif moyen / nuitée', '110 €', '150 €'],
                ["Taux d'occupation", '80%', '90%'],
                ['Revenu brut (2 mois)', '5 368 €', '8 235 €'],
                ['Commission LTDL (20%)', '−1 074 €', '−1 647 €'],
                ['Revenu net propriétaire', '4 294 €', '6 588 €'],
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'contents',
                  }}
                >
                  {row.map((cell, j) => (
                    <div
                      key={j}
                      style={{
                        padding: '14px 20px',
                        background:
                          i === 0
                            ? 'rgba(200,165,92,0.1)'
                            : i % 2 === 0
                            ? 'rgba(255,255,255,0.02)'
                            : 'transparent',
                        fontFamily:
                          j === 0
                            ? "'Outfit', sans-serif"
                            : "'Cormorant Garamond', serif",
                        fontSize: j === 0 ? 13 : 18,
                        fontWeight:
                          i === 5 ? 700 : i === 0 ? 500 : j === 0 ? 300 : 400,
                        color:
                          i === 5
                            ? '#C8A55C'
                            : i === 0
                            ? '#C8A55C'
                            : j === 0
                            ? 'rgba(255,255,255,0.5)'
                            : '#FAF6EE',
                        borderBottom:
                          i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      {cell}
                    </div>
                  ))}
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
              * Les frais de ménage et de linge sont facturés aux voyageurs en supplément — ils ne sont pas déduits de votre revenu.
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 600,
                color: '#0C1A2E',
                marginBottom: 12,
              }}
            >
              Plus vous nous contactez tôt,<br />plus on maximise vos revenus estivaux.
            </h3>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14,
                color: '#64748B',
                fontWeight: 300,
                marginBottom: 28,
              }}
            >
              Du rendez-vous à la première réservation : 5 à 10 jours.
            </p>
            <Link
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
                color: '#0C1A2E',
                borderRadius: 10,
                padding: '16px 36px',
                textDecoration: 'none',
                letterSpacing: 0.5,
              }}
            >
              Je contacte Les Toits du Lac <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
