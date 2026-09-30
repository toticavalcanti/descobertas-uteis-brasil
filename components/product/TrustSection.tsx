import HowWeChoose from "@/components/home/HowWeChoose";
import Icon from "@/components/ui/Icon";
import type { Product } from "@/lib/types";
import { site } from "@/lib/site";

export default function TrustSection({ product }: { product: Product }) {
  return (
    <section aria-label="Por que confiar" className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <HowWeChoose tone="tinted" title="Por que ele virou uma descoberta." />

        <div className="flex flex-col gap-4 md:pt-2">
          <div className="rounded-[28px] bg-petroleo p-7 text-white md:p-8">
            <div className="flex items-center gap-3">
              <Icon name="info" size={22} className="text-ipe" />
              <h3 className="font-display text-xl font-semibold">O que ele não faz</h3>
            </div>
            <p className="mt-3 text-vapor/80">Preferimos que você saiba agora do que se decepcione depois.</p>
            <ul className="mt-5 space-y-4">
              {product.limitations.map((l) => (
                <li key={l} className="border-l-2 border-ipe/70 pl-4 leading-relaxed text-vapor/95">{l}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] bg-nevoa p-6">
              <Icon name="shield" size={24} className="text-petroleo" />
              <h3 className="mt-4 font-display text-lg font-semibold text-petroleo">7 dias para desistir</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-tinta/70">
                Toda compra pela internet tem esse prazo, pelo Código de Defesa do Consumidor.
              </p>
            </div>
            <div className="rounded-[20px] bg-nevoa p-6">
              <Icon name="mail" size={24} className="text-petroleo" />
              <h3 className="mt-4 font-display text-lg font-semibold text-petroleo">Gente de verdade</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-tinta/70">
                Dúvida antes ou depois da compra? Escreva para{" "}
                <a href={`mailto:${site.email}`} className="break-all font-medium text-petroleo underline underline-offset-2">{site.email}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
