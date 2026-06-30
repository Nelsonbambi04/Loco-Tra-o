import {
  ArrowUpRight,
  Printer,
} from "lucide-react";
import { useNav } from "@/lib/navigation";
import {
  DIFFERENTIALS,
  FEATURED_PROJECTS,
  IMAGES,
  SERVICES,
  STATS,
} from "@/lib/data";
import {
  Button,
  Container,
  CountUp,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { Icon } from "@/components/Icon";

function Hero() {
  const { navigate } = useNav();

  return (
    <section className="relative overflow-hidden bg-petroleum-950 pt-28 text-white sm:pt-32 lg:pt-36">
      <div className="absolute inset-0">
        <img
          src={IMAGES.villaDusk}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-petroleum-950 via-petroleum-950/82 to-petroleum-950/42" />
        <div className="absolute inset-0 bg-petroleum-950/18" />
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[18%] bg-petroleum-950/72 lg:block" />
      <div className="absolute right-[13%] top-0 hidden h-48 w-36 bg-sand-500/95 lg:block" />

      <Container className="relative">
        <div className="flex min-h-[680px] items-center">
          <Reveal>
            <div className="max-w-4xl py-10 lg:py-20">
              <Eyebrow>Loco Traços, LDA</Eyebrow>
              <h1 className="mt-6 max-w-5xl font-display text-[2.35rem] font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[5.2rem]">
                Arquitetura com rigor, conceito e engenharia num só lugar.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Concebemos espaços funcionais e elegantes, com engenharia,
                fiscalização e execução técnica para transformar ideias em
                projetos prontos a viver.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" size="lg" onClick={() => navigate("contact")}>
                  Pedir orçamento
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="outlineLight" size="lg" onClick={() => navigate("services")}>
                  Ver serviços
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-white/18">
                {STATS.slice(1, 4).map((stat) => (
                  <div
                    key={stat.label}
                    className="border-r border-white/18 py-5 pr-4 last:border-r-0"
                  >
                    <p className="font-display text-2xl font-black text-white">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-[0.66rem] font-black uppercase tracking-[0.14em] text-white/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}

function Expertise() {
  return (
    <Section className="bg-[#f4f5f7]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Bem-vindo à Loco Traços"
            title={
              <>
                Uma equipa para conceber, detalhar e{" "}
                <span className="text-sand-500">dar forma ao espaço.</span>
              </>
            }
            intro="A arquitetura orienta o processo. A engenharia, a topografia, a fiscalização, a construção e o plotter garantem que cada ideia seja tecnicamente clara e executável."
          />

          <Reveal delay={120}>
            <div className="grid grid-cols-3 border border-petroleum-900/10 bg-white">
              {["Arquitetura", "Engenharia", "Execução"].map((item, index) => (
                <div
                  key={item}
                  className="border-r border-petroleum-900/10 p-5 last:border-r-0"
                >
                  <p className="font-display text-2xl font-black text-sand-500">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-petroleum-900">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="h-full border border-petroleum-900/10 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center bg-sand-500 text-white">
                  <Icon name={item.icon} className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-6 font-display text-base font-black uppercase text-petroleum-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/62">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ServicesOverview() {
  const { navigate } = useNav();

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                Soluções para cada{" "}
                <span className="text-sand-500">fase do projeto.</span>
              </>
            }
            intro="Da conceção arquitetónica à engenharia, fiscalização, construção e impressão técnica, organizamos o processo com método e responsabilidade."
          />
          <Button variant="outline" onClick={() => navigate("services")}>
            Todos os serviços
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-petroleum-900/10 bg-petroleum-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Reveal key={service.slug}>
              <article className="group h-full bg-white p-6 transition-colors hover:bg-petroleum-950 hover:text-white sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-display text-sm font-black text-sand-500">
                    {service.index}
                  </span>
                  <Icon
                    name={service.icon}
                    className="h-6 w-6 text-sand-500"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-8 font-display text-base font-black uppercase leading-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/62 transition-colors group-hover:text-white/68">
                  {service.short}
                </p>
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
    ["01", "Conceito", "Traduzimos o programa, o terreno e a identidade do cliente numa direção arquitetónica clara."],
    ["02", "Projeto", "Desenvolvemos desenho, modelação, planeamento, orçamento e soluções técnicas."],
    ["03", "Engenharia", "Compatibilizamos especialidades, qualidade, segurança, prazos e viabilidade de execução."],
    ["04", "Entrega", "Fechamos o processo com revisão, acabamentos e apoio técnico ao cliente."],
  ];

  return (
    <Section className="bg-petroleum-950 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <SectionHeading
            tone="light"
            eyebrow="Processo"
            title="Um método claro para transformar conceito em projeto executável."
            intro="Cada fase tem uma responsabilidade definida para que o cliente acompanhe decisões arquitetónicas, soluções técnicas e evolução da obra com clareza."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 90}>
                <article className="border border-white/10 bg-white/[0.04] p-6">
                  <p className="font-display text-3xl font-black text-sand-300">
                    {number}
                  </p>
                  <h3 className="mt-5 font-display text-base font-black uppercase">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FeaturedWork() {
  const { navigate } = useNav();

  return (
    <Section className="bg-[#f4f5f7]">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Portfólio"
            title={
              <>
                Projetos e espaços com a{" "}
                <span className="text-sand-500">nossa assinatura.</span>
              </>
            }
            intro="Uma amostra de arquitetura residencial, comercial e institucional desenvolvida pela equipa Loco Traços."
          />
          <Button variant="dark" onClick={() => navigate("portfolio")}>
            Ver portfólio
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {FEATURED_PROJECTS.slice(0, 3).map((project, index) => (
            <Reveal key={project.name} delay={index * 100}>
              <article className="group bg-white shadow-sm">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border border-t-0 border-petroleum-900/10 p-6">
                  <p className="text-[0.66rem] font-black uppercase tracking-[0.16em] text-sand-600">
                    {project.tag}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-black uppercase text-petroleum-950">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/55">
                    {project.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PlotterBand() {
  const { navigate } = useNav();

  return (
    <Section className="bg-white py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="grid gap-8 border border-petroleum-900/10 bg-petroleum-950 p-7 text-white sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center bg-sand-500">
              <Printer className="h-8 w-8" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sand-300">
                Serviços de Plotter
              </p>
              <h2 className="mt-2 font-display text-2xl font-black uppercase leading-tight">
                Impressões A4 a A0+, cortes e dobragem de folhas técnicas.
              </h2>
            </div>
            <Button variant="light" onClick={() => navigate("contact")}>
              Solicitar
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function FinalCta() {
  const { navigate } = useNav();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={IMAGES.constructionSunset}
          alt="Arquitetura e projeto Loco Traços"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-petroleum-950/78" />
      </div>
      <Container className="relative py-16 sm:py-24">
        <Reveal>
          <div className="max-w-2xl text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-sand-300">
              Fale connosco
            </p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
              Vamos desenhar o seu próximo espaço.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Solicite uma proposta sem compromisso e receba apoio arquitetónico
              e técnico para escolher a melhor solução para o seu projeto.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" onClick={() => navigate("contact")}>
                Contactar agora
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <ServicesOverview />
      <Process />
      <FeaturedWork />
      <PlotterBand />
      <FinalCta />
    </>
  );
}
