import React from 'react';

export default function ManuelIllustration({ className = "w-full h-full max-h-[520px]" }) {
  return (
    <svg 
      viewBox="0 0 500 650" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_20px_35px_rgba(234,88,12,0.25)] transition-all duration-700`}
    >
      <defs>
        {/* Halo de Revolução Industrial e Pôr do Sol Portuário */}
        <radialGradient id="manuel-glow" cx="50%" cy="32%" r="55%">
          <stop offset="0%" stopColor="#FB923C" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#C2410C" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#431407" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0B0F17" stopOpacity="0" />
        </radialGradient>

        {/* Gradiente de Pele */}
        <linearGradient id="manuel-skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A2E17" />
          <stop offset="60%" stopColor="#3C1E0F" />
          <stop offset="100%" stopColor="#221008" />
        </linearGradient>

        {/* Macacão de Estivador / Tecido de brim rústico */}
        <linearGradient id="manuel-cloth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="50%" stopColor="#075985" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </linearGradient>

        {/* Chapéu de palha de estivador da Belle Époque */}
        <linearGradient id="hat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#CA8A04" />
          <stop offset="100%" stopColor="#854D0E" />
        </linearGradient>
      </defs>

      {/* Aura dramática */}
      <circle cx="250" cy="230" r="230" fill="url(#manuel-glow)" />

      {/* Cenário do Porto e Morros do Rio de Janeiro da Reforma Passos (Bota-Abaixo) */}
      {/* Guindastes portuários e navios a vapor ao fundo */}
      <path d="M50 480 L90 400 L120 400 L150 480 M105 400 L105 340 L160 380" stroke="#7C2D12" strokeWidth="3" opacity="0.4" fill="none" />
      {/* Silhueta dos primeiros casebres no morro da Providência */}
      <path d="M280 490 L310 470 L340 470 L360 490 L420 450 L460 450 L500 480 L500 650 L0 650 Z" fill="#1C1917" opacity="0.75" />
      <polygon points="315,460 335,460 330,470 320,470" fill="#EA580C" opacity="0.6" />
      <polygon points="425,440 450,440 445,450 430,450" fill="#EA580C" opacity="0.6" />

      {/* Ombros e Peito Forte de Estivador */}
      <path 
        d="M125 530 Q160 390 215 375 L250 415 L285 375 Q340 390 375 530 L395 650 L105 650 Z" 
        fill="url(#manuel-cloth)" 
      />

      {/* Camisa entreaberta e alças do suspensório de couro */}
      <path d="M220 375 L250 445 L280 375 L275 305 L225 305 Z" fill="url(#manuel-skin)" />
      
      {/* Suspensórios de couro marrom */}
      <line x1="175" y1="520" x2="225" y2="375" stroke="#78350F" strokeWidth="12" strokeLinecap="round" />
      <line x1="325" y1="520" x2="275" y2="375" stroke="#78350F" strokeWidth="12" strokeLinecap="round" />
      <circle cx="205" cy="425" r="4" fill="#E2E8F0" />
      <circle cx="295" cy="425" r="4" fill="#E2E8F0" />

      {/* Pescoço firme de quem carrega sacas de 60kg */}
      <path d="M225 295 L220 375 L280 375 L275 295 Z" fill="url(#manuel-skin)" />

      {/* Rosto de Manuel */}
      <path 
        d="M200 215 C200 165 218 140 250 140 C282 140 300 165 300 215 C300 265 285 295 250 295 C215 295 200 265 200 215 Z" 
        fill="url(#manuel-skin)" 
      />

      {/* Bigode expressivo da época (estilo malandro/trabalhador republicano) */}
      <path 
        d="M220 250 Q235 240 250 248 Q265 240 280 250 Q290 265 275 260 Q250 254 225 260 Q212 263 220 250 Z" 
        fill="#140A05" 
      />
      <path d="M236 268 Q250 270 264 268" stroke="#140A05" strokeWidth="3" strokeLinecap="round" />

      {/* Nariz forte e imponente */}
      <path d="M247 198 L244 226 Q236 232 248 235 Q260 232 254 226" fill="#2E1408" />

      {/* Olhos que carregam a luta e a desilusão do pós-abolição */}
      <ellipse cx="228" cy="198" rx="8.5" ry="5.5" fill="#F8FAFC" opacity="0.9" />
      <circle cx="229" cy="198" r="4" fill="#1C1004" />
      <circle cx="230" cy="196.5" r="1.3" fill="#FFFFFF" />

      <ellipse cx="272" cy="198" rx="8.5" ry="5.5" fill="#F8FAFC" opacity="0.9" />
      <circle cx="271" cy="198" r="4" fill="#1C1004" />
      <circle cx="272" cy="196.5" r="1.3" fill="#FFFFFF" />

      {/* Sobrancelhas franzidas pela dureza da rotina */}
      <path d="M216 188 Q228 184 240 188" stroke="#120803" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M284 188 Q272 184 260 188" stroke="#120803" strokeWidth="4.5" strokeLinecap="round" />

      {/* O Chapéu Palheta Inclinado */}
      <g transform="translate(160, 105)">
        {/* Aba do chapéu */}
        <ellipse cx="90" cy="40" rx="95" ry="24" fill="url(#hat-grad)" stroke="#713F12" strokeWidth="2" />
        {/* Copa do chapéu */}
        <path d="M35 35 C35 15 55 5 90 5 C125 5 145 15 145 35 Z" fill="url(#hat-grad)" stroke="#713F12" strokeWidth="2" />
        {/* Fita preta do chapéu republicano */}
        <path d="M36 30 Q90 35 144 30 L145 36 Q90 41 35 36 Z" fill="#18181B" />
      </g>

      {/* A Saca de Café do Porto nos Ombros (O Peso do Brasil) */}
      <g transform="translate(60, 360) rotate(15)">
        <rect x="0" y="0" width="110" height="75" rx="15" fill="#A16207" stroke="#713F12" strokeWidth="3" />
        {/* Carimbo da exportação */}
        <circle cx="55" cy="37" r="22" stroke="#451A03" strokeWidth="2" strokeDasharray="4 3" fill="none" />
        <text x="32" y="42" fill="#451A03" fontSize="12" fontWeight="bold" fontFamily="sans-serif">60 KG</text>
        {/* Costura rústica da saca de estopa */}
        <line x1="5" y1="8" x2="105" y2="8" stroke="#451A03" strokeWidth="3" strokeDasharray="6 4" />
      </g>

      {/* Jornal de Época com manchete da "Imigração Subsidiada" e "Lei de Vadiagem" */}
      <g transform="translate(305, 430) rotate(-12)">
        <rect x="0" y="0" width="90" height="120" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" className="drop-shadow-md" />
        {/* Cabeçalho do Jornal */}
        <rect x="10" y="10" width="70" height="12" fill="#1E293B" />
        <text x="13" y="19" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="serif">GAZETA DA REPÚBLICA</text>
        <line x1="10" y1="28" x2="80" y2="28" stroke="#334155" strokeWidth="2" />
        
        {/* Manchete crítica */}
        <text x="10" y="38" fill="#B91C1C" fontSize="6" fontWeight="bold">SUBSÍDIO A IMIGRANTES</text>
        <text x="10" y="47" fill="#475569" fontSize="5">Lavoura substitui libertos.</text>
        
        <line x1="10" y1="56" x2="80" y2="56" stroke="#94A3B8" strokeWidth="1" />
        <text x="10" y="66" fill="#1E293B" fontSize="5.5" fontWeight="bold">LEI DE VADIAGEM</text>
        <text x="10" y="74" fill="#64748B" fontSize="4.5">Prisões em massa no cais.</text>
        
        {/* Linhas de coluna */}
        <line x1="10" y1="82" x2="42" y2="82" stroke="#94A3B8" strokeWidth="1" />
        <line x1="10" y1="88" x2="40" y2="88" stroke="#94A3B8" strokeWidth="1" />
        <line x1="48" y1="82" x2="80" y2="82" stroke="#94A3B8" strokeWidth="1" />
        <line x1="48" y1="88" x2="78" y2="88" stroke="#94A3B8" strokeWidth="1" />
      </g>

      {/* Partículas de cinza urbana e poeira do progresso excludente */}
      <circle cx="140" cy="220" r="2.5" fill="#F97316" opacity="0.7" />
      <circle cx="360" cy="270" r="3" fill="#FB923C" opacity="0.6" />
      <circle cx="110" cy="320" r="2" fill="#CBD5E1" opacity="0.5" />
    </svg>
  );
}
