import type { ProductImage } from "@/lib/productImages";
import { productPath } from "@/lib/products";
import { site } from "@/lib/site";
import type { Product } from "@/lib/types";

export default function LandingJsonLd({ product, images, faq }: { product: Product; images: ProductImage[]; faq: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.description,
    category: product.category,
    url: `${site.url}${productPath(product)}`,
    ...(product.model ? { model: product.model, mpn: product.model } : {}),
    ...(images.length ? { image: images.slice(0, 6).map((i) => `${site.url}${i.src}`) } : {}),
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
