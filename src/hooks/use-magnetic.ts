import { useEffect, useRef } from "react";

/**
 * Nudges an element toward the cursor while hovered (desktop, fine-pointer
 * only) and springs it back on leave. Purely decorative — never blocks
 * clicks or keyboard activation since it only sets a CSS transform.
 */
export function useMagnetic<T extends HTMLElement>(strength = 18) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      node.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
    };
    const onLeave = () => {
      node.style.transform = "translate(0, 0)";
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
