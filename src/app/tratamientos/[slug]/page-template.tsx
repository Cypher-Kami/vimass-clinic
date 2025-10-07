import { notFound } from "next/navigation"
import { TREATMENT_BY_SLUG } from "@/data/treatments"

export function generateStaticParams() {
  return Array.from(TREATMENT_BY_SLUG.keys()).map(slug => ({ slug }))
}

export default function TratamientoPage({ params }: { params: { slug: string } }) {
  const item = TREATMENT_BY_SLUG.get(params.slug)
  if (!item) return notFound()

  return (
    <div className="container py-14 space-y-8">
      <h1 className="font-title text-4xl md:text-5xl capitalize">
        {item.slug.replace(/-/g, " ")}
      </h1>

      {/* Bloques placeholder (sustituye con tu contenido real o JSON por tratamiento) */}
      <p className="opacity-80 max-w-2xl">
        Descripción breve del tratamiento (40–60 palabras).
      </p>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-5 bg-white/70">
          <h2 className="font-title text-2xl mb-2">Indicaciones</h2>
          <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
            <li>Indicación 1</li>
            <li>Indicación 2</li>
            <li>Indicación 3</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-5 bg-white/70">
          <h2 className="font-title text-2xl mb-2">Recuperación</h2>
          <p className="text-sm opacity-80">
            Información sobre el proceso de recuperación del tratamiento.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-title text-2xl mb-2">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border p-5 bg-white/70">
            <div className="font-medium mb-1">¿Duele?</div>
            <p className="opacity-80 text-sm">
              Información sobre el nivel de molestias del tratamiento.
            </p>
          </div>
          <div className="rounded-2xl border p-5 bg-white/70">
            <div className="font-medium mb-1">¿Cuánto dura?</div>
            <p className="opacity-80 text-sm">
              Duración aproximada del procedimiento.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}