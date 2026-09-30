"use client";

import { useEffect, useId, useState } from "react";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

type Props = {
  checkoutUrl: string | null;
  productName: string;
  label?: string;
  variant?: "primary" | "dark";
  size?: "md" | "lg";
  full?: boolean;
  noticePlacement?: "above" | "below";
  className?: string;
};

/**
 * Botão de compra. Com `checkoutUrl` definido, leva ao parceiro de venda.
 * Sem link, mostra um aviso com o contato (a estrutura já fica pronta para o checkout).
 */
export default function BuyButton({
  checkoutUrl,
  productName,
  label = "Comprar agora",
  variant = "primary",
  size = "lg",
  full = false,
  noticePlacement = "below",
  className = "",
}: Props) {
  const [notice, setNotice] = useState(false);
  const noticeId = useId();

  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice(false), 7000);
    return () => window.clearTimeout(t);
  }, [notice]);

  const skin =
    variant === "primary"
      ? "bg-ipe text-tinta shadow-[0_14px_30px_-12px_rgba(245,179,1,.75)] hover:bg-ipe-400"
      : "bg-tinta text-white shadow-[0_14px_30px_-14px_rgba(20,34,33,.8)] hover:bg-petroleo";
  const dims = size === "lg" ? "min-h-[3.5rem] px-7 text-[1.05rem]" : "min-h-[2.9rem] px-5 text-[0.95rem]";
  const classes = `group relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-[transform,background-color,box-shadow] duration-200 active:scale-[0.97] ${skin} ${dims} ${full ? "w-full" : ""}`;

  const content = (
    <>
      <Icon name="bag" size={size === "lg" ? 21 : 18} className="transition-transform duration-300 group-hover:-rotate-6" />
      <span>{label}</span>
    </>
  );

  return (
    <div className={`relative ${full ? "w-full" : "inline-block"} ${className}`}>
      {checkoutUrl ? (
        <a
          href={checkoutUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className={classes}
          data-evento="clique-comprar"
          aria-label={`${label}: ${productName} (abre o site do parceiro)`}
        >
          {content}
        </a>
      ) : (
        <button
          type="button"
          className={classes}
          onClick={() => setNotice((v) => !v)}
          aria-expanded={notice}
          aria-controls={noticeId}
          data-evento="clique-comprar"
        >
          {content}
        </button>
      )}

      <div
        id={noticeId}
        role="status"
        aria-live="polite"
        className={`absolute left-1/2 z-20 w-[min(20rem,88vw)] -translate-x-1/2 rounded-2xl bg-white p-4 text-left text-sm text-tinta shadow-[0_24px_60px_-20px_rgba(15,61,62,.55)] ring-1 ring-tinta/10 transition-all duration-200 ${
          noticePlacement === "above" ? "bottom-full mb-3" : "top-full mt-3"
        } ${notice ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"}`}
      >
        {notice && (
          <>
            <p className="font-semibold">As vendas abrem em breve.</p>
            <p className="mt-1 text-tinta/70">
              Quer ser avisado quando abrir? Escreva para{" "}
              <a className="font-medium text-petroleo underline underline-offset-2" href={`mailto:${site.email}?subject=${encodeURIComponent(`Aviso de disponibilidade: ${productName}`)}`}>
                {site.email}
              </a>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
