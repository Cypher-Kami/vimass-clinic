"use client"

import { useLanguage } from "@/components/providers/language-provider"

export default function EvidenceStrip() {
  const { language } = useLanguage()
  const isSpanish = language === 'es'
  
  const items = [
    { 
      k: "97%", 
      v: "Satisfacción", 
      vEn: "Satisfaction" 
    },
    { 
      k: "15+", 
      v: "Años de práctica", 
      vEn: "Years of practice" 
    },
    { 
      k: "0-48h", 
      v: "Recuperación habitual", 
      vEn: "Typical recovery" 
    },
    { 
      k: "Top 5", 
      v: "Tratamientos populares", 
      vEn: "Popular treatments" 
    },
  ]
  
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map(item => (
        <div key={item.v} className="rounded-xl border bg-white/70 p-4 text-center hover:shadow-sm transition-shadow">
          <div className="font-title text-2xl text-accent">{item.k}</div>
          <div className="text-xs opacity-70 font-medium">{isSpanish ? item.v : item.vEn}</div>
        </div>
      ))}
    </div>
  )
}