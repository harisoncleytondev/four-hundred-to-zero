import React from 'react';

// Renderizadores de bustos e retratos com iluminação de estúdio realista, profundidade e texturas de pele humanas
export function RealisticPortrait({ characterId, className = "w-full h-full" }) {
  if (characterId === 'tiao') {
    return (
      <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="tiao-light" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#8A4A28" />
            <stop offset="50%" stopColor="#4A2613" />
            <stop offset="85%" stopColor="#251208" />
            <stop offset="100%" stopColor="#100703" />
          </radialGradient>
          <linearGradient id="tiao-specular" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#D4A373" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#A96B3E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="eye-glow" cx="30%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#6F3918" />
            <stop offset="70%" stopColor="#27140B" />
            <stop offset="100%" stopColor="#0F0804" />
          </radialGradient>
        </defs>

        {/* Fundo de estúdio / iluminação de recorte dramática */}
        <circle cx="200" cy="200" r="195" fill="#1C0D06" />
        <circle cx="160" cy="150" r="130" fill="#9A3412" opacity="0.25" />

        {/* Ombros e Torso Masculino Esculpido */}
        <path d="M50 400 C60 300 130 260 200 260 C270 260 340 300 350 400 Z" fill="#251208" />
        <path d="M120 280 C150 250 250 250 280 280 L250 340 L150 340 Z" fill="#3D1E0E" opacity="0.7" />

        {/* Tecido rústico de algodão cru desgastado no ombro esquerdo */}
        <path d="M55 350 C80 300 140 280 160 320 L150 400 L50 400 Z" fill="#9A3412" opacity="0.4" />

        {/* Pescoço potente com relevo muscular */}
        <path d="M165 190 L160 270 C185 278 215 278 240 270 L235 190 Z" fill="url(#tiao-light)" />
        <path d="M165 200 C175 250 195 270 198 275" stroke="#170A04" strokeWidth="4" opacity="0.6" strokeLinecap="round" />

        {/* Formato Anatômico da Cabeça e Mandíbula Firme */}
        <path 
          d="M140 145 C140 85 165 55 200 55 C235 55 260 85 260 145 C260 200 242 235 200 235 C158 235 140 200 140 145 Z" 
          fill="url(#tiao-light)" 
        />
        {/* Luz especular na têmpora e bochecha (iluminação cinematográfica 3D) */}
        <path 
          d="M143 130 C145 90 168 65 195 60 C170 85 160 130 165 180 C150 170 142 150 143 130 Z" 
          fill="url(#tiao-specular)" 
        />

        {/* Cabelo crespo afro bem desenhado com volume orgânico */}
        <path 
          d="M135 120 C130 65 160 35 200 35 C240 35 270 65 265 120 C258 75 235 48 200 48 C165 48 142 75 135 120 Z" 
          fill="#0D0603" 
        />
        {/* Texturas sutis no contorno do cabelo */}
        <circle cx="145" cy="55" r="7" fill="#0D0603" />
        <circle cx="170" cy="40" r="9" fill="#0D0603" />
        <circle cx="200" cy="35" r="10" fill="#0D0603" />
        <circle cx="230" cy="40" r="9" fill="#0D0603" />
        <circle cx="255" cy="55" r="7" fill="#0D0603" />

        {/* Orelhas com modelagem de luz */}
        <path d="M138 135 C132 145 132 165 142 170" stroke="#522A14" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M262 135 C268 145 268 165 258 170" stroke="#3D1D0D" strokeWidth="8" strokeLinecap="round" fill="none" />

        {/* Sobrancelhas densas e expressivas */}
        <path d="M160 115 Q175 108 190 114" stroke="#0D0603" strokeWidth="5" strokeLinecap="round" />
        <path d="M240 115 Q225 108 210 114" stroke="#0D0603" strokeWidth="5" strokeLinecap="round" />

        {/* Olhos Humanos Profundos com Brilho Realista */}
        {/* Olho Esquerdo */}
        <ellipse cx="175" cy="128" rx="10" ry="6.5" fill="#E8D8CF" />
        <ellipse cx="176" cy="128" rx="6" ry="6" fill="url(#eye-glow)" />
        <circle cx="176" cy="128" r="3" fill="#050201" />
        <circle cx="174" cy="126" r="1.5" fill="#FFFFFF" />

        {/* Olho Direito */}
        <ellipse cx="225" cy="128" rx="10" ry="6.5" fill="#E8D8CF" />
        <ellipse cx="224" cy="128" rx="6" ry="6" fill="url(#eye-glow)" />
        <circle cx="224" cy="128" r="3" fill="#050201" />
        <circle cx="222" cy="126" r="1.5" fill="#FFFFFF" />

        {/* Pálpebras e Linhas de Expressão Humanas */}
        <path d="M163 122 Q175 118 187 122" stroke="#251208" strokeWidth="2.5" fill="none" />
        <path d="M213 122 Q225 118 237 122" stroke="#251208" strokeWidth="2.5" fill="none" />
        <path d="M194 116 L206 116" stroke="#170A04" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Nariz Humano Esculpido com Sombreamento Gradual */}
        <path d="M196 122 L194 158 C185 163 186 172 195 174 C205 174 206 163 198 158" fill="#3D1D0D" />
        <path d="M196 126 L195 166" stroke="#B47B4E" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="189" cy="168" r="3.5" fill="#1C0D06" />
        <circle cx="206" cy="168" r="3.5" fill="#1C0D06" />

        {/* Barba cerrada realista */}
        <path 
          d="M152 165 C155 215 175 235 200 236 C225 235 245 215 248 165 C235 200 215 215 200 215 C185 215 165 200 152 165 Z" 
          fill="#0D0603" 
          opacity="0.85" 
        />

        {/* Lábios Naturais */}
        <path d="M182 192 C190 188 210 188 218 192" stroke="#1A0B05" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M185 196 C192 203 208 203 215 196" fill="#3D1D0D" stroke="#1A0B05" strokeWidth="2" />

        {/* Gotículas e brilho sutil de suor do trabalho forçado sob sol */}
        <circle cx="188" cy="85" r="1.5" fill="#FDE047" opacity="0.6" />
        <circle cx="160" cy="145" r="1.5" fill="#FDE047" opacity="0.6" />
      </svg>
    );
  }

  if (characterId === 'benedita') {
    return (
      <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="benedita-light" cx="40%" cy="32%" r="60%">
            <stop offset="0%" stopColor="#9C5835" />
            <stop offset="50%" stopColor="#5E311A" />
            <stop offset="85%" stopColor="#2E160A" />
            <stop offset="100%" stopColor="#150903" />
          </radialGradient>
          <linearGradient id="turban-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2A127" />
            <stop offset="45%" stopColor="#7E22CE" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>
        </defs>

        {/* Fundo dramático da era da Alforria */}
        <circle cx="200" cy="200" r="195" fill="#0C0D1B" />
        <circle cx="230" cy="160" r="120" fill="#4338CA" opacity="0.25" />

        {/* Ombros e Silhueta Feminina */}
        <path d="M60 400 C75 310 135 270 200 270 C265 270 325 310 340 400 Z" fill="#1E1B4B" />
        {/* Chalé de renda colonial nos ombros */}
        <path d="M85 350 C120 290 200 280 230 330 L200 400 L80 400 Z" fill="#4338CA" opacity="0.6" />
        
        {/* Colar de Contas de Orixá e Proteção */}
        <path d="M165 280 Q200 325 235 280" stroke="#F59E0B" strokeWidth="4" strokeDasharray="2 4" fill="none" />
        <circle cx="200" cy="305" r="4.5" fill="#EF4444" />

        {/* Pescoço gracioso e ereto */}
        <path d="M175 195 L170 275 C190 282 210 282 230 275 L225 195 Z" fill="url(#benedita-light)" />

        {/* Rosto Feminino Esculpido */}
        <path 
          d="M150 145 C150 95 170 70 200 70 C230 70 250 95 250 145 C250 195 235 228 200 228 C165 228 150 195 150 145 Z" 
          fill="url(#benedita-light)" 
        />
        {/* Realce luminoso na maçã do rosto */}
        <ellipse cx="175" cy="148" rx="14" ry="8" fill="#C47E53" opacity="0.5" />
        <ellipse cx="225" cy="148" rx="14" ry="8" fill="#C47E53" opacity="0.3" />

        {/* Brincos de Argola Dourada em Balanço */}
        <circle cx="145" cy="155" r="12" stroke="#FBBF24" strokeWidth="3" fill="none" />
        <circle cx="255" cy="155" r="12" stroke="#FBBF24" strokeWidth="3" fill="none" />

        {/* O Majestoso Turbante (Torço Tradicional) */}
        <path 
          d="M135 125 C130 65 150 30 200 28 C250 30 270 65 265 125 C285 95 280 45 240 22 C195 0 160 8 125 35 C110 65 115 100 135 125 Z" 
          fill="url(#turban-gradient)" 
        />
        <path d="M140 75 Q200 45 260 75" stroke="#FDE68A" strokeWidth="3.5" opacity="0.8" fill="none" />
        <path d="M135 100 Q200 68 265 100" stroke="#C084FC" strokeWidth="3" opacity="0.7" fill="none" />

        {/* Olhos Castanhos Expressivos e Dignos */}
        <ellipse cx="178" cy="132" rx="9" ry="6" fill="#F8FAFC" />
        <circle cx="179" cy="132" r="4.2" fill="#2E160A" />
        <circle cx="177" cy="130" r="1.5" fill="#FFFFFF" />

        <ellipse cx="222" cy="132" rx="9" ry="6" fill="#F8FAFC" />
        <circle cx="221" cy="132" r="4.2" fill="#2E160A" />
        <circle cx="219" cy="130" r="1.5" fill="#FFFFFF" />

        {/* Sobrancelhas Arqueadas Elegantes */}
        <path d="M166 122 Q178 114 190 119" stroke="#1A0903" strokeWidth="3" strokeLinecap="round" />
        <path d="M234 122 Q222 114 210 119" stroke="#1A0903" strokeWidth="3" strokeLinecap="round" />

        {/* Nariz Fino e Bem Modelado */}
        <path d="M198 126 L196 156 C190 160 190 168 198 170 C206 168 206 160 200 156" fill="#4A2411" />
        <circle cx="193" cy="164" r="2.8" fill="#1F0C05" />
        <circle cx="205" cy="164" r="2.8" fill="#1F0C05" />

        {/* Lábios Marcantes */}
        <path d="M185 188 Q200 184 215 188" stroke="#1A0903" strokeWidth="4" strokeLinecap="round" />
        <path d="M188 192 Q200 200 212 192" fill="#881337" stroke="#1A0903" strokeWidth="1.5" />
      </svg>
    );
  }

  if (characterId === 'manuel') {
    return (
      <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="manuel-light" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#8C4622" />
            <stop offset="50%" stopColor="#522610" />
            <stop offset="85%" stopColor="#251006" />
            <stop offset="100%" stopColor="#0F0602" />
          </radialGradient>
          <linearGradient id="hat-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#CA8A04" />
            <stop offset="100%" stopColor="#713F12" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="200" r="195" fill="#141416" />
        <circle cx="160" cy="160" r="120" fill="#C2410C" opacity="0.25" />

        {/* Ombros Cansados da Estiva */}
        <path d="M50 400 C65 305 130 265 200 265 C270 265 335 305 350 400 Z" fill="#0C4A6E" />
        {/* Suspensório de Couro Gasto */}
        <line x1="120" y1="285" x2="100" y2="400" stroke="#78350F" strokeWidth="14" strokeLinecap="round" />
        <line x1="280" y1="285" x2="300" y2="400" stroke="#78350F" strokeWidth="14" strokeLinecap="round" />

        {/* Pescoço Robusto */}
        <path d="M170 195 L165 275 C185 282 215 282 235 275 L230 195 Z" fill="url(#manuel-light)" />

        {/* Rosto com marcas do tempo e do sol do cais */}
        <path 
          d="M145 145 C145 90 168 65 200 65 C232 65 255 90 255 145 C255 200 240 232 200 232 C160 232 145 200 145 145 Z" 
          fill="url(#manuel-light)" 
        />
        {/* Rugas de preocupação na testa */}
        <path d="M175 92 Q200 88 225 92" stroke="#3D1D0D" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <path d="M178 98 Q200 95 222 98" stroke="#3D1D0D" strokeWidth="2" opacity="0.6" strokeLinecap="round" />

        {/* Bigode Republicano Marcante */}
        <path 
          d="M170 182 Q185 174 200 180 Q215 174 230 182 Q240 198 225 192 Q200 186 175 192 Q160 198 170 182 Z" 
          fill="#120803" 
        />

        {/* O Chapéu Palheta Inclinado com Personalidade */}
        <g transform="translate(100, 35)">
          <ellipse cx="100" cy="40" rx="90" ry="22" fill="url(#hat-gradient)" stroke="#854D0E" strokeWidth="2" />
          <path d="M45 36 C45 18 65 8 100 8 C135 8 155 18 155 36 Z" fill="url(#hat-gradient)" stroke="#854D0E" strokeWidth="2" />
          <path d="M46 32 Q100 36 154 32 L155 37 Q100 41 45 37 Z" fill="#18181B" />
        </g>

        {/* Olhos de quem conhece a dureza da lei de vadiagem */}
        <ellipse cx="178" cy="130" rx="9" ry="5.5" fill="#E2E8F0" />
        <circle cx="179" cy="130" r="4" fill="#1A0D06" />
        <circle cx="177" cy="128" r="1.3" fill="#FFFFFF" />

        <ellipse cx="222" cy="130" rx="9" ry="5.5" fill="#E2E8F0" />
        <circle cx="221" cy="130" r="4" fill="#1A0D06" />
        <circle cx="219" cy="128" r="1.3" fill="#FFFFFF" />

        {/* Nariz Forte de Estivador */}
        <path d="M198 124 L196 156 C188 160 188 168 198 170 C208 168 208 160 200 156" fill="#421E0B" />
        <circle cx="192" cy="164" r="3" fill="#170A04" />
        <circle cx="206" cy="164" r="3" fill="#170A04" />
      </svg>
    );
  }

  // Camila (Século XXI)
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="camila-light" cx="42%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#9E5733" />
          <stop offset="50%" stopColor="#63341C" />
          <stop offset="85%" stopColor="#30170A" />
          <stop offset="100%" stopColor="#150803" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="195" fill="#060914" />
      <circle cx="220" cy="160" r="120" fill="#06B6D4" opacity="0.25" />

      {/* Ombros com Blazer Contemporâneo */}
      <path d="M55 400 C70 310 135 270 200 270 C265 270 330 310 345 400 Z" fill="#0F172A" />
      <path d="M175 270 L200 330 L225 270 Z" fill="#059669" />

      {/* Pescoço Elegante */}
      <path d="M175 195 L172 270 C190 276 210 276 228 270 L225 195 Z" fill="url(#camila-light)" />

      {/* Fones Bluetooth Minimalistas no Pescoço */}
      <path d="M165 240 C165 275 235 275 235 240" stroke="#06B6D4" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="165" cy="240" r="7" fill="#E2E8F0" />
      <circle cx="235" cy="240" r="7" fill="#E2E8F0" />

      {/* Rosto Jovem e Intelectual de Camila */}
      <path 
        d="M150 145 C150 95 170 70 200 70 C230 70 250 95 250 145 C250 195 235 228 200 228 C165 228 150 195 150 145 Z" 
        fill="url(#camila-light)" 
      />

      {/* Armação de Óculos Moderna e Fina */}
      <rect x="156" y="125" width="34" height="22" rx="7" stroke="#06B6D4" strokeWidth="2.5" fill="rgba(6,182,212,0.1)" />
      <rect x="210" y="125" width="34" height="22" rx="7" stroke="#06B6D4" strokeWidth="2.5" fill="rgba(6,182,212,0.1)" />
      <line x1="190" y1="135" x2="210" y2="135" stroke="#06B6D4" strokeWidth="2" />

      {/* Olhos Vivos e Atentos */}
      <ellipse cx="173" cy="136" rx="8" ry="5.5" fill="#F8FAFC" />
      <circle cx="174" cy="136" r="3.8" fill="#1C0D06" />
      <circle cx="172" cy="134" r="1.3" fill="#FFFFFF" />

      <ellipse cx="227" cy="136" rx="8" ry="5.5" fill="#F8FAFC" />
      <circle cx="226" cy="136" r="3.8" fill="#1C0D06" />
      <circle cx="224" cy="134" r="1.3" fill="#FFFFFF" />

      {/* As Tranças Nagô / Box Braids Esculpidas com Anéis */}
      <path d="M142 120 C138 70 160 40 200 40 C240 40 262 70 258 120 Z" fill="#09090B" />
      <g stroke="#09090B" strokeWidth="6" strokeLinecap="round">
        <path d="M150 90 C135 140 120 220 115 350" />
        <path d="M165 80 C150 140 140 230 135 370" />
        <path d="M235 80 C250 140 260 230 265 370" />
        <path d="M250 90 C265 140 280 220 285 350" />
      </g>
      {/* Detalhes Dourados nas Tranças (Cuff Rings) */}
      <circle cx="130" cy="240" r="4" fill="#FBBF24" />
      <circle cx="270" cy="240" r="4" fill="#FBBF24" />
      <circle cx="120" cy="310" r="4" fill="#FBBF24" />
      <circle cx="280" cy="310" r="4" fill="#FBBF24" />

      {/* Nariz Definido */}
      <path d="M198 132 L197 158 C192 162 192 168 198 170 C204 168 204 162 200 158" fill="#4B2513" />
      <circle cx="194" cy="165" r="2.5" fill="#1C0C05" />
      <circle cx="204" cy="165" r="2.5" fill="#1C0C05" />

      {/* Lábios Bem Desenhados */}
      <path d="M185 188 Q200 185 215 188" stroke="#1A0A04" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M188 192 Q200 198 212 192" fill="#9D174D" stroke="#1A0A04" strokeWidth="1.5" />
    </svg>
  );
}
