import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import OptionCard from '@/components/OptionCard';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestion Annuelle — 20% commission | Les Toits du Lac',
  description:
    "La plaquette complète des Toits du Lac : gestion hôtelière à l'année, 20% de commission, revenue management inclus, zéro engagement. Annecy.",
};

const serviceInclus = [
  {
    title: "Création & optimisation de l'annonce",
    desc: "Titre, description, équipements, règles. Optimisé pour le référencement sur Airbnb et Booking.",
  },
  {
    title: 'Distribution multi-canaux',
    desc: "Publication et synchronisation sur Airbnb, Booking, Abritel et autres plateformes.",
  },
  {
    title: 'Gestion des réservations',
    desc: "Acceptation, confirmation, communication voyageurs, instructions d'arrivée.",
  },
  {
    title: 'Check-in / check-out automatisés',
    desc: "Boîte à clés ou serrure connectée. Accès autonome 24h/24.",
  },
  {
    title: 'Communication voyageurs',
    desc: "Avant, pendant et après le séjour. Gestion des avis et réponses.",
  },
  {
    title: 'Revenue management dynamique',
    desc: "Pricing ajusté quotidiennement selon la demande, la saisonnalité et la concurrence.",
  },
];

const optionsOps = [
  { name: 'Ménage', desc: "Nettoyage complet entre chaque séjour aux standards hôteliers. Refacturé au voyageur." },
  { name: 'Fourniture du linge', desc: "Draps, serviettes de qualité hôtelière. Blanchisserie professionnelle." },
  { name: 'Pack ménage + linge', desc: "Formule groupée ménage et linge." },
  { name: 'Inspection trimestrielle', desc: "Vérification complète du bien avec rapport photo." },
  { name: 'Dépannage urgence', desc: "Coordination d'intervention rapide (plombier, serrurier, électricien)." },
  { name: 'Préparation saisonnière', desc: "Mise en route avant chaque saison : aération, vérifications, décoration." },
];

const optionsVoyageur = [
  { name: "Kit produits d'accueil", desc: "Café, thé, eau, produits d'hygiène. La touche qui fait les avis 5★." },
  { name: 'Panier savoyard', desc: "Sélection de produits locaux à l'arrivée du voyageur." },
  { name: 'Pack weekend romantique', desc: "Roses, crémant de Savoie et attentions pour les séjours en couple." },
  { name: 'Early check-in / Late check-out', desc: "Flexibilité d'arrivée/départ selon disponibilité du calendrier." },
  { name: 'Réservation activités', desc: "Parapente, bateau, ski, restaurant, spa via notre réseau de partenaires." },
];

const optionsProprio = [
  { name: 'Accueil présentiel + état des lieux', desc: "Accueil personnalisé du voyageur avec état des lieux d'entrée/sortie." },
  { name: 'Shooting photo professionnel', desc: "Séance photo optimisée pour la location courte durée." },
  { name: 'Reporting mensuel premium', desc: "Revenus, taux d'occupation, RevPAR, comparaison marché, recommandations." },
];

const etapes = [
  { num: '1', title: 'Premier contact', desc: "Vous nous parlez de votre bien. On vous donne une estimation des revenus potentiels sous 48h — gratuit et sans engagement." },
  { num: '2', title: 'Visite du bien', desc: "On se déplace, on évalue le potentiel, on vous fait nos recommandations d'optimisation." },
  { num: '3', title: 'Mise en route', desc: "Shooting photo, création d'annonce, pricing, publication multi-plateformes. Votre bien est prêt à performer." },
  { num: '4', title: 'Gestion', desc: "On gère tout au quotidien : réservations, voyageurs, clés, ménage, qualité. Vous ne gérez rien." },
  { num: '5', title: 'Reporting', desc: "Chaque mois, un rapport détaillé de la performance de votre bien. Transparence totale." },
];

const expertise = [
  ['Revenue management hôtelier (yield, pricing dynamique)', 'Tarifs optimisés en temps réel = revenus maximisés'],
  ['Distribution multi-canaux (Airbnb, Booking, Abritel…)', 'Plus de visibilité = moins de nuits vides'],
  ['Standards qualité hôtelière (accueil, propreté, équipement)', 'Avis 5 étoiles = classement boosté = plus de réservations'],
  ['Gestion opérationnelle professionnelle', 'Zéro charge mentale pour vous'],
  ['Reporting transparent et régulier', 'Visibilité totale sur la performance de votre bien'],
];

export default function GestionAnnuelle() {
  return (
    <>
      <PageHeader
        badge="Gestion à l'année — Tarif standard"
        title="Votre bien mérite une gestion d'exception"
        subtitle="Deux professionnels de l'hôtellerie appliquent les standards des meilleurs hôtels à votre location courte durée. Plus de revenus, zéro charge mentale."
      />

      <main style={{ background: '#FAF6EE' }}>
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 32px' }}>

          {/* Expertise */}
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
              Vous êtes propriétaire, pas hôtelier
            </h2>
            <div
              style={{
                width: 40,
                height: 2,
                background: 'linear-gradient(90deg, #C8A55C, transparent)',
                borderRadius: 1,
                marginBottom: 24,
              }}
            />
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                color: '#64748B',
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: 680,
                marginBottom: 40,
              }}
            >
              Gérer un bien en location courte durée, c&apos;est un métier. Entre l&apos;optimisation des annonces,
              la gestion des réservations, les arrivées tardives, le ménage, les avis voyageurs et le pricing
              — la charge est réelle. Et un bien mal géré, c&apos;est du revenu perdu.
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#C8A55C',
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        padding: '12px 20px',
                        textAlign: 'left',
                        background: '#0C1A2E',
                        borderRadius: '8px 0 0 0',
                      }}
                    >
                      Notre expertise
                    </th>
                    <th
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#C8A55C',
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        padding: '12px 20px',
                        textAlign: 'left',
                        background: '#0C1A2E',
                        borderRadius: '0 8px 0 0',
                      }}
                    >
                      Ce que ça change pour vous
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expertise.map(([exp, impact], i) => (
                    <tr
                      key={i}
                      style={{
                        background: i % 2 === 0 ? '#FFFFFF' : '#FAF6EE',
                      }}
                    >
                      <td
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 14,
                          fontWeight: 400,
                          color: '#0C1A2E',
                          padding: '14px 20px',
                          borderBottom: '1px solid #F0EADE',
                        }}
                      >
                        {exp}
                      </td>
                      <td
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 14,
                          fontWeight: 300,
                          color: '#64748B',
                          padding: '14px 20px',
                          borderBottom: '1px solid #F0EADE',
                        }}
                      >
                        {impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modèle */}
          <div
            style={{
              background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
              borderRadius: 20,
              padding: '40px',
              marginBottom: 72,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 30,
                fontWeight: 700,
                color: '#0C1A2E',
                marginBottom: 24,
              }}
            >
              Notre modèle — Simple, transparent, aligné sur vos intérêts
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 20,
              }}
            >
              {[
                ['Commission', '20% des revenus locatifs générés'],
                ['Frais de ménage & linge', 'Facturés aux voyageurs, pas au propriétaire'],
                ['Engagement', 'Aucun — préavis 1 mois'],
                ["Frais d'avance", 'Aucun'],
                ['Options', 'Tarifs sur demande, choisissez uniquement ce dont vous avez besoin'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    background: 'rgba(12,26,46,0.08)',
                    borderRadius: 10,
                    padding: '16px 18px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: 'rgba(12,26,46,0.5)',
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#0C1A2E',
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services inclus */}
          <div style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 600,
                color: '#0C1A2E',
                marginBottom: 8,
              }}
            >
              Gestion complète — inclus dans la commission
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
              {serviceInclus.map(({ title, desc }) => (
                <div
                  key={title}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #F0EADE',
                    borderLeft: '3px solid #C8A55C',
                    borderRadius: 10,
                    padding: '18px 20px',
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
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#0C1A2E',
                        marginBottom: 4,
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 13,
                        color: '#64748B',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Options */}
          {[
            { title: 'Options à la carte — Opérations & entretien', items: optionsOps },
            { title: 'Options à la carte — Expérience voyageur', items: optionsVoyageur },
            { title: 'Options à la carte — Services propriétaire', items: optionsProprio },
          ].map(({ title, items }) => (
            <div key={title} style={{ marginBottom: 56 }}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 600,
                  color: '#0C1A2E',
                  marginBottom: 8,
                }}
              >
                {title}
              </h3>
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: 'linear-gradient(90deg, #C8A55C, transparent)',
                  borderRadius: 1,
                  marginBottom: 24,
                }}
              />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 14,
                }}
              >
                {items.map(({ name, desc }) => (
                  <OptionCard key={name} name={name} desc={desc} />
                ))}
              </div>
            </div>
          ))}

          {/* Process */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0C1A2E, #162742)',
              borderRadius: 20,
              padding: '48px 40px',
              marginBottom: 64,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 600,
                color: '#FAF6EE',
                marginBottom: 32,
              }}
            >
              Comment ça se passe
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {etapes.map(({ num, title, desc }) => (
                <div key={num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      minWidth: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(200,165,92,0.15)',
                      border: '1px solid rgba(200,165,92,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#C8A55C',
                    }}
                  >
                    {num}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 19,
                        fontWeight: 600,
                        color: '#FAF6EE',
                        marginBottom: 4,
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
              Parlons de votre bien
            </h3>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                color: '#64748B',
                fontWeight: 300,
                marginBottom: 8,
              }}
            >
              Recevez une estimation gratuite et personnalisée des revenus potentiels de votre bien sous 48 heures.
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14,
                color: '#64748B',
                fontWeight: 300,
                marginBottom: 28,
              }}
            >
              +33 7 60 59 52 19 — contact@lestoitsdulac.fr — lestoitsdulac.fr
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
              Estimation gratuite · Sans engagement · Sous 48h <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
