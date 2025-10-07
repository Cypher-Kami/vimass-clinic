export type TreatmentObjective = {
  id: string
  titleKey: string
  descriptionKey: string
  treatments: string[] // List of treatment slugs
}

export const TREATMENT_OBJECTIVES: TreatmentObjective[] = [
  {
    id: "melasma-discromias",
    titleKey: "home.objectives.melasmaDiscromias.title",
    descriptionKey: "home.objectives.melasmaDiscromias.description",
    treatments: [
      "peeling-quimico",
      "laser-harmony-dye",
      "laser-harmony-570",
      "laser-clearlift", 
      "laser-pixel",
      "prp",
      "terapia-led",
      "exosomos",
      "polinucleotidos",
      "mesoterapia-despigmentante",
      "carboxiterapia"
    ]
  },
  {
    id: "estrias",
    titleKey: "home.objectives.estrias.title", 
    descriptionKey: "home.objectives.estrias.description",
    treatments: [
      "microneedling",
      "prp",
      "bioestimuladores",
      "exosomos",
      "laser-clearlift",
      "laser-pixel", 
      "laser-harmony-dye",
      "carboxiterapia"
    ]
  },
  {
    id: "varices",
    titleKey: "home.objectives.varices.title",
    descriptionKey: "home.objectives.varices.description", 
    treatments: [
      "laser-harmony-dye",
      "laser-long-pulse",
      "presoterapia",
      "escleroterapia"
    ]
  },
  {
    id: "remodelacion-corporal",
    titleKey: "home.objectives.remodelacionCorporal.title",
    descriptionKey: "home.objectives.remodelacionCorporal.description",
    treatments: [
      "ultrasonido",
      "radiofrecuencia",
      "mesoterapia-corporal", 
      "bioestimuladores",
      "presoterapia",
      "ondas-choque"
    ]
  },
  {
    id: "lineas-expresion",
    titleKey: "home.objectives.lineasExpresion.title",
    descriptionKey: "home.objectives.lineasExpresion.description",
    treatments: [
      "neuromodulador",
      "hilos-pdo",
      "acido-hialuronico",
      "prp", 
      "microneedling"
    ]
  },
  {
    id: "armonia-facial",
    titleKey: "home.objectives.armoniaFacial.title",
    descriptionKey: "home.objectives.armoniaFacial.description",
    treatments: [
      "acido-hialuronico",
      "hilos-tensores",
      "hilos-pdo",
      "bioestimuladores",
      "rinomodelacion",
      "puntos-anclaje",
      "hidratacion-labios",
      "marcacion-mandibular"
    ]
  },
  {
    id: "rejuvenecimiento-piel",
    titleKey: "home.objectives.rejuvenecimientoPiel.title",
    descriptionKey: "home.objectives.rejuvenecimientoPiel.description",
    treatments: [
      "laser-harmony-570",
      "laser-clearlift",
      "laser-erbium",
      "hilos-tensores",
      "hilos-pdo",
      "polinucleotidos",
      "bioestimuladores",
      "microneedling",
      "terapia-led",
      "vitaminas-nctf",
      "exosomos"
    ]
  },
  {
    id: "acne",
    titleKey: "home.objectives.acne.title",
    descriptionKey: "home.objectives.acne.description", 
    treatments: [
      "peeling-quimico",
      "laser-pixel",
      "laser-harmony-dye",
      "terapia-led",
      "microneedling",
      "exosomos"
    ]
  },
  {
    id: "rosacea-cuperosis",
    titleKey: "home.objectives.rosaceaCuperosis.title",
    descriptionKey: "home.objectives.rosaceaCuperosis.description",
    treatments: [
      "laser-harmony-dye",
      "laser-long-pulse",
      "terapia-led",
      "polinucleotidos"
    ]
  },
  {
    id: "salud-capilar",
    titleKey: "home.objectives.saludCapilar.title",
    descriptionKey: "home.objectives.saludCapilar.description",
    treatments: [
      "mesoterapia-capilar",
      "microneedling",
      "prp",
      "exosomos",
      "peptidos",
      "vitaminas-nctf",
      "carboxiterapia"
    ]
  },
  {
    id: "control-peso",
    titleKey: "home.objectives.controlPeso.title",
    descriptionKey: "home.objectives.controlPeso.description",
    treatments: [
      "programa-adelgazamiento",
      "bioimpedancia",
      "mesoterapia-corporal",
      "ondas-choque",
      "ultrasonido",
      "radiofrecuencia",
      "carboxiterapia"
    ]
  }
]