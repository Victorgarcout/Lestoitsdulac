'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

const NAVY = '#0C1A2E';
const NAVY_LIGHT = '#162742';
const GOLD = '#C8A55C';
const GOLD_LIGHT = '#E8D5A3';
const CREAM = '#FAF6EE';
const ROOF_RED = '#9B3B2A';
const ROOF_DARK = '#7A2E20';
const ROOF_LIGHT = '#B54A36';
const MOUNTAIN_FAR = '#0E1F3A';
const MOUNTAIN_MID = '#132847';
const MOUNTAIN_NEAR = '#162D4F';
const THIOU_BLUE = '#1E4D6E';
const THIOU_LIGHT = '#2A6A8E';

const STARS = Array.from({ length: 80 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 60,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [heroH, setHeroH] = useState(1000);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (heroRef.current) setHeroH(heroRef.current.offsetHeight);
    const ro = new ResizeObserver(() => {
      if (heroRef.current) setHeroH(heroRef.current.offsetHeight);
    });
    if (heroRef.current) ro.observe(heroRef.current);
    return () => ro.disconnect();
  }, []);

  const p = Math.min(1, Math.max(0, scrollY / (heroH * 0.7)));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="grain"
      style={{
        position: 'relative',
        minHeight: '120vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(180deg, #060D1A 0%, #0A1628 25%, ${NAVY} 50%, #1A3152 80%, #1E3A5F 100%)`,
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '40vh',
          background: 'radial-gradient(ellipse, rgba(200,165,92,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Stars */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 1 - p * 1.5,
        }}
        preserveAspectRatio="none"
      >
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.size}
            fill={GOLD_LIGHT}
            style={{ animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite` }}
          />
        ))}
      </svg>

      {/* Moon */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '15%',
          zIndex: 1,
          opacity: Math.max(0, 1 - p * 2),
          transform: `translateY(${p * -80}px)`,
        }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48">
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.3" />
              <stop offset="100%" stopColor={GOLD_LIGHT} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="24" cy="24" r="24" fill="url(#moonGlow)" />
          <path d="M20,4 A20,20 0 1,0 20,44 A15,15 0 1,1 20,4Z" fill={GOLD_LIGHT} opacity="0.9" />
        </svg>
      </div>

      {/* Clouds */}
      <svg
        style={{
          position: 'absolute',
          bottom: '35%',
          left: 0,
          width: '120%',
          height: '30%',
          zIndex: 2,
          opacity: Math.min(1, p * 3) * Math.max(0, 1 - (p - 0.4) * 3),
          transform: `translateX(${p * -40}px) translateY(${p * -60}px)`,
        }}
        viewBox="0 0 1600 300"
        preserveAspectRatio="none"
      >
        <ellipse cx="300" cy="150" rx="220" ry="60" fill="white" opacity="0.04" />
        <ellipse cx="500" cy="130" rx="180" ry="50" fill="white" opacity="0.05" />
        <ellipse cx="900" cy="160" rx="250" ry="65" fill="white" opacity="0.04" />
        <ellipse cx="1200" cy="140" rx="200" ry="55" fill="white" opacity="0.05" />
      </svg>

      {/* Mountains Far */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '55%',
          zIndex: 3,
          transform: `translateY(${(1 - p) * 30}%)`,
        }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,400 L0,280 Q80,140 200,220 Q300,100 420,180 Q520,60 660,160 Q780,40 900,150 Q1020,70 1120,170 Q1240,90 1340,200 Q1400,160 1440,220 L1440,400Z"
          fill={MOUNTAIN_FAR}
        />
      </svg>

      {/* Mountains Mid */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '48%',
          zIndex: 4,
          transform: `translateY(${(1 - p) * 20}%)`,
        }}
        viewBox="0 0 1440 380"
        preserveAspectRatio="none"
      >
        <path
          d="M0,380 L0,300 Q60,200 140,260 Q220,160 340,230 Q440,120 560,200 Q620,100 720,170 Q800,80 920,190 Q1040,110 1140,210 Q1220,140 1300,230 Q1380,180 1440,260 L1440,380Z"
          fill={MOUNTAIN_MID}
        />
        <path d="M556,202 L560,200 L564,202 L562,200 Q560,195 558,200Z" fill="rgba(255,255,255,0.15)" />
        <path d="M716,172 L720,170 L724,172 L722,170 Q720,164 718,170Z" fill="rgba(255,255,255,0.15)" />
      </svg>

      {/* Mountains Near */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40%',
          zIndex: 5,
          transform: `translateY(${(1 - p) * 12}%)`,
        }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,320 L0,280 Q100,220 200,260 Q320,180 440,240 Q560,200 680,250 Q800,210 920,260 Q1060,200 1180,250 Q1300,220 1440,270 L1440,320Z"
          fill={MOUNTAIN_NEAR}
        />
      </svg>

      {/* Rooftops + Château + Thiou */}
      <svg
        style={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          width: '100%',
          height: '34%',
          zIndex: 6,
          transform: `translateY(${(1 - p) * 8}%)`,
        }}
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={NAVY_LIGHT} />
            <stop offset="100%" stopColor={CREAM} />
          </linearGradient>
          <linearGradient id="thiouGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={THIOU_BLUE} />
            <stop offset="50%" stopColor={THIOU_LIGHT} />
            <stop offset="100%" stopColor={THIOU_BLUE} />
          </linearGradient>
        </defs>

        <rect x="0" y="130" width="1440" height="200" fill={NAVY_LIGHT} />

        {/* Thiou river */}
        <path d="M-20,215 Q80,210 160,220 Q240,230 320,218 Q400,206 480,215 Q560,224 640,212 Q720,200 800,210 Q880,220 960,208 Q1040,196 1120,207 Q1200,218 1280,205 Q1360,192 1460,200"
          stroke={THIOU_LIGHT} strokeWidth="8" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M-20,215 Q80,210 160,220 Q240,230 320,218 Q400,206 480,215 Q560,224 640,212 Q720,200 800,210 Q880,220 960,208 Q1040,196 1120,207 Q1200,218 1280,205 Q1360,192 1460,200"
          stroke={THIOU_BLUE} strokeWidth="5" fill="none" opacity="0.7" strokeLinecap="round" />
        <path d="M-20,217 Q80,212 160,222 Q240,232 320,220 Q400,208 480,217 Q560,226 640,214 Q720,202 800,212 Q880,222 960,210 Q1040,198 1120,209 Q1200,220 1280,207 Q1360,194 1460,202"
          stroke="rgba(42,106,142,0.2)" strokeWidth="12" fill="none" strokeLinecap="round" />

        {/* Left cluster */}
        <rect x="20" y="140" width="80" height="140" fill="#15243E" />
        <polygon points="15,140 60,95 105,140" fill={ROOF_RED} />
        <polygon points="15,140 60,95 60,140" fill={ROOF_DARK} />
        <line x1="60" y1="95" x2="60" y2="80" stroke={NAVY_LIGHT} strokeWidth="2" />
        <rect x="95" y="120" width="70" height="160" fill="#182B48" />
        <polygon points="90,120 130,72 170,120" fill={ROOF_LIGHT} />
        <polygon points="90,120 130,72 130,120" fill={ROOF_RED} />
        <rect x="160" y="150" width="60" height="130" fill="#142340" />
        <polygon points="155,150 190,115 225,150" fill={ROOF_RED} />
        <polygon points="155,150 190,115 190,150" fill={ROOF_DARK} />

        {/* Château d'Annecy */}
        <path d="M230,130 L230,105 Q235,98 245,95 L380,95 Q390,98 395,105 L395,130 Z" fill="#1A2D4A" />
        <rect x="245" y="50" width="100" height="80" fill="#1C3255" />
        <polygon points="240,50 295,10 350,50" fill={ROOF_RED} />
        <polygon points="240,50 295,10 295,50" fill={ROOF_DARK} />
        <rect x="258" y="62" width="12" height="18" rx="6" fill="#0F1C32" />
        <rect x="278" y="62" width="12" height="18" rx="6" fill="#0F1C32" />
        <rect x="298" y="62" width="12" height="18" rx="6" fill="#0F1C32" />
        <rect x="318" y="62" width="12" height="18" rx="6" fill="#0F1C32" />
        <rect x="258" y="90" width="12" height="16" fill="#0F1C32" />
        <rect x="278" y="90" width="12" height="16" fill="#0F1C32" />
        <rect x="298" y="90" width="12" height="16" fill="#0F1C32" />
        <rect x="318" y="90" width="12" height="16" fill="#0F1C32" />
        <rect x="350" y="38" width="32" height="92" fill="#1A2F50" rx="16" />
        <ellipse cx="366" cy="38" rx="16" ry="6" fill={ROOF_RED} />
        <polygon points="356,38 366,8 376,38" fill={ROOF_RED} />
        <polygon points="356,38 366,8 366,38" fill={ROOF_DARK} />
        <rect x="360" y="52" width="10" height="14" rx="5" fill="#0F1C32" />
        <rect x="360" y="76" width="10" height="14" rx="5" fill="#0F1C32" />
        <rect x="260" y="92" width="8" height="12" rx="1" fill={GOLD} opacity="0.2" />
        <rect x="300" y="92" width="8" height="12" rx="1" fill={GOLD} opacity="0.25" />
        <rect x="362" y="78" width="6" height="10" rx="1" fill={GOLD} opacity="0.2" />
        <rect x="382" y="95" width="8" height="35" fill="#1A2D4A" />
        {[245,253,261,269,277,285,293,301,309,317,325,333,341].map((x, i) => (
          <rect key={`b${i}`} x={x} y="46" width="5" height="6" fill={i % 2 === 0 ? '#1C3255' : 'transparent'} />
        ))}

        {/* Church/Bell tower */}
        <rect x="410" y="90" width="35" height="190" fill="#1A2F50" />
        <polygon points="405,90 427,35 450,90" fill={ROOF_RED} />
        <polygon points="405,90 427,35 427,90" fill={ROOF_DARK} />
        <circle cx="427" cy="62" r="4" fill={GOLD} opacity="0.5" />
        <line x1="427" y1="35" x2="427" y2="22" stroke={NAVY_LIGHT} strokeWidth="2" />
        <circle cx="427" cy="20" r="2.5" fill={GOLD} opacity="0.4" />
        <rect x="450" y="130" width="75" height="150" fill="#15253F" />
        <polygon points="445,130 487,80 530,130" fill={ROOF_LIGHT} />
        <polygon points="445,130 487,80 487,130" fill={ROOF_RED} />
        <polygon points="460,120 470,107 480,120" fill={ROOF_DARK} />
        <rect x="464" y="109" width="12" height="11" fill="#1A3050" opacity="0.8" />
        <polygon points="498,120 508,107 518,120" fill={ROOF_DARK} />
        <rect x="502" y="109" width="12" height="11" fill="#1A3050" opacity="0.8" />
        <rect x="535" y="155" width="55" height="125" fill="#182942" />
        <polygon points="530,155 562,118 595,155" fill={ROOF_RED} />
        <polygon points="530,155 562,118 562,155" fill={ROOF_DARK} />

        {/* Palais de l'Isle */}
        <rect x="610" y="110" width="90" height="170" fill="#1B3050" />
        <polygon points="605,110 655,58 705,110" fill={ROOF_RED} />
        <polygon points="605,110 655,58 655,110" fill={ROOF_DARK} />
        <rect x="625" y="122" width="14" height="20" rx="7" fill="#142540" />
        <rect x="648" y="122" width="14" height="20" rx="7" fill="#142540" />
        <rect x="671" y="122" width="14" height="20" rx="7" fill="#142540" />
        <rect x="625" y="152" width="14" height="18" fill="#142540" />
        <rect x="648" y="152" width="14" height="18" fill="#142540" />
        <rect x="671" y="152" width="14" height="18" fill="#142540" />
        <rect x="698" y="95" width="22" height="85" fill="#1A2D4A" />
        <polygon points="696,95 709,62 722,95" fill={ROOF_LIGHT} />
        <polygon points="696,95 709,62 709,95" fill={ROOF_RED} />
        <rect x="725" y="140" width="60" height="140" fill="#16274A" />
        <polygon points="720,140 755,95 790,140" fill={ROOF_RED} />
        <polygon points="720,140 755,95 755,140" fill={ROOF_DARK} />
        <line x1="755" y1="95" x2="755" y2="82" stroke={NAVY_LIGHT} strokeWidth="1.5" />
        <rect x="795" y="158" width="55" height="122" fill="#192C48" />
        <polygon points="790,158 817,126 845,158" fill={ROOF_LIGHT} />
        <polygon points="790,158 817,126 817,158" fill={ROOF_RED} />

        {/* Tall building center-right */}
        <rect x="860" y="105" width="75" height="175" fill="#1B2F50" />
        <polygon points="855,105 897,50 940,105" fill={ROOF_RED} />
        <polygon points="855,105 897,50 897,105" fill={ROOF_DARK} />
        <rect x="870" y="115" width="12" height="16" rx="6" fill="#142240" />
        <rect x="890" y="115" width="12" height="16" rx="6" fill="#142240" />
        <rect x="910" y="115" width="12" height="16" rx="6" fill="#142240" />
        <rect x="870" y="140" width="12" height="16" fill="#142240" />
        <rect x="890" y="140" width="12" height="16" fill="#142240" />
        <rect x="910" y="140" width="12" height="16" fill="#142240" />
        <rect x="918" y="68" width="10" height="37" fill="#1A2A45" />
        <rect x="916" y="65" width="14" height="5" fill="#1A2A45" />
        <rect x="940" y="148" width="60" height="132" fill="#172A46" />
        <polygon points="935,148 970,108 1005,148" fill={ROOF_LIGHT} />
        <polygon points="935,148 970,108 970,148" fill={ROOF_RED} />

        {/* Second church spire */}
        <rect x="1015" y="78" width="30" height="202" fill="#1C3255" />
        <polygon points="1010,78 1030,20 1050,78" fill={ROOF_RED} />
        <polygon points="1010,78 1030,20 1030,78" fill={ROOF_DARK} />
        <circle cx="1030" cy="52" r="3.5" fill={GOLD} opacity="0.5" />
        <line x1="1030" y1="20" x2="1030" y2="8" stroke={NAVY_LIGHT} strokeWidth="1.5" />
        <polygon points="1025,8 1030,0 1035,8" fill={GOLD} opacity="0.4" />
        <rect x="1050" y="135" width="70" height="145" fill="#162844" />
        <polygon points="1045,135 1085,86 1125,135" fill={ROOF_RED} />
        <polygon points="1045,135 1085,86 1085,135" fill={ROOF_DARK} />
        <polygon points="1065,125 1073,112 1081,125" fill={ROOF_DARK} />
        <rect x="1068" y="114" width="10" height="11" fill="#1A3050" opacity="0.8" />
        <polygon points="1095,125 1103,112 1111,125" fill={ROOF_DARK} />
        <rect x="1098" y="114" width="10" height="11" fill="#1A3050" opacity="0.8" />

        {/* Right cluster */}
        <rect x="1130" y="152" width="55" height="128" fill="#182B47" />
        <polygon points="1125,152 1157,115 1190,152" fill={ROOF_LIGHT} />
        <polygon points="1125,152 1157,115 1157,152" fill={ROOF_RED} />
        <rect x="1195" y="125" width="80" height="155" fill="#1A2E4C" />
        <polygon points="1190,125 1235,72 1280,125" fill={ROOF_RED} />
        <polygon points="1190,125 1235,72 1235,125" fill={ROOF_DARK} />
        <rect x="1208" y="135" width="14" height="18" rx="7" fill="#142440" />
        <rect x="1231" y="135" width="14" height="18" rx="7" fill="#142440" />
        <rect x="1254" y="135" width="14" height="18" rx="7" fill="#142440" />
        <rect x="1280" y="142" width="60" height="138" fill="#15263F" />
        <polygon points="1275,142 1310,102 1345,142" fill={ROOF_LIGHT} />
        <polygon points="1275,142 1310,102 1310,142" fill={ROOF_RED} />
        <rect x="1323" y="108" width="8" height="34" fill="#1A2A45" />
        <rect x="1350" y="130" width="55" height="150" fill="#192D4A" />
        <polygon points="1345,130 1377,85 1410,130" fill={ROOF_RED} />
        <polygon points="1345,130 1377,85 1377,130" fill={ROOF_DARK} />
        <rect x="1410" y="148" width="50" height="132" fill="#172B46" />
        <polygon points="1405,148 1435,108 1465,148" fill={ROOF_LIGHT} />
        <polygon points="1405,148 1435,108 1435,148" fill={ROOF_RED} />

        {/* Window glows */}
        {[[60,168],[115,155],[465,150],[505,150],[630,155],[653,155],[676,155],
          [630,175],[653,175],[676,175],[875,165],[895,165],[915,165],
          [1055,165],[1080,165],[1105,165],[1210,160],[1235,160],[1258,160],
          [1358,165],[1382,165],[1420,172],[950,172],[735,168],[800,178]
        ].map(([x, y], i) => (
          <rect key={`w${i}`} x={x - 4} y={y} width="8" height="10" rx="1" fill={GOLD} opacity={0.12 + (i % 5) * 0.04} />
        ))}

        {/* Lake transition */}
        <rect x="0" y="245" width="1440" height="35" fill="url(#lakeGrad)" />
      </svg>

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '120px 32px 280px',
          maxWidth: 900,
          margin: '0 auto',
          opacity: Math.max(0, 1 - p * 2.2),
          transform: `translateY(${p * -120}px)`,
        }}
      >
        <div style={{ animation: 'fadeIn 1s ease 0.2s both' }}>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              fontWeight: 400,
              color: GOLD,
              letterSpacing: 4,
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            Conciergerie hôtelière & gestion de biens — Annecy
          </div>
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 6vw, 72px)',
            fontWeight: 300,
            color: CREAM,
            lineHeight: 1.1,
            marginBottom: 12,
            animation: 'fadeUp 1s ease 0.4s both',
          }}
        >
          Votre bien mérite une<br />
          <span style={{ fontWeight: 700, color: '#FFFFFF' }}>gestion d&apos;exception</span>
        </h1>

        <div
          style={{
            width: 60,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            margin: '28px auto',
            animation: 'fadeIn 1s ease 0.6s both',
          }}
        />

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 600,
            margin: '0 auto 48px',
            animation: 'fadeUp 1s ease 0.7s both',
          }}
        >
          Deux professionnels de l&apos;hôtellerie appliquent les standards des meilleurs hôtels
          à votre location courte durée.<br />Plus de revenus, zéro charge mentale.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeUp 1s ease 0.9s both',
          }}
        >
          <button
            onClick={() => scrollTo('contact')}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              background: `linear-gradient(135deg, ${GOLD}, #B8943F)`,
              color: '#0C1A2E',
              border: 'none',
              borderRadius: 10,
              padding: '16px 36px',
              cursor: 'pointer',
              letterSpacing: 0.5,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(200,165,92,0.35)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Recevoir mon estimation gratuite
          </button>
          <button
            onClick={() => scrollTo('services')}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              background: 'transparent',
              color: CREAM,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 10,
              padding: '16px 36px',
              cursor: 'pointer',
              letterSpacing: 0.5,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = GOLD;
              (e.currentTarget as HTMLElement).style.color = GOLD;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
              (e.currentTarget as HTMLElement).style.color = CREAM;
            }}
          >
            Découvrir nos services
          </button>
        </div>

        <div style={{ marginTop: 48, animation: 'fadeIn 1.5s ease 1.2s both' }}>
          <ChevronDown
            size={24}
            color={GOLD}
            strokeWidth={1}
            className="animate-chevron"
            style={{ opacity: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
