'use client'

import { useState } from "react"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { TreatmentsSubNav } from "@/components/treatments/treatments-subnav"
import { ControlsBar } from "@/components/treatments/controls-bar"
import { FeaturedTreatments } from "@/components/treatments/featured-treatments"
import { TreatmentsGrouped } from "@/components/treatments/treatments-grouped"
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
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards')
  
  // Get featured treatments (first 3 treatments for now)
  const featuredTreatments = treatments.slice(0, 3)
  
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      
      {/* Sticky SubNav */}
      <TreatmentsSubNav treatmentGroups={treatmentGroups} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="container pt-28 pb-12">
          <div className="max-w-4xl">
            <div className="relative mb-6">
              <h1 className="font-title text-4xl md:text-6xl relative z-10">
                {t('pages.tratamientos.title')}
              </h1>
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-16 mt-2"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('pages.tratamientos.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="container pb-20">
          {/* Featured Treatments */}
          <FeaturedTreatments items={featuredTreatments} />
          
          {/* Controls Bar */}
          <ControlsBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            treatmentGroups={treatmentGroups}
          />
          
          {/* Treatments Grouped */}
          <TreatmentsGrouped
            treatments={treatments}
            treatmentGroups={treatmentGroups}
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </main>

      <Footer clinica={clinica} />
      <CTAFloat />
      <WhatsAppFloat />
      <Toaster />
    </div>
  )
}