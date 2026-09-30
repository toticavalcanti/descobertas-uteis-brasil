import Link from "next/link";
import ProductArt from "@/components/art/ProductArt";
import PriceBlock from "@/components/product/PriceBlock";
import Icon from "@/components/ui/Icon";
import { discoveryNumber } from "@/lib/format";
import { products, upcoming, productPath } from "@/lib/products";

export default function Discoveries() {
  const [featured, ...others] = products;
  return (
    <section id="descobertas" aria-labelledby="descobertas-titulo" className="scroll-mt-20 bg-nevoa py-20 md:py-28">
      <div className="container-page">
        <h2 id="descobertas-titulo" className="section-title text-petroleo">As descobertas.</h2>
        <p className="section-lead">Cada uma tem uma página própria com vídeo em uso, medidas e o que ela não faz.</p>

        {featured && (
          <Link
            href={productPath(featured)}
            className="group mt-12 grid overflow-hidden rounded-[32px] bg-petroleo text-white md:grid-cols-[1fr_1.1fr]"
          >
            <div className="relative flex items-center justify-center bg-petroleo-700/60 px-10 pt-10 md:py-12">
              <div className="aspect-[5/6] w-full max-w-[14rem] transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-2 md:max-w-[17rem]">
                <ProductArt product={featured} className="h-full w-full" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="text-sm font-medium text-ipe">Descoberta {discoveryNumber(featured.number)}, {featured.category.toLowerCase()}</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">{featured.name}</h3>
              <p className="mt-3 max-w-md text-lg text-vapor/80">{featured.tagline}</p>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                <PriceBlock price={featured.price} tone="dark" size="md" />
                <span className="inline-flex min-h-[3rem] items-center gap-2 rounded-full bg-ipe px-6 font-semibold text-tinta transition-transform duration-300 group-hover:translate-x-1">
                  Ver o produto
                  <Icon name="arrow" size={18} strokeWidth={2.2} />
                </span>
              </div>
            </div>
          </Link>
        )}

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={productPath(p)} className="group flex h-full items-center gap-5 rounded-[24px] bg-white p-5 ring-1 ring-tinta/10 transition-colors hover:ring-petroleo/30">
                <div className="h-28 w-24 shrink-0"><ProductArt product={p} steam={false} className="h-full w-full" /></div>
                <div>
                  <p className="text-sm text-tinta/60">Descoberta {discoveryNumber(p.number)}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-petroleo">{p.shortName}</h3>
                  <p className="mt-1 text-tinta/70">{p.tagline}</p>
                </div>
              </Link>
            </li>
          ))}
          {upcoming.map((u) => (
            <li key={u.number} className="flex min-h-[9rem] flex-col justify-center rounded-[24px] border-2 border-dashed border-petroleo/20 p-6">
              <p className="text-sm text-tinta/55">Descoberta {discoveryNumber(u.number)}, {u.category.toLowerCase()}</p>
              <p className="mt-1 font-display text-xl font-semibold text-petroleo">Em breve</p>
              <p className="mt-1 text-tinta/60">{u.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
