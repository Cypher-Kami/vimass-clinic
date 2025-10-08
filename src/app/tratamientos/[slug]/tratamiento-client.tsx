'use client'

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { Section } from "@/components/common/section"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/language"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle, Users, Target, Heart, Scale, Droplets, Calendar, Timer, Sparkles } from "lucide-react"
import { TREATMENT_GROUPS } from "@/data/treatments"
import { ImagePaths } from "@/lib/image-paths"
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
  url: string
}

export function TratamientoClient({ data, slug, url }: TratamientoClientProps) {
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
      url: url 
    }),
    [content.title, content.excerpt, url]
  )

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />

      {/* JSON-LD (SEO) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procJsonLd) }} />

      <main className="min-h-screen">
        {/* HERO SECTION - Full Width Image */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <Image
            src={`/images/tratamientos/${slug}/hero.jpg`}
            alt={content.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white">
            <h1 className="font-title text-4xl md:text-6xl font-bold mb-4">{content.title}</h1>
          </div>
        </div>

        {/* TREATMENT INFO PILL */}
        <div className="container -mt-10 relative z-20 mb-16">
          <div className="flex justify-center">
            <div className="bg-white rounded-full px-14 py-6 shadow-md border flex items-center justify-center gap-8 text-sm font-medium max-w-4xl">
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {language === 'es' ? 'Tratamiento' : 'Treatment'}
                </p>
                <p className="text-accent font-semibold">{content.title}</p>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {language === 'es' ? 'Duración' : 'Duration'}
                </p>
                <p className="text-foreground">30-45 min</p>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {language === 'es' ? 'Desde' : 'From'}
                </p>
                <p className="text-foreground">150€</p>
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIPTION SECTION */}
        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-title text-3xl mb-6">
              {language === 'es' ? '¿En qué consiste?' : 'What does it consist of?'}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.excerpt}
            </p>
          </div>
        </Section>

        {/* OBJECTIVES SECTION */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-title text-3xl mb-8 text-center">
              {language === 'es' ? 'Objetivos' : 'Objectives'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative aspect-square w-48 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/tratamientos/${slug}/rejuvenecimiento.jpg`}
                    alt={language === 'es' ? 'Rejuvenecimiento' : 'Rejuvenation'}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">
                  {language === 'es' ? 'Rejuvenecimiento' : 'Rejuvenation'}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {language === 'es' 
                    ? 'Revitaliza tu piel y reduce los signos del envejecimiento'
                    : 'Revitalize your skin and reduce signs of aging'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="relative aspect-square w-48 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/tratamientos/${slug}/hidratacion.jpg`}
                    alt={language === 'es' ? 'Hidratación' : 'Hydration'}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">
                  {language === 'es' ? 'Hidratación' : 'Hydration'}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {language === 'es'
                    ? 'Aporta luminosidad y elasticidad natural'
                    : 'Provides natural luminosity and elasticity'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="relative aspect-square w-48 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/tratamientos/${slug}/firmeza.jpg`}
                    alt={language === 'es' ? 'Firmeza' : 'Firmness'}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">
                  {language === 'es' ? 'Firmeza' : 'Firmness'}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {language === 'es'
                    ? 'Mejora la textura y firmeza de la piel'
                    : 'Improves skin texture and firmness'
                  }
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* WHO IS IT FOR SECTION */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={`/images/tratamientos/${slug}/target-audience.jpg`}
                  alt={language === 'es' ? 'A quién va dirigido' : 'Who is it for'}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div>
                <h2 className="font-title text-3xl mb-6">
                  {language === 'es' ? '¿A quién va dirigido?' : 'Who is it for?'}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {language === 'es'
                    ? 'Ideal para personas que buscan mejorar la apariencia y salud de su piel de manera natural, sin cirugía y con resultados visibles desde la primera sesión.'
                    : 'Ideal for people looking to improve the appearance and health of their skin naturally, without surgery and with visible results from the first session.'
                  }
                </p>
                
                {/* Benefits Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-accent/10 rounded-xl text-center">
                    <Heart className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {language === 'es' ? 'Mejorar su apariencia' : 'Improve appearance'}
                    </p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl text-center">
                    <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {language === 'es' ? 'Mejorar su estado de salud' : 'Improve health status'}
                    </p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl text-center">
                    <Scale className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {language === 'es' ? 'Lograr un peso óptimo' : 'Achieve optimal weight'}
                    </p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl text-center">
                    <Droplets className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {language === 'es' ? 'Detoxificar su organismo' : 'Detoxify the body'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* TREATMENT DETAILS */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-xl border">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'es' ? 'Sesiones' : 'Sessions'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'es' 
                    ? '1 sesión anual de 20 minutos.'
                    : '1 annual session of 20 minutes.'
                  }
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <Timer className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'es' ? 'Duración' : 'Duration'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'es'
                    ? 'De 10 a 12 meses.'
                    : '10 to 12 months.'
                  }
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'es' ? 'Recuperación' : 'Recovery'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'es' ? 'Inmediata.' : 'Immediate.'}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* BEFORE/AFTER */}
        <Section title={language === 'es' ? 'Antes y después' : 'Before and after'}>
          <div className="max-w-2xl mx-auto">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <Image 
                  src={ImagePaths.resultados[2]} 
                  alt={language === 'es' ? 'Resultado - Antes y Después' : 'Result - Before and After'} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Blur overlay for eyes privacy - two bars with separation in center */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Left bar - from start to center */}
                  <div className="absolute top-[27%] left-[2%] w-[45%] h-12 bg-white/30 backdrop-blur-lg rounded-full"></div>
                  {/* Right bar - from center to end */}
                  <div className="absolute top-[27%] right-[2%] w-[45%] h-12 bg-white/30 backdrop-blur-lg rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
                {language === 'es' ? 'Antes y Después' : 'Before and After'}
              </div>
            </div>
          </div>
        </Section>

        {/* RELATED TREATMENTS */}
        {related.length > 0 && (
          <Section title={language === 'es' ? 'Tratamientos relacionados' : 'Related treatments'}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {related.map(relatedSlug => {
                // Buscar el tratamiento en TREATMENT_GROUPS para obtener su labelKey
                const treatment = TREATMENT_GROUPS
                  .flatMap(group => group.items)
                  .find(item => item.slug === relatedSlug)
                
                return (
                  <Link
                    key={relatedSlug}
                    href={`/tratamientos/${relatedSlug}`}
                    className="group p-6 rounded-xl border hover:shadow-lg transition-all duration-300 text-center hover:border-accent"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-medium">
                      {treatment ? t(treatment.labelKey) : relatedSlug.replace(/-/g, " ")}
                    </h4>
                  </Link>
                )
              })}
            </div>
          </Section>
        )}

        {/* FINAL CTA */}
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-title text-3xl mb-4">
              {language === 'es' ? '¿Listo para comenzar?' : 'Ready to start?'}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'es'
                ? 'Reserva tu consulta y diseñaremos tu plan personalizado'
                : 'Book your consultation and we will design your personalized plan'
              }
            </p>
            <Link href="/contacto">
              <Button size="lg" className="px-8">
                {language === 'es' ? 'Reservar consulta' : 'Book consultation'}
              </Button>
            </Link>
          </div>
        </Section>
      </main>

      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}