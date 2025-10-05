'use client'

import { Section } from "@/components/common/section"
import Image from "next/image"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"

export function ResultadosClient() {
  const { t } = useLanguage()
  
  const items = [
    { before: "/images/resultados/1-before.jpg", after: "/images/resultados/1-after.jpg" },
    { before: "/images/resultados/2-before.jpg", after: "/images/resultados/2-after.jpg" }
  ]
  
  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container pt-28 pb-12">
          <div className="max-w-4xl">
            <div className="relative mb-6">
              <h1 className="font-title text-4xl md:text-6xl relative z-10">{t('pages.resultados.title')}</h1>
              {/* Decorative underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-16 mt-2"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('pages.resultados.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="container pt-20">
          <Section>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('pages.resultados.description')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((x,i)=>(
              <div key={i} className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative">
                  <Image src={x.before} alt={t('pages.resultados.beforeLabel')} width={600} height={600} className="w-full h-auto"/>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {t('pages.resultados.beforeLabel')}
                  </div>
                </div>
                <div className="relative">
                  <Image src={x.after} alt={t('pages.resultados.afterLabel')} width={600} height={600} className="w-full h-auto"/>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {t('pages.resultados.afterLabel')}
                  </div>
                </div>
              </div>
            ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground">
                {t('pages.resultados.resultInfo')}
              </p>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
      <CTAFloat />
      <WhatsAppFloat />
      <Toaster />
    </div>
  )
}