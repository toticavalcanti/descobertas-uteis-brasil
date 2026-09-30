import Link from "next/link";
import ProductArt from "@/components/art/ProductArt";
import HangTag from "@/components/brand/HangTag";
import Icon from "@/components/ui/Icon";
import type { Product } from "@/lib/types";
import BuyButton from "./BuyButton";
import PriceBlock from "./PriceBlock";

export default function ProductHero({ product }: { product: Product }) {
  return (
    <section aria-labelledby="produto-titulo" className="relative overflow-hidden bg-petroleo text-white">
      {/* brilho de vapor ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(207,227,224,.18),transparent_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vapor/30 to-transparent"
      />

      <div className="container-page relative grid gap-x-12 pb-14 pt-6 md:grid-cols-[1.1fr_1fr] md:grid-rows-[auto_1fr] md:pb-24 md:pt-14">
        {/* bloco 1: título */}
        <div className="md:col-start-1 md:row-start-1">
          <nav aria-label="Você está em" className="text-sm text-vapor/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/#descobertas" className="hover:text-white">Descobertas</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-vapor">{product.category}</li>
            </ol>
          </nav>
          <h1
            id="produto-titulo"
            className="mt-5 text-[2.55rem] font-bold leading-[1] tracking-[-0.035em] sm:text-6xl md:text-[4.15rem]"
          >
            {product.headline}
          </h1>
          <p className="mt-5 max-w-[34rem] text-[1.075rem] leading-relaxed text-vapor/85 md:text-lg">
            {product.subheadline}
          </p>
        </div>

        {/* arte: no celular fica entre o título e a compra */}
        <div className="relative mx-auto mt-6 w-full max-w-[19rem] sm:max-w-[22rem] md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:max-w-[30rem] md:self-center">
          <div className="relative aspect-[5/6]">
            <div
              aria-hidden
              className="absolute inset-[6%] rounded-full border border-vapor/15 bg-[radial-gradient(circle_at_50%_38%,rgba(207,227,224,.28),rgba(207,227,224,0)_68%)]"
            />
            <ProductArt product={product} priority className="relative h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,.25)]" />
            <HangTag
              number={product.number}
              label={product.model}
              rest={-7}
              className="absolute -top-2 right-0 w-[7.5rem] sm:w-36 md:right-2"
            />
          </div>
        </div>

        {/* bloco 2: compra */}
        <div className="mt-2 md:col-start-1 md:row-start-2 md:mt-8">
          <ul className="flex flex-wrap gap-2" aria-label="Destaques">
            {product.highlights.map((h) => (
              <li key={h} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-sm">
                <Icon name="check" size={16} className="text-ipe" strokeWidth={2.4} />
                {h}
              </li>
            ))}
          </ul>

          <div id="hero-cta" className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
            <PriceBlock price={product.price} tone="dark" />
            <BuyButton checkoutUrl={product.checkoutUrl} productName={product.shortName} full className="sm:w-auto" />
          </div>

          <a
            href="#video"
            className="group mt-6 inline-flex items-center gap-3 rounded-full py-1 pr-2 text-[0.95rem] font-medium text-vapor transition-colors hover:text-white"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
              <Icon name="play" size={15} className="translate-x-px" />
            </span>
            Ver o ferro funcionando
          </a>
        </div>
      </div>
    </section>
  );
}
