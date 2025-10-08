"use client"

import { useLanguage } from "@/components/providers/language-provider"

export default function PhilosophySteps() {
  const { language } = useLanguage()
  const isSpanish = language === 'es'

  const STEPS = [
    { 
      n: "01", 
      t: "Diagnóstico integral", 
      tEn: "Comprehensive diagnosis",
      d: "Historial, hábitos y biomarcadores.", 
      dEn: "History, habits and biomarkers." 
    },
    { 
      n: "02", 
      t: "Plan personalizado", 
      tEn: "Personalized plan",
      d: "Tratamientos + estilo de vida.", 
      dEn: "Treatments + lifestyle." 
    },
    { 
      n: "03", 
      t: "Acompañamiento", 
      tEn: "Support",
      d: "Revisiones y ajuste continuo.", 
      dEn: "Reviews and continuous adjustment." 
    },
  ]

  return (
    <section className="container py-10">
      <h2 className="font-title text-3xl md:text-4xl mb-8 text-center">
        {isSpanish ? "Nuestra filosofía" : "Our philosophy"}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {STEPS.map(s => (
          <div key={s.n} className="relative rounded-2xl border bg-white/80 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="font-title text-4xl text-accent mb-2">{s.n}</div>
            <div className="font-medium mb-1">
              {isSpanish ? s.t : s.tEn}
            </div>
            <div className="text-sm text-muted-foreground">
              {isSpanish ? s.d : s.dEn}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isSpanish 
          ? "Enfoque holístico • Prevención • Regeneración natural • Bienestar integral"
          : "Holistic approach • Prevention • Natural regeneration • Integral wellness"
        }
      </p>
    </section>
  )
}