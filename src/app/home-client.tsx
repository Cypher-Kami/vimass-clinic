"use client"

import Image from "next/image"
import Link from "next/link"
import HeroClinic from "@/components/hero/HeroClinic"
import { Section } from "@/components/common/section"
import { AnimatedCard } from "@/components/common/animated-card"
import { TreatmentSlider } from "@/components/common/treatment-slider"
import { Reviews } from "@/components/common/reviews"
import { StatsSection } from "@/components/common/stats-section"
import { ReserveDialog } from "@/components/common/reserve-dialog"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Toaster } from "sonner"
import { Sparkles, Star, CheckCircle, MapPin, Phone, Clock, MessageCircle, Stethoscope, User, Heart, Send, Calendar } from "lucide-react"
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

export function HomeClient({ clinica, reseñas, destacados, estrella }: HomeClientProps) {
  const { t } = useLanguage()
  
  // Reviews are handled internally by the Reviews component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _reseñas = reseñas;

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
                    {estrella.titulo} - {estrella.extracto} {t('home.starTreatment.description')}
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

        {/* Slider de tratamientos destacados */}
                <Section title={t('home.reviewsTitle')}>
          <TreatmentSlider treatments={destacados} />
        </Section>

        {/* CTA Ver todos los tratamientos */}
        <div className="container text-center py-8">
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
              <Image src={ImagePaths.equipo.draCelina} alt="Dra. Celina Suárez" fill className="object-cover" />
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
            <div className="space-y-4">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3]">
                  <Image 
                    src={ImagePaths.resultados[0]} 
                    alt="Resultado 1 - Antes y Después" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  {t('home.beforeAfterLabel')}
                </div>
              </div>
              
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3]">
                  <Image 
                    src={ImagePaths.resultados[2]} 
                    alt="Resultado 3 - Antes y Después" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
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

        {/* Estadísticas con contadores animados */}
        <StatsSection />

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
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      {t('home.form.nameLabel')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder={t('home.form.namePlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      {t('home.form.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder={t('home.form.phonePlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    {t('home.form.treatmentLabel')}
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200">
                    <option>{t('home.form.treatmentOptions.functional')}</option>
                    <option>{t('home.form.treatmentOptions.antiaging')}</option>
                    <option>{t('home.form.treatmentOptions.integrative')}</option>
                    <option>{t('home.form.treatmentOptions.general')}</option>
                    <option>{t('home.form.treatmentOptions.other')}</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-accent" />
                    {t('home.form.messageLabel')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t('home.form.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-foreground rounded-xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  {t('home.form.submitButton')}
                </button>
              </form>
              
              <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  {t('home.form.callPreference')}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t('home.form.callDescription')}
                </p>
                <ReserveDialog />
              </div>
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
                    <p className="text-xs text-muted-foreground">{clinica.horario}</p>
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