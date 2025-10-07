"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TREATMENT_GROUPS } from "@/data/treatments"
import { useLanguage } from "@/components/providers/language-provider"

type Slide = {
  id: string
  title: string
  desc: string
  href: string
}

function useAutoplay(delay = 5000) {
  const [paused, setPaused] = useState(false)
  return {
    paused,
    setPaused,
    plugin: (slider: any) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() { clearTimeout(timeout) }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver || paused) return
        timeout = setTimeout(() => slider.next(), delay)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout() })
        slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout() })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    }
  }
}

export default function CategoryFlipCarousel() {
  const { t } = useLanguage()
  const { plugin, paused, setPaused } = useAutoplay(5000)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])

  // Construimos slides desde los grupos
  const slides: Slide[] = TREATMENT_GROUPS.map(g => ({
    id: g.id,
    title: t(`home.categories.${g.id}.title`) || g.titleKey,
    desc: t(`home.categories.${g.id}.desc`) || "",
    href: `/tratamientos#${g.id}`
  }))

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    renderMode: "precision",
    slides: {
      perView: 1,
      spacing: 10
    },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 12 } },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 12 } }
    }
  }, [plugin])

  return (
    <section
      className="container py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        {/* Arrows */}
        <button
          aria-label={t('common.navigation.previous') || 'Anterior'}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full border bg-background/80 backdrop-blur hover:bg-accent hover:text-background transition"
          onClick={() => instanceRef.current?.prev()}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label={t('common.navigation.next') || 'Siguiente'}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full border bg-background/80 backdrop-blur hover:bg-accent hover:text-background transition"
          onClick={() => instanceRef.current?.next()}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {slides.map((s) => (
            <div key={s.id} className="keen-slider__slide">
              <FlipCard
                title={s.title}
                desc={s.desc}
                href={s.href}
                reduced={reduced}
              />
            </div>
          ))}
        </div>

        {/* Bullets */}
        <Bullets count={slides.length} instanceRef={instanceRef} />
      </div>
    </section>
  )
}

function Bullets({ count, instanceRef }: { count: number; instanceRef: any }) {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return
    slider.on("slideChanged", () => setCurrent(slider.track.details.rel))
  }, [instanceRef])
  return (
    <div className="mt-4 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          aria-label={`${t('common.navigation.goToSlide')} ${i + 1}`}
          onClick={() => instanceRef.current?.moveToIdx(i)}
          className={`h-2.5 w-2.5 rounded-full ${i === current ? "bg-foreground" : "bg-foreground/30"}`}
        />
      ))}
    </div>
  )
}

function FlipCard({ title, desc, href, reduced }: { title: string; desc: string; href: string; reduced: boolean }) {
  const { t } = useLanguage()
  // En móvil/teclado, que el flip sea accesible: usamos focus/active
  return (
    <Link
      href={href}
      className="group block h-full"
      aria-label={`${title}. ${desc ? desc : ""}`}
    >
      <div
        className={[
          "relative aspect-[4/3] w-full rounded-2xl border overflow-hidden",
          "bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800",
          "shadow-sm hover:shadow-lg transition-shadow"
        ].join(" ")}
        style={{ perspective: 1000 }}
      >
        <div
          className={[
            "absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d]",
            reduced ? "" : "group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]"
          ].join(" ")}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 grid place-items-center px-6 text-center [backface-visibility:hidden]"
          >
            <h3 className="font-title text-xl md:text-2xl text-accent">{title}</h3>
          </div>
          {/* BACK */}
          <div
            className="absolute inset-0 rotate-y-180 [backface-visibility:hidden] grid place-items-center bg-gradient-to-br from-accent/5 to-accent/10"
          >
            <div className="p-6 text-center space-y-3">
              <h3 className="font-title text-xl text-accent">{title}</h3>
              {desc && <p className="text-sm opacity-80">{desc}</p>}
              <span className="inline-block mt-1 px-3 py-1 text-sm rounded-full border border-accent/30 bg-accent/10 text-accent">
                {t('common.actions.viewTreatments')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}