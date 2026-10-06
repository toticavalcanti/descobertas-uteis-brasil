"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

type Img = { src: string; width: number; height: number; alt?: string };

/** Galeria das fotos reais: carrossel no celular, grade no desktop, e ampliação ao tocar. */
export default function Gallery({ images, alt }: { images: Img[]; alt: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  if (images.length === 0) return null;
  const current = open !== null ? images[open] : null;

  return (
    <>
      <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {images.map((img, i) => (
          <li key={img.src} className="w-[72%] shrink-0 snap-center min-[480px]:w-[46%] md:w-auto">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-[22px] bg-white ring-1 ring-tinta/10 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(15,61,62,.6)]"
              aria-label={`Ampliar foto ${i + 1} de ${images.length}`}
            >
              <Image
                src={img.src}
                alt={img.alt ?? `${alt}, foto ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 18rem, (min-width: 768px) 30vw, 72vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span aria-hidden className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-petroleo opacity-90 shadow-sm transition-opacity md:opacity-0 md:group-hover:opacity-100">
                <Icon name="expand" size={17} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${open + 1} de ${images.length}`}
          className="fixed inset-0 z-50 flex flex-col bg-tinta/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white" style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}>
            <span className="text-sm text-white/70">{open + 1} / {images.length}</span>
            <button type="button" onClick={close} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Fechar">
              <Icon name="close" size={22} />
            </button>
          </div>
          <div className="relative min-h-0 flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt ?? `${alt}, foto ${open + 1}`} fill sizes="100vw" className="object-contain px-3" />
          </div>
          {images.length > 1 && (
            <div className="flex justify-center gap-3 py-4" style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }} onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={() => go(-1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Foto anterior">
                <Icon name="chevronLeft" size={22} />
              </button>
              <button type="button" onClick={() => go(1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Próxima foto">
                <Icon name="chevronRight" size={22} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
