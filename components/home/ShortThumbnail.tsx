"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/brand/Logo";

/**
 * Thumbnail oficial do YouTube Short — implementação ÚNICA do projeto.
 *
 * Ordem de tentativa:
 *   1. oardefault.jpg     → formato original (vertical) do Short
 *   2. maxresdefault.jpg  → 1280×720
 *   3. sddefault.jpg      → 640×480
 *   4. hqdefault.jpg      → 480×360
 *
 * As versões 2–4 são horizontais, geradas pelo YouTube com o quadro vertical centralizado
 * entre faixas pretas. Só são usadas se a vertical não existir.
 */
const SOURCES = ["oardefault", "maxresdefault", "sddefault", "hqdefault"] as const;
const shortThumbUrl = (id: string, kind: (typeof SOURCES)[number]) => `https://i.ytimg.com/vi/${id}/${kind}.jpg`;

const FRAME_RATIO = 9 / 16;

type Props = { youtubeId: string; alt: string; priority?: boolean; className?: string };

export default function ShortThumbnail({ youtubeId, alt, priority = false, className = "" }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [index, setIndex] = useState(0);
  const [fit, setFit] = useState<"cover" | "contain" | null>(null);

  const next = () => {
    setFit(null);
    setIndex((i) => i + 1);
  };

  // Quando a versão não existe, o YouTube responde com uma imagem cinza de 120×90.
  const check = (img: HTMLImageElement) => {
    const { naturalWidth: w, naturalHeight: h } = img;
    if (w <= 120) return next();
    const ratio = w / h;
    if (ratio < 1) {
      // vertical: preenche a moldura se a proporção for praticamente 9:16; senão mostra inteira
      setFit(Math.abs(ratio - FRAME_RATIO) < 0.03 ? "cover" : "contain");
    } else {
      // horizontal (reserva): o recorte central remove apenas as faixas pretas laterais
      setFit("cover");
    }
  };

  // cobre o caso de a imagem terminar de carregar antes da hidratação
  useEffect(() => {
    const img = ref.current;
    if (img?.complete) check(img);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const kind = SOURCES[index];

  return (
    <div className={`absolute inset-0 overflow-hidden bg-petroleo ${className}`}>
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <LogoMark className="h-14 w-14 text-vapor/25" />
      </div>
      {kind && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          key={kind}
          src={shortThumbUrl(youtubeId, kind)}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={(e) => check(e.currentTarget)}
          onError={next}
          data-thumb={kind}
          className={`absolute inset-0 h-full w-full object-center transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${
            fit === "contain" ? "object-contain" : "object-cover"
          } ${fit ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
