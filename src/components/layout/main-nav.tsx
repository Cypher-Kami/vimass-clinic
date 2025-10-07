"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Menu, Syringe, Zap, Sparkles, Heart, Leaf } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { LanguageToggle } from "@/components/common/language-toggle"
import { ImagePaths } from "@/lib/image-paths"
import { TREATMENT_GROUPS } from "@/data/treatments"

export function MainNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  // Iconos para cada categoría de tratamientos
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'inyectables':
        return <Syringe className="w-4 h-4" />
      case 'aparatologia':
        return <Zap className="w-4 h-4" />
      case 'facial_dermo':
        return <Sparkles className="w-4 h-4" />
      case 'vascular_metabolico':
        return <Heart className="w-4 h-4" />
      case 'integrativa':
        return <Leaf className="w-4 h-4" />
      default:
        return null
    }
  }

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
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
              onClick={() => setDropdownOpen(v => !v)}
              className={`flex items-center gap-1 transition-all duration-300 group relative ${
                pathname.startsWith('/tratamientos') ? 'text-accent' : 'text-foreground hover:text-accent'
              }`}
            >
              <span>{t('nav.tratamientos')}</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                pathname.startsWith('/tratamientos') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              <ChevronDown className={`h-4 w-4 transition-all duration-200 ${dropdownOpen ? 'rotate-180 text-accent' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div
                role="menu"
                className="absolute top-full left-0 w-[720px] bg-background border border-border shadow-lg animate-in fade-in-0 zoom-in-95 p-4"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {TREATMENT_GROUPS.map(group => (
                    <div key={group.id}>
                      <div className="flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wide mb-3 pb-1 border-b border-accent/20">
                        {getCategoryIcon(group.id)}
                        {t(group.titleKey)}
                      </div>
                      <ul className="space-y-1">
                        {group.items.map(item => (
                          <li key={item.slug}>
                            <Link
                              href={item.href}
                              className={`block px-3 py-2 text-sm transition-colors font-semibold ${
                                pathname === item.href
                                  ? 'text-foreground bg-accent'
                                  : 'text-foreground hover:bg-accent'
                              }`}
                            >
                              {t(item.labelKey)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="pt-3 text-right">
                  <Link href="/tratamientos" className="text-sm underline underline-offset-4 hover:text-accent">
                    {t('treatments.viewAll')}
                  </Link>
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
                  <div className="pl-4 space-y-3">
                    {TREATMENT_GROUPS.map(group => (
                      <div key={group.id} className="space-y-1">
                        <div className="flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wide">
                          {getCategoryIcon(group.id)}
                          {t(group.titleKey)}
                        </div>
                        <div className="pl-2 space-y-1">
                          {group.items.map(item => (
                            <Link
                              key={item.slug}
                              href={item.href}
                              className="block text-sm text-muted-foreground hover:text-accent transition-all duration-300 py-1"
                            >
                              {t(item.labelKey)}
                            </Link>
                          ))}
                        </div>
                      </div>
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