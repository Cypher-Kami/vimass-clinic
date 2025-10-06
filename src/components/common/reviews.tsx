'use client'

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

export function Reviews() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Obtener reviews directamente de las traducciones
  const reviews = language === 'es' 
    ? [
        {
          name: 'Dr. Joan Venceslao',
          text: 'Tuve la suerte de conocer a la Dra. Celina Suárez en un momento crítico en la fase muy inicial del COVID a principios del 2020. Sin conocernos y por contacto telefónico me atendió y siguió durante mis dos meses de confinamiento y convalecencia. Su profesionalidad y sobretodo su empatía y factor humano me ayudaron mucho. Posteriormente, volvió a demostrarlo en una situación preocupante con mi hijo, que afortunadamente no pasó a más, pero que la Dra. nos volvió a ayudar. Un placer y un honor poder seguir contando con ella si por cualquier motivo la debamos necesitar.',
          role: 'Médico Colega'
        },
        {
          name: 'Claudia Valsells',
          text: 'La Dra Celina Suárez es una gran profesional que hace dos años que es mi médico de medicina interna y ha sido de gran ayuda en todos los aspectos. Encantada de poder contar con su atención médica.',
          role: 'Paciente'
        },
        {
          name: 'Elodia Kurt Van',
          text: 'En cuanto a la Doctora Celina solo puedo decirle que ojalá hubiese más profesionales como ella. Ayudó a mi marido y nadie sabía lo que le ocurría. Ella encontró el problema y la solución. Educada y tan amable siempre. Bellísima persona y excepcional profesional.',
          role: 'Paciente'
        },
        {
          name: 'Claudia Contel',
          text: 'Celina aparte de ser compañera la considero amiga y trabajar con ella es siempre un placer. Es una gran profesional que se implica con sus pacientes y siempre busca la excelencia. Sin duda una gran doctora que tiene toda mi confianza.',
          role: 'Médico Colega'
        }
      ]
    : [
        {
          name: 'Dr. Joan Venceslao',
          text: 'I was fortunate to meet Dr. Celina Suárez at a critical moment in the very early phase of COVID in early 2020. Without knowing each other and by telephone contact, she attended to me and followed me during my two months of confinement and convalescence. Her professionalism and especially her empathy and human factor helped me a lot. Later, she demonstrated it again in a worrying situation with my son, which fortunately did not go further, but Dr. Celina helped us again. A pleasure and an honor to continue counting on her if for any reason we should need her.',
          role: 'Medical Colleague'
        },
        {
          name: 'Claudia Valsells',
          text: 'Dr. Celina Suárez is a great professional who has been my internal medicine doctor for two years and has been of great help in all aspects. Delighted to be able to count on her medical attention.',
          role: 'Patient'
        },
        {
          name: 'Elodia Kurt Van',
          text: 'Regarding Dr. Celina, I can only say that I wish there were more professionals like her. She helped my husband and no one knew what was wrong with him. She found the problem and the solution. Polite and so kind always. Beautiful person and exceptional professional.',
          role: 'Patient'
        },
        {
          name: 'Claudia Contel',
          text: 'Celina, apart from being a colleague, I consider her a friend and working with her is always a pleasure. She is a great professional who gets involved with her patients and always seeks excellence. Without a doubt, a great doctor who has all my confidence.',
          role: 'Medical Colleague'
        }
      ]
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || reviews.length <= 3) return
    
    const maxIndex = Math.ceil(reviews.length / 3) - 1
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1)
    }, 6000) // Cambia cada 6 segundos para dar más tiempo a leer
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])
  
  const maxIndex = Math.ceil(reviews.length / 3) - 1
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => prev <= 0 ? maxIndex : prev - 1)
    setIsAutoPlaying(false)
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1)
    setIsAutoPlaying(false)
  }
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }
  
  if (reviews.length === 0) return null
  
  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / Math.min(reviews.length, 3))}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-border p-6 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Review Text */}
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                
                {/* Author Info */}
                <div className="text-center pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-accent font-medium mt-1">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        {reviews.length > 3 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Review anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Review siguiente"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>
      
      {/* Dots Indicator */}
      {reviews.length > 3 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-accent scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al grupo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}