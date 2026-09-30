# Descobertas Úteis Brasil

Hub de produtos em Next.js 15 + TypeScript + Tailwind CSS. Sem banco de dados: todo o conteúdo fica em `lib/products.ts`.

## Rodar

```bash
npm install
cp .env.example .env.local   # ajuste a URL do site
npm run dev                  # http://localhost:3000
```

## Estrutura

```
app/
  layout.tsx                 fontes, SEO global, header e rodapé
  page.tsx                   hub (varal de descobertas, lista, critérios, contato)
  produtos/[slug]/page.tsx   landing de cada produto (gerada a partir dos dados)
  sitemap.ts, robots.ts, icon.svg, not-found.tsx
components/
  brand/     Logo, HangTag (etiqueta pendurada, assinatura da marca)
  art/       ilustração do produto usada enquanto não há foto
  layout/    Header, Footer
  home/      seções do hub
  product/   seções da landing (hero, vídeo, benefícios, medidas, confiança, FAQ, CTA, barra fixa)
lib/
  products.ts  catálogo  ·  site.ts  marca e contato  ·  types.ts  tipos
```

## Antes de publicar

1. **Link de compra**: em `lib/products.ts`, troque `checkoutUrl: null` pelo link do parceiro. Todos os botões passam a abrir esse link (com `rel="nofollow sponsored"`). Enquanto for `null`, o botão mostra um aviso com o e-mail de contato.
2. **Dados técnicos e preço**: os valores marcados com `CONFIRMAR` são exemplos. Substitua pelos dados reais do fornecedor.
3. **Vídeo UGC**: coloque `video-ugc.mp4` (vertical, 9:16, até ~8 MB) e `video-poster.jpg` em `public/produtos/ferro-a-vapor-aj-120/`. Sem o arquivo, a página mostra a ilustração no lugar.
4. **Foto do produto** (opcional): salve um PNG com fundo transparente na mesma pasta e descomente o campo `image`. A foto substitui a ilustração em todo o site e entra no Open Graph e no JSON-LD.

## Adicionar um produto

Copie o objeto do AJ-120 em `products`, mude `slug`, `number` e o conteúdo, e remova o item equivalente de `upcoming`. A página `/produtos/<slug>`, o card no hub, o rodapé e o sitemap são atualizados sozinhos. Para usar uma ilustração própria, registre-a em `components/art/ProductArt.tsx`; com foto, não precisa.
