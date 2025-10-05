import Image from "next/image"
import { Section } from "@/components/common/section"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"

export default function EquipoPage() {
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container py-14">
          <h1 className="font-title text-4xl md:text-5xl">Equipo</h1>
          <p className="mt-3 opacity-80">Experiencia y ética clínica.</p>
        </div>
        <Section>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
              <Image src="/images/equipo/doctora.jpg" alt="Doctora" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h2 className="font-title text-3xl">Dra. Nombre Apellido</h2>
              <p>Breve bio y filosofía (≤60 palabras).</p>
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