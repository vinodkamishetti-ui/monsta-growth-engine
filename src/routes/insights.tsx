import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBlock } from "@/components/site/CtaBlock";
import { insights } from "@/lib/site-config";
import { api } from "@/lib/api";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Academy — Marketing Guides | Monsta Media" },
      {
        name: "description",
        content:
          "Practical growth guides for small business owners. Paid ads, SEO, branding, funnels and automations explained in plain English.",
      },
      { property: "og:title", content: "Insights — Monsta Media Group" },
      {
        property: "og:description",
        content: "Plain-English growth guides for small business owners.",
      },
    ],
  }),
  component: InsightsPage,
});

const categories = ["All", "Paid Ads", "SEO", "Funnels", "Social", "Automations", "Branding"];

function InsightsPage() {
  const [active, setActive] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");

  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await api.subscribeNewsletter({ email });
    setStatus("ok");
    setEmail("");
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Insights & Academy"
        title={
          <>
            Growth tactics
            <br />
            <span className="gradient-text-pink">in plain English.</span>
          </>
        }
        subtitle="Guides, breakdowns and playbooks from the campaigns we run every day. No fluff, no theory — just what's working right now."
      />

      <section className="container-x">
        <div className="flex flex-wrap gap-2 pb-12 border-b border-border">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground glow-pink"
                  : "border border-border bg-surface text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <article
              key={post.slug}
              className="group surface-card surface-card-hover rounded-3xl p-7 flex flex-col"
            >
              <div className="aspect-video rounded-2xl bg-surface-3 relative overflow-hidden mb-6">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 radial-pink opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary border border-primary/40">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-black text-foreground leading-tight">{post.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between pt-5 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>

              {/* Filler key for variety / future-prefetch placeholders */}
              <span className="hidden">{i}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-x pb-24">
        <div className="surface-card rounded-4xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 radial-pink opacity-70" />
          <div className="relative grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <span className="text-eyebrow">The Monsta newsletter</span>
              <h2 className="text-display mt-4 text-3xl md:text-5xl text-foreground">
                One growth tactic.
                <br />
                <span className="gradient-text-pink">Every Friday.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Short, practical, written for small business owners. Unsubscribe any time.
              </p>
            </div>
            <form onSubmit={subscribe} className="md:col-span-5">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground glow-pink disabled:opacity-60"
                >
                  {status === "loading" ? "Joining…" : status === "ok" ? "Subscribed" : "Subscribe"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="Done reading?"
        title="Let's apply this to your business."
        subtitle="The playbooks work — but they work faster with help. Book a free call and we'll do the heavy lifting."
        secondary={{ label: "See Packages", to: "/packages" }}
      />

      <Link to="/contact" className="hidden" aria-hidden />
    </PageShell>
  );
}
