import type { Metadata } from 'next'
import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { QuoteSection } from "@/components/sections/quote-section"
import { ScrollHandler } from "@/components/sceoll-handler" // We'll create this
import WindowSection from '@/components/sections/window'

// Export metadata for the home page
export const metadata: Metadata = {
  title: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
  description: "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
  openGraph: {
    title: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
    description: "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
    url: "https://windaypvc.pt",
    siteName: "Windaypvc",
    images: [
      {
        url: "https://windaypvc.pt/winday.jpg",
        width: 1200,
        height: 630,
        alt: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
    description: "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
    images: ["https://windaypvc.pt/winday.jpg"],
    creator: "@windaypvc",
  },
  alternates: {
    canonical: "https://windaypvc.pt",
  },
}

export default function Home() {
  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      <ScrollHandler />
      <HeroSection />
      <ProductsSection />
      <WindowSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <QuoteSection />
    </div>
  )
}