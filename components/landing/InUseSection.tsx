import Image from "next/image";
import { altFromFile, type ProductImage } from "@/lib/productImages";
import type { Product } from "@/lib/types";

/**
 * "Produto em uso": mosaico leve (sem carrossel) com fotos reais.
 * As fotos aparecem inteiras (object-contain), sem cortar rostos nem o produto.
 */
export default function InUseSection({ product, items }: { product: Product; items: { image: ProductImage; caption: string }[] }) {
  if (!product.inUse || items.length === 0) return null;
  return (
    <section aria-labelledby="em-uso-titulo" className="py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="em-uso-titulo" className="section-title text-petroleo">{product.inUse.title}</h2>
          <p className="section-lead">{product.inUse.lead}</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map(({ image, caption }) => (
            <li key={image.file}>
              <figure className="group h-full overflow-hidden rounded-[20px] bg-white sm:rounded-[24px] ring-1 ring-tinta/10">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={image.src}
                    alt={altFromFile(image.file) ?? `${product.imageAlt} em uso: ${caption.toLowerCase()}`}
                    fill
                    sizes="(min-width: 1024px) 22rem, 46vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="px-3 py-3 font-display text-[0.92rem] leading-snug sm:px-5 sm:py-4 sm:text-[1.05rem] font-semibold text-petroleo">{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
