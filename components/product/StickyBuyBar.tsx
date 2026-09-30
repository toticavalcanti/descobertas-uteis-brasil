"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import { brl } from "@/lib/format";
import BuyButton from "./BuyButton";

/** Barra de compra fixa no celular: aparece quando o CTA do topo sai da tela. */
export default function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const final = document.getElementById("final-cta");
    if (!hero) return;
    const state = { heroVisible: true, finalVisible: false };
    const update = () => setVisible(!state.heroVisible && !state.finalVisible);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.heroVisible = e.isIntersecting || e.boundingClientRect.top > 0;
        if (e.target === final) state.finalVisible = e.isIntersecting;
      }
      update();
    });
    io.observe(hero);
    if (final) io.observe(final);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-tinta/10 bg-papel/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="container-page flex items-center justify-between gap-3 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm text-tinta/60">{product.shortName}</p>
          {product.price && (
            <p className="font-display text-xl font-bold leading-tight tracking-[-0.02em] text-tinta">{brl(product.price.current)}</p>
          )}
        </div>
        <BuyButton
          checkoutUrl={product.checkoutUrl}
          productName={product.shortName}
          size="md"
          noticePlacement="above"
          className="[&_[role=status]]:left-auto [&_[role=status]]:right-0 [&_[role=status]]:translate-x-0"
        />
      </div>
    </div>
  );
}
