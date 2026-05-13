"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BriefcaseBusiness, Sparkles, Workflow } from "lucide-react";
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

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-20 lg:pb-28">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="section-kicker text-xs sm:text-sm">Consultora digital de nueva precisión</p>
            <h1 className="mt-5 max-w-3xl font-display text-[3.7rem] leading-[0.9] text-cloud xs:text-[4.5rem] sm:text-[5.3rem] lg:text-[6.4rem]">
              Sistemas digitales que hacen crecer tu negocio.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-steel sm:text-lg">
              Diseñamos sitios web, automatizaciones, datos e IA para que tu empresa opere con más
              claridad, eficiencia y control.
            </p>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row">
              <Button href="#diagnostico" className="group">
                <span>Agendar diagnóstico</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#servicios" variant="secondary">
                Ver servicios
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="panel flint-outline rounded-[1.5rem] px-4 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-steel">{item.label}</p>
                  <p className="mt-3 font-display text-3xl text-cloud">{item.value}</p>
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
              className="panel hero-grid flint-cut rounded-[2rem] p-4 sm:p-6"
            >
              <div className="rounded-[1.6rem] border border-white/10 bg-[#08101d]/88 p-4 shadow-glow sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-steel">Centro operativo</p>
                    <h2 className="mt-3 max-w-sm font-display text-3xl leading-tight text-cloud sm:text-4xl">
                      Operación más clara. Resultados más medibles.
                    </h2>
                  </div>
                  <div className="hidden rounded-full border border-[#8DB7FF]/25 bg-[#8DB7FF]/10 p-3 text-[#8DB7FF] sm:block">
                    <Sparkles size={18} />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.25fr_0.95fr]">
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
                    <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-white/4 p-4">
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
                            className="flex-1 rounded-t-full bg-gradient-to-t from-[#8DB7FF]/18 to-[#8DB7FF]/90"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {heroFlows.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.35 + index * 0.08 }}
                          className="panel rounded-[1.5rem] p-4"
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
