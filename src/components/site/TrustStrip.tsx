import { trustLogos } from "@/lib/site-config";

export function TrustStrip() {
  const items = [...trustLogos, ...trustLogos];
  return (
    <section className="border-y border-border bg-surface-3 py-6 overflow-hidden">
      <div className="flex marquee gap-16 whitespace-nowrap">
        {items.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
