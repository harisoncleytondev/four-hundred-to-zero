import React from 'react';

interface NavbarProps {
  activeEra?: string;
  scrollToId: (id: string) => void;
}

export default function Navbar({ activeEra, scrollToId }: NavbarProps) {
  const navItems = [
    { id: 'era-1', label: '1. Escravidão', color: 'hover:text-amber-400' },
    { id: 'era-2', label: '2. Alforria', color: 'hover:text-indigo-400' },
    { id: 'era-3', label: '3. Pós-Abolição', color: 'hover:text-orange-400' },
    { id: 'era-4', label: '4. Século XXI', color: 'hover:text-cyan-400' },
    { id: 'analise-estrutural', label: 'Diagnóstico & Desigualdade', color: 'hover:text-pink-400', isHighlight: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logomarca com SVG memorial */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-3 text-white font-serif font-black text-lg tracking-wider hover:opacity-80 transition-opacity"
        >
          {/* Nova Logomarca: 4 A 0 Clara e Imponente */}
          <div className="flex items-center gap-2.5">
            <svg className="w-16 h-8" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nav4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE68A" />
                  <stop offset="60%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
                <linearGradient id="nav0Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#D8D4CC" />
                </linearGradient>
              </defs>
              <text x="38" y="60" fontFamily="'Cinzel', Georgia, serif" fontSize="62" fontWeight="900" fill="url(#nav4Grad)" textAnchor="middle">4</text>
              <text x="80" y="46" fontFamily="'Space Grotesk', monospace" fontSize="14" fontWeight="700" fill="#D97706" fillOpacity="0.8" letterSpacing="3" textAnchor="middle">A</text>
              <text x="122" y="60" fontFamily="'Cinzel', Georgia, serif" fontSize="62" fontWeight="900" fill="url(#nav0Grad)" textAnchor="middle">0</text>
              <line x1="102" y1="42" x2="142" y2="42" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="hidden sm:inline font-serif font-black text-lg text-[#F5F2EB] tracking-wide">
              Quatrocentos a Zero
            </span>
          </div>
        </button>

        {/* Links de navegação pelas eras */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto text-xs sm:text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={`px-2.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                item.isHighlight 
                  ? 'bg-gradient-to-r from-cyan-600/30 to-pink-600/30 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400'
                  : 'text-slate-300 hover:bg-slate-800/60 ' + item.color
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}
