import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/language"
import type { Tratamiento } from "@/lib/types"

interface FeaturedTreatmentsProps {
  items: Tratamiento[]
}

export function FeaturedTreatments({ items }: FeaturedTreatmentsProps) {
  const { language } = useLanguage()
  
  if (!items?.length) return null

  // Function to get translated content for treatment
  const getTranslatedContent = (treatment: Tratamiento) => {
    const normalizedSlug = treatment.slug.replace(/-/g, '')
    const treatmentTranslations = translations[language]?.home?.treatmentContent?.[normalizedSlug as keyof typeof translations.es.home.treatmentContent]
    
    if (treatmentTranslations) {
      return {
        title: treatmentTranslations.title,
        excerpt: treatmentTranslations.excerpt
      }
    }
    
    return {
      title: treatment.titulo,
      excerpt: treatment.extracto
    }
  }

  // Badges para destacados
  const badges = [
    language === 'es' ? 'Top' : 'Top',
    language === 'es' ? 'Más pedido' : 'Most requested', 
    language === 'es' ? 'Nuevo' : 'New'
  ]

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="font-title text-2xl md:text-3xl mb-3">{language === 'es' ? 'Tratamientos destacados' : 'Featured Treatments'}</h2>
        <p className="text-muted-foreground">{language === 'es' ? 'Los más solicitados por nuestros pacientes' : 'Most requested by our patients'}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((treatment, index) => {
          const content = getTranslatedContent(treatment)
          return (
            <Link 
              key={treatment.slug} 
              href={`/tratamientos/${treatment.slug}`} 
              className="group block rounded-2xl overflow-hidden border border-accent/40 hover:border-accent/70 bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3]">
                <Image 
                  src={treatment.imagenes.hero} 
                  alt={content.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  priority={index === 0} // Priority solo para el primero
                />
                {index < badges.length && (
                  <Badge 
                    className="absolute top-3 left-3 bg-accent text-accent-foreground font-medium"
                  >
                    {badges[index]}
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-title text-xl mb-2 group-hover:text-accent transition-colors">
                  {content.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {content.excerpt}
                </p>
                <div className="mt-4 text-sm font-medium text-accent">
                  {language === 'es' ? 'Ver detalles →' : 'View details →'}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}