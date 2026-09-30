import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Benefits from "@/components/product/Benefits";
import Faq from "@/components/product/Faq";
import FinalCta from "@/components/product/FinalCta";
import HowItWorks from "@/components/product/HowItWorks";
import ProductHero from "@/components/product/ProductHero";
import ProductJsonLd from "@/components/product/ProductJsonLd";
import Specs from "@/components/product/Specs";
import StickyBuyBar from "@/components/product/StickyBuyBar";
import TrustSection from "@/components/product/TrustSection";
import TrustStrip from "@/components/product/TrustStrip";
import UgcVideo from "@/components/product/UgcVideo";
import { getProduct, productPath, products } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const path = productPath(product);
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: product.seo.title,
      description: product.seo.description,
      ...(product.image ? { images: [{ url: product.image.src, alt: product.image.alt }] } : {}),
    },
    twitter: { card: "summary_large_image", title: product.seo.title, description: product.seo.description },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="pb-24 md:pb-0">
      <ProductHero product={product} />
      <TrustStrip />
      <UgcVideo product={product} />
      <Benefits product={product} />
      <HowItWorks product={product} />
      <Specs product={product} />
      <TrustSection product={product} />
      <Faq product={product} />
      <FinalCta product={product} />
      <StickyBuyBar product={product} />
      <ProductJsonLd product={product} />
    </div>
  );
}
