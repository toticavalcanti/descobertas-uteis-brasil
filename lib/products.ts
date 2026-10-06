import type { Product } from "./types";

/**
 * =====================================================================
 *  CATÁLOGO DAS DESCOBERTAS
 *  Fonte única de conteúdo do hub (/) e das landing pages (/descobertas/[slug]).
 *
 *  LINKS DA KAIROSS: `affiliateUrl` de cada produto abaixo.
 *  Todos os botões de compra da página daquele produto usam esse link.
 *
 *  Regra de conteúdo: só informações confirmadas. Nada de potência, autonomia,
 *  avaliações, descontos ou números que não tenham sido fornecidos.
 * =====================================================================
 */
export const products: Product[] = [
  // ─────────────────────────────────────────────── DESCOBERTA Nº 01
  {
    slug: "fonte-bebedouro-pet-de-inox",
    analyticsId: "fonte-inox-flow",
    number: 1,
    name: "Fonte Bebedouro Inox Flow para Pets",
    shortName: "Fonte Inox Flow",
    category: "Pets / Cães e Gatos",
    imageFolder: "fonte-bebedouro-pet-de-inox",
    imageAlt: "Fonte Bebedouro Inox Flow para Pets",
    // Fotos da página: só as versões QUADRADAS ("..._quadrada.jpg"), escolhidas pelo nome do arquivo
    // (comparação sem acentos e em minúsculas). A thumbnail do vídeo continua vindo do YouTube.
    imageHints: {
      hero: ["^golden retriever bebendo em fonte de agua.*quadrada"],
      solution: ["^gatinho bebendo na fonte de aco.*quadrada"],
      benefits: ["^cao bebendo em fonte de inox.*quadrada"],
      summary: ["^gatos bebendo na fonte de aco.*quadrada"],
    },
    galleryFilter: "^(golden|cao|gat).*quadrada",

    affiliateUrl: "https://pay.kaiross.com.br/Fc97Pfga3vzB", // checkout Kaiross da Fonte Inox Flow
    price: 279.9,

    youtubeId: "W6oMmnKNGrY",
    hub: { benefit: "Água corrente, estrutura em inox e capacidade de 3,2 L para cães e gatos." },
    seo: {
      title: "Fonte Bebedouro Inox 3,2L para Cães e Gatos",
      description:
        "Conheça a Fonte Bebedouro Inox Flow para cães e gatos, com capacidade de 3,2 litros e fluxo contínuo de água. Veja fotos, vídeo e detalhes.",
    },
    theme: "petroleo",
    hero: {
      headline: "Água corrente para quem faz parte da família.",
      subheadline: "Fonte em aço inox com capacidade de 3,2 litros e fluxo contínuo de água para cães e gatos.",
    },
    problem: {
      title: "Água parada nem sempre chama a atenção.",
      lead: "Muitos pets demonstram curiosidade por água em movimento. A Fonte Bebedouro Inox Flow mantém um fluxo contínuo, transformando a água em um ponto de interesse no ambiente.",
      pains: [],
      compare: {
        common: { label: "Tigela comum", text: "Água parada, que muitas vezes passa despercebida." },
        product: { label: "Fonte Inox Flow", text: "Água em movimento, com fluxo contínuo." },
      },
      bridge: "Um detalhe simples na rotina da casa.",
    },
    solution: {
      title: "Conheça a Fonte Inox Flow.",
      paragraphs: [
        "Uma fonte bebedouro em aço inox, com capacidade de 3,2 litros e fluxo contínuo de água.",
        "Ela funciona na tomada, é bivolt e pode ser usada por cães e gatos.",
      ],
    },
    features: [
      "100% inox",
      "Capacidade de 3,2 litros",
      "Fluxo contínuo de água",
      "Funcionamento silencioso",
      "Fácil de limpar",
      "Para cães e gatos",
    ],
    specs: [
      { label: "Material", value: "Aço inox" },
      { label: "Capacidade", value: "3,2 litros" },
      { label: "Uso", value: "Cães e gatos" },
      { label: "Alimentação", value: "Bivolt" },
      { label: "Tipo", value: "Fonte elétrica com fluxo contínuo de água" },
      { label: "Cor", value: "Inox" },
    ],
    video: {
      title: "Veja a fonte em uso.",
      lead: "Assista ao vídeo e veja a água em movimento e os pets usando a fonte.",
    },
    inUse: {
      title: "Para casas diferentes.",
      lead: "Cães e gatos de portes e perfis diferentes usando a mesma fonte.",
      items: [
        { hints: ["^golden retriever.*quadrada"], caption: "Cães grandes" },
        { hints: ["^cao bebe em fonte de aco na cozinha.*quadrada"], caption: "Cães de porte menor" },
        { hints: ["^gatinho.*quadrada"], caption: "Gatinhos" },
        { hints: ["^gato rag.*quadrada"], caption: "Gatos de pelo longo" },
        { hints: ["^gatos bebendo.*quadrada"], caption: "Mais de um pet em casa" },
        { hints: ["^cao bebendo em fonte de inox.*quadrada"], caption: "Na sala ou na cozinha" },
      ],
    },
    benefits: [
      { icon: "shield", title: "100% inox", text: "Construção em aço inox, resistente e fácil de integrar a diferentes ambientes da casa." },
      { icon: "cup", title: "Capacidade de 3,2 litros", text: "Boa capacidade para o dia a dia, inclusive em casas com mais de um pet." },
      { icon: "drop", title: "Água em movimento", text: "O fluxo contínuo cria uma experiência diferente da água parada em uma tigela comum." },
      { icon: "quiet", title: "Funcionamento silencioso", text: "Bomba desenvolvida para trabalhar com baixo nível de ruído." },
      { icon: "sparkle", title: "Fácil de limpar", text: "Estrutura pensada para facilitar a manutenção e a limpeza do recipiente." },
      { icon: "paw", title: "Para cães e gatos", text: "Pode ser utilizada por pets de portes e perfis diferentes." },
    ],
    faq: [
      { question: "Serve para cães e gatos?", answer: "Sim. A fonte foi desenvolvida para uso de pets e pode ser utilizada por cães e gatos." },
      { question: "Qual é a capacidade?", answer: "A capacidade informada é de 3,2 litros." },
      { question: "O recipiente é de inox?", answer: "Sim. O produto é anunciado como uma fonte 100% inox." },
      { question: "A fonte precisa ficar ligada na tomada?", answer: "Sim. Ela utiliza uma bomba elétrica para manter o fluxo de água." },
      { question: "É bivolt?", answer: "Sim, o produto é informado como bivolt." },
      {
        question: "Onde a compra é finalizada?",
        answer:
          "Após conhecer o produto no Descobertas Úteis Brasil, o botão de compra direciona você ao checkout da Kaiross.",
      },
    ],
    omitCommonFaq: ["checkout"],
    finalCta: {
      title: "Água corrente para cães, gatos e casas cheias de companhia.",
      text: "Conheça a Fonte Bebedouro Inox Flow e veja se ela faz sentido para a rotina dos seus pets.",
    },
    copy: {
      heroCta: "Quero conhecer a fonte",
      cta: "Quero a fonte para meu pet",
      stickyCta: "Quero a fonte",
      benefitsTitle: "Por que essa descoberta chamou nossa atenção?",
      benefitsLead: "Os diferenciais da Fonte Inox Flow, sem exagero.",
      galleryTitle: "Eles entenderam rapidinho.",
      galleryLead: "Fotos reais da fonte. Toque em uma foto para ampliar.",
      summaryTitle: "Fonte Bebedouro Inox Flow para Pets",
      checkoutNote: "Compra finalizada com segurança na Kaiross.",
    },
  },

  // ─────────────────────────────────────────────── DESCOBERTA Nº 02
  {
    slug: "mini-mop-portatil",
    analyticsId: "mini-mop",
    number: 2,
    name: "Mini Mop Portátil Retrátil com Auto-Torção",
    shortName: "Mini Mop Retrátil",
    category: "Limpeza da casa",
    imageFolder: "mini-mop",
    imageAlt: "Mini Mop Portátil Retrátil com Auto-Torção",

    affiliateUrl: "https://pay.kaiross.com.br/KOFNWn7oB18H", // checkout Kaiross do Mini Mop

    youtubeId: "5qhiD96GCIA",
    hub: { benefit: "Retrátil e com auto-torção, para as pequenas limpezas do dia a dia." },
    seo: {
      title: "Mini Mop Portátil Retrátil com Auto-Torção",
      description:
        "Mini mop portátil e retrátil, com sistema de auto-torção, para pequenas limpezas do dia a dia. Compacto e fácil de guardar. Veja o vídeo e conheça o produto.",
    },
    theme: "vapor",
    hero: {
      headline: "Derramou alguma coisa no chão de novo?",
      subheadline: "Um mini mop retrátil, com auto-torção, para as pequenas limpezas do dia a dia.",
    },
    problem: {
      title: "Nem toda limpeza precisa virar uma operação.",
      lead: "Nem toda limpeza precisa virar uma operação com balde, pano e um monte de coisas espalhadas pela casa.",
      pains: [
        "Café, suco ou água derramados no chão da cozinha.",
        "Sujeirinhas nos cantos que um mop grande não alcança direito.",
        "Pegar balde, pano e rodo para limpar uma área pequena.",
      ],
      bridge: "E se as pequenas limpezas fossem pequenas de verdade?",
    },
    solution: {
      title: "Conheça o mini mop retrátil.",
      paragraphs: [
        "O Mini Mop Portátil Retrátil foi pensado para facilitar aquelas pequenas limpezas do dia a dia.",
        "Seu formato compacto e o sistema de auto-torção tornam o uso mais prático.",
      ],
    },
    features: [
      "Portátil",
      "Retrátil",
      "Compacto",
      "Sistema de auto-torção",
      "Fácil de guardar",
      "Indicado para pequenas limpezas",
      "Pode ser usado em diferentes ambientes",
    ],
    video: {
      title: "Veja o mini mop em uso.",
      lead: "Antes de decidir, assista ao vídeo e veja como ele funciona na prática.",
    },
    benefits: [
      { icon: "collapse", title: "Retrátil", text: "Recolhe para ocupar menos espaço quando você termina." },
      { icon: "twist", title: "Auto-torção", text: "Sistema pensado para deixar o uso mais prático." },
      { icon: "box", title: "Compacto e fácil de guardar", text: "Cabe em armários e cantinhos sem atrapalhar." },
      { icon: "corner", title: "Cantos e áreas menores", text: "Ajuda a alcançar os lugares onde um mop grande não chega bem." },
      { icon: "drop", title: "Pequenas limpezas", text: "Para o que derramou ou sujou, sem montar uma operação." },
      { icon: "home", title: "Diferentes ambientes", text: "Pode ser usado na cozinha, no banheiro e em outros cômodos." },
    ],
    uses: [
      { icon: "drop", title: "Na cozinha", text: "Para algo que caiu ou derramou durante o preparo." },
      { icon: "home", title: "No banheiro", text: "Para limpar uma área pequena sem tirar tudo do lugar." },
      { icon: "box", title: "Em apartamentos", text: "Retrátil e compacto, guarda em pouco espaço." },
      { icon: "corner", title: "Nos cantinhos", text: "Para as áreas menores que pedem um mop mais compacto." },
    ],
    faq: [
      {
        question: "Como funciona a auto-torção?",
        answer:
          "O mini mop tem um sistema de auto-torção pensado para deixar o uso mais prático. No vídeo desta página você vê como ele funciona.",
      },
      {
        question: "Ele ocupa muito espaço?",
        answer: "Ele é compacto e retrátil, o que facilita guardar em armários, áreas de serviço e cantinhos.",
      },
      {
        question: "Serve para limpar a casa inteira?",
        answer:
          "Ele foi pensado para as pequenas limpezas do dia a dia. Para limpar áreas grandes de uma vez, um mop maior pode ser mais adequado.",
      },
    ],
    finalCta: {
      title: "Pequenas limpezas, sem montar uma operação.",
      text: "Conheça o mini mop retrátil e confira preço, pagamento e envio na Kaiross.",
    },
  },

  // ─────────────────────────────────────────────── DESCOBERTA Nº 03
  {
    slug: "mini-aspirador-automotivo-aj-s17",
    analyticsId: "aj-s17",
    number: 3,
    name: "Mini Aspirador Automotivo Portátil AJ-S17",
    shortName: "Mini Aspirador AJ-S17",
    model: "AJ-S17",
    category: "Carro",
    imageFolder: "mini-aspirador-aj-s17",
    imageAlt: "Mini Aspirador Automotivo Portátil AJ-S17",

    affiliateUrl: "https://pay.kaiross.com.br/e4glCxgH6YTG", // checkout Kaiross do Mini Aspirador AJ-S17

    youtubeId: "O7ZnAvYWKe8",
    hub: { benefit: "Recarregável e sem fio, para limpezas rápidas no interior do carro." },
    seo: {
      title: "Mini Aspirador Automotivo Portátil AJ-S17",
      description:
        "Mini aspirador automotivo AJ-S17: compacto, recarregável e sem fio durante o uso, com acessórios para limpar o interior do carro. Veja o vídeo e conheça o produto.",
    },
    theme: "nevoa",
    hero: {
      headline: "Migalha e poeira acumulando no carro?",
      subheadline: "Um mini aspirador recarregável e sem fio para as limpezas rápidas do dia a dia.",
    },
    problem: {
      title: "A sujeira do carro vai se acumulando aos poucos.",
      lead: "Sabe aquela poeira, migalha ou sujeirinha que vai se acumulando nos cantos do carro?",
      pains: [
        "Migalhas no banco depois daquele lanche rápido.",
        "Poeira se juntando nos cantinhos e no console.",
        "Tirar um aspirador grande do lugar toda vez dá preguiça.",
      ],
      bridge: "E se a limpeza rápida coubesse no porta-luvas da rotina?",
    },
    solution: {
      title: "Conheça o AJ-S17.",
      paragraphs: [
        "O AJ-S17 é compacto e portátil, pensado para facilitar a limpeza do interior do veículo sem precisar recorrer a um aspirador grande toda vez.",
        "Ele é recarregável e funciona sem fio durante o uso, e acompanha acessórios que ajudam a alcançar as áreas menores.",
      ],
    },
    features: [
      "Modelo AJ-S17",
      "Mini aspirador automotivo portátil",
      "Compacto",
      "Recarregável",
      "Sem fio durante o uso",
      "Acompanha acessórios",
      "Indicado para limpeza do interior do veículo",
    ],
    video: {
      title: "Veja o AJ-S17 em uso.",
      lead: "Antes de decidir, assista ao vídeo e veja como ele funciona dentro de um carro de verdade.",
    },
    benefits: [
      { icon: "box", title: "Compacto", text: "Pequeno o bastante para ficar à mão quando você precisar." },
      { icon: "battery", title: "Recarregável e sem fio", text: "Sem cabo atrapalhando durante o uso." },
      { icon: "hand", title: "Fácil de manusear", text: "Portátil, para usar com uma mão dentro do carro." },
      { icon: "sparkle", title: "Poeira e migalhas", text: "Pensado para a sujeira do dia a dia no interior do veículo." },
      { icon: "corner", title: "Áreas menores", text: "Os acessórios ajudam a alcançar cantos e espaços estreitos." },
      { icon: "clock", title: "Limpezas rápidas", text: "Para dar aquela geral sem transformar isso em programa." },
    ],
    uses: [
      { icon: "car", title: "Depois do lanche", text: "Para as migalhas que ficaram no banco ou no tapete." },
      { icon: "corner", title: "Cantinhos e console", text: "Onde a poeira se acumula e a mão não alcança bem." },
      { icon: "clock", title: "Antes de dar uma carona", text: "Uma passada rápida antes de alguém entrar no carro." },
      { icon: "sparkle", title: "Entre uma lavagem e outra", text: "Para manter o interior em ordem no dia a dia." },
    ],
    faq: [
      {
        question: "Ele precisa ficar ligado na tomada?",
        answer: "Não durante o uso. O AJ-S17 é recarregável e funciona sem fio: você carrega e depois usa livremente no carro.",
      },
      {
        question: "Vem com acessórios?",
        answer:
          "Sim. Ele acompanha acessórios que ajudam na limpeza de áreas menores. A lista completa está na página do produto na Kaiross.",
      },
      {
        question: "Serve para uma limpeza pesada?",
        answer:
          "Ele foi pensado para limpezas rápidas do interior do carro, como poeira e migalhas. Para uma limpeza completa e pesada, um aspirador maior pode ser mais adequado.",
      },
    ],
    finalCta: {
      title: "Limpeza rápida, sem tirar o aspirador grande do lugar.",
      text: "Conheça o AJ-S17 e confira preço, pagamento e envio na Kaiross.",
    },
  },

  // ─────────────────────────────────────────────── DESCOBERTA Nº 04
  {
    slug: "ferro-portatil-aj-120",
    analyticsId: "aj-120",
    number: 4,
    name: "Ferro de Passar a Vapor Portátil AJ-120",
    shortName: "Ferro Portátil AJ-120",
    model: "AJ-120",
    category: "Cuidado com roupas",
    imageFolder: "ferro-a-vapor-aj-120",
    imageAlt: "Ferro de Passar a Vapor Portátil AJ-120",

    affiliateUrl: "https://pay.kaiross.com.br/8kNZPPkTYJxb", // checkout Kaiross do Ferro AJ-120

    youtubeId: "7gRsGcXzVro",
    hub: { benefit: "Compacto e com vapor, para retoques rápidos nas roupas do dia a dia." },
    seo: {
      title: "Ferro de Passar a Vapor Portátil AJ-120",
      description:
        "Ferro de passar a vapor portátil AJ-120: compacto, leve e com função de vapor para retoques rápidos nas roupas. Acompanha copo medidor. Veja o vídeo e conheça o produto.",
    },
    theme: "petroleo",
    hero: {
      headline: "Roupa amassada bem na hora de sair?",
      subheadline: "Uma solução compacta para aqueles retoques rápidos do dia a dia.",
    },
    problem: {
      title: "Uma peça amassada não deveria virar uma tarefa.",
      lead: "Tem roupa amassada e não quer montar toda a estrutura para passar?",
      pains: [
        "Você lembra da camisa amassada só na hora de sair.",
        "Montar tábua e ferro grande para uma peça só parece exagero.",
        "Na viagem, a roupa sai da mala marcada.",
      ],
      bridge: "E se o retoque coubesse na palma da mão?",
    },
    solution: {
      title: "Conheça o AJ-120.",
      paragraphs: [
        "O AJ-120 é uma opção compacta e prática para aqueles momentos em que você quer deixar uma peça mais lisinha rapidamente.",
        "Seu formato portátil facilita o manuseio e o uso de vapor ajuda nos retoques das roupas.",
      ],
    },
    features: [
      "Modelo AJ-120",
      "Ferro de passar a vapor portátil",
      "Compacto",
      "Leve",
      "Design ergonômico",
      "Função de vapor",
      "Copo medidor incluso",
    ],
    measures: [
      { label: "Altura da base", value: "110 mm" },
      { label: "Altura total com alça", value: "112 mm" },
      { label: "Largura da base", value: "80 mm" },
    ],
    video: {
      title: "Veja o AJ-120 em uso.",
      lead: "Antes de decidir, assista ao vídeo e veja o tamanho real dele e como é usar no dia a dia.",
    },
    benefits: [
      { icon: "box", title: "Compacto", text: "Ocupa pouco espaço na gaveta, no armário ou na mala." },
      { icon: "hand", title: "Leve e ergonômico", text: "Formato pensado para facilitar o manuseio." },
      { icon: "drop", title: "Função de vapor", text: "O vapor ajuda nos retoques das roupas." },
      { icon: "clock", title: "Retoques rápidos", text: "Para deixar uma peça mais lisinha sem montar estrutura." },
      { icon: "suitcase", title: "Fácil de transportar", text: "Útil em viagens e para levar aonde precisar." },
      { icon: "cup", title: "Copo medidor incluso", text: "Vem junto para facilitar o abastecimento de água." },
    ],
    uses: [
      { icon: "clock", title: "Antes de sair de casa", text: "Aquele retoque na camisa ou na blusa minutos antes do compromisso." },
      { icon: "suitcase", title: "Em viagens", text: "Na mala, para as roupas que amassaram no caminho." },
      { icon: "home", title: "Em espaços pequenos", text: "Para quem não tem onde deixar uma tábua montada." },
      { icon: "hanger", title: "No dia a dia", text: "Para as peças que só precisam de um retoque rápido." },
    ],
    faq: [
      {
        question: "O que vem junto com o ferro?",
        answer: "O AJ-120 acompanha um copo medidor, que facilita colocar água para usar o vapor.",
      },
      {
        question: "Quais são as medidas?",
        answer: "A base tem 110 mm de altura e 80 mm de largura. A altura total, com a alça, é de 112 mm.",
      },
      {
        question: "Ele substitui um ferro de passar comum?",
        answer:
          "Ele foi pensado para retoques rápidos e para levar com você. Para passar muitas roupas de uma vez, um ferro comum pode ser mais adequado.",
      },
    ],
    finalCta: {
      title: "Retoque rápido, sem montar estrutura.",
      text: "Conheça o AJ-120 e confira preço, pagamento e envio na Kaiross.",
    },
  },

];

/** Perguntas comuns a todas as landing pages. */
export const commonFaq: { id: "checkout" | "arrependimento"; question: string; answer: string }[] = [
  {
    id: "checkout",
    question: "Onde eu finalizo a compra?",
    answer:
      "Ao tocar em Quero conhecer o produto, você vai para a página do produto na Kaiross. Lá estão preço, formas de pagamento e envio.",
  },
  {
    id: "arrependimento",
    question: "E se eu me arrepender?",
    answer:
      "Compras feitas pela internet têm 7 dias para desistência, pelo Código de Defesa do Consumidor. Se precisar de ajuda, escreva para a gente.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productPath = (p: Pick<Product, "slug">) => `/descobertas/${p.slug}`;
export const shortUrl = (youtubeId: string) => `https://www.youtube.com/shorts/${youtubeId}`;
