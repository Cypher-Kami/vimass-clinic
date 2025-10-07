export type Treatment = {
  slug: string
  labelKey: string   
  href: string      
}

export type TreatmentGroup = {
  id: string
  titleKey: string   
  items: Treatment[]
}

export const TREATMENT_GROUPS: TreatmentGroup[] = [
  {
    id: "inyectables",
    titleKey: "home.treatmentGroups.inyectables",
    items: [
      { slug: "acido-hialuronico",  labelKey: "home.treatments.acidoHialuronico",  href: "/tratamientos/acido-hialuronico" },
      { slug: "neuromodulador",     labelKey: "home.treatments.neuromodulador",   href: "/tratamientos/neuromodulador" },
      { slug: "bioestimuladores",   labelKey: "home.treatments.bioestimuladores", href: "/tratamientos/bioestimuladores" },
      { slug: "polinucleotidos",    labelKey: "home.treatments.polinucleotidos",  href: "/tratamientos/polinucleotidos" },
      { slug: "prp",                labelKey: "home.treatments.prp",              href: "/tratamientos/prp" },
      { slug: "vitaminas-nctf",     labelKey: "home.treatments.vitaminasNctf",    href: "/tratamientos/vitaminas-nctf" },
      { slug: "exosomos",           labelKey: "home.treatments.exosomos",         href: "/tratamientos/exosomos" },
      { slug: "labios",             labelKey: "home.treatments.labios",           href: "/tratamientos/labios" },
    ]
  },
  {
    id: "aparatologia",
    titleKey: "home.treatmentGroups.aparatologia",
    items: [
      { slug: "harmony-laser",       labelKey: "home.treatments.harmonyLaser",       href: "/tratamientos/harmony-laser" },
      { slug: "radiofrecuencia",     labelKey: "home.treatments.radiofrecuencia",    href: "/tratamientos/radiofrecuencia" },
      { slug: "ultrasonido",         labelKey: "home.treatments.ultrasonido",        href: "/tratamientos/ultrasonido" },
      { slug: "terapia-led",         labelKey: "home.treatments.terapiaLed",         href: "/tratamientos/terapia-led" },
      { slug: "ondas-choque",        labelKey: "home.treatments.ondasChoque",        href: "/tratamientos/ondas-choque" },
      { slug: "presoterapia",        labelKey: "home.treatments.presoterapia",       href: "/tratamientos/presoterapia" },
    ]
  },
  {
    id: "facial_dermo",
    titleKey: "home.treatmentGroups.facialDermo",
    items: [
      { slug: "peeling",              labelKey: "home.treatments.peeling",              href: "/tratamientos/peeling" },
      { slug: "higiene-facial",       labelKey: "home.treatments.higieneFacial",        href: "/tratamientos/higiene-facial" },
      { slug: "hidratacion-profunda", labelKey: "home.treatments.hidratacionProfunda",  href: "/tratamientos/hidratacion-profunda" },
      { slug: "microneedling",        labelKey: "home.treatments.microneedling",        href: "/tratamientos/microneedling" },
      { slug: "mesoterapia",          labelKey: "home.treatments.mesoterapia",          href: "/tratamientos/mesoterapia" },
      { slug: "hilos-pdo",            labelKey: "home.treatments.hilosPdo",             href: "/tratamientos/hilos-pdo" },
      { slug: "hilos-tensores",       labelKey: "home.treatments.hilosTensores",        href: "/tratamientos/hilos-tensores" },
      { slug: "antiaging",            labelKey: "home.treatments.antiaging",            href: "/tratamientos/antiaging" },
    ]
  },
  {
    id: "vascular_metabolico",
    titleKey: "home.treatmentGroups.vascularMetabolico",
    items: [
      { slug: "carboxiterapia",       labelKey: "home.treatments.carboxiterapia",       href: "/tratamientos/carboxiterapia" },
      { slug: "escleroterapia",       labelKey: "home.treatments.escleroterapia",       href: "/tratamientos/escleroterapia" },
      { slug: "bioimpedancia",        labelKey: "home.treatments.bioimpedancia",        href: "/tratamientos/bioimpedancia" },
    ]
  },
  {
    id: "integrativa",
    titleKey: "home.treatmentGroups.integrativa",
    items: [
      { slug: "medicina-funcional",   labelKey: "home.treatments.medicinaFuncional",    href: "/tratamientos/medicina-funcional" },
      { slug: "medicina-integrativa", labelKey: "home.treatments.medicinaIntegrativa",  href: "/tratamientos/medicina-integrativa" },
    ]
  }
]

// utilidades
export const ALL_TREATMENTS: Treatment[] =
  TREATMENT_GROUPS.flatMap(g => g.items)

export const TREATMENT_BY_SLUG = new Map(
  ALL_TREATMENTS.map(t => [t.slug, t])
)