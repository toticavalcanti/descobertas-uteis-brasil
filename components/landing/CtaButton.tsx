import Icon from "@/components/ui/Icon";

type Props = {
  /** Link de checkout da Kaiross (lib/products.ts → affiliateUrl) */
  href: string;
  productName: string;
  /** Identifica o botão em ferramentas de análise (hero, video, resumo, final, barra) */
  position: string;
  label?: string;
  variant?: "primary" | "dark";
  size?: "md" | "lg";
  full?: boolean;
  /** Mantidos por compatibilidade com as chamadas existentes; não têm mais efeito. */
  noticePlacement?: "above" | "below";
  noticeAlign?: "center" | "right";
  className?: string;
};

/** CTA de compra: abre o checkout da Kaiross em nova aba. */
export default function CtaButton({
  href,
  productName,
  position,
  label = "Quero conhecer o produto",
  variant = "primary",
  size = "lg",
  full = false,
  className = "",
}: Props) {
  const skin =
    variant === "primary"
      ? "bg-ipe text-tinta shadow-[0_14px_30px_-14px_rgba(217,157,0,.9)] hover:bg-ipe-400"
      : "bg-tinta text-white shadow-[0_14px_30px_-14px_rgba(20,34,33,.8)] hover:bg-petroleo";
  const dims =
    size === "lg"
      ? "min-h-[3.6rem] gap-3 px-6 text-[0.9rem] sm:px-8 sm:text-[0.95rem]"
      : "min-h-[2.9rem] gap-2 px-4 text-[0.78rem] sm:px-5";
  const classes = `group inline-flex items-center justify-center rounded-full text-center font-bold uppercase leading-tight tracking-[0.06em] transition-[transform,background-color,box-shadow] duration-200 active:scale-[0.97] ${skin} ${dims} ${full ? "w-full" : ""}`;

  return (
    <div className={`relative ${full ? "w-full" : "inline-block max-w-full"} ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={classes}
        data-evento="clique-kaiross"
        data-posicao={position}
        aria-label={`${label}: ${productName} (abre o checkout da Kaiross em nova aba)`}
      >
        <span>{label}</span>
        <Icon name="arrow" size={size === "lg" ? 20 : 16} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
