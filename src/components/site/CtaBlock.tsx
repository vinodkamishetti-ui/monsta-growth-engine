import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mascot from "@/assets/monsta-mascot-hero.png";

export function CtaBlock({
  eyebrow = "Ready to grow?",
  title = "Let's build your lead engine.",
  subtitle = "Book a free 30-minute strategy call. No pitch, no pressure — just a clear plan to bring you more customers.",
  primary = { label: "Book a Free Strategy Call", to: "/contact" as const },
  secondary,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primary?: { label: string; to: "/contact" | "/services" | "/packages" | "/work" };
  secondary?: { label: string; to: "/contact" | "/services" | "/packages" | "/work" };
}) {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="relative overflow-hidden rounded-4xl border border-border bg-surface-2 p-8 md:p-16">
        <div className="absolute inset-0 radial-pink opacity-80" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="relative grid gap-10 md:grid-cols-12 md:gap-8 items-center">
          <div className="md:col-span-8">
            <span className="text-eyebrow">{eyebrow}</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={primary.to}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>

          <div className="md:col-span-4 hidden md:block">
            <img
              src={mascot}
              alt="Monsta mascot"
              className="ml-auto h-72 w-auto object-contain drop-shadow-[0_20px_40px_rgba(236,0,140,0.35)] animate-float"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
