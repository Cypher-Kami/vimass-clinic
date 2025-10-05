"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    value: "todos",
    label: "Todos los tratamientos",
  },
  {
    value: "facial",
    label: "Tratamientos faciales",
  },
  {
    value: "labios",
    label: "Labios",
  },
  {
    value: "antienvejecimiento",
    label: "Anti-envejecimiento",
  },
]

interface TreatmentDropdownProps {
  value: string
  onValueChange: (value: string) => void
}

export function TreatmentDropdown({ value, onValueChange }: TreatmentDropdownProps) {
  const [open, setOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const selectedCategory = categories.find((category) => category.value === value)

  // Cerrar dropdown al hacer clic fuera
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={() => setOpen(!open)}
        className="w-full sm:w-[300px] justify-between rounded-2xl border-accent/20 hover:border-accent/40 transition-colors"
      >
        {selectedCategory?.label || "Seleccionar categoría..."}
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </Button>
      
      {open && (
        <div className="absolute top-full mt-1 w-full sm:w-[300px] bg-background border border-border rounded-2xl shadow-lg z-50 animate-in fade-in-0 zoom-in-95">
          <div className="p-1">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  onValueChange(category.value)
                  setOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10 transition-colors duration-200 ${
                  value === category.value ? 'bg-accent/20 text-accent font-medium' : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}