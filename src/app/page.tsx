import { getSite, getTratamientos, getTratamiento } from "@/lib/content"
import { HomeClient } from "./home-client"
import { titleFont, bodyFont } from "./fonts"

export default function HomePage() {
  const site = getSite()
  const destacados = getTratamientos(site.tratamientos_destacados)
  const estrella = getTratamiento(site.hero.tratamiento_estrella_slug)

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <HomeClient 
        clinica={site.clinica}
        reseñas={site.reseñas}
        destacados={destacados}
        estrella={estrella}
      />
    </div>
  )
}