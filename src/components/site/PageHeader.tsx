import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-24">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 radial-pink" />
      <div className="container-x relative">
        <span className="text-eyebrow">{eyebrow}</span>
        <h1 className="text-display mt-4 text-5xl md:text-7xl lg:text-8xl text-foreground max-w-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
