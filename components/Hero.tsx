"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Clock3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { Button } from "./ui/Button";

const heroStats = [
  { label: "Procesos claros", value: "4 capas" },
  { label: "Automatizaciones", value: "12 activas" },
  { label: "Paneles", value: "8 reportes" }
];

const heroFlows = [
  { title: "Diagnóstico", description: "Objetivos, procesos y fricción detectada", icon: BriefcaseBusiness },
  { title: "Automatización", description: "Reglas, alertas y tareas conectadas", icon: Workflow },
  { title: "Visibilidad", description: "Métricas sobrias para decidir mejor", icon: BarChart3 }
];

const heroSignals = ["Web", "IA", "Automatización", "Datos", "Estrategia"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-14 lg:pb-28">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span className="h-2 w-2 rounded-full bg-[#8DB7FF] shadow-[0_0_16px_rgba(141,183,255,0.9)]" />
              <p className="section-kicker text-[0.68rem] sm:text-xs">Consultora digital de nueva precisión</p>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-[3.55rem] leading-[0.88] tracking-[-0.04em] text-cloud xs:text-[4.2rem] sm:text-[5rem] lg:text-[5.8rem] xl:text-[6.7rem]">
              Sistemas digitales que hacen crecer <span className="text-ice">tu negocio.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-steel sm:text-lg">
              Diseñamos sitios web, automatizaciones, datos e IA para que tu empresa opere con más
              claridad, eficiencia y control.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {heroSignals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.035] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.26em] text-steel sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row">
              <Button href="#diagnostico" className="group w-full xs:w-auto">
                <span>Agendar diagnóstico</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#servicios" variant="secondary" className="w-full xs:w-auto">
                Ver servicios
              </Button>
            </div>
            <div className="mt-8 premium-divider max-w-2xl" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="panel flint-outline rounded-[1.5rem] px-4 py-4 sm:px-5"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-steel">{item.label}</p>
                  <p className="mt-3 font-display text-[2rem] leading-none text-cloud sm:text-[2.2rem]">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="dashboard-glow" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="panel hero-grid facet-lines flint-cut rounded-[2rem] p-3.5 sm:p-5 lg:p-6"
            >
              <div className="hero-shards" />
              <div className="rounded-[1.6rem] border border-white/10 bg-[#08101d]/88 p-4 shadow-glow sm:p-5 lg:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.26em] text-steel sm:text-xs">
                      SILEX Control Layer
                    </div>
                    <div className="hidden h-1.5 w-1.5 rounded-full bg-[#8DB7FF] shadow-[0_0_14px_rgba(141,183,255,0.9)] sm:block" />
                    <div className="hidden text-xs uppercase tracking-[0.26em] text-steel sm:block">
                      Estado estable
                    </div>
                  </div>
                  <div className="rounded-full border border-[#8DB7FF]/25 bg-[#8DB7FF]/10 p-3 text-[#8DB7FF]">
                    <Sparkles size={18} />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.95fr]">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-steel">Centro operativo</p>
                      <h2 className="mt-3 max-w-md font-display text-[2.45rem] leading-[0.94] tracking-[-0.03em] text-cloud sm:text-[3.2rem]">
                        Operación más clara. Resultados más medibles.
                      </h2>
                    </div>

                    <div className="panel rounded-[1.5rem] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-cloud">Resumen del negocio</p>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-steel">
                          Este mes
                        </span>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-steel">Solicitudes</p>
                          <p className="mt-2 font-display text-3xl">124</p>
                          <p className="mt-2 text-xs text-[#8DB7FF]">+18% organización</p>
                        </div>
                        <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-steel">Tiempo</p>
                          <p className="mt-2 font-display text-3xl">18h</p>
                          <p className="mt-2 text-xs text-[#8DB7FF]">ahorradas al mes</p>
                        </div>
                      </div>
                      <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(141,183,255,0.03))] p-4">
                        <div className="flex items-center justify-between text-xs text-steel">
                          <span>Tendencia operativa</span>
                          <span>Últimas 6 semanas</span>
                        </div>
                        <div className="mt-4 flex h-28 items-end gap-2">
                          {[24, 34, 28, 46, 42, 56, 62].map((bar, index) => (
                            <motion.div
                              key={bar}
                              initial={{ height: 0 }}
                              animate={{ height: `${bar}%` }}
                              transition={{ duration: 0.75, delay: 0.3 + index * 0.06 }}
                              className="flex-1 rounded-t-full bg-gradient-to-t from-[#8DB7FF]/12 via-[#93b8ff]/45 to-[#d9e5ff]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { label: "Protocolos", value: "6", icon: ShieldCheck },
                        { label: "Ciclos", value: "24", icon: Clock3 },
                        { label: "Reportes", value: "8", icon: LineChart }
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div key={item.label} className="panel rounded-[1.3rem] p-4">
                            <div className="flex items-center justify-between">
                              <p className="text-xs uppercase tracking-[0.2em] text-steel">{item.label}</p>
                              <Icon size={16} className="text-[#8DB7FF]" />
                            </div>
                            <p className="mt-4 font-display text-3xl text-cloud">{item.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="panel flint-outline rounded-[1.55rem] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-cloud">Secuencia activa</p>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#8DB7FF]">
                          Flujo sincronizado
                        </span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {heroFlows.map((item, index) => {
                          const Icon = item.icon;

                          return (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, x: 18 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.35 + index * 0.08 }}
                              className="rounded-[1.3rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4"
                            >
                              <div className="flex items-start gap-3">
                                <div className="rounded-2xl border border-[#8DB7FF]/18 bg-[#8DB7FF]/8 p-3 text-[#8DB7FF]">
                                  <Icon size={18} />
                                </div>
                                <div>
                                  <p className="font-semibold text-cloud">{item.title}</p>
                                  <p className="mt-1 text-sm leading-6 text-steel">{item.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="panel rounded-[1.5rem] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-steel">Stack conectado</p>
                          <p className="mt-2 max-w-[16rem] text-sm leading-6 text-cloud">
                            Web, automatización, datos y criterio estratégico en un mismo sistema.
                          </p>
                        </div>
                        <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-steel">
                          Premium
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {["Web", "Datos", "IA"].map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.2rem] border border-white/8 bg-white/4 px-3 py-4 text-center text-xs uppercase tracking-[0.22em] text-cloud"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-3">
                  {[
                    "Presencia digital premium",
                    "Operaciones más sobrias",
                    "Decisiones con más precisión"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-steel">
                      <span className="h-2 w-2 rounded-full bg-[#8DB7FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
