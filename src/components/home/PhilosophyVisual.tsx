"use client"

import Image from "next/image"
import { Target, Shield, Leaf, Heart } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"

export default function PhilosophyVisual({
  images = ["/images/philo-1.jpg","/images/philo-2.jpg","/images/philo-3.jpg"]
}: { images?: string[] }) {
  const { language } = useLanguage()
  const isSpanish = language === 'es'
  
  const chips = [
    { 
      icon: Target, 
      label: "Enfoque holístico", 
      labelEn: "Holistic approach",
      href: "/tratamientos#integrativa" 
    },
    { 
      icon: Shield, 
      label: "Prevención", 
      labelEn: "Prevention",
      href: "/tratamientos#facial_dermo" 
    },
    { 
      icon: Leaf, 
      label: "Regeneración natural", 
      labelEn: "Natural regeneration",
      href: "/tratamientos#inyectables" 
    },
    { 
      icon: Heart, 
      label: "Bienestar integral", 
      labelEn: "Integral wellness",
      href: "/tratamientos" 
    },
  ]

  const steps = isSpanish ? ["Valorar","Tratar","Acompañar"] : ["Assess","Treat","Support"]
  
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      {/* Collage */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative col-span-2 aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
          <Image src={images[0]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
          <Image src={images[1]} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
          <Image src={images[2]} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
        </div>
      </div>

      {/* Chips */}
      <div>
        <h3 className="font-title text-3xl md:text-4xl mb-6">
          {isSpanish ? "Filosofía VIMASS" : "VIMASS Philosophy"}
        </h3>
        <div className="flex flex-wrap gap-3">
          {chips.map(({icon:Icon, label, labelEn, href}) => (
            <Link
              key={label}
              href={href}
              className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{isSpanish ? label : labelEn}</span>
            </Link>
          ))}
        </div>

        {/* Línea visual de método (sin párrafos) */}
        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-center">
          {steps.map((s, i) => (
            <div key={s} className="rounded-xl border bg-white/60 p-4">
              <div className="text-2xl font-title text-accent">{i+1}</div>
              <div className="text-sm opacity-70 font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}