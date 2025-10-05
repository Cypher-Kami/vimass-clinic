import { notFound } from "next/navigation"
import Image from "next/image"
import { getTratamiento, getTratamientoSlugs } from "@/lib/content"
import { Section } from "@/components/common/section"
import { BeforeAfter } from "@/components/common/before-after"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { CTAFloat } from "@/components/layout/cta-float"
import { Toaster } from "sonner"
import { titleFont, bodyFont } from "@/app/fonts"

export function generateStaticParams() {
  return getTratamientoSlugs().map(slug => ({ slug }))
}

export default function TratamientoPage({ params }: { params: { slug: string } }) {
  const data = getTratamiento(params.slug)
  if (!data) return notFound()

  return (
    <div className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
      <MainNav />
      <main className="min-h-screen">
        <div className="container py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-title text-4xl md:text-5xl">{data.titulo}</h1>
            <p className="mt-4 opacity-80">{data.extracto}</p>
            <ul className="mt-6 space-y-2 list-disc list-inside">{data.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
            <Image src={data.imagenes.hero} alt={data.titulo} fill className="object-cover" />
          </div>
        </div>
        {(data.imagenes.before && data.imagenes.after) && (
          <Section title="Antes y después">
            <BeforeAfter before={data.imagenes.before!} after={data.imagenes.after!} />
          </Section>
        )}
        <Section title="Preguntas frecuentes">
          <div className="grid md:grid-cols-2 gap-6">
            {data.faq.map((f,i)=>(
              <div key={i} className="rounded-2xl border p-5 bg-white/70">
                <div className="font-medium mb-1">{f.q}</div>
                <p className="opacity-80">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
      <CTAFloat />
      <Toaster />
    </div>
  )
}