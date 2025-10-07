"use client"

import { useEffect } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

interface AccessibleLightboxProps {
  open: boolean
  close: () => void
  index: number
  slides: { src: string }[]
  on?: {
    view?: (props: { index: number }) => void
  }
  carousel?: Record<string, unknown>
  styles?: Record<string, unknown>
  labels?: Record<string, string>
  render?: Record<string, unknown>
  controller?: Record<string, unknown>
}

export function AccessibleLightbox({ open, close, index, slides, on, ...props }: AccessibleLightboxProps) {
  useEffect(() => {
    if (open) {
      // Agregar atributos de accesibilidad al lightbox cuando se abra
      const lightboxContainer = document.querySelector('[data-yarl]')
      if (lightboxContainer) {
        lightboxContainer.setAttribute('role', 'dialog')
        lightboxContainer.setAttribute('aria-label', 'Galería de imágenes')
        lightboxContainer.setAttribute('aria-modal', 'true')
      }
    }
  }, [open])

  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      on={on}
      labels={{
        Previous: "Imagen anterior",
        Next: "Siguiente imagen",
        Close: "Cerrar galería"
      }}
      {...props}
    />
  )
}