import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

/** Primeira dobra enxuta: a vitrine começa logo abaixo. */
export default function HubHero() {
  return (
    <section aria-labelledby="hub-titulo">
      <div className="container-page grid gap-6 pb-7 pt-7 md:grid-cols-[1.25fr_1fr] md:items-end md:gap-12 md:pb-14 md:pt-16">
        <h1
          id="hub-titulo"
          className="text-[2.7rem] font-bold leading-[0.98] tracking-[-0.04em] text-petroleo sm:text-6xl lg:text-[4.6rem]"
        >
          {site.tagline}
        </h1>
        <div className="md:pb-2">
          <p className="max-w-[26rem] text-lg leading-relaxed text-tinta/70">
            Encontramos produtos curiosos e mostramos em vídeo se eles realmente valem a sua atenção.
          </p>
          <a
            href="#descobertas"
            className="group mt-6 inline-flex min-h-[3.25rem] items-center gap-2.5 rounded-full bg-petroleo pl-6 pr-5 font-semibold text-white transition-[transform,background-color] duration-200 hover:bg-petroleo-700 active:scale-[0.97]"
          >
            Ver descobertas
            <Icon name="chevron" size={18} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
