import type { LucideIcon } from 'lucide-react';
import {
  TrendingUp, Home, MessageCircle, KeyRound, Paintbrush, LineChart,
  Award, MapPin, Eye, HeartHandshake, Shield,
  Users, Star,
} from 'lucide-react';

// ── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  ['probleme', 'Le constat'],
  ['services', 'Services'],
  ['pourquoi', 'Pourquoi nous'],
  ['process', 'Comment ça marche'],
  ['equipe', "L'équipe"],
  ['contact', 'Contact'],
] as const;

// ── Stats bar ────────────────────────────────────────────────────────────────

export const STATS = [
  { value: '6+', label: "Années d'hôtellerie" },
  { value: '20%', label: 'Commission transparente' },
  { value: '0', label: 'Engagement longue durée' },
  { value: '48h', label: 'Estimation gratuite' },
];

// ── Services ─────────────────────────────────────────────────────────────────

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: TrendingUp,
    title: 'Revenue management dynamique',
    desc: "Pricing ajusté quotidiennement selon la demande, la saisonnalité, les événements locaux et la concurrence. Les mêmes méthodes que les hôtels 3 et 4 étoiles.",
  },
  {
    icon: Home,
    title: 'Distribution multi-canaux',
    desc: "Publication et synchronisation sur Airbnb, Booking, Abritel et autres plateformes. Plus de visibilité, moins de nuits vides.",
  },
  {
    icon: MessageCircle,
    title: 'Communication voyageurs',
    desc: "Avant, pendant et après le séjour. Gestion des avis et réponses. Réactivité garantie pour un classement optimisé.",
  },
  {
    icon: KeyRound,
    title: 'Check-in / check-out automatisés',
    desc: "Boîte à clés ou serrure connectée. Accès autonome 24h/24. Instructions personnalisées envoyées à chaque voyageur.",
  },
  {
    icon: Paintbrush,
    title: 'Ménage & linge hôtelier',
    desc: "Nettoyage complet entre chaque séjour aux standards hôteliers. Linge de qualité en blanchisserie professionnelle. Refacturé au voyageur.",
  },
  {
    icon: LineChart,
    title: 'Reporting transparent',
    desc: "Revenus, taux d'occupation, RevPAR, comparaison marché. Chaque mois, un rapport détaillé. Visibilité totale sur la performance de votre bien.",
  },
];

// ── Why us ───────────────────────────────────────────────────────────────────

export interface ReasonItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const REASONS: ReasonItem[] = [
  {
    icon: Award,
    title: 'Deux hôteliers de métier',
    desc: "6+ ans en gestion multi-sites hôteliers, revenue management, standards qualité. Pas des gestionnaires — des professionnels de l'accueil.",
  },
  {
    icon: MapPin,
    title: 'Connaissance du terrain',
    desc: "Nous avons géré un hôtel à Annecy. Nous connaissons le bassin, sa saisonnalité, ses flux, ses tarifs — de l'intérieur.",
  },
  {
    icon: TrendingUp,
    title: 'Pricing dynamique pro',
    desc: "Les mêmes techniques de yield management que les hôtels 3 et 4 étoiles, appliquées à votre bien pour maximiser chaque nuit.",
  },
  {
    icon: Eye,
    title: 'Transparence totale',
    desc: "Reporting mensuel détaillé, accès permanent à vos données de performance. Vous savez exactement ce qui se passe.",
  },
  {
    icon: HeartHandshake,
    title: 'Intérêts alignés',
    desc: "Commission sur les revenus — pas de forfait fixe. On gagne quand vous gagnez. C'est aussi simple que ça.",
  },
  {
    icon: Shield,
    title: 'Zéro engagement',
    desc: "Préavis 1 mois. Aucun frais d'avance. Vous restez libre. C'est à nous de vous convaincre chaque mois.",
  },
];

// ── Process ───────────────────────────────────────────────────────────────────

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export const STEPS: StepItem[] = [
  {
    num: '1',
    title: 'Premier contact',
    desc: "Vous nous parlez de votre bien. Nous vous envoyons une estimation personnalisée des revenus potentiels sous 48 heures — gratuit et sans engagement.",
  },
  {
    num: '2',
    title: 'Visite & recommandations',
    desc: "Nous nous déplaçons, évaluons le potentiel de votre bien et vous faisons nos recommandations d'optimisation concrètes.",
  },
  {
    num: '3',
    title: 'Mise en route',
    desc: "Shooting photo, création d'annonce optimisée, configuration du pricing dynamique, publication multi-plateformes. Votre bien est prêt à performer.",
  },
  {
    num: '4',
    title: 'Gestion & reporting',
    desc: "Nous gérons tout au quotidien : réservations, voyageurs, clés, ménage, qualité. Chaque mois, un rapport détaillé de la performance de votre bien.",
  },
];

// ── Team ──────────────────────────────────────────────────────────────────────

export interface TeamMember {
  icon: LucideIcon;
  name: string;
  role: string;
  bio: string;
  tags: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    icon: Users,
    name: 'Victor',
    role: 'Stratégie & Revenue Management',
    bio: "Directeur multi-sites hôteliers depuis 6 ans (groupe somnOO). A géré l'Hôtel Première Classe d'Annecy. Spécialiste revenue management, distribution OTA et optimisation tarifaire. Investisseur immobilier — il comprend vos enjeux parce qu'il en est un.",
    tags: ['Yield Management', 'Distribution OTA', 'Multi-sites', 'Investisseur LMNP'],
  },
  {
    icon: Star,
    name: 'Lamyae',
    role: 'Opérations & Expérience voyageur',
    bio: "Cheffe de réception hôtelière. Expérience directe de l'accueil voyageurs, du contrôle qualité et de la gestion opérationnelle au quotidien. C'est elle qui garantit que chaque voyageur vit une expérience irréprochable.",
    tags: ['Accueil & Qualité', 'PMS / Channel Manager', 'Front Office', 'Standards hôteliers'],
  },
];

// ── Contact ───────────────────────────────────────────────────────────────────

export const CONTACT_INFO = {
  phone: '[Téléphone]',
  email: '[Email]',
  location: 'Annecy, Haute-Savoie',
};
