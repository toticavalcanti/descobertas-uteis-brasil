import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm font-medium text-petroleo/60">Erro 404</p>
      <h1 className="mt-3 text-5xl font-bold tracking-[-0.035em] text-petroleo">Esta página não existe.</h1>
      <p className="mt-4 max-w-md text-lg text-tinta/70">O endereço pode ter mudado. As descobertas continuam na página inicial.</p>
      <Link href="/#descobertas" className="mt-8 inline-flex min-h-[3.25rem] items-center rounded-full bg-petroleo px-7 font-semibold text-white hover:bg-petroleo-700">
        Ver as descobertas
      </Link>
    </section>
  );
}
