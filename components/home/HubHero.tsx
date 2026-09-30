import Link from "next/link";
import HangTag from "@/components/brand/HangTag";
import { products, upcoming, productPath } from "@/lib/products";
import { site } from "@/lib/site";

/** Abertura do hub: um varal com as etiquetas das descobertas. */
export default function HubHero() {
  const live = products.slice(0, 3);
  const slots = [
    ...live.map((p) => ({ key: p.slug, number: p.number, label: p.model, href: productPath(p), live: true })),
    ...upcoming.map((u) => ({ key: `u${u.number}`, number: u.number, label: "Em breve", href: null as string | null, live: false })),
  ].slice(0, 3);
  const drops = ["mt-5", "mt-10", "mt-3"];
  const tilts = [-6, 4, -3];

  return (
    <section aria-labelledby="hub-titulo" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-10 pb-16 pt-10 md:grid-cols-[1.1fr_1fr] md:gap-8 md:pb-28 md:pt-20">
        <div>
          <h1 id="hub-titulo" className="text-[2.9rem] font-bold leading-[0.98] tracking-[-0.04em] text-petroleo sm:text-7xl md:text-[5.2rem]">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-[31rem] text-lg leading-relaxed text-tinta/70">
            Encontramos produtos úteis, conferimos se cumprem o que prometem e mostramos com honestidade. Poucas descobertas, escolhidas com cuidado.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#descobertas"
              className="inline-flex min-h-[3.25rem] items-center rounded-full bg-petroleo px-7 font-semibold text-white transition-[transform,background-color] duration-200 hover:bg-petroleo-700 active:scale-[0.97]"
            >
              Ver as descobertas
            </Link>
            <Link
              href="#como-escolhemos"
              className="inline-flex min-h-[3.25rem] items-center rounded-full px-5 font-semibold text-petroleo underline-offset-4 hover:underline"
            >
              Como escolhemos
            </Link>
          </div>
        </div>

        {/* varal */}
        <div className="relative h-[15rem] sm:h-[18rem] md:h-[21rem]">
          <svg aria-hidden viewBox="0 0 400 60" preserveAspectRatio="none" className="absolute inset-x-0 top-4 h-14 w-full text-petroleo/50">
            <path d="M0 8 Q200 62 400 8" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <ul className="absolute inset-x-[4%] top-4 grid grid-cols-3 gap-3 sm:gap-5">
            {slots.map((s, i) => {
              const tag = (
                <HangTag
                  number={s.number}
                  label={s.label}
                  variant={s.live ? "ipe" : i === 1 ? "paper" : "outline"}
                  holeClassName="bg-papel"
                  stringClassName="bg-petroleo/50"
                  rest={tilts[i]}
                  size="lg"
                  className={`${drops[i]} transition-transform duration-300 ${s.live ? "hover:!rotate-0" : ""}`}
                />
              );
              return (
                <li key={s.key} className="flex justify-center">
                  {s.href ? (
                    <Link href={s.href} aria-label={`Ver a descoberta ${s.number}`} className="block w-full max-w-[12rem] rounded-2xl">
                      {tag}
                    </Link>
                  ) : (
                    <div className="w-full max-w-[12rem] opacity-80">{tag}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
