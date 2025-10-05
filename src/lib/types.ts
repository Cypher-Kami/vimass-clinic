export type Review = { nombre: string; texto: string; rating: number }
export type Tratamiento = {
  slug: string
  titulo: string
  extracto: string
  bullets: string[]
  faq: { q: string; a: string }[]
  imagenes: { hero: string; before?: string; after?: string }
}
export type SiteContent = {
  clinica: { nombre: string; telefono: string; whatsapp: string; email: string; direccion: string; horario: string }
  hero: { headline: string; subline: string; cta: string; tratamiento_estrella_slug: string }
  tratamientos_destacados: string[]
  reseñas: Review[]
  sedes: { ciudad: string; direccion: string; maps: string }[]
  legal: { privacidad: string; cookies: string }
}