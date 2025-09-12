import he from '@/locales/he.json'
import en from '@/locales/en.json'

export type Language = 'he' | 'en'

const translations = { he, en }

export function t(key: string, lang: Language = 'he'): string {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

export function getDirection(lang: Language): 'rtl' | 'ltr' {
  return lang === 'he' ? 'rtl' : 'ltr'
}
