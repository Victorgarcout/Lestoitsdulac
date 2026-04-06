# Les Toits du Lac — Conventions projet

## Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- Fonts : Cormorant Garamond (titres) + Outfit (corps)
- Icons : lucide-react

## Palette de couleurs
| Variable | Hex | Usage |
|----------|-----|-------|
| `navy` | `#0C1A2E` | Fond principal, textes sur fond clair |
| `navy-light` | `#162742` | Variante navy |
| `gold` | `#C8A55C` | Accent, CTA, titres décoratifs |
| `gold-light` | `#E8D5A3` | Variante gold claire |
| `cream` | `#FAF6EE` | Fond sections claires |
| `cream-dark` | `#F0EADE` | Bordures, inputs |
| `slate` | `#64748B` | Textes secondaires |
| `roof-red` | `#9B3B2A` | Toits dans l'illustration SVG |

## Structure
```
app/
  layout.tsx          — layout root avec metadata
  page.tsx            — page d'accueil
  offre-decouverte/   — offre découverte 0% puis 18%
  pack-ete/           — pack été
  gestion-annuelle/   — plaquette classique 20%
  api/contact/        — API route formulaire de contact
  dashboard/          — espace propriétaires (mock data)
  intranet/           — espace équipe
components/
  Navbar.tsx
  Hero.tsx            — illustration SVG Annecy avec parallaxe
  Stats.tsx
  Constat.tsx
  Services.tsx
  WhyUs.tsx
  Process.tsx
  Team.tsx
  OffreDecouverte.tsx
  Contact.tsx
  Footer.tsx
```

## Règles
- Téléphone : `[Téléphone]` — Email : `[Email]`
- Tout le contenu en français
- Mobile-first, responsive
- Design premium navy/gold/cream — fidèle au fichier de référence `les_toits_du_lac_v4.jsx`
- Pas d'auth réelle dans le dashboard/intranet — structure uniquement avec mock data
