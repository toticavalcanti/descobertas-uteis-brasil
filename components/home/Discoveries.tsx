import { getImageSet } from "@/lib/productImages";
import { products } from "@/lib/products";
import DiscoveryCard from "./DiscoveryCard";

export default function Discoveries() {
  return (
    <section id="descobertas" aria-labelledby="descobertas-titulo" className="scroll-mt-20 pb-20 md:pb-28">
      <div className="container-page">
        <div className="border-t border-tinta/10 pt-8 md:pt-14">
          <h2 id="descobertas-titulo" className="section-title text-petroleo">Descobertas que podem facilitar seu dia.</h2>
          <p className="section-lead">Encontramos coisas pequenas que resolvem problemas do cotidiano. Veja o que descobrimos.</p>
        </div>

        <ul className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {products.map((product, i) => (
            <li
              key={product.slug}
              // número ímpar de cards: o último fica centralizado nas 2 colunas
              className={products.length % 2 === 1 && i === products.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] xl:col-span-1 xl:w-auto" : ""}
            >
              <DiscoveryCard product={product} image={getImageSet(product).hero} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
