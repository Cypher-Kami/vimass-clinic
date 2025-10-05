import { getTratamientos } from "@/lib/content"
import { TreatmentCard } from "@/components/common/treatment-card"
import { Section } from "@/components/common/section"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"

export default function TratamientosPage() {
  const t = getTratamientos()
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <Section title="Tratamientos">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.map(item => <TreatmentCard key={item.slug} t={item} />)}
          </div>
        </Section>
      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}