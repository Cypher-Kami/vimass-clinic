'use client'

import Image from "next/image"
import { Section } from "@/components/common/section"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"
import { ImagePaths } from "@/lib/image-paths"
import { 
  Award, 
  Users, 
  Brain, 
  Heart, 
  Microscope, 
  Sparkles, 
  Globe,
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react"

export function EquipoClient() {
  const { t } = useLanguage()
  
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="container pt-28 pb-12">
          <div className="max-w-4xl">
            <div className="relative mb-6">
              <h1 className="font-title text-4xl md:text-6xl relative z-10">{t('pages.equipo.title')}</h1>
              {/* Decorative underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-16 mt-2"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('pages.equipo.subtitle')}
            </p>
          </div>
        </div>

        {/* Dra. Celina Section */}
        <div className="container pt-16">
          <Section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
                  <Image src={ImagePaths.equipo.draCelina} alt="Dra. Celina Suárez" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-title text-3xl md:text-4xl">{t('pages.equipo.draCelinaTitle')}</h2>
                      <p className="text-accent font-medium text-lg">{t('pages.equipo.draCelinaSubtitle')}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">CEO & Fundadora de Grupo Vimass Salud</p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    {t('pages.equipo.draCelinaDescription')}
                  </p>
                  
                  {/* Experiencia Internacional */}
                  <div className="bg-gradient-to-r from-accent/5 to-secondary/5 p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold text-foreground">{t('pages.equipo.draCelinaExperience')}</h3>
                    </div>
                    <div className="grid gap-3">
                      {[
                        { nameKey: 'pages.equipo.experienceLocations.shaWellness', location: "Alicante", icon: Sparkles },
                        { nameKey: 'pages.equipo.experienceLocations.centroTeknon', location: "Barcelona", icon: Microscope },
                        { nameKey: 'pages.equipo.experienceLocations.clinicaPlanas', location: "Barcelona", icon: Heart },
                        { nameKey: 'pages.equipo.experienceLocations.consultaPrivada', location: "Passeig de Gràcia", icon: MapPin }
                      ].map((center, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10 transition-all duration-200">
                          <center.icon className="w-4 h-4 text-accent flex-shrink-0" />
                          <div className="flex-1">
                            <span className="font-medium text-foreground">{t(center.nameKey)}</span>
                            <span className="text-muted-foreground text-sm ml-2">({center.location})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Areas de Especialización */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background border border-border p-5 rounded-xl hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <Brain className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" />
                        <h4 className="font-semibold text-foreground">{t('pages.equipo.draCelinaEducation')}</h4>
                      </div>
                      <ul className="space-y-2">
                        {t('pages.equipo.draCelinaEducationList').split('\n').map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-background border border-border p-5 rounded-xl hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" />
                        <h4 className="font-semibold text-foreground">{t('pages.equipo.draCelinaExperience')}</h4>
                      </div>
                      <ul className="space-y-2">
                        {t('pages.equipo.draCelinaExperienceList').split('\n').map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent rounded-full"></div>
                    <blockquote className="pl-6 py-4 bg-accent/5 rounded-r-xl border border-accent/20">
                      <p className="italic text-foreground font-medium mb-2">
                        "{t('pages.equipo.draCelinaPhilosophyText')}"
                      </p>
                      <cite className="text-accent text-sm font-medium">— {t('pages.equipo.draCelinaTitle')}</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Contact Information */}
        <div className="container pt-16">
          <Section>
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="font-title text-3xl mb-4">{t('home.contactTitle')}</h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {t('home.contactDescription')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{t('pages.contacto.phoneTitle')}</h4>
                  <p className="text-muted-foreground">+34 722 48 00 26</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{t('pages.contacto.emailTitle')}</h4>
                  <p className="text-muted-foreground">info@vimass.es</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{t('pages.contacto.scheduleTitle')}</h4>
                  <p className="text-muted-foreground">L-V 10:00–20:00</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
      <CTAFloat />
      <WhatsAppFloat />
      <Toaster />
    </div>
  )
}