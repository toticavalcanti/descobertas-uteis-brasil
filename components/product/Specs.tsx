import ProductArt from "@/components/art/ProductArt";
import Icon from "@/components/ui/Icon";
import type { Product } from "@/lib/types";

const cm = (n: number) => `${n.toLocaleString("pt-BR")} cm`;

export default function Specs({ product }: { product: Product }) {
  const { heightCm, widthCm, depthCm } = product.dimensions;
  return (
    <section id="medidas" aria-labelledby="medidas-titulo" className="py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        {/* desenho com cotas */}
        <figure className="relative rounded-[28px] bg-nevoa px-12 pb-10 pt-12 md:sticky md:top-24 md:self-start">
          <div className="relative mx-auto aspect-[240/345] w-full max-w-[13rem]">
            <ProductArt product={product} steam={false} className="h-full w-full" />
            {/* altura */}
            <div aria-hidden className="absolute -left-8 bottom-[4%] top-[6%] flex items-center">
              <span className="absolute inset-y-0 left-1/2 border-l-2 border-petroleo/70" />
              <span className="absolute left-1/2 top-0 w-3 -translate-x-1/2 border-t-2 border-petroleo/70" />
              <span className="absolute bottom-0 left-1/2 w-3 -translate-x-1/2 border-t-2 border-petroleo/70" />
              <span className="relative -translate-x-1/2 -rotate-90 whitespace-nowrap rounded-full bg-nevoa px-2 text-sm font-semibold text-petroleo">
                {cm(heightCm)}
              </span>
            </div>
            {/* largura */}
            <div aria-hidden className="absolute -bottom-9 left-[16.7%] right-[16.7%] flex justify-center">
              <span className="absolute inset-x-0 top-1/2 border-t-2 border-petroleo/70" />
              <span className="absolute left-0 top-1/2 h-3 -translate-y-1/2 border-l-2 border-petroleo/70" />
              <span className="absolute right-0 top-1/2 h-3 -translate-y-1/2 border-l-2 border-petroleo/70" />
              <span className="relative rounded-full bg-nevoa px-2 text-sm font-semibold text-petroleo">{cm(widthCm)}</span>
            </div>
          </div>
          <figcaption className="mt-12 text-center text-sm text-tinta/60">
            Altura {cm(heightCm)}, largura {cm(widthCm)} e profundidade {cm(depthCm)}.
          </figcaption>
        </figure>

        {/* ficha técnica */}
        <div>
          <h2 id="medidas-titulo" className="section-title text-petroleo">Características e medidas.</h2>
          <p className="section-lead">Tudo o que você precisa saber antes de comprar, sem letra miúda.</p>

          <dl className="mt-10 divide-y divide-tinta/10 border-y border-tinta/10">
            {product.specs.map((s) => (
              <div key={s.label} className="grid grid-cols-[8rem_1fr] gap-4 py-4 transition-colors hover:bg-nevoa/60 sm:grid-cols-[10rem_1fr] sm:px-2">
                <dt className="text-tinta/60">{s.label}</dt>
                <dd className="font-medium text-tinta">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-petroleo">O que vem na caixa</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.inBox.map((i) => (
                <li key={i} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-tinta/10">
                  <Icon name="check" size={18} strokeWidth={2.4} className="shrink-0 text-petroleo" />
                  <span className="text-[0.95rem]">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
