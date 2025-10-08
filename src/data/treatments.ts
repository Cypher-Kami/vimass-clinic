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
    id: "rostro_contorno",
    titleKey: "home.treatmentGroups.rostroContorno",
    items: [
      { slug: "labios",               labelKey: "home.treatments.labios",             href: "/tratamientos/labios" },
      { slug: "acido-hialuronico",    labelKey: "home.treatments.acidoHialuronico",    href: "/tratamientos/acido-hialuronico" },
      { slug: "neuromodulador",       labelKey: "home.treatments.neuromodulador",     href: "/tratamientos/neuromodulador" },
      { slug: "hilos-tensores",       labelKey: "home.treatments.hilosTensores",      href: "/tratamientos/hilos-tensores" },
      { slug: "hilos-pdo",            labelKey: "home.treatments.hilosPdo",           href: "/tratamientos/hilos-pdo" },
    ]
  },
  {
    id: "calidad_piel",
    titleKey: "home.treatmentGroups.calidadPiel",
    items: [
      { slug: "peeling",              labelKey: "home.treatments.peeling",            href: "/tratamientos/peeling" },
      { slug: "higiene-facial",       labelKey: "home.treatments.higieneFacial",      href: "/tratamientos/higiene-facial" },
      { slug: "hidratacion-profunda", labelKey: "home.treatments.hidratacionProfunda", href: "/tratamientos/hidratacion-profunda" },
      { slug: "microneedling",        labelKey: "home.treatments.microneedling",      href: "/tratamientos/microneedling" },
      { slug: "mesoterapia",          labelKey: "home.treatments.mesoterapia",        href: "/tratamientos/mesoterapia" },
      { slug: "vitaminas-nctf",       labelKey: "home.treatments.vitaminasNctf",      href: "/tratamientos/vitaminas-nctf" },
    ]
  },
  {
    id: "bioestimulacion",
    titleKey: "home.treatmentGroups.bioestimulacion",
    items: [
      { slug: "bioestimuladores",     labelKey: "home.treatments.bioestimuladores",   href: "/tratamientos/bioestimuladores" },
      { slug: "polinucleotidos",      labelKey: "home.treatments.polinucleotidos",    href: "/tratamientos/polinucleotidos" },
      { slug: "prp",                  labelKey: "home.treatments.prp",                href: "/tratamientos/prp" },
      { slug: "exosomos",             labelKey: "home.treatments.exosomos",           href: "/tratamientos/exosomos" },
    ]
  },
  {
    id: "tecnologia",
    titleKey: "home.treatmentGroups.tecnologia",
    items: [
      { slug: "harmony-laser",        labelKey: "home.treatments.harmonyLaser",       href: "/tratamientos/harmony-laser" },
      { slug: "radiofrecuencia",      labelKey: "home.treatments.radiofrecuencia",    href: "/tratamientos/radiofrecuencia" },
      { slug: "ultrasonido",          labelKey: "home.treatments.ultrasonido",        href: "/tratamientos/ultrasonido" },
      { slug: "terapia-led",          labelKey: "home.treatments.terapiaLed",         href: "/tratamientos/terapia-led" },
      { slug: "ondas-choque",         labelKey: "home.treatments.ondasChoque",        href: "/tratamientos/ondas-choque" },
      { slug: "presoterapia",         labelKey: "home.treatments.presoterapia",       href: "/tratamientos/presoterapia" },
    ]
  },
  {
    id: "corporal_vascular",
    titleKey: "home.treatmentGroups.corporalVascular",
    items: [
      { slug: "carboxiterapia",       labelKey: "home.treatments.carboxiterapia",     href: "/tratamientos/carboxiterapia" },
      { slug: "escleroterapia",       labelKey: "home.treatments.escleroterapia",     href: "/tratamientos/escleroterapia" },
      { slug: "bioimpedancia",        labelKey: "home.treatments.bioimpedancia",      href: "/tratamientos/bioimpedancia" },
    ]
  },
  {
    id: "medicina_integrativa",
    titleKey: "home.treatmentGroups.medicinaIntegrativa",
    items: [
      { slug: "antiaging",            labelKey: "home.treatments.antiaging",          href: "/tratamientos/antiaging" },
      { slug: "medicina-integrativa", labelKey: "home.treatments.medicinaIntegrativa", href: "/tratamientos/medicina-integrativa" },
      { slug: "medicina-funcional",   labelKey: "home.treatments.medicinaFuncional",  href: "/tratamientos/medicina-funcional" },
    ]
  }
]

// utilidades
export const ALL_TREATMENTS: Treatment[] =
  TREATMENT_GROUPS.flatMap(g => g.items)

export const TREATMENT_BY_SLUG = new Map(
  ALL_TREATMENTS.map(t => [t.slug, t])
)