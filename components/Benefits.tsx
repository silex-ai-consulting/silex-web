"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Layers3, LineChart, MonitorSmartphone, Workflow } from "lucide-react";
import { benefits } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./ui/SectionReveal";

const icons = [Layers3, Workflow, MonitorSmartphone, LineChart, ArrowUpRight];

export function Benefits() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionReveal className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="Beneficios"
            title="Menos improvisación. Más estructura útil."
            description="SILEX ordena tu presencia digital y tu operación para que cada mejora tenga impacto real en cómo vendes, operas y escalas."
          />
          <div className="mt-8 panel flint-cut rounded-[1.75rem] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-steel">Lo que cambia</p>
            <div className="mt-6 space-y-4">
              {[
                "Presencia digital alineada con una marca seria",
                "Procesos menos dependientes de trabajo manual",
                "Información más ordenada para decidir con criterio"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-steel">
                  <Check size={18} className="mt-1 shrink-0 text-[#8DB7FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];

            return (
              <SectionReveal key={benefit.title} delay={index * 0.08} className={index === 4 ? "sm:col-span-2" : ""}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className={`panel rounded-[1.75rem] p-5 sm:p-6 ${index === 4 ? "lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-6" : ""}`}
                >
                  <div className="rounded-2xl border border-[#8DB7FF]/18 bg-[#8DB7FF]/8 p-3 text-[#8DB7FF] w-fit">
                    <Icon size={18} />
                  </div>
                  <div className={index === 4 ? "mt-5 lg:mt-0" : ""}>
                    <h3 className="mt-6 font-display text-4xl leading-none text-cloud lg:mt-8">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-steel">{benefit.description}</p>
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
