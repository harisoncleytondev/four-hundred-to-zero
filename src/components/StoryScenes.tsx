import React from 'react';
import { Scroll, Compass, ShieldAlert, Sparkles, BookOpen, Clock } from 'lucide-react';
import TiaoIllustration from './characters/TiaoIllustration';
import BeneditaIllustration from './characters/BeneditaIllustration';
import ManuelIllustration from './characters/ManuelIllustration';
import CamilaIllustration from './characters/CamilaIllustration';

export const erasData = [
  {
    id: "era-1",
    epochNumber: "I",
    title: "A Escravização Plena",
    timeframe: "Séculos XVI ao XIX (c. 1835)",
    characterName: "Sebastião (Tião)",
    role: "Carpinteiro e Lavrador Escravizado",
    subtitle: "A mercantilização do corpo e a produção da riqueza alheia",
    accentColor: "from-amber-500 to-orange-600",
    badgeBg: "bg-amber-950/80 text-amber-300 border-amber-600/40",
    Illustration: TiaoIllustration,
    narrative: [
      {
        tag: "O Contexto",
        text: "Por mais de 300 anos, pessoas negras foram sequestradas de seus territórios e reduzidas pelo direito colonial à condição de mercadorias semoventes. Não possuíam bens, cidadania ou direito à própria família."
      },
      {
        tag: "A Voz de Tião",
        text: "Sebastião é um mestre da madeira na lavoura de café do Vale do Paraíba. Cada tora que talha e cada saca de café que colhe geram a fortuna do barão. Em silêncio, guarda restos de moedas de trocas clandestinas na esperança de um dia comprar a alforria da filha recém-nascida."
      },
      {
        tag: "A Barreira Histórica",
        text: "Todo o fruto do trabalho de Sebastião foi apropriado pela elite colonial. A riqueza que ergueu os palacetes do Império e as ferrovias do café nunca retornou aos seus verdadeiros criadores."
      }
    ],
    highlightBox: {
      title: "Legado Econômico Desta Era",
      detail: "O Brasil foi o último país das Américas a abolir a escravatura. Cerca de 4,8 milhões de africanos foram escravizados aqui, gerando séculos de acúmulo de riqueza concentrada na mão de poucas famílias brancas."
    }
  },
  {
    id: "era-2",
    epochNumber: "II",
    title: "O Limbo da Alforria Condicional",
    timeframe: "Meados ao Fim do Século XIX (c. 1878)",
    characterName: "Benedita (Filha de Sebastião)",
    role: "Liberta Condicional e Quitandeira Urbana",
    subtitle: "Nem escrava, nem cidadã livre: a liberdade vigiada no papel",
    accentColor: "from-indigo-400 to-purple-600",
    badgeBg: "bg-indigo-950/80 text-indigo-300 border-indigo-600/40",
    Illustration: BeneditaIllustration,
    narrative: [
      {
        tag: "O Período de Transição",
        text: "Muitos acreditam que a transição foi simples: ou se era escravo ou livre. Na verdade, existiu um longo período em que centenas de milhares de pessoas viviam no limbo da 'alforria sob condição' e das leis emancipacionistas como a do Ventre Livre (1871)."
      },
      {
        tag: "A Voz de Benedita",
        text: "Benedita recebeu a carta de alforria assinada, mas com uma cláusula imposta: a obrigação de servir mais cinco anos ao antigo senhor sem remuneração. Nas ruas provinciais, vende doces e legumes no tabuleiro, mas precisa andar com o papel guardado no peito — se for pega sem ele, é presa e reescravizada."
      },
      {
        tag: "A Barreira Histórica",
        text: "A Lei de Terras de 1850 já havia proibido a ocupação de terras públicas sem compra formal em leilão. Sem dinheiro e sem herança, os 'libertos' como Benedita jamais puderam ter um pedaço de chão para plantar ou construir com segurança."
      }
    ],
    highlightBox: {
      title: "O Mito da Alforria Generosa",
      detail: "Mais de 60% das cartas de alforria no século XIX eram onerosas (pagas com o próprio suor pelo escravizado) ou condicionais (obrigando à prestação forçada de serviços contínuos). Não havia direitos civis nem indenização."
    }
  },
  {
    id: "era-3",
    epochNumber: "III",
    title: "A República Pós-Abolição",
    timeframe: "Primeira República (1888 a 1920/1930)",
    characterName: "Manuel (Filho de Benedita)",
    role: "Estivador Portuário no Rio de Janeiro",
    subtitle: "O 13 de Maio sem terra, sem escola e com subsídio aos imigrantes",
    accentColor: "from-orange-500 to-amber-700",
    badgeBg: "bg-orange-950/80 text-orange-300 border-orange-600/40",
    Illustration: ManuelIllustration,
    narrative: [
      {
        tag: "O Abandono Institucional",
        text: "A Lei Áurea de 1888 aboliu a escravidão formal, mas o Estado brasileiro não garantiu sequer um metro quadrado de terra, nem um dia de escola, nem assistência financeira aos mais de 700 mil libertos."
      },
      {
        tag: "A Voz de Manuel",
        text: "Manuel nasceu livre, mas sem teto. Ele morava em um cômodo no centro do Rio até ser despejado nas reformas do 'Bota-Abaixo' do prefeito Pereira Passos, sendo empurrado para o alto do morro. No cais do porto, carrega sacas de café de 60kg na cabeça, disputando bicos diários sob a constante ameaça da Lei de Vadiagem do Código Penal de 1890."
      },
      {
        tag: "A Barreira Histórica",
        text: "Enquanto o governo financiava passagens de navio, alojamento e terras para imigrantes europeus sob a ideologia do 'branqueamento', a força de trabalho negra foi empurrada para a marginalidade, subemprego e criminalização de sua cultura (samba e capoeira)."
      }
    ],
    highlightBox: {
      title: "O Ponto de Partida Desigual",
      detail: "O Estado brasileiro investiu verbas vultosas em subsídios para colonos europeus, enquanto aos ex-escravizados e seus filhos reservou o Código Penal e as primeiras favelas urbanas desprovidas de saneamento e escolas."
    }
  },
  {
    id: "era-4",
    epochNumber: "IV",
    title: "O Século XXI Contemporâneo",
    timeframe: "Dias Atuais (Anos 2010 a 2026)",
    characterName: "Camila (Bisneta de Manuel)",
    role: "Primeira Universitária da Família (Cotista) & Trabalhadora Precarizada",
    subtitle: "A conquista do diploma contra o abismo do ponto de partida zero",
    accentColor: "from-cyan-400 to-pink-500",
    badgeBg: "bg-cyan-950/80 text-cyan-300 border-cyan-500/40",
    Illustration: CamilaIllustration,
    narrative: [
      {
        tag: "As Conquistas Formais",
        text: "Com a Lei de Cotas de 2012 e a ampliação de programas sociais, a universidade pública brasileira finalmente começou a ter a cor do país. Camila quebrou uma corrente de séculos e tornou-se a primeira de sua árvore genealógica a ostentar um diploma universitário."
      },
      {
        tag: "A Voz de Camila",
        text: "Camila formou-se com honras em Administração. Mas ao sair da faculdade, encontrou o mercado de trabalho regido pela precarização (PJ/Uberização). Sem rede de contatos herdada de berço ou indicação de diretores, ela divide o salário entre o aluguel inflacionado da periferia e os remédios da mãe."
      },
      {
        tag: "A Realidade das Cotas e Auxílios",
        text: "Cotas e auxílios públicos foram o oxigênio que permitiu a Camila respirar e estudar. No entanto, eles não compram imóveis, não criam reservas financeiras e não anulam o fato de que seus concorrentes brancos de classe média herdaram apartamentos quitados, mesadas e contatos familiares."
      }
    ],
    highlightBox: {
      title: "O Dado Real do IBGE",
      detail: "Mesmo com ensino superior completo, o rendimento médio da pessoa negra é cerca de 30% a 35% inferior ao de uma pessoa branca com a mesma formação. A pobreza persiste porque herança de patrimônio não se constrói em uma única geração."
    }
  }
];

export default function StoryScenes({ activeEraIndex }) {
  return (
    <div className="relative">
      {erasData.map((era, index) => {
        const { Illustration } = era;
        return (
          <section
            key={era.id}
            id={era.id}
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center border-b border-slate-800/60"
          >
            {/* Header da Época */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border tracking-wider uppercase ${era.badgeBg}`}>
                  Ato {era.epochNumber} • {era.timeframe}
                </span>
                <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  Geração {index + 1} da mesma família
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight">
                {era.title}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-2 font-medium">
                {era.subtitle}
              </p>
            </div>

            {/* Layout Grid: Ilustração Desenhada + Narrativa */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Coluna da Ilustração (5 colunas) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-[420px] rounded-2xl p-4 glass-panel border border-slate-700/50 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent rounded-2xl opacity-60 pointer-events-none" />
                  
                  {/* Arte Vetorial SVG */}
                  <Illustration />

                  {/* Legenda do Personagem */}
                  <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {era.characterName}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {era.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna da História e Reflexões (7 colunas) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Blocos de Texto Narrativo */}
                <div className="space-y-4">
                  {era.narrative.map((item, nIdx) => (
                    <div 
                      key={nIdx} 
                      className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-1 flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                        {item.tag}
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Caixa de Destaque Histórico-Econômico */}
                <div className={`p-5 rounded-xl bg-gradient-to-br ${era.accentColor} bg-opacity-10 border border-white/10 text-white shadow-lg`}>
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">
                        {era.highlightBox.title}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-100/95 leading-relaxed">
                        {era.highlightBox.detail}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
