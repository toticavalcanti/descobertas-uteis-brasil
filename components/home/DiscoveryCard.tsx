import Link from "next/link";
import ProductPhoto from "@/components/landing/ProductPhoto";
import Icon from "@/components/ui/Icon";
import { discoveryNumber } from "@/lib/format";
import type { ProductImage } from "@/lib/productImages";
import { productPath } from "@/lib/products";
import type { Product } from "@/lib/types";

const tilts = ["-rotate-2", "rotate-[1.5deg]", "-rotate-1"];

export default function DiscoveryCard({ product, image, index }: { product: Product; image: ProductImage | null; index: number }) {
  const label = `Descoberta ${discoveryNumber(product.number)}`;
  return (
    <Link
      href={productPath(product)}
      data-evento="clique-descoberta"
      data-descoberta={product.number}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-tinta/10 shadow-[0_2px_4px_-2px_rgba(15,61,62,.08)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_55px_-30px_rgba(15,61,62,.6)] active:translate-y-0 active:scale-[.985] motion-reduce:transform-none"
    >
      {/* foto real do produto */}
      <div className="relative overflow-hidden bg-white">
        <ProductPhoto
          image={image}
          alt={`${product.imageAlt}, foto do produto`}
          sizes="(min-width: 1024px) 24rem, (min-width: 768px) 45vw, 92vw"
          priority={index === 0}
          frame="portrait"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span
          aria-hidden
          className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-tinta/85 py-1.5 pl-1.5 pr-3.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ipe text-tinta">
            <Icon name="play" size={11} className="translate-x-px" />
          </span>
          Com vídeo
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 xl:px-5 xl:pb-5">
        <span
          className={`inline-flex items-center gap-2 self-start rounded-[8px] bg-ipe px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-tinta transition-transform duration-300 group-hover:rotate-0 ${tilts[index % tilts.length]}`}
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" />
          {label}
        </span>
        <h3 className="mt-4 font-display text-[1.3rem] font-bold leading-tight tracking-[-0.025em] text-petroleo sm:text-[1.4rem]">{product.name}</h3>
        <p className="mt-2 flex-1 text-[1.02rem] leading-snug text-tinta/70">{product.hub.benefit}</p>
        <span className="mt-6 flex items-center justify-between gap-3 whitespace-nowrap rounded-full bg-petroleo px-5 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.1em] xl:px-4 xl:text-[0.78rem] xl:tracking-[0.06em] text-white transition-colors duration-300 group-hover:bg-ipe group-hover:text-tinta group-active:bg-ipe group-active:text-tinta">
          Ver a descoberta
          <Icon name="arrow" size={18} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
