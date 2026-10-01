"use client";

import { useState } from "react";
import ShortThumbnail from "@/components/home/ShortThumbnail";
import Icon from "@/components/ui/Icon";
import { productParams, track } from "@/lib/analytics";
import type { Product } from "@/lib/types";

/**
 * Vídeo leve: mostra a thumbnail oficial do Short e só carrega o player do YouTube no clique.
 */
export default function YoutubeShort({
  product,
  title,
}: {
  product: Pick<Product, "analyticsId" | "name" | "slug" | "youtubeId">;
  title: string;
}) {
  const { youtubeId } = product;
  const [playing, setPlaying] = useState(false);

  const start = () => {
    if (playing) return;
    setPlaying(true);
    track("video_start", productParams(product));
  };
  return (
    <div className="relative mx-auto w-full max-w-[17.5rem] min-[400px]:max-w-[19rem] md:max-w-[21rem]">
      <div aria-hidden className="absolute -inset-5 rounded-[3rem] bg-vapor/70 blur-2xl" />
      <div className="relative rounded-[2.3rem] bg-tinta p-2 shadow-[0_40px_80px_-30px_rgba(15,61,62,.7)]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.9rem] bg-petroleo">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button type="button" onClick={start} className="group absolute inset-0 block" aria-label={`Assistir: ${title}`}>
              <ShortThumbnail youtubeId={youtubeId} alt={`Thumbnail do vídeo: ${title}`} />
              <span aria-hidden className="absolute inset-0 bg-tinta/15 transition-colors duration-300 group-hover:bg-tinta/5" />
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 inline-flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ipe text-tinta shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
              >
                <Icon name="play" size={28} className="translate-x-0.5" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
