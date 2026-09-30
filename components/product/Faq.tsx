import Icon from "@/components/ui/Icon";
import type { Product } from "@/lib/types";

export default function Faq({ product }: { product: Product }) {
  return (
    <section aria-labelledby="faq-titulo" className="py-20 md:py-28">
      <div className="container-page grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <div>
          <h2 id="faq-titulo" className="section-title text-petroleo">Perguntas frequentes.</h2>
          <p className="section-lead">Não achou sua dúvida? A gente responde por e-mail.</p>
        </div>
        <div className="divide-y divide-tinta/10 border-y border-tinta/10">
          {product.faq.map((f) => (
            <details key={f.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-petroleo [&::-webkit-details-marker]:hidden">
                {f.question}
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-nevoa transition-[transform,background-color] duration-300 group-open:rotate-180 group-open:bg-ipe">
                  <Icon name="chevron" size={18} strokeWidth={2.2} />
                </span>
              </summary>
              <p className="max-w-[40rem] pb-6 pr-12 leading-relaxed text-tinta/75">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
