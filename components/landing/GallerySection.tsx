import type { ProductImage } from "@/lib/productImages";
import type { Product } from "@/lib/types";
import { altFromFile } from "@/lib/productImages";
import Gallery from "./Gallery";

export default function GallerySection({ product, images }: { product: Product; images: ProductImage[] }) {
  if (images.length === 0) return null;
  return (
    <section aria-labelledby="fotos-titulo" className="overflow-hidden bg-white py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="fotos-titulo" className="section-title text-petroleo">{product.copy?.galleryTitle ?? "Veja de perto."}</h2>
            <p className="section-lead">{product.copy?.galleryLead ?? `Fotos reais do ${product.shortName}. Toque em uma foto para ampliar.`}</p>
          </div>
          <p className="text-sm text-tinta/55 md:hidden">Deslize para ver mais</p>
        </div>
        <div className="mt-8 md:mt-10">
          <Gallery images={images.map(({ src, width, height, file }) => ({ src, width, height, alt: altFromFile(file) ?? undefined }))} alt={product.imageAlt} />
        </div>
      </div>
    </section>
  );
}
