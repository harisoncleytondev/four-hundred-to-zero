import React from 'react';

export default function TiaoIllustration({ className = "w-full h-full max-h-[520px]" }) {
  return (
    <svg 
      viewBox="0 0 500 650" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_20px_35px_rgba(217,119,6,0.25)] transition-all duration-700`}
    >
      <defs>
        {/* Gradiente Solar Dramático */}
        <radialGradient id="tiao-sun" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#EA580C" stopOpacity="0.8" />
          <stop offset="85%" stopColor="#78350F" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1C1004" stopOpacity="0" />
        </radialGradient>

        {/* Gradiente de Pele */}
        <linearGradient id="tiao-skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#542C16" />
          <stop offset="60%" stopColor="#381D0E" />
          <stop offset="100%" stopColor="#221107" />
        </linearGradient>

        {/* Destaque de Luz na Pele */}
        <linearGradient id="tiao-highlight" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
        </linearGradient>

        {/* Tecido rústico de estopa */}
        <linearGradient id="tiao-cloth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="40%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Metal enferrujado/grilhão quebrado */}
        <linearGradient id="metal-chain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* Madeira rústica da ferramenta de carpintaria */}
        <linearGradient id="wood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="50%" stopColor="#713F12" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
      </defs>

      {/* Halo de Sol do Vale do Café */}
      <circle cx="250" cy="220" r="220" fill="url(#tiao-sun)" />

      {/* Silhueta de Plantação de Café ao Fundo */}
      <path d="M0 480 Q120 450 250 470 T500 460 L500 650 L0 650 Z" fill="#2E1506" />
      <path d="M40 450 Q60 410 80 445 Q110 405 130 450" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M360 440 Q390 395 410 435 Q440 395 470 440" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Tronco e Ombros Poderosos */}
      {/* Camisa de algodão cru desgastada */}
      <path 
        d="M130 520 Q160 380 210 370 L250 410 L290 370 Q340 380 370 520 L390 650 L110 650 Z" 
        fill="url(#tiao-cloth)" 
      />
      
      {/* Peitoral e Pescoço musculoso */}
      <path d="M210 370 L250 430 L290 370 L285 290 L215 290 Z" fill="url(#tiao-skin)" />
      {/* Clavículas e sombras de anatomia */}
      <path d="M220 340 Q250 365 280 340" stroke="#1F0D05" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M250 360 L250 410" stroke="#1F0D05" strokeWidth="3" opacity="0.6" />

      {/* Rosto de Sebastião (Tião) */}
      {/* Mandíbula e Queixo Firme */}
      <path 
        d="M195 210 C195 160 215 135 250 135 C285 135 305 160 305 210 C305 260 288 295 250 295 C212 295 195 260 195 210 Z" 
        fill="url(#tiao-skin)" 
      />

      {/* Destaque Solar na bochecha e têmpora */}
      <path 
        d="M200 190 Q215 145 245 140 Q215 180 205 240 Z" 
        fill="url(#tiao-highlight)" 
      />

      {/* Barba cerrada desenhada */}
      <path 
        d="M200 220 Q205 285 250 292 Q295 285 300 220 Q285 265 250 270 Q215 265 200 220 Z" 
        fill="#120803" 
      />

      {/* Boca com expressão de resiliência */}
      <path d="M232 252 Q250 250 268 252" stroke="#170A04" strokeWidth="5" strokeLinecap="round" />
      <path d="M236 260 Q250 263 264 260" stroke="#170A04" strokeWidth="3" strokeLinecap="round" />

      {/* Nariz marcante */}
      <path d="M246 195 L243 222 Q234 227 245 230 Q255 227 249 222" fill="#2E1408" />
      <path d="M245 200 L245 225" stroke="#F59E0B" strokeWidth="2" opacity="0.5" strokeLinecap="round" />

      {/* Olhos determinados e compenetrados */}
      <ellipse cx="225" cy="190" rx="9" ry="6" fill="#F8FAFC" opacity="0.9" />
      <circle cx="226" cy="190" r="4.5" fill="#1C1004" />
      <circle cx="227" cy="189" r="1.5" fill="#FFFFFF" />

      <ellipse cx="275" cy="190" rx="9" ry="6" fill="#F8FAFC" opacity="0.9" />
      <circle cx="274" cy="190" r="4.5" fill="#1C1004" />
      <circle cx="275" cy="189" r="1.5" fill="#FFFFFF" />

      {/* Sobrancelhas densas e expressivas */}
      <path d="M213 180 Q225 174 238 178" stroke="#120803" strokeWidth="5" strokeLinecap="round" />
      <path d="M287 180 Q275 174 262 178" stroke="#120803" strokeWidth="5" strokeLinecap="round" />

      {/* Cabelo crespo esculpido */}
      <path 
        d="M192 180 C185 140 215 110 250 110 C285 110 315 140 308 180 C300 145 280 125 250 125 C220 125 200 145 192 180 Z" 
        fill="#0D0602" 
      />
      {/* Orelhas com reflexo de luz */}
      <path d="M195 195 Q188 215 198 225" fill="#3D1D0D" stroke="#170A04" strokeWidth="2" />
      <path d="M305 195 Q312 215 302 225" fill="#3D1D0D" stroke="#170A04" strokeWidth="2" />

      {/* Ferramenta de Carpintaria de Tião (Graveza e Habilidade) */}
      <g transform="translate(320, 360) rotate(-25)">
        <rect x="0" y="0" width="22" height="180" rx="6" fill="url(#wood)" stroke="#221107" strokeWidth="2" />
        <path d="M-15 0 L37 0 L30 45 L-8 45 Z" fill="url(#metal-chain)" stroke="#0F172A" strokeWidth="2" />
      </g>

      {/* Grilhão Partido no Punho (A Resistência) */}
      <g transform="translate(110, 480)">
        <rect x="0" y="0" width="34" height="24" rx="6" fill="url(#metal-chain)" stroke="#0F172A" strokeWidth="2" />
        {/* Elos rompidos */}
        <path d="M17 24 C17 40 4 45 4 60" stroke="url(#metal-chain)" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M4 60 C4 66 12 70 18 66" stroke="#94A3B8" strokeWidth="7" strokeLinecap="round" fill="none" />
        {/* Faísca de liberdade */}
        <polygon points="25,65 30,55 35,68 28,70" fill="#FBBF24" />
      </g>

      {/* Partículas de poeira e luz solar flutuantes */}
      <circle cx="160" cy="240" r="3" fill="#FBBF24" opacity="0.7" />
      <circle cx="340" cy="280" r="2.5" fill="#F59E0B" opacity="0.6" />
      <circle cx="120" cy="380" r="4" fill="#FDE68A" opacity="0.5" />
      <circle cx="390" cy="420" r="3.5" fill="#FDE68A" opacity="0.6" />
    </svg>
  );
}
