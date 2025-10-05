import Image from "next/image"
import Link from "next/link"
import { KineticHeadline } from "@/components/common/kinetic-headline"
import { Section } from "@/components/common/section"
import { AnimatedCard } from "@/components/common/animated-card"
import { TreatmentSlider } from "@/components/common/treatment-slider"
import { Reviews } from "@/components/common/reviews"
import { StatsSection } from "@/components/common/stats-section"
import { ReserveDialog } from "@/components/common/reserve-dialog"
import { getSite, getTratamientos, getTratamiento } from "@/lib/content"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { Sparkles, Star, UserCheck, CheckCircle, MapPin, Phone, Clock, MessageCircle, Stethoscope, User, Heart, Send, Calendar, Mail } from "lucide-react"
import { HomeClient } from "./home-client"

export default function HomePage() {
  const site = getSite()
  const destacados = getTratamientos(site.tratamientos_destacados)
  const estrella = getTratamiento(site.hero.tratamiento_estrella_slug)

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <HomeClient 
        clinica={site.clinica}
        reseñas={site.reseñas}
        destacados={destacados}
        estrella={estrella}
      />
    </div>
  )
}