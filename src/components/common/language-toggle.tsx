"use client"

import React from 'react'
import { useLanguage } from '@/components/providers/language-provider'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:border-accent/40 transition-all duration-200 bg-background hover:bg-accent/5"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <div className="flex items-center gap-2">
        {/* Current flag */}
        <div className="relative w-6 h-4 rounded overflow-hidden shadow-sm">
          {language === 'es' ? (
            // Spanish flag when Spanish is selected
            <div className="w-full h-full relative">
              <div className="absolute top-0 w-full h-1/3 bg-red-600"></div>
              <div className="absolute top-1/3 w-full h-1/3 bg-yellow-400"></div>
              <div className="absolute bottom-0 w-full h-1/3 bg-red-600"></div>
            </div>
          ) : (
            // US flag when English is selected
            <div className="w-full h-full relative bg-red-600">
              <div className="absolute top-0 w-full h-1/4 bg-red-600"></div>
              <div className="absolute top-1/4 w-full h-1/4 bg-white"></div>
              <div className="absolute top-2/4 w-full h-1/4 bg-red-600"></div>
              <div className="absolute bottom-0 w-full h-1/4 bg-white"></div>
              <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-blue-800"></div>
            </div>
          )}
        </div>
        
        {/* Arrow */}
        <svg 
          className="w-3 h-3 text-muted-foreground transition-transform duration-200 group-hover:scale-110" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
        
        {/* Next flag preview */}
        <div className="w-5 h-3 rounded overflow-hidden shadow-sm opacity-60">
          {language === 'en' ? (
            // Spanish flag (next)
            <div className="w-full h-full relative">
              <div className="absolute top-0 w-full h-1/3 bg-red-600"></div>
              <div className="absolute top-1/3 w-full h-1/3 bg-yellow-400"></div>
              <div className="absolute bottom-0 w-full h-1/3 bg-red-600"></div>
            </div>
          ) : (
            // US flag (next)
            <div className="w-full h-full relative bg-red-600">
              <div className="absolute top-0 w-full h-1/4 bg-red-600"></div>
              <div className="absolute top-1/4 w-full h-1/4 bg-white"></div>
              <div className="absolute top-2/4 w-full h-1/4 bg-red-600"></div>
              <div className="absolute bottom-0 w-full h-1/4 bg-white"></div>
              <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-blue-800"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Language code */}
      <span className="text-xs font-medium text-muted-foreground uppercase">
        {language === 'es' ? 'es' : 'en'}
      </span>
    </button>
  )
}