"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"

const treatmentLinks = [
  { href: "/tratamientos/botox", label: "Botox" },
  { href: "/tratamientos/fillers", label: "Rellenos Dérmicos" },
  { href: "/tratamientos/hilos", label: "Hilos Tensores" },
  { href: "/tratamientos/laser", label: "Tratamientos Láser" },
  { href: "/tratamientos/peeling", label: "Peeling Químico" },
  { href: "/tratamientos/plasma", label: "Plasma Rico en Plaquetas" },
]

export function MainNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-title text-xl text-foreground hover:text-accent transition-all duration-300 transform hover:scale-105">
          Clínica
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`relative transition-all duration-300 group ${
            pathname === '/' ? 'text-accent' : 'text-foreground hover:text-accent'
          }`}>
            <span>Inicio</span>
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
              <span>Tratamientos</span>
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
            <span>Equipo</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
              pathname === '/equipo' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link href="/resultados" className={`relative transition-all duration-300 group ${
            pathname === '/resultados' ? 'text-accent' : 'text-foreground hover:text-accent'
          }`}>
            <span>Resultados</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
              pathname === '/resultados' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          <Link href="/contacto" className={`relative transition-all duration-300 group ${
            pathname === '/contacto' ? 'text-accent' : 'text-foreground hover:text-accent'
          }`}>
            <span>Contacto</span>
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
              pathname === '/contacto' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
          
          <Button asChild className="rounded-2xl bg-foreground text-background hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link href="/contacto">Reservar</Link>
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
                  Inicio
                </Link>
                
                {/* Tratamientos en móvil */}
                <div className="space-y-2">
                  <span className="text-foreground font-medium">Tratamientos</span>
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
                  Equipo
                </Link>
                <Link href="/resultados" className="text-foreground hover:text-accent transition-all duration-300 py-2">
                  Resultados
                </Link>
                <Link href="/contacto" className="text-foreground hover:text-accent transition-all duration-300 py-2">
                  Contacto
                </Link>
                
                <Button asChild className="rounded-2xl mt-2 bg-foreground text-background hover:bg-accent transition-all duration-300">
                  <Link href="/contacto">Reservar</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}