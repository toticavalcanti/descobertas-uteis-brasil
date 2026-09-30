import type { Product } from "@/lib/types";
import { productPath } from "@/lib/products";
import { site } from "@/lib/site";

export default function ProductJsonLd({ product }: { product: Product }) {
  const url = `${site.url}${productPath(product)}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.description,
    sku: product.model,
    mpn: product.model,
    category: product.category,
    url,
    ...(product.image ? { image: `${site.url}${product.image.src}` } : {}),
    ...(product.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "BRL",
            price: product.price.current.toFixed(2),
            availability: product.checkoutUrl ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
            url: product.checkoutUrl ?? url,
          },
        }
      : {}),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
