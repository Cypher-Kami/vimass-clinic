import { getSite, getTratamientos } from "@/lib/content"
import { TratamientosClient } from "./tratamientos-client"
import { TREATMENT_GROUPS } from "@/data/treatments"

export default function TratamientosPage() {
  const site = getSite()
  const treatments = getTratamientos()
  
  return <TratamientosClient clinica={site.clinica} treatments={treatments} treatmentGroups={TREATMENT_GROUPS} />
}