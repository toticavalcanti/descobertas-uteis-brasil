import type { IconName } from "@/components/ui/Icon";

export type HeroTheme = "petroleo" | "nevoa" | "vapor";

export type Product = {
  slug: string;
  /** Identificador curto enviado como product_id nos eventos de analytics. */
  analyticsId: string;
  number: number;
  name: string;
  shortName: string;
  model?: string;
  category: string;

  /** Pasta dentro de /public/produtos com as fotos reais. */
  imageFolder: string;
  /**
   * Opcional: nome do arquivo (ex.: "foto-3.webp") para cada seção.
   * Se ficar vazio, as fotos da pasta são distribuídas em ordem alfabética.
   */
  imageRoles?: { hero?: string; solution?: string; benefits?: string; summary?: string };
  /**
   * Opcional: escolha por palavras do NOME REAL do arquivo (sem acentos, minúsculas, regex).
   * Usado quando os arquivos têm nomes descritivos. `imageRoles` tem prioridade.
   * O valor especial "@sem-animal" escolhe um arquivo cujo nome não cita cão/gato.
   */
  imageHints?: { hero?: string[]; solution?: string[]; benefits?: string[]; summary?: string[] };
  /** Opcional: só as fotos cujo nome combina com este regex entram na galeria (padrão: todas da pasta). */
  galleryFilter?: string;
  /** Texto alternativo base das fotos (descrição do produto). */
  imageAlt: string;

  /** Link de checkout da Kaiross (obrigatório). */
  affiliateUrl: string;

  youtubeId: string;
  hub: { benefit: string };
  seo: { title: string; description: string };
  theme: HeroTheme;

  hero: { headline: string; subheadline: string };
  problem: {
    title: string;
    lead: string;
    pains: string[];
    bridge: string;
    /** Opcional: comparação em texto no lugar da lista "Você se identifica?". */
    compare?: { common: { label: string; text: string }; product: { label: string; text: string } };
  };
  solution: { title: string; paragraphs: string[] };
  features: string[];
  measures?: { label: string; value: string }[];
  video: { title: string; lead: string };
  benefits: { icon: IconName; title: string; text: string }[];
  /** Situações de uso em cards com ícone. */
  uses?: { icon: IconName; title: string; text: string }[];
  /** Opcional: seção "produto em uso" com fotos reais, escolhidas pelo nome do arquivo. */
  inUse?: { title: string; lead: string; items: { hints: string[]; caption: string }[] };
  /** Opcional: informações do produto em formato rótulo/valor. */
  specs?: { label: string; value: string }[];
  /** Opcional: preço exibido na página (valor confirmado). */
  price?: number;
  /** Opcional: textos que substituem os padrões das seções compartilhadas. */
  copy?: {
    heroCta?: string;
    cta?: string;
    stickyCta?: string;
    benefitsTitle?: string;
    benefitsLead?: string;
    galleryTitle?: string;
    galleryLead?: string;
    summaryTitle?: string;
    checkoutNote?: string;
  };
  faq: { question: string; answer: string }[];
  /** Opcional: perguntas comuns (lib/products.ts → commonFaq) que esta página não deve repetir. */
  omitCommonFaq?: ("checkout" | "arrependimento")[];
  finalCta: { title: string; text: string };
};
