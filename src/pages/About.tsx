import { Check } from "lucide-react";
import { COMPANY, PILLARS, VALUES, IMAGES } from "@/lib/data";
import { Container, Section, SectionHeading, Reveal } from "@/components/ui";
import { PageHero, CTABand } from "@/components/sections";
import { Icon } from "@/components/Icon";

function History() {
  const facts = [
    { k: "Fundada", v: COMPANY.founded },
    { k: "Sede", v: "Luanda, Angola" },
    { k: "Foco", v: "Qualidade de vida" },
    { k: "NIF", v: COMPANY.nif },
  ];

  return (
    <Section className="bg-zinc-100">
      <Container>
        <div className="grid overflow-hidden bg-white shadow-[0_22px_55px_rgba(15,23,42,0.13)] ring-1 ring-black/5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow="Sobre a Loco Tracos"
              title={
                <>
                  Uma jornada guiada pelo{" "}
                  <span className="text-sand-500">espirito de missao</span>
                </>
              }
            />
            <Reveal delay={120}>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/72 sm:text-base">
                Surgimos oficialmente no ano de {COMPANY.founded}, oferecendo
                servicos integrados de arquitetura, engenharia e consultoria com
                foco no mercado de Angola. Somos motivados pelo espirito de
                missao e pela busca constante de criar um mundo melhor atraves
                da arquitetura.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/72 sm:text-base">
                Contamos com instalacoes modernas e toda a logistica adequada
                para gerir a sua empreitada, desde o estudo topografico inicial
                ate a entrega da ultima chave, com o acabamento perfeito.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {facts.map((item, i) => (
                <Reveal key={item.k} delay={220 + i * 70}>
                  <div className="border-l-4 border-sand-400 bg-zinc-50 p-4">
                    <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-charcoal/45">
                      {item.k}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold text-petroleum-950">
                      {item.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160} className="relative min-h-[360px] lg:min-h-full">
            <img
              src={IMAGES.teamWomen}
              alt="Equipa de arquitetas da Loco Tracos"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white to-transparent lg:block" />
            <div className="absolute bottom-8 left-6 right-6 bg-white p-5 shadow-[0_18px_38px_rgba(15,23,42,0.18)] sm:left-auto sm:w-72">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sand-500">
                Institucional
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                Arquitetura, engenharia e fiscalizacao com metodo, transparencia
                e rigor tecnico.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Pillars() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Pilares Institucionais"
          title="O que nos move todos os dias"
          className="mx-auto items-center"
        />

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key} delay={i * 110}>
              <div className="group relative h-full bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.1)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <div className="absolute right-0 top-0 h-1.5 w-24 bg-gradient-to-r from-sand-400 to-cyan-400" />
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-sand-400 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </div>
                  <span className="font-display text-4xl font-bold text-zinc-100">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-petroleum-950 sm:text-xl">
                  {p.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/66">
                  {p.text}
                </p>

                {p.key === "valores" && (
                  <ul className="mt-5 space-y-2.5 border-t border-zinc-200 pt-5">
                    {VALUES.map((v) => (
                      <li
                        key={v.title}
                        className="flex items-start gap-2.5 text-sm text-charcoal/72"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-sand-500"
                          strokeWidth={2.5}
                        />
                        {v.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function TeamTech() {
  const features = [
    {
      title: "Detecao de inconformidades",
      text: "Equipa experiente focada em identificar e resolver desvios antes que se tornem custos.",
    },
    {
      title: "Otimizacao de custos",
      text: "Engenharia inteligente que protege a intencao arquitetonica sem comprometer qualidade ou custos.",
    },
    {
      title: "Softwares de gestao avancados",
      text: "Tecnologia moderna para garantir transparencia e comunicacao fluida.",
    },
    {
      title: "Seguranca em todas as etapas",
      text: "Controlo rigido de qualidade e seguranca do inicio ao fim do projeto.",
    },
  ];

  return (
    <Section className="bg-zinc-100">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative min-h-[420px] overflow-hidden bg-petroleum-950">
            <img
              src={IMAGES.teamHelmets}
              alt="Equipa tecnica da Loco Tracos com capacetes"
              className="absolute inset-0 h-full w-full object-cover opacity-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950 via-petroleum-950/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
              <p className="font-serif text-4xl font-semibold text-sand-300">+</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/78">
                Arquitetura e Engenharia de Vanguarda
              </p>
            </div>
          </Reveal>

          <div className="bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.1)] ring-1 ring-black/5 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Equipa & Tecnologia"
              title={
                <>
                  Arquitetura e Engenharia de{" "}
                  <span className="text-sand-500">Vanguarda</span>
                </>
              }
              intro="A Loco Tracos orgulha-se de possuir uma equipa experiente de arquitetos, engenheiros e tecnicos focados em transformar conceito, detalhe e execucao num resultado coerente."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <div className="h-full border border-zinc-200 bg-zinc-50 p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center bg-white text-sand-500 shadow-sm">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <h4 className="font-display text-sm font-bold text-petroleum-950">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-charcoal/63">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function About() {
  return (
    <>
      <PageHero
        eyebrow="A Empresa"
        title={
          <>
            Desenhamos espacos,<br className="hidden sm:block" /> projetos e
            relacoes
          </>
        }
        subtitle="Jovem, ousada e inovadora, uma empresa angolana dedicada a excelencia em arquitetura, engenharia e consultoria tecnica."
        image={IMAGES.villaDusk}
      />
      <History />
      <Pillars />
      <TeamTech />
      <CTABand />
    </>
  );
}
