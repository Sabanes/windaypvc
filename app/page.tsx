import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { QuoteSection } from "@/components/sections/quote-section"

export default function Home() {
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
