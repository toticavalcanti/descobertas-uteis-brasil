import Link from "next/link";
import HangTag from "@/components/brand/HangTag";
import Icon from "@/components/ui/Icon";
import { discoveryNumber } from "@/lib/format";
import type { ProductImage } from "@/lib/productImages";
import type { HeroTheme, Product } from "@/lib/types";
import CtaButton from "./CtaButton";
import ProductPhoto from "./ProductPhoto";

const themes: Record<HeroTheme, { bg: string; title: string; sub: string; muted: string; hole: string; string: string; chip: string }> = {
  petroleo: {
    bg: "bg-petroleo",
    title: "text-white",
    sub: "text-vapor/85",
    muted: "text-vapor/70 hover:text-white",
    hole: "bg-petroleo",
    string: "bg-white/50",
    chip: "border-white/15 bg-white/[.06] text-vapor",
  },
  nevoa: {
    bg: "bg-nevoa",
    title: "text-petroleo",
    sub: "text-tinta/70",
    muted: "text-petroleo/70 hover:text-petroleo",
    hole: "bg-nevoa",
    string: "bg-petroleo/40",
    chip: "border-petroleo/15 bg-white/60 text-petroleo",
  },
  vapor: {
    bg: "bg-vapor",
    title: "text-petroleo",
    sub: "text-tinta/75",
    muted: "text-petroleo/70 hover:text-petroleo",
    hole: "bg-vapor",
    string: "bg-petroleo/40",
    chip: "border-petroleo/15 bg-white/50 text-petroleo",
  },
};

export default function LandingHero({ product, image }: { product: Product; image: ProductImage | null }) {
  const t = themes[product.theme];
  return (
    <section aria-labelledby="landing-titulo" className={`relative overflow-hidden ${t.bg}`}>
      <div className="container-page grid gap-x-12 pb-12 pt-5 md:grid-cols-[1.05fr_1fr] md:grid-rows-[auto_1fr] md:items-center md:pb-20 md:pt-12 lg:pb-24">
        {/* título */}
        <div className="min-w-0 md:col-start-1 md:row-start-1 md:self-end">
          <nav aria-label="Você está em" className="text-sm">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/#descobertas" className={`transition-colors ${t.muted}`}>Descobertas</Link></li>
              <li aria-hidden className={t.sub}>/</li>
              <li aria-current="page" className={`${t.sub}`}>Descoberta {discoveryNumber(product.number)}</li>
            </ol>
          </nav>
          <h1
            id="landing-titulo"
            className={`mt-4 text-[2.35rem] font-bold leading-[1.02] tracking-[-0.035em] min-[400px]:text-[2.6rem] sm:text-[3.4rem] lg:text-[4.1rem] ${t.title}`}
          >
            {product.hero.headline}
          </h1>
          <p className={`mt-4 max-w-[32rem] text-[1.06rem] leading-relaxed sm:text-lg ${t.sub}`}>{product.hero.subheadline}</p>
        </div>

        {/* foto real */}
        <div className="relative mx-auto mt-7 w-full max-w-[24rem] sm:max-w-[28rem] md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:max-w-none">
          <ProductPhoto
            image={image}
            alt={`${product.imageAlt}, foto do produto`}
            sizes="(min-width: 1024px) 34rem, (min-width: 768px) 45vw, 90vw"
            priority
            className="max-h-[min(26rem,36svh)] rounded-[28px] min-[400px]:max-h-[min(26rem,44svh)] shadow-[0_40px_70px_-40px_rgba(15,61,62,.7)] sm:max-h-[32rem] md:max-h-[36rem] md:rounded-[36px]"
          />
          {product.model && (
            <HangTag
              number={product.number}
              label={product.model}
              holeClassName={t.hole}
              stringClassName={t.string}
              rest={-6}
              className="absolute -top-1 right-2 w-[6.75rem] sm:right-4 sm:w-32"
            />
          )}
        </div>

        {/* ação */}
        <div className="mt-7 min-w-0 md:col-start-1 md:row-start-2 md:mt-8 md:self-start">
          <div id="hero-cta" className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaButton product={product} location="hero" label={product.copy?.heroCta} full className="sm:w-auto" />
            <a
              href="#video"
              className={`group inline-flex min-h-[3rem] items-center justify-center gap-3 rounded-full px-2 text-[0.95rem] font-semibold transition-colors sm:justify-start ${t.muted}`}
            >
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110 ${t.chip}`}>
                <Icon name="play" size={15} className="translate-x-px" />
              </span>
              Ver o vídeo
            </a>
          </div>
          <p className={`mt-4 flex items-center justify-center gap-2 text-sm sm:justify-start ${t.sub}`}>
            <Icon name="lock" size={16} />
            Você conhece e finaliza a compra na Kaiross.
          </p>
        </div>
      </div>
    </section>
  );
}
