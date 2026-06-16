import { Check } from "lucide-react";
import { COMPANY, PILLARS, VALUES, IMAGES } from "@/lib/data";
import {
  Container,
  Section,
  SectionHeading,
  Reveal,
  BlueprintGrid,
} from "@/components/ui";
import { PageHero, CTABand } from "@/components/sections";
import { Icon } from "@/components/Icon";

function History() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-9 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Sobre a Loco Traços"
              title={
                <>
                  Uma jornada guiada pelo{" "}
                  <span className="text-sand-500">espírito de missão</span>
                </>
              }
            />
            <Reveal delay={120}>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/75 sm:mt-6 sm:text-base">
                Surgimos oficialmente no ano de {COMPANY.founded}, oferecendo
                serviços integrados de engenharia, arquitetura e consultoria com
                foco no mercado de Angola. Somos motivados pelo espírito de
                missão e pela busca constante de criar um mundo melhor através
                da arquitetura.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75 sm:text-base">
                Contamos com instalações modernas e toda a logística adequada
                para gerir a sua empreitada — desde o estudo topográfico inicial
                até à entrega da última chave, com o acabamento perfeito.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { k: "Fundada", v: COMPANY.founded },
                  { k: "Sede", v: "Luanda, Angola" },
                  { k: "Foco", v: "Qualidade de vida" },
                  { k: "NIF", v: COMPANY.nif },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-xl border border-petroleum-900/10 bg-sand-50 p-4"
                  >
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sand-600">
                      {item.k}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold text-petroleum-900">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-sand-200/60" />
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src={IMAGES.teamWomen}
                alt="Equipa de arquitetas da Loco Traços"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Pillars() {
  return (
    <Section className="relative overflow-hidden bg-petroleum-950 text-white">
      <BlueprintGrid className="text-white" />
      <Container className="relative">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="Pilares Institucionais"
          title="O que nos move todos os dias"
          className="mx-auto items-center"
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key} delay={i * 120}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-sand-300/40 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand-300 text-petroleum-900 transition-transform group-hover:scale-105">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </div>
                  <span className="font-serif text-2xl italic text-white/15">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white sm:mt-6 sm:text-xl">
                  {p.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-petroleum-100/70">
                  {p.text}
                </p>

                {p.key === "valores" && (
                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {VALUES.map((v) => (
                      <li
                        key={v.title}
                        className="flex items-start gap-2.5 text-sm text-petroleum-100/85"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-sand-300"
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
      title: "Deteção de inconformidades",
      text: "Equipa experiente focada em identificar e resolver desvios antes que se tornem custos.",
    },
    {
      title: "Otimização de custos",
      text: "Engenharia inteligente que maximiza resultados sem comprometer a qualidade.",
    },
    {
      title: "Softwares de gestão avançados",
      text: "Tecnologia moderna para garantir transparência e comunicação fluida.",
    },
    {
      title: "Segurança em todas as etapas",
      text: "Controlo rígido de qualidade e segurança do início ao fim do projeto.",
    },
  ];
  return (
    <Section className="bg-sand-50">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src={IMAGES.teamHelmets}
                alt="Equipa técnica da Loco Traços com capacetes"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 z-20 rounded-2xl bg-petroleum-900 p-6 text-white shadow-xl">
              <p className="font-serif text-2xl font-semibold text-sand-300 sm:text-3xl">+</p>
              <p className="mt-1 max-w-[12rem] text-xs leading-snug text-petroleum-100/80">
                Engenharia e Arquitetura de Vanguarda
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Equipa & Tecnologia"
              title={
                <>
                  Engenharia e Arquitetura de{" "}
                  <span className="text-sand-500">Vanguarda</span>
                </>
              }
              intro="A Loco Traços orgulha-se de possuir uma equipa experiente de engenheiros, arquitetos e técnicos focados na deteção de inconformidades e otimização de custos."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <div className="rounded-xl border border-petroleum-900/10 bg-white p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-sand-100 text-sand-600">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <h4 className="font-display text-sm font-bold text-petroleum-900">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-charcoal/65">
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
            Construímos confiança,<br className="hidden sm:block" /> projetos e
            relações
          </>
        }
        subtitle="Jovem, ousada e inovadora — uma empresa angolana dedicada à excelência em engenharia, arquitetura e consultoria."
        image={IMAGES.teamPlans}
      />
      <History />
      <Pillars />
      <TeamTech />
      <CTABand />
    </>
  );
}
