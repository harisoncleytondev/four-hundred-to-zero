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
  const [progress, setProgress] = useState(15);
  const [statusMessage, setStatusMessage] = useState('Preparando Sebastião (Tião)...');
  const [isDone, setIsDone] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  const finishLoading = () => {
    setIsDone(true);
    setTimeout(() => {
      onLoaded();
    }, 400);
  };

  useEffect(() => {
    let isMounted = true;

    // Timeout de emergência: se a conexão do celular for 3G ou lenta, após 6s mostra botão de entrar
    const skipTimer = setTimeout(() => {
      if (isMounted) setShowSkip(true);
    }, 4000);

    // Timeout absoluto de segurança: nunca deixa o usuário preso mais de 8s mesmo em 2G
    const maxSafetyTimer = setTimeout(() => {
      if (isMounted && !isDone) {
        finishLoading();
      }
    }, 8000);

    const loadProgressively = async () => {
      // 1. Carrega prioritariamente o primeiro modelo (Sebastião - 1835) para o usuário já poder ver a tela inicial
      try {
        const firstAsset = MODEL_ASSETS[0];
        setActiveStep(0);
        setStatusMessage(`Carregando ${firstAsset.name} (${firstAsset.year})...`);
        const res = await fetch(firstAsset.url);
        if (res.ok) await res.arrayBuffer();
      } catch {
        // Segue mesmo se der erro de rede
      }

      if (!isMounted) return;
      setProgress(50);
      setActiveStep(1);

      // Pequena pausa editorial suave
      await new Promise((r) => setTimeout(r, 400));
      if (!isMounted) return;

      // 2. Os modelos seguintes são requisitados em background sem travar a tela
      // Iniciamos o download em background dos outros 3
      Promise.allSettled(
        MODEL_ASSETS.slice(1).map((asset) =>
          fetch(asset.url)
            .then((r) => r.arrayBuffer())
            .catch(() => {})
        )
      );

      setProgress(100);
      setStatusMessage('Pronto para explorar');
      await new Promise((r) => setTimeout(r, 300));

      if (isMounted) {
        finishLoading();
      }
    };

    loadProgressively();

    return () => {
      isMounted = false;
      clearTimeout(skipTimer);
      clearTimeout(maxSafetyTimer);
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
            {showSkip && (
              <div className="flex justify-center pb-2">
                <button
                  type="button"
                  onClick={finishLoading}
                  className="px-4 py-1.5 rounded-full border border-[#D97706]/60 bg-[#D97706]/15 hover:bg-[#D97706]/25 text-[#F5F2EB] text-xs font-mono tracking-wider transition-all duration-300 animate-pulse"
                >
                  Entrar agora ➔
                </button>
              </div>
            )}
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
