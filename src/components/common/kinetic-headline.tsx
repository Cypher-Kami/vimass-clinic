"use client"
import { motion } from "framer-motion"
import { letter } from "@/lib/motion"

export function KineticHeadline({ text }: { text: string }) {
  return (
    <h1 aria-label={text} className="font-title text-4xl md:text-6xl leading-tight">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial="initial"
          animate="animate"
          variants={letter}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {ch}
        </motion.span>
      ))}
    </h1>
  )
}