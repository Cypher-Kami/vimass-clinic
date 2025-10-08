"use client"

import Image from "next/image"
import Link from "next/link"
import HeroClinic from "@/components/hero/HeroClinic"
import { Section } from "@/components/common/section"
import { AnimatedCard } from "@/components/common/animated-card"
import { Reviews } from "@/components/common/reviews"
import { StatsSection } from "@/components/common/stats-section"
import ContactForm from "@/components/common/contact-form"
import ClinicValuesMinimal from "@/components/home/ClinicValuesMinimal"
import PhilosophyVisual from "@/components/home/PhilosophyVisual"
import EvidenceStrip from "@/components/home/EvidenceStrip"
import WhyChoose from "@/components/home/WhyChoose"
import PhilosophySteps from "@/components/home/PhilosophySteps"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Toaster } from "sonner"
import { 
  Sparkles, 
  Star, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Stethoscope, 
  Building,
  Lightbulb,
  Leaf
} from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ImagePaths } from "@/lib/image-paths"
import type { Tratamiento, Review } from "@/lib/types"

interface HomeClientProps {
  clinica: {
    nombre: string
    telefono: string
    whatsapp: string
    email: string
    direccion: string
    horario: string
  }
  reseñas: Review[]
  destacados: Tratamiento[]
  estrella: Tratamiento
}

export function HomeClient({ clinica, reseñas, destacados }: HomeClientProps) {
  const { t } = useLanguage()
  
  // Reviews are handled internally by the Reviews component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _reseñas = reseñas;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _destacados = destacados;
  return (
    <>
      <MainNav />
      <main className="min-h-screen">
        
        {/* HERO ANIMADO */}
        <HeroClinic />

        {/* TABS HORIZONTALES */}
        <div className="bg-secondary/30 py-8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              
              {/* Tu mejor versión */}
              <AnimatedCard delay={0.1}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-title text-2xl">{t('home.bestVersion.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.bestVersion.description')}
                  </p>
                </div>
              </AnimatedCard>

              {/* Tratamiento estrella */}
              <AnimatedCard delay={0.3}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-title text-2xl">{t('home.starTreatment.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.starTreatment.description')}
                  </p>
                </div>
              </AnimatedCard>

              {/* Dra. Celina */}
              <AnimatedCard delay={0.5}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-title text-2xl">{t('home.draCelina')}</h3>
                  <p className="text-muted-foreground">
                    {t('home.draCelinaDesc')}
                  </p>
                </div>
              </AnimatedCard>

            </div>
          </div>
        </div>

        {/* Estadísticas con contadores animados */}
        <StatsSection />

        {/* ¿POR QUÉ ELEGIR VIMASS CLINIC? */}
        <WhyChoose />
        
        {/* BANDA DE EVIDENCIAS */}
        <div className="container">
          <EvidenceStrip />
        </div>

        {/* INSTALACIONES */}
        <Section title={t('home.facilities.title')}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('home.facilities.description')}
              </p>
              {/* Pictogramas simplificados */}
              <div className="grid grid-cols-4 gap-3">
                <div className="grid place-items-center rounded-xl border py-6 px-6 bg-white/70">
                  <Building className="h-6 w-6 text-accent mb-4" />
                  <span className="text-xs font-medium text-center w-full -mt-1">{t('home.facilities.consultation')}</span>
                </div>
                <div className="grid place-items-center rounded-xl border py-6 px-6 bg-white/70">
                  <Stethoscope className="h-6 w-6 text-accent mb-4" />
                  <span className="text-xs font-medium text-center w-full -mt-1">{t('home.facilities.treatment')}</span>
                </div>
                <div className="grid place-items-center rounded-xl border py-6 px-6 bg-white/70">
                  <Lightbulb className="h-6 w-6 text-accent mb-4" />
                  <span className="text-xs font-medium text-center w-full -mt-1">{t('home.facilities.technology')}</span>
                </div>
                <div className="grid place-items-center rounded-xl border py-6 px-6 bg-white/70">
                  <Leaf className="h-6 w-6 text-accent mb-4" />
                  <span className="text-xs font-medium text-center w-full -mt-1">{t('home.facilities.comfort')}</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={ImagePaths.clinica.interior.mostrador} 
                alt="Instalaciones VIMASS Clinic" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Section>

        {/* FILOSOFÍA - PASOS */}
        <PhilosophySteps />

        {/* CTA Ver todos los tratamientos */}
        <div className="container text-center pt-2 pb-8">
          <Link 
            href="/tratamientos" 
            className="inline-flex items-center px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('home.viewAllTreatments')}
          </Link>
        </div>        {/* Detrás de VIMASS Clinic */}
        <Section title={t('home.teamTitle')}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
              <Image 
                src={ImagePaths.equipo.draCelina} 
                alt="Dra. Celina Suárez" 
                fill 
                priority
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-title text-3xl md:text-4xl mb-2">Dra. Celina Suárez</h3>
                <p className="text-accent font-medium mb-4">{t('home.teamSubtitle')}</p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t('home.teamDescription1')}
                </p>
                <p>
                  {t('home.teamDescription2')}
                </p>
                <p>
                  {t('home.teamDescription3')}
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href="/equipo"
                  className="inline-flex items-center px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('home.teamCta')}
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Nuestros resultados */}
        <Section title={t('home.resultsTitle')}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('home.resultsDescription')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{t('home.resultsFeature1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{t('home.resultsFeature2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{t('home.resultsFeature3')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{t('home.resultsFeature4')}</span>
                </div>
              </div>
              <div className="pt-4">
                <Link 
                  href="/resultados"
                  className="inline-flex items-center px-6 py-3 border border-accent text-accent rounded-2xl hover:bg-accent hover:text-foreground transition-all duration-300 font-medium"
                >
                  {t('home.resultsCta')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  <Image 
                    src={ImagePaths.resultados[2]} 
                    alt="Resultado - Antes y Después" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  {/* Blur overlay for eyes privacy - two bars with separation in center */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Left bar - from start to center */}
                    <div className="absolute top-[27%] left-[2%] w-[45%] h-12 bg-white/30 backdrop-blur-lg rounded-full"></div>
                    {/* Right bar - from center to end */}
                    <div className="absolute top-[27%] right-[2%] w-[45%] h-12 bg-white/30 backdrop-blur-lg rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  {t('home.beforeAfterLabel')}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Reseñas */}
        <Section title={t('home.reviewsTitle')}>
          <Reviews />
        </Section>

        {/* Formulario de contacto */}
        <section className="container py-16">
          <h2 className="font-title text-3xl md:text-4xl mb-12 text-center">{t('home.contactTitle')}</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="font-title text-2xl mb-2">{t('home.contactSubtitle')}</h3>
                <p className="text-muted-foreground mb-8">
                  {t('home.contactDescription')}
                </p>
              </div>
              
              <ContactForm />
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div>
                <h3 className="font-title text-2xl mb-4">{t('home.map.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('home.map.description')}
                </p>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8747329861047!2d2.1387387764316687!3d41.38794597128139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f6b0e8c5df%3A0x5c8f7e8d7f9a5b3c!2sVIMASS%20CLINIC!5e0!3m2!1sen!2ses!4v1698765432109!5m2!1sen!2ses"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] rounded-xl"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t('home.contact.address')}</p>
                    <p className="text-xs text-muted-foreground">{clinica.direccion}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t('home.contact.schedule')}</p>
                    <p className="text-xs text-muted-foreground">{t('pages.contacto.scheduleText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer clinica={clinica} />
      <CTAFloat />
      <WhatsAppFloat clinica={clinica} />
      <Toaster />
    </>
  )
}