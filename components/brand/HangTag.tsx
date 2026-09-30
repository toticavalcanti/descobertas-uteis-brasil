import { discoveryNumber } from "@/lib/format";

type Props = {
  number: number;
  label: string;
  variant?: "ipe" | "paper" | "outline";
  /** cor de fundo atrás da etiqueta, para o furo parecer vazado */
  holeClassName?: string;
  stringClassName?: string;
  rest?: number;
  animate?: boolean;
  size?: "md" | "lg";
  className?: string;
};

/** A etiqueta de roupa pendurada: o elemento de assinatura da marca. */
export default function HangTag({
  number,
  label,
  variant = "ipe",
  holeClassName = "bg-petroleo",
  stringClassName = "bg-white/50",
  rest = -4,
  animate = true,
  size = "md",
  className = "",
}: Props) {
  const skin =
    variant === "ipe"
      ? "bg-ipe text-tinta"
      : variant === "paper"
        ? "bg-white text-tinta shadow-[0_18px_40px_-18px_rgba(15,61,62,.45)]"
        : "border-2 border-dashed border-petroleo/30 bg-papel text-petroleo";

  return (
    <div
      className={`origin-top ${animate ? "motion-safe:animate-swing" : ""} ${className}`}
      style={{ ["--tag-rest" as string]: `${rest}deg`, transform: `rotate(${rest}deg)` }}
    >
      <span aria-hidden className={`mx-auto block h-9 w-px ${stringClassName}`} />
      <div className={`relative rounded-[16px] text-center ${size === "lg" ? "px-3 pb-4 pt-7 md:rounded-[20px] md:px-5 md:pb-6 md:pt-9" : "px-4 pb-4 pt-7"} ${skin}`}>
        <span aria-hidden className={`absolute left-1/2 top-2.5 h-3 w-3 -translate-x-1/2 rounded-full ${holeClassName}`} />
        <span className={`block whitespace-nowrap font-medium opacity-75 ${size === "lg" ? "text-[0.75rem] md:text-sm" : "text-[0.78rem]"}`}>
          <span className={size === "lg" ? "hidden md:inline" : ""}>Descoberta </span>
          {discoveryNumber(number)}
        </span>
        <span className={`mt-0.5 block font-display font-bold leading-tight tracking-[-0.02em] ${size === "lg" ? "text-lg md:text-3xl" : "text-xl"}`}>{label}</span>
      </div>
    </div>
  );
}
