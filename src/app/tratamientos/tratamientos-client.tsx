'use client'

import { useState } from "react"
import { TreatmentCard } from "@/components/common/treatment-card"
import { Section } from "@/components/common/section"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "../fonts"
import { useLanguage } from "@/components/providers/language-provider"
import { TREATMENT_OBJECTIVES } from "@/data/treatment-objectives"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Grid3X3, Target } from "lucide-react"
import Link from "next/link"
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
  const [activeTab, setActiveTab] = useState<'types' | 'problems'>('types')
  const [expandedObjective, setExpandedObjective] = useState<string | null>(null)
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _clinica = clinica;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _treatmentGroups = treatmentGroups;

  const toggleObjective = (objectiveId: string) => {
    setExpandedObjective(expandedObjective === objectiveId ? null : objectiveId)
  }
  
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

            {/* Tabs Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-secondary/30 p-1 rounded-2xl">
                <Button
                  variant={activeTab === 'types' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('types')}
                  className={`rounded-xl px-6 py-3 transition-all duration-300 ${
                    activeTab === 'types' 
                      ? 'bg-accent text-foreground shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  {t('pages.tratamientos.tabs.byType')}
                </Button>
                <Button
                  variant={activeTab === 'problems' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('problems')}
                  className={`rounded-xl px-6 py-3 transition-all duration-300 ${
                    activeTab === 'problems' 
                      ? 'bg-accent text-foreground shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Target className="w-4 h-4 mr-2" />
                  {t('pages.tratamientos.tabs.byProblem')}
                </Button>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'types' ? (
              // Original treatments grid
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatments.map(item => <TreatmentCard key={item.slug} t={item} />)}
              </div>
            ) : (
              // New objectives section
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <p className="text-lg text-muted-foreground">
                    {t('pages.tratamientos.tabs.problemsSubtitle')}
                  </p>
                </div>
                
                {TREATMENT_OBJECTIVES.map((objective) => (
                  <div key={objective.id} className="bg-card border rounded-2xl overflow-hidden">
                    <Button
                      variant="ghost"
                      onClick={() => toggleObjective(objective.id)}
                      className="w-full p-6 text-left hover:bg-secondary/50 transition-all duration-300 flex items-center justify-between"
                    >
                      <div>
                        <h3 className="font-title text-xl font-semibold text-foreground">
                          {t(objective.titleKey)}
                        </h3>
                      </div>
                      {expandedObjective === objective.id ? (
                        <ChevronUp className="w-5 h-5 text-accent" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-accent" />
                      )}
                    </Button>
                    
                    {expandedObjective === objective.id && (
                      <div className="px-6 pb-6 border-t bg-secondary/20">
                        <div className="pt-6">
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {t(objective.descriptionKey)}
                          </p>
                          <div>
                            <p className="font-medium text-foreground mb-4">
                              {t('pages.tratamientos.tabs.recommendedTreatments')}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {objective.treatments.map((treatmentSlug) => {
                                const treatment = treatments.find(t => t.slug === treatmentSlug)
                                return treatment ? (
                                  <Link
                                    key={treatment.slug}
                                    href={`/tratamientos/${treatment.slug}`}
                                    className="bg-card border rounded-lg p-3 hover:bg-accent/10 hover:border-accent transition-all duration-300 text-sm text-center"
                                  >
                                    {treatment.titulo}
                                  </Link>
                                ) : null
                              })}
                            </div>
                            <div className="mt-4 pt-4 border-t">
                              <Link
                                href="/contacto"
                                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
                              >
                                {t('pages.tratamientos.tabs.personalizedConsult')} →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
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