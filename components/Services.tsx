"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Globe,
  type LucideIcon,
  MoveUpRight,
  Radar,
  Workflow
} from "lucide-react";
import { services } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./ui/SectionReveal";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  sparkles: BrainCircuit,
  workflow: Workflow,
  chart: BarChart3,
  target: Radar
};

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionReveal>
          <SectionHeader
            eyebrow="Servicios"
            title="Presencia, sistemas y decisión conectados."
            description="Cada servicio está diseñado para eliminar improvisación digital y convertir la tecnología en una ventaja operativa clara."
          />
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <SectionReveal key={service.title} delay={index * 0.08} className="h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`panel flint-outline flex h-full flex-col rounded-[1.75rem] p-5 ${
                    index === 0 || index === 4 ? "xl:translate-y-6" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-steel">0{index + 1}</span>
                    <div className="rounded-2xl border border-[#8DB7FF]/20 bg-[#8DB7FF]/8 p-3 text-[#8DB7FF]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="mt-10 font-display text-4xl leading-none text-cloud">
                    {service.title}
                  </h3>
                  <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#8DB7FF] to-transparent" />
                  <p className="mt-5 flex-1 text-sm leading-7 text-steel">{service.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-cloud">
                    <span>Diseño + ejecución</span>
                    <MoveUpRight size={15} />
                  </div>
                </motion.article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
