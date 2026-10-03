"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** ID da Tag do Pinterest (fornecido pelo Pinterest). */
const PINTEREST_TAG_ID = "2612959437082";

declare global {
  interface Window {
    pintrk?: ((...args: unknown[]) => void) & { queue?: unknown[]; version?: string };
  }
}

/**
 * Tag base do Pinterest, carregada uma única vez no layout raiz.
 *
 * - Carregamento inicial: o código-base faz pintrk('load') e pintrk('page').
 * - Navegação interna do App Router (sem recarregar a página): dispara pintrk('page')
 *   a cada troca de rota, pulando a primeira renderização para não duplicar o evento inicial.
 * - Sem correspondência avançada e sem eventos de conversão (ficam para depois).
 */
export default function PinterestTag() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.pintrk?.("page");
  }, [pathname]);

  return (
    <>
      <Script id="pinterest-tag" strategy="afterInteractive">
        {`!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', '${PINTEREST_TAG_ID}');
pintrk('page');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://ct.pinterest.com/v3/?event=init&tid=${PINTEREST_TAG_ID}&noscript=1`}
        />
      </noscript>
    </>
  );
}
