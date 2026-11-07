import React from 'react';

export default function BeneditaIllustration({ className = "w-full h-full max-h-[520px]" }) {
  return (
    <svg 
      viewBox="0 0 500 650" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_20px_35px_rgba(99,102,241,0.25)] transition-all duration-700`}
    >
      <defs>
        {/* Halo Místico Índigo Imperial */}
        <radialGradient id="benedita-aura" cx="50%" cy="32%" r="55%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#4338CA" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#1E1B4B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
        </radialGradient>

        {/* Gradiente de Pele */}
        <linearGradient id="benedita-skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5E311B" />
          <stop offset="60%" stopColor="#3F2012" />
          <stop offset="100%" stopColor="#241108" />
        </linearGradient>

        {/* Turbante Elegante Estilizado */}
        <linearGradient id="turban-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="40%" stopColor="#C026D3" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>

        {/* Vestido de chita e chalé colonial */}
        <linearGradient id="dress-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="50%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        {/* Pergaminho da Carta de Alforria Condicional */}
        <linearGradient id="paper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="70%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Halo de fundo */}
      <circle cx="250" cy="230" r="230" fill="url(#benedita-aura)" />

      {/* Silhueta Urbana Oitocentista (Igrejas e casarios com lampiões) */}
      <path d="M0 500 L60 480 L100 500 L160 450 L190 450 L200 420 L210 450 L280 470 L340 440 L380 480 L500 460 L500 650 L0 650 Z" fill="#111827" opacity="0.6" />
      <circle cx="205" cy="415" r="3" fill="#FBBF24" opacity="0.8" />
      <circle cx="370" cy="450" r="3" fill="#FBBF24" opacity="0.8" />

      {/* Corpo e Vestimenta Tradicional (Quitandeira / Prestadora de Serviços) */}
      <path 
        d="M130 520 Q170 380 215 375 L250 410 L285 375 Q330 380 370 520 L400 650 L100 650 Z" 
        fill="url(#dress-grad)" 
      />

      {/* Chalé de ombro em tons violeta */}
      <path 
        d="M140 500 C160 410 200 380 250 395 C300 380 340 410 360 500 C320 460 280 440 250 445 C220 440 180 460 140 500 Z" 
        fill="#4338CA" 
        opacity="0.8"
      />

      {/* Colar tradicional de contas coloridas (Herança e Fé) */}
      <path d="M215 375 Q250 425 285 375" stroke="#F59E0B" strokeWidth="4" strokeDasharray="3 4" fill="none" />
      <circle cx="250" cy="402" r="5" fill="#EF4444" />

      {/* Pescoço altivo e Gracioso */}
      <path d="M222 300 L220 375 L280 375 L278 300 Z" fill="url(#benedita-skin)" />

      {/* Rosto de Benedita */}
      <path 
        d="M205 215 C205 170 220 150 250 150 C280 150 295 170 295 215 C295 260 280 295 250 295 C220 295 205 260 205 215 Z" 
        fill="url(#benedita-skin)" 
      />

      {/* Brinco de argola dourada reluzente */}
      <circle cx="202" cy="225" r="9" stroke="#FBBF24" strokeWidth="3" fill="none" />
      <circle cx="298" cy="225" r="9" stroke="#FBBF24" strokeWidth="3" fill="none" />

      {/* Traços faciais refinados e olhar expressivo */}
      {/* Olhos marcantes, penetrantes */}
      <ellipse cx="230" cy="205" rx="8.5" ry="5.5" fill="#F8FAFC" opacity="0.95" />
      <circle cx="231" cy="205" r="4.2" fill="#1A0D07" />
      <circle cx="232" cy="203.5" r="1.5" fill="#FFFFFF" />

      <ellipse cx="270" cy="205" rx="8.5" ry="5.5" fill="#F8FAFC" opacity="0.95" />
      <circle cx="269" cy="205" r="4.2" fill="#1A0D07" />
      <circle cx="270" cy="203.5" r="1.5" fill="#FFFFFF" />

      {/* Sobrancelhas arqueadas e decididas */}
      <path d="M220 195 Q230 188 242 192" stroke="#120803" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M280 195 Q270 188 258 192" stroke="#120803" strokeWidth="3.5" strokeLinecap="round" />

      {/* Nariz elegante */}
      <path d="M248 205 L246 226 Q240 231 250 233 Q260 231 254 226" fill="#2E1408" />
      <path d="M248 208 L248 226" stroke="#F59E0B" strokeWidth="1.8" opacity="0.4" strokeLinecap="round" />

      {/* Lábios bem desenhados */}
      <path d="M236 250 Q250 247 264 250" stroke="#1A0D07" strokeWidth="4" strokeLinecap="round" />
      <path d="M238 255 Q250 262 262 255" fill="#7F1D1D" stroke="#1A0D07" strokeWidth="2" />

      {/* O Majestoso Turbante (Torço) de Tecido Envolvente */}
      <path 
        d="M190 190 C185 130 200 90 250 85 C300 90 315 130 310 190 C330 170 325 110 295 80 C260 50 240 50 205 80 C175 110 170 170 190 190 Z" 
        fill="url(#turban-grad)" 
      />
      {/* Dobras do turbante */}
      <path d="M195 125 Q250 95 305 125" stroke="#FDE68A" strokeWidth="3" opacity="0.7" fill="none" />
      <path d="M190 155 Q250 120 310 155" stroke="#E879F9" strokeWidth="3" opacity="0.6" fill="none" />
      <circle cx="250" cy="85" r="7" fill="#FBBF24" />

      {/* O Cesto de Quitutes à Esquerda */}
      <g transform="translate(70, 430)">
        <ellipse cx="50" cy="40" rx="45" ry="18" fill="#78350F" stroke="#451A03" strokeWidth="2" />
        <path d="M5 40 Q50 90 95 40 Z" fill="#92400E" stroke="#451A03" strokeWidth="2" />
        {/* Frutas / quitutes do tabuleiro */}
        <circle cx="35" cy="35" r="10" fill="#E11D48" />
        <circle cx="55" cy="33" r="11" fill="#F59E0B" />
        <circle cx="70" cy="36" r="9" fill="#10B981" />
      </g>

      {/* A CARTA DE ALFORRIA CONDICIONAL (Dilema central) */}
      <g transform="translate(290, 420) rotate(-10)">
        {/* Folha de Pergaminho Amarelada */}
        <rect x="0" y="0" width="85" height="115" rx="3" fill="url(#paper-grad)" stroke="#B45309" strokeWidth="2" className="drop-shadow-lg" />
        {/* Linhas de texto manuscrito antigo */}
        <line x1="12" y1="20" x2="73" y2="20" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="32" x2="73" y2="32" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="42" x2="68" y2="42" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="52" x2="73" y2="52" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="62" x2="60" y2="62" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Cláusula Condicional Destacada em Vermelho (Sujeita a 5 anos de serviços) */}
        <rect x="10" y="72" width="65" height="16" rx="2" fill="#FCA5A5" opacity="0.4" />
        <text x="13" y="83" fill="#991B1B" fontSize="8" fontWeight="bold" fontFamily="serif">SOB CONDIÇÃO</text>
        
        {/* Selo Imperial de Cera Vermelha */}
        <circle cx="62" cy="98" r="10" fill="#DC2626" />
        <circle cx="62" cy="98" r="7" stroke="#7F1D1D" strokeWidth="1.5" fill="none" />
      </g>

      {/* Partículas místicas de esperança e resiliência */}
      <circle cx="340" cy="220" r="3" fill="#C084FC" opacity="0.8" />
      <circle cx="150" cy="270" r="2.5" fill="#818CF8" opacity="0.7" />
      <circle cx="390" cy="340" r="3.5" fill="#FDE047" opacity="0.6" />
    </svg>
  );
}
