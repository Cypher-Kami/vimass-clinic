"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/providers/language-provider"
import { ImagePaths } from "@/lib/image-paths"

const letter = {
  hidden: { y: "0.8em", opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function HeroClinic() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)
  const prefersReduced = typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  const slides = [
    { video: ImagePaths.hero.videos.slide1, text: t('home.hero.slide1') },
    { video: ImagePaths.hero.videos.slide2, text: t('home.hero.slide2') },
    { video: ImagePaths.hero.videos.slide3, text: t('home.hero.slide3') },
    { video: ImagePaths.hero.videos.slide4, text: t('home.hero.slide4') },
    { video: ImagePaths.hero.videos.slide5, text: t('home.hero.slide5') },
  ]

  const textLetters = useMemo(() => slides[index].text.split(""), [index, slides])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  useEffect(() => {
    if (!prefersReduced) {
      timer.current = setInterval(nextSlide, 7000)
    }
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [prefersReduced])

  return (
    <section className="relative h-[calc(100vh)] min-h-[640px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <video 
            src={slides[index].video} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full">
        <div className="container h-full flex items-end pb-14">
          <h1 aria-label={slides[index].text}
              className="font-title text-white text-4xl md:text-6xl leading-tight drop-shadow-lg">
            {textLetters.map((ch, i) => (
              <motion.span
                key={`${index}-${i}-${ch}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letter}
                transition={{ delay: 0.06 * i, duration: 0.7, ease: "easeOut" }}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}
