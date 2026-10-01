import Icon from "@/components/ui/Icon";
import type { ProductImage } from "@/lib/productImages";
import type { Product } from "@/lib/types";
import CtaButton from "./CtaButton";
import ProductPhoto from "./ProductPhoto";

export default function SummaryCta({ product, image }: { product: Product; image: ProductImage | null }) {
  return (
    <section aria-labelledby="resumo-titulo" className="py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[28px] bg-petroleo text-white md:grid-cols-[0.9fr_1.1fr] md:rounded-[36px]">
          <div className="min-w-0 bg-white p-4 sm:p-6 md:p-8">
            <ProductPhoto
              image={image}
              alt={`${product.imageAlt}, visão geral`}
              sizes="(min-width: 768px) 40vw, 92vw"
              className="mx-auto max-h-[22rem] md:h-full md:max-h-none"
            />
          </div>
          <div className="min-w-0 p-6 sm:p-8 md:p-12">
            <h2 id="resumo-titulo" className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
              O essencial sobre o {product.shortName}.
            </h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-vapor/90">
                  <Icon name="check" size={18} strokeWidth={2.6} className="mt-0.5 shrink-0 text-ipe" />
                  <span className="min-w-0">{f}</span>
                </li>
              ))}
            </ul>

            {product.measures && (
              <div className="mt-7">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                  <Icon name="ruler" size={19} className="text-ipe" />
                  Medidas
                </h3>
                <dl className="mt-3 divide-y divide-white/10 rounded-2xl bg-white/[.06]">
                  {product.measures.map((m) => (
                    <div key={m.label} className="flex items-center justify-between gap-4 px-4 py-3">
                      <dt className="text-vapor/75">{m.label}</dt>
                      <dd className="font-semibold">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-8">
              <CtaButton product={product} location="summary" full className="sm:w-auto" />
              <p className="mt-4 text-sm text-vapor/70">Preço, pagamento e envio são informados na página da Kaiross.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
