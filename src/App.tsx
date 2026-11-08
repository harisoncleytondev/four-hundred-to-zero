import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Character3DStage } from './components/Character3DStage';
import { EditorialPreloader } from './components/EditorialPreloader';

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
    eraTitle: 'O Trabalho Sem Retorno',
    characterName: 'Sebastião (Tião)',
    characterSubtitle: 'Carpinteiro e lavrador no Vale do Paraíba',
    bgHex: '#8E1010',
    haloHex: '#D8D4CC',
    isLeft: true,
    statHighlight: {
      value: 'R$ 0,00',
      label: 'Sebastião trabalhou a vida inteira sem direito a receber salário ou deixar bens para a família.',
      source: 'Código Criminal de 1830 e Inventários Cartorários do Vale do Paraíba (Arquivo Nacional)',
      url: 'https://www.gov.br/arquivonacional/pt-br',
    },
    blocks: [
      {
        kicker: 'I. LISTADO COMO PROPRIEDADE',
        headline: 'Quem erguia a fazenda entrava na lista de bens do patrão',
        body: 'Sebastião construía casas, consertava rodas d’água e cuidava do café. Nos papéis do governo da época, ele não era considerado uma pessoa com direitos, mas um bem do dono da fazenda, anotado no mesmo caderno dos animais e das ferramentas.',
        source: 'Constituição Imperial de 1824, Título 8º e Ordenações Filipinas',
        url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao24.htm',
      },
      {
        kicker: 'II. MOEDAS NO CHÃO BATIDO',
        headline: 'Trocados guardados aos domingos para tentar libertar a filha',
        body: 'Aos domingos, Tião usava as horas de descanso para talhar peças de madeira e vender aos viajantes. Ele escondia cada moeda embaixo da terra com um objetivo: juntar dinheiro para comprar a carta de alforria de Benedita, sua filha recém-nascida.',
        source: 'Historiografia do Pecúlio Escravo, Sidney Chalhoub (Visões da Liberdade)',
        url: 'https://www.companhiadasletras.com.br/livro/9788535919691/visoes-da-liberdade',
      },
      {
        kicker: 'III. A HERANÇA QUE NÃO EXISTIU',
        headline: 'Famílias donas de terra passavam riquezas; quem trabalhava saía sem nada',
        body: 'Enquanto os donos das terras transferiam fazendas e dinheiro para os filhos ao longo dos anos, a família de Sebastião não podia juntar patrimônio nem comprar um pedaço de terra para a geração seguinte.',
        source: 'Pesquisa sobre Concentração Fundiária e Herança Colonial, IPEA',
        url: 'https://www.ipea.gov.br/portal/publicacoes',
      },
    ],
  },
  {
    id: 'benedita',
    number: '02',
    year: '1878',
    eraTitle: 'A Liberdade Cheia de Regras',
    characterName: 'Benedita',
    characterSubtitle: 'Quitandeira em São Paulo',
    bgHex: '#141838',
    haloHex: '#D8D4CC',
    isLeft: false,
    statHighlight: {
      value: '60%+',
      label: 'Mais da metade das cartas de alforria exigiam pagamento em dinheiro ou anos extras de trabalho obrigatório.',
      source: 'Estudo das Cartas de Alforria, Prof.ª Maria Helena Machado (USP)',
      url: 'https://historia.fflch.usp.br/docentes/mariahelena',
    },
    blocks: [
      {
        kicker: 'I. O PAPEL COM CONDIÇÕES',
        headline: 'Livre nos papéis, mas obrigada a trabalhar de graça por mais sete anos',
        body: 'Benedita conseguiu a carta de alforria, mas o documento veio com uma exigência: ela tinha que continuar trabalhando para o antigo senhor por mais sete anos sem receber nada. Se abandonasse o serviço, a Justiça cancelava a liberdade.',
        source: 'Regulamentação das Alforrias Condicionais, Código Comercial de 1850',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/l0556-1850.htm',
      },
      {
        kicker: 'II. O DOCUMENTO NO BOLSO',
        headline: 'Medo de ir presa na rua se esquecesse o papel em casa',
        body: 'Vendendo quitutes pelas ruas de São Paulo, Benedita andava com a carta guardada na roupa o tempo todo. Naquela época, qualquer pessoa negra parada pela polícia sem o documento era presa na hora como fugitiva.',
        source: 'Código de Posturas Urbanas de São Paulo e Registros da Guarda Imperial',
        url: 'https://www.arquivoestado.sp.gov.br/',
      },
      {
        kicker: 'III. PROIBIDA DE TER TERRA',
        headline: 'A lei que exigiu dinheiro à vista para quem quisesse comprar um lote',
        body: 'Em 1850, o governo criou a Lei de Terras, determinando que ninguém mais podia ocupar um pedaço de chão livremente: só quem tivesse muito dinheiro para pagar à vista conseguia ser dono. Benedita, sem herança da família, nunca teve como comprar um lote.',
        source: 'Lei nº 601 de 18 de setembro de 1850 (Lei de Terras do Brasil)',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/l0601-1850.htm',
      },
    ],
  },
  {
    id: 'manuel',
    number: '03',
    year: '1910',
    eraTitle: 'A Vida Logo Após a Abolição',
    characterName: 'Manuel',
    characterSubtitle: 'Estivador no Porto do Rio de Janeiro',
    bgHex: '#7A2E0F',
    haloHex: '#D8D4CC',
    isLeft: true,
    statHighlight: {
      value: 'Zero',
      label: 'Os libertos de 1888 não receberam terras, moradia ou escolas públicas do governo.',
      source: 'Lei Áurea (1888) e Relatórios da Primeira República, Arquivo Nacional',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/lim/lim3353.htm',
    },
    blocks: [
      {
        kicker: 'I. LIVRES E SEM APOIO',
        headline: 'A escravidão terminou sem garantir casa ou trabalho',
        body: 'Manuel nasceu livre no começo da República, mas a família não tinha patrimônio. A Lei Áurea declarou o fim da escravidão em 1888, mas o Estado não deu terras, escolas ou qualquer auxílio para quem saía das senzalas recomeçar a vida.',
        source: 'Da Senzala à Colônia, Emília Viotti da Costa (Ed. Unesp)',
        url: 'https://editoraunesp.com.br/catalogo/9788571391789,da-senzala-a-colonia',
      },
      {
        kicker: 'II. EXPULSO DO CENTRO',
        headline: 'Casarões derrubados para abrir avenidas e o início das favelas',
        body: 'Quando o prefeito do Rio derrubou os cortiços do centro para reformar a cidade, Manuel e centenas de famílias perderam onde morar sem receber indenização. Eles subiram os morros com sobras de madeira e caixotes para erguer os primeiros barracos.',
        source: 'A Demolição dos Cortiços e Reforma Urbana, Fiocruz',
        url: 'https://www.coc.fiocruz.br/',
      },
      {
        kicker: 'III. TERRA PARA QUEM VINHA DE FORA',
        headline: 'Ajuda financeira para imigrantes e cadeia para quem ficasse sem trabalho',
        body: 'O governo brasileiro pagou viagens de navio e distribuiu lotes agrícolas para colonos europeus. Ao mesmo tempo, quem era negro no país vivia sob a Lei de Vadiagem, que mandava para a cadeia quem estivesse na rua sem carteira assinada.',
        source: 'Código Penal de 1890, Artigo 399',
        url: 'https://www.planalto.gov.br/ccivil_03/decreto/1851-1899/d847.htm',
      },
    ],
  },
  {
    id: 'camila',
    number: '04',
    year: '2026',
    eraTitle: 'O Século XXI',
    characterName: 'Camila',
    characterSubtitle: 'Primeira pessoa da família a concluir o ensino superior',
    bgHex: '#062836',
    haloHex: '#D8D4CC',
    isLeft: false,
    statHighlight: {
      value: '-34%',
      label: 'Profissionais negros com diploma universitário ganham em média um terço a menos do que profissionais brancos no mesmo nível.',
      source: 'Pesquisa Nacional por Amostra de Domicílios Contínua, IBGE',
      url: 'https://www.ibge.gov.br/estatisticas/sociais/trabalho/9171-pesquisa-nacional-por-amostra-de-domicilios-continua-mensal.html',
    },
    blocks: [
      {
        kicker: 'I. A PRIMEIRA DA FAMÍLIA',
        headline: 'O primeiro diploma na parede da casa',
        body: 'Camila entrou na faculdade pública por meio das cotas e concluiu o curso com apoio de bolsa estudantil. Ela foi a primeira pessoa em quatro gerações a conseguir um diploma de ensino superior.',
        source: 'Lei nº 12.711/2012 (Lei de Cotas no Ensino Superior)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12711.htm',
      },
      {
        kicker: 'II. A LARGADA DESIGUAL',
        headline: 'O diploma ajuda no salário, mas não substitui bens herdados',
        body: 'Mesmo formada, Camila não começa a carreira no mesmo ponto que colegas com apartamento próprio garantido pela família. Quase todo o salário dela vai para pagar aluguel, transporte e despesas básicas de casa.',
        source: 'Relatório sobre Herança e Desigualdades, Oxfam Brasil',
        url: 'https://www.oxfam.org.br/especiais/desigualdades-no-brasil/',
      },
      {
        kicker: 'III. SALÁRIO E PATRIMÔNIO',
        headline: 'Cotas abrem portas no estudo, mas a diferença acumulada permanece',
        body: 'O diploma garante trabalho, mas a ausência de imóveis herdados e o racismo nas contratações fazem o patrimônio familiar demorar gerações para se formar.',
        source: 'Desigualdades Raciais e Herança Econômica, IPEA',
        url: 'https://www.ipea.gov.br/portal/publicacoes',
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
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
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

  // Garante que ao entrar ou atualizar a página ela sempre comece no topo absoluto
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

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

            // Mantém todos os modelos carregados na GPU para nunca descarregar e causar congelamento durante a rolagem
            newVisible[era.id] = true;

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
    <>
      {!isAssetsLoaded && <EditorialPreloader onLoaded={() => setIsAssetsLoaded(true)} />}

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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-start">
                
                {/* COLUNA DO PERSONAGEM: STICKY NO DESKTOP, CABEÇALHO PROPORCIONAL NO MOBILE */}
                <div
                  className={`md:col-span-6 md:sticky md:top-0 md:h-screen flex flex-col justify-center items-center pt-8 pb-4 md:py-0 ${
                    era.isLeft ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  {/* Cabeçalho Editorial Compacto Acima do Personagem */}
                  <div className="text-center mb-2 sm:mb-4 z-20 px-2">
                    <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] sm:tracking-[0.28em] uppercase font-bold text-[#D97706] mb-1 opacity-90">
                      <span>Época {era.number}</span>
                      <span className="text-[#D97706]/40">•</span>
                      <span>{era.year}</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-[#F5F2EB] leading-tight drop-shadow-sm">
                      {era.characterName}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#F5F2EB]/65 font-sans font-medium mt-1 max-w-sm mx-auto leading-relaxed">
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

                {/* COLUNA DE ROLAGEM VERTICAL: NARRATIVA EDITORIAL PURA E RESPIRADA */}
                <div
                  className={`md:col-span-6 py-8 sm:py-16 md:py-[24vh] space-y-16 sm:space-y-24 md:space-y-28 ${
                    era.isLeft ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  {/* Bloco Introdutório da Época */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="border-b border-[#F5F2EB]/20 pb-6 sm:pb-8"
                  >
                    <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-[#D97706] font-semibold">
                      Contexto Histórico • {era.year}
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif text-[#F5F2EB] mt-2 sm:mt-3 leading-[1.1] sm:leading-[1.05] tracking-tight">
                      {era.eraTitle}
                    </h1>
                  </motion.div>

                  {/* Os 3 Capítulos Narrativos com Revelação Suave e Progressiva (GPU-friendly) */}
                  {era.blocks.map((block, bIdx) => (
                    <motion.article
                      key={bIdx}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.7, delay: bIdx * 0.05, ease: "easeOut" }}
                      className="relative pl-4 sm:pl-8 border-l border-[#F5F2EB]/20 hover:border-[#D97706]/70 transition-colors duration-300"
                    >
                      <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#D97706] mb-1.5 sm:mb-2">
                        {block.kicker}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-[#F5F2EB] mb-2 sm:mb-3 leading-snug">
                        {block.headline}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-[#F5F2EB]/85 leading-relaxed font-reading max-w-xl font-normal">
                        {block.body}
                      </p>

                      {/* Fonte / Referência Oficial Clicável */}
                      {block.source && (
                        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#F5F2EB]/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono">
                          <span className="text-[#D97706] font-bold">Fonte:</span>
                          {block.url ? (
                            <a
                              href={block.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#F5F2EB]/60 hover:text-[#D97706] underline underline-offset-4 decoration-[#D97706]/40 hover:decoration-[#D97706] transition-colors inline-flex items-center gap-1 break-words"
                            >
                              <span>{block.source}</span>
                              <svg className="w-3 h-3 opacity-70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-[#F5F2EB]/50">{block.source}</span>
                          )}
                        </div>
                      )}
                    </motion.article>
                  ))}

                  {/* Dado Estatístico com Efeito Suave */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="pt-8 sm:pt-10 border-t border-[#F5F2EB]/20"
                  >
                    <div className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-[#D97706] uppercase mb-1">
                      Impacto Econômico Acumulado
                    </div>
                    <div className="text-5xl sm:text-7xl font-black font-serif tracking-tight text-[#F5F2EB] my-1 sm:my-2 drop-shadow-md">
                      {era.statHighlight.value}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-reading italic text-[#F5F2EB]/80 leading-relaxed max-w-lg mt-2">
                      {era.statHighlight.label}
                    </p>

                    {/* Fonte do dado estatístico Clicável */}
                    {era.statHighlight.source && (
                      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#F5F2EB]/10 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono">
                        <span className="text-[#D97706] font-bold">Fonte:</span>
                        {era.statHighlight.url ? (
                          <a
                            href={era.statHighlight.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F5F2EB]/60 hover:text-[#D97706] underline underline-offset-4 decoration-[#D97706]/40 hover:decoration-[#D97706] transition-colors inline-flex items-center gap-1 break-words"
                          >
                            <span>{era.statHighlight.source}</span>
                            <svg className="w-3 h-3 opacity-70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        ) : (
                          <span className="text-[#F5F2EB]/50">{era.statHighlight.source}</span>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>

              </div>
            </section>

            {/* PONTE DE TRANSIÇÃO ANIMADA ENTRE UM PERSONAGEM E OUTRO (FIO DA LINHAGEM) */}
            {bridge && (
              <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20 flex flex-col items-center justify-center overflow-hidden">
                <svg
                  className="w-full h-24 sm:h-36 md:h-48 pointer-events-none"
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
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="-mt-16 sm:-mt-24 md:-mt-28 z-10 px-5 sm:px-8 py-3.5 sm:py-5 rounded-2xl bg-[#08090D]/90 backdrop-blur-xl border border-[#D97706]/40 text-center max-w-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] mx-4"
                >
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[#D97706]/90">
                    {bridge.fromYear} → {bridge.toYear} • {bridge.relation}
                  </div>
                  <p className="text-xs sm:text-base font-serif font-bold text-[#F5F2EB] mt-1 sm:mt-1.5 leading-snug">
                    {bridge.title}
                  </p>
                </motion.div>
              </div>
            )}
          </React.Fragment>
        );
      })}

      {/* ==================== SEÇÃO FINAL DE SÍNTESE EDITORIAL ==================== */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current['sintese'] = el;
        }}
        className="w-full max-w-7xl mx-auto px-5 sm:px-12 py-16 sm:py-32 border-t border-[#F5F2EB]/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* LADO ESQUERDO: TESE E DIAGNÓSTICO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-4 sm:space-y-6"
          >
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-[#D97706] font-semibold uppercase">
              Diagnóstico Histórico
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif text-[#F5F2EB] leading-[1.15] tracking-tight">
              Por que a maioria ainda está na pobreza mesmo com <span className="text-[#D97706]">Cotas e Auxílios</span>?
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#F5F2EB]/80 leading-relaxed font-reading">
              Cotas abrem portas e auxílios garantem sobrevivência básica, mas nenhum deles transfere <strong>quatro séculos de imóveis, terras e capital acumulado</strong>.
            </p>

            <div className="border-l border-[#D97706] pl-4 sm:pl-6 py-1.5 sm:py-2 text-sm sm:text-base text-[#F5F2EB]/70 leading-relaxed font-reading italic">
              "A cota coloca na universidade, mas a herança zero mantém a linha de chegada a quilômetros de distância."
            </div>
          </motion.div>

          {/* LADO DIREITO: INFOGRÁFICO TIPOGRÁFICO INTEGRADO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8 sm:space-y-12"
          >
            {/* DADO 1: O ABISMO DO PATRIMÔNIO INICIAL */}
            <div className="space-y-4 sm:space-y-6 pb-6 sm:pb-10 border-b border-[#F5F2EB]/15">
              <div className="flex justify-between items-baseline text-xs font-mono">
                <span className="tracking-wider text-[#D97706] uppercase font-medium">
                  01. Herança e Patrimônio
                </span>
                <span className="text-[#F5F2EB]/50">4 Gerações Acumuladas</span>
              </div>

              {/* Barra Famílias com Herança */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-reading font-medium mb-1.5 sm:mb-2">
                  <span className="text-[#F5F2EB]">Famílias com Herança desde 1850</span>
                  <span className="text-[#D97706] font-mono font-bold">100% Acúmulo</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#D97706]" />
                </div>
              </div>

              {/* Barra Camila */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-reading font-medium mb-1.5 sm:mb-2">
                  <span className="text-[#F5F2EB]">Linhagem de Camila (1ª com Diploma)</span>
                  <span className="text-[#E11D48] font-mono font-bold">0% Patrimônio</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[8%] h-full bg-[#E11D48]" />
                </div>
              </div>
            </div>

            {/* DADO 2: ESTATÍSTICAS DIRETAS (GRID RESPONSIVO) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#E11D48] tracking-tight">
                  -34%
                </div>
                <div className="text-sm font-serif font-bold text-[#F5F2EB] mt-1 sm:mt-2">
                  Desigualdade Salarial
                </div>
                <p className="text-xs sm:text-sm text-[#F5F2EB]/65 mt-1 leading-relaxed font-reading">
                  Profissionais negros recebem menos mesmo com diploma superior na mesma função (IBGE).
                </p>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#D97706] tracking-tight">
                  50%
                </div>
                <div className="text-sm font-serif font-bold text-[#F5F2EB] mt-1 sm:mt-2">
                  Dreno com Moradia
                </div>
                <p className="text-xs sm:text-sm text-[#F5F2EB]/65 mt-1 leading-relaxed font-reading">
                  Sem casa própria herdada, metade do salário é drenada por aluguel e condução periférica.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </div>
    </>
  );
}
