import Image from "next/image"
import Link from "next/link"
import { KineticHeadline } from "@/components/common/kinetic-headline"
import { Section } from "@/components/common/section"
import { TreatmentSlider } from "@/components/common/treatment-slider"
import { Reviews } from "@/components/common/reviews"
import { ReserveDialog } from "@/components/common/reserve-dialog"
import { getSite, getTratamientos, getTratamiento } from "@/lib/content"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"

export default function HomePage() {
  const site = getSite()
  const destacados = getTratamientos(site.tratamientos_destacados)
  const estrella = getTratamiento(site.hero.tratamiento_estrella_slug)

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        
        {/* HEADER PRINCIPAL */}
        <div className="container py-12 md:py-20 text-center">
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
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-title text-2xl">Tu mejor versión</h3>
                <p className="text-muted-foreground">
                  Realzamos tu belleza natural con técnicas avanzadas y un enfoque personalizado para cada paciente.
                </p>
              </div>

              {/* Tratamiento estrella */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="font-title text-2xl">Tratamiento estrella</h3>
                <p className="text-muted-foreground">
                  {estrella.titulo} - {estrella.extracto} Resultados naturales y duraderos.
                </p>
              </div>

              {/* Dra. Celina */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <h3 className="font-title text-2xl">Dra. Celina</h3>
                <p className="text-muted-foreground">
                  Especialista en medicina estética con más de 10 años de experiencia y formación internacional.
                </p>
              </div>

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
                <p className="text-accent font-medium mb-4">Directora Médica</p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Con más de una década de experiencia en medicina estética, la Dra. Celina Suárez se ha especializado 
                  en técnicas mínimamente invasivas que respetan la anatomía facial y corporal.
                </p>
                <p>
                  Su filosofía se basa en realzar la belleza natural de cada paciente, creando resultados armoniosos 
                  y sutiles que reflejan la personalidad única de cada persona.
                </p>
                <p>
                  Formada en las mejores instituciones internacionales, combina la última tecnología con un toque 
                  artístico excepcional para lograr la excelencia en cada tratamiento.
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
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Resultados naturales y armoniosos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Técnicas mínimamente invasivas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Recuperación rápida y cómoda</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
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

        {/* ¿Dónde encontrarnos? */}
        <Section title="¿Dónde encontrarnos?">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Dirección:</span>
                  <span className="text-muted-foreground">{site.clinica.direccion}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Teléfono:</span>
                  <a href={`tel:${site.clinica.telefono}`} className="text-accent hover:underline">
                    {site.clinica.telefono}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Horario:</span>
                  <span className="text-muted-foreground">{site.clinica.horario}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">WhatsApp:</span>
                  <a 
                    href={`https://wa.me/${site.clinica.whatsapp.replace(/\D/g,"")}`} 
                    target="_blank" 
                    className="text-accent hover:underline"
                  >
                    Contacto directo
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft bg-secondary/20 h-96">
              {/* Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.987654321!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBfNDInNDYuMSJOIDc0X0EwMCcyMS42IlY!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de VIMASS Clinic"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </Section>

        {/* Formulario de contacto */}
        <Section title="Agenda tu cita">
          <div className="max-w-xl mx-auto">
            <div className="rounded-2xl border border-border p-8 bg-card shadow-soft">
              <div className="text-center mb-8">
                <h3 className="font-title text-2xl mb-2">Formulario de contacto</h3>
                <p className="text-muted-foreground">
                  Déjanos tus datos y nos pondremos en contacto contigo para agendar tu consulta.
                </p>
              </div>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nombre completo" 
                    className="w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Teléfono/WhatsApp" 
                    className="w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mensaje" 
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" 
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </Section>

      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}