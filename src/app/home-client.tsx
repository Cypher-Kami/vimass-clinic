"use client"

import Image from "next/image"
import Link from "next/link"
import { KineticHeadline } from "@/components/common/kinetic-headline"
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
import { Sparkles, Star, UserCheck, CheckCircle, MapPin, Phone, Clock, MessageCircle, Stethoscope, User, Heart, Send, Calendar, Mail } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ImagePaths } from "@/lib/image-paths"

interface HomeClientProps {
  clinica: {
    nombre: string
    direccion: string
    telefono: string
    whatsapp: string
    email: string
    horario: string
  }
  reseñas: any[]
  destacados: any[]
  estrella: any
}

export function HomeClient({ clinica, reseñas, estrella, destacados }: HomeClientProps) {
  const { t } = useLanguage()

  return (
    <>
      <MainNav />
      <main className="min-h-screen">
        
        {/* HEADER PRINCIPAL */}
        <div className="container pt-20 pb-12 md:pt-28 md:pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <KineticHeadline text={t('home.headline')} />
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 h-14">
                {t('home.ctaReservar')}
              </button>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent rounded-2xl hover:bg-accent hover:text-foreground transition-all duration-300 font-medium text-lg h-14"
              >
                {t('home.ctaInfo')}
              </Link>
            </div>
          </div>
        </div>

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

        {/* ¿Dónde encontrarnos? */}
        <Section title={t('home.locationTitle')}>
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.contact.phone')}</h3>
              <a 
                href={`tel:${clinica.telefono}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {clinica.telefono}
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.contact.whatsapp')}</h3>
              <a 
                href={`https://wa.me/${clinica.whatsapp.replace(/\D/g,"")}`}
                target="_blank"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {t('home.contact.whatsappText')}
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.contact.email')}</h3>
              <a 
                href={`mailto:${clinica.email}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {clinica.email}
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.contact.schedule')}</h3>
              <p className="text-muted-foreground">{clinica.horario}</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="font-title text-2xl">{t('home.locationSubtitle')}</h3>
              </div>
              <p className="text-muted-foreground">
                {t('home.locationDescription')}
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-accent/20 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0156491081596!2d2.1634043!3d41.3912145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8b7f8f7f7%3A0x1234567890abcdef!2sPasseig%20de%20Gr%C3%A0cia%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-300 group-hover:scale-105"
                ></iframe>
                
                {/* Map overlay with location info */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-xl border border-accent/20 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="font-medium text-sm">Vimass Clinic</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{clinica.direccion}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Formulario de contacto */}
        <section className="container py-16">
          <h2 className="font-title text-3xl md:text-4xl mb-6 text-center">{t('home.contactTitle')}</h2>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-border p-8 bg-card shadow-soft">
              <div className="text-center mb-8">
                <h3 className="font-title text-2xl mb-2">{t('home.contactSubtitle')}</h3>
                <p className="text-muted-foreground">
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
              
              <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
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