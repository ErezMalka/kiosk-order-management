'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, t as translate, getDirection } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('he')

  useEffect(() => {
    document.documentElement.dir = getDirection(language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: string) => translate(key, language)
  const dir = getDirection(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
