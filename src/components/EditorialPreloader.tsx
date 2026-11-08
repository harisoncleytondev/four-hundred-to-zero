import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MODEL_ASSETS = [
  { id: 'tiao', name: 'Sebastião (Tião)', year: '1835', era: 'A Escravização Plena', url: '/models/tiao.glb?v=v_20261107_no_cuffs_v4' },
  { id: 'benedita', name: 'Benedita', year: '1878', era: 'O Limbo da Alforria', url: '/models/benedita.glb?v=v_20261107_no_cuffs_v4' },
  { id: 'manuel', name: 'Manuel', year: '1910', era: 'A República Pós-Abolição', url: '/models/manuel.glb?v=v_20261107_no_cuffs_v4' },
  { id: 'camila', name: 'Camila', year: '2026', era: 'O Século XXI Contemporâneo', url: '/models/camila.glb?v=v_20261107_no_cuffs_v4' },
];

export function EditorialPreloader({ onLoaded }: { onLoaded: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(5);
  const [statusMessage, setStatusMessage] = useState('Desenhando Sebastião (Tião)...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Carregamento estritamente progressivo (um por um de verdade)
    const loadProgressively = async () => {
      const total = MODEL_ASSETS.length;

      for (let i = 0; i < total; i++) {
        if (!isMounted) return;

        const currentAsset = MODEL_ASSETS[i];
        setActiveStep(i);
        setStatusMessage(`Desenhando ${currentAsset.name} (${currentAsset.year})...`);

        try {
          // Faz a requisição e consome os bytes reais progressivamente
          const response = await fetch(currentAsset.url);
          if (response.ok) {
            await response.arrayBuffer();
          }
        } catch {
          // Segue o fluxo caso haja cache ou falha pontual
        }

        // Garante um tempo visual de leitura de no mínimo 850ms por personagem
        await new Promise((resolve) => setTimeout(resolve, 850));

        if (!isMounted) return;
        setProgress(Math.round(((i + 1) / total) * 100));
      }

      if (!isMounted) return;
      setStatusMessage('Finalizando montagem do cenário...');
      await new Promise((resolve) => setTimeout(resolve, 600));

      if (isMounted) {
        setIsDone(true);
        setTimeout(() => {
          if (isMounted) onLoaded();
        }, 750);
      }
    };

    loadProgressively();

    return () => {
      isMounted = false;
    };
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#08090D] text-[#F5F2EB] p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Luz de atmosfera central sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#8E1010]/15 blur-[120px] pointer-events-none" />

          {/* Topo: Marca 4 A 0 */}
          <div className="relative z-10 flex items-center justify-between w-full border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <svg className="w-14 h-7" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="preTop4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="60%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#B45309" />
                  </linearGradient>
                </defs>
                <text x="38" y="60" fontFamily="'Cinzel', Georgia, serif" fontSize="62" fontWeight="900" fill="url(#preTop4)" textAnchor="middle">4</text>
                <text x="80" y="46" fontFamily="'Space Grotesk', monospace" fontSize="14" fontWeight="700" fill="#D97706" fillOpacity="0.8" letterSpacing="3" textAnchor="middle">A</text>
                <text x="122" y="60" fontFamily="'Cinzel', Georgia, serif" fontSize="62" fontWeight="900" fill="#F5F2EB" textAnchor="middle">0</text>
                <line x1="102" y1="42" x2="142" y2="42" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="font-serif font-black text-sm tracking-wider text-[#F5F2EB]">
                Quatrocentos a Zero
              </span>
            </div>

            {/* Contador numérico de progresso */}
            <div className="font-mono text-xs sm:text-sm tracking-widest text-[#D97706] font-bold">
              {String(progress).padStart(3, '0')}%
            </div>
          </div>

          {/* Centro: O Ano Monumental e o Status Ativo */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {/* Ano Monumental da Era */}
                <div className="text-7xl sm:text-9xl md:text-[11rem] font-serif font-black tracking-tight text-[#F5F2EB] drop-shadow-sm leading-none">
                  {MODEL_ASSETS[activeStep]?.year}
                </div>

                {/* Status: "Desenhando personagens..." */}
                <div className="flex items-center justify-center gap-2.5 text-base sm:text-xl font-sans font-medium text-[#D97706]">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                  <span>{statusMessage}</span>
                </div>

                {/* Era Histórica */}
                <div className="text-xs font-mono tracking-[0.25em] uppercase text-[#F5F2EB]/45">
                  {MODEL_ASSETS[activeStep]?.era}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Rodapé: A Linha do Tempo em 4 Estágios Progressivos */}
          <div className="relative z-10 w-full max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {MODEL_ASSETS.map((asset, idx) => {
                const isCompleted = idx < activeStep || (idx === activeStep && progress === 100);
                const isCurrent = idx === activeStep && progress < 100;

                return (
                  <div key={asset.id} className="space-y-2">
                    <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ease-out rounded-full ${
                          isCompleted
                            ? 'w-full bg-[#D97706]'
                            : isCurrent
                            ? 'w-full bg-[#D97706]/75 animate-pulse'
                            : 'w-0'
                        }`}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono">
                      <span className={`${isCurrent || isCompleted ? 'text-[#F5F2EB]' : 'text-[#F5F2EB]/35'}`}>
                        {asset.year}
                      </span>
                      <span className="hidden sm:inline text-[#F5F2EB]/40 truncate max-w-[100px]">
                        {asset.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
