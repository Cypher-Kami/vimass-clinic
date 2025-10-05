import { getTratamientos } from "@/lib/content"
import { TratamientosClient } from "./tratamientos-client"

export default function TratamientosPage() {
  const treatments = getTratamientos()
  
  return <TratamientosClient treatments={treatments} />
}