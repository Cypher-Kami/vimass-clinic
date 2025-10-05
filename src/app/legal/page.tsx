'use client'

import { getSite } from "@/lib/content"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"

export default function LegalPage() {
  const { t } = useLanguage()
  const site = getSite()
  
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container pt-28 pb-14 space-y-12">
          <div className="max-w-4xl">
            <div className="relative mb-6">
              <h1 className="font-title text-4xl md:text-6xl relative z-10">{t('pages.legal.title')}</h1>
              {/* Decorative underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-16 mt-2"></div>
            </div>
          </div>
          
          <section className="max-w-4xl">
            <h2 className="font-title text-3xl mb-4">{t('pages.legal.privacyTitle')}</h2>
            <p className="opacity-80 whitespace-pre-line">{site.legal.privacidad}</p>
          </section>
          
          <section className="max-w-4xl">
            <h2 className="font-title text-3xl mb-4">{t('pages.legal.cookiesTitle')}</h2>
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