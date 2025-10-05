import { ReserveDialog } from "@/components/common/reserve-dialog"
import { getSite } from "@/lib/content"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Section } from "@/components/common/section"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
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

export default function ContactoPage() {
  const site = getSite()
  
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="container pt-28 pb-12">
          <div className="max-w-4xl">
            <div className="relative mb-6">
              <h1 className="font-title text-4xl md:text-6xl relative z-10">Contacto</h1>
              {/* Decorative underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-16 mt-2"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Estamos aquí para acompañarte en tu camino hacia el bienestar integral
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        </Section>

        {/* Contact Form & Map */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-title text-3xl mb-4">Envíanos un mensaje</h2>
                <p className="text-muted-foreground mb-8">
                  Complete el formulario y nos pondremos en contacto contigo lo antes posible para programar tu consulta personalizada.
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
                      Teléfono
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
                    <Mail className="w-4 h-4 text-accent" />
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
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
                    rows={5}
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
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  ¿Prefieres llamarnos?
                </h3>
                <p className="text-muted-foreground mb-4">
                  También puedes reservar tu cita directamente por teléfono o WhatsApp
                </p>
                <ReserveDialog />
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div>
                <h2 className="font-title text-3xl mb-4">Ubicación</h2>
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Passeig de Gràcia</p>
                    <p className="text-muted-foreground">Barcelona, España</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      En el corazón de Barcelona, fácil acceso en transporte público
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-accent/20 min-h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0156491081596!2d2.1634043!3d41.3912145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8b7f8f7f7%3A0x1234567890abcdef!2sPasseig%20de%20Gr%C3%A0cia%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123"
                    width="100%"
                    height="400"
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
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background border border-border rounded-xl text-center group hover:border-accent/40 transition-all duration-200">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-accent/20 transition-colors duration-200">
                    <span className="text-accent font-bold text-sm">M</span>
                  </div>
                  <p className="text-sm font-medium">Metro</p>
                  <p className="text-xs text-muted-foreground">Passeig de Gràcia</p>
                </div>
                
                <div className="p-4 bg-background border border-border rounded-xl text-center group hover:border-accent/40 transition-all duration-200">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-accent/20 transition-colors duration-200">
                    <span className="text-accent font-bold text-sm">🚌</span>
                  </div>
                  <p className="text-sm font-medium">Bus</p>
                  <p className="text-xs text-muted-foreground">Múltiples líneas</p>
                </div>
              </div>
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