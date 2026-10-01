import type { StaticImageData } from "next/image";

import cif from "@/assets/cases/cif.jpg";
import entrelaco from "@/assets/cases/entrelaco.jpg";
import estudioEliane from "@/assets/cases/estudio-eliane.jpg";
import frajola from "@/assets/cases/frajola.jpg";
import nextStep from "@/assets/cases/johnnie-walker-the-next-step.jpg";
import mBoom from "@/assets/cases/mercado-livre-m-boom.jpg";
import myllena from "@/assets/cases/myllena-rocha.jpg";
import sipolatti from "@/assets/cases/sipolatti.jpg";

export const navItems = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Cases", href: "#cases" },
  { label: "Redes sociais", href: "#frajola" },
  { label: "Branding", href: "#entrelaco" },
  { label: "Contato", href: "#contato" },
];

export type Highlight = {
  title: string;
  category: string;
  image: StaticImageData;
  href: string;
};

/** Carrossel do hero — 2 linhas, na ordem do Figma (coluna a coluna). */
export const highlights: Highlight[] = [
  { title: "Myllena Rocha", category: "Mídia kit", image: myllena, href: "#cases" },
  { title: "Estúdio Eliane", category: "Redes sociais", image: estudioEliane, href: "#the-next-step" },
  { title: "Cif", category: "Campanha", image: cif, href: "#cif" },
  { title: "Mercado Livre", category: "Campanha", image: mBoom, href: "#m-boom" },
  { title: "Sipolatti", category: "Campanha", image: sipolatti, href: "#sipolatti" },
  { title: "Entrelaço", category: "Branding", image: entrelaco, href: "#entrelaco" },
  { title: "Johnnie Walker", category: "Campanha", image: nextStep, href: "#the-next-step" },
  { title: "Frajola", category: "Redes sociais", image: frajola, href: "#frajola" },
];

export const about = {
  paragraphs: [
    "Era uma vez uma menininha que vivia viajando na maionese e um dia ela descobriu que isso servia pra alguma coisa. Meu nome é Angela, tenho 20 e poucos anos mas muitos pensamentos criativos! E o que eu mais quero é tirar essas loucuras da minha cabeça e transformá-las em realidade pro resto da vida.",
    "Tenho experiência com muita coisa mas tenho consciência de que a gente sempre tem algo pra aprender, e eu tenho vontade de sobra pra ir além. Não me contento com pouco e sinto prazer em pensar o impensável! Se você também se sente assim, a gente vai se dar muito bem.",
  ],
  skills: ["Redação", "Direção de arte", "Redes sociais", "Branding", "Planejamento", "Estratégia"],
  stats: [
    { value: "03", label: "indicações a prêmios" },
    { value: "15+", label: "marcas atendidas" },
    { value: "3 anos", label: "de mercado" },
  ],
};

export const services = [
  {
    icon: "↗",
    title: "Campanhas",
    text: "Pensar o impensável? É o que eu mais gosto de fazer! Crio conceitos, ativações e campanhas pensadas para surpreender, gerar conversa e transformar marcas em experiências que as pessoas realmente lembrem.",
  },
  {
    icon: "◎",
    title: "Redes sociais",
    text: "Muito além de postar, eu amo pensar em estratégia! Com a linguagem certa, um calendário bem planejado e formatos e conteúdos bem explorados, a gente pode fazer o viral se tornar rotina. Tenho um olhar especialmente voltado para Gen Z, cultura pop e tendências, buscando oportunidades para colocar as marcas dentro das conversas certas.",
  },
  {
    icon: "☆",
    title: "Branding",
    text: "Mais que um produto ou serviço, você precisa ser uma marca. Construo identidades visuais pensando primeiro em como ser percebido. Trabalho com conceito, naming, posicionamento, símbolo, paleta e aplicações, buscando criar uma estética coerente e reconhecível que funcione nos diferentes pontos de contato da marca.",
  },
];

export type CaseStudyData = {
  id: string;
  title: string;
  meta: string;
  category: string;
  award?: string;
  image: StaticImageData;
  challenge: string;
  idea: string;
  result: string;
};

export const cases: CaseStudyData[] = [
  {
    id: "m-boom",
    title: "M-BOOM!",
    meta: "Mercado Livre · Clube de Criação Estudantes 2025",
    category: "Campanha",
    award: "Finalista CCSP 2025",
    image: mBoom,
    challenge:
      "O desafio era aproximar o Mercado Livre do universo de moda da Gen-Z e torná-la mais aspiracional para esse público.",
    idea: "Assim surgiu o M-BOOM: uma ação que leva a moda do Mercado Livre diretamente para as ruas. Caixas gigantes da marca surgem em pontos estratégicos e se transformam em desfiles pop-up com influenciadoras e looks exclusivos que só podem ser encontrados dentro do app.",
    result:
      "A campanha foi selecionada como finalista na categoria Estudantes, sendo uma entre as duas únicas propostas finalistas desenvolvida fora de São Paulo.",
  },
  {
    id: "cif",
    title: "Cif limpa tudo, até seus vocais.",
    meta: "Cif · Clube de Criação Estudantes 2026",
    category: "Campanha",
    image: cif,
    challenge:
      "O desafio era levar CIF para um dos maiores momentos culturais do país: o Rock in Rio. A ideia precisava gerar conversa espontânea, reforçar a versatilidade do produto e fugir de uma abordagem puramente promocional.",
    idea: "Para mostrar que CIF limpa tudo mesmo, trouxemos a Blogueirinha com os vocais “limpos” de verdade e levamos essa ideia para o Rock in Rio, onde o público podia gravar um videoclipe da música do seu artista favorito do dia.",
    result:
      "Uma campanha que conecta produto, cultura e participação do público, transformando um benefício funcional de CIF em uma experiência compartilhável e feita para gerar conversa.",
  },
  {
    id: "frajola",
    title: "Frajola",
    meta: "Frajola · Matéria de Mídias Sociais",
    category: "Redes sociais",
    award: "Vencedor do Intercom Sudeste 2026",
    image: frajola,
    challenge:
      "Como atividade da disciplina de Mídias Sociais, o desafio era usar o que aprendemos em sala para ajudar um negócio real. Escolhemos o Frajola, uma lanchonete muito presente na vida do campus, mas que ainda precisava construir sua presença nas redes sociais.",
    idea: "Meu insight foi simples: levar para as telas o que já funcionava tão bem fora delas. Em vez de criar uma comunicação distante da realidade do Frajola, transformei suas frases marcantes, piadas internas, clientes frequentes e histórias do dia a dia em conteúdo para o Instagram. Assim, a presença digital passou a refletir a mesma proximidade, humor e sensação de pertencimento que já existiam no campus.",
    result:
      "A estratégia venceu o prêmio de Melhor Estratégia Publicitária para Redes Sociais no Intercom Sudeste 2026 e conquistou uma indicação para a etapa nacional. Mais do que criar um perfil, o projeto conseguiu levar para as redes a conexão que já fazia do Frajola parte da vida do campus.",
  },
  {
    id: "the-next-step",
    title: "The Next Step",
    meta: "Johnnie Walker · Young Lions Brazil",
    category: "Campanha",
    image: nextStep,
    challenge:
      "Ressignificar o Keep Walking para uma nova geração, aproximando Johnnie Walker de jovens adultos por meio de uma ideia culturalmente relevante, digital e conectada aos novos significados de progresso, presença e responsabilidade.",
    idea: "The Next Step transforma o Keep Walking em uma experiência que acompanha a noite inteira. A jornada começa nas Next Step Machines, instaladas em pontos estratégicos: a pessoa registra aquele momento em foto ou vídeo, recebe um novo par de sapatos e continua o caminho deixando pegadas invisíveis em tinta UV pela cidade. No app ela pode compartilhar esses registros, acompanhar outras pessoas e descobrir eventos e novas ativações próximas. Assim, cada passo vira parte de uma experiência coletiva que conecta rua, conteúdo e descoberta.",
    result:
      "A proposta faz o Keep Walking deixar de ser apenas um slogan e virar uma forma de viver a noite: continuar, descobrir, registrar e compartilhar.",
  },
  {
    id: "sipolatti",
    title: "Com Sipolatti no lar",
    meta: "Sipolatti · Colibri Estudantes",
    category: "Campanha",
    image: sipolatti,
    challenge:
      "Fazer a Sipolatti ser lembrada para além do momento da compra, reforçando sua presença na vida dos capixabas como uma marca que acompanha mudanças de casa, de rotina, de família e de fase.",
    idea: "Partimos de uma verdade simples: tudo muda, mas algumas coisas permanecem com a gente. Usando “Como uma Onda” como fio condutor, criamos uma campanha em que a Sipolatti atravessa diferentes gerações e momentos da vida, acompanhando as transformações dentro de casa sem perder seu lugar na história de quem vive ali. A campanha se desdobra em filme, áudio, mídia programática e peças digitais que mudam de acordo com o contexto de cada pessoa.",
    result:
      "A proposta transforma a Sipolatti de uma marca ligada à compra em uma marca ligada à memória, à casa e às fases da vida. A campanha cria uma presença mais próxima e contínua, mostrando que a Sipolatti não entra apenas quando algo precisa ser comprado, ela permanece enquanto a vida acontece.",
  },
  {
    id: "entrelaco",
    title: "Entrelaço",
    meta: "Cliente",
    category: "Branding",
    image: entrelaco,
    challenge:
      "Criar do zero uma marca para um novo negócio de presentes personalizados, que precisava transmitir cuidado, afeto e sofisticação sem cair em uma estética genérica de “caixa de presente”.",
    idea: "Nasceu então, a Entrelaço! Desenvolvi o nome, o conceito e toda a identidade visual pensando na conexão entre pessoas, histórias e sentimentos. O próprio símbolo traduz isso, reforçando a ideia de que presentear também é uma forma de abraço.",
    result:
      "Uma identidade completa que equilibra o artesanal e o sofisticado, com logo, tipografia, paleta, linguagem e aplicações construídas a partir de um mesmo conceito. Mais do que vender caixas, a Entrelaço passa a se posicionar como uma marca que transforma presentes em experiências carregadas de significado.",
  },
];

export const contact = {
  phone: { label: "+55 33 99808-1191", href: "https://wa.me/5533998081191" },
  // TODO: substituir pelos perfis reais (não estavam no Figma).
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};
