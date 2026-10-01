import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { productPath, products } from "@/lib/products";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-petroleo-900 text-vapor/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-8">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-[0.95rem] leading-relaxed">
            Poucos produtos, escolhidos com cuidado para facilitar o dia a dia de quem vive no Brasil.
          </p>
        </div>

        <FooterCol title="Descobertas">
          {products.map((p) => (
            <li key={p.slug}>
              <Link className="footer-link" href={productPath(p)}>{p.shortName}</Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="A marca">
          <li><Link className="footer-link" href="/#como-escolhemos">Como escolhemos</Link></li>
          <li><Link className="footer-link" href="/#contato">Contato</Link></li>
        </FooterCol>

        <FooterCol title="Atendimento">
          <li>
            <a className="footer-link break-all" href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li className="text-vapor/60">Respondemos por e-mail em dias úteis.</li>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-[0.82rem] text-vapor/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p className="max-w-xl md:text-right">
            As compras são finalizadas na Kaiross. Preços e condições podem mudar sem aviso; confira na página do parceiro.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-[0.95rem]">{children}</ul>
    </div>
  );
}
