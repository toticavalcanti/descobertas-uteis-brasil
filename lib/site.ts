export const site = {
  name: "Descobertas Úteis Brasil",
  shortName: "Descobertas Úteis",
  tagline: "Coisas pequenas que resolvem o dia.",
  description:
    "Produtos úteis escolhidos com cuidado para o dia a dia no Brasil. Poucas descobertas, testadas na promessa principal e apresentadas com honestidade.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://descobertasuteisbrasil.com.br").replace(/\/$/, ""),
  email: "descobertauteisbrasil@gmail.com",
  locale: "pt_BR",
} as const;

export const mainNav = [
  { href: "/#descobertas", label: "Descobertas" },
  { href: "/#como-escolhemos", label: "Como escolhemos" },
  { href: "/#contato", label: "Contato" },
] as const;
