import { Star } from "lucide-react"
import type { Review } from "@/lib/types"

export function Reviews({ items }: { items: Review[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((r, i) => (
        <div key={i} className="rounded-2xl border border-border p-6 bg-card shadow-soft hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: r.rating }).map((_, starIndex) => (
              <Star key={starIndex} size={16} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="mb-4 text-muted-foreground leading-relaxed">"{r.texto}"</p>
          <div className="text-sm font-medium text-foreground">— {r.nombre}</div>
        </div>
      ))}
    </div>
  )
}