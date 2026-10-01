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
  /** Texto alternativo base das fotos (descrição do produto). */
  imageAlt: string;

  /** Link de checkout da Kaiross (obrigatório). */
  affiliateUrl: string;

  youtubeId: string;
  hub: { benefit: string };
  seo: { title: string; description: string };
  theme: HeroTheme;

  hero: { headline: string; subheadline: string };
  problem: { title: string; lead: string; pains: string[]; bridge: string };
  solution: { title: string; paragraphs: string[] };
  features: string[];
  measures?: { label: string; value: string }[];
  video: { title: string; lead: string };
  benefits: { icon: IconName; title: string; text: string }[];
  uses: { icon: IconName; title: string; text: string }[];
  faq: { question: string; answer: string }[];
  finalCta: { title: string; text: string };
};
