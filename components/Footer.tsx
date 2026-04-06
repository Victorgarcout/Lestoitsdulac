'use client';

import { Mountain, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const offres = [
  { label: 'Offre Découverte', href: '/offre-decouverte' },
  { label: 'Pack Été', href: '/pack-ete' },
  { label: 'Gestion Annuelle', href: '/gestion-annuelle' },
];

const sections = [
  { label: 'Le constat', href: '#probleme' },
  { label: 'Services', href: '#services' },
  { label: 'Pourquoi nous', href: '#pourquoi' },
  { label: "L'équipe", href: '#equipe' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0C1A2E',
        borderTop: '1px solid rgba(200,165,92,0.1)',
        padding: '64px 32px 32px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Mountain size={20} color="#C8A55C" strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#FAF6EE',
                  letterSpacing: 2,
                }}
              >
                LES TOITS DU LAC
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 220,
              }}
            >
              Conciergerie hôtelière & gestion de biens. Annecy, Haute-Savoie.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
              {[
                [Phone, '[Téléphone]'],
                [Mail, '[Email]'],
                [MapPin, 'Annecy, 74000'],
              ].map(([Icon, text], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon size={14} color="#C8A55C" strokeWidth={1.5} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.4)',
                      fontWeight: 300,
                    }}
                  >
                    {text as string}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Nos offres */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                color: '#C8A55C',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Nos offres
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {offres.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontWeight: 300,
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C8A55C')}
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                color: '#C8A55C',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {sections.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontWeight: 300,
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C8A55C')}
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')
                    }
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Espace client */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                color: '#C8A55C',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Espace client
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Dashboard propriétaire', href: '/dashboard' },
                { label: 'Intranet équipe', href: '/intranet' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontWeight: 300,
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C8A55C')}
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: 'rgba(255,255,255,0.2)',
              fontWeight: 300,
            }}
          >
            © 2026 Les Toits du Lac — Tous droits réservés
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: 'rgba(255,255,255,0.2)',
              fontWeight: 300,
            }}
          >
            Conciergerie hôtelière & gestion de biens — Annecy
          </p>
        </div>
      </div>
    </footer>
  );
}
