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
    { href: "/tratamientos/botox", label: t('home.treatments.botox') },
    { href: "/tratamientos/fillers", label: t('home.treatments.fillers') },
    { href: "/tratamientos/hilos", label: t('home.treatments.threads') },
    { href: "/tratamientos/laser", label: t('home.treatments.laser') },
    { href: "/tratamientos/peeling", label: t('home.treatments.peeling') },
    { href: "/tratamientos/plasma", label: t('home.treatments.plasma') },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
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
              <div className="absolute top-full w-56 bg-background border border-border shadow-lg animate-in fade-in-0 zoom-in-95">
                <div className="p-2">
                  {treatmentLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-foreground hover:text-accent transition-all duration-200 rounded-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
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