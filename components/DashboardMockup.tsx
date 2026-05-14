"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Cpu, FileBarChart2, ShieldCheck } from "lucide-react";
import { dashboardCards, dashboardStats } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./ui/SectionReveal";

export function DashboardMockup() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionReveal>
          <SectionHeader
            eyebrow="Visibilidad operativa"
            title="Un sistema sobrio para entender qué está pasando."
            description="Paneles conectados, métricas útiles y señales precisas para decidir con calma, no con intuición."
            center
          />
        </SectionReveal>

        <SectionReveal delay={0.12} className="mt-12">
          <div className="panel relative rounded-[2rem] p-4 sm:p-6 lg:p-8">
            <div className="absolute inset-x-10 top-0 hidden h-px bg-gradient-to-r from-transparent via-[#8DB7FF]/70 to-transparent lg:block" />
            <div className="connector-dot left-[14%] top-[7.5rem] hidden lg:block" />
            <div className="connector-dot left-[50%] top-[5.8rem] hidden lg:block" />
            <div className="connector-dot right-[14%] top-[7.5rem] hidden lg:block" />
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.25fr_0.9fr]">
              <div className="space-y-4">
                {dashboardCards.slice(0, 2).map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    className="panel rounded-[1.5rem] p-4"
                  >
                    <p className="text-sm text-cloud">{card.title}</p>
                    <div className="mt-4 space-y-3">
                      {card.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-steel">
                          <CheckCircle2 size={16} className="text-[#8DB7FF]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8 }}
                className="panel hero-grid rounded-[1.75rem] p-4 sm:p-5"
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-[#f2efe8] text-[#11151e] shadow-[0_22px_50px_rgba(0,0,0,0.22)]">
                  <div className="flex items-center justify-between border-b border-black/8 px-4 py-4 sm:px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-black/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.28em] text-black/60">SILEX System</p>
                  </div>
                  <div className="grid gap-5 p-4 sm:p-5">
                    <div className="grid gap-5 md:grid-cols-[1fr_0.85fr]">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-black/45">Resumen ejecutivo</p>
                        <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                          Sistemas digitales que impulsan resultados más sólidos.
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-7 text-black/62">
                          Ordenamos presencia, automatización, datos e inteligencia aplicada para
                          que tu negocio opere con más control y menos fricción.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {["Arquitectura clara", "Automatización práctica", "Métricas útiles"].map(
                            (pill) => (
                              <span
                                key={pill}
                                className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/70"
                              >
                                {pill}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                      <div className="rounded-[1.35rem] bg-gradient-to-br from-[#dfe4ec] via-[#f5f2eb] to-[#cfd8ea] p-4">
                        <div className="h-full rounded-[1.1rem] border border-black/5 bg-[linear-gradient(135deg,#e8edf5_0%,#d7dde7_40%,#1f2430_40%,#0f1320_100%)] p-4">
                          <div className="flex h-full items-end justify-between">
                            <div className="space-y-2">
                              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                                Diagnóstico premium
                              </p>
                              <p className="max-w-[8rem] font-display text-2xl leading-tight text-cloud">
                                Precisión, claridad y control.
                              </p>
                            </div>
                            <div className="h-20 w-20 rounded-full border border-white/20 bg-white/10" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {dashboardStats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-[1.25rem] border border-black/8 bg-white/70 p-4 backdrop-blur-md"
                        >
                          <p className="text-xs uppercase tracking-[0.22em] text-black/48">{stat.label}</p>
                          <p className="mt-3 font-display text-4xl leading-none text-[#10151f]">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-xs text-black/55">{stat.note}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-3 lg:grid-cols-[1.3fr_0.95fr]">
                      <div className="rounded-[1.35rem] border border-black/8 bg-white/74 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Rendimiento operativo</p>
                          <span className="text-xs text-black/45">Últimos 6 ciclos</span>
                        </div>
                        <div className="mt-6 flex h-40 items-end gap-3">
                          {[28, 34, 41, 39, 53, 64].map((value, index) => (
                            <motion.div
                              key={value}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.06 }}
                              className="flex-1 rounded-t-[1.25rem] bg-gradient-to-t from-[#10151f] to-[#8DB7FF]"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[1.35rem] border border-black/8 bg-white/74 p-4">
                        <p className="text-sm font-medium">Estado del sistema</p>
                        <div className="mt-4 space-y-3">
                          {[
                            { label: "Sitio web", status: "En línea" },
                            { label: "Integraciones", status: "Conectado" },
                            { label: "Reportes", status: "Actualizados" }
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="flex items-center justify-between rounded-2xl border border-black/6 bg-white/70 px-3 py-3"
                            >
                              <span className="text-sm text-black/70">{item.label}</span>
                              <span className="text-sm text-[#234f9e]">{item.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65 }}
                  className="panel rounded-[1.5rem] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-[#8DB7FF]/18 bg-[#8DB7FF]/8 p-3 text-[#8DB7FF]">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-cloud">IA aplicada</p>
                      <p className="mt-1 text-sm text-steel">
                        Priorización, síntesis y análisis con criterio operativo.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                  className="panel rounded-[1.5rem] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-[#8DB7FF]/18 bg-[#8DB7FF]/8 p-3 text-[#8DB7FF]">
                      <FileBarChart2 size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-cloud">Reportes sobrios</p>
                      <p className="mt-1 text-sm text-steel">
                        Menos ruido visual. Más señales útiles para la dirección del negocio.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: 0.16 }}
                  className="panel rounded-[1.5rem] p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-cloud">Gobernanza del sistema</p>
                      <p className="mt-1 text-sm text-steel">
                        Procesos documentados, decisiones rastreables y operación confiable.
                      </p>
                    </div>
                    <ShieldCheck className="text-[#8DB7FF]" size={22} />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: 0.24 }}
                  className="panel rounded-[1.5rem] p-4"
                >
                  <p className="text-sm text-cloud">{dashboardCards[2].title}</p>
                  <div className="mt-4 space-y-3">
                    {dashboardCards[2].items.map((item) => (
                      <div key={item} className="flex items-center justify-between text-sm text-steel">
                        <span>{item}</span>
                        <ChevronRight size={16} className="text-[#8DB7FF]" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
