import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Les Toits du Lac — Conciergerie hôtelière & gestion de biens, Annecy',
  description:
    "Deux professionnels de l'hôtellerie gèrent votre location courte durée à Annecy. Revenue management dynamique, standards hôteliers, transparence totale. Estimation gratuite sous 48h.",
  keywords: [
    'conciergerie Annecy',
    'gestion location courte durée Annecy',
    'Airbnb Annecy',
    'conciergerie hôtelière',
    'gestion Airbnb Annecy',
    'Les Toits du Lac',
  ],
  authors: [{ name: 'Les Toits du Lac' }],
  creator: 'Les Toits du Lac',
  metadataBase: new URL('https://lestoitsdulac.fr'),
  openGraph: {
    title: 'Les Toits du Lac — Conciergerie hôtelière, Annecy',
    description:
      "Deux hôteliers de métier gèrent votre bien en location courte durée. Revenue management, standards qualité, zéro charge mentale.",
    url: 'https://lestoitsdulac.fr',
    siteName: 'Les Toits du Lac',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les Toits du Lac — Conciergerie hôtelière, Annecy',
    description:
      "Deux hôteliers de métier gèrent votre bien en location courte durée. Revenue management, standards qualité, zéro charge mentale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" style={{ height: '100%' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Les Toits du Lac',
              description:
                "Conciergerie hôtelière & gestion de biens en location courte durée — Annecy",
              url: 'https://lestoitsdulac.fr',
              telephone: '[Téléphone]',
              email: '[Email]',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Annecy',
                addressRegion: 'Haute-Savoie',
                postalCode: '74000',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.8992,
                longitude: 6.1294,
              },
              priceRange: '18-20% commission',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '08:00',
                closes: '20:00',
              },
            }),
          }}
        />
      </head>
      <body style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>{children}</body>
    </html>
  );
}
