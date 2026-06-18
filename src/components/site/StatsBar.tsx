import { stats } from "@/lib/site-config";

export function StatsBar() {
  return (
    <section className="container-x -mt-2 md:-mt-4 relative z-10">
      <div className="surface-card rounded-3xl p-8 md:p-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-display text-4xl md:text-5xl gradient-text-pink">{s.value}</div>
            <div className="mt-2 text-[0.7rem] md:text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
