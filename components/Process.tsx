"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Braces,
  DraftingCompass,
  type LucideIcon,
  Network,
  Search
} from "lucide-react";
import { processSteps } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./ui/SectionReveal";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  drafting: DraftingCompass,
  code: Braces,
  network: Network,
  growth: BarChart3
};

export function Process() {
  return (
    <section id="proceso" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionReveal>
          <SectionHeader
            eyebrow="Proceso SILEX"
            title="Una secuencia clara para resultados medibles."
            description="Cada etapa conecta estrategia, ejecución y mejora continua sin saturar la operación de tu equipo."
            center
          />
        </SectionReveal>

        <div className="connector-line mt-14 grid gap-4 xl:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <SectionReveal key={step.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="panel relative h-full rounded-[1.75rem] px-5 pb-6 pt-8"
                >
                  <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-1/2 xl:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/14 bg-[#08101d] font-display text-2xl text-cloud shadow-glow">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex items-center justify-between xl:pt-8">
                    <span className="font-display text-3xl text-cloud xl:hidden">0{index + 1}</span>
                    <div className="rounded-2xl border border-[#8DB7FF]/18 bg-[#8DB7FF]/8 p-3 text-[#8DB7FF]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-4xl leading-none text-cloud">{step.title}</h3>
                  <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#8DB7FF] to-transparent" />
                  <p className="mt-5 text-sm leading-7 text-steel">{step.description}</p>
                </motion.article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
