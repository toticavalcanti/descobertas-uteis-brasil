import type { Product } from "@/lib/types";

export default function ProblemSection({ product }: { product: Product }) {
  const { problem } = product;
  return (
    <section aria-labelledby="problema-titulo" className="py-16 sm:py-20 md:py-28">
      <div className="container-page grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="min-w-0">
          <h2 id="problema-titulo" className="section-title text-petroleo">{problem.title}</h2>
          <p className="mt-5 max-w-[30rem] font-display text-xl font-medium leading-snug text-tinta/80 sm:text-2xl">{problem.lead}</p>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-tinta/55">Você se identifica?</p>
          <ul className="mt-4 space-y-3">
            {problem.pains.map((pain) => (
              <li
                key={pain}
                className="rounded-[18px] border-l-4 border-ipe bg-white px-5 py-4 text-[1.02rem] leading-snug text-tinta shadow-[0_1px_0_rgba(15,61,62,.06)] ring-1 ring-tinta/5 sm:text-lg"
              >
                {pain}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-xl font-semibold text-petroleo sm:text-2xl">{problem.bridge}</p>
        </div>
      </div>
    </section>
  );
}
