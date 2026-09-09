import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowDown,
  Target,
  Search,
  Share2,
  Sparkles,
  Zap,
  MonitorSmartphone,
  Star,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useInView } from "@/hooks/use-in-view";
import { services, howItWorks, testimonials, caseStudies, site } from "@/lib/site-config";
import mascot from "@/assets/monsta-mascot-hero.png";
import mascotSurf from "@/assets/monsta-mascot-surf.jpeg";

const iconMap = { Target, Search, Share2, Sparkles, Zap, MonitorSmartphone } as const;

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name as keyof typeof iconMap] ?? Sparkles;
  return <Cmp className={className} />;
}

const stats = [
  { value: 3.4, decimals: 1, suffix: "x", label: "Average ad ROAS" },
  { value: 120, decimals: 0, suffix: "+", label: "Campaigns launched" },
  { value: 14, decimals: 0, suffix: " days", label: "To first qualified lead" },
  { value: 98, decimals: 0, suffix: "%", label: "Client retention" },
] as const;

/** Splits a case-study metric like "+212%" or "5.2x" into countable parts. */
function parseMetric(metric: string) {
  const match = metric.match(/^([+-]?)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", value: 0, suffix: metric, decimals: 0 };
  const [, sign, number, suffix] = match;
  return {
    prefix: sign,
    value: parseFloat(number),
    suffix,
    decimals: number.includes(".") ? number.split(".")[1].length : 0,
  };
}

export const Route = createFileRoute("/landing-example")({
  head: () => ({
    meta: [
      { title: "Motion Landing Page Example — Monsta Media Group" },
      {
        name: "description",
        content:
          "An example Monsta Media Group campaign landing page with scroll-triggered reveals, animated counters, parallax and a magnetic call to action.",
      },
    ],
  }),
  component: LandingExamplePage,
});

const headline = "Turn clicks into customers.";
const headlineWords = headline.split(" ");

function LandingExamplePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useMagnetic<HTMLAnchorElement>();

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);

      const relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.setProperty("--parallax-x", `${relX * -18}px`);
      el.style.setProperty("--parallax-y", `${relY * -18}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 cursor-spotlight opacity-70 pointer-events-none" />
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-primary/15 blur-3xl animate-blob-slow" />

        <div className="container-x relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Example build — motion landing page
          </span>

          <h1 className="text-display mt-6 max-w-4xl text-[3rem] sm:text-6xl lg:text-[5.25rem] text-foreground">
            {headlineWords.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
                <span
                  className="inline-block animate-fade-up"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {i === headlineWords.length - 1 ? (
                    <span className="gradient-text-pink">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-7 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            A demo build for {site.name} showing what a launch-day landing page looks like with
            scroll reveals, animated counters and a magnetic call to action.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "520ms" }}
          >
            <Link
              ref={heroCtaRef}
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all"
            >
              See Real Results
            </Link>
          </div>

          <div
            className="mt-20 flex justify-center md:justify-start transition-transform duration-300 ease-out"
            style={{ transform: "translate(var(--parallax-x, 0px), var(--parallax-y, 0px))" }}
          >
            <img
              src={mascot}
              alt="Monsta gorilla mascot in a stars and stripes top hat"
              className="h-48 md:h-64 w-auto object-contain animate-float drop-shadow-[0_30px_60px_rgba(236,0,140,0.45)]"
              loading="lazy"
            />
          </div>
        </div>

        <a
          href="#stats"
          aria-label="Scroll to results"
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors animate-float"
        >
          <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      <TrustStrip />

      {/* STATS */}
      <section id="stats" className="container-x py-20 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="surface-card rounded-3xl p-7 text-center"
            >
              <div className="text-5xl md:text-6xl font-black gradient-text-pink">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-eyebrow">What's included</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
            Every lever pulled.
            <br />
            <span className="gradient-text-pink">Nothing left idle.</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100} className="h-full">
              <div className="group surface-card surface-card-hover rounded-3xl p-7 h-full flex flex-col">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-foreground">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.short}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessTimeline />

      {/* PROOF */}
      <section className="relative py-20 md:py-28 bg-surface-3 border-y border-border">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <span className="text-eyebrow">Recent work</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              Numbers that
              <br />
              <span className="gradient-text-pink">count themselves.</span>
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs, i) => {
              const m = parseMetric(cs.metric);
              return (
                <Reveal key={cs.slug} delay={i * 120} className="h-full">
                  <article className="surface-card surface-card-hover rounded-3xl p-7 h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {cs.client}
                      </span>
                    </div>
                    <div className="mt-8 text-6xl font-black gradient-text-pink">
                      <Counter
                        value={m.value}
                        decimals={m.decimals}
                        prefix={m.prefix}
                        suffix={m.suffix}
                      />
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {cs.metricLabel}
                    </div>
                    <h3 className="mt-6 text-lg font-black text-foreground leading-tight">
                      {cs.headline}
                    </h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS MARQUEE */}
      <section className="py-20 md:py-28 overflow-hidden">
        <Reveal className="container-x max-w-2xl mb-14">
          <span className="text-eyebrow">What clients say</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
            The proof is in
            <br />
            <span className="gradient-text-pink">the pipeline.</span>
          </h2>
        </Reveal>

        <div className="flex marquee-reverse gap-5 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="surface-card rounded-3xl p-7 w-[22rem] shrink-0"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-5 text-base text-foreground leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}

function ProcessTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="container-x py-20 md:py-28">
      <Reveal className="max-w-2xl mb-14">
        <span className="text-eyebrow">How it works</span>
        <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
          Kick-off to leads
          <br />
          <span className="gradient-text-pink">in weeks, not months.</span>
        </h2>
      </Reveal>

      <div ref={ref} className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-[38px] h-px bg-border overflow-hidden">
          <div
            className="h-full bg-primary transition-[width] duration-[1400ms] ease-out"
            style={{ width: inView ? "100%" : "0%" }}
          />
        </div>
        <div className="relative grid gap-4 md:grid-cols-5">
          {howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 120} className="surface-card rounded-3xl p-6 md:p-7">
              <div className="text-5xl font-black text-primary/30">{s.step}</div>
              <h3 className="mt-3 text-lg font-black text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const particleCount = 10;

function FinalCta() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(24);

  return (
    <section className="container-x py-24 md:py-32">
      <div className="relative overflow-hidden rounded-4xl border border-border bg-surface-2 p-8 md:p-16">
        <div className="absolute inset-0 radial-pink opacity-80" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        {Array.from({ length: particleCount }).map((_, i) => {
          const style: CSSProperties & Record<string, string> = {
            top: `${((i * 37) % 90) + 5}%`,
            left: `${((i * 53) % 90) + 5}%`,
            animationDelay: `${i * 300}ms`,
            "--dur": `${6 + (i % 5)}s`,
            "--drift-x": `${(i % 2 === 0 ? 1 : -1) * (6 + i)}px`,
          };
          return (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary animate-particle pointer-events-none"
              style={style}
            />
          );
        })}

        <div className="relative grid gap-10 md:grid-cols-12 md:gap-8 items-center">
          <Reveal className="md:col-span-8">
            <span className="text-eyebrow">Like what you see?</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              This is what launch day looks like.
            </h2>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Every {site.name} landing page ships with motion like this — built to hold attention,
              not just look busy. Book a free call and we'll build yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                ref={ctaRef}
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all"
              >
                Back to Homepage
              </Link>
            </div>
          </Reveal>

          <div className="md:col-span-4 hidden md:block">
            <div className="ml-auto h-72 w-56 overflow-hidden rounded-3xl drop-shadow-[0_20px_40px_rgba(236,0,140,0.35)] animate-float">
              <img
                src={mascotSurf}
                alt="Monsta mascot surfing"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
