import type { IconName } from "@/components/ui/Icon";

export type Price = {
  current: number;
  previous?: number;
  installments?: { count: number; value: number; interestFree: boolean };
};

export type Product = {
  slug: string;
  number: number;
  name: string;
  shortName: string;
  model: string;
  category: string;
  /** Frase curta usada em cards e no hub */
  tagline: string;
  headline: string;
  subheadline: string;
  seo: { title: string; description: string };
  price?: Price;
  /** Cole aqui o link do parceiro de venda. Enquanto for null, o botão mostra um aviso. */
  checkoutUrl: string | null;
  /** Foto real do produto (fundo transparente de preferência). Sem ela, usamos a ilustração. */
  image?: { src: string; alt: string; width: number; height: number };
  video?: { src: string; poster?: string };
  highlights: string[];
  benefits: { title: string; text: string; icon: IconName }[];
  steps: { title: string; text: string }[];
  comparison: { label: string; common: string; product: string }[];
  videoNotes: string[];
  specs: { label: string; value: string }[];
  dimensions: { heightCm: number; widthCm: number; depthCm: number };
  inBox: string[];
  limitations: string[];
  faq: { question: string; answer: string }[];
};

export type UpcomingDiscovery = {
  number: number;
  category: string;
  note: string;
};
