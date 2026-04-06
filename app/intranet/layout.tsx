'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Mountain,
  LayoutDashboard,
  CalendarDays,
  Home,
  ClipboardCheck,
  Menu,
  LogOut,
} from 'lucide-react';

const navItems = [
  { href: '/intranet', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/intranet/planning', label: 'Planning ménage', icon: CalendarDays },
  { href: '/intranet/biens', label: 'Biens gérés', icon: Home },
  { href: '/intranet/checklist', label: 'Checklists', icon: ClipboardCheck },
];

export default function IntranetLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Sidebar = () => (
    <aside
      style={{
        width: 240,
        background: '#162742',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid rgba(200,165,92,0.08)',
        flexShrink: 0,
      }}
    >
      <div style={{ padding: '28px 24px', borderBottom: '1px solid rgba(200,165,92,0.08)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Mountain size={18} color="#C8A55C" strokeWidth={1.5} />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 700, color: '#FAF6EE', letterSpacing: 1.5, lineHeight: 1 }}>
              LES TOITS DU LAC
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 9, color: '#C8A55C', letterSpacing: 2, textTransform: 'uppercase', marginTop: 3 }}>
              Intranet équipe
            </div>
          </div>
        </Link>
      </div>

      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(200,165,92,0.08)' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #C8A55C, #B8943F)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 700, color: '#0C1A2E' }}>L</span>
          </div>
          <div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: '#FAF6EE' }}>Lamyae</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>Opérations</p>
          </div>
        </div>
      </div>

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
                background: active ? 'rgba(200,165,92,0.1)' : 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <Icon size={16} color={active ? '#C8A55C' : 'rgba(255,255,255,0.4)'} strokeWidth={1.5} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: active ? 500 : 300, color: active ? '#C8A55C' : 'rgba(255,255,255,0.6)' }}>
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(200,165,92,0.08)' }}>
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.2s' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
        >
          <LogOut size={14} color="rgba(255,255,255,0.3)" strokeWidth={1.5} />
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
            Retour au site
          </span>
        </Link>
      </div>
    </aside>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F0ECE4' }}>
      <div className="hidden md:flex"><Sidebar /></div>
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex' }}>
          <div style={{ flex: 1, background: 'rgba(0,0,0,0.5)' }} onClick={() => setSidebarOpen(false)} />
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0 }}><Sidebar /></div>
        </div>
      )}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="md:hidden" style={{ padding: '14px 20px', background: '#162742', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 700, color: '#FAF6EE', letterSpacing: 1.5 }}>INTRANET</span>
          <button onClick={() => setSidebarOpen(true)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
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
