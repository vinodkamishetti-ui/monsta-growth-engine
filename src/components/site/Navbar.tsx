import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoLight from "@/assets/monsta-logo-light.png";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Monsta home">
            <img
              src={logoLight}
              alt="Monsta Media Group"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-foreground/75 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground glow-pink hover:glow-pink-lg transition-all"
            >
              Book a Call
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl transition-opacity lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex h-20 items-center justify-between px-5 md:px-8">
          <img src={logoLight} alt="Monsta" className="h-10 w-auto" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-7 px-6 py-16">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-3xl font-black uppercase tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground glow-pink"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </>
  );
}
