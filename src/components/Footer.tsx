import { Phone, Mail, MapPin } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { COMPANY, NAV_ITEMS, SERVICES } from "@/lib/data";
import { Logo } from "./Logo";
import { ArrowRight } from "./ui";

const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.43 8.5 3.42 8.85 3.42 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.06 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.06-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 8.15A3.21 3.21 0 1 0 8.79 12 3.21 3.21 0 0 0 12 15.21Zm6.3-8.35a1.15 1.15 0 1 1-1.15-1.15 1.15 1.15 0 0 1 1.15 1.15Z",
  },
  {
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
];

export function Footer() {
  const { navigate } = useNav();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-petroleum-950 text-white">
      {/* top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-sand-500 via-sand-300 to-sand-500" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="inline-flex bg-white px-4 py-2">
            <Logo onClick={() => navigate("home")} />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-petroleum-100/70">
            Arquitetura, design e engenharia de referência em Angola. Criamos
            espaços com conceito, função e rigor técnico, do estudo inicial aos
            acabamentos.
          </p>
          <p className="mt-6 font-serif text-xl italic text-sand-300">
            “{COMPANY.slogan}”
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-sand-300 hover:bg-sand-300 hover:text-petroleum-900"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="lg:col-span-2">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-sand-300">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => navigate(item.id)}
                  className="group flex items-center gap-2 text-sm text-petroleum-100/70 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-3 w-3 -translate-x-1 text-sand-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-sand-300">
            Serviços
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <button
                  onClick={() => navigate("services")}
                  className="text-left text-sm leading-snug text-petroleum-100/70 transition-colors hover:text-white"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-sand-300">
            Contactos
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-petroleum-100/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-400" strokeWidth={1.8} />
              <span>{COMPANY.address}</span>
            </li>
            {COMPANY.phones.map((p) => (
              <li key={p}>
                <a
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sand-400" strokeWidth={1.8} />
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-sand-400" strokeWidth={1.8} />
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-petroleum-100/50 sm:flex-row sm:px-8 lg:px-12">
          <p>
            © {year} {COMPANY.legalName}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span>Desde {COMPANY.founded}</span>
            <span className="h-1 w-1 rounded-full bg-sand-400" />
            <span>Luanda, Angola</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
