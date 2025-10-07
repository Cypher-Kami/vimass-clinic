"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { LanguageToggle } from "@/components/common/language-toggle"
import { ImagePaths } from "@/lib/image-paths"

export function MainNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const treatmentLinks = [
    { href: "/tratamientos/acido-hialuronico", label: t('home.treatments.acidoHialuronico') },
    { href: "/tratamientos/antiaging", label: t('home.treatments.antiaging') },
    { href: "/tratamientos/bioestimuladores", label: t('home.treatments.bioestimuladores') },
    { href: "/tratamientos/bioimpedancia", label: t('home.treatments.bioimpedancia') },
    { href: "/tratamientos/carboxiterapia", label: t('home.treatments.carboxiterapia') },
    { href: "/tratamientos/escleroterapia", label: t('home.treatments.escleroterapia') },
    { href: "/tratamientos/exosomos", label: t('home.treatments.exosomos') },
    { href: "/tratamientos/harmony-laser", label: t('home.treatments.harmonyLaser') },
    { href: "/tratamientos/hidratacion-profunda", label: t('home.treatments.hidratacionProfunda') },
    { href: "/tratamientos/higiene-facial", label: t('home.treatments.higieneFacial') },
    { href: "/tratamientos/hilos-pdo", label: t('home.treatments.hilosPdo') },
    { href: "/tratamientos/hilos-tensores", label: t('home.treatments.hilosTensores') },
    { href: "/tratamientos/labios", label: t('home.treatments.labios') },
    { href: "/tratamientos/medicina-funcional", label: t('home.treatments.medicinaFuncional') },
    { href: "/tratamientos/medicina-integrativa", label: t('home.treatments.medicinaIntegrativa') },
    { href: "/tratamientos/mesoterapia", label: t('home.treatments.mesoterapia') },
    { href: "/tratamientos/microneedling", label: t('home.treatments.microneedling') },
    { href: "/tratamientos/neuromodulador", label: t('home.treatments.neuromodulador') },
    { href: "/tratamientos/ondas-choque", label: t('home.treatments.ondasChoque') },
    { href: "/tratamientos/peeling", label: t('home.treatments.peeling') },
    { href: "/tratamientos/polinucleotidos", label: t('home.treatments.polinucleotidos') },
    { href: "/tratamientos/presoterapia", label: t('home.treatments.presoterapia') },
    { href: "/tratamientos/prp", label: t('home.treatments.prp') },
    { href: "/tratamientos/radiofrecuencia", label: t('home.treatments.radiofrecuencia') },
    { href: "/tratamientos/terapia-led", label: t('home.treatments.terapiaLed') },
    { href: "/tratamientos/toxina-botulinica", label: t('home.treatments.toxinaBotulinica') },
    { href: "/tratamientos/ultrasonido", label: t('home.treatments.ultrasonido') },
    { href: "/tratamientos/vitaminas-nctf", label: t('home.treatments.vitaminasNctf') }
  ]

  return (
    <nav className="fixed top-0 w-full bg-background z-50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={ImagePaths.logo.white}
            alt="VIMASS Clinic"
            width={180}
            height={72}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={`relative transition-all duration-300 group ${
            pathname === '/' ? 'text-accent' : 'text-foreground hover:text-accent'
          }`}>
            <span>{t('nav.inicio')}</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
              pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          {/* Dropdown Tratamientos */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/tratamientos"
              className={`flex items-center gap-1 transition-all duration-300 group relative ${
                pathname.startsWith('/tratamientos') ? 'text-accent' : 'text-foreground hover:text-accent'
              }`}
            >
              <span>{t('nav.tratamientos')}</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                pathname.startsWith('/tratamientos') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              <ChevronDown className={`h-4 w-4 transition-all duration-200 ${dropdownOpen ? 'rotate-180 text-accent' : ''}`} />
            </Link>
            
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-96 bg-background border border-border shadow-lg animate-in fade-in-0 zoom-in-95">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-1">
                    {treatmentLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-3 py-2 text-sm transition-all duration-200 font-semibold ${
                          pathname === link.href 
                            ? 'text-foreground bg-accent' 
                            : 'text-foreground hover:bg-accent'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/equipo" className={`relative transition-all duration-300 group ${
            pathname === '/equipo' ? 'text-accent' : 'text-foreground hover:text-accent'
          }`}>
            <span>{t('nav.equipo')}</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
              pathname === '/equipo' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link href="/resultados" className={`relative transition-all duration-300 group ${
            pathname === '/resultados' ? 'text-accent' : 'text-foreground hover:text-accent'
          }`}>
            <span>{t('nav.resultados')}</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
              pathname === '/resultados' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link href="/contacto" className={`relative transition-all duration-300 group ${
            pathname === '/contacto' ? 'text-accent' : 'text-foreground hover:text-accent'
          }`}>
            <span>{t('nav.contacto')}</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
              pathname === '/contacto' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          {/* Language Toggle */}
          <LanguageToggle />
          
          <Button asChild className="rounded-2xl bg-foreground text-background hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link href="/contacto">{t('nav.reservar')}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-xl hover:border-accent hover:text-accent transition-all duration-300">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-foreground hover:text-accent transition-all duration-300 py-2">
                  {t('nav.inicio')}
                </Link>
                
                {/* Tratamientos en móvil */}
                <div className="space-y-2">
                  <span className="text-foreground font-medium">{t('nav.tratamientos')}</span>
                  <div className="pl-4 space-y-2">
                    {treatmentLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-muted-foreground hover:text-accent transition-all duration-300 py-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/equipo" className="text-foreground hover:text-accent transition-all duration-300 py-2">
                  {t('nav.equipo')}
                </Link>
                <Link href="/resultados" className="text-foreground hover:text-accent transition-all duration-300 py-2">
                  {t('nav.resultados')}
                </Link>
                <Link href="/contacto" className="text-foreground hover:text-accent transition-all duration-300 py-2">
                  {t('nav.contacto')}
                </Link>
                
                {/* Language Toggle Mobile */}
                <div className="py-2">
                  <LanguageToggle />
                </div>
                
                <Button asChild className="rounded-2xl mt-2 bg-foreground text-background hover:bg-accent transition-all duration-300">
                  <Link href="/contacto">{t('nav.reservar')}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}