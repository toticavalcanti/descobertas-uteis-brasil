import Script from "next/script";
import { GA_ID, GOOGLE_ADS_ID } from "@/lib/analytics";

/**
 * Google tag (gtag.js) para GA4 e Google Ads, carregada uma única vez após a página ficar interativa.
 *
 * - page_view: enviado pelo GA4 no carregamento. As navegações internas do Next.js (App Router)
 *   são registradas pela medição otimizada do GA4 ("alterações de página com base no histórico
 *   do navegador", ativa por padrão), sem disparo manual e sem duplicar.
 * - UTMs: lidos pelo GA4 a partir da URL de entrada e mantidos na sessão.
 * - Google Ads: só é configurado se NEXT_PUBLIC_GOOGLE_ADS_ID existir. Nenhuma conversão é
 *   disparada aqui; a ideia é importar o evento affiliate_click do GA4 no Google Ads.
 *
 * Sem nenhuma das variáveis de ambiente, nada é carregado.
 */
export default function GoogleTag() {
  const loaderId = GA_ID ?? GOOGLE_ADS_ID;
  if (!loaderId) return null;

  const configs = [GA_ID, GOOGLE_ADS_ID]
    .filter(Boolean)
    .map((id) => `gtag('config', ${JSON.stringify(id)});`)
    .join("\n");

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(loaderId)}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${configs}`}
      </Script>
    </>
  );
}
