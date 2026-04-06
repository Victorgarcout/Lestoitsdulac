# Les Toits du Lac — Conventions projet

## Stack
- Next.js (App Router), TypeScript
- Fonts : Cormorant Garamond (titres) + Outfit (corps) via Google Fonts
- Icons : lucide-react uniquement
- Styling : CSS-in-JS inline — ne pas migrer vers Tailwind ou CSS modules

## Palette de couleurs — source de vérité : `constants/colors.ts`
| Constante     | Hex       | Usage                             |
|---------------|-----------|-----------------------------------|
| `NAVY`        | `#0C1A2E` | Fond principal, textes sur fond clair |
| `NAVY_LIGHT`  | `#162742` | Variante navy                    |
| `GOLD`        | `#C8A55C` | Accent, CTA, titres décoratifs   |
| `GOLD_LIGHT`  | `#E8D5A3` | Variante gold claire             |
| `CREAM`       | `#FAF6EE` | Fond sections claires            |
| `CREAM_DARK`  | `#F0EADE` | Bordures, inputs                 |
| `SLATE`       | `#64748B` | Textes secondaires               |
| `ROOF_RED`    | `#9B3B2A` | Toits dans l'illustration SVG    |
| `WHITE`       | `#FFFFFF` | Blanc pur                        |

## Architecture fichiers
```
app/
  layout.tsx          — layout root (metadata, fonts, global styles)
  page.tsx            — page d'accueil (composition des sections)
  globals.css         — reset, keyframes, classes grain/animate-*
  offre-decouverte/   — page offre découverte 0% puis 18%
  pack-ete/           — pack été
  gestion-annuelle/   — plaquette classique 20%
  api/contact/        — API route formulaire de contact
  dashboard/          — espace propriétaires (mock data)
  intranet/           — espace équipe
constants/
  colors.ts           — palette complète (importer d'ici, pas de valeurs en dur)
  content.ts          — données structurées FR (services, stats, équipe…)
components/
  Navbar.tsx
  Hero.tsx            — illustration SVG Annecy avec parallaxe multi-couches
  Stats.tsx
  Constat.tsx
  Services.tsx
  WhyUs.tsx
  Process.tsx
  Team.tsx
  OffreDecouverte.tsx
  Contact.tsx
  Footer.tsx
hooks/
  useScrollY.ts       — retourne window.scrollY en temps réel
  useInView.ts        — retourne { ref, inView } via IntersectionObserver
```

## Règles de développement
- **Un fichier = une responsabilité** — pas de monolithe
- **Edits ciblés** — ne jamais réécrire un fichier entier pour un changement partiel
- **Pas de code mort**, pas d'imports inutilisés, pas de console.log
- **Importer les couleurs** depuis `@/constants/colors`, jamais en valeur litérale
- **Importer le contenu** (données structurées) depuis `@/constants/content`
- **Animations** : scroll reveal via `useInView`, parallax via `useScrollY` — pas de lib externe
- **Responsive** : géré en JS (état `isMobile`) — pas de classes Tailwind utilitaires

## Contenu
- Téléphone : `[Téléphone]` — Email : `[Email]`
- Tout le contenu en français
- Design fidèle au fichier de référence `les_toits_du_lac_v4.jsx` (dans Desktop/Lestoitsdulac/)

## Ce qu'il ne faut PAS faire
- Ne pas ajouter Tailwind, styled-components, framer-motion, GSAP
- Ne pas ajouter react-router (single page, navigation scroll uniquement)
- Ne pas modifier la palette, les fonts, ou le tone of voice
- Ne pas créer de fichiers TypeScript supplémentaires si un .ts existant convient
- Ne pas "améliorer" le design — restructurer le code, pas le design
- Pas d'auth réelle dans dashboard/intranet — mock data uniquement
