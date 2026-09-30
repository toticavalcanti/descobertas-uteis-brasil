type Props = { tone?: "dark" | "light"; className?: string };

/** Marca: lupa com um brilho dentro, o "achado". */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="17" cy="17" r="11.5" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <path d="m25.6 25.6 8.4 8.4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M17 10.2c.5 3.6 2.2 5.3 5.8 5.8-3.6.5-5.3 2.2-5.8 5.8-.5-3.6-2.2-5.3-5.8-5.8 3.6-.5 5.3-2.2 5.8-5.8Z"
        fill="#F5B301"
      />
    </svg>
  );
}

export default function Logo({ tone = "dark", className = "" }: Props) {
  const main = tone === "dark" ? "text-petroleo" : "text-white";
  const sub = tone === "dark" ? "text-petroleo/60" : "text-vapor/70";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-9 w-9 shrink-0 ${main}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.06rem] font-bold tracking-[-0.02em] ${main}`}>Descobertas Úteis</span>
        <span className={`mt-1 text-[0.72rem] font-medium tracking-[0.02em] ${sub}`}>Brasil</span>
      </span>
    </span>
  );
}
