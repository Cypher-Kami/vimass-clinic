"use client"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Tratamiento } from "@/lib/types"

export function TreatmentSlider({ treatments }: { treatments: Tratamiento[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-soft">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {treatments.map((treatment) => (
            <div key={treatment.slug} className="flex-[0_0_100%] relative">
              {/* Imagen de fondo */}
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <Image 
                  src={treatment.imagenes.hero} 
                  alt={treatment.titulo} 
                  fill 
                  className="object-cover" 
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                
                {/* Contenido */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container px-16 md:px-20">
                    <div className="max-w-2xl mx-auto text-center text-white">
                      <h2 className="font-title text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                        {treatment.titulo}
                      </h2>
                      <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
                        {treatment.extracto}
                      </p>
                      
                      {/* Características destacadas */}
                      <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {treatment.bullets.slice(0, 3).map((bullet, i) => (
                          <span 
                            key={i} 
                            className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/30"
                          >
                            {bullet}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link 
                        href={`/tratamientos/${treatment.slug}`}
                        className="inline-flex items-center px-8 py-4 bg-white text-foreground rounded-2xl hover:bg-white/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Descubre más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 text-white z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 text-white z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicadores */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {treatments.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === selectedIndex 
                ? "w-8 h-3 bg-white rounded-full" 
                : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/60"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}