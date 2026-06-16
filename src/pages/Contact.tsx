import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  FileText,
  Navigation,
  CheckCircle2,
  Send,
  Clock,
} from "lucide-react";
import { COMPANY, SERVICE_OPTIONS, IMAGES } from "@/lib/data";
import {
  Container,
  Section,
  SectionHeading,
  Reveal,
  Button,
  ArrowRight,
  Eyebrow,
} from "@/components/ui";
import { PageHero } from "@/components/sections";

type FormState = {
  nome: string;
  telefone: string;
  email: string;
  servico: string;
  mensagem: string;
};

const EMPTY: FormState = {
  nome: "",
  telefone: "",
  email: "",
  servico: SERVICE_OPTIONS[0],
  mensagem: "",
};

function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) e.nome = "Indique o seu nome.";
    if (!form.telefone.trim()) e.telefone = "Indique o seu telefone.";
    if (!form.email.trim()) e.email = "Indique o seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "E-mail inválido.";
    if (!form.mensagem.trim()) e.mensagem = "Escreva a sua mensagem.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSent(true);
      setForm(EMPTY);
    }
  };

  const fieldClass = (key: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-petroleum-500 focus:ring-2 focus:ring-petroleum-500/15 ${
      errors[key] ? "border-red-400" : "border-petroleum-900/12"
    }`;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-petroleum-900/5 ring-1 ring-petroleum-900/5 sm:p-9">
      {sent ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-100 text-sand-600">
            <CheckCircle2 className="h-9 w-9" strokeWidth={1.6} />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-petroleum-900">
            Mensagem enviada!
          </h3>
          <p className="max-w-md text-sm text-charcoal/65">
            Obrigado pelo seu contacto. A nossa equipa irá responder em breve
            com toda a informação de que necessita.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSent(false)}
            className="mt-2"
          >
            Enviar outra mensagem
          </Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
          <div>
            <Eyebrow>Formulário de Orçamento</Eyebrow>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-petroleum-900 sm:text-3xl">
              Fale Connosco
            </h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Preencha os dados abaixo. Respondemos com um orçamento à medida do
              seu projeto.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-800">
                Nome *
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => update("nome", e.target.value)}
                placeholder="O seu nome completo"
                className={fieldClass("nome")}
              />
              {errors.nome && (
                <p className="mt-1 text-xs text-red-500">{errors.nome}</p>
              )}
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-800">
                Telefone *
              </label>
              <input
                type="tel"
                value={form.telefone}
                onChange={(e) => update("telefone", e.target.value)}
                placeholder="+244 ..."
                className={fieldClass("telefone")}
              />
              {errors.telefone && (
                <p className="mt-1 text-xs text-red-500">{errors.telefone}</p>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-800">
                E-mail *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="email@exemplo.com"
                className={fieldClass("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-800">
                Tipo de Serviço
              </label>
              <select
                value={form.servico}
                onChange={(e) => update("servico", e.target.value)}
                className={fieldClass("servico")}
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-800">
              Mensagem *
            </label>
            <textarea
              value={form.mensagem}
              onChange={(e) => update("mensagem", e.target.value)}
              rows={5}
              placeholder="Descreva o seu projeto, localização e necessidades..."
              className={`${fieldClass("mensagem")} resize-none`}
            />
            {errors.mensagem && (
              <p className="mt-1 text-xs text-red-500">{errors.mensagem}</p>
            )}
          </div>

          <div>
            <Button type="submit" size="lg" variant="dark">
              Enviar Pedido
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

function ContactInfo() {
  const items = [
    {
      icon: Phone,
      label: "Telefones",
      lines: COMPANY.phones,
      hrefs: COMPANY.phones.map((p) => `tel:${p.replace(/\s/g, "")}`),
    },
    {
      icon: Mail,
      label: "E-mail",
      lines: [COMPANY.email],
      hrefs: [`mailto:${COMPANY.email}`],
    },
    {
      icon: FileText,
      label: "NIF da Empresa",
      lines: [COMPANY.nif],
      hrefs: [],
    },
    {
      icon: Clock,
      label: "Atendimento",
      lines: ["Segunda a Sexta · 08h–17h", "Sábado · 08h–13h"],
      hrefs: [],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <Reveal key={item.label}>
          <div className="flex items-start gap-4 rounded-2xl border border-petroleum-900/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand-300 text-petroleum-900">
              <item.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-sand-300">
                {item.label}
              </p>
              <div className="mt-1 flex flex-col gap-0.5">
                {item.lines.map((line, i) =>
                  item.hrefs[i] ? (
                    <a
                      key={i}
                      href={item.hrefs[i]}
                      className="text-sm font-medium text-white transition-colors hover:text-sand-300"
                    >
                      {line}
                    </a>
                  ) : (
                    <span
                      key={i}
                      className="text-sm font-medium text-white/90"
                    >
                      {line}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Contact() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY.mapsQuery,
  )}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    COMPANY.mapsQuery,
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Contactos & Localização"
        title={
          <>
            Vamos dar o primeiro<br className="hidden sm:block" /> passo juntos
          </>
        }
        subtitle="Solicite um orçamento sem compromisso ou visite-nos no nosso escritório em Luanda."
        image={IMAGES.facadeGlass}
        align="left"
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <Reveal>
              <ContactForm />
            </Reveal>

            <div className="flex flex-col">
              <SectionHeading
                eyebrow="Dados Oficiais"
                title="Estamos à sua disposição"
                className="mb-6"
              />
              <ContactInfo />
            </div>
          </div>
        </Container>
      </Section>

      {/* Location */}
      <Section className="bg-petroleum-950 py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Localização do Escritório"
                title={
                  <>
                    Encontre-nos em{" "}
                    <span className="text-sand-300">Maculusso</span>
                  </>
                }
                intro={COMPANY.address}
              />
              <Reveal delay={140}>
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-petroleum-100/80">
                    <Navigation
                      className="mt-0.5 h-5 w-5 shrink-0 text-sand-300"
                      strokeWidth={1.6}
                    />
                    {COMPANY.reference}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-6">
                  <Button href={mapsLink} variant="primary" size="md">
                    Abrir no Google Maps
                    <ArrowRight />
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <iframe
                  title="Localização Loco Traços — Maculusso, Luanda"
                  src={mapsEmbed}
                  className="h-[360px] w-full lg:h-[440px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, filter: "saturate(0.9)" }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
