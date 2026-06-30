import { Quote } from "lucide-react";
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
  const { navigate } = useNav();

  return (
    <section className="relative overflow-hidden bg-[#f4f6f8] pt-28 sm:pt-36 lg:pt-40">
      <div className="absolute right-6 top-28 hidden grid-cols-6 gap-4 opacity-35 lg:grid">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-sand-600" />
        ))}
      </div>

      <Container className="relative">
        <div className="grid min-h-[660px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="max-w-xl pb-8 lg:pb-20">
              <Eyebrow className="hero-eyebrow">
                Angola - Construção, fiscalização e projetos
              </Eyebrow>
              <h1 className="hero-title mt-6 font-display text-[2.35rem] font-black leading-[1.02] tracking-normal text-petroleum-950 sm:text-5xl lg:text-6xl">
                Construímos com método, detalhe e padrão profissional.
              </h1>
              <p className="hero-copy mt-6 max-w-lg text-base leading-8 text-charcoal/68 sm:text-lg">
                Projetos, fiscalização e construção numa só equipa. Do desenho
                técnico à entrega da chave, a Loco Traços coordena cada etapa
                com rigor, transparência e controlo de qualidade.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="dark" onClick={() => navigate("contact")}>
                  Pedir orçamento
                  <ArrowRight />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("portfolio")}>
                  Ver portfólio
                  <ArrowRight />
                </Button>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-petroleum-900/10">
                {STATS.slice(1, 4).map((stat) => (
                  <div
                    key={stat.label}
                    className="border-r border-petroleum-900/10 py-5 pr-4 last:border-r-0"
                  >
                    <p className="font-display text-2xl font-black text-petroleum-950">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-charcoal/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative pb-10 lg:pb-20">
              <div className="ml-auto max-w-[640px] bg-white p-3 shadow-[0_30px_70px_rgba(17,22,26,0.14)]">
                <img
                  src={IMAGES.facadeGlass}
                  alt="Edifício moderno desenvolvido pela Loco Traços"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
              </div>

              <div className="absolute -left-2 bottom-0 hidden w-56 bg-white p-3 shadow-[0_20px_45px_rgba(17,22,26,0.16)] sm:block">
                <img
                  src={IMAGES.constructionDiscuss}
                  alt="Equipa técnica em obra"
                  className="h-40 w-full object-cover"
                />
                <p className="mt-3 font-display text-xs font-black uppercase tracking-[0.14em] text-petroleum-900">
                  Fiscalização no terreno
                </p>
              </div>

              <div className="absolute -right-2 top-10 hidden w-44 bg-petroleum-950 p-5 text-white shadow-[0_18px_45px_rgba(17,22,26,0.2)] lg:block">
                <p className="font-display text-3xl font-black text-sand-300">2020</p>
                <p className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-[0.16em] text-white/70">
                  Fundada em Luanda
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Welcome() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Bem-vindo à Loco Traços, LDA"
            title={
              <>
                Projetos. Fiscalização. Construção.{" "}
                <span className="text-sand-500">
                  Tudo em uma só empresa, com padrão profissional.
                </span>
              </>
            }
            intro="Do desenho técnico à entrega da chave: concebemos, fiscalizamos e executamos com rigor, transparência e controlo de qualidade para que a sua obra dure."
          />

          <Reveal delay={120}>
            <div className="grid grid-cols-3 border border-petroleum-900/10 bg-petroleum-50">
              {["Projeto", "Fiscalização", "Execução"].map((item, i) => (
                <div key={item} className="border-r border-petroleum-900/10 p-5 last:border-r-0">
                  <p className="font-display text-sm font-black text-sand-600">
                    0{i + 1}
                  </p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-petroleum-900">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, i) => (
            <Reveal key={service.slug} delay={i * 100}>
              <article className="group h-full bg-[#f7f8f9] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-petroleum-900/10">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border border-t-0 border-petroleum-900/10 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-sand-600">
                      {service.index}
                    </p>
                    <Icon name={service.icon} className="h-5 w-5 text-sand-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-black uppercase leading-snug text-petroleum-900 sm:text-lg">
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
              eyebrow="Porque escolher-nos"
              title="Método, equipa e controlo em todas as fases"
              intro="A nossa atuação combina criatividade arquitetónica com disciplina de engenharia. O cliente acompanha decisões, custos e evolução da obra com clareza."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
              {STATS.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="border border-white/10 p-4 sm:p-5">
                    <p className="font-display text-xl font-black text-sand-300 sm:text-3xl">
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
    <Section className="bg-[#f4f6f8]">
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
              <article className="group bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-petroleum-900/10">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border border-t-0 border-petroleum-900/10 p-5">
                  <span className="text-[0.64rem] font-black uppercase tracking-[0.14em] text-sand-600">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 font-display text-base font-black uppercase leading-tight text-petroleum-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-charcoal/55">
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
