'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { CONTACT_INFO } from '@/constants/content';
import { CREAM, CREAM_DARK, GOLD, NAVY, ROOF_RED, SLATE, WHITE } from '@/constants/colors';

export default function Contact() {
  const { ref: sectionRef, inView: visible } = useInView<HTMLElement>(0.1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Une erreur est survenue');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Une erreur est survenue. Veuillez réessayer.');
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    fontFamily: "'Outfit', sans-serif",
    fontSize: 15,
    fontWeight: 300,
    color: '#0C1A2E',
    background: '#FAF6EE',
    border: '1px solid #F0EADE',
    borderRadius: 10,
    padding: '14px 18px',
    marginBottom: 14,
    outline: 'none',
    transition: 'border-color 0.3s',
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: '100px 32px', background: '#FAF6EE' }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={anim(0)}>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: '#C8A55C',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Contact
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(30px, 4vw, 42px)',
                fontWeight: 600,
                color: '#0C1A2E',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Parlons de votre bien
            </h2>
            <div
              style={{
                width: 50,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #C8A55C, transparent)',
                margin: '0 auto',
                borderRadius: 1,
              }}
            />
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                color: '#64748B',
                fontWeight: 300,
                marginTop: 20,
                lineHeight: 1.7,
              }}
            >
              Recevez une estimation gratuite et personnalisée des revenus potentiels de votre bien
              sous 48 heures.
            </p>
          </div>
        </div>

        <div
          style={{
            ...anim(0.2),
            background: '#FFFFFF',
            borderRadius: 20,
            padding: isMobile ? '32px 20px' : '40px 36px',
            border: '1px solid #F0EADE',
            boxShadow: '0 20px 60px rgba(12,26,46,0.06)',
          }}
        >
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#0C1A2E',
                  marginBottom: 12,
                }}
              >
                Message envoyé !
              </div>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 15,
                  color: '#64748B',
                  fontWeight: 300,
                }}
              >
                Nous vous recontactons sous 48h avec votre estimation personnalisée.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {[
                ['name', 'Votre nom', 'text'],
                ['email', 'Email', 'email'],
                ['phone', 'Téléphone', 'tel'],
                ['address', 'Adresse ou quartier du bien', 'text'],
              ].map(([key, placeholder, type]) => (
                <input
                  key={key}
                  type={type}
                  placeholder={placeholder}
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  required={key === 'name' || key === 'email'}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#C8A55C')}
                  onBlur={(e) => (e.target.style.borderColor = '#F0EADE')}
                />
              ))}
              <textarea
                placeholder="Parlez-nous de votre bien (type, surface, emplacement…)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                style={{
                  ...inputStyle,
                  marginBottom: 20,
                  resize: 'vertical',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#C8A55C')}
                onBlur={(e) => (e.target.style.borderColor = '#F0EADE')}
              />
              {status === 'error' && (
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14,
                    color: '#9B3B2A',
                    marginBottom: 16,
                    textAlign: 'center',
                  }}
                >
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  background:
                    status === 'loading'
                      ? 'rgba(200,165,92,0.6)'
                      : 'linear-gradient(135deg, #C8A55C, #B8943F)',
                  color: '#0C1A2E',
                  border: 'none',
                  borderRadius: 10,
                  padding: '16px',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  letterSpacing: 0.5,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'loading') {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 12px 36px rgba(200,165,92,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {status === 'loading' ? 'Envoi en cours…' : 'Recevoir mon estimation gratuite'}
              </button>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  color: '#64748B',
                  fontWeight: 300,
                  textAlign: 'center',
                  marginTop: 16,
                }}
              >
                Gratuit · Sans engagement · Réponse sous 48h
              </p>
            </form>
          )}
        </div>

        <div
          style={{
            ...anim(0.35),
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
            marginTop: 40,
            flexWrap: 'wrap',
          }}
        >
          {[
            [Phone, CONTACT_INFO.phone],
            [Mail, CONTACT_INFO.email],
            [MapPin, CONTACT_INFO.location],
          ].map(([Icon, text], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon size={16} color="#C8A55C" strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                  color: '#64748B',
                  fontWeight: 300,
                }}
              >
                {text as string}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
