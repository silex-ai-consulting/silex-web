"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CircleCheckBig } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./ui/Button";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./ui/SectionReveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  needs: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  needs: ""
};

export function FinalCTA() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message);
      }

      setMessage(result.message);
      setForm(initialState);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "No fue posible enviar el diagnóstico."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="diagnostico" className="pb-20 pt-20 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <SectionReveal className="panel flint-cut flex flex-col rounded-[2rem] p-6 sm:p-8">
            <div className="rounded-full border border-[#8DB7FF]/18 bg-[#8DB7FF]/8 p-3 text-[#8DB7FF] w-fit">
              <CalendarDays size={18} />
            </div>
            <div className="mt-8">
              <SectionHeader
                eyebrow="Diagnóstico digital"
                title="¿Listo para hacer que tu negocio se vea y opere mejor?"
                description="Agenda un diagnóstico digital con SILEX y descubre oportunidades para mejorar tu presencia, procesos y crecimiento."
              />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Análisis de presencia digital",
                "Revisión de procesos clave",
                "Oportunidades de automatización",
                "Ruta inicial de mejora"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-steel">
                  <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-[#8DB7FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="panel rounded-[2rem] p-5 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="section-kicker text-xs">Contacto</p>
                  <h3 className="mt-3 font-display text-4xl leading-none text-cloud sm:text-5xl">
                    Agendar diagnóstico
                  </h3>
                </div>
                <div className="hidden rounded-full border border-white/10 px-4 py-2 text-xs text-steel sm:block">
                  API route preparada
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4" id="contacto">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-steel">Nombre</span>
                    <input
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-cloud outline-none transition-colors duration-300 placeholder:text-steel/60 focus:border-[#8DB7FF]/40"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-steel">Correo electrónico</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-cloud outline-none transition-colors duration-300 placeholder:text-steel/60 focus:border-[#8DB7FF]/40"
                      placeholder="correo@empresa.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-steel">Empresa</span>
                  <input
                    value={form.company}
                    onChange={(event) => setForm({ ...form, company: event.target.value })}
                    className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-cloud outline-none transition-colors duration-300 placeholder:text-steel/60 focus:border-[#8DB7FF]/40"
                    placeholder="Nombre de tu empresa"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-steel">Objetivo principal</span>
                  <textarea
                    value={form.needs}
                    onChange={(event) => setForm({ ...form, needs: event.target.value })}
                    rows={5}
                    className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-cloud outline-none transition-colors duration-300 placeholder:text-steel/60 focus:border-[#8DB7FF]/40"
                    placeholder="Cuéntanos qué necesitas mejorar en tu presencia, procesos o sistemas."
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" disabled={isSubmitting} className="group w-full sm:w-auto">
                    <span>{isSubmitting ? "Enviando..." : "Agendar diagnóstico"}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <p className="text-sm text-steel">
                    Sin integraciones externas todavía. Queda listo para conectar CRM, email o agenda.
                  </p>
                </div>

                {message ? <p className="text-sm text-[#8DB7FF]">{message}</p> : null}
                {error ? <p className="text-sm text-[#f0b3b3]">{error}</p> : null}
              </form>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
