import { type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useNav } from "@/lib/navigation";
import { ArrowRight, BlueprintGrid, Button, Container, Eyebrow } from "./ui";

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
    <section className="relative flex min-h-[430px] items-center overflow-hidden bg-petroleum-950 pt-32 sm:min-h-[54vh] sm:pt-44">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-petroleum-950/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-petroleum-950 via-transparent to-petroleum-950/20" />
        <BlueprintGrid className="text-white" />
      </div>

      <Container className="relative">
        <div
          className={cn(
            "flex max-w-3xl flex-col gap-4 sm:gap-5",
            align === "center" ? "mx-auto items-center text-center" : "items-start",
          )}
        >
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="font-display text-[2.15rem] font-black uppercase leading-[1.08] tracking-[0.025em] text-white sm:text-5xl sm:tracking-[0.04em] lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-[0.98rem] font-medium leading-relaxed text-white/78 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-sand-500" />
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
    <section className="relative overflow-hidden bg-petroleum-900 py-16 text-white sm:py-24">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-petroleum-950/80" />
        </div>
      )}
      <BlueprintGrid className="text-white" />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center sm:gap-6">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h2 className="font-display text-[2rem] font-black uppercase leading-tight tracking-[0.025em] text-white sm:text-4xl sm:tracking-[0.04em]">
            {title}
          </h2>
          <p className="max-w-xl text-[0.98rem] font-medium leading-relaxed text-white/75 sm:text-base">
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
      </Container>
    </section>
  );
}
