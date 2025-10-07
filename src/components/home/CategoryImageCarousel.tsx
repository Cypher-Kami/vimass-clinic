"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TREATMENT_GROUPS } from "@/data/treatments"
import { useLanguage } from "@/components/providers/language-provider"
import "keen-slider/keen-slider.min.css"

type Slide = { id: string; title: string; href: string; img: string }

const CATEGORY_IMAGES: Record<string, string> = {
  inyectables: "/images/categorias/inyectables.jpg",
  aparatologia: "/images/categorias/aparatologia.jpg",
  facial_dermo: "/images/categorias/facial_dermo.jpg",
  vascular_metabolico: "/images/categorias/vascular_metabolico.jpg",
  integrativa: "/images/categorias/integrativa.jpg",
}

function useAutoplay(delay = 8000) {
  const [paused, setPaused] = useState(false)
  return {
    setPaused,
    plugin: (slider: unknown) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver || paused) return
        timeout = setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(slider as any).next()
        }, delay)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sliderAny = slider as any
      sliderAny.on("created", () => {
        sliderAny.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        sliderAny.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      sliderAny.on("dragStarted", clearNextTimeout)
      sliderAny.on("animationEnded", nextTimeout)
      sliderAny.on("updated", nextTimeout)
      sliderAny.on("slideChanged", clearNextTimeout)
    }
  }
}

export default function CategoryImageCarousel() {
  const { t } = useLanguage()
  const { setPaused, plugin } = useAutoplay(8000)

  const slides: Slide[] = useMemo(() => (
    TREATMENT_GROUPS.map(g => ({
      id: g.id,
      title: t(`home.categories.${g.id}.title`) || g.titleKey.split(".").pop() || g.id,
      href: `/tratamientos#${g.id}`,
      img: CATEGORY_IMAGES[g.id] || "/images/placeholder-4x3.jpg"
    }))
  ), [t])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "precision",
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 28 } },
      "(min-width: 1200px)": { slides: { perView: 3, spacing: 32 } },
    }
  }, [plugin])

  // bullets activos
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const s = instanceRef.current
    if (!s) return
    const updateCurrent = () => {
      setCurrent(s.track.details.rel)
    }
    s.on("slideChanged", updateCurrent)
    s.on("created", updateCurrent)
  }, [instanceRef])

  return (
    <section
      className="container pt-16 pb-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Flechas y Slider */}
      <div className="relative">
        {/* Flecha izquierda - absoluta */}
        <button
          aria-label={t('common.navigation.previous')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 hidden md:flex items-center justify-center text-accent hover:text-accent/80 transition-colors"
          onClick={() => instanceRef.current?.prev()}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        {/* Flecha derecha - absoluta */}
        <button
          aria-label={t('common.navigation.next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 hidden md:flex items-center justify-center text-accent hover:text-accent/80 transition-colors"
          onClick={() => instanceRef.current?.next()}
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {slides.map(s => (
            <div key={s.id} className="keen-slider__slide">
              <CardCategory 
                title={s.title} 
                desc={t(`home.categories.${s.id}.desc`) || ""}
                href={s.href} 
                img={s.img} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bullets más pequeños */}
      <div className="mt-4 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`${t('common.navigation.goToSlide')} ${i + 1}`}
            onClick={() => {
              if (instanceRef.current) {
                instanceRef.current.moveToIdx(i)
              }
            }}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300
              ${current === i ? "bg-accent" : "bg-accent/30 hover:bg-accent/50"}`}
          />
        ))}
      </div>
    </section>
  )
}

function CardCategory({ title, desc, href, img }: { title: string; desc: string; href: string; img: string }) {
  const { t } = useLanguage()
  
  return (
    <Link href={href} className="block group">
      <div className="relative aspect-[3/5] overflow-hidden shadow-soft border">
        {/* Imagen */}
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          priority={false}
        />
        {/* Overlay base */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        
        {/* Overlay hover con contenido */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
          <h3 className="text-white font-title text-xl mb-3">{title}</h3>
          {desc && (
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              {desc}
            </p>
          )}
          <button className="px-4 py-2 border border-white/80 bg-white/10 text-white rounded hover:bg-white/20 transition-colors text-sm">
            {t('common.actions.viewTreatments')}
          </button>
        </div>
        
        {/* Faja de título (solo visible sin hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center group-hover:opacity-0 transition-opacity duration-300">
          <div className="px-6 py-3 bg-accent text-white font-medium text-lg tracking-wide shadow-md text-center">
            {title}
          </div>
        </div>
      </div>
    </Link>
  )
}