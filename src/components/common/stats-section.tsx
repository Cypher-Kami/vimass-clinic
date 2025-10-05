"use client"

import { AnimatedCounter } from "./animated-counter"
import { Section } from "./section"
import { Users, Award, Clock, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 1476,
    suffix: "+",
    label: "Pacientes satisfechos",
    description: "Han confiado en nosotros"
  },
  {
    icon: Award,
    number: 15,
    suffix: "+",
    label: "Años de experiencia",
    description: "En medicina estética"
  },
  {
    icon: Clock,
    number: 3500,
    suffix: "+",
    label: "Tratamientos realizados",
    description: "Con resultados exitosos"
  },
  {
    icon: Heart,
    number: 98,
    suffix: "%",
    label: "Satisfacción del cliente",
    description: "Recomiendan nuestros servicios"
  }
]

export function StatsSection() {
  return (
    <Section>
      <div className="bg-gradient-to-r from-secondary/20 to-accent/10 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="font-title text-3xl md:text-4xl mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra experiencia y dedicación se reflejan en cada número. 
            Miles de pacientes han transformado su confianza con nosotros.
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