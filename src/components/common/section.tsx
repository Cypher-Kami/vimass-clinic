"use client"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <motion.section {...staggerContainer} className="container py-16">
      {title && (
        <motion.h2 {...fadeUp} className="font-title text-3xl md:text-4xl mb-6">{title}</motion.h2>
      )}
      <motion.div {...fadeUp}>{children}</motion.div>
    </motion.section>
  )
}