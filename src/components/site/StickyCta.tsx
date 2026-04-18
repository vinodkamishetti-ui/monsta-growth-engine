import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to="/contact"
      aria-label="Book a free strategy call"
      className={`lg:hidden fixed bottom-5 inset-x-5 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-2xl glow-pink transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      Book Free Strategy Call
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
