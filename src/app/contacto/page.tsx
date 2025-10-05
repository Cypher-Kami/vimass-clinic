import { getSite } from "@/lib/content"
import { ContactoClient } from "./contacto-client"

export default function ContactoPage() {
  const site = getSite()
  
  return <ContactoClient clinica={site.clinica} />
}