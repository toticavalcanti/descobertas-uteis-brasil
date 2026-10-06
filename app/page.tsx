import type { Metadata } from "next";
import ContactBand from "@/components/home/ContactBand";
import Discoveries from "@/components/home/Discoveries";
import HowWeChoose from "@/components/home/HowWeChoose";
import HubHero from "@/components/home/HubHero";
import { productPath, products } from "@/lib/products";
import { site } from "@/lib/site";

const description =
  "Descobertas Úteis Brasil mostra em vídeo produtos pequenos que resolvem o dia: Mini Mop Portátil Retrátil, Mini Aspirador Automotivo AJ-S17, Ferro de Passar a Vapor Portátil AJ-120 e Fonte Bebedouro Inox Flow para Pets.";

export const metadata: Metadata = {
  title: { absolute: `${site.name}: coisas pequenas que resolvem o dia` },
  description,
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: site.name, description },
  twitter: { title: site.name, description },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Descobertas que podem facilitar seu dia",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${site.url}${productPath(p)}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <HubHero />
      <Discoveries />
      <section aria-label="Critérios" className="bg-nevoa py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <HowWeChoose id="como-escolhemos" />
        </div>
      </section>
      <div className="pt-3 sm:pt-5">
        <ContactBand />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  );
}
