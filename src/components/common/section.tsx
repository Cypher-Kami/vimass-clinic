"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, children, className = "" }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px"
  })

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`container py-16 ${className}`}
    >
      {title && (
        <motion.div 
          className="relative mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-title text-3xl md:text-4xl relative z-10">
            {title}
          </h2>
          {/* Decorative underline animation */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-accent"
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}