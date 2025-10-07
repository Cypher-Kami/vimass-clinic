"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers/language-provider"
import type { TreatmentGroup } from "@/data/treatments"

interface TreatmentsSubNavProps {
  treatmentGroups: TreatmentGroup[]
}

export function TreatmentsSubNav({ treatmentGroups }: TreatmentsSubNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const { t, language } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 140)
    
    const handleScroll = () => {
      const sections = treatmentGroups.map(group => group.id)
      const scrollPosition = window.scrollY + 150 // Offset for sticky nav

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          
          if (scrollPosition >= elementTop && scrollPosition < elementTop + element.offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [treatmentGroups])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -120 // Account for sticky nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className={`sticky top-16 z-40 border-b bg-background/95 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="container px-4">
        <div className="flex items-center gap-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{language === 'es' ? 'Volver al inicio' : 'Back to home'}</span>
          </Link>
          
          <div className="h-4 w-px bg-border mx-2" />
          
          <nav className="flex gap-3 overflow-x-auto scrollbar-hide" role="navigation" aria-label="Categorías de tratamientos">
            {treatmentGroups.map(group => (
              <Button
                key={group.id}
                variant={activeSection === group.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => scrollToSection(group.id)}
                className="whitespace-nowrap h-8 px-3"
              >
                {t(group.titleKey)}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}