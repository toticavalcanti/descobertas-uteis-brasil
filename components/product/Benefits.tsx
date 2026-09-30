import Icon from "@/components/ui/Icon";
import type { Product } from "@/lib/types";

export default function Benefits({ product }: { product: Product }) {
  const [lead, ...rest] = product.benefits;
  return (
    <section aria-labelledby="beneficios-titulo" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="beneficios-titulo" className="section-title text-petroleo">Feito para a pressa do dia a dia.</h2>
          <p className="section-lead">O que muda na sua rotina quando passar roupa deixa de ser uma tarefa.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {lead && (
            <article className="relative flex min-h-[19rem] flex-col justify-end overflow-hidden rounded-[28px] bg-petroleo p-7 text-white md:row-span-2 md:p-9">
              <Icon
                name={lead.icon}
                size={220}
                strokeWidth={0.7}
                className="pointer-events-none absolute -right-8 -top-6 text-vapor/15"
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ipe text-tinta">
                <Icon name={lead.icon} size={26} />
              </span>
              <h3 className="mt-6 text-3xl font-bold tracking-[-0.03em] md:text-4xl">{lead.title}</h3>
              <p className="mt-3 max-w-sm text-[1.05rem] leading-relaxed text-vapor/85">{lead.text}</p>
            </article>
          )}
          {rest.map((b) => (
            <article
              key={b.title}
              className="group flex gap-4 rounded-[20px] border border-tinta/10 bg-white p-5 transition-colors duration-300 hover:border-petroleo/30 md:block md:p-6"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nevoa text-petroleo transition-colors duration-300 group-hover:bg-ipe group-hover:text-tinta">
                <Icon name={b.icon} size={22} />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-petroleo md:mt-5 md:text-xl">{b.title}</h3>
                <p className="mt-1.5 leading-relaxed text-tinta/70 md:mt-2">{b.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
