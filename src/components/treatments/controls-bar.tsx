import { Search, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/providers/language-provider"
import type { TreatmentGroup } from "@/data/treatments"

interface ControlsBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  viewMode: 'cards' | 'list'
  onViewModeChange: (mode: 'cards' | 'list') => void
  treatmentGroups: TreatmentGroup[]
}

export function ControlsBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  treatmentGroups
}: ControlsBarProps) {
  const { language, t } = useLanguage()
  
  const categories = [
    { id: 'todos', name: language === 'es' ? 'Todos' : 'All' },
    ...treatmentGroups.map(group => ({
      id: group.id,
      name: t(group.titleKey) || group.titleKey.replace('home.treatmentGroups.', '').replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
    }))
  ]

  return (
    <div className="bg-card border border-border/60 rounded-2xl p-6 mb-8">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={language === 'es' ? "Buscar tratamientos..." : "Search treatments..."}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12 text-base border-border/60 focus:border-accent"
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">{language === 'es' ? 'Categorías' : 'Categories'}</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className="h-9"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* View mode toggle */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {language === 'es' ? 'Vista' : 'View'}
        </p>
        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
          <Button
            variant={viewMode === 'cards' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('cards')}
            className="h-8 px-3"
          >
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">{language === 'es' ? 'Tarjetas' : 'Cards'}</span>
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('list')}
            className="h-8 px-3"
          >
            <List className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">{language === 'es' ? 'Lista' : 'List'}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}