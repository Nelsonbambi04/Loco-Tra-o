import { useState } from "react";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { useNav } from "@/lib/navigation";
import { COMPANY, NAV_ITEMS } from "@/lib/data";
import { Logo } from "./Logo";

export function Navbar() {
  const { page, navigate } = useNav();
  const [open, setOpen] = useState(false);

  const go = (id: (typeof NAV_ITEMS)[number]["id"]) => {
    setOpen(false);
    navigate(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/96 shadow-[0_12px_36px_rgba(17,22,26,0.08)] backdrop-blur">
      <div className="border-b border-petroleum-900/10">
        <div className="mx-auto hidden h-10 max-w-7xl items-center justify-between px-6 text-[0.72rem] font-semibold text-charcoal/55 lg:flex">
          <div className="flex h-full items-center divide-x divide-petroleum-900/10">
            <a
              href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
              className="flex h-full items-center gap-2 pr-5 transition-colors hover:text-petroleum-900"
            >
              <Phone className="h-3.5 w-3.5 text-sand-600" />
              {COMPANY.phones[0]}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex h-full items-center gap-2 px-5 transition-colors hover:text-petroleum-900"
            >
              <Mail className="h-3.5 w-3.5 text-sand-600" />
              {COMPANY.email}
            </a>
            <span className="flex h-full items-center gap-2 px-5">
              <Clock className="h-3.5 w-3.5 text-sand-600" />
              Seg - Sex: 08h00 - 17h00
            </span>
          </div>
          <span className="font-display text-[0.66rem] font-black uppercase tracking-[0.18em] text-sand-700">
            Arquitetura, engenharia e construção
          </span>
        </div>
      </div>

      <div className="mx-auto grid min-h-20 max-w-7xl grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[260px_1fr_auto] lg:px-8">
        <Logo onClick={() => go("home")} />

        <nav className="hidden h-full items-center justify-center lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = page === item.id;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "relative h-full px-5 font-display text-[0.72rem] font-black uppercase tracking-[0.14em] transition-colors",
                  active
                    ? "text-petroleum-950"
                    : "text-charcoal/55 hover:text-petroleum-950",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-5 bottom-0 h-0.5 bg-sand-500 transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => go("contact")}
          className="hidden h-11 items-center justify-center bg-petroleum-950 px-6 font-display text-[0.72rem] font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-sand-600 lg:inline-flex"
        >
          Pedir orçamento
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center border border-petroleum-900/10 text-petroleum-900 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-petroleum-900/10 transition-[grid-template-rows] duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="min-h-0 bg-white">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "border-b border-petroleum-900/10 px-5 py-4 text-left font-display text-sm font-black uppercase tracking-[0.12em]",
                  page === item.id ? "bg-petroleum-950 text-white" : "text-petroleum-800",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
