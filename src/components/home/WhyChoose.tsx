"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/providers/language-provider"

// SVGs personalizados para la clínica
function IconInnovacion(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 104 135" fill="none" aria-hidden {...props}>
      <path d="M102.966 96.4772L93.848 47.3637C92.86 42.0414 88.211 38.1788 82.799 38.1788H71.863c-1.235 0-2.246 1.01-2.246 2.246v8.982c0 1.235 1.01 2.246 2.246 2.246h4.491v38.177c0 3.705-3.189 6.737-7.119 6.737H20.212c-1.235 0-2.246 1.01-2.246 2.246v22.457c0 1.235 1.01 2.246 2.246 2.246H77.926c7.95 0 15.271-3.323 20.122-9.095 4.312-5.142 6.064-11.519 4.918-17.942Z" fill="#E1C9BC"/>
      <path d="M46.104 66.138 29.217 59.985a2.25 2.25 0 0 0-2.875 1.347l-3.076 8.444a2.25 2.25 0 0 0 1.347 2.875l16.888 6.153a2.25 2.25 0 0 0 2.874-1.347l3.077-8.444a2.25 2.25 0 0 0-1.328-2.875Z" fill="#DDBBB1"/>
      <path d="M66.787 23.2c-.763-1.64-2.11-2.875-3.794-3.481L46.104 13.566c-1.684-.606-3.526-.538-5.143.225-1.64.763-2.875 2.11-3.481 3.794L23.647 55.561c-1.258 3.481.538 7.366 4.019 8.524l16.888 6.153c4.019 1.62 8.457-.72 9.445-3.906l13.833-37.975c.607-1.684.539-3.526-.944-5.158Z" fill="#613129" fillOpacity=".8"/>
      <circle cx="58.388" cy="44.916" r="15.72" fill="#F1F2F2"/>
      <circle cx="58.388" cy="44.916" r="6.737" fill="#DDBBB1"/>
    </svg>
  )
}

function IconExperiencia(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 134 117" fill="none" aria-hidden {...props}>
      <rect x="0" y="22.333" width="134" height="93.8" rx="11.167" fill="#E1C9BC"/>
      <rect x="37.967" y="40.2" width="58.067" height="58.067" rx="29.034" fill="#613129" fillOpacity=".8"/>
      <path d="M78.167 64.767H71.467V58.067a4.467 4.467 0 0 0-8.934 0v6.7h-6.7a4.467 4.467 0 1 0 0 8.934h6.7v6.7a4.467 4.467 0 0 0 8.934 0v-6.7h6.7a4.467 4.467 0 0 0 0-8.934Z" fill="#fff"/>
      <rect x="51.367" width="34.733" height="26.8" rx="13.4" fill="#613129" fillOpacity=".8"/>
      <rect x="11.167" y="13.4" width="19.1" height="13.4" rx="4.467" fill="#E1C9BC"/>
      <rect x="102.733" y="13.4" width="19.1" height="13.4" rx="4.467" fill="#E1C9BC"/>
    </svg>
  )
}

function IconPersonalizacion(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden {...props}>
      <circle cx="60" cy="35" r="20" fill="#E1C9BC"/>
      <path d="M60 60c-16.569 0-30 13.431-30 30v20c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V90c0-16.569-13.431-30-30-30Z" fill="#613129" fillOpacity=".8"/>
      <circle cx="95" cy="25" r="8" fill="#DDBBB1"/>
      <circle cx="25" cy="25" r="8" fill="#DDBBB1"/>
      <path d="M95 35v15c0 2.761-2.239 5-5 5s-5-2.239-5-5V35h10ZM25 35v15c0 2.761 2.239 5 5 5s5-2.239 5-5V35H25Z" fill="#DDBBB1"/>
    </svg>
  )
}

function IconRecuperacion(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 135 135" fill="none" aria-hidden {...props}>
      <rect x="0" y="0" width="94" height="121" rx="13.4" fill="#613129" fillOpacity=".8"/>
      <rect x="8.947" y="8.983" width="76.05" height="103.302" rx="4.527" fill="#fff"/>
      <rect x="31.315" width="31.314" height="20.211" rx="10" fill="#DDBBB1"/>
      <path d="M33.55 40.422h26.84v26.84H33.55z" fill="#E1C9BC"/>
      <rect x="20.131" y="69.617" width="13.42" height="11.229" rx="3" fill="#613129" fillOpacity=".8"/>
      <rect x="20.131" y="89.828" width="13.42" height="11.229" rx="3" fill="#613129" fillOpacity=".8"/>
      <path d="M127.808 73.726c-8.5-8.467-22.324-8.467-30.823 0-8.5-8.467-22.324-8.467-30.823 0-8.115 8.12-8.59 21.05-.887 29.32l30.964 29.045 30.964-29.045c7.703-8.27 7.227-21.2-.395-29.32Z" fill="#E1C9BC"/>
      <path d="m96.18 107.794-7.247-16.956-4.374 5.883h-6.71" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m100.9 91.086 4.186 5.479h9" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

type Item = {
  title: string
  titleEn: string
  desc: string
  descEn: string
  icon?: React.ReactNode
  href?: string
}

export default function WhyChoose({
  title = "¿Por qué elegir VIMASS Clinic?",
  titleEn = "Why choose VIMASS Clinic?",
  className
}: { 
  title?: string
  titleEn?: string
  items?: Item[]
  className?: string 
}) {
  const { language } = useLanguage()
  const isSpanish = language === 'es'

  const items: Item[] = [
    { 
      title: "Innovación", 
      titleEn: "Innovation",
      desc: "Tecnología estética y médica de última generación.", 
      descEn: "State-of-the-art aesthetic and medical technology.",
      icon: <IconInnovacion className="h-16 w-16" /> 
    },
    { 
      title: "Experiencia", 
      titleEn: "Experience",
      desc: "Años de práctica y resultados consistentes.", 
      descEn: "Years of practice and consistent results.",
      icon: <IconExperiencia className="h-16 w-16" /> 
    },
    { 
      title: "Atención personalizada", 
      titleEn: "Personalized care",
      desc: "Equipo multidisciplinar contigo en cada etapa.", 
      descEn: "Multidisciplinary team with you at every stage.",
      icon: <IconPersonalizacion className="h-16 w-16" /> 
    },
    { 
      title: "Recuperación rápida", 
      titleEn: "Fast recovery",
      desc: "Protocolos poco invasivos y confort del paciente.", 
      descEn: "Minimally invasive protocols and patient comfort.",
      icon: <IconRecuperacion className="h-16 w-16" /> 
    },
  ]

  return (
    <section className={cn("container py-12", className)}>
      <h2 className="font-title text-3xl md:text-4xl mb-8 text-center">
        {isSpanish ? title : titleEn}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((it, i) => (
          <article
            key={i}
            className="group rounded-2xl border bg-white/80 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-2xl bg-accent/15">
              {/* icono */}
              <div className="text-accent">{it.icon}</div>
            </div>
            <h3 className="font-title text-xl mb-2">
              {isSpanish ? it.title : it.titleEn}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isSpanish ? it.desc : it.descEn}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}