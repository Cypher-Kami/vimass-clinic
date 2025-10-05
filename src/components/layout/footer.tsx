import Link from "next/link"
import { getSite } from "@/lib/content"
import { MapPin, Clock, Phone, MessageCircle, Mail, Shield, Cookie } from "lucide-react"

export function Footer() {
  const site = getSite()
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-title text-lg mb-4">{site.clinica.nombre}</div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>{site.clinica.direccion}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>{site.clinica.horario}</span>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium mb-4">Legal</h4>
          <div className="flex flex-col space-y-2">
            <Link href="/legal" className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700" />
              Privacidad
            </Link>
            <Link href="/legal" className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Cookie className="w-4 h-4 text-amber-700" />
              Cookies
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium mb-4">Contacto</h4>
          <div className="flex flex-col space-y-2">
            <a href={`tel:${site.clinica.telefono}`} className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-700" />
              {site.clinica.telefono}
            </a>
            <a href={`https://wa.me/${site.clinica.whatsapp.replace(/\D/g,"")}`} target="_blank" className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-amber-700" />
              WhatsApp
            </a>
            <a href={`mailto:${site.clinica.email}`} className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-700" />
              {site.clinica.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}