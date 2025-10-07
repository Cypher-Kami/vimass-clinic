'use client'

import { TreatmentCard } from "@/components/common/treatment-card"
import { Section } from "@/components/common/section"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "../fonts"
import { useLanguage } from "@/components/providers/language-provider"
import type { Tratamiento } from "@/lib/types"
import type { TreatmentGroup } from "@/data/treatments"

interface TratamientosClientProps {
  clinica: {
    nombre: string
    telefono: string
    whatsapp: string
    email: string
    direccion: string
    horario: string
  }
  treatments: Tratamiento[]
  treatmentGroups: TreatmentGroup[]
}

export function TratamientosClient({ clinica, treatments, treatmentGroups }: TratamientosClientProps) {
  const { t } = useLanguage()
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _clinica = clinica;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _treatmentGroups = treatmentGroups;
  
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container pt-28 pb-12">
          <div className="max-w-4xl">
            <div className="relative mb-6">
              <h1 className="font-title text-4xl md:text-6xl relative z-10">{t('pages.tratamientos.title')}</h1>
              {/* Decorative underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-16 mt-2"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('pages.tratamientos.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="container pt-20">
          <Section>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('pages.tratamientos.description')}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map(item => <TreatmentCard key={item.slug} t={item} />)}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
      <CTAFloat />
      <WhatsAppFloat />
      <Toaster />
    </div>
  )
}