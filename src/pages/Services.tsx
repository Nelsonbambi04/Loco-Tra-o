import { Check, ArrowUpRight } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { SERVICES, IMAGES } from "@/lib/data";
import {
  Container,
  Section,
  SectionHeading,
  Reveal,
  Button,
  ArrowRight,
} from "@/components/ui";
import { PageHero, CTABand } from "@/components/sections";
import { Icon } from "@/components/Icon";

function ServiceRow() {
  const { navigate } = useNav();
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col gap-16">
          {SERVICES.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.slug}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* Image */}
                  <div
                    className={
                      reverse
                        ? "lg:order-2"
                        : "lg:order-1"
                    }
                  >
                    <div className="group relative overflow-hidden rounded-2xl">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950/30 to-transparent" />
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-petroleum-900 shadow-lg backdrop-blur">
                        <Icon name={s.icon} className="h-6 w-6" />
                      </div>
                      <span className="absolute right-5 top-5 font-serif text-5xl font-semibold text-white/80">
                        {s.index}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                    <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-sand-600">
                      Serviço {s.index}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-petroleum-900 sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-charcoal/70">
                      {s.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2.5 text-sm font-medium text-petroleum-900"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-100 text-sand-600">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate("contact")}
                      >
                        Solicitar este serviço
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Estudo & Levantamento",
      text: "Topografia, análise do terreno e briefing detalhado para entender cada necessidade.",
    },
    {
      n: "02",
      title: "Projeto & Planeamento",
      text: "Desenvolvimento arquitetónico e de engenharia, com cronograma e orçamento claros.",
    },
    {
      n: "03",
      title: "Execução & Fiscalização",
      text: "Construção com mão-de-obra especializada e controlo rigoroso de qualidade e segurança.",
    },
    {
      n: "04",
      title: "Entrega & Acabamento",
      text: "Reabilitação, acabamentos premium e entrega da obra pronta a ser vivida.",
    },
  ];
  return (
    <Section className="relative overflow-hidden bg-petroleum-950 text-white">
      <Container>
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="O Nosso Processo"
          title="Da primeira visita à última chave"
          intro="Um método estruturado que garante transparência, qualidade e cumprimento de prazos em cada etapa."
          className="mx-auto items-center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-sand-300/40">
                <span className="font-serif text-4xl font-semibold text-sand-300">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-petroleum-100/70">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Intro() {
  const { navigate } = useNav();
  return (
    <Section className="bg-sand-50">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                Nossas soluções em{" "}
                <span className="text-sand-500">construção e design</span>
              </>
            }
            intro="Oferecemos serviços de alta qualidade, cumprindo rigorosamente os prazos e orçamentos estabelecidos — do conceito à entrega."
          />
          <Reveal delay={140}>
            <div className="flex items-center gap-3 rounded-2xl border border-petroleum-900/10 bg-white p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-petroleum-900 text-sand-300">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-petroleum-900">
                  {SERVICES.length} áreas de especialização
                </p>
                <button
                  onClick={() => navigate("contact")}
                  className="link-underline text-xs font-semibold uppercase tracking-[0.14em] text-sand-600"
                >
                  Peça um orçamento
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Excelência em cada<br className="hidden sm:block" /> etapa da obra
          </>
        }
        subtitle="Construção civil, arquitetura, fiscalização, topografia e consultoria — tudo o que o seu projeto precisa, num só lugar."
        image={IMAGES.constructionDiscuss}
      />
      <Intro />
      <ServiceRow />
      <Process />
      <CTABand image={IMAGES.constructionSunset} />
    </>
  );
}
