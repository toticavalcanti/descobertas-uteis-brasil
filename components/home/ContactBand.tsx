"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export default function ContactBand() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-20 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="rounded-[32px] bg-ipe">
        <div className="container-page flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <h2 id="contato-titulo" className="text-[2.4rem] font-bold leading-[1] tracking-[-0.035em] text-tinta sm:text-6xl">
              Fale com a gente.
            </h2>
            <p className="mt-4 max-w-md text-lg text-tinta/75">
              Dúvida sobre um produto, sugestão de descoberta ou ajuda com uma compra. Uma pessoa responde.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-[3.4rem] items-center justify-center gap-2.5 rounded-full bg-tinta px-6 font-semibold text-white transition-[transform,background-color] hover:bg-petroleo active:scale-[0.97]"
            >
              <Icon name="mail" size={20} />
              <span className="break-all">{site.email}</span>
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex min-h-[3.4rem] items-center justify-center gap-2 rounded-full px-5 font-semibold text-tinta ring-2 ring-tinta/20 transition-colors hover:bg-tinta/5"
            >
              <Icon name={copied ? "check" : "copy"} size={19} strokeWidth={2.2} />
              <span aria-live="polite">{copied ? "E-mail copiado" : "Copiar e-mail"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
