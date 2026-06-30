import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import { COMPANY, IMAGES, SERVICE_OPTIONS } from "@/lib/data";
import {
  ArrowRight,
  Button,
  Container,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
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
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSubmitError("");
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) e.nome = "Indique o seu nome.";
    if (!form.telefone.trim()) e.telefone = "Indique o seu telefone.";
    if (!form.email.trim()) e.email = "Indique o seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "E-mail invalido.";
    if (!form.mensagem.trim()) e.mensagem = "Escreva a sua mensagem.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/send-budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Nao foi possivel enviar o pedido.");
      }

      setSent(true);
      setForm(EMPTY);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar o pedido.",
      );
    } finally {
      setSending(false);
    }
  };

  const fieldClass = (key: keyof FormState) =>
    `w-full border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-sand-500 focus:ring-2 focus:ring-sand-500/15 ${
      errors[key] ? "border-red-400" : "border-zinc-220"
    }`;

  return (
    <div className="relative overflow-hidden bg-white p-5 shadow-[0_22px_55px_rgba(15,23,42,0.12)] ring-1 ring-black/5 sm:p-9">
      <div className="absolute left-0 top-0 h-1.5 w-36 bg-gradient-to-r from-sand-500 to-cyan-400" />
      {sent ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-100 text-sand-600">
            <CheckCircle2 className="h-9 w-9" strokeWidth={1.6} />
          </div>
          <h3 className="font-serif text-xl font-semibold text-petroleum-950 sm:text-2xl">
            Mensagem enviada!
          </h3>
          <p className="max-w-md text-sm text-charcoal/65">
            Obrigado pelo seu contacto. A nossa equipa ira responder em breve
            com toda a informacao de que necessita.
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
            <Eyebrow>Formulario de Orcamento</Eyebrow>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-petroleum-950 sm:text-3xl">
              Fale Connosco
            </h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Preencha os dados abaixo. Respondemos com um orcamento a medida do
              seu projeto.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-900">
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
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-900">
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
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-900">
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
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-900">
                Tipo de Servico
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
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-petroleum-900">
              Mensagem *
            </label>
            <textarea
              value={form.mensagem}
              onChange={(e) => update("mensagem", e.target.value)}
              rows={5}
              placeholder="Descreva o seu projeto, localizacao e necessidades..."
              className={`${fieldClass("mensagem")} resize-none`}
            />
            {errors.mensagem && (
              <p className="mt-1 text-xs text-red-500">{errors.mensagem}</p>
            )}
          </div>

          <div>
            {submitError && (
              <p className="mb-3 text-sm font-semibold text-red-600">
                {submitError}
              </p>
            )}
            <Button type="submit" size="lg" variant="dark" disabled={sending}>
              {sending ? "A enviar..." : "Enviar Pedido"}
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
      lines: ["Segunda a Sexta - 08h-17h", "Sabado - 08h-13h"],
      hrefs: [],
    },
  ];

  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <Reveal key={item.label} delay={index * 80}>
          <div className="flex items-start gap-4 bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-br from-sand-500 to-cyan-400 text-white">
              <item.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-charcoal/45">
                {item.label}
              </p>
              <div className="mt-1 flex flex-col gap-0.5">
                {item.lines.map((line, i) =>
                  item.hrefs[i] ? (
                    <a
                      key={i}
                      href={item.hrefs[i]}
                      className="text-sm font-semibold text-petroleum-950 transition-colors hover:text-sand-600"
                    >
                      {line}
                    </a>
                  ) : (
                    <span
                      key={i}
                      className="text-sm font-semibold text-petroleum-950"
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
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    COMPANY.mapsQuery,
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Contactos & Localizacao"
        title={
          <>
            Vamos dar o primeiro<br className="hidden sm:block" /> passo juntos
          </>
        }
        subtitle="Solicite um orcamento sem compromisso ou visite-nos no nosso escritorio em Luanda."
        image={IMAGES.facadeGlass}
        align="left"
      />

      <Section className="bg-zinc-100">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <Reveal>
              <ContactForm />
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Dados Oficiais"
                title="Estamos a sua disposicao"
                className="mb-6"
              />
              <ContactInfo />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid overflow-hidden bg-petroleum-950 text-white shadow-[0_22px_55px_rgba(15,23,42,0.18)] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <SectionHeading
                tone="light"
                eyebrow="Localizacao do Escritorio"
                title={
                  <>
                    Encontre-nos em{" "}
                    <span className="text-sand-300">Maculusso</span>
                  </>
                }
                intro={COMPANY.address}
              />
              <Reveal delay={140}>
                <div className="mt-7 border border-white/10 bg-white/[0.04] p-6">
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-white/78">
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
                    Pedir Direcao
                    <ArrowRight />
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="min-h-[360px]">
              <iframe
                title="Localizacao Loco Tracos - Maculusso, Luanda"
                src={mapsEmbed}
                className="h-[360px] w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "saturate(0.9)" }}
              />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
