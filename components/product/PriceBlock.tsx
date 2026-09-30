import type { Price } from "@/lib/types";
import { brl, discountPercent } from "@/lib/format";

type Props = { price?: Price; tone?: "light" | "dark"; size?: "md" | "lg"; className?: string };

export default function PriceBlock({ price, tone = "dark", size = "lg", className = "" }: Props) {
  if (!price) return null;
  const off = discountPercent(price.current, price.previous);
  const muted = tone === "dark" ? "text-vapor/70" : "text-tinta/60";
  return (
    <div className={className}>
      {price.previous && (
        <p className={`flex items-center gap-2 text-sm ${muted}`}>
          <span className="line-through decoration-1">{brl(price.previous)}</span>
          {off && (
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${tone === "dark" ? "bg-vapor/15 text-vapor" : "bg-petroleo/10 text-petroleo"}`}>
              {off}% a menos
            </span>
          )}
        </p>
      )}
      <p className={`font-display font-bold leading-none tracking-[-0.03em] ${size === "lg" ? "mt-1 text-[2.6rem]" : "text-2xl"}`}>
        <span className="sr-only">Preço: </span>
        {brl(price.current)}
      </p>
      {price.installments && (
        <p className={`mt-1.5 text-sm ${muted}`}>
          ou {price.installments.count}x de {brl(price.installments.value)}
          {price.installments.interestFree ? " sem juros" : ""}
        </p>
      )}
    </div>
  );
}
