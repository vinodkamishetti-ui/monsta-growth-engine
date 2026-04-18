import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBlock } from "@/components/site/CtaBlock";
import { packages } from "@/lib/site-config";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Monsta Media Group" },
      {
        name: "description",
        content:
          "Transparent monthly packages built for small businesses. From starter lead-gen to full-funnel scale. No long contracts. No hidden fees.",
      },
      { property: "og:title", content: "Packages & Pricing — Monsta Media Group" },
      {
        property: "og:description",
        content: "Simple monthly packages for small businesses ready to grow.",
      },
    ],
  }),
  component: PackagesPage,
});

const compareRows = [
  { feature: "Paid ads management", values: ["1 channel", "2 channels", "Multi-channel"] },
  { feature: "Landing pages", values: ["1 page", "Funnel build", "Unlimited"] },
  { feature: "Email & SMS automations", values: ["Basic", "Advanced", "Advanced + CRM"] },
  { feature: "SEO", values: [false, "Local foundations", "Full programme"] },
  { feature: "Organic social", values: [false, false, true] },
  { feature: "Strategy calls", values: ["Monthly", "Bi-weekly", "Weekly"] },
  { feature: "Reporting dashboard", values: [true, true, true] },
  { feature: "Dedicated account lead", values: [false, true, true] },
];

function PackagesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Packages"
        title={
          <>
            Pricing built for
            <br />
            <span className="gradient-text-pink">small businesses.</span>
          </>
        }
        subtitle="Pick the package that fits. Upgrade or downgrade any time. No long contracts — stay because it works."
      />

      {/* Cards */}
      <section className="container-x">
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.highlighted
                  ? "bg-primary text-primary-foreground glow-pink-lg"
                  : "surface-card"
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
              <p className={`mt-3 text-sm ${p.highlighted ? "opacity-90" : "text-muted-foreground"}`}>
                {p.tagline}
              </p>
              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`h-5 w-5 shrink-0 mt-0.5 ${
                        p.highlighted ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-all ${
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

      {/* Small business teaser */}
      <section className="container-x py-24">
        <div className="surface-card rounded-4xl p-8 md:p-12 grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <span className="text-eyebrow">Small business starter</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3">
              Just getting started? <span className="gradient-text-pink">We've got you.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              Tighter budget? We offer a leaner monthly plan for new businesses to switch on
              their first proper lead engine. Ask us about the Starter Local plan.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all"
            >
              Ask About Starter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="container-x pb-24">
        <div className="max-w-2xl mb-10">
          <span className="text-eyebrow">Compare packages</span>
          <h2 className="text-display mt-4 text-3xl md:text-5xl text-foreground">
            What's in each plan.
          </h2>
        </div>

        <div className="surface-card rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 text-eyebrow w-1/3">Feature</th>
                  {packages.map((p) => (
                    <th
                      key={p.name}
                      className={`p-5 text-left ${
                        p.highlighted ? "text-primary" : "text-foreground"
                      }`}
                    >
                      <div className="text-base font-black">{p.name}</div>
                      <div className="text-xs font-normal text-muted-foreground">
                        {p.price}{p.cadence}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-b-0">
                    <td className="p-5 text-foreground/90 font-medium">{row.feature}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="p-5">
                        {v === true ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : v === false ? (
                          <X className="h-5 w-5 text-muted-foreground/40" />
                        ) : (
                          <span className="text-foreground/85">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="Still deciding?"
        title="We'll recommend the right one — for free."
        subtitle="Tell us about your business on a quick call. We'll point you at the smallest package that gets the job done."
        secondary={{ label: "See Services", to: "/services" }}
      />
    </PageShell>
  );
}
