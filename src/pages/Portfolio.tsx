import { MapPin, ArrowUpRight } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { FEATURED_PROJECTS, GALLERY_PROJECTS, IMAGES } from "@/lib/data";
import {
  Container,
  Section,
  SectionHeading,
  Reveal,
  Button,
  ArrowRight,
  CountUp,
} from "@/components/ui";
import { PageHero, CTABand } from "@/components/sections";

function FeaturedProjects() {
  const { navigate } = useNav();
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Cases de Sucesso"
          title={
            <>
              Projetos <span className="text-sand-500">recentes</span>
            </>
          }
          intro="Uma amostra das obras residenciais, comerciais e institucionais que contaram com a assinatura de excelência Loco Traços."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-sand-50 shadow-sm ring-1 ring-petroleum-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-petroleum-900/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-petroleum-900">
                    {p.tag}
                  </span>
                  <span className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-sand-300 text-petroleum-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-sand-600">
                    {p.type}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-petroleum-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-charcoal/60">
                    <MapPin className="h-3.5 w-3.5 text-sand-500" strokeWidth={1.8} />
                    {p.location}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                    {p.description ?? p.highlight}
                  </p>
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
    <Section className="bg-sand-50">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              Mais obras com a nossa{" "}
              <span className="text-sand-500">assinatura</span>
            </>
          }
          intro="Residências, edifícios, clínicas, igrejas e espaços comerciais entregues em várias províncias de Angola."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_PROJECTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 4) * 80}
              className={i === 0 || i === 5 ? "col-span-2 sm:col-span-1" : ""}
            >
              <figure className="group relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950/85 via-petroleum-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <h4 className="font-display text-sm font-bold leading-tight text-white">
                    {p.name}
                  </h4>
                  <p className="mt-0.5 text-[0.7rem] leading-snug text-petroleum-100/75">
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
    { value: 4, suffix: "", label: "Províncias alcançadas" },
    { value: 14, suffix: "+", label: "Obras no portefólio" },
    { value: 100, suffix: "%", label: "Foco nos acabamentos" },
  ];
  return (
    <Section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-petroleum-900/10 bg-sand-50 p-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="flex items-center justify-center gap-5 text-center sm:border-l sm:border-petroleum-900/10 sm:justify-start sm:text-left"
            >
              <p className="font-serif text-4xl font-semibold text-sand-500 sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="max-w-[8rem] text-left text-xs uppercase tracking-[0.18em] text-charcoal/55">
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
        eyebrow="Portfólio"
        title={
          <>
            Obras que falam por<br className="hidden sm:block" /> si mesmas
          </>
        }
        subtitle="Residencial, comercial e institucional — cada projeto reflete o nosso compromisso com a excelência."
        image={IMAGES.villaDusk}
      />
      <FeaturedProjects />
      <Gallery />
      <PortfolioStats />
      <CTABand image={IMAGES.facadeGlass} />
    </>
  );
}
