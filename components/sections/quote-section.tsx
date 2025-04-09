"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function QuoteSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#e5e5e5] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#493F0B] mb-8">"{t("quote.text")}"</h2>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base md:text-lg text-[#493F0B]/80 italic">{t("quote.author")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
