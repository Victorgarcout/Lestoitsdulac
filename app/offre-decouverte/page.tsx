import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import OptionCard from '@/components/OptionCard';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Offre Découverte — 0% puis 18% | Les Toits du Lac",
  description:
    "Testez notre gestion locative sans risque : 1 à 2 mois à 0% de commission, puis 18% (vs 20% tarif standard). Réservée aux premiers partenaires à Annecy.",
};

const serviceBase = [
  {
    title: 'Gestion des extranets',
    desc: "Création et optimisation de votre annonce Airbnb, Booking et autres plateformes. Gestion du calendrier et des demandes de réservation.",
  },
  {
    title: 'Gestion des clés',
    desc: "Check-in et check-out automatisés (boîte à clés ou serrure connectée).",
  },
  {
    title: 'Communication voyageurs',
    desc: "Messages de confirmation, instructions d'arrivée, assistance pendant le séjour, message post-séjour et gestion des avis.",
  },
];

const optionsOperations = [
  { name: 'Ménage', desc: "Nettoyage complet entre chaque séjour aux standards hôteliers. Tarif selon la surface du bien. Refacturé au voyageur." },
  { name: 'Fourniture du linge', desc: "Draps, serviettes, torchons de qualité hôtelière. Lavage et repassage en blanchisserie professionnelle." },
  { name: 'Pack ménage + linge', desc: "L'ensemble ménage et linge en formule groupée." },
  { name: 'Inspection trimestrielle', desc: "Vérification complète de l'état du bien : plomberie, électricité, usure. Rapport photo envoyé au propriétaire." },
  { name: 'Dépannage urgence', desc: "Coordination d'une intervention rapide (plombier, serrurier, électricien) en cas de problème." },
  { name: 'Préparation saisonnière', desc: "Mise en route du bien avant chaque saison pour maximiser l'attractivité et les tarifs." },
];

const optionsVoyageur = [
  { name: "Kit produits d'accueil", desc: "Café, thé, bouteille d'eau, savon, shampoing, gel douche. La petite attention qui fait la différence." },
  { name: 'Panier savoyard', desc: "Sélection de produits locaux (fromage, charcuterie, vin de Savoie) préparée pour l'arrivée." },
  { name: 'Pack weekend romantique', desc: "Bouquet de roses, crémant de Savoie et petites attentions disposées avant l'arrivée." },
  { name: 'Early check-in / Late check-out', desc: "Flexibilité d'arrivée ou de départ selon disponibilité du calendrier." },
  { name: 'Réservation activités', desc: "Parapente, bateau, ski, restaurant, spa via notre réseau de partenaires locaux." },
];

const optionsProprietaire = [
  { name: 'Revenue management dynamique', desc: "Optimisation tarifaire continue. Ajustement quotidien des prix selon la demande, la saisonnalité et la concurrence." },
  { name: 'Accueil présentiel + état des lieux', desc: "Accueil personnalisé du voyageur avec visite du bien et état des lieux d'entrée et/ou de sortie." },
  { name: 'Shooting photo professionnel', desc: "Séance photo optimisée pour la location courte durée : lumière, cadrage, staging." },
  { name: 'Reporting mensuel premium', desc: "Tableau de bord détaillé : revenus, taux d'occupation, RevPAR, comparaison marché, recommandations." },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
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
        }}
      />
    </div>
  );
}

export default function OffreDecouverte() {
  return (
    <>
      <PageHeader
        badge="Offre Découverte — Premiers partenaires"
        title={"1 à 2 mois à 0%\npuis 18% de commission"}
        subtitle="Testez notre gestion hôtelière sans risque. Vous ne payez que les options que vous choisissez. Réservée à nos premiers partenaires."
      />

      <main style={{ background: '#FAF6EE' }}>
        {/* Principe */}
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
              marginBottom: 80,
            }}
          >
            {[
              {
                step: '01',
                title: '1 à 2 mois à 0%',
                desc: "Testez notre gestion sans risque. Vous ne payez que les options que vous choisissez.",
                highlight: true,
              },
              {
                step: '02',
                title: 'Puis 18% de commission',
                desc: "Sur les revenus générés — vs 20% tarif standard. Tarif préférentiel réservé à nos premiers partenaires.",
                highlight: false,
              },
              {
                step: '03',
                title: 'Zéro engagement',
                desc: "Préavis 1 mois. Aucun frais d'avance. Vous restez libre. C'est à nous de vous convaincre.",
                highlight: false,
              },
            ].map(({ step, title, desc, highlight }) => (
              <div
                key={step}
                style={{
                  background: highlight
                    ? 'linear-gradient(135deg, #C8A55C, #B8943F)'
                    : '#FFFFFF',
                  borderRadius: 16,
                  padding: '32px 28px',
                  border: highlight ? 'none' : '1px solid #F0EADE',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: highlight ? 'rgba(12,26,46,0.2)' : 'rgba(200,165,92,0.2)',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: highlight ? '#0C1A2E' : '#0C1A2E',
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14,
                    color: highlight ? 'rgba(12,26,46,0.7)' : '#64748B',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Services inclus */}
          <SectionTitle title="Ce qui est inclus dans la base" />
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14,
              color: '#64748B',
              fontWeight: 300,
              marginBottom: 28,
            }}
          >
            Ces prestations sont incluses dans la commission (0% puis 18%). Aucun frais pendant la période d&apos;essai.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 64 }}>
            {serviceBase.map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #F0EADE',
                  borderLeft: '3px solid #C8A55C',
                  borderRadius: 10,
                  padding: '20px 24px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <CheckCircle size={18} color="#C8A55C" strokeWidth={1.5} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 600, color: '#0C1A2E', marginBottom: 4 }}>{title}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#64748B', lineHeight: 1.6, fontWeight: 300 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Options opérations */}
          <SectionTitle title="Options à la carte — Opérations & entretien" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 56 }}>
            {optionsOperations.map((o) => <OptionCard key={o.name} {...o} />)}
          </div>

          {/* Options voyageur */}
          <SectionTitle title="Options à la carte — Expérience voyageur" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 56 }}>
            {optionsVoyageur.map((o) => <OptionCard key={o.name} {...o} />)}
          </div>

          {/* Options propriétaire */}
          <SectionTitle title="Options à la carte — Services propriétaire" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 56 }}>
            {optionsProprietaire.map((o) => <OptionCard key={o.name} {...o} />)}
          </div>

          {/* Pack Sérénité */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0C1A2E, #162742)',
              borderRadius: 20,
              padding: '48px 40px',
              marginBottom: 64,
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
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11,
                  color: '#C8A55C',
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                Formule tout inclus
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#FAF6EE',
                  marginBottom: 12,
                }}
              >
                Pack Sérénité
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 300,
                  marginBottom: 8,
                  lineHeight: 1.6,
                }}
              >
                0% pendant 1 à 2 mois, puis <strong style={{ color: '#C8A55C' }}>20% de commission</strong>
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 300,
                  marginBottom: 24,
                }}
              >
                Base + ménage + linge + kit accueil + revenue management inclus. Vous ne gérez plus rien.
              </p>
              <Link
                href="/#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #C8A55C, #B8943F)',
                  color: '#0C1A2E',
                  borderRadius: 10,
                  padding: '14px 28px',
                  textDecoration: 'none',
                  letterSpacing: 0.5,
                }}
              >
                Demander le Pack Sérénité <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 600,
                color: '#0C1A2E',
                marginBottom: 16,
              }}
            >
              Intéressé(e) ? Parlons de votre bien.
            </h3>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                color: '#64748B',
                fontWeight: 300,
                marginBottom: 32,
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
              Recevoir mon estimation gratuite <ArrowRight size={16} />
            </Link>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                color: '#64748B',
                fontWeight: 300,
                marginTop: 16,
              }}
            >
              Nous vous recontactons sous 24h avec une estimation personnalisée.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
