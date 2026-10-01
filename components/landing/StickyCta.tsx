"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import CtaButton from "./CtaButton";

/** Barra fixa no celular: aparece quando o CTA do topo sai da tela e some perto do CTA final. */
export default function StickyCta({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const final = document.getElementById("final-cta");
    if (!hero) return;
    const state = { hero: true, final: false };
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.hero = e.isIntersecting || e.boundingClientRect.top > 0;
        if (e.target === final) state.final = e.isIntersecting;
      }
      setVisible(!state.hero && !state.final);
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
      <div className="container-page flex items-center gap-3 py-3">
        <p className="min-w-0 flex-1 truncate font-display text-[0.95rem] font-semibold text-petroleo">{product.shortName}</p>
        <CtaButton product={product} location="sticky" label="Quero conhecer" size="md" />
      </div>
    </div>
  );
}
