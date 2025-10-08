'use client'

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { Section } from "@/components/common/section"
import { BeforeAfter } from "@/components/common/before-after"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/language"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle } from "lucide-react"
import { TREATMENT_GROUPS } from "@/data/treatments"
import type { Tratamiento } from "@/lib/types"

// ---- util: normaliza slug para i18n ----
function normalizedKey(slug: string) {
  return slug.replace(/-/g, "") as keyof typeof translations["es"]["home"]["treatmentContent"]
}

// ---- JSON-LD helpers (SEO) ----
function jsonLdMedicalProcedure({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "medicalSpecialty": "Dermatology",
    "procedureType": "NoninvasiveProcedure",
    "url": url
  }
}

interface TratamientoClientProps {
  data: Tratamiento
  slug: string
}

export function TratamientoClient({ data, slug }: TratamientoClientProps) {
  const { t, language } = useLanguage()
  
  // Contenido en idioma actual
  const content = useMemo(() => {
    const key = normalizedKey(slug)
    const fallback = { title: data.titulo, excerpt: data.extracto, bullets: data.bullets || [], faq: data.faq || [] }
    try {
      return translations[language as "es" | "en"]?.home?.treatmentContent?.[key] || fallback
    } catch {
      return fallback
    }
  }, [slug, language, data])

  // Tratamientos relacionados
  const related = useMemo(() => {
    const allTreatments = TREATMENT_GROUPS.flatMap(g => g.items.map(t => t.slug))
    return allTreatments.filter(s => s !== slug).slice(0, 3)
  }, [slug])

  // SEO scripts
  const procJsonLd = useMemo(
    () => jsonLdMedicalProcedure({ 
      name: content.title, 
      description: content.excerpt, 
      url: typeof window !== "undefined" ? window.location.href : "" 
    }),
    [content.title, content.excerpt]
  )

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />

      {/* JSON-LD (SEO) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procJsonLd) }} />

      <main className="min-h-screen">
        {/* HERO SECTION - Horizontal Layout */}
        <div className="container pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div>
                <h1 className="font-title text-4xl md:text-5xl mb-4">{content.title}</h1>
                <p className="text-lg text-muted-foreground">{content.excerpt}</p>
              </div>

              {/* Treatment Info Cards - Horizontal */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-sm">Duración</p>
                    <p className="text-muted-foreground text-sm">A partir de 7 noches</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-sm">Desde</p>
                    <p className="text-muted-foreground text-sm">4.500€ / USD $5.200</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="w-full">
                Reservar programa
              </Button>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={data.imagenes.hero}
                alt={content.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION SECTION */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-title text-3xl mb-6">{content.title}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Este programa está diseñado para ofrecer resultados tangibles en la detoxificación y reactivación metabólica. 
              Mediante estrategias personalizadas, incluyendo un plan de nutrición antiinflamatoria, se promueve una depuración 
              efectiva y sostenible, revitalizando el metabolismo y estableciendo las bases para alcanzar y mantener una salud 
              óptima a largo plazo.
            </p>
          </div>
        </Section>

        {/* OBJECTIVES & GUEST PROFILE - Horizontal */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Objectives */}
            <div>
              <h3 className="font-title text-2xl mb-6">Objetivos</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Potenciar el proceso de depuración del organismo mediante la fusión de dos importantes enfoques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Analizar diversos indicadores de metabolismo y detoxificación</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Promover la actividad física como componente esencial</span>
                </li>
              </ul>
            </div>

            {/* Guest Profile */}
            <div>
              <h3 className="font-title text-2xl mb-6">Perfil del Huésped</h3>
              <div className="space-y-4">
                <p className="font-medium">¿A quién va dirigido?</p>
                <p className="text-muted-foreground">
                  A personas cuyos hábitos son inadecuados como el consumo excesivo de café, bebidas con alcohol, 
                  tabaco, medicamentos y/o mala alimentación, entre otros.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-center text-sm">Mejorar apariencia</div>
                  <div className="p-3 bg-accent/10 rounded-lg text-center text-sm">Mejorar estado de salud</div>
                  <div className="p-3 bg-accent/10 rounded-lg text-center text-sm">Lograr peso óptimo</div>
                  <div className="p-3 bg-accent/10 rounded-lg text-center text-sm">Detoxificar organismo</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* METHODOLOGY */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h3 className="font-title text-2xl mb-6">Nuestra metodología</h3>
            <p className="text-muted-foreground mb-6">
              A través de la supervisión y asesoría de nuestro equipo de profesionales, se busca un acercamiento a nuevos hábitos saludables, a través de:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-xl border">
                <h4 className="font-medium mb-2">Plan personalizado</h4>
                <p className="text-sm text-muted-foreground">Un plan de alimentación y de salud personalizado</p>
              </div>
              <div className="p-6 bg-card rounded-xl border">
                <h4 className="font-medium mb-2">Salud holística</h4>
                <p className="text-sm text-muted-foreground">Tratamientos tecnológicos enfocados a la reducción de peso</p>
              </div>
              <div className="p-6 bg-card rounded-xl border">
                <h4 className="font-medium mb-2">Control y seguimiento</h4>
                <p className="text-sm text-muted-foreground">Control del peso y composición corporal</p>
              </div>
              <div className="p-6 bg-card rounded-xl border">
                <h4 className="font-medium mb-2">Estilo de vida</h4>
                <p className="text-sm text-muted-foreground">Recomendaciones de estilo de vida saludable</p>
              </div>
            </div>
          </div>
        </Section>

        {/* COMPARE PROGRAMS */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <h3 className="font-title text-2xl mb-8 text-center">Compare los programas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Accomplish */}
              <div className="p-6 bg-card rounded-xl border text-center">
                <h4 className="font-title text-xl mb-2">Accomplish</h4>
                <p className="text-muted-foreground mb-4">7 noches</p>
                <div className="mb-6">
                  <p className="text-2xl font-bold">4.500 €</p>
                  <p className="text-sm text-muted-foreground">5,200 USD*</p>
                  <p className="text-xs text-muted-foreground">*Estancia no incluida</p>
                </div>
                <Button className="w-full">Reservar</Button>
              </div>

              {/* Advanced Progress */}
              <div className="p-6 bg-card rounded-xl border text-center">
                <h4 className="font-title text-xl mb-2">Advanced Progress</h4>
                <p className="text-muted-foreground mb-4">10 noches</p>
                <div className="mb-6">
                  <p className="text-2xl font-bold">6.000 €</p>
                  <p className="text-sm text-muted-foreground">7,000 USD*</p>
                  <p className="text-xs text-muted-foreground">*Estancia no incluida</p>
                </div>
                <Button className="w-full">Reservar</Button>
              </div>

              {/* Total Renewal */}
              <div className="p-6 bg-accent/10 rounded-xl border border-accent text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs">
                  Recomendado
                </div>
                <h4 className="font-title text-xl mb-2">Total Renewal</h4>
                <p className="text-muted-foreground mb-4">14 noches</p>
                <div className="mb-6">
                  <p className="text-2xl font-bold">8.000 €</p>
                  <p className="text-sm text-muted-foreground">9,400 USD*</p>
                  <p className="text-xs text-muted-foreground">*Estancia no incluida</p>
                </div>
                <Button className="w-full">Reservar</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* BEFORE/AFTER */}
        {(data.imagenes.before && data.imagenes.after) && (
          <Section title="Antes y después">
            <div className="max-w-4xl mx-auto">
              <BeforeAfter before={data.imagenes.before!} after={data.imagenes.after!} />
            </div>
          </Section>
        )}

        {/* RELATED TREATMENTS */}
        {related.length > 0 && (
          <Section title="También te puede interesar">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {related.map(relatedSlug => (
                <Link
                  key={relatedSlug}
                  href={`/tratamientos/${relatedSlug}`}
                  className="p-6 rounded-xl border hover:shadow-lg transition-shadow text-center"
                >
                  <h4 className="font-medium capitalize">{relatedSlug.replace(/-/g, " ")}</h4>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* FINAL CTA */}
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-title text-2xl mb-4">¿Listo para comenzar?</h3>
            <p className="text-muted-foreground mb-6">
              Reserva tu consulta y diseñaremos tu plan personalizado
            </p>
            <Button size="lg">
              Reservar consulta
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}