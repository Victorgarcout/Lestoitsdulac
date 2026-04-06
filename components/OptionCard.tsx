'use client';

interface OptionCardProps {
  name: string;
  desc: string;
}

export default function OptionCard({ name, desc }: OptionCardProps) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #F0EADE',
        borderRadius: 12,
        padding: '20px 24px',
        transition: 'border-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#C8A55C';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#F0EADE';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 18,
          fontWeight: 600,
          color: '#0C1A2E',
          marginBottom: 6,
        }}
      >
        {name}
      </p>
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 13,
          color: '#64748B',
          lineHeight: 1.6,
          fontWeight: 300,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
