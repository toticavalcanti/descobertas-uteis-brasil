"use client";

import { useEffect, useRef, useState } from "react";
import ProductArt from "@/components/art/ProductArt";
import Icon from "@/components/ui/Icon";
import type { Product } from "@/lib/types";

export default function UgcVideo({ product }: { product: Product }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(!product.video);
  const [progress, setProgress] = useState(0);

  // o erro de carregamento pode acontecer antes da hidratação
  useEffect(() => {
    const v = ref.current;
    if (v && (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE)) setFailed(true);
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => setFailed(true));
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section id="video" aria-labelledby="video-titulo" className="scroll-mt-16 bg-nevoa py-20 md:py-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1fr_1.05fr] md:gap-16">
        {/* texto */}
        <div>
          <h2 id="video-titulo" className="section-title text-petroleo">Veja funcionando antes de decidir.</h2>
          <p className="section-lead">
            Nada de foto perfeita de catálogo. Este é o <span className="whitespace-nowrap">{product.model}</span> numa casa de verdade, com uma camisa de verdade.
          </p>
          <div className="mt-8 rounded-[22px] bg-white p-6 ring-1 ring-tinta/5">
            <h3 className="font-display text-lg font-semibold text-petroleo">Repare no vídeo</h3>
            <ul className="mt-4 space-y-3.5">
              {product.videoNotes.map((n) => (
                <li key={n} className="flex gap-3 text-tinta/80">
                  <Icon name="check" size={20} strokeWidth={2.4} className="mt-0.5 shrink-0 text-petroleo" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* telefone */}
        <div className="relative mx-auto w-full max-w-[18.5rem] md:max-w-[21rem]">
          <div aria-hidden className="absolute -inset-6 -z-0 rounded-[3rem] bg-vapor/60 blur-2xl" />
          <div className="relative rounded-[2.4rem] bg-tinta p-2.5 shadow-[0_40px_80px_-30px_rgba(15,61,62,.7)]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.9rem] bg-petroleo">
              {!failed && product.video ? (
                <>
                  <video
                    ref={ref}
                    className="h-full w-full object-cover"
                    src={product.video.src}
                    poster={product.video.poster}
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onError={() => setFailed(true)}
                    onTimeUpdate={(e) => {
                      const v = e.currentTarget;
                      if (v.duration) setProgress(v.currentTime / v.duration);
                    }}
                    aria-label={`Vídeo de uma pessoa usando o ${product.shortName}`}
                  />
                  <button
                    type="button"
                    onClick={toggle}
                    aria-label={playing ? "Pausar vídeo" : "Assistir vídeo"}
                    className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${playing ? "bg-transparent" : "bg-tinta/25"}`}
                  >
                    <span
                      className={`inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-ipe text-tinta shadow-lg transition-all duration-300 ${
                        playing ? "scale-75 opacity-0" : "scale-100 opacity-100 hover:scale-105"
                      }`}
                    >
                      <Icon name="play" size={28} className="translate-x-0.5" />
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Ativar som" : "Tirar som"}
                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-tinta/55 text-white backdrop-blur transition-colors hover:bg-tinta/75"
                  >
                    <Icon name={muted ? "mute" : "sound"} size={19} />
                  </button>
                  <div aria-hidden className="absolute inset-x-4 bottom-4 h-1 overflow-hidden rounded-full bg-white/25">
                    <div className="h-full rounded-full bg-ipe" style={{ width: `${progress * 100}%` }} />
                  </div>
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-vapor">
                  <ProductArt product={product} className="h-1/2 w-auto" />
                  <p className="text-sm">O vídeo em uso real aparece aqui.</p>
                </div>
              )}
            </div>
          </div>
          <p className="relative mt-4 text-center text-sm text-tinta/60">Gravado por cliente, sem edição de estúdio.</p>
        </div>

      </div>
    </section>
  );
}
