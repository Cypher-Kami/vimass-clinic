"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { useState, useRef, useCallback } from "react"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/equipo", label: "Equipo" },
  { href: "/resultados", label: "Resultados" },
  { href: "/contacto", label: "Contacto" },
]

const treatmentLinks = [
  { href: "/tratamientos", label: "Todos los tratamientos" },
  { href: "/tratamientos/labios", label: "Labios" },
  { href: "/tratamientos/toxina-botulinica", label: "Toxina Botulínica" },
  { href: "/tratamientos/acido-hialuronico", label: "Ácido Hialurónico" },
]

export function MainNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setDropdownOpen(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 150) // 150ms delay antes de cerrar
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-title text-xl text-foreground">Clínica</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-foreground hover:opacity-80 transition-opacity">Inicio</Link>
          
          {/* Dropdown de Tratamientos con hover mejorado */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/tratamientos"
              className="flex items-center gap-1 text-foreground hover:opacity-80 transition-opacity py-2"
            >
              Tratamientos
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </Link>
            
            {dropdownOpen && (
              <div className="absolute top-full w-56 bg-background border border-border shadow-lg animate-in fade-in-0 zoom-in-95">
                <div className="p-2">
                  {treatmentLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/equipo" className="text-foreground hover:opacity-80 transition-opacity">Equipo</Link>
          <Link href="/resultados" className="text-foreground hover:opacity-80 transition-opacity">Resultados</Link>
          <Link href="/contacto" className="text-foreground hover:opacity-80 transition-opacity">Contacto</Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="rounded-2xl bg-foreground text-background hover:opacity-90 transition-opacity">
            <Link href="/contacto">Reservar</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-xl">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-foreground hover:opacity-80 transition-opacity">
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
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/equipo" className="text-foreground hover:opacity-80 transition-opacity">
                  Equipo
                </Link>
                <Link href="/resultados" className="text-foreground hover:opacity-80 transition-opacity">
                  Resultados
                </Link>
                <Link href="/contacto" className="text-foreground hover:opacity-80 transition-opacity">
                  Contacto
                </Link>
                
                <Button asChild className="rounded-2xl mt-2">
                  <Link href="/contacto">Reservar</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}