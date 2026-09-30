"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";
import Icon from "@/components/ui/Icon";
import { mainNav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open ? "border-tinta/10 bg-papel/90 shadow-[0_8px_30px_-24px_rgba(15,61,62,.6)] backdrop-blur-md" : "border-transparent bg-papel"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link href="/" aria-label="Descobertas Úteis Brasil, página inicial" className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-[0.95rem] font-medium text-tinta/75 transition-colors hover:bg-petroleo/5 hover:text-petroleo"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-petroleo transition-colors hover:bg-petroleo/5 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-hidden={!open}
      >
        <nav aria-label="Menu" className="min-h-0">
          <ul className="container-page pb-6 pt-2">
            {mainNav.map((item) => (
              <li key={item.href} className="border-t border-tinta/10 first:border-t-0">
                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-petroleo"
                >
                  {item.label}
                  <Icon name="arrow" size={22} className="text-petroleo/40" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
