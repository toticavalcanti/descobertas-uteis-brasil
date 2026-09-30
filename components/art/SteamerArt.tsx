import { useId } from "react";

type Props = { className?: string; steam?: boolean; title?: string };

/**
 * Ilustração original do ferro a vapor portátil.
 * Usada enquanto não houver foto real do produto (defina `image` em lib/products.ts).
 */
export default function SteamerArt({ className = "", steam = true, title }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const body = `body-${uid}`;
  const water = `water-${uid}`;
  const plate = `plate-${uid}`;
  const ink = "#0F3D3E";

  return (
    <svg
      viewBox={steam ? "0 -90 240 450" : "0 20 240 345"}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={body} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DCE7E4" />
        </linearGradient>
        <linearGradient id={plate} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E3EBE9" />
          <stop offset="1" stopColor="#B9C9C5" />
        </linearGradient>
        <linearGradient id={water} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A9DAD2" stopOpacity=".9" />
          <stop offset="1" stopColor="#6FB8AD" stopOpacity=".9" />
        </linearGradient>
      </defs>

      {steam && (
        <g fill="none" stroke="#CFE3E0" strokeWidth="5" strokeLinecap="round">
          <path className="steam-wisp" style={{ animationDelay: "0s" }} d="M88 30c-12-18 12-30 0-50s10-30 2-50" />
          <path className="steam-wisp" style={{ animationDelay: "1.1s" }} d="M120 26c-12-20 14-32 0-54s12-30 0-54" />
          <path className="steam-wisp" style={{ animationDelay: "2.2s" }} d="M152 30c-12-18 12-30 0-50s10-30 2-50" />
        </g>
      )}

      <ellipse cx="120" cy="352" rx="72" ry="8" fill="#000" opacity=".16" />

      {/* cabeça e placa de vapor */}
      <rect x="40" y="40" width="160" height="112" rx="48" fill={`url(#${body})`} stroke={ink} strokeWidth="3" />
      <rect x="58" y="56" width="124" height="80" rx="34" fill={`url(#${plate})`} stroke={ink} strokeWidth="2" />
      <g fill={ink} opacity=".55">
        {[76, 96, 116].map((cy, r) =>
          [80, 100, 120, 140, 160].map((cx) =>
            (r === 0 || r === 2) && (cx === 80 || cx === 160) ? null : <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.2" />
          )
        )}
      </g>
      <path d="M70 48c14-6 30-7 44-7" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".9" />

      {/* pescoço e cabo */}
      <path d="M90 148c10 18 50 18 60 0l-6 38H96z" fill={`url(#${body})`} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <rect x="96" y="176" width="48" height="118" rx="24" fill={`url(#${body})`} stroke={ink} strokeWidth="3" />
      <rect x="112" y="196" width="16" height="36" rx="8" fill="#F5B301" stroke={ink} strokeWidth="2.5" />
      <circle cx="120" cy="252" r="4.5" fill="#F5B301" stroke={ink} strokeWidth="1.5" />

      {/* reservatório */}
      <rect x="80" y="278" width="80" height="68" rx="24" fill="#EEF5F3" stroke={ink} strokeWidth="3" />
      <rect x="87" y="302" width="66" height="37" rx="17" fill={`url(#${water})`} />
      <path d="M96 292h18" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />

      {/* fio */}
      <path d="M160 322c30 4 44 20 58 36" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
