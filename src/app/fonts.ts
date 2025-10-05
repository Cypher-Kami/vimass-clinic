// src/app/fonts.ts
import { Marcellus } from "next/font/google"
import { Inter } from "next/font/google"

export const titleFont = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
})

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})