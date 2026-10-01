import Icon from "@/components/ui/Icon";
import type { ProductImage } from "@/lib/productImages";
import type { Product } from "@/lib/types";
import ProductPhoto from "./ProductPhoto";

export default function SolutionSection({ product, image }: { product: Product; image: ProductImage | null }) {
  const flip = product.number % 2 === 0;
  return (
    <section aria-labelledby="solucao-titulo" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className={`min-w-0 ${flip ? "md:order-2" : ""}`}>
          <ProductPhoto
            image={image}
            alt={`${product.imageAlt}, detalhe do produto`}
            sizes="(min-width: 768px) 45vw, 92vw"
            className="mx-auto max-h-[30rem] rounded-[28px] ring-1 ring-tinta/10 md:max-h-[34rem]"
          />
        </div>
        <div className="min-w-0">
          <h2 id="solucao-titulo" className="section-title text-petroleo">{product.solution.title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-tinta/75">
            {product.solution.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Características">
            {product.features.map((f) => (
              <li key={f} className="inline-flex items-center gap-1.5 rounded-full bg-nevoa px-3.5 py-2 text-sm font-medium text-petroleo">
                <Icon name="check" size={15} strokeWidth={2.6} className="shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
