import React from 'react';

export default function CamilaIllustration({ className = "w-full h-full max-h-[520px]" }) {
  return (
    <svg 
      viewBox="0 0 500 650" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_20px_35px_rgba(6,182,212,0.3)] transition-all duration-700`}
    >
      <defs>
        {/* Halo Tecnológico / Metrópole Contemporânea */}
        <radialGradient id="camila-glow" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.65" />
          <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#050814" stopOpacity="0" />
        </radialGradient>

        {/* Gradiente de Pele */}
        <linearGradient id="camila-skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#63351C" />
          <stop offset="60%" stopColor="#432212" />
          <stop offset="100%" stopColor="#2A140A" />
        </linearGradient>

        {/* Beca de Formatura / Blazer Corporativo Moderno */}
        <linearGradient id="camila-suit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="50%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>

        {/* Tranças Nagô estilizadas / Box Braids com pontas coloridas */}
        <linearGradient id="braids-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="70%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        {/* Canudo de Formatura (Lei de Cotas 2012) */}
        <linearGradient id="diploma-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      {/* Halo de fundo */}
      <circle cx="250" cy="225" r="230" fill="url(#camila-glow)" />

      {/* Skyline da metrópole contemporânea com viadutos e torres de escritórios */}
      <path d="M20 520 L40 430 L70 430 L80 390 L110 390 L120 480 L180 440 L210 440 L240 500 L300 420 L330 420 L350 470 L390 380 L430 380 L440 520 L500 500 L500 650 L0 650 Z" fill="#0B1329" opacity="0.85" />
      
      {/* Luzes das janelas dos arranha-céus da Faria Lima/Av. Paulista */}
      <circle cx="95" cy="410" r="2.5" fill="#06B6D4" opacity="0.8" />
      <circle cx="95" cy="425" r="2.5" fill="#FBBF24" opacity="0.8" />
      <circle cx="410" cy="400" r="2.5" fill="#06B6D4" opacity="0.8" />
      <circle cx="410" cy="420" r="2.5" fill="#EC4899" opacity="0.8" />

      {/* Corpo / Blazer de Trabalho Contemporâneo */}
      <path 
        d="M130 520 Q170 380 215 375 L250 410 L285 375 Q330 380 370 520 L395 650 L105 650 Z" 
        fill="url(#camila-suit)" 
      />

      {/* Camisa de gola alta esmeralda */}
      <path d="M222 360 L250 420 L278 360 L272 290 L228 290 Z" fill="#059669" />

      {/* Fones de ouvido Bluetooth no pescoço (rotina de 3h de condução pública) */}
      <path d="M205 320 C205 355 295 355 295 320" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="205" cy="320" r="9" fill="#06B6D4" />
      <circle cx="295" cy="320" r="9" fill="#06B6D4" />

      {/* Pescoço Elegante */}
      <path d="M225 285 L222 360 L278 360 L275 285 Z" fill="url(#camila-skin)" />

      {/* Rosto de Camila */}
      <path 
        d="M205 210 C205 165 222 142 250 142 C278 142 295 165 295 210 C295 258 280 288 250 288 C220 288 205 258 205 210 Z" 
        fill="url(#camila-skin)" 
      />

      {/* Óculos de armação moderna estilizada */}
      <rect x="212" y="195" width="30" height="20" rx="6" stroke="#06B6D4" strokeWidth="2.5" fill="rgba(6,182,212,0.15)" />
      <rect x="258" y="195" width="30" height="20" rx="6" stroke="#06B6D4" strokeWidth="2.5" fill="rgba(6,182,212,0.15)" />
      <line x1="242" y1="205" x2="258" y2="205" stroke="#06B6D4" strokeWidth="2.5" />

      {/* Olhar inteligente, focado e questionador */}
      <ellipse cx="227" cy="205" rx="7" ry="5" fill="#F8FAFC" opacity="0.95" />
      <circle cx="228" cy="205" r="3.6" fill="#180D07" />
      <circle cx="229" cy="203.5" r="1.3" fill="#FFFFFF" />

      <ellipse cx="273" cy="205" rx="7" ry="5" fill="#F8FAFC" opacity="0.95" />
      <circle cx="272" cy="205" r="3.6" fill="#180D07" />
      <circle cx="273" cy="203.5" r="1.3" fill="#FFFFFF" />

      {/* Sobrancelhas bem arqueadas */}
      <path d="M218 190 Q228 184 240 188" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
      <path d="M282 190 Q272 184 260 188" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

      {/* Nariz esculpido e sutil */}
      <path d="M248 205 L247 225 Q242 229 250 231 Q258 229 253 225" fill="#2E1408" />

      {/* Lábios definidos com batom discreto */}
      <path d="M236 248 Q250 245 264 248" stroke="#1C1004" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M239 252 Q250 258 261 252" fill="#BE185D" stroke="#1C1004" strokeWidth="1.5" />

      {/* As Tranças Nagô / Box Braids com adornos dourados */}
      {/* Volume Superior do Cabelo */}
      <path d="M195 180 C190 125 210 95 250 95 C290 95 310 125 305 180 Z" fill="#09090B" />
      {/* Fileiras de Tranças caindo pelos ombros com pontas magenta */}
      <g stroke="url(#braids-grad)" strokeWidth="6" strokeLinecap="round">
        <path d="M205 130 C190 180 180 250 175 380" />
        <path d="M215 115 C200 180 190 260 185 410" />
        <path d="M225 105 C210 170 200 270 195 430" />
        
        <path d="M295 130 C310 180 320 250 325 380" />
        <path d="M285 115 C300 180 310 260 315 410" />
        <path d="M275 105 C290 170 300 270 305 430" />
      </g>
      {/* Anéis dourados nas tranças (cuff clips) */}
      <circle cx="180" cy="280" r="4.5" fill="#FBBF24" />
      <circle cx="320" cy="280" r="4.5" fill="#FBBF24" />
      <circle cx="190" cy="340" r="4.5" fill="#FBBF24" />
      <circle cx="310" cy="340" r="4.5" fill="#FBBF24" />

      {/* O Canudo do Diploma de Graduação (Conquista via Cotas) */}
      <g transform="translate(65, 410) rotate(22)">
        <rect x="0" y="0" width="130" height="28" rx="14" fill="url(#diploma-grad)" stroke="#38BDF8" strokeWidth="2" className="drop-shadow-lg" />
        {/* Fita de cetim vermelha da universidade */}
        <rect x="55" y="-2" width="16" height="32" rx="3" fill="#E11D48" />
        <circle cx="63" cy="14" r="5" fill="#FDE047" />
        <text x="18" y="19" fill="#FFFFFF" fontSize="8" fontWeight="bold">DIPLOMA - COTAS</text>
      </g>

      {/* O Smartphone com Notificações de Contas e Trabalho de Aplicativo (A Realidade) */}
      <g transform="translate(325, 400) rotate(-15)">
        <rect x="0" y="0" width="75" height="135" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" className="drop-shadow-2xl" />
        <rect x="5" y="10" width="65" height="115" rx="5" fill="#020617" />
        
        {/* Notificação 1: Boleto / Aluguel */}
        <rect x="9" y="20" width="57" height="24" rx="4" fill="#7F1D1D" opacity="0.8" />
        <text x="13" y="32" fill="#FCA5A5" fontSize="6" fontWeight="bold">ALUGUEL: R$ 1.850</text>
        <text x="13" y="40" fill="#FECACA" fontSize="5">Vencimento Hoje</text>

        {/* Notificação 2: Salário / Estágio PJ */}
        <rect x="9" y="50" width="57" height="24" rx="4" fill="#065F46" opacity="0.8" />
        <text x="13" y="62" fill="#6EE7B7" fontSize="6" fontWeight="bold">PRO-LABORE / PJ</text>
        <text x="13" y="70" fill="#A7F3D0" fontSize="5">Sem FGTS ou férias</text>

        {/* Notificação 3: Transporte / 2h30 */}
        <rect x="9" y="80" width="57" height="22" rx="4" fill="#1E293B" />
        <text x="13" y="92" fill="#94A3B8" fontSize="5.5">Linha 11-Coral (Trem)</text>
        <text x="13" y="99" fill="#38BDF8" fontSize="4.8">Chegada estimada: 1h45m</text>
      </g>

      {/* Partículas de dados e futuro em aberto */}
      <circle cx="120" cy="200" r="3" fill="#06B6D4" opacity="0.8" />
      <circle cx="380" cy="240" r="3.5" fill="#EC4899" opacity="0.7" />
      <circle cx="340" cy="160" r="2.5" fill="#A855F7" opacity="0.9" />
    </svg>
  );
}
