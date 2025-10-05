import Link from "next/link"
import { getSite } from "@/lib/content"

export function Footer() {
  const site = getSite()
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-title text-lg mb-2">{site.clinica.nombre}</div>
          <div>{site.clinica.direccion}</div>
          <div>{site.clinica.horario}</div>
        </div>
        <div className="space-y-2">
          <Link href="/legal">Privacidad</Link><br/>
          <Link href="/legal">Cookies</Link>
        </div>
        <div className="space-y-2">
          <a href={`tel:${site.clinica.telefono}`}>Tel: {site.clinica.telefono}</a><br/>
          <a href={`https://wa.me/${site.clinica.whatsapp.replace(/\D/g,"")}`} target="_blank">WhatsApp</a><br/>
          <a href={`mailto:${site.clinica.email}`}>{site.clinica.email}</a>
        </div>
      </div>
    </footer>
  )
}