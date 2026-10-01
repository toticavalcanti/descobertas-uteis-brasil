/**
 * Vitrine da home. Cada descoberta leva ao respectivo YouTube Short.
 * A thumbnail é a oficial do vídeo, carregada direto do YouTube pelo ID.
 * Para trocar um vídeo, basta trocar o `youtubeId`.
 */
export type Discovery = {
  number: number;
  name: string;
  category: string;
  /** Chamada de curiosidade: pergunta, não promessa de resultado. */
  curiosity: string;
  youtubeId: string;
  thumbAlt: string;
};

export const discoveries: Discovery[] = [
  {
    number: 1,
    name: "Mini Mop Portátil Retrátil",
    category: "Limpeza da casa",
    curiosity: "Será que ele realmente alcança aqueles cantinhos difíceis?",
    youtubeId: "5qhiD96GCIA",
    thumbAlt: "Cena do vídeo do Mini Mop Portátil Retrátil",
  },
  {
    number: 2,
    name: "Mini Aspirador Automotivo AJ-S17",
    category: "Carro",
    curiosity: "Pequeno por fora. Mas será que dá conta da sujeira do carro?",
    youtubeId: "ivX0A_QpuoM",
    thumbAlt: "Cena do vídeo do Mini Aspirador Automotivo AJ-S17",
  },
  {
    number: 3,
    name: "Ferro Portátil a Vapor AJ-120",
    category: "Cuidado com roupas",
    curiosity: "Será que um ferro tão compacto consegue deixar a roupa lisinha?",
    youtubeId: "pWopIaUyiBk",
    thumbAlt: "Cena do vídeo do Ferro Portátil a Vapor AJ-120",
  },
];

export const shortUrl = (youtubeId: string) => `https://www.youtube.com/shorts/${youtubeId}`;

/** Thumbnail oficial no formato original do Short (vertical) e a versão padrão, usada como reserva. */
export const thumbUrls = (youtubeId: string) => ({
  vertical: `https://i.ytimg.com/vi/${youtubeId}/oardefault.jpg`,
  standard: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
});
