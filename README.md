# Descobertas Úteis Brasil

Hub de produtos em Next.js 15 + TypeScript + Tailwind CSS. Sem banco de dados. A vitrine da home fica em `lib/discoveries.ts`; páginas completas de produto ficam em `lib/products.ts`.

## Rodar

```bash
npm install
cp .env.example .env.local   # ajuste a URL do site
npm run dev                  # http://localhost:3000
```

## Estrutura

```
app/
  page.tsx                       hub (/)
  descobertas/[slug]/page.tsx    landing pages de pré-venda
  layout.tsx, sitemap.ts, robots.ts, not-found.tsx, icon.svg
components/
  home/      hub: HubHero, Discoveries, DiscoveryCard, HowWeChoose, ContactBand, ShortThumbnail
  landing/   seções da pré-venda: LandingHero, ProblemSection, SolutionSection, VideoSection,
             YoutubeShort, BenefitsSection, Gallery(Section), UsesSection, SummaryCta,
             FaqSection, FinalCta, StickyCta, CtaButton, ProductPhoto, LandingJsonLd
  brand/, layout/, ui/
lib/
  products.ts       conteúdo dos 3 produtos + links da Kaiross (affiliateUrl)
  productImages.ts  lê as fotos de public/produtos/<pasta> no build
```

## Links da Kaiross

Em `lib/products.ts`, cada produto tem a linha:

```ts
affiliateUrl: null, // ← COLE AQUI o link de afiliado da Kaiross ...
```

Troque `null` pelo link entre aspas, por exemplo `affiliateUrl: "https://..."`. Os seis botões da página daquele produto (hero, vídeo, resumo, CTA final e barra fixa do celular) passam a usar o link. Cada botão tem `data-posicao` para medir cliques.

## Fotos

As fotos são lidas automaticamente de `public/produtos/<pasta>` (webp, png, jpg ou avif), em ordem de nome, e distribuídas assim: 1ª no hero e no card do hub, 2ª na seção Solução, 3ª em Benefícios, 4ª no Resumo, e todas na galeria. Para escolher manualmente, preencha `imageRoles` no produto:

```ts
imageRoles: { hero: "arquivo.webp", solution: "...", benefits: "...", summary: "..." },
```

As fotos nunca são cortadas nem esticadas (`object-contain`).
