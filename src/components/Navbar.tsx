import { useState } from "react";
import {
  BriefcaseBusiness,
  Clock,
  Globe,
  Mail,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 lg:px-8">
      <div className="mx-auto max-w-6xl border-b-4 border-sand-500 bg-white shadow-[0_18px_45px_rgba(17,22,26,0.22)]">
        <div className="grid min-h-16 grid-cols-[1fr_auto] border-b border-petroleum-900/10 lg:grid-cols-[320px_1fr]">
          <div className="row-span-2 flex items-center border-petroleum-900/10 px-4 py-2 lg:border-r lg:px-7 lg:py-3">
            <Logo onClick={() => go("home")} />
          </div>

          <div className="hidden min-h-12 items-center justify-between text-[0.72rem] font-semibold text-petroleum-400 lg:flex">
            <div className="flex h-full items-center">
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                className="flex h-full items-center gap-2 border-r border-petroleum-900/10 px-5 hover:text-petroleum-800"
              >
                <Phone className="h-3.5 w-3.5 text-sand-500" />
                {COMPANY.phones[0]}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex h-full items-center gap-2 border-r border-petroleum-900/10 px-5 hover:text-petroleum-800"
              >
                <Mail className="h-3.5 w-3.5 text-sand-500" />
                {COMPANY.email}
              </a>
              <span className="flex h-full items-center gap-2 border-r border-petroleum-900/10 px-5">
                <Clock className="h-3.5 w-3.5 text-sand-500" />
                Seg - Sex: 08h00 - 17h00
              </span>
            </div>

            <div className="flex h-full items-center">
              {[Globe, BriefcaseBusiness, Search].map((Icon, i) => (
                <button
                  key={i}
                  className="flex h-full w-12 items-center justify-center border-l border-petroleum-900/10 text-petroleum-400 transition-colors hover:bg-sand-500 hover:text-white"
                  aria-label={i === 2 ? "Pesquisar" : "Rede social"}
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mr-3 flex h-11 w-11 items-center justify-center self-center border border-petroleum-900/10 text-petroleum-900 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden min-h-16 items-center justify-between lg:flex">
            <nav className="flex h-full items-center">
              {NAV_ITEMS.map((item) => {
                const active = page === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={cn(
                      "relative h-full px-5 font-display text-[0.72rem] font-black uppercase tracking-[0.12em] transition-colors",
                      active
                        ? "text-sand-500"
                        : "text-petroleum-700 hover:text-sand-500",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-5 bottom-0 h-1 bg-sand-500" />
                    )}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => go("contact")}
              className="mr-5 inline-flex h-11 items-center justify-center bg-sand-500 px-6 font-display text-[0.72rem] font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-petroleum-950"
            >
              Pedir orçamento
            </button>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <nav className="min-h-0">
            <div className="flex flex-col border-t border-petroleum-900/10">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={cn(
                    "border-b border-petroleum-900/10 px-5 py-4 text-left font-display text-sm font-black uppercase tracking-[0.12em]",
                    page === item.id ? "bg-sand-500 text-white" : "text-petroleum-800",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
