"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 30,
        scale: 0.95,
        rotateX: 10
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotateX: 0
      } : { 
        opacity: 0, 
        y: 30,
        scale: 0.95,
        rotateX: 10
      }}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}