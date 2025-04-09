"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { QuoteSection } from "@/components/sections/quote-section"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()

  // Handle scrolling to sections when navigating from other pages
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # character
      const sectionId = hash.substring(1)

      // Wait a bit for the page to fully render
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          // Get the element's position and scroll to it
          const rect = element.getBoundingClientRect()
          const offset = 80
          const absoluteTop = rect.top + window.pageYOffset - offset

          window.scrollTo({
            top: absoluteTop,
            behavior: "smooth",
          })
        }
      }, 300)
    }
  }, [searchParams])

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      <HeroSection />
      <ProductsSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <QuoteSection />
    </div>
  )
}
