import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Grid, List, ArrowRight, ChevronDown, ChevronUp, Sparkles, Zap, Activity, Heart } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/language"
import type { Tratamiento } from "@/lib/types"
import type { TreatmentGroup } from "@/data/treatments"

interface TreatmentsGroupedProps {
  treatments: Tratamiento[]
  treatmentGroups: TreatmentGroup[]
  searchTerm: string
  selectedCategory: string
  viewMode: 'cards' | 'list'
  onViewModeChange: (mode: 'cards' | 'list') => void
}

export function TreatmentsGrouped({ 
  treatments, 
  treatmentGroups,
  searchTerm, 
  selectedCategory, 
  viewMode,
  onViewModeChange 
}: TreatmentsGroupedProps) {
  const { language, t } = useLanguage()
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['inyectables']))

  // Function to get translated content for treatment
  const getTranslatedContent = (treatment: Tratamiento) => {
    const normalizedSlug = treatment.slug.replace(/-/g, '')
    const treatmentTranslations = translations[language]?.home?.treatmentContent?.[normalizedSlug as keyof typeof translations.es.home.treatmentContent]
    
    if (treatmentTranslations) {
      return {
        title: treatmentTranslations.title,
        excerpt: treatmentTranslations.excerpt
      }
    }
    
    return {
      title: treatment.titulo,
      excerpt: treatment.extracto
    }
  }

  // Create a mapping from slug to treatment
  const treatmentBySlug = new Map(treatments.map(t => [t.slug, t]))

  // Filter treatment groups based on search and category
  const filteredGroups = treatmentGroups.map(group => {
    // Filter treatments in this group
    const filteredTreatments = group.items
      .map(item => treatmentBySlug.get(item.slug))
      .filter((treatment): treatment is Tratamiento => {
        if (!treatment) return false
        
        const content = getTranslatedContent(treatment)
        const matchesSearch = !searchTerm || 
          content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchesCategory = selectedCategory === 'todos' || group.id === selectedCategory
        
        return matchesSearch && matchesCategory
      })
    
    return {
      ...group,
      filteredTreatments
    }
  }).filter(group => group.filteredTreatments.length > 0)

  const toggleGroup = (groupId: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId)
    } else {
      newExpanded.add(groupId)
    }
    setExpandedGroups(newExpanded)
  }

  // Get group info with icons and colors
  const getGroupInfo = (groupId: string) => {
    const groupMap: Record<string, { icon: React.ReactNode; color: string; gradient: string }> = {
      inyectables: { 
        icon: <Sparkles className="w-6 h-6" />, 
        color: "text-accent", 
        gradient: "from-accent/5 to-accent/10" 
      },
      aparatologia: { 
        icon: <Zap className="w-6 h-6" />, 
        color: "text-accent", 
        gradient: "from-accent/5 to-accent/10" 
      },
      facial_dermo: { 
        icon: <Heart className="w-6 h-6" />, 
        color: "text-accent", 
        gradient: "from-accent/5 to-accent/10" 
      },
      vascular_metabolico: { 
        icon: <Activity className="w-6 h-6" />, 
        color: "text-accent", 
        gradient: "from-accent/5 to-accent/10" 
      },
      integrativa: { 
        icon: <Sparkles className="w-6 h-6" />, 
        color: "text-accent", 
        gradient: "from-accent/5 to-accent/10" 
      }
    }
    return groupMap[groupId] || { 
      icon: <Sparkles className="w-6 h-6" />, 
      color: "text-accent", 
      gradient: "from-accent/5 to-accent/10" 
    }
  }

  const TreatmentCard = ({ treatment }: { treatment: Tratamiento }) => {
    const content = getTranslatedContent(treatment)
    
    if (viewMode === 'list') {
      return (
        <Card className="group border-accent/40 hover:border-accent/70 hover:shadow-md transition-all duration-300">
          <Link href={`/tratamientos/${treatment.slug}`} className="block">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-accent/10 to-accent/20">
                  <Image 
                    src={treatment.imagenes.hero} 
                    alt={content.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors truncate text-lg">
                    {content.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                    {content.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </div>
            </CardContent>
          </Link>
        </Card>
      )
    }

    return (
      <Card className="group overflow-hidden border-accent/40 hover:border-accent/70 bg-gradient-to-br from-card to-card/80 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        <Link href={`/tratamientos/${treatment.slug}`} className="block h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image 
              src={treatment.imagenes.hero} 
              alt={content.title} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <CardContent className="p-6">
            <h3 className="font-title text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-3">
              {content.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">
              {content.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">
                {language === 'es' ? 'Ver más' : 'Learn more'}
              </Badge>
              <ArrowRight className="w-4 h-4 text-accent transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </CardContent>
        </Link>
      </Card>
    )
  }

  if (filteredGroups.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">{language === 'es' ? 'No se encontraron tratamientos' : 'No treatments found'}</p>
        <Button 
          variant="outline" 
          onClick={() => window.location.reload()}
        >
          {language === 'es' ? 'Limpiar filtros' : 'Clear filters'}
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* View mode toggle - solo si hay resultados */}
      <div className="flex justify-end">
        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
          <Button
            variant={viewMode === 'cards' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('cards')}
            className="h-8 px-3"
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('list')}
            className="h-8 px-3"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Groups */}
      {filteredGroups.map((group) => {
        const isExpanded = expandedGroups.has(group.id)
        const groupInfo = getGroupInfo(group.id)
        
        return (
          <Card key={group.id} id={group.id} className="scroll-mt-32 overflow-hidden border-accent/40 hover:border-accent/60 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader 
              className={`cursor-pointer group transition-all duration-300 hover:bg-accent/5`}
              onClick={() => toggleGroup(group.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-accent/10 ${groupInfo.color} shadow-sm border border-accent/20`}>
                    {groupInfo.icon}
                  </div>
                  <div>
                    <h2 className="font-title text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                      {t(group.titleKey)}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {group.filteredTreatments.length} {language === 'es' ? 'tratamientos' : 'treatments'}
                      </Badge>
                      {group.filteredTreatments.length > 5 && (
                        <Badge variant="secondary" className="text-xs">
                          {language === 'es' ? 'Popular' : 'Popular'}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="shrink-0 hover:bg-accent/10">
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      {language === 'es' ? 'Contraer' : 'Collapse'}
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      {language === 'es' ? 'Expandir' : 'Expand'}
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            
            {isExpanded && (
              <CardContent className="p-6 bg-card/50">
                <div className={
                  viewMode === 'cards' 
                    ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }>
                  {group.filteredTreatments.map((treatment) => (
                    <TreatmentCard key={treatment.slug} treatment={treatment} />
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        )
      })}
    </div>
  )
}