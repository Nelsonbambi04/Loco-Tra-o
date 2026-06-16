import {
  useState,
  useEffect,
  type ButtonHTMLAttributes,
  type ReactNode,
  type CSSProperties,
} from "react";
import { cn } from "@/utils/cn";
import { useNav, type PageId } from "@/lib/navigation";
import { useReveal } from "@/lib/useReveal";

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-24 lg:py-28", className)}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal                                                              */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span" | "section" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  className,
  tone = "sand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "sand" | "light";
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex max-w-full flex-wrap items-center gap-2 sm:gap-3",
        tone === "sand" ? "text-sand-500" : "text-sand-300",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          tone === "sand" ? "bg-sand-400" : "bg-sand-300/60",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone === "light" ? "light" : "sand"}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
            "font-display text-[1.55rem] font-black leading-[1.14] tracking-tight sm:text-4xl lg:text-[2.8rem]",
            tone === "light" ? "text-white" : "text-petroleum-900",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p
            className={cn(
              "max-w-2xl text-[0.9rem] leading-relaxed sm:text-lg",
              tone === "light" ? "text-petroleum-100/80" : "text-charcoal/70",
              align === "center" && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

type Variant = "primary" | "dark" | "light" | "outline" | "outlineLight";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-sand-500 text-white hover:bg-petroleum-950",
  dark: "bg-petroleum-900 text-white hover:bg-petroleum-800",
  light: "bg-white text-petroleum-900 hover:bg-sand-50",
  outline:
    "border-2 border-petroleum-900/20 text-petroleum-900 hover:border-petroleum-900 hover:bg-petroleum-900 hover:text-white",
  outlineLight:
    "border-2 border-white/60 text-white hover:bg-white hover:text-petroleum-900",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-6 py-3.5 text-[0.82rem] sm:px-8 sm:py-4 sm:text-[0.95rem]",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  to?: PageId;
  href?: string;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const { navigate } = useNav();
  const classes = cn(
    "group inline-flex max-w-full items-center justify-center gap-2.5 text-center font-display font-black uppercase tracking-[0.12em] transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-300 focus-visible:ring-offset-2",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    if (to) navigate(to);
  };

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Misc helpers                                                        */
/* ------------------------------------------------------------------ */

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
        className,
      )}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/** Decorative architectural blueprint grid background */
export function BlueprintGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.06]",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

/** Animated count-up that triggers when scrolled into view */
export function CountUp({
  to,
  suffix = "",
  duration = 1700,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to, duration]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}
