import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBlock } from "@/components/site/CtaBlock";
import { caseStudies, testimonials } from "@/lib/site-config";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Real Results for Real Businesses | Monsta Media" },
      {
        name: "description",
        content:
          "Case studies and campaign results from small businesses we've grown — clinics, trades, e-commerce, hospitality and more.",
      },
      { property: "og:title", content: "Our Work — Monsta Media Group" },
      {
        property: "og:description",
        content: "Real campaigns. Real businesses. Real numbers.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            Real businesses.
            <br />
            <span className="gradient-text-pink">Real numbers.</span>
          </>
        }
        subtitle="A snapshot of recent campaigns and rebuilds. Outcome blocks are editable — your real metrics drop straight in."
      />

      {/* Stats strip */}
      <section className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "120+", l: "Campaigns launched" },
            { v: "£8M+", l: "Ad spend managed" },
            { v: "4.9/5", l: "Client satisfaction" },
            { v: "60+", l: "Active clients" },
          ].map((s) => (
            <div key={s.l} className="surface-card rounded-3xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-black gradient-text-pink">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies grid */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              className="group surface-card surface-card-hover rounded-3xl p-7 flex flex-col"
            >
              <div className="aspect-[4/3] rounded-2xl bg-surface-3 relative overflow-hidden mb-6">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 radial-pink opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-5xl font-black gradient-text-pink">{cs.metric}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {cs.metricLabel}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-primary">
                  {cs.client}
                </span>
                <span className="uppercase tracking-wider text-muted-foreground">
                  {cs.industry}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-black text-foreground leading-tight flex-1">
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
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                Read case study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-3 border-y border-border py-24">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <span className="text-eyebrow">Client voices</span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-foreground">
              Don't take our word for it.
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

      <CtaBlock
        eyebrow="Want results like these?"
        title="Let's build your case study."
        subtitle="Book a free strategy call and we'll map out exactly how we'd grow your business."
        secondary={{ label: "See Services", to: "/services" }}
      />

      {/* Hidden Link to satisfy unused import in some builds */}
      <Link to="/contact" className="hidden" aria-hidden />
    </PageShell>
  );
}
