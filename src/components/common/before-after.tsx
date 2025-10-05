"use client"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [ref] = useEmblaCarousel({ loop: false, dragFree: true })
  return (
    <div className="overflow-hidden rounded-2xl" ref={ref}>
      <div className="flex">
        {[before, after].map((src, i) => (
          <div className="relative flex-[0_0_100%] aspect-[4/3]" key={i}>
            <Image src={src} alt={i===0?"Antes":"Después"} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}