import React from 'react';
import { ArrowDown, Flame, BookMarked, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToFirstEra = () => {
    document.getElementById('era-1')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
      {/* Luzes de fundo atmosféricas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/20 via-indigo-600/20 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Tag Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
          <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
          Uma Linhagem, Quatro Séculos de Resistência
        </div>

        {/* Título Principal de Impacto */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-serif leading-[1.1]">
          Fios da <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400">Memória</span> e da Riqueza
        </h1>

        {/* Subtítulo Instigante */}
        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Do cativeiro no cafezal à beca universitária com subemprego: acompanhe a história de quatro gerações de uma mesma família negra no Brasil. 
        </p>

        {/* Mensagem Chave */}
        <div className="p-4 sm:p-5 rounded-2xl glass-panel max-w-2xl mx-auto border border-amber-500/20 text-xs sm:text-sm text-slate-300 text-left sm:text-center leading-relaxed">
          <strong className="text-amber-400">A Grande Pergunta:</strong> Por que, mesmo após a abolição, as leis de cotas e os auxílios públicos, a maioria da população negra ainda ocupa a base da pirâmide de renda no Brasil de hoje?
        </div>

        {/* Botão de Rolagem / Início */}
        <div className="pt-4">
          <button
            onClick={scrollToFirstEra}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-sm sm:text-base hover:from-amber-500 hover:to-orange-500 shadow-xl shadow-orange-900/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Iniciar Viagem Histórica</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>

        {/* Mini navegação das 4 eras */}
        <div className="pt-8 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> 1. Escravidão Plena</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> 2. Alforria sob Condição</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-600" /> 3. Pós-Abolição</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> 4. Século XXI</span>
        </div>

      </div>
    </header>
  );
}
