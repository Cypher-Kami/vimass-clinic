"use client"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"

export function CTAFloat() {
  const { t } = useLanguage()
  
  return (
    <div className="fixed bottom-4 left-0 right-0 md:hidden z-50">
      <div className="container">
        <Link href="/contacto" className="block text-center rounded-full py-3 shadow-soft bg-foreground text-background">
          {t('cta.reserve')}
        </Link>
      </div>
    </div>
  )
}