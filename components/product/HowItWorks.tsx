import type { Product } from "@/lib/types";

export default function HowItWorks({ product }: { product: Product }) {
  return (
    <section aria-labelledby="praticidade-titulo" className="bg-nevoa py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="praticidade-titulo" className="section-title text-petroleo">Três passos. Nenhum preparo.</h2>
          <p className="section-lead">Do armário para a rua sem montar tábua, sem esperar o ferro grande esquentar.</p>
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <span aria-hidden className="absolute left-7 right-7 top-7 hidden border-t-2 border-dashed border-petroleo/20 md:block" />
          {product.steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 md:block">
              <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ipe font-display text-2xl font-bold text-tinta ring-[6px] ring-nevoa">
                {i + 1}
              </span>
              <div className="md:mt-6">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-petroleo">{s.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-tinta/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* comparação */}
        <div className="mt-16 md:mt-20">
          <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-petroleo">Ferro comum ou {product.model}?</h3>
          <div role="table" aria-label={`Comparação entre ferro comum e ${product.model}`} className="mt-6 overflow-hidden rounded-[22px] bg-white ring-1 ring-tinta/5">
            <div role="row" className="grid grid-cols-2 bg-white text-sm font-semibold md:grid-cols-[1.2fr_1fr_1fr]">
              <span role="columnheader" className="hidden px-6 py-4 text-tinta/50 md:block">
                Na prática
              </span>
              <span role="columnheader" className="px-5 py-4 text-tinta/60 md:px-6">Ferro comum</span>
              <span role="columnheader" className="bg-petroleo px-5 py-4 text-white md:px-6">{product.model}</span>
            </div>
            {product.comparison.map((row) => (
              <div role="row" key={row.label} className="grid grid-cols-2 border-t border-tinta/10 md:grid-cols-[1.2fr_1fr_1fr]">
                <span role="rowheader" className="col-span-2 px-5 pt-4 text-sm font-semibold text-tinta md:col-span-1 md:px-6 md:py-4 md:text-base">
                  {row.label}
                </span>
                <span role="cell" className="px-5 pb-4 pt-1.5 text-tinta/60 md:px-6 md:py-4">{row.common}</span>
                <span role="cell" className="bg-petroleo/[.04] px-5 pb-4 pt-1.5 font-semibold text-petroleo md:bg-petroleo/[.06] md:px-6 md:py-4">
                  {row.product}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
