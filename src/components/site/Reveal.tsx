import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

/**
 * Fades + lifts children into place the first time they scroll into view.
 * Pass `delay` (ms) to stagger siblings; falls back to fully visible under
 * prefers-reduced-motion (handled inside useInView / the .reveal CSS).
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <div ref={ref} className={cn("reveal", inView && "is-visible", className)} style={style}>
      {children}
    </div>
  );
}
