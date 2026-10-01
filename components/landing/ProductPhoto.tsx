import Image from "next/image";
import { LogoMark } from "@/components/brand/Logo";
import type { ProductImage } from "@/lib/productImages";

type Props = {
  image: ProductImage | null;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** "natural": a moldura segue a proporção da foto. "square"/"portrait": moldura fixa, foto inteira dentro. */
  frame?: "natural" | "square" | "portrait";
  className?: string;
  imgClassName?: string;
};

/**
 * Foto real do produto. Sempre `object-contain`: nunca corta nem deforma.
 */
export default function ProductPhoto({ image, alt, sizes, priority, frame = "natural", className = "", imgClassName = "" }: Props) {
  const ratio =
    frame === "square" ? "1 / 1" : frame === "portrait" ? "4 / 5" : image ? `${image.width} / ${image.height}` : "1 / 1";
  return (
    <div className={`relative w-full overflow-hidden bg-white ${className}`} style={{ aspectRatio: ratio }}>
      {image ? (
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-contain ${imgClassName}`}
        />
      ) : (
        <div aria-hidden className="absolute inset-0 flex items-center justify-center bg-nevoa">
          <LogoMark className="h-12 w-12 text-petroleo/20" />
        </div>
      )}
    </div>
  );
}
