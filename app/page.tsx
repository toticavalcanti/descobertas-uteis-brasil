import ContactBand from "@/components/home/ContactBand";
import Discoveries from "@/components/home/Discoveries";
import HowWeChoose from "@/components/home/HowWeChoose";
import HubHero from "@/components/home/HubHero";

export default function HomePage() {
  return (
    <>
      <HubHero />
      <Discoveries />
      <section aria-label="Critérios" className="py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <HowWeChoose id="como-escolhemos" />
        </div>
      </section>
      <ContactBand />
    </>
  );
}
