import { getSite } from "@/lib/content"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"

export default function LegalPage() {
  const site = getSite()
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container py-14 space-y-12">
          <section>
            <h1 className="font-title text-4xl md:text-5xl mb-4">Privacidad</h1>
            <p className="opacity-80 whitespace-pre-line">{site.legal.privacidad}</p>
          </section>
          <section>
            <h2 className="font-title text-3xl mb-4">Cookies</h2>
            <p className="opacity-80 whitespace-pre-line">{site.legal.cookies}</p>
          </section>
        </div>
      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}