"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/brand/Logo";
import { thumbUrls } from "@/lib/products";

type Props = { youtubeId: string; alt: string; priority?: boolean; className?: string };

/**
 * Thumbnail oficial do Short na maior resolução disponível:
 * maxresdefault → sddefault → hqdefault.
 *
 * O YouTube gera essas imagens em formato horizontal, com o quadro vertical do Short
 * centralizado. Com `object-cover` centralizado dentro da moldura 9:16, aparece exatamente
 * o quadro do vídeo, na resolução original, sem ampliação extra e sem deformação.
 */
export default function ShortThumbnail({ youtubeId, alt, priority = false, className = "" }: Props) {
  const candidates = thumbUrls(youtubeId);
  const ref = useRef<HTMLImageElement>(null);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const next = () => setIndex((i) => i + 1);

  // quando uma versão não existe, o YouTube devolve uma imagem cinza de 120×90
  const check = (img: HTMLImageElement) => {
    if (img.naturalWidth <= 120) next();
    else setLoaded(true);
  };

  // cobre o caso de a imagem terminar de carregar antes da hidratação
  useEffect(() => {
    const img = ref.current;
    if (img?.complete) check(img);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const src = candidates[index];

  return (
    <div className={`absolute inset-0 overflow-hidden bg-petroleo ${className}`}>
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <LogoMark className="h-14 w-14 text-vapor/25" />
      </div>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          key={src}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={(e) => check(e.currentTarget)}
          onError={next}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
