/**
 * URL pública do site (sitemap, robots, canonical e Open Graph), nesta ordem:
 * 1. NEXT_PUBLIC_SITE_URL, se definida (ex.: https://seu-dominio.com.br);
 * 2. VERCEL_PROJECT_PRODUCTION_URL, o domínio de produção que a Vercel injeta em todo build;
 * 3. o endereço de produção atual na Vercel.
 */
const PRODUCTION_URL = "https://descobertas-uteis-brasil.vercel.app";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  return PRODUCTION_URL;
}

export const site = {
  name: "Descobertas Úteis Brasil",
  shortName: "Descobertas Úteis",
  tagline: "Coisas pequenas que resolvem o dia.",
  description:
    "Produtos úteis escolhidos com cuidado para o dia a dia no Brasil. Poucas descobertas, testadas na promessa principal e apresentadas com honestidade.",
  url: resolveSiteUrl(),
  email: "descobertauteisbrasil@gmail.com",
  locale: "pt_BR",
} as const;

export const mainNav = [
  { href: "/#descobertas", label: "Descobertas" },
  { href: "/#como-escolhemos", label: "Como escolhemos" },
  { href: "/#contato", label: "Contato" },
] as const;
