"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ end, duration = 8, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      // Curva de easing más suave (ease-out-expo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      // Para números grandes, usamos incrementos más grandes al principio
      const currentValue = Math.floor(easeOutExpo * end)
      
      // Solo actualizar si el valor cambió para evitar renders innecesarios
      setCount(prev => {
        if (prev !== currentValue) {
          return currentValue
        }
        return prev
      })

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Asegurar que llegue exactamente al número final
        setCount(end)
      }
    }

    // Pequeño delay antes de comenzar la animación
    const startDelay = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, 200)

    return () => {
      clearTimeout(startDelay)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 30, 
        scale: 0.8 
      }}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 1], // Curva de bezier suave
        delay: 0.1 
      }}
      className="font-title text-4xl md:text-5xl font-bold text-accent block"
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  )
}