import { type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useNav } from "@/lib/navigation";
import { ArrowRight, Button, Container, Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  align?: "center" | "left";
}) {
  return (
    <section className="relative overflow-hidden bg-[#dedede] pt-28 sm:pt-32 lg:pt-36">
      <Container className="relative pb-10 sm:pb-14">
        <div className="relative overflow-hidden bg-white shadow-[0_18px_48px_rgba(17,22,26,0.18)]">
          <div className="absolute -top-24 left-1/2 h-44 w-72 -translate-x-1/2 rounded-b-[4rem] bg-gradient-to-br from-sand-500 to-[#15c6d4]" />
          <div className="absolute right-7 top-7 hidden h-2.5 w-9 rounded-full bg-sand-600 sm:block" />

          <div className="grid min-h-[390px] items-center gap-8 p-6 sm:p-9 lg:grid-cols-[0.92fr_1.08fr] lg:p-12">
            <div
              className={cn(
                "relative z-10 max-w-2xl",
                align === "center" ? "mx-auto text-left" : "",
              )}
            >
              <div className="mb-7 h-1 w-14 bg-petroleum-950" />
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="mt-5 font-display text-[2rem] font-black uppercase leading-[1.02] tracking-tight text-petroleum-950 sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-5 max-w-xl text-sm leading-7 text-charcoal/68 sm:text-base">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="relative z-10 min-h-[280px]">
              <div className="absolute inset-y-6 right-0 w-[78%] bg-gradient-to-b from-sand-500 to-[#16c4d5]" />
              <img
                src={image}
                alt=""
                className="relative ml-auto h-[320px] w-[88%] object-cover shadow-[0_16px_36px_rgba(17,22,26,0.2)] sm:h-[380px]"
              />
              <div className="absolute bottom-6 left-0 max-w-[15rem] bg-white p-4 shadow-xl">
                <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-sand-600">
                  Loco Traços
                </p>
                <p className="mt-1 text-sm font-black leading-tight text-petroleum-950">
                  Engenharia, arquitetura e construção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CTABand({
  eyebrow = "Vamos Conversar",
  title = "Pronto para tirar a sua obra do papel?",
  text = "Conte com uma equipa que cumpre prazos, orçamentos e respeita rigorosamente as normas técnicas.",
  image,
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  image?: string;
}) {
  const { navigate } = useNav();

  return (
    <section className="relative overflow-hidden bg-[#dedede] py-12 text-white sm:py-20">
      <Container className="relative">
        <div className="relative overflow-hidden bg-petroleum-950 shadow-[0_18px_48px_rgba(17,22,26,0.2)]">
          {image && (
            <div className="absolute inset-0">
              <img src={image} alt="" className="h-full w-full object-cover opacity-22" />
              <div className="absolute inset-0 bg-petroleum-950/78" />
            </div>
          )}
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-b from-sand-500 to-[#16c4d5]" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-12 text-center sm:px-10 sm:py-16">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="font-display text-[1.45rem] font-black uppercase leading-tight tracking-[0.018em] text-white sm:text-4xl sm:tracking-[0.04em]">
              {title}
            </h2>
            <p className="max-w-xl text-[0.88rem] font-medium leading-relaxed text-white/75 sm:text-base">
              {text}
            </p>
            <div className="mt-2 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <Button size="lg" variant="primary" onClick={() => navigate("contact")}>
                Pedir orçamento
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outlineLight" onClick={() => navigate("portfolio")}>
                Ver portfólio
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
