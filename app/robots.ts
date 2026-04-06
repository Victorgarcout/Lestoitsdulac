import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/intranet/', '/api/'],
    },
    sitemap: 'https://lestoitsdulac.fr/sitemap.xml',
  };
}
