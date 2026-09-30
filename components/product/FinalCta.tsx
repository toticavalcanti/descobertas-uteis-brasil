import ProductArt from "@/components/art/ProductArt";
import type { Product } from "@/lib/types";
import BuyButton from "./BuyButton";
import PriceBlock from "./PriceBlock";

export default function FinalCta({ product }: { product: Product }) {
  return (
    <section id="comprar" aria-labelledby="comprar-titulo" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[32px] bg-ipe text-tinta">
        <div aria-hidden className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="container-page relative grid items-center gap-8 py-14 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div>
            <h2 id="comprar-titulo" className="text-[2.4rem] font-bold leading-[1] tracking-[-0.035em] sm:text-6xl">
              Chega de sair com a roupa amassada.
            </h2>
            <p className="mt-5 max-w-md text-lg text-tinta/75">
              {product.shortName}: liga, aquece e desamassa no cabide. Pronto para a próxima reunião, viagem ou encontro.
            </p>
            <div id="final-cta" className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
              <PriceBlock price={product.price} tone="light" />
              <BuyButton checkoutUrl={product.checkoutUrl} productName={product.shortName} variant="dark" full className="sm:w-auto" />
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-[17rem] md:block">
            <ProductArt product={product} className="h-auto w-full -rotate-6 drop-shadow-[0_30px_30px_rgba(20,34,33,.25)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
