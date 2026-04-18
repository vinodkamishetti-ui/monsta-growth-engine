import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Facebook, Linkedin, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import logoLight from "@/assets/monsta-logo-light.png";
import { site, navLinks, services } from "@/lib/site-config";
import { api } from "@/lib/api";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    const res = await api.subscribeNewsletter({ email });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) setEmail("");
  };

  return (
    <footer className="relative mt-32 border-t border-border bg-surface-3">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={logoLight} alt="Monsta" className="h-14 w-auto" />
            <p className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
              {site.description}
            </p>

            <form onSubmit={handleSubscribe} className="mt-8 max-w-md">
              <label className="text-eyebrow mb-3 block">Get growth tips weekly</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:glow-pink transition-all disabled:opacity-60"
                >
                  {status === "loading" ? "..." : "Join"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              {status === "ok" && (
                <p className="mt-3 text-xs text-primary">Thanks — you're in.</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-xs text-destructive">Something went wrong. Try again.</p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-eyebrow mb-4">Site</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-eyebrow mb-4">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-eyebrow mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">{site.phone}</a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Built in {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
