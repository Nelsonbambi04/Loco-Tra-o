import { ArrowUpRight, Check } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { SERVICES, IMAGES } from "@/lib/data";
import {
  Button,
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CTABand, PageHero } from "@/components/sections";
import { Icon } from "@/components/Icon";

function Intro() {
  const { navigate } = useNav();

  return (
    <Section className="bg-[#dedede]">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                Nossas soluções em{" "}
                <span className="text-sand-500">arquitetura e engenharia</span>
              </>
            }
            intro="Começamos pela arquitetura e apoiamos cada projeto com engenharia, fiscalização e execução técnica para garantir beleza, função e viabilidade."
          />
          <Reveal delay={120}>
            <div className="bg-white p-6 shadow-[0_14px_38px_rgba(17,22,26,0.14)]">
              <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-sand-500 to-[#16c4d5] text-white">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-petroleum-950">
                {SERVICES.length} áreas de especialização
              </p>
              <button
                onClick={() => navigate("contact")}
                className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-sand-600"
              >
                Peça um orçamento
              </button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ServiceGrid() {
  const { navigate } = useNav();

  return (
    <Section className="bg-[#dedede] pt-0">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 2) * 100}>
              <article className="grid h-full overflow-hidden bg-white shadow-[0_14px_38px_rgba(17,22,26,0.14)] sm:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[250px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-petroleum-950/20" />
                  <span className="absolute left-5 top-5 font-display text-5xl font-black text-white/82">
                    {service.index}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-sand-600">
                      Serviço {service.index}
                    </p>
                    <div className="flex h-11 w-11 items-center justify-center bg-sand-50 text-sand-600">
                      <Icon name={service.icon} className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-black uppercase leading-tight text-petroleum-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-petroleum-900">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-100 text-sand-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-7"
                    onClick={() => navigate("contact")}
                  >
                    Solicitar este serviço
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
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
      text: "Briefing, terreno, programa e referências para definir a direção arquitetónica.",
    },
    {
      n: "02",
      title: "Projeto & Planeamento",
      text: "Desenvolvimento arquitetónico, interiores e especialidades com cronograma e orçamento claros.",
    },
    {
      n: "03",
      title: "Engenharia & Fiscalização",
      text: "Compatibilização técnica, acompanhamento de obra e controlo rigoroso de qualidade.",
    },
    {
      n: "04",
      title: "Entrega & Acabamento",
      text: "Acabamentos, documentação e entrega do espaço pronto a ser vivido.",
    },
  ];

  return (
    <Section className="bg-petroleum-950 text-white">
      <Container>
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="O Nosso Processo"
          title="Do conceito arquitetónico à entrega"
          intro="Um método estruturado que garante clareza criativa, rigor técnico e cumprimento de prazos em cada etapa."
          className="mx-auto items-center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 100}>
              <article className="h-full border border-white/10 bg-white/[0.04] p-6">
                <p className="font-display text-4xl font-black text-sand-300">
                  {step.n}
                </p>
                <h3 className="mt-5 font-display text-base font-black uppercase text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{step.text}</p>
              </article>
            </Reveal>
          ))}
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
            Arquitetura em primeiro,<br className="hidden sm:block" /> engenharia a dar suporte
          </>
        }
        subtitle="Projetos de arquitetura, interiores, engenharia, fiscalização, topografia, construção e plotter, tudo o que o seu projeto precisa, num só lugar."
        image={IMAGES.interiorBlue}
      />
      <Intro />
      <ServiceGrid />
      <Process />
      <CTABand image={IMAGES.constructionSunset} />
    </>
  );
}
