"use client"
import pt from "./locales/pt.json"
import en from "./locales/en.json"
import uk from "./locales/ukr.json"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"

// Define available languages
export type Language = "pt" | "en" | "uk"

// Define the context type
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: (key: string) => key,
})

// Define props for the provider
interface LanguageProviderProps {
  children: ReactNode
}

// Translations object
const translations: Record<Language, Record<string, string>> = {
  pt,
  en,
  uk,
}

// Create a provider component
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // State to hold the current language
  const [language, setLanguage] = useState<Language>("pt")
  const pathname = usePathname()

  // Function to handle language changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("NEXT_LOCALE", lang)
  }

  // Translation function
  const t = (key: string) => {
    return translations[language][key] || key
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem("NEXT_LOCALE") as Language | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    } else {
      // Get browser language
      const browserLanguage = navigator.language.split("-")[0] as Language
      if (browserLanguage === "en" || browserLanguage === "pt" || browserLanguage === "uk") {
        setLanguage(browserLanguage)
        localStorage.setItem("NEXT_LOCALE", browserLanguage)
      }
    }
  }, [])

  // Provide the context value
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// Create a hook to use the context
export const useLanguage = () => useContext(LanguageContext)
