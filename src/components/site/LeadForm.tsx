import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { api, type LeadPayload } from "@/lib/api";
import { services } from "@/lib/site-config";

export function LeadForm({ source = "contact-page" }: { source?: string }) {
  const [form, setForm] = useState<LeadPayload>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    source,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const update =
    (key: keyof LeadPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setError(null);
    const res = await api.submitLead(form);
    if (res.ok) {
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "", source });
    } else {
      setStatus("error");
      setError(res.error);
    }
  };

  if (status === "ok") {
    return (
      <div className="surface-card rounded-3xl p-10 text-center">
        <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-black text-foreground">Thanks — we've got it.</h3>
        <p className="mt-3 text-muted-foreground">
          One of the team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card rounded-3xl p-6 md:p-8 space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your name" required>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Smith"
            className="form-input"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@business.com"
            className="form-input"
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="07000 000000"
            className="form-input"
          />
        </Field>
        <Field label="Business name">
          <input
            value={form.company}
            onChange={update("company")}
            placeholder="Your business"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="What are you looking for?">
        <select value={form.service} onChange={update("service")} className="form-input">
          <option value="">Pick a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="not-sure">Not sure yet — want advice</option>
        </select>
      </Field>

      <Field label="Tell us about your business" required>
        <textarea
          required
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="What do you sell, who's your customer, what's the goal?"
          className="form-input resize-none"
        />
      </Field>

      {status === "error" && error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We reply within one business day. No spam, ever.
      </p>

      <style>{`
        .form-input {
          width: 100%;
          background: oklch(0.08 0 0);
          border: 1px solid var(--color-border);
          color: var(--color-foreground);
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          font-family: var(--font-sans);
          transition: border-color .2s, box-shadow .2s;
        }
        .form-input::placeholder { color: var(--color-muted-foreground); }
        .form-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px oklch(0.605 0.273 354 / 0.15); }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-foreground/80">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
