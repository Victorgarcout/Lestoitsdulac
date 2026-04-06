'use client';

import { Download } from 'lucide-react';

export default function DownloadButton() {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: "'Outfit', sans-serif",
        fontSize: 12,
        fontWeight: 500,
        color: '#C8A55C',
        background: 'rgba(200,165,92,0.08)',
        border: '1px solid rgba(200,165,92,0.2)',
        borderRadius: 8,
        padding: '8px 14px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.background = 'rgba(200,165,92,0.15)')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.background = 'rgba(200,165,92,0.08)')
      }
    >
      <Download size={13} />
      Télécharger PDF
    </button>
  );
}
