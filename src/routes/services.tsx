import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Target, Search, Share2, Sparkles, Zap,
  MonitorSmartphone, CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBlock } from "@/components/site/CtaBlock";
import { services } from "@/lib/site-config";

const iconMap = { Target, Search, Share2, Sparkles, Zap, MonitorSmartphone } as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Paid Ads, SEO, Branding & More | Monsta Media" },
      {
        name: "description",
        content:
          "Full-funnel growth services for small businesses: paid ads, SEO, branding, organic social, funnels, automations and high-converting websites.",
      },
      { property: "og:title", content: "Services — Monsta Media Group" },
      {
        property: "og:description",
        content:
          "Paid ads, SEO, branding, social, funnels, automations and websites — built to bring you predictable leads.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="What we do"
        title={
          <>
            Six services.
            <br />
            <span className="gradient-text-pink">One growth engine.</span>
          </>
        }
        subtitle="Use them on their own. Stack them together. Either way, everything we build ladders up to one outcome — more paying customers."
      />

      <section className="container-x">
        <nav className="flex flex-wrap gap-2 md:gap-3 pb-12 border-b border-border">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground/80 hover:border-primary hover:text-primary transition-colors"
            >
              {s.name}
            </a>
          ))}
        </nav>
      </section>

      <div className="container-x">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Sparkles;
          const reverse = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center py-20 md:py-28 border-b border-border last:border-b-0 scroll-mt-28"
            >
              <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                <span className="text-eyebrow">0{i + 1} — Service</span>
                <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
                  {s.name}
                </h2>
                <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {s.short}
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="surface-card rounded-2xl p-6">
                    <div className="text-eyebrow">Why it matters</div>
                    <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{s.why}</p>
                  </div>
                  <div className="surface-card rounded-2xl p-6">
                    <div className="text-eyebrow">The outcome</div>
                    <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{s.outcome}</p>
                  </div>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all"
                >
                  Talk About {s.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                <div className="relative aspect-square max-w-md mx-auto rounded-4xl surface-card overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 radial-pink opacity-80" />
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="relative">
                    <div className="inline-flex h-32 w-32 items-center justify-center rounded-3xl bg-primary text-primary-foreground glow-pink-lg">
                      <Icon className="h-16 w-16" />
                    </div>
                    <div className="mt-8 text-center text-eyebrow">
                      {s.name}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBlock
        eyebrow="Not sure which service?"
        title="Tell us your goal. We'll build the plan."
        subtitle="One free 30-minute call. We'll listen, ask the right questions, and recommend the smallest path to more leads — even if that's not us."
        secondary={{ label: "See Packages", to: "/packages" }}
      />
    </PageShell>
  );
}
