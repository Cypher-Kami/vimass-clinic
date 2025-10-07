"use client"

import { AnimatedCounter } from "./animated-counter"
import { Section } from "./section"
import { Users, Award, Clock, Heart } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

export function StatsSection() {
  const { t } = useLanguage()
  
  const stats = [
    {
      icon: Users,
      number: 3500,
      suffix: "+",
      label: t('stats.patients'),
      description: t('stats.patientsDescription')
    },
    {
      icon: Award,
      number: 20,
      suffix: "+",
      label: t('stats.experience'),
      description: t('stats.experienceDescription')
    },
    {
      icon: Clock,
      number: 15000,
      suffix: "+",
      label: t('stats.treatments'),
      description: t('stats.treatmentsDescription')
    },
    {
      icon: Heart,
      number: 98,
      suffix: "%",
      label: t('stats.satisfaction'),
      description: t('stats.satisfactionDescription')
    }
  ]

  return (
    <Section title={t('stats.title')}>
      <div className="bg-gradient-to-r from-secondary/20 to-accent/10 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                  <h3 className="font-semibold text-lg text-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}