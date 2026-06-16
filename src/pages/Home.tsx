import { ArrowLeft, ArrowRight as ArrowRightIcon, Quote } from "lucide-react";
import { useNav } from "@/lib/navigation";
import {
  COMPANY,
  DIFFERENTIALS,
  FEATURED_PROJECTS,
  IMAGES,
  SERVICES,
  STATS,
} from "@/lib/data";
import {
  ArrowRight,
  Button,
  Container,
  CountUp,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CTABand } from "@/components/sections";
import { Icon } from "@/components/Icon";

function Hero() {
  const heroImages = [
    IMAGES.villaDusk,
    IMAGES.villaPool,
    IMAGES.facadeGlass,
    IMAGES.apartments,
    IMAGES.villaIlluminated,
  ];
  const { navigate } = useNav();

  return (
    <section className="mobile-hero relative flex min-h-[640px] items-center justify-center overflow-hidden bg-petroleum-950 pt-28 text-center text-white sm:min-h-[720px] sm:pt-36">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Projeto arquitetÃ³nico moderno da Loco TraÃ§os"
            className="hero-slide absolute inset-0 h-full w-full object-cover object-center"
            style={{ animationDelay: `${index * 5}s` }}
          />
        ))}
      </div>
      <img
        src={IMAGES.hero}
        alt="Projeto arquitetónico moderno da Loco Traços"
        className="hidden"
      />
      <div className="absolute inset-0 bg-petroleum-950/64 sm:bg-petroleum-950/58" />
      <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950/85 via-petroleum-950/25 to-petroleum-950/20" />

      <button
        className="hidden"
        aria-label="Projeto anterior"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        className="hidden"
        aria-label="Próximo projeto"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>

      <Container className="relative px-6">
        <div className="mx-auto max-w-4xl">
          <Eyebrow tone="light" className="hero-eyebrow justify-center">
            Angola - Construção & Arquitetura
          </Eyebrow>
          <h1 className="hero-title mx-auto mt-6 max-w-[21rem] font-display text-[2.15rem] font-black uppercase leading-[1.05] tracking-[0.035em] text-white sm:mt-8 sm:max-w-4xl sm:text-5xl sm:tracking-[0.06em] lg:text-6xl">
            Fazemos grandes obras com novas ideias
          </h1>
          <p className="hero-copy mx-auto mt-5 max-w-[21rem] text-[0.92rem] font-semibold leading-7 text-white/82 sm:mt-6 sm:max-w-2xl sm:text-base sm:font-bold">
            A Loco Traços desenvolve, fiscaliza e executa projetos residenciais,
            comerciais e institucionais com rigor técnico, estética moderna e
            compromisso real com prazos.
          </p>
          <div className="hidden">
            <Button size="md" className="min-h-13 sm:px-8 sm:py-4" onClick={() => navigate("services")}>
              Ler mais
              <ArrowRight />
            </Button>
            <Button
              size="md"
              className="min-h-13 sm:px-8 sm:py-4"
              variant="outlineLight"
              onClick={() => navigate("contact")}
            >
              Pedir orçamento
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Welcome() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Bem-vindo à Loco Traços"
          title={
            <>
              Engenharia, arquitetura e construção com{" "}
              <span className="text-sand-500">padrão profissional</span>
            </>
          }
          intro="Transformamos necessidades em espaços funcionais, seguros e visualmente marcantes. Cada projeto começa com estudo técnico, planeamento transparente e atenção aos detalhes que fazem a obra durar."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, i) => (
            <Reveal key={service.slug} delay={i * 100}>
              <article className="group h-full border border-petroleum-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-petroleum-900/10">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950/70 to-transparent" />
                  <div className="absolute bottom-0 left-5 flex h-12 w-12 translate-y-1/2 items-center justify-center bg-sand-500 text-white sm:left-6 sm:h-14 sm:w-14">
                    <Icon name={service.icon} className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                  </div>
                </div>
                  <div className="p-5 pt-8 sm:p-7 sm:pt-10">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-sand-600">
                    {service.index}
                  </p>
                  <h3 className="mt-2 font-display text-base font-black uppercase leading-snug text-petroleum-900 sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/68">
                    {service.short}
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

function WhyUs() {
  return (
    <Section className="bg-petroleum-950 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Porquê escolher-nos"
              title="Método, equipa e controlo em todas as fases"
              intro="A nossa atuação combina criatividade arquitetónica com disciplina de engenharia. O cliente acompanha decisões, custos e evolução da obra com clareza."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
              {STATS.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="border border-white/10 p-4 sm:p-5">
                    <p className="font-display text-xl font-black text-sand-400 sm:text-3xl">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/55 sm:text-xs sm:tracking-[0.16em]">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {DIFFERENTIALS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center bg-sand-500 text-white sm:h-12 sm:w-12">
                    <Icon name={item.icon} className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-sm font-black uppercase leading-snug sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Projects() {
  const { navigate } = useNav();
  return (
    <Section className="bg-petroleum-50">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Portfólio"
            title={
              <>
                Projetos recentes com a{" "}
                <span className="text-sand-500">nossa assinatura</span>
              </>
            }
            intro="Uma seleção de obras e conceitos desenvolvidos pela equipa Loco Traços."
          />
          <Button variant="outline" onClick={() => navigate("portfolio")}>
            Ver todos
            <ArrowRight />
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="group relative min-h-[320px] overflow-hidden bg-petroleum-900 text-white sm:min-h-[360px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950 via-petroleum-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="bg-sand-500 px-3 py-1 text-[0.64rem] font-black uppercase tracking-[0.14em] text-white">
                    {project.tag}
                  </span>
                  <h3 className="mt-4 font-display text-base font-black uppercase leading-tight sm:text-lg">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-white/70">
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

function Statement() {
  return (
    <Section className="bg-white py-14 sm:py-16">
      <Container>
        <Reveal>
          <figure className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-9 w-9 text-sand-500 sm:h-10 sm:w-10" />
            <blockquote className="mt-5 font-display text-base font-black uppercase leading-relaxed tracking-[0.02em] text-petroleum-900 sm:text-3xl sm:tracking-[0.03em]">
              Do estudo topográfico inicial à entrega da última chave,
              coordenamos cada fase com transparência, segurança e acabamento
              profissional.
            </blockquote>
            <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-sand-600 sm:text-sm sm:tracking-[0.18em]">
              {COMPANY.name} - {COMPANY.slogan}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyUs />
      <Projects />
      <Statement />
      <CTABand image={IMAGES.constructionSunset} />
    </>
  );
}
