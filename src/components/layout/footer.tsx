"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, Phone, MessageCircle, Mail, Shield, Cookie } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { ImagePaths } from "@/lib/image-paths"

interface FooterProps {
  clinica?: {
    nombre: string
    direccion: string
    telefono: string
    whatsapp: string
    email: string
    horario: string
  }
}

export function Footer({ clinica }: FooterProps) {
  const { t } = useLanguage()

  // Valores por defecto si no se pasan props
  const defaultClinica = {
    nombre: "VIMASS Clinic",
    direccion: "Passeig de Gràcia, 85, Barcelona",
    telefono: "+34 622 324 581",
    whatsapp: "+34 622 324 581",
    email: "info@drcelinasuarez.com",
    horario: "M-F: 9:00-19:00"
  }

  const clinicaData = clinica || defaultClinica

  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="mb-4">
            <Image
              src={ImagePaths.logo.main}
              alt="VIMASS Clinic"
              width={160}
              height={64}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>{clinicaData.direccion}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>{t('pages.contacto.scheduleText')}</span>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium mb-4">{t('footer.legal')}</h4>
          <div className="flex flex-col space-y-2">
            <Link href="/legal" className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700" />
              {t('footer.privacy')}
            </Link>
            <Link href="/legal" className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Cookie className="w-4 h-4 text-amber-700" />
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium mb-4">{t('footer.contact')}</h4>
          <div className="flex flex-col space-y-2">
            <a href={`tel:${clinicaData.telefono}`} className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-700" />
              {clinicaData.telefono}
            </a>
            <a href={`https://wa.me/${clinicaData.whatsapp.replace(/\D/g,"")}`} target="_blank" className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-amber-700" />
              WhatsApp
            </a>
            <a href={`mailto:${clinicaData.email}`} className="text-sm underline hover:text-accent transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-700" />
              {clinicaData.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}