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
          <svg className="w-8 h-8 rounded-lg shadow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="navBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8E1010" />
                <stop offset="100%" stopColor="#141838" />
              </linearGradient>
            </defs>
            <rect width="90" height="90" x="5" y="5" rx="22" fill="url(#navBg)" stroke="#D97706" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M26 74 C 26 44, 42 26, 74 26" fill="none" stroke="url(#navGold)" strokeWidth="7" strokeLinecap="round" />
            <path d="M26 50 C 44 50, 50 44, 74 44" fill="none" stroke="#F5F2EB" strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="26" cy="74" r="5" fill="#F59E0B" />
            <circle cx="74" cy="26" r="5" fill="#F59E0B" />
          </svg>
          <span className="hidden sm:inline font-serif font-bold text-base text-[#F5F2EB] tracking-normal">
            Fios da Memória
          </span>
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
