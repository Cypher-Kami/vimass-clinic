import { Section } from "@/components/common/section"
import Image from "next/image"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"

export default function ResultadosPage() {
  const items = [
    { before: "/images/resultados/1-before.jpg", after: "/images/resultados/1-after.jpg" },
    { before: "/images/resultados/2-before.jpg", after: "/images/resultados/2-after.jpg" }
  ]
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container pt-20">
          <Section title="Resultados">
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((x,i)=>(
              <div key={i} className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
                <Image src={x.before} alt="Antes" width={600} height={600} className="w-full h-auto"/>
                <Image src={x.after} alt="Después" width={600} height={600} className="w-full h-auto"/>
              </div>
            ))}
          </div>
        </Section>
        </div>
      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}