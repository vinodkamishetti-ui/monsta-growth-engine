import { ShieldCheck, Award, Lock, MapPin } from "lucide-react";
import { trustBadges } from "@/lib/site-config";

const iconMap = { ShieldCheck, Award, Lock, MapPin } as const;

export function TrustBadges() {
  return (
    <section className="container-x py-16 md:py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((b) => {
          const Icon = iconMap[b.icon as keyof typeof iconMap];
          return (
            <div
              key={b.label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface/40 px-5 py-4"
            >
              <Icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-semibold text-foreground/90">{b.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
