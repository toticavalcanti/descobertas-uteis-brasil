import Icon from "@/components/ui/Icon";
import type { ProductImage } from "@/lib/productImages";
import type { Product } from "@/lib/types";
import ProductPhoto from "./ProductPhoto";

export default function BenefitsSection({ product, image }: { product: Product; image: ProductImage | null }) {
  const flip = product.number % 2 === 1;
  return (
    <section aria-labelledby="beneficios-titulo" className="py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="beneficios-titulo" className="section-title text-petroleo">Por que ele é útil.</h2>
          <p className="section-lead">O que faz do {product.shortName} uma descoberta para a rotina.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
          <div className={`min-w-0 lg:sticky lg:top-24 ${flip ? "lg:order-2" : ""}`}>
            <ProductPhoto
              image={image}
              alt={`${product.imageAlt}, vista de perto`}
              sizes="(min-width: 1024px) 26rem, 92vw"
              className="mx-auto max-h-[28rem] rounded-[28px] ring-1 ring-tinta/10 lg:max-h-[36rem]"
            />
          </div>
          <ul className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
            {product.benefits.map((b) => (
              <li
                key={b.title}
                className="group flex gap-4 rounded-[20px] border border-tinta/10 bg-white p-5 transition-colors duration-300 hover:border-petroleo/30 sm:block sm:p-6"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nevoa text-petroleo transition-colors duration-300 group-hover:bg-ipe group-hover:text-tinta">
                  <Icon name={b.icon} size={22} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-petroleo sm:mt-4">{b.title}</h3>
                  <p className="mt-1 leading-relaxed text-tinta/70">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
