import { cn } from "@/utils/cn";

export function Logo({
  className,
  tone = "dark",
  onClick,
}: {
  className?: string;
  tone?: "dark" | "light";
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("group flex items-center text-left", className)}
      aria-label="Loco Traços - Início"
    >
      <span className="flex h-16 w-28 items-center justify-start overflow-hidden sm:h-20 sm:w-32 lg:h-24 lg:w-40">
        <img
          src="/logo-loco-tracos.png"
          alt="Loco Traços"
          className={cn(
            "h-full w-auto object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]",
            tone === "light" && "drop-shadow-[0_0_18px_rgba(123,53,232,0.45)]",
          )}
        />
      </span>
    </button>
  );
}
