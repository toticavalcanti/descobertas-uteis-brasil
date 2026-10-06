"use client";

import Icon from "@/components/ui/Icon";
import { productParams, track, type CtaLocation } from "@/lib/analytics";
import type { Product } from "@/lib/types";

type Props = {
  /** O link vem sempre de product.affiliateUrl (lib/products.ts). */
  product: Pick<Product, "analyticsId" | "name" | "shortName" | "slug" | "affiliateUrl" | "price">;
  location: CtaLocation;
  label?: string;
  variant?: "primary" | "dark";
  size?: "md" | "lg";
  full?: boolean;
  className?: string;
};

/** CTA de compra: abre o checkout da Kaiross em nova aba e registra um affiliate_click. */
export default function CtaButton({
  product,
  location,
  label: labelProp,
  variant = "primary",
  size = "lg",
  full = false,
  className = "",
}: Props) {
  const label = labelProp || "Quero conhecer o produto";
  const skin =
    variant === "primary"
      ? "bg-ipe text-tinta shadow-[0_14px_30px_-14px_rgba(217,157,0,.9)] hover:bg-ipe-400"
      : "bg-tinta text-white shadow-[0_14px_30px_-14px_rgba(20,34,33,.8)] hover:bg-petroleo";
  const dims =
    size === "lg"
      ? "min-h-[3.6rem] gap-3 px-6 text-[0.9rem] sm:px-8 sm:text-[0.95rem]"
      : "min-h-[2.9rem] gap-2 px-4 text-[0.78rem] sm:px-5";
  const classes = `group inline-flex items-center justify-center rounded-full text-center font-bold uppercase leading-tight tracking-[0.06em] transition-[transform,background-color,box-shadow] duration-200 active:scale-[0.97] ${skin} ${dims} ${full ? "w-full" : ""}`;

  return (
    <div className={`relative ${full ? "w-full" : "inline-block max-w-full"} ${className}`}>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={classes}
        data-evento="clique-kaiross"
        data-posicao={location}
        aria-label={`${label}: ${product.shortName} (abre o checkout da Kaiross em nova aba)`}
        // único ponto de disparo: um clique = um affiliate_click; o link abre normalmente
        onClick={() =>
          track("affiliate_click", {
            ...productParams(product),
            cta_location: location,
            destination: "kaiross",
            ...(product.price !== undefined ? { price: product.price, value: product.price, currency: "BRL" } : {}),
          })
        }
      >
        <span>{label}</span>
        <Icon name="arrow" size={size === "lg" ? 20 : 16} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
