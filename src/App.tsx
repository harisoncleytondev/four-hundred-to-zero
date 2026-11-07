import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Character3DStage } from './components/Character3DStage';

/**
 * PALETA RIGOROSA DE 7 CORES (ESTILO SCMP INFOGRAPHIC + FIGMA LAYOUT):
 * 1. #8E1010 (Vermelho Colonial - Ato I)
 * 2. #141838 (Índigo Noturno - Ato II)
 * 3. #7A2E0F (Ferrugem Portuário - Ato III)
 * 4. #062836 (Petróleo Urbano - Ato IV)
 * 5. #0B0B0E (Carvão Editorial - Síntese)
 * 6. #D97706 (Ouro / Destaque)
 * 7. #F5F2EB (Pergaminho / Branco Editorial)
 */

const eras = [
  {
    id: 'tiao',
    number: '01',
    year: '1835',
    eraTitle: 'A Escravização Plena',
    characterName: 'Sebastião (Tião)',
    characterSubtitle: 'Mestre Carpinteiro e Lavrador Escravizado • Vale do Paraíba',
    bgHex: '#8E1010',
    haloHex: '#D8D4CC',
    isLeft: true, // Círculo e Personagem 3D em pé na esquerda, história rolando na direita
    statHighlight: {
      value: 'R$ 0,00',
      label: 'Patrimônio permitido ou herdado após 350 anos de trabalho compulsório',
    },
    blocks: [
      {
        kicker: 'I. O CORPO COMO PROPRIEDADE',
        headline: 'A riqueza do Império erguida por mãos que nada podiam possuir',
        body: 'No Brasil de 1835, Sebastião não é reconhecido como cidadão, mas como um bem semovente listado no inventário da fazenda. Carpinteiro de ofício, ele levanta engenhos, conserta rodas d’água e colhe café do amanhecer ao anoitecer.',
      },
      {
        kicker: 'II. A RESISTÊNCIA SILENCIOSA',
        headline: 'As moedas enterradas no chão batido da senzala',
        body: 'Aos domingos, nos raros intervalos permitidos, Tião entalha pequenos utensílios de madeira para vender na vila. Ele esconde cada moeda de cobre com um único propósito: comprar a carta de alforria da filha recém-nascida, Benedita.',
      },
      {
        kicker: 'III. A RAIZ DA DESIGUALDADE',
        headline: 'A acumulação primitiva de uma única cor',
        body: 'Enquanto as famílias proprietárias acumulavam terras, palacetes e capital financeiro hereditário, a linhagem de Sebastião foi impedida pela lei e pelo chicote de acumular qualquer centavo para a geração seguinte.',
      },
    ],
  },
  {
    id: 'benedita',
    number: '02',
    year: '1878',
    eraTitle: 'O Limbo da Alforria Condicional',
    characterName: 'Benedita',
    characterSubtitle: 'Quitandeira e "Liberta sob Condição" • São Paulo Imperial',
    bgHex: '#141838',
    haloHex: '#D8D4CC',
    isLeft: false, // Alterna: Personagem 3D em pé na direita, história rolando na esquerda
    statHighlight: {
      value: '60%+',
      label: 'Das alforrias exigiam pagamento em dinheiro ou anos de serviço gratuito obrigatório',
    },
    blocks: [
      {
        kicker: 'I. NEM ESCRAVA, NEM LIVRE',
        headline: 'O período esquecido: a liberdade presa a uma cláusula',
        body: 'Entre a escravidão e a abolição existiu a figura jurídica dos libertos sob condição. Benedita recebeu o papel da alforria, mas com uma trava: era obrigada por lei a trabalhar mais sete anos gratuitamente para o antigo senhor sob pena de anulação.',
      },
      {
        kicker: 'II. O PAPEL DOBRADO NO PEITO',
        headline: 'Vigiada a cada esquina pela polícia imperial',
        body: 'Com seu cesto de quitutes, Benedita percorre as ruas sob tensão constante. Qualquer pessoa negra precisava carregar a carta de alforria selada junto ao corpo: um simples questionamento policial sem o documento significava o retorno imediato ao cativeiro.',
      },
      {
        kicker: 'III. A CERCA DA LEI DE TERRAS (1850)',
        headline: 'Livres para trabalhar, proibidos de ser donos do chão',
        body: 'Prevendo o fim do cativeiro, o Império aprovou a Lei de Terras determinando que terras só poderiam ser adquiridas mediante compra em dinheiro. Sem herança e saindo da servidão, Benedita jamais pôde comprar um pedaço de terra.',
      },
    ],
  },
  {
    id: 'manuel',
    number: '03',
    year: '1910',
    eraTitle: 'A República Pós-Abolição',
    characterName: 'Manuel',
    characterSubtitle: 'Estivador do Porto e Despejado Urbano • Rio de Janeiro',
    bgHex: '#7A2E0F',
    haloHex: '#D8D4CC',
    isLeft: true, // Alterna: Personagem 3D em pé na esquerda, história na direita
    statHighlight: {
      value: 'Zero',
      label: 'Hectares de terra, escolas ou indenizações concedidas aos 700 mil libertos em 1888',
    },
    blocks: [
      {
        kicker: 'I. O 13 DE MAIO SEM CHÃO',
        headline: 'A abolição que libertou o Estado de qualquer obrigação',
        body: 'Filho de Benedita, Manuel nasceu livre na República, mas herdou o vazio material. O 13 de Maio de 1888 assinou o fim do cativeiro sem distribuir um lote de terra, sem criar escolas públicas e sem pagar qualquer reparação.',
      },
      {
        kicker: 'II. O "BOTA-ABAIXO" E O MORRO',
        headline: 'Expulsos do centro para erguer as primeiras favelas',
        body: 'Quando a reforma urbana demoliu os cortiços do centro do Rio em nome da modernidade europeia, Manuel e milhares de famílias negras foram despejados sem indenização, subindo os morros com caixotes de madeira para ter onde dormir.',
      },
      {
        kicker: 'III. IMIGRAÇÃO SUBSIDIADA E LEI DE VADIAGEM',
        headline: 'Dinheiro público para imigrantes europeus; Código Penal para os negros',
        body: 'Enquanto o governo brasileiro pagava passagens de navio e doava lotes agrícolas para colonos europeus branquearem o país, Manuel carregava sacas de 60kg no porto por diárias de fome, sob ameaça de prisão pela Lei de Vadiagem de 1890.',
      },
    ],
  },
  {
    id: 'camila',
    number: '04',
    year: '2026',
    eraTitle: 'O Século XXI Contemporâneo',
    characterName: 'Camila',
    characterSubtitle: 'Primeira Universitária da Família (Cotista) • Metrópole Contemporânea',
    bgHex: '#062836',
    haloHex: '#D8D4CC',
    isLeft: false, // Alterna: Personagem 3D em pé na direita, história na esquerda
    statHighlight: {
      value: '-34%',
      label: 'Diferença salarial média recebida por profissionais negros mesmo com diploma superior (IBGE)',
    },
    blocks: [
      {
        kicker: 'I. A REVOLUÇÃO DO DIPLOMA',
        headline: 'Quatro séculos depois, a primeira beca da árvore genealógica',
        body: 'Bisneta de Manuel, Camila ingressou na universidade pública graças à Lei de Cotas (2012) e manteve os estudos com o apoio de auxílios estudantis. Ela quebrou uma barreira secular que separava sua família do ensino superior.',
      },
      {
        kicker: 'II. O PESO DE COMEÇAR DO ZERO',
        headline: 'Por que o diploma sozinho não apaga 400 anos de vantagem patrimonial?',
        body: 'Ao se formar, Camila descobre a diferença entre renda e patrimônio. Seus colegas brancos de faculdade têm apartamentos quitados pelos pais, carros na garagem e indicações em diretorias. Camila precisa pagar aluguel, condução e ajudar nas contas de casa.',
      },
      {
        kicker: 'III. O LIMITE DOS AUXÍLIOS E DAS COTAS',
        headline: 'Políticas públicas evitam a fome e abrem portas, mas não transferem riqueza',
        body: 'Auxílios públicos garantem o prato de comida imediato e cotas democratizam o estudo, mas o mercado de trabalho privado ainda impõe a precarização PJ, o racismo estrutural nas contratações e a ausência total de herança familiar.',
      },
    ],
  },
];

const lineageBridges = [
  {
    fromYear: '1835',
    toYear: '1878',
    relation: 'DE PAI PARA FILHA • 1ª TRANSIÇÃO GERACIONAL',
    title: 'Das moedas enterradas na senzala ao papel condicional da alforria',
    fromLeft: true,
  },
  {
    fromYear: '1878',
    toYear: '1910',
    relation: 'DE MÃE PARA FILHO • 2ª TRANSIÇÃO GERACIONAL',
    title: 'Do tabuleiro nas ruas imperiais aos caixotes do despejo republicano',
    fromLeft: false,
  },
  {
    fromYear: '1910',
    toYear: '2026',
    relation: 'DE BISAVÔ PARA BISNETA • 3ª TRANSIÇÃO GERACIONAL',
    title: 'Das sacas de 60kg no porto ao primeiro diploma universitário da família',
    fromLeft: true,
  },
];

export default function App() {
  const [activeBg, setActiveBg] = useState(eras[0].bgHex);
  const [eraProgress, setEraProgress] = useState({
    tiao: 0,
    benedita: 0,
    manuel: 0,
    camila: 0,
  });
  const [eraTransition, setEraTransition] = useState({
    tiao: 0,
    benedita: -1,
    manuel: -1,
    camila: -1,
  });

  const [visibleEras, setVisibleEras] = useState<Record<string, boolean>>({
    tiao: true,
    benedita: false,
    manuel: false,
    camila: false,
  });

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Monitoramento nativo de Scroll Vertical para trocar as cores de fundo, animar transições e rotacionar os personagens 3D
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const newProgress: Record<string, number> = {};
        const newTransition: Record<string, number> = {};
        const newVisible: Record<string, boolean> = {};

        eras.forEach((era) => {
          const el = sectionRefs.current[era.id];
          if (el) {
            const rect = el.getBoundingClientRect();
            const totalHeight = rect.height - vh;
            const current = -rect.top;
            const ratio = Math.max(0, Math.min(1, totalHeight > 0 ? current / totalHeight : 0));
            newProgress[era.id] = ratio;

            // Mantém um raio amplo de viewport para o modelo já estar pronto e carregado quando o usuário chegar rolando
            // Sem delay, sem tela branca ou espera de carregamento
            const isNearViewport = rect.top < vh * 2.2 && rect.bottom > -vh * 1.2;
            newVisible[era.id] = isNearViewport;

            // Calcula o estado de entrada (-1 -> 0) e saída (0 -> +1) entre um personagem e outro
            if (rect.top > 0) {
              newTransition[era.id] = -Math.min(1, rect.top / (vh * 0.85));
            } else if (rect.bottom < vh) {
              newTransition[era.id] = Math.min(1, (vh - rect.bottom) / (vh * 0.85));
            } else {
              newTransition[era.id] = 0;
            }

            // Se a seção está ocupando o centro da tela, ativa a cor de fundo dela
            if (rect.top <= vh * 0.48 && rect.bottom >= vh * 0.48) {
              setActiveBg(era.bgHex);
            }
          }
        });

        // Se chegou na síntese final no rodapé
        const finalEl = sectionRefs.current['sintese'];
        if (finalEl) {
          const rect = finalEl.getBoundingClientRect();
          if (rect.top <= vh * 0.5) {
            setActiveBg('#0B0B0E');
          }
        }

        setEraProgress((prev) => ({ ...prev, ...newProgress }));
        setEraTransition((prev) => ({ ...prev, ...newTransition }));
        setVisibleEras((prev) => ({ ...prev, ...newVisible }));
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen w-full transition-colors duration-1000 ease-out text-[#F5F2EB] selection:bg-[#D97706] selection:text-black"
      style={{ backgroundColor: activeBg }}
    >
      {/* ==================== AS 4 ERAS EM SCROLLYTELLING VERTICAL (ESTILO SCMP) ==================== */}
      {eras.map((era, eIdx) => {
        const trans = eraTransition[era.id] || 0;
        const bridge = lineageBridges[eIdx];

        return (
          <React.Fragment key={era.id}>
            <section
              ref={(el) => {
                if (el) sectionRefs.current[era.id] = el;
              }}
              className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                {/* COLUNA FIXA (STICKY): O PERSONAGEM 3D PERMANECE FIXO NA TELA ENQUANTO A HISTÓRIA ROLA E DÁ ZOOM */}
                <div
                  className={`md:col-span-6 md:sticky md:top-0 md:h-screen flex flex-col justify-center items-center py-8 md:py-0 ${
                    era.isLeft ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  {/* Cabeçalho Editorial Compacto Acima do Personagem */}
                  <div className="text-center mb-2 z-20">
                    <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-[#D97706] mb-1">
                      <span>PERÍODO {era.number}</span>
                      <span>•</span>
                      <span>{era.year}</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black font-serif tracking-tight text-[#F5F2EB] leading-none">
                      {era.characterName}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#F5F2EB]/70 font-medium mt-1">
                      {era.characterSubtitle}
                    </p>
                  </div>

                  {/* Palco 3D com Personagem Modelado em Pé Fixo durante o Capítulo */}
                  <Character3DStage
                    characterId={era.id}
                    scrollProgress={eraProgress[era.id] || 0}
                    transitionOffset={trans}
                    isLeft={era.isLeft}
                    haloColor={era.haloHex}
                    isActive={visibleEras[era.id] ?? false}
                  />
                </div>

                {/* COLUNA DE ROLAGEM VERTICAL LONGA: MANTÉM O PERSONAGEM FIXO ENQUANTO DÁ ZOOM NO ROSTO E GIRA */}
                <div
                  className={`md:col-span-6 py-16 md:py-[36vh] space-y-44 sm:space-y-64 ${
                    era.isLeft ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  {/* Bloco Introdutório da Época */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="border-l-4 border-[#D97706] pl-6 py-2"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D97706] font-bold">
                      CONTEXTO HISTÓRICO • {era.year}
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-black font-serif text-[#F5F2EB] mt-2 leading-[1.08]">
                      {era.eraTitle}
                    </h1>
                  </motion.div>

                  {/* Os 3 Capítulos Narrativos de Cada Personagem */}
                  {era.blocks.map((block, bIdx) => (
                    <motion.article
                      key={bIdx}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.35 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="p-8 sm:p-10 rounded-3xl bg-[#0B0B0E]/45 backdrop-blur-md border border-[#F5F2EB]/15 shadow-2xl"
                    >
                      <div className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#D97706] mb-3">
                        {block.kicker}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F5F2EB] mb-4 leading-snug">
                        {block.headline}
                      </h3>
                      <p className="text-base sm:text-lg text-[#F5F2EB]/85 leading-relaxed font-normal">
                        {block.body}
                      </p>
                    </motion.article>
                  ))}

                  {/* Dado Estatístico de Impacto no Estilo Infográfico SCMP */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 sm:p-10 rounded-3xl bg-[#F5F2EB] text-[#0B0B0E] shadow-2xl"
                  >
                    <div className="text-xs font-black tracking-[0.2em] uppercase text-[#8E1010] mb-2">
                      IMPACTO ECONÔMICO ACUMULADO
                    </div>
                    <div className="text-5xl sm:text-7xl font-black font-serif tracking-tight text-[#0B0B0E] my-2">
                      {era.statHighlight.value}
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#0B0B0E]/80 leading-relaxed">
                      {era.statHighlight.label}
                    </p>
                  </motion.div>
                </div>

              </div>
            </section>

            {/* PONTE DE TRANSIÇÃO ANIMADA ENTRE UM PERSONAGEM E OUTRO (FIO DA LINHAGEM) */}
            {bridge && (
              <div className="relative w-full max-w-6xl mx-auto px-6 py-12 sm:py-20 flex flex-col items-center justify-center overflow-hidden">
                <svg
                  className="w-full h-36 sm:h-48 pointer-events-none"
                  viewBox="0 0 1000 200"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={
                      bridge.fromLeft
                        ? 'M 250 0 C 250 100, 750 100, 750 200'
                        : 'M 750 0 C 750 100, 250 100, 250 200'
                    }
                    stroke="#D97706"
                    strokeWidth="3.5"
                    strokeDasharray="10 10"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    whileInView={{ pathLength: 1, opacity: 0.85 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.1, ease: 'easeInOut' }}
                  />
                </svg>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 24 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                  className="-mt-24 sm:-mt-28 z-10 px-6 py-4 rounded-2xl bg-[#0B0B0E]/80 backdrop-blur-md border border-[#D97706]/50 text-center max-w-xl shadow-2xl"
                >
                  <div className="text-[11px] font-black tracking-[0.25em] uppercase text-[#D97706]">
                    {bridge.fromYear} → {bridge.toYear} • {bridge.relation}
                  </div>
                  <p className="text-sm sm:text-base font-serif font-bold text-[#F5F2EB] mt-1">
                    {bridge.title}
                  </p>
                </motion.div>
              </div>
            )}
          </React.Fragment>
        );
      })}

      {/* ==================== SEÇÃO FINAL DE SÍNTESE INFOGRÁFICA (ESTILO SCMP EDITORIAL) ==================== */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current['sintese'] = el;
        }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-32 border-t border-[#F5F2EB]/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LADO ESQUERDO: TÍTULO, SUBTÍTULO E NARRATIVA EDITORIAL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#D97706]/15 border border-[#D97706]/35 text-[#D97706] text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
              DIAGNÓSTICO ESTRUTURAL • SÉCULO XXI
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black font-serif text-[#F5F2EB] leading-[1.12] tracking-tight">
              Por que a maioria ainda está na pobreza mesmo com <span className="text-[#D97706]">Cotas e Auxílios</span>?
            </h2>

            <p className="text-base sm:text-lg text-[#F5F2EB]/80 leading-relaxed">
              A trajetória de <strong>Sebastião, Benedita, Manuel e Camila</strong> revela que a pobreza contemporânea não é fruto de falta de esforço individual, mas de uma matemática patrimonial acumulada por quatro séculos.
            </p>

            <div className="pt-4 border-l-2 border-[#D97706]/60 pl-5 text-sm text-[#F5F2EB]/70 leading-relaxed font-serif italic">
              "A liberdade formal sem bens materiais transferiu o custo de sobrevivência integralmente para as costas dos libertos e de suas próximas quatro gerações."
            </div>
          </motion.div>

          {/* LADO DIREITO: DADOS, TÓPICOS 1 E 2 E INFOGRÁFICO DE BARRAS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-16"
          >
            {/* TÓPICO 1: A MATEMÁTICA DA HERANÇA ZERO */}
            <div className="space-y-6 border-b border-[#F5F2EB]/10 pb-12">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">01 / MECANISMO PATRIMONIAL</span>
                <span className="h-px flex-1 bg-[#F5F2EB]/15" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F5F2EB]">
                1. A Matemática da Herança Zero
              </h3>

              <p className="text-base text-[#F5F2EB]/80 leading-relaxed">
                As <strong>Cotas Universitárias</strong> garantem o ingresso no ensino superior e os <strong>Auxílios Públicos</strong> evitam a fome imediata. Porém, nenhum dos dois transfere propriedade imobiliária, terra ou capital inicial acumulado.
              </p>

              {/* Infográfico de Acúmulo de Gerações */}
              <div className="space-y-5 pt-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2 text-sm font-semibold">
                    <span className="text-[#F5F2EB]">Famílias com Herança desde 1850 (Terras + Imóveis)</span>
                    <span className="text-[#D97706] font-mono font-bold">100% Acúmulo Composto</span>
                  </div>
                  <div className="w-full h-3.5 bg-white/10 rounded-full overflow-hidden p-0.5">
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-[#D97706] rounded-full" />
                  </div>
                  <p className="text-xs text-[#F5F2EB]/50 mt-1 font-mono">Terras agrícolas, imóveis alugados e juros bancários acumulados por 4 gerações.</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2 text-sm font-semibold">
                    <span className="text-[#F5F2EB]">Linhagem de Camila (Primeira Geração com Diploma)</span>
                    <span className="text-[#E11D48] font-mono font-bold">0% Patrimônio Herdado</span>
                  </div>
                  <div className="w-full h-3.5 bg-white/10 rounded-full overflow-hidden p-0.5">
                    <div className="w-[12%] h-full bg-[#E11D48] rounded-full" />
                  </div>
                  <p className="text-xs text-[#F5F2EB]/50 mt-1 font-mono">Ponto de partida do zero: 100% do salário vai para moradia, transporte e subsistência.</p>
                </div>
              </div>
            </div>

            {/* TÓPICO 2: O DRENO DO ALUGUEL E DESIGUALDADE SALARIAL */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">02 / BARREIRA SALARIAL E URBANA</span>
                <span className="h-px flex-1 bg-[#F5F2EB]/15" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F5F2EB]">
                2. O Dreno do Aluguel e a Desigualdade Salarial
              </h3>

              <p className="text-base text-[#F5F2EB]/80 leading-relaxed">
                Expulsos dos centros urbanos nas reformas republicanas, os descendentes de Manuel gastam até <strong>metade da renda bruta</strong> apenas com moradia e condução periférica. Além disso, no setor privado corporativo, <strong>profissionais negros recebem em média 34% a menos</strong> que profissionais brancos exercendo o mesmo cargo (IBGE).
              </p>

              {/* Destaque com visual editorial sóbrio integrado (sem cartões de IA genéricos) */}
              <div className="border-l-2 border-[#8E1010] pl-6 py-2 space-y-2">
                <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#FDA4AF]">
                  Síntese Histórica
                </div>
                <p className="text-sm sm:text-base text-[#F5F2EB]/90 leading-relaxed">
                  O auxílio público mata a fome do presente e a cota abre as portas da faculdade. Porém, sem <strong>reforma urbana, crédito para patrimônio próprio e equiparação salarial</strong>, a linha de chegada continuará a quilômetros de distância.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
}
