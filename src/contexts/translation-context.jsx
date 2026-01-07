/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import enTranslations from '../locals/en/translation.json'
import arTranslations from '../locals/arabic/translation.json'

const TranslationContext = createContext()

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const [translations, setTranslations] = useState(enTranslations)

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(savedLanguage)
    setTranslations(savedLanguage === 'ar' ? arTranslations : enTranslations)
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    setTranslations(lang === 'ar' ? arTranslations : enTranslations)
  }

  useEffect(() => {
    // Update HTML lang attribute when language changes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t, translations }}>
      {children}
    </TranslationContext.Provider>
  )
}

