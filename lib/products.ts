import type { Product, UpcomingDiscovery } from "./types";

/**
 * Catálogo do hub. Para publicar um novo produto, adicione um objeto em `products`
 * e remova o item correspondente de `upcoming`. A página /produtos/[slug] é gerada sozinha.
 *
 * ⚠️ Valores marcados com CONFIRMAR são exemplos: troque pelos dados reais do fornecedor
 * antes de publicar (Código de Defesa do Consumidor, art. 31).
 */
export const products: Product[] = [
  {
    slug: "ferro-a-vapor-aj-120",
    number: 1,
    name: "Ferro de Passar a Vapor Portátil AJ-120",
    shortName: "Ferro a vapor AJ-120",
    model: "AJ-120",
    category: "Cuidado com roupas",
    tagline: "Desamassa a roupa no cabide, em qualquer lugar.",
    headline: "Roupa lisa sem tirar a tábua do armário.",
    subheadline:
      "O ferro a vapor portátil AJ-120 desamassa camisa, vestido e calça direto no cabide. Liga, aquece rápido e cabe na mala de mão.",
    seo: {
      title: "Ferro de Passar a Vapor Portátil AJ-120",
      description:
        "Ferro a vapor portátil AJ-120: desamassa roupas no cabide, sem tábua. Compacto, leve e pronto em segundos. Veja o vídeo em uso, medidas e características.",
    },
    price: {
      current: 89.9, // CONFIRMAR
      previous: 129.9, // CONFIRMAR
      installments: { count: 3, value: 29.97, interestFree: true }, // CONFIRMAR
    },
    checkoutUrl: null, // ex.: "https://loja-parceira.com.br/produto/aj-120"
    // image: { src: "/produtos/ferro-a-vapor-aj-120/produto.png", alt: "Ferro a vapor portátil AJ-120", width: 900, height: 1125 },
    video: {
      src: "/produtos/ferro-a-vapor-aj-120/video-ugc.mp4",
      poster: "/produtos/ferro-a-vapor-aj-120/video-poster.jpg",
    },
    highlights: ["Passa no cabide", "Cabe na mala", "Vertical ou na mesa"],
    benefits: [
      {
        icon: "hanger",
        title: "Desamassa no cabide",
        text: "Pendure a peça e passe o vapor de cima para baixo. Sem tábua, sem mesa, sem montar nada antes de sair.",
      },
      {
        icon: "bolt",
        title: "Pronto em segundos",
        text: "Aquece rápido para aquela camisa que você lembrou de passar na hora de sair.",
      },
      {
        icon: "suitcase",
        title: "Vai para qualquer lugar",
        text: "Compacto e leve. Cabe na mala de mão, na gaveta do hotel ou no armário do trabalho.",
      },
      {
        icon: "feather",
        title: "Gentil com tecidos delicados",
        text: "O vapor relaxa as fibras sem pressionar, o que ajuda em seda, viscose e malhas que marcam com ferro comum.",
      },
      {
        icon: "sparkle",
        title: "Refresca entre lavagens",
        text: "Dá vida nova a blazers, cortinas e roupas que ficaram muito tempo guardadas.",
      },
    ],
    steps: [
      { title: "Encha o reservatório", text: "Solte o tanque, coloque água filtrada e encaixe de volta." },
      { title: "Ligue e aguarde a luz", text: "Conecte na tomada. Quando a luz indicar, o vapor está pronto." },
      { title: "Passe com a peça pendurada", text: "Estique o tecido com uma mão e deslize o ferro de cima para baixo." },
    ],
    comparison: [
      { label: "Precisa de tábua", common: "Sim", product: "Não" },
      { label: "Para começar", common: "Montar tábua e esperar", product: "Ligar e usar" },
      { label: "Levar em viagem", common: "Pesado e grande", product: "Cabe na mala de mão" },
      { label: "Tecidos delicados", common: "Pode marcar ou brilhar", product: "Vapor sem pressão" },
    ],
    videoNotes: [
      "O vapor começa a sair logo depois da luz acender.",
      "A camisa é passada pendurada, sem tábua.",
      "O tamanho real do ferro na mão de uma pessoa.",
    ],
    specs: [
      { label: "Modelo", value: "AJ-120" },
      { label: "Tipo", value: "Ferro a vapor portátil (vertical e horizontal)" },
      { label: "Potência", value: "1000 W" }, // CONFIRMAR
      { label: "Voltagem", value: "127 V ou 220 V (escolha na compra)" }, // CONFIRMAR
      { label: "Reservatório", value: "Removível, cerca de 100 ml" }, // CONFIRMAR
      { label: "Aquecimento", value: "Cerca de 30 segundos" }, // CONFIRMAR
      { label: "Peso", value: "Cerca de 600 g" }, // CONFIRMAR
      { label: "Cabo", value: "1,8 m" }, // CONFIRMAR
    ],
    dimensions: { heightCm: 25, widthCm: 11, depthCm: 9 }, // CONFIRMAR
    inBox: ["1 ferro a vapor AJ-120", "1 reservatório de água removível", "Manual de uso"], // CONFIRMAR
    limitations: [
      "Vincos muito marcados em linho grosso ou jeans pesado pedem mais passadas, ou o ferro de base.",
      "O reservatório é pequeno de propósito: ótimo para algumas peças, não para a roupa da semana inteira.",
    ],
    faq: [
      {
        question: "Serve para qualquer tecido?",
        answer:
          "Funciona bem em algodão, viscose, poliéster, seda e malhas. Em tecidos muito sensíveis, mantenha alguns centímetros de distância e teste antes numa parte escondida.",
      },
      {
        question: "Posso usar água da torneira?",
        answer:
          "Recomendamos água filtrada. Ela reduz o acúmulo de calcário e ajuda o vapor a sair uniforme por mais tempo.",
      },
      {
        question: "Qual é a voltagem?",
        answer:
          "O AJ-120 é vendido em 127 V e 220 V. Confira a voltagem da sua tomada antes de finalizar a compra.",
      },
      {
        question: "Onde eu finalizo a compra?",
        answer:
          "No site do nosso parceiro de venda. Ao tocar em Comprar agora, você é levado para lá, e o pagamento e a entrega são feitos por ele.",
      },
      {
        question: "E se eu me arrepender?",
        answer:
          "Compras feitas pela internet têm 7 dias para desistência, pelo Código de Defesa do Consumidor. Se precisar de ajuda com isso, escreva para a gente.",
      },
    ],
  },
];

export const upcoming: UpcomingDiscovery[] = [
  { number: 2, category: "Cozinha", note: "Em avaliação. Chega quando passar nos nossos critérios." },
  { number: 3, category: "Organização", note: "Em avaliação. Chega quando passar nos nossos critérios." },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productPath = (p: Pick<Product, "slug">) => `/produtos/${p.slug}`;
