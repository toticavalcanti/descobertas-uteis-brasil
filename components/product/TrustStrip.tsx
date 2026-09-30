import Icon, { type IconName } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const items: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "7 dias para desistir", text: "Direito garantido em compras pela internet" },
  { icon: "store", title: "Compra no parceiro", text: "Pagamento e entrega feitos pela loja parceira" },
  { icon: "mail", title: "Atendimento por e-mail", text: site.email },
];

export default function TrustStrip() {
  return (
    <section aria-label="Garantias" className="border-b border-tinta/10 bg-white">
      <ul className="container-page grid gap-0 divide-y divide-tinta/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((it) => (
          <li key={it.title} className="flex items-center gap-3.5 py-4 sm:justify-center sm:px-4 sm:py-5">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nevoa text-petroleo">
              <Icon name={it.icon} size={20} />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.95rem] font-semibold text-tinta">{it.title}</span>
              <span className="block truncate text-sm text-tinta/60">{it.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
