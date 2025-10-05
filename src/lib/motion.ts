export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { staggerChildren: 0.06, duration: 0.4 }
}

export const letter = {
  initial: { y: "0.6em", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}