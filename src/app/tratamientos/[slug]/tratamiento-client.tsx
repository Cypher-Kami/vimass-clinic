'use client'

import Image from "next/image"
import { Section } from "@/components/common/section"
import { BeforeAfter } from "@/components/common/before-after"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/language"
import type { Tratamiento } from "@/lib/types"

interface TratamientoClientProps {
  data: Tratamiento
}

export function TratamientoClient({ data }: TratamientoClientProps) {
  const { t, language } = useLanguage()

  // Function to get translated content
  const getTranslatedContent = () => {
    // Convert slug to content key (remove hyphens)
    const normalizedSlug = data.slug.replace(/-/g, '')
    
    console.log('Looking for translation for slug:', normalizedSlug)
    console.log('Current language:', language)
    
    // Try to get translation from the translations object directly
    const treatmentTranslations = translations[language]?.home?.treatmentContent?.[normalizedSlug as keyof typeof translations.es.home.treatmentContent]
    
    console.log('Found translation:', treatmentTranslations)
    
    if (treatmentTranslations) {
      return {
        title: treatmentTranslations.title,
        excerpt: treatmentTranslations.excerpt,
        bullets: treatmentTranslations.bullets,
        faq: treatmentTranslations.faq
      }
    } else {
      // Fallback to original content
      return {
        title: data.titulo,
        excerpt: data.extracto,
        bullets: data.bullets,
        faq: data.faq
      }
    }
  }

  const content = getTranslatedContent()

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container pt-20 pb-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-title text-4xl md:text-5xl">{content.title}</h1>
            <p className="mt-4 opacity-80">{content.excerpt}</p>
            <ul className="mt-6 space-y-2 list-disc list-inside">
              {content.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
            <Image src={data.imagenes.hero} alt={content.title} fill className="object-cover" />
          </div>
        </div>
        {(data.imagenes.before && data.imagenes.after) && (
          <Section title={t('common.beforeAfter') || 'Antes y después'}>
            <BeforeAfter before={data.imagenes.before!} after={data.imagenes.after!} />
          </Section>
        )}
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
      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}