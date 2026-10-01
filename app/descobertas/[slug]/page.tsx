import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCta from "@/components/landing/FinalCta";
import GallerySection from "@/components/landing/GallerySection";
import LandingHero from "@/components/landing/LandingHero";
import LandingJsonLd from "@/components/landing/LandingJsonLd";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import StickyCta from "@/components/landing/StickyCta";
import SummaryCta from "@/components/landing/SummaryCta";
import UsesSection from "@/components/landing/UsesSection";
import VideoSection from "@/components/landing/VideoSection";
import { getImageSet } from "@/lib/productImages";
import { commonFaq, getProduct, productPath, products } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const { hero } = getImageSet(product);
  const path = productPath(product);
  const images = hero ? [{ url: hero.src, width: hero.width, height: hero.height, alt: product.imageAlt }] : undefined;
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: product.seo.title, description: product.seo.description, images },
    twitter: { card: "summary_large_image", title: product.seo.title, description: product.seo.description, images: images?.map((i) => i.url) },
  };
}

/**
 * Landing de pré-venda:
 * Hero → Problema → Solução → Vídeo (+CTA) → Benefícios → Fotos reais → Situações de uso → CTA → FAQ → CTA final → Kaiross
 */
export default async function LandingPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const images = getImageSet(product);
  const faq = [...product.faq, ...commonFaq];

  return (
    <div className="pb-20 md:pb-0">
      <LandingHero product={product} image={images.hero} />
      <ProblemSection product={product} />
      <SolutionSection product={product} image={images.solution} />
      <VideoSection product={product} />
      <BenefitsSection product={product} image={images.benefits} />
      <GallerySection product={product} images={images.gallery} />
      <UsesSection product={product} />
      <SummaryCta product={product} image={images.summary} />
      <FaqSection items={faq} />
      <FinalCta product={product} image={images.hero} />
      <StickyCta href={product.affiliateUrl} productName={product.shortName} />
      <LandingJsonLd product={product} images={images.gallery} faq={faq} />
    </div>
  );
}
