import { ReserveDialog } from "@/components/common/reserve-dialog"
import { getSite } from "@/lib/content"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"

export default function ContactoPage() {
  const site = getSite()
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container py-14 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="font-title text-4xl md:text-5xl">Contacto</h1>
            <p className="mt-4 opacity-80">Estaremos encantados de ayudarte.</p>
            <div className="mt-6 space-y-2">
              <div>Tel: <a className="underline" href={`tel:${site.clinica.telefono}`}>{site.clinica.telefono}</a></div>
              <div>WhatsApp: <a className="underline" target="_blank" href={`https://wa.me/${site.clinica.whatsapp.replace(/\D/g,"")}`}>Escríbenos</a></div>
              <div>Email: <a className="underline" href={`mailto:${site.clinica.email}`}>{site.clinica.email}</a></div>
              <div>Dirección: {site.clinica.direccion}</div>
            </div>
            <div className="mt-8"><ReserveDialog /></div>
          </div>
          <div className="rounded-2xl border p-0 overflow-hidden min-h-72">
            {/* Inserta iframe de Google Maps */}
          </div>
        </div>
      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}