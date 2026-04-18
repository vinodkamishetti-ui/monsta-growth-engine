import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/site/LeadForm";
import { site } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Free Strategy Call | Monsta Media" },
      {
        name: "description",
        content:
          "Get in touch with Monsta Media Group. Book a free 30-minute strategy call to map your path to more leads. No pitch, no pressure.",
      },
      { property: "og:title", content: "Contact Monsta Media Group" },
      {
        property: "og:description",
        content: "Book a free strategy call. We reply within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in touch"
        title={
          <>
            Let's get you
            <br />
            <span className="gradient-text-pink">more customers.</span>
          </>
        }
        subtitle="Drop us a line or book a free 30-minute strategy call. We reply within one business day — usually faster."
      />

      <section className="container-x py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <span className="text-eyebrow">Send an enquiry</span>
            <h2 className="text-display mt-3 text-3xl md:text-4xl text-foreground mb-8">
              Tell us about your business.
            </h2>
            <LeadForm source="contact-page" />
          </div>

          {/* Info */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="surface-card rounded-3xl p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground glow-pink">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-black text-foreground">
                Book a free strategy call
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                30 minutes. Zero pitch. We'll talk through your business, your goals, and the
                fastest route to more leads — even if that's not us.
              </p>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary w-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:glow-pink transition-all"
              >
                Request a Time
              </a>
            </div>

            <div className="surface-card rounded-3xl p-7 space-y-4">
              <h3 className="text-eyebrow">Contact details</h3>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 text-foreground/90 hover:text-primary transition-colors"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-semibold">{site.email}</div>
                </div>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-4 text-foreground/90 hover:text-primary transition-colors"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="font-semibold">{site.phone}</div>
                </div>
              </a>
              <div className="flex items-start gap-4 text-foreground/90">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Studio</div>
                  <div className="font-semibold">{site.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-foreground/90">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                  <div className="font-semibold">Mon–Fri · 9:00 — 18:00 GMT</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-primary text-primary-foreground p-7 glow-pink">
              <MessageCircle className="h-7 w-7" />
              <h3 className="mt-4 text-xl font-black">Prefer WhatsApp?</h3>
              <p className="mt-2 text-sm opacity-90">
                Drop us a message any time and we'll get back to you fast.
              </p>
              <a
                href={`https://wa.me/${site.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-background w-full px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-background/90 transition-all"
              >
                Message on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
