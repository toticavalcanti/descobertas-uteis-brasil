/**
 * =====================================================================
 *  ANALYTICS — ponto ÚNICO de envio de eventos do site.
 *
 *  Hoje: Google tag (GA4 + Google Ads), carregada em components/analytics/GoogleTag.tsx.
 *  Futuro: Meta Pixel / TikTok Pixel / GTM podem ser adicionados em `track()`
 *  sem mudar nenhum componente que já dispara eventos.
 *
 *  Privacidade: os eventos levam só dados de produto, página e CTA.
 *  Nunca envie nome, e-mail, telefone ou outro dado pessoal.
 * =====================================================================
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || undefined;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || undefined;

/** Onde o CTA está na landing page. */
export type CtaLocation = "hero" | "video" | "benefits" | "summary" | "final" | "sticky";

type ProductParams = { product_id: string; product_name: string; product_slug: string };

type EventMap = {
  /** Clique para conhecer/comprar na Kaiross. É um clique, NÃO uma venda. */
  affiliate_click: ProductParams & { cta_location: CtaLocation };
  /** Visitante iniciou o vídeo do produto. */
  video_start: ProductParams;
};

type Gtag = (command: "event" | "config" | "js" | "set", target: string | Date, params?: Record<string, unknown>) => void;
declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export function track<E extends keyof EventMap>(event: E, params: EventMap[E]) {
  if (typeof window === "undefined") return;
  try {
    // Google tag (GA4; o Google Ads pode importar o evento do GA4 como conversão)
    window.gtag?.("event", event, { ...params, transport_type: "beacon" });
    // Pontos de extensão futuros, ex.: window.fbq?.("trackCustom", event, params)
  } catch {
    /* analytics nunca pode quebrar a navegação */
  }
}

/** Parâmetros de produto padronizados para os eventos. */
export const productParams = (p: { analyticsId: string; name: string; slug: string }): ProductParams => ({
  product_id: p.analyticsId,
  product_name: p.name,
  product_slug: p.slug,
});
