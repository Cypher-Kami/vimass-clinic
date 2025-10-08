'use client'

import Image from "next/image"
import { ReserveDialog } from "@/components/common/reserve-dialog"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Section } from "@/components/common/section"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"
import { ImagePaths } from "@/lib/image-paths"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  User,
  Calendar,
  Heart
} from "lucide-react"

interface ClinicaData {
  nombre: string
  telefono: string
  whatsapp: string
  email: string
  direccion: string
  horario: string
}

interface ContactoClientProps {
  clinica: ClinicaData
}

export function ContactoClient({ clinica }: ContactoClientProps) {
  const { t } = useLanguage()
  
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="container pt-28 pb-12">
          <div className="max-w-4xl">
            <div className="relative mb-6">
              <h1 className="font-title text-4xl md:text-6xl relative z-10">{t('pages.contacto.title')}</h1>
              {/* Decorative underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-16 mt-2"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('pages.contacto.subtitle')}
            </p>
          </div>
        </div>

        {/* Contact Form & Photo */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-title text-3xl mb-4">{t('pages.contacto.contactFormTitle')}</h2>
                <p className="text-muted-foreground mb-8">
                  {t('pages.contacto.contactFormDescription')}
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      {t('pages.contacto.nameLabel')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder={t('pages.contacto.namePlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      {t('pages.contacto.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder={t('pages.contacto.phonePlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    {t('pages.contacto.emailLabel')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder={t('pages.contacto.emailPlaceholder')}
                  />
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
                    {t('pages.contacto.messageLabel')}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t('pages.contacto.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-foreground rounded-xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  {t('pages.contacto.submitButton')}
                </button>
              </form>
            </div>

            {/* Photo Section */}
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-3xl mb-4">{t('home.teamTitle')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('pages.contacto.contactFormDescription')}
                </p>
              </div>
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={ImagePaths.equipo.draCelina}
                  alt="Dra. Celina Suárez - VIMASS Clinic"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-title text-2xl mb-2">Dra. Celina Suárez</h3>
                  <p className="text-white/90">{t('home.teamSubtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Map Section */}
        <Section>
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-title text-3xl mb-4">{t('pages.contacto.locationTitle')}</h2>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <p className="font-medium">Passeig de Gràcia, Barcelona</p>
                </div>
                <p className="text-muted-foreground text-sm">{t('home.locationDescription')}</p>
              </div>
            </div>
            
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-accent/20 min-h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0156491081596!2d2.1634043!3d41.3912145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8b7f8f7f7%3A0x1234567890abcdef!2sPasseig%20de%20Gr%C3%A0cia%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123"
                  width="100%"
                  height="500"
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
                  <p className="text-xs text-muted-foreground mt-1">Passeig de Gràcia</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <CTAFloat />
      <WhatsAppFloat clinica={clinica} />
      <Toaster />
    </div>
  )
}