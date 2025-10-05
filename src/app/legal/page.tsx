import { getSite } from "@/lib/content"
import { LegalClient } from "./legal-client"

export default function LegalPage() {
  const site = getSite()
  
  return <LegalClient legal={site.legal} />
}