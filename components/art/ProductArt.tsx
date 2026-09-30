import Image from "next/image";
import type { ComponentType } from "react";
import type { Product } from "@/lib/types";
import SteamerArt from "./SteamerArt";

/** Ilustrações por produto, usadas quando ainda não há foto. */
const illustrations: Record<string, ComponentType<{ className?: string; steam?: boolean; title?: string }>> = {
  "ferro-a-vapor-aj-120": SteamerArt,
};

type Props = {
  product: Product;
  className?: string;
  steam?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function ProductArt({ product, className = "", steam = true, priority, sizes = "(min-width: 768px) 40vw, 80vw" }: Props) {
  if (product.image) {
    return (
      <Image
        src={product.image.src}
        alt={product.image.alt}
        width={product.image.width}
        height={product.image.height}
        priority={priority}
        sizes={sizes}
        className={`object-contain ${className}`}
      />
    );
  }
  const Art = illustrations[product.slug];
  if (!Art) return null;
  return <Art className={className} steam={steam} title={product.name} />;
}
