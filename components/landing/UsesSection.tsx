import Icon from "@/components/ui/Icon";
import type { Product } from "@/lib/types";

export default function UsesSection({ product }: { product: Product }) {
  if (!product.uses?.length) return null;
  return (
    <section aria-labelledby="usos-titulo" className="bg-nevoa py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="usos-titulo" className="section-title text-petroleo">Onde ele faz sentido.</h2>
          <p className="section-lead">Situações do dia a dia em que ter um {product.shortName} por perto ajuda.</p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {product.uses.map((u) => (
            <li key={u.title} className="flex gap-4 rounded-[22px] bg-white p-5 sm:flex-col sm:p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-petroleo text-vapor">
                <Icon name={u.icon} size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-petroleo">{u.title}</h3>
                <p className="mt-1 leading-relaxed text-tinta/70">{u.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
