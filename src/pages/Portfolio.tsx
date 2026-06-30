import { ArrowUpRight, MapPin } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { FEATURED_PROJECTS, GALLERY_PROJECTS, IMAGES } from "@/lib/data";
import {
  ArrowRight,
  Button,
  Container,
  CountUp,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CTABand, PageHero } from "@/components/sections";

function FeaturedProjects() {
  const { navigate } = useNav();

  return (
    <Section className="bg-zinc-100">
      <Container>
        <SectionHeading
          eyebrow="Cases de Sucesso"
          title={
            <>
              Projetos <span className="text-sand-500">recentes</span>
            </>
          }
          intro="Uma amostra das obras residenciais, comerciais e institucionais que contaram com a assinatura de excelencia Loco Tracos."
        />

        <div className="mt-10 grid gap-7 sm:mt-12">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120}>
              <article className="grid overflow-hidden bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] ring-1 ring-black/5 lg:grid-cols-2">
                <div
                  className={`relative min-h-[300px] overflow-hidden ${
                    i % 2 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950/55 to-transparent" />
                  <span className="absolute left-5 top-5 bg-white px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-petroleum-950 shadow-md">
                    {p.tag}
                  </span>
                </div>

                <div className="flex min-h-[300px] flex-col justify-center p-6 sm:p-10 lg:p-12">
                  <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-sand-500">
                    {p.type}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-petroleum-950 sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-charcoal/58">
                    <MapPin
                      className="h-3.5 w-3.5 text-sand-500"
                      strokeWidth={1.8}
                    />
                    {p.location}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal/68">
                    {p.description ?? p.highlight}
                  </p>
                  <div className="mt-7 flex h-10 w-10 items-center justify-center bg-gradient-to-br from-sand-500 to-cyan-400 text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Button variant="outline" onClick={() => navigate("contact")}>
              Quero um projeto assim
              <ArrowRight />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function Gallery() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              Mais obras com a nossa{" "}
              <span className="text-sand-500">assinatura</span>
            </>
          }
          intro="Residencias, edificios, clinicas, igrejas e espacos comerciais entregues em varias provincias de Angola."
        />

        <div className="mt-9 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_PROJECTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 4) * 80}
              className={i === 0 || i === 5 ? "col-span-2 sm:col-span-1" : ""}
            >
              <figure className="group relative aspect-square overflow-hidden bg-zinc-100 shadow-[0_14px_32px_rgba(15,23,42,0.12)]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950/88 via-petroleum-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <h4 className="font-display text-xs font-bold leading-tight text-white sm:text-sm">
                    {p.name}
                  </h4>
                  <p className="mt-0.5 text-[0.7rem] leading-snug text-white/70">
                    {p.location}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PortfolioStats() {
  const stats = [
    { value: 4, suffix: "", label: "Provincias alcancadas" },
    { value: 14, suffix: "+", label: "Obras no portefolio" },
    { value: 100, suffix: "%", label: "Foco nos acabamentos" },
  ];

  return (
    <Section className="bg-zinc-100 py-16">
      <Container>
        <div className="grid bg-white shadow-[0_20px_50px_rgba(15,23,42,0.11)] ring-1 ring-black/5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="border-b border-zinc-200 p-7 text-center last:border-b-0 sm:border-b-0 sm:border-l sm:first:border-l-0"
            >
              <p className="font-serif text-4xl font-semibold text-sand-500 sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mx-auto mt-2 max-w-[10rem] text-xs uppercase tracking-[0.18em] text-charcoal/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Obras que falam por<br className="hidden sm:block" /> si mesmas
          </>
        }
        subtitle="Residencial, comercial e institucional, cada projeto reflete o nosso compromisso com a excelencia."
        image={IMAGES.villaDusk}
      />
      <FeaturedProjects />
      <Gallery />
      <PortfolioStats />
      <CTABand image={IMAGES.facadeGlass} />
    </>
  );
}
