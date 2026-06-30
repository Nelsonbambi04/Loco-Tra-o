import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useNav } from "@/lib/navigation";
import {
  COMPANY,
  DIFFERENTIALS,
  FEATURED_PROJECTS,
  IMAGES,
  SERVICES,
  STATS,
} from "@/lib/data";
import { Button, Container, CountUp, Reveal } from "@/components/ui";
import { Icon } from "@/components/Icon";

function SlideCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <section className="relative h-full overflow-hidden bg-white p-6 shadow-[0_18px_45px_rgba(17,22,26,0.18)] sm:p-8">
        {children}
      </section>
    </Reveal>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-xl font-black tracking-tight text-petroleum-950 sm:text-2xl">
      {children}
    </h2>
  );
}

function CoverCard() {
  const { navigate } = useNav();

  return (
    <SlideCard className="lg:col-span-2 lg:row-span-2">
      <div className="absolute -top-28 left-1/2 h-56 w-72 -translate-x-1/2 rounded-b-[4rem] bg-gradient-to-br from-sand-500 to-[#15c6d4]" />
      <div className="absolute right-8 top-8 h-2.5 w-9 rounded-full bg-sand-600" />
      <div className="relative z-10 grid min-h-[470px] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-8 h-1 w-14 bg-petroleum-950" />
          <p className="text-xs font-black uppercase tracking-[0.24em] text-charcoal/45">
            Loco Traços, LDA
          </p>
          <h1 className="mt-5 font-display text-[2.45rem] font-black uppercase leading-[0.92] tracking-tight text-petroleum-950 sm:text-6xl">
            Creative{" "}
            <span className="block text-sand-500">Architecture</span>
          </h1>
          <p className="mt-4 max-w-sm text-sm font-bold uppercase leading-relaxed tracking-[0.12em] text-charcoal/70">
            Engenharia, arquitetura, fiscalização e construção profissional em Angola.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="dark" size="sm" onClick={() => navigate("contact")}>
              Pedir orçamento
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate("services")}>
              Serviços
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[360px]">
          <div className="absolute inset-6 rotate-45 rounded-[2.5rem] border-2 border-sand-300/70" />
          <div className="absolute inset-14 rotate-45 rounded-[2rem] border border-[#15c6d4]/55" />
          <img
            src={IMAGES.facadeGlass}
            alt="Projeto arquitetónico Loco Traços"
            className="absolute inset-16 h-[55%] w-[55%] rounded-full object-cover shadow-[0_16px_35px_rgba(17,22,26,0.22)]"
          />
          <div className="absolute right-14 top-10 h-10 w-10 rounded-full bg-sand-500 shadow-lg" />
        </div>
      </div>
    </SlideCard>
  );
}

function WelcomeCard() {
  return (
    <SlideCard>
      <div className="grid h-full items-center gap-8 md:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionTitle>Mensagem de Boas-vindas</SectionTitle>
          <p className="mt-5 max-w-md text-sm leading-7 text-charcoal/65">
            Bem-vindo à Loco Traços, LDA. Projetos, fiscalização e construção:
            tudo em uma só empresa, com padrão profissional.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-charcoal/65">
            Do desenho técnico à entrega da chave, concebemos, fiscalizamos e
            executamos com rigor, transparência e controlo de qualidade para que
            a sua obra dure.
          </p>
        </div>
        <div className="relative min-h-56">
          <div className="absolute inset-y-3 right-4 w-44 rounded-l-full bg-gradient-to-b from-sand-500 to-[#18c7d8]" />
          <img
            src={IMAGES.constructionDiscuss}
            alt="Equipa técnica da Loco Traços"
            className="absolute right-10 top-7 h-40 w-40 rounded-full object-cover shadow-xl"
          />
          <div className="absolute bottom-5 left-4 bg-petroleum-950 px-5 py-4 text-white shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/70">
              Desde
            </p>
            <p className="font-display text-2xl font-black text-sand-300">
              {COMPANY.founded}
            </p>
          </div>
        </div>
      </div>
    </SlideCard>
  );
}

function ValuesCard() {
  const values = [
    { value: STATS[1].value, suffix: STATS[1].suffix, label: "Projetos" },
    { value: STATS[2].value, suffix: STATS[2].suffix, label: "Áreas" },
    { value: STATS[3].value, suffix: STATS[3].suffix, label: "Qualidade" },
  ];

  return (
    <SlideCard>
      <SectionTitle>Core Values</SectionTitle>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {values.map((item, index) => (
          <div key={item.label} className="text-center">
            <div className="mx-auto flex h-24 w-32 items-end justify-center overflow-hidden">
              <div
                className="h-24 w-24 rounded-full border-[10px] border-b-transparent"
                style={{
                  borderColor: index === 0 ? "#7b35e8" : index === 1 ? "#15bfd0" : "#9f62ff",
                  borderBottomColor: "transparent",
                }}
              />
            </div>
            <p className="-mt-10 font-display text-lg font-black text-petroleum-950">
              <CountUp to={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.14em] text-charcoal/60">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </SlideCard>
  );
}

function AboutCard() {
  return (
    <SlideCard>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionTitle>About Us.</SectionTitle>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, index) => (
              <div key={item.title}>
                <p className="font-display text-2xl font-black text-sand-500">
                  {index + 1}.
                </p>
                <h3 className="mt-2 text-sm font-black text-petroleum-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-charcoal/58">
                  {item.text}
                </p>
              </div>
            ))}
            <div>
              <p className="font-display text-2xl font-black text-petroleum-950">4.</p>
              <h3 className="mt-2 text-sm font-black text-petroleum-950">
                Atendimento Direto
              </h3>
              <p className="mt-2 text-xs leading-6 text-charcoal/58">
                Comunicação clara, orçamento acompanhado e resposta técnica para cada etapa.
              </p>
            </div>
          </div>
        </div>
        <div className="relative min-h-72 bg-gradient-to-b from-sand-500 to-[#17c7d9] p-5">
          <img
            src={IMAGES.facadeUrban}
            alt="Edifício moderno"
            className="ml-auto h-44 w-44 object-cover shadow-xl"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white p-4 shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-sand-600">
              Angola
            </p>
            <p className="mt-1 text-sm font-black text-petroleum-950">
              Soluções técnicas para obras públicas e privadas.
            </p>
          </div>
        </div>
      </div>
    </SlideCard>
  );
}

function ServicesCard() {
  return (
    <SlideCard className="lg:col-span-2">
      <SectionTitle>Company Services</SectionTitle>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.slice(0, 4).map((service, index) => (
          <div
            key={service.slug}
            className={
              index === 1
                ? "bg-gradient-to-b from-sand-500 to-[#16c4d5] p-5 text-white shadow-xl"
                : "border border-petroleum-900/10 bg-white p-5 shadow-[0_8px_24px_rgba(17,22,26,0.08)]"
            }
          >
            <div
              className={
                index === 1
                  ? "flex h-11 w-11 items-center justify-center rounded-full bg-white/18"
                  : "flex h-11 w-11 items-center justify-center rounded-full bg-sand-50 text-sand-600"
              }
            >
              <Icon name={service.icon} className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="mt-5 text-[0.66rem] font-black uppercase tracking-[0.14em] opacity-70">
              Serviços {service.index}
            </p>
            <h3 className="mt-2 text-sm font-black leading-snug">
              {service.title}
            </h3>
            <p className="mt-3 text-xs leading-6 opacity-70">{service.short}</p>
          </div>
        ))}
      </div>
    </SlideCard>
  );
}

function ObjectivesCard() {
  return (
    <SlideCard>
      <SectionTitle>Business Objectives</SectionTitle>
      <div className="mt-8 grid gap-7 md:grid-cols-[0.8fr_1.2fr]">
        <img
          src={IMAGES.teamPlans}
          alt="Planeamento técnico"
          className="h-full min-h-64 w-full object-cover"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            ["Criação", "Projetos funcionais, seguros e coerentes com a necessidade do cliente."],
            ["Design", "Arquitetura e interiores com apresentação técnica profissional."],
            ["Suporte", "Acompanhamento de obra com controlo de prazos e qualidade."],
            ["Plotter", "Impressões A4 a A0+, cortes e dobragem de folhas técnicas."],
          ].map(([title, text]) => (
            <div key={title}>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-sand-50 text-sand-600">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <h3 className="text-sm font-black text-petroleum-950">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-charcoal/58">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideCard>
  );
}

function PortfolioCard() {
  const { navigate } = useNav();

  return (
    <SlideCard className="lg:col-span-2">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-[0.66rem] font-black uppercase tracking-[0.22em] text-sand-600">
            A little bit of history
          </p>
          <SectionTitle>Portfólio</SectionTitle>
          <p className="mt-5 text-sm leading-7 text-charcoal/65">
            Uma seleção de obras residenciais, comerciais e institucionais que
            traduzem o método da Loco Traços: projetar, fiscalizar e executar
            com rigor.
          </p>
          <button
            onClick={() => navigate("portfolio")}
            className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-sand-600"
          >
            Ver projetos <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {FEATURED_PROJECTS.slice(0, 3).map((project) => (
            <figure key={project.name} className="group overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </SlideCard>
  );
}

function ContactCard() {
  return (
    <SlideCard>
      <SectionTitle>Info Contact</SectionTitle>
      <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_0.8fr] sm:items-end">
        <div className="space-y-5 text-sm text-charcoal/68">
          <p className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sand-600" />
            <span>{COMPANY.address}</span>
          </p>
          <a href={`mailto:${COMPANY.email}`} className="flex gap-3 hover:text-sand-600">
            <Mail className="h-5 w-5 shrink-0 text-sand-600" />
            <span>{COMPANY.email}</span>
          </a>
          {COMPANY.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex gap-3 hover:text-sand-600"
            >
              <Phone className="h-5 w-5 shrink-0 text-sand-600" />
              <span>{phone}</span>
            </a>
          ))}
        </div>
        <img
          src={IMAGES.interiorBlue}
          alt="Atendimento Loco Traços"
          className="h-56 w-full object-cover"
        />
      </div>
    </SlideCard>
  );
}

export function Home() {
  return (
    <main className="bg-[#dedede] pb-16 pt-28 sm:pt-32">
      <Container>
        <div className="grid gap-7 lg:grid-cols-3">
          <CoverCard />
          <WelcomeCard />
          <ValuesCard />
          <AboutCard />
          <ServicesCard />
          <ObjectivesCard />
          <PortfolioCard />
          <ContactCard />
        </div>
      </Container>
    </main>
  );
}
