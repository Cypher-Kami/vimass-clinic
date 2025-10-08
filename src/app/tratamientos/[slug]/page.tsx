import { notFound } from "next/navigation"
import { getTratamiento, getTratamientoSlugs } from "@/lib/content"
import { TratamientoClient } from "./tratamiento-client"

export function generateStaticParams() {
  return getTratamientoSlugs().map(slug => ({ slug }))
}

export default async function TratamientoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getTratamiento(slug)
  if (!data) return notFound()

  const url = `https://vimass-clinic.com/tratamientos/${slug}`

  return <TratamientoClient data={data} slug={slug} url={url} />
}