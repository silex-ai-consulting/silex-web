"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`section-shell rounded-[1.85rem] border transition-all duration-300 ${
            scrolled
              ? "border-white/12 bg-[#081121]/90 shadow-panel backdrop-blur-xl"
              : "border-white/8 bg-[#07101d]/70 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-3.5">
            <Logo compact withTagline />
            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-steel transition-colors duration-300 hover:text-cloud"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <Button href="#diagnostico" className="px-5 py-2.5 text-xs" variant="secondary">
                Agendar diagnóstico
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-cloud md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-3 top-[5.45rem] z-40 md:hidden"
          >
            <div className="section-shell panel rounded-[1.75rem] px-5 py-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-steel">Navegación</p>
                  <p className="mt-2 max-w-[15rem] text-sm leading-6 text-cloud">
                    Presencia web, automatización, datos e IA con criterio premium.
                  </p>
                </div>
                <Logo compact />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-transparent px-4 py-3.5 text-base text-steel transition-colors duration-300 hover:border-white/8 hover:bg-white/5 hover:text-cloud"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Button href="#diagnostico" className="mt-4 w-full" onClick={() => setOpen(false)}>
                Agendar diagnóstico
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
