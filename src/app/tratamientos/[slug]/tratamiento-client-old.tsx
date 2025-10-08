'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
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
import { Phone, MessageCircle, Clock, Syringe, Scissors, Sparkles, Info, ShieldCheck, Share2, ArrowRight, Home } from "lucide-react"
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

function jsonLdFaq(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  }
}

// ---- Component ----
interface TratamientoClientProps {
  data: Tratamiento
}

export function TratamientoClient({ data }: TratamientoClientProps) {
  const { t, language } = useLanguage()
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  // i18n content (fallback al contenido original)
  const content = useMemo(() => {
    const key = normalizedKey(data.slug)
    const tr = translations[language]?.home?.treatmentContent?.[key]
    return {
      title: tr?.title ?? data.titulo,
      excerpt: tr?.excerpt ?? data.extracto,
      bullets: tr?.bullets ?? data.bullets ?? [],
      faq: tr?.faq ?? data.faq ?? [],
    }
  }, [data, language])

  // breadcrumbs (simple)
  const crumbs = [
    { href: "/", label: t("nav.inicio") || "Inicio", icon: <Home className="w-4 h-4" /> },
    { href: "/tratamientos", label: t("nav.tratamientos") || "Tratamientos" },
    { href: `/tratamientos/${data.slug}`, label: content.title }
  ]

  // relacionados: del mismo grupo, excepto el actual
  const related = useMemo(() => {
    const group = TREATMENT_GROUPS.find(g => g.items.some(i => i.slug === data.slug))
    if (!group) return []
    return group.items
      .map(i => i.slug)
      .filter(slug => slug !== data.slug)
      .slice(0, 4) // 4 relacionados máx
  }, [data.slug])

  // quick nav sticky (anclas)
  const sections = [
    { id: "overview", label: t("common.overview") || "Visión general" },
    { id: "indications", label: t("common.indications") || "Indicaciones" },
    { id: "procedure", label: t("common.procedure") || "Procedimiento" },
    { id: "aftercare", label: t("common.aftercare") || "Cuidados" },
    { id: "faq", label: t("common.faq") || "FAQ" },
  ]
  const [, setActive] = useState("overview")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const opts = { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, opts)
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    observerRef.current = io
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ficha técnica (usa campos de tu tipo si existen; pongo condicionales)
  const facts = [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data as any)?.ficha?.duracion && { icon: <Clock className="w-4 h-4" />, k: "Duración", v: (data as any).ficha.duracion },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data as any)?.ficha?.anestesia && { icon: <Syringe className="w-4 h-4" />, k: "Anestesia", v: (data as any).ficha.anestesia },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data as any)?.ficha?.invasividad && { icon: <Scissors className="w-4 h-4" />, k: "Invasividad", v: (data as any).ficha.invasividad },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data as any)?.ficha?.recuperacion && { icon: <Sparkles className="w-4 h-4" />, k: "Recuperación", v: (data as any).ficha.recuperacion },
  ].filter(Boolean) as { icon: React.JSX.Element; k: string; v: string }[]

  // SEO scripts
  const faqJsonLd = useMemo(() => jsonLdFaq(content.faq), [content.faq])
  const procJsonLd = useMemo(
    () => jsonLdMedicalProcedure({ name: content.title, description: content.excerpt, url: typeof window !== "undefined" ? window.location.href : "" }),
    [content.title, content.excerpt]
  )

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />

      {/* JSON-LD (SEO) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procJsonLd) }} />
      {content.faq?.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <main className="min-h-screen">
        {/* BREADCRUMBS */}
        <div className="container pt-24 pb-4 text-sm flex flex-wrap items-center gap-2 opacity-80">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {i === 0 ? <Link className="hover:underline inline-flex items-center gap-1" href={c.href}>{c.icon}{c.label}</Link> :
                i < crumbs.length - 1 ? <Link className="hover:underline" href={c.href}>{c.label}</Link> :
                  <span aria-current="page" className="font-medium">{c.label}</span>}
              {i < crumbs.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>

        {/* HERO dividido + CTA lateral sticky */}
        <div className="container pb-6 grid lg:grid-cols-[1fr_360px] gap-10">
          {/* Columna principal */}
          <div>
            <section id="overview" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-28">
              <div>
                <h1 className="font-title text-4xl md:text-5xl">{content.title}</h1>
                <p className="mt-4 opacity-80">{content.excerpt}</p>

                {/* Ficha técnica */}
                {facts.length > 0 && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {facts.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl border p-3 bg-white/70">
                        <div className="w-8 h-8 rounded-lg bg-accent/15 grid place-items-center">{f.icon}</div>
                        <div className="text-sm">
                          <div className="font-medium">{f.k}</div>
                          <div className="opacity-70">{f.v}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src={data.imagenes.hero}
                  alt={content.title}
                  fill
                  className={["object-cover", prefersReduced ? "" : "transition-transform duration-700 will-change-transform hover:scale-[1.02]"].join(" ")}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  priority
                />
              </div>
            </section>

            {/* INDICACIONES / BENEFICIOS */}
            {content.bullets?.length > 0 && (
              <section id="indications" className="scroll-mt-28">
                <Section title={t('common.indications') || 'Indicaciones'}>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {content.bullets.map((b, i) => (
                      <li key={i} className="rounded-xl border p-4 bg-white/70">{b}</li>
                    ))}
                  </ul>
                </Section>
              </section>
            )}

            {/* PROCEDIMIENTO + ANTES/DESPUÉS */}
            <section id="procedure" className="scroll-mt-28">
              <Section title={t('common.procedure') || 'Procedimiento'}>
                <div className="space-y-6 opacity-90">
                  {/* Si tienes texto largo por tratamiento, colócalo aquí */}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <p>{(data as any)?.contenidoLargo ?? t('common.procedureDefault') ?? 'Valoración médica, diseño del plan y aplicación del tratamiento según indicación.'}</p>
                </div>
              </Section>
            </section>

            {(data.imagenes.before && data.imagenes.after) && (
              <Section title={t('common.beforeAfter') || 'Antes y después'}>
                <BeforeAfter before={data.imagenes.before!} after={data.imagenes.after!} />
              </Section>
            )}

            {/* CUIDADOS / RECUPERACIÓN */}
            <section id="aftercare" className="scroll-mt-28">
              <Section title={t('common.aftercare') || 'Cuidados y recuperación'}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border p-5 bg-white/70">
                    <div className="font-medium mb-1">{t('common.aftercareDo') || 'Recomendaciones'}</div>
                    <ul className="list-disc list-inside opacity-80 space-y-1 text-sm">
                      <li>{t('common.aftercareDo1') || 'Hidratación y fotoprotección diaria.'}</li>
                      <li>{t('common.aftercareDo2') || 'Evitar calor intenso 24–48h.'}</li>
                      <li>{t('common.aftercareDo3') || 'Seguir pauta cosmética indicada.'}</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border p-5 bg-white/70">
                    <div className="font-medium mb-1">{t('common.aftercareDont') || 'Evitar'}</div>
                    <ul className="list-disc list-inside opacity-80 space-y-1 text-sm">
                      <li>{t('common.aftercareDont1') || 'Exposición solar directa las primeras 48–72h.'}</li>
                      <li>{t('common.aftercareDont2') || 'Sauna/baño turco y ejercicio intenso 24h.'}</li>
                      <li>{t('common.aftercareDont3') || 'Manipular la zona tratada sin indicación.'}</li>
                    </ul>
                  </div>
                </div>
              </Section>
            </section>

            {/* FAQ */}
            {content.faq?.length > 0 && (
              <section id="faq" className="scroll-mt-28">
                <Section title={t('common.faq') || 'Preguntas frecuentes'}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {content.faq.map((f, i) => (
                      <div key={i} className="rounded-2xl border p-5 bg-white/70">
                        <div className="font-medium mb-1">{f.q}</div>
                        <p className="opacity-80">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              </section>
            )}

            {/* Aviso clínico */}
            <div className="container pb-10">
              <div className="flex items-start gap-3 rounded-2xl border p-4 bg-amber-50/60 text-amber-900">
                <Info className="w-5 h-5 mt-0.5" />
                <p className="text-sm">
                  {t('common.medDisclaimer') ||
                    "La información mostrada es general y no sustituye la valoración médica. Los resultados pueden variar según cada paciente."}
                </p>
              </div>
            </div>

            {/* Tratamientos relacionados */}
            {related.length > 0 && (
              <Section title={t('common.related') || 'También te puede interesar'}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {related.map(slug => (
                    <Link
                      key={slug}
                      href={`/tratamientos/${slug}`}
                      className="rounded-2xl border p-4 hover:shadow-soft transition-shadow flex items-center justify-between"
                    >
                      <span className="font-medium capitalize">{slug.replace(/-/g, " ")}</span>
                      <ArrowRight className="w-4 h-4 opacity-60" />
                    </Link>
                  ))}
                </div>
              </Section>
            )}
          </div>

          {/* Sidebar sticky */}
          <aside aria-label="Reserva y acciones" className="relative">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Card de reserva */}
              <div className="rounded-2xl border p-5 bg-white/80 backdrop-blur">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <div className="font-medium">{t('common.medicalAssessment') || 'Valoración médica'}</div>
                </div>
                <p className="text-sm opacity-80 mb-4">
                  {t('common.bookingCopy') || 'Reserva una consulta y diseñaremos tu plan personalizado.'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(data as any)?.contact?.whatsapp && (
                    <Button asChild className="rounded-xl">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <a href={`https://wa.me/${(data as any).contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                      </a>
                    </Button>
                  )}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(data as any)?.contact?.telefono && (
                    <Button asChild variant="outline" className="rounded-xl">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <a href={`tel:${(data as any).contact.telefono}`}>
                        <Phone className="w-4 h-4 mr-2" /> Llamar
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Compartir */}
              <div className="rounded-2xl border p-5 bg-white/80 backdrop-blur">
                <div className="flex items-center gap-2 mb-3">
                  <Share2 className="w-5 h-5 text-accent" />
                  <div className="font-medium">{t('common.share') || 'Compartir'}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="rounded-xl"
                    onClick={() => navigator.share?.({ title: content.title, text: content.excerpt, url: window.location.href })}>
                    {t('common.shareNative') || 'Nativo'}
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-xl"
                    onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    {t('common.copyLink') || 'Copiar enlace'}
                  </Button>
                </div>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(data as any)?.lastReviewed && (
                  <p className="mt-4 text-xs opacity-70">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {t('common.lastReviewed') || 'Última revisión'}: {(data as any).lastReviewed}
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}