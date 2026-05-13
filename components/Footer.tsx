import { footerLinks } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo compact />
          <p className="mt-5 text-sm uppercase tracking-[0.24em] text-steel">
            IA · Web · Automatización · Datos · Estrategia
          </p>
          <p className="mt-4 text-sm text-steel">
            Soluciones digitales para negocios modernos.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-steel">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors duration-300 hover:text-cloud">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
