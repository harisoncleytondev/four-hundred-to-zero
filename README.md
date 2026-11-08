# Quatrocentos a Zero (4 A 0)

Quatrocentos a Zero é um documentário interativo em 3D sobre a origem da desigualdade de patrimônio no Brasil. A aplicação acompanha quatro gerações de uma mesma família, de 1835 até 2026, para mostrar como leis de terra, escravização e políticas de Estado impediram a transferência de bens materiais para a população negra.

---

## A ideia

A discussão pública sobre desigualdade no Brasil foca quase sempre em renda e salário, tratando a pobreza como falta de esforço individual ou carência passageira. Este projeto parte de outro ponto: a diferença real entre famílias não é apenas o que entra todo mês na conta, mas o patrimônio acumulado ao longo de séculos.

Quem herdou terras demarcadas em 1850, imóveis no centro urbano e empresas familiares começa a vida com uma vantagem que diploma universitário nenhum consegue igualar sozinho. Para demonstrar essa distância, a experiência coloca a narrativa em quatro personagens ligados por sangue:

1. **Sebastião (1835):** Trabalhou a vida inteira como carpinteiro escravizado no Vale do Paraíba. Por lei, não podia ter bens em seu próprio nome nem deixar patrimônio para os filhos.
2. **Benedita (1878):** Conquistou a alforria com a condição de prestar mais sete anos de trabalho sem salário. Com a Lei de Terras de 1850 exigindo compra em dinheiro vivo, nunca teve como adquirir um pedaço de chão.
3. **Manuel (1910):** Filho de Benedita, nasceu livre logo após a Lei Áurea. Com as reformas urbanas no Rio de Janeiro que demoliram moradias populares, subiu os morros para erguer barracos com restos de madeira. Enquanto isso, o Estado subsidiava terras para imigrantes europeus.
4. **Camila (2026):** Primeira da família a se formar na faculdade pública por meio das cotas. Apesar do diploma, metade da sua renda é drenada por aluguel e custos básicos, enquanto colegas de turma contam com imóveis quitados pelos pais.

O nome do projeto resume a linha de chegada: quatrocentos anos de história do país para um acúmulo de patrimônio que recomeçou do zero a cada geração.

---

## Modelagem e arte 3D

Todos os modelos dos personagens foram construídos e ajustados sob medida para a narrativa:

* **Ferramenta base:** Blender.
* **Personagens:** Quatro malhas tridimensionais completas, com vestimentas, proporções e adereços fiéis aos seus períodos históricos.
* **Formato e otimização:** Exportados em `.glb` com texturas leves e mapeamento procedural de relevo.
* **Câmera e iluminação:** O Three.js (via React Three Fiber) controla a transição de câmera conforme a rolagem da página, alternando entre planos gerais do corpo inteiro e aproximações no rosto de cada personagem.

---

## Como o desenvolvimento foi feito

A aplicação foi desenvolvida em TypeScript com React e Vite:

* **Three.js e React Three Fiber:** Renderização em tempo real dos modelos 3D na GPU, sem exigir placas de vídeo dedicadas.
* **Framer Motion:** Animações orquestradas diretamente pelo compositor do navegador, evitando travamentos de quadro durante o scroll.
* **Tailwind CSS e Tipografia:** Uso das fontes Cinzel (romana lapidar para cabeçalhos), Newsreader (serifa de leitura contínua) e Space Grotesk (marcações temporais e números).
* **Pré-carregador dedicado:** Um preloader baixa os arquivos `.glb` de forma progressiva na memória antes de liberar a rolagem, garantindo que nenhum modelo apareça vazio durante o percurso.
* **Fontes e documentos históricos:** Todos os fatos citados contam com links diretos para a legislação da época (como a Constituição de 1824, o Código Comercial de 1850 e a Lei de Terras) e relatórios de instituições como IBGE, IPEA e Arquivo Nacional.

---

## Como rodar o projeto localmente

### Pré-requisitos
* Node.js (versão 18 ou superior)
* npm

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/harisoncleytondev/four-hundred-to-zero-.git
cd four-hundred-to-zero-
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador o endereço exibido no terminal (por padrão, `http://localhost:5173`).

Para gerar a versão de produção:
```bash
npm run build
npm run preview
```
