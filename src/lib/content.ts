import fs from "node:fs"
import path from "node:path"
import type { SiteContent, Tratamiento } from "./types"

const base = path.join(process.cwd(), "src", "content")

export function getSite(): SiteContent {
  const p = path.join(base, "site.json")
  return JSON.parse(fs.readFileSync(p, "utf-8"))
}

export function getTratamientoSlugs(): string[] {
  const dir = path.join(base, "tratamientos")
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(".json"))
    .map(f => f.replace(/\.json$/, ""))
}

export function getTratamiento(slug: string): Tratamiento {
  const p = path.join(base, "tratamientos", `${slug}.json`)
  return JSON.parse(fs.readFileSync(p, "utf-8"))
}

export function getTratamientos(slugs?: string[]): Tratamiento[] {
  const list = slugs ?? getTratamientoSlugs()
  return list.map(getTratamiento)
}