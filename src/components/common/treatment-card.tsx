import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { Tratamiento } from "@/lib/types"

export function TreatmentCard({ t }: { t: Tratamiento }) {
  return (
    <Link href={`/tratamientos/${t.slug}`}>
      <Card className="rounded-2xl overflow-hidden hover:shadow-soft transition-shadow">
        <div className="relative aspect-[4/3]">
          <Image src={t.imagenes.hero} alt={t.titulo} fill className="object-cover" />
        </div>
        <div className="p-4">
          <div className="font-title text-xl mb-1">{t.titulo}</div>
          <p className="text-sm opacity-80">{t.extracto}</p>
        </div>
      </Card>
    </Link>
  )
}