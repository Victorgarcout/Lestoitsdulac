'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Mountain,
  LayoutDashboard,
  TrendingUp,
  CalendarDays,
  FileText,
  Menu,
  X,
  LogOut,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Vue d\'ensemble', icon: LayoutDashboard },
  { href: '/dashboard/revenus', label: 'Revenus', icon: TrendingUp },
  { href: '/dashboard/reservations', label: 'Réservations', icon: CalendarDays },
  { href: '/dashboard/rapports', label: 'Rapports', icon: FileText },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Sidebar = () => (
    <aside
      style={{
        width: 240,
        background: '#0C1A2E',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid rgba(200,165,92,0.1)',
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '28px 24px',
          borderBottom: '1px solid rgba(200,165,92,0.08)',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Mountain size={18} color="#C8A55C" strokeWidth={1.5} />
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 15,
                fontWeight: 700,
                color: '#FAF6EE',
                letterSpacing: 1.5,
                lineHeight: 1,
              }}
            >
              LES TOITS DU LAC
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 9,
                color: '#C8A55C',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginTop: 3,
              }}
            >
              Espace propriétaire
            </div>
          </div>
        </Link>
      </div>

      {/* Bien info */}
      <div
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(200,165,92,0.08)',
        }}
      >
        <div
          style={{
            background: 'rgba(200,165,92,0.08)',
            borderRadius: 10,
            padding: '12px 14px',
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11,
              color: '#C8A55C',
              letterSpacing: 1,
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            Mon bien
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: '#FAF6EE',
            }}
          >
            T2 — Rue Carnot, Annecy
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11,
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 300,
            }}
          >
            Géré depuis mars 2026
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '11px 14px',
                borderRadius: 10,
                marginBottom: 4,
                textDecoration: 'none',
                background: active ? 'rgba(200,165,92,0.12)' : 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                if (!active)
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={(e) => {
                if (!active)
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <Icon
                size={16}
                color={active ? '#C8A55C' : 'rgba(255,255,255,0.4)'}
                strokeWidth={1.5}
              />
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  fontWeight: active ? 500 : 300,
                  color: active ? '#C8A55C' : 'rgba(255,255,255,0.6)',
                }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(200,165,92,0.08)' }}>
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 14px',
            borderRadius: 10,
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = 'transparent')
          }
        >
          <LogOut size={14} color="rgba(255,255,255,0.3)" strokeWidth={1.5} />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 300,
            }}
          >
            Retour au site
          </span>
        </Link>
      </div>
    </aside>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F0E8' }}>
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
          }}
        >
          <div
            style={{ flex: 1, background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setSidebarOpen(false)}
          />
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0 }}>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Mobile topbar */}
        <div
          className="md:hidden"
          style={{
            padding: '16px 20px',
            background: '#0C1A2E',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Mountain size={16} color="#C8A55C" strokeWidth={1.5} />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 14,
                fontWeight: 700,
                color: '#FAF6EE',
                letterSpacing: 1.5,
              }}
            >
              ESPACE PROPRIÉTAIRE
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <Menu size={20} color="#FAF6EE" />
          </button>
        </div>

        <div style={{ flex: 1, padding: '32px 28px', maxWidth: 1100, width: '100%', margin: '0 auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
