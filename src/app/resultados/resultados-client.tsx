'use client'

import { useState } from "react"
import { Section } from "@/components/common/section"
import Image from "next/image"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"
import { useLanguage } from "@/components/providers/language-provider"
import { ImagePaths } from "@/lib/image-paths"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export function ResultadosClient() {
  const { t } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  
  // Todas las imágenes de resultados (cada una ya contiene antes/después)
  const resultados = ImagePaths.resultados
  
  // Preparar imágenes para el lightbox
  const lightboxSlides = resultados.map((src) => ({ src }))
  
  // Función para abrir el lightbox en una imagen específica
  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }
  
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
            
            {/* Galería completa de resultados */}
            <div className="grid md:grid-cols-3 gap-6">
              {resultados.map((imagen, i) => (
                <div 
                  key={i} 
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <div className="relative aspect-square">
                    <Image 
                      src={imagen} 
                      alt={`${t('pages.resultados.beforeAfterLabel')} ${i + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{t('pages.resultados.beforeAfterLabel')} {i + 1}</p>
                    </div>
                    {/* Ícono de zoom */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Lightbox */}
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={lightboxSlides}
              on={{
                view: ({ index }) => setLightboxIndex(index)
              }}
              carousel={{
                finite: false,
                preload: 2
              }}
              controller={{
                closeOnBackdropClick: true,
                closeOnPullDown: true,
                closeOnPullUp: false
              }}
            />
            
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