'use client'

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/language"
import type { Tratamiento } from "@/lib/types"

export function TreatmentCard({ t }: { t: Tratamiento }) {
  const { language } = useLanguage()

  // Function to get translated content
  const getTranslatedContent = () => {
    // Convert slug to content key (remove hyphens)
    const normalizedSlug = t.slug.replace(/-/g, '')
    
    // Try to get translation from the translations object directly
    const treatmentTranslations = translations[language]?.home?.treatmentContent?.[normalizedSlug as keyof typeof translations.es.home.treatmentContent]
    
    if (treatmentTranslations) {
      return {
        title: treatmentTranslations.title,
        excerpt: treatmentTranslations.excerpt
      }
    } else {
      // Fallback to original content
      return {
        title: t.titulo,
        excerpt: t.extracto
      }
    }
  }

  const content = getTranslatedContent()

  return (
    <Link href={`/tratamientos/${t.slug}`}>
      <Card className="rounded-2xl overflow-hidden hover:shadow-soft transition-shadow">
        <div className="relative aspect-[4/3]">
          <Image src={t.imagenes.hero} alt={content.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="font-title text-xl mb-1">{content.title}</div>
          <p className="text-sm opacity-80">{content.excerpt}</p>
        </div>
      </Card>
    </Link>
  )
}