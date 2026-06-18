import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Search,
  Share2,
  Sparkles,
  Zap,
  MonitorSmartphone,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Hammer,
  Star,
  CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { StatsBar } from "@/components/site/StatsBar";
import { TrustBadges } from "@/components/site/TrustBadges";
import { CtaBlock } from "@/components/site/CtaBlock";
import {
  services,
  whyMonsta,
  howItWorks,
  testimonials,
  caseStudies,
  packages,
  insights,
  site,
} from "@/lib/site-config";
import mascot from "@/assets/monsta-mascot-hero.png";

const iconMap = {
  Target,
  Search,
  Share2,
  Sparkles,
  Zap,
  MonitorSmartphone,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Hammer,
} as const;

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name as keyof typeof iconMap] ?? Sparkles;
  return <Cmp className={className} />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monsta Media Group — Get Paying Customers On Tap" },
      {
        name: "description",
        content:
          "Bold digital marketing for small businesses. Paid ads, SEO, branding, funnels & automations that bring predictable leads. Book a free strategy call.",
      },
      { property: "og:title", content: "Monsta Media Group — Get Paying Customers On Tap" },
      {
        property: "og:description",
        content:
          "A practical, full-funnel growth partner for small businesses. Predictable lead flow without the corporate fluff.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] radial-pink" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] radial-pink" />

        <div className="container-x relative grid gap-12 md:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Now booking April {new Date().getFullYear()}
            </span>

            <h1 className="text-display mt-6 text-[3.25rem] sm:text-6xl lg:text-[5.5rem] text-foreground">
              Get paying customers
              <br />
              <span className="gradient-text-pink">on tap.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              We're {site.name} — a no-nonsense growth partner for small businesses. Paid ads, SEO,
              funnels and automations that bring leads in week one.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all"
              >
                See Our Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span>Loved by independents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No long lock-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Transparent reporting</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -z-10 rounded-full radial-pink scale-150" />
              <img
                src={mascot}
                alt="Monsta gorilla mascot in a stars and stripes top hat"
                className="w-full h-auto object-contain animate-float drop-shadow-[0_30px_60px_rgba(236,0,140,0.45)]"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <StatsBar />

      {/* SERVICES OVERVIEW */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-eyebrow">What we do</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              Full-funnel growth.
              <br />
              <span className="gradient-text-pink">No silos. No fluff.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
            Pick a single service or hand us the whole funnel. Either way, every lever we pull is
            tied to one number: paying customers.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="group surface-card surface-card-hover rounded-3xl p-7 flex flex-col"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-black text-foreground">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                Explore{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY MONSTA */}
      <section className="relative py-24 md:py-32 bg-surface-3 border-y border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span className="text-eyebrow">Why Monsta</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              We're built for businesses
              <br />
              that need <span className="gradient-text-pink">real results.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyMonsta.map((item) => (
              <div key={item.title} className="surface-card surface-card-hover rounded-3xl p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground glow-pink">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-black text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-3xl mb-14">
          <span className="text-eyebrow">How it works</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
            From kick-off to leads
            <br />
            in <span className="gradient-text-pink">weeks, not months.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {howItWorks.map((s, i) => (
            <div
              key={s.step}
              className="relative surface-card rounded-3xl p-6 md:p-7 group hover:border-primary/50 transition-colors"
            >
              <div className="text-5xl font-black text-primary/20 group-hover:text-primary/60 transition-colors">
                {s.step}
              </div>
              <h3 className="mt-3 text-lg font-black text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < howItWorks.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROOF / WORK */}
      <section className="relative py-24 md:py-32 bg-surface-3 border-y border-border">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-eyebrow">Recent work</span>
              <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
                Real businesses.
                <br />
                <span className="gradient-text-pink">Real numbers.</span>
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
            >
              See all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs) => (
              <article key={cs.slug} className="surface-card surface-card-hover rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {cs.client}
                  </span>
                </div>
                <div className="mt-8">
                  <div className="text-6xl font-black gradient-text-pink">{cs.metric}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {cs.metricLabel}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-black text-foreground leading-tight">
                  {cs.headline}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.services.map((sv) => (
                    <span
                      key={sv}
                      className="inline-block rounded-full border border-border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-foreground/70"
                    >
                      {sv}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES TEASER */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-3xl mb-14">
          <span className="text-eyebrow">Packages</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
            Simple pricing.
            <br />
            <span className="gradient-text-pink">No surprises.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 ${
                p.highlighted ? "bg-primary text-primary-foreground glow-pink-lg" : "surface-card"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-background border border-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                  <Star className="h-3 w-3 fill-primary" /> Most popular
                </span>
              )}
              <h3 className="text-2xl font-black">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-black">{p.price}</span>
                <span className={p.highlighted ? "opacity-80" : "text-muted-foreground"}>
                  {p.cadence}
                </span>
              </div>
              <p
                className={`mt-3 text-sm ${p.highlighted ? "opacity-90" : "text-muted-foreground"}`}
              >
                {p.tagline}
              </p>
              <Link
                to="/packages"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                  p.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:glow-pink"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface-3 border-y border-border py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <span className="text-eyebrow">What clients say</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              The proof is in
              <br />
              <span className="gradient-text-pink">the pipeline.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="surface-card rounded-3xl p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
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
        </div>
      </section>

      {/* INSIGHTS TEASER */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-eyebrow">Insights & Academy</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              Learn how growth
              <br />
              <span className="gradient-text-pink">actually works.</span>
            </h2>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
          >
            All insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {insights.slice(0, 3).map((i) => (
            <Link
              key={i.slug}
              to="/insights"
              className="surface-card surface-card-hover rounded-3xl p-7 block"
            >
              <span className="text-eyebrow">{i.category}</span>
              <h3 className="mt-4 text-xl font-black text-foreground leading-tight">{i.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{i.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{i.readTime}</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TrustBadges />

      <CtaBlock secondary={{ label: "See Packages", to: "/packages" }} />
    </PageShell>
  );
}
