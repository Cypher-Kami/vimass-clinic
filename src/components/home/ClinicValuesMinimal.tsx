"use client"

import { Shield, Users, Lightbulb, Heart } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useLanguage } from "@/components/providers/language-provider"

const ITEMS = [
  { 
    icon: Shield, 
    title: "Excelencia", 
    titleEn: "Excellence",
    tip: "Prevención y regeneración con estándares médicos altos.", 
    tipEn: "Prevention and regeneration with high medical standards."
  },
  { 
    icon: Users, 
    title: "Personalización", 
    titleEn: "Personalization",
    tip: "Plan a medida para cada paciente.", 
    tipEn: "Customized plan for each patient."
  },
  { 
    icon: Lightbulb, 
    title: "Innovación", 
    titleEn: "Innovation",
    tip: "Tecnología y técnicas avanzadas.", 
    tipEn: "Advanced technology and techniques."
  },
  { 
    icon: Heart, 
    title: "Integridad", 
    titleEn: "Integrity",
    tip: "Transparencia y honestidad clínica.", 
    tipEn: "Clinical transparency and honesty."
  },
]

export default function ClinicValuesMinimal() {
  const { language } = useLanguage()
  const isSpanish = language === 'es'

  return (
    <TooltipProvider>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ITEMS.map(({icon:Icon, title, titleEn, tip, tipEn}, i) => (
          <div key={i} className="group relative">
            <Tooltip>
              <TooltipTrigger className="group relative rounded-2xl border bg-white/70 p-6 text-center hover:shadow-lg transition-all duration-300 w-full">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-accent text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-title text-xl">{isSpanish ? title : titleEn}</h3>
                {/* indicador sutil */}
                <span className="mt-1 block text-xs opacity-60">
                  {isSpanish ? 'más info' : 'more info'}
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                {isSpanish ? tip : tipEn}
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}