import { brl } from "@/lib/format";
import type { ProductImage } from "@/lib/productImages";
import type { Product } from "@/lib/types";
import CtaButton from "./CtaButton";
import ProductPhoto from "./ProductPhoto";

export default function FinalCta({ product, image }: { product: Product; image: ProductImage | null }) {
  return (
    <section aria-labelledby="final-titulo" className="px-3 pb-3 pt-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[28px] bg-ipe text-tinta sm:rounded-[32px]">
        <div className="container-page grid items-center gap-8 py-12 sm:py-14 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div className="min-w-0">
            <h2 id="final-titulo" className="text-[2.1rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {product.finalCta.title}
            </h2>
            <p className="mt-4 max-w-md text-lg text-tinta/75">{product.finalCta.text}</p>
            {product.price !== undefined && (
              <p className="mt-6 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{brl(product.price)}</p>
            )}
            <div id="final-cta" className="mt-8">
              <CtaButton product={product} location="final" label={product.copy?.cta} variant="dark" full className="sm:w-auto" />
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-[18rem] md:block">
            <ProductPhoto
              image={image}
              alt={`${product.imageAlt}, foto do produto`}
              sizes="18rem"
              className="rotate-[-3deg] rounded-[28px] shadow-[0_30px_50px_-25px_rgba(20,34,33,.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
