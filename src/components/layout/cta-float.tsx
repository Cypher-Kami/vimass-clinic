"use client"
import Link from "next/link"

export function CTAFloat() {
  return (
    <div className="fixed bottom-4 left-0 right-0 md:hidden z-50">
      <div className="container">
        <Link href="/contacto" className="block text-center rounded-full py-3 shadow-soft bg-foreground text-background">
          Reservar valoración
        </Link>
      </div>
    </div>
  )
}