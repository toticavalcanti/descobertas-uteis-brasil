import Icon from "@/components/ui/Icon";
import { shortUrl } from "@/lib/products";
import type { Product } from "@/lib/types";
import CtaButton from "./CtaButton";
import YoutubeShort from "./YoutubeShort";

export default function VideoSection({ product }: { product: Product }) {
  return (
    <section id="video" aria-labelledby="video-titulo" className="scroll-mt-16 bg-nevoa py-16 sm:py-20 md:py-28">
      <div className="container-page grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
        <div className="min-w-0">
          <h2 id="video-titulo" className="section-title text-petroleo">{product.video.title}</h2>
          <p className="section-lead">{product.video.lead}</p>
          <div className="mt-8 hidden md:block">
            <CtaButton product={product} location="video" label={product.copy?.cta} />
          </div>
        </div>
        <div className="min-w-0">
          <YoutubeShort product={product} title={`${product.shortName} em uso`} />
          <a
            href={shortUrl(product.youtubeId)}
            target="_blank"
            rel="noopener"
            className="mx-auto mt-5 flex w-fit items-center gap-1.5 text-sm font-medium text-petroleo/75 underline-offset-4 hover:text-petroleo hover:underline"
          >
            Abrir no YouTube
            <Icon name="arrow" size={15} />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
        <div className="md:hidden">
          <CtaButton product={product} location="video" label={product.copy?.cta} full />
        </div>
      </div>
    </section>
  );
}
