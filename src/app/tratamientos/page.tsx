import { getSite, getTratamientos } from "@/lib/content"
import { TratamientosClient } from "./tratamientos-client"

export default function TratamientosPage() {
  const site = getSite()
  const treatments = getTratamientos()
  
  return <TratamientosClient clinica={site.clinica} treatments={treatments} />
}