import Icon, { type IconName } from "@/components/ui/Icon";

const criteria: { icon: IconName; title: string; text: string }[] = [
  { icon: "search", title: "Resolve um problema real?", text: "Se não tira uma chatice concreta do seu dia, não entra aqui." },
  { icon: "scale", title: "Faz o que promete?", text: "Conferimos a promessa principal em uso de verdade, não só na foto do anúncio." },
  { icon: "store", title: "Dá para confiar em quem vende?", text: "Indicamos lojas parceiras com entrega rastreável e política de troca clara." },
];

type Props = { id?: string; tone?: "light" | "tinted"; headingLevel?: "h2" | "h3"; title?: string };

export default function HowWeChoose({ id, tone = "light", headingLevel = "h2", title = "Como escolhemos o que entra aqui." }: Props) {
  const H = headingLevel;
  return (
    <div id={id} className="scroll-mt-20">
      <H className={headingLevel === "h2" ? "section-title text-petroleo" : "font-display text-3xl font-bold tracking-[-0.03em] text-petroleo"}>
        {title}
      </H>
      <p className="section-lead">Não somos uma vitrine de tudo. Cada descoberta responde a três perguntas antes de aparecer no site.</p>
      <ul className="mt-10 space-y-3">
        {criteria.map((c) => (
          <li
            key={c.title}
            className={`flex gap-4 rounded-[20px] p-5 ${tone === "tinted" ? "bg-nevoa" : "bg-white ring-1 ring-tinta/10"}`}
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petroleo text-vapor">
              <Icon name={c.icon} size={21} />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold text-petroleo">{c.title}</span>
              <span className="mt-1 block leading-relaxed text-tinta/70">{c.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
