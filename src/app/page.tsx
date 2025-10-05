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

export default function HomePage() {
  const site = getSite()
  const destacados = getTratamientos(site.tratamientos_destacados)
  const estrella = getTratamiento(site.hero.tratamiento_estrella_slug)

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        
        {/* HEADER PRINCIPAL */}
        <div className="container pt-20 pb-12 md:pt-28 md:pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <KineticHeadline text="Medicina estética de precisión" />
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Resultados naturales y elegantes que realzan tu belleza única con la máxima seguridad y profesionalidad.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 h-14">
                Reservar valoración
              </button>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent rounded-2xl hover:bg-accent hover:text-foreground transition-all duration-300 font-medium text-lg h-14"
              >
                Más información
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
                  <h3 className="font-title text-2xl">Tu mejor versión</h3>
                  <p className="text-muted-foreground">
                    Realzamos tu belleza natural con técnicas avanzadas y un enfoque personalizado para cada paciente.
                  </p>
                </div>
              </AnimatedCard>

              {/* Tratamiento estrella */}
              <AnimatedCard delay={0.3}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-title text-2xl">Tratamiento estrella</h3>
                  <p className="text-muted-foreground">
                    {estrella.titulo} - {estrella.extracto} Resultados naturales y duraderos.
                  </p>
                </div>
              </AnimatedCard>

              {/* Dra. Celina */}
              <AnimatedCard delay={0.5}>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-title text-2xl">Dra. Celina Suárez</h3>
                  <p className="text-muted-foreground">
                    Especialista en Medicina Interna con más de 20 años de experiencia. Experta en longevidad, antiaging y medicina integrativa.
                  </p>
                </div>
              </AnimatedCard>

            </div>
          </div>
        </div>

        {/* Slider de tratamientos destacados */}
        <Section title="Nuestros tratamientos">
          <TreatmentSlider treatments={destacados} />
        </Section>

        {/* CTA Ver todos los tratamientos */}
        <div className="container text-center py-8">
          <Link 
            href="/tratamientos" 
            className="inline-flex items-center px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver todos los tratamientos
          </Link>
        </div>

        {/* Detrás de VIMASS Clinic */}
        <Section title="Detrás de VIMASS Clinic">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
              <Image src="/images/equipo/doctora.jpg" alt="Dra. Celina Suárez" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-title text-3xl md:text-4xl mb-2">Dra. Celina Suárez</h3>
                <p className="text-accent font-medium mb-4">CEO & Fundadora • Directora Médica</p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Con más de dos décadas transformando vidas a través de la medicina preventiva y regenerativa. 
                  Reconocida internacionalmente como experta en longevidad saludable y medicina de precisión.
                </p>
                <p>
                  Consultora senior en SHA Wellness Clinic, Centro Médico Teknon y Clínica Planas. Su enfoque 
                  integra medicina funcional, protocolos personalizados y las tecnologías más avanzadas.
                </p>
                <p>
                  Más de 3,500 pacientes han confiado en su visión holística que va más allá de la estética: 
                  busca el bienestar integral y la optimización de la salud desde adentro hacia afuera.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href="/equipo"
                  className="inline-flex items-center px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Conoce más sobre nuestro equipo
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Nuestros resultados */}
        <Section title="Nuestros resultados son impresionantes y sutiles">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                En VIMASS Clinic, nos enorgullecemos de lograr transformaciones que parecen completamente naturales. 
                Nuestros pacientes experimentan mejoras significativas mientras mantienen su esencia única.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Resultados naturales y armoniosos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Técnicas mínimamente invasivas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Recuperación rápida y cómoda</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Seguimiento personalizado</span>
                </div>
              </div>
              <div className="pt-4">
                <Link 
                  href="/resultados"
                  className="inline-flex items-center px-6 py-3 border border-accent text-accent rounded-2xl hover:bg-accent hover:text-foreground transition-all duration-300 font-medium"
                >
                  Ver más resultados
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-soft">
              <div className="relative aspect-square">
                <Image src="/images/resultados/1-before.jpg" alt="Antes" fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">Antes</div>
              </div>
              <div className="relative aspect-square">
                <Image src="/images/resultados/1-after.jpg" alt="Después" fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">Después</div>
              </div>
              <div className="relative aspect-square">
                <Image src="/images/resultados/2-before.jpg" alt="Antes" fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">Antes</div>
              </div>
              <div className="relative aspect-square">
                <Image src="/images/resultados/2-after.jpg" alt="Después" fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">Después</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Reseñas */}
        <Section title="Lo que dicen nuestros pacientes">
          <Reviews items={site.reseñas} />
        </Section>

        {/* Estadísticas con contadores animados */}
        <StatsSection />

        {/* ¿Dónde encontrarnos? */}
        <Section title="¿Dónde encontrarnos?">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <a 
                href={`tel:${site.clinica.telefono}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {site.clinica.telefono}
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a 
                href={`https://wa.me/${site.clinica.whatsapp.replace(/\D/g,"")}`}
                target="_blank"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                Escríbenos
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href={`mailto:${site.clinica.email}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {site.clinica.email}
              </a>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Horarios</h3>
              <p className="text-muted-foreground">{site.clinica.horario}</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="font-title text-2xl">Nuestra ubicación</h3>
              </div>
              <p className="text-muted-foreground">
                En el corazón de Barcelona, fácil acceso en transporte público
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
                  <p className="text-xs text-muted-foreground mt-1">{site.clinica.direccion}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Formulario de contacto */}
        <section className="container py-16">
          <h2 className="font-title text-3xl md:text-4xl mb-6 text-center">Agenda tu cita</h2>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-border p-8 bg-card shadow-soft">
              <div className="text-center mb-8">
                <h3 className="font-title text-2xl mb-2">Comienza tu transformación</h3>
                <p className="text-muted-foreground">
                  Complete el formulario y nos pondremos en contacto contigo para programar tu consulta personalizada.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      Teléfono/WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    Tratamiento de interés
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200">
                    <option>Medicina Funcional</option>
                    <option>Protocolos Antiaging</option>
                    <option>Medicina Integrativa</option>
                    <option>Consulta General</option>
                    <option>Otro (especificar en mensaje)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-accent" />
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-foreground rounded-xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </button>
              </form>
              
              <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  ¿Prefieres llamarnos?
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  También puedes reservar tu cita directamente por teléfono o WhatsApp
                </p>
                <ReserveDialog />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}