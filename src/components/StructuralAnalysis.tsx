import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Coins, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  HeartHandshake, 
  MapPin, 
  Scale 
} from 'lucide-react';

export default function StructuralAnalysis() {
  return (
    <section id="analise-estrutural" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Título de Impacto da Conclusão */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
          <Scale className="w-4 h-4 text-cyan-400" />
          Diagnóstico Histórico e Econômico
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif mb-6">
          Por que a maioria negra ainda está na pobreza, mesmo com <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Cotas e Auxílios</span>?
        </h2>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          As políticas de cotas universitárias e programas de transferência de renda são passos civilizatórios fundamentais. No entanto, elas atuam sobre um abismo estrutural acumulado ao longo de <strong>mais de três séculos de déficit de patrimônio, terra e capital</strong>.
        </p>
      </div>

      {/* INFOGRÁFICO INTERATIVO DE GERAÇÕES (O PONTO DE PARTIDA ZERO) */}
      <div className="glass-panel rounded-2xl p-6 sm:p-10 mb-16 border border-slate-700/60 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Coins className="w-6 h-6 text-amber-400" />
          A Linha de Chegada Diferente: Herança de Capital vs. "Começar do Zero"
        </h3>
        <p className="text-slate-400 text-sm mb-8">
          Comparação entre o efeito cumulativo de 4 gerações de uma família proprietária de terras/imóveis versus a família de Sebastião, Benedita, Manuel e Camila.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna 1: A Trajetória de Camila (População Negra Trabalhadora) */}
          <div className="bg-slate-900/80 rounded-xl p-6 border border-amber-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-amber-400 font-bold text-sm tracking-wide uppercase">Linhagem de Camila</span>
              <span className="px-2 py-0.5 text-xs bg-red-950/80 text-red-300 rounded border border-red-800/40">Déficit Histórico</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-amber-700">
                <div className="text-xs text-amber-500 font-bold">Geração 1 (Tião - 1835)</div>
                <div className="text-slate-200 text-sm font-semibold">Corpo mercantilizado</div>
                <div className="text-xs text-slate-400">Patrimônio acumulado: <strong className="text-red-400">R$ 0,00</strong> (o próprio corpo pertencia a outrem).</div>
              </div>

              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-indigo-600">
                <div className="text-xs text-indigo-400 font-bold">Geração 2 (Benedita - 1878)</div>
                <div className="text-slate-200 text-sm font-semibold">Alforria sob condição</div>
                <div className="text-xs text-slate-400">Compelida a trabalhar por anos sem salário. Herança para os filhos: <strong className="text-red-400">R$ 0,00</strong>.</div>
              </div>

              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-orange-600">
                <div className="text-xs text-orange-400 font-bold">Geração 3 (Manuel - 1910)</div>
                <div className="text-slate-200 text-sm font-semibold">Pós-Abolição e Cortiços</div>
                <div className="text-xs text-slate-400">Expulso no "Bota-Abaixo", subemprego portuário, sem aposentadoria. Herança: <strong className="text-red-400">R$ 0,00</strong>.</div>
              </div>

              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-cyan-500">
                <div className="text-xs text-cyan-400 font-bold">Geração 4 (Camila - Hoje)</div>
                <div className="text-slate-200 text-sm font-semibold">Universitária Cotista & Assalariada</div>
                <div className="text-xs text-slate-400">Formada com mérito, mas tem que sustentar a mãe idosa, pagar aluguel e não possui fiador ou casa própria herdada.</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-sm">
              <span className="text-slate-400">Saldo Patrimonial Familiar:</span>
              <span className="text-amber-400 font-bold">Vulnerabilidade imediata</span>
            </div>
          </div>

          {/* Coluna 2: A Trajetória de Herança Histórica Privilegiada */}
          <div className="bg-slate-900/80 rounded-xl p-6 border border-cyan-500/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-cyan-400 font-bold text-sm tracking-wide uppercase">Linhagem com Herança Patrimonial</span>
              <span className="px-2 py-0.5 text-xs bg-emerald-950/80 text-emerald-300 rounded border border-emerald-800/40">Acúmulo Composto</span>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-slate-500">
                <div className="text-xs text-slate-400 font-bold">Geração 1 (1835)</div>
                <div className="text-slate-200 text-sm font-semibold">Sesmaria e Mão de Obra Gratuita</div>
                <div className="text-xs text-slate-400">Posse de centenas de hectares e apropriação do excedente do trabalho forçado.</div>
              </div>

              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-slate-500">
                <div className="text-xs text-slate-400 font-bold">Geração 2 (1878)</div>
                <div className="text-slate-200 text-sm font-semibold">Lei de Terras (1850) e Indenizações</div>
                <div className="text-xs text-slate-400">Acesso exclusivo à compra formal de imóveis urbanos e fazendas produtivas.</div>
              </div>

              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-slate-500">
                <div className="text-xs text-slate-400 font-bold">Geração 3 (1910)</div>
                <div className="text-slate-200 text-sm font-semibold">Expansão Imobiliária & Política</div>
                <div className="text-xs text-slate-400">Renda de aluguel dos cortiços e fábricas; estudos na Europa com rede de influência.</div>
              </div>

              <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-emerald-500">
                <div className="text-xs text-emerald-400 font-bold">Geração 4 (Hoje)</div>
                <div className="text-slate-200 text-sm font-semibold">Trainee / Profissional de Sucesso</div>
                <div className="text-xs text-slate-400">Apartamento próprio doado pelos pais, sem custo de aluguel, rede de contatos (*networking*) e reserva financeira.</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-sm">
              <span className="text-slate-400">Saldo Patrimonial Familiar:</span>
              <span className="text-emerald-400 font-bold">Segurança e Multiplicação</span>
            </div>
          </div>
        </div>
      </div>

      {/* OS 4 PILARES DA PERSISTÊNCIA DA POBREZA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Card 1 */}
        <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
          <div className="w-12 h-12 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
            <Building2 className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">1. Segregação Espacial e Custo de Moradia</h4>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Sem imóvel próprio herdado, a maior fatia do salário da população negra é dragada por <strong>aluguel</strong> ou gastos com deslocamentos diários de 3 a 4 horas em trens e ônibus lotados.
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all group">
          <div className="w-12 h-12 rounded-lg bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">2. O Teto de Vidro no Mercado Corporativo</h4>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            As cotas garantem a entrada na faculdade, mas não garantem os cargos de chefia. Pesquisas do IBGE comprovam: <strong>mesmo com diploma universitário idêntico</strong>, trabalhadores negros recebem em média até 30% a menos que pares brancos.
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-pink-500/50 transition-all group">
          <div className="w-12 h-12 rounded-lg bg-pink-950/80 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">3. Auxílios Garantem Alimento, Não Fortuna</h4>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Programas como o Bolsa Família e auxílios de sobrevivência são vitais para evitar a miséria extrema, mas possuem valores destinados estritamente ao <strong>consumo básico imediato (comida e remédios)</strong>, sem capacidade de gerar acúmulo de riqueza.
          </p>
        </div>

        {/* Card 4 */}
        <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">4. A Ausência de Rede de Segurança</h4>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Se Camila ou sua mãe adoecem, ou se houver uma emergência odontológica ou demissão, a família não tem poupança de retaguarda. Qualquer crise inesperada rebaixa a família de volta à linha da pobreza.
          </p>
        </div>
      </div>

      {/* CONCLUSÃO CRÍTICA */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-2xl border border-indigo-500/40 text-center">
        <h4 className="text-2xl font-bold text-white mb-4 font-serif">
          A Reparação Histórica Precisa Ir Além da Entrada
        </h4>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          Cotas e auxílios salvaram vidas e criaram uma geração pioneira de negros no ensino superior e na vida pública. Porém, enquanto não houver <strong>reforma urbana, desconcentração de renda, democratização do acesso a crédito produtivo e equiparação salarial nas empresas privadas</strong>, a liberdade econômica plena continuará sendo um projeto inacabado no Brasil.
        </p>
      </div>
    </section>
  );
}
