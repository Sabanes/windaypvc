"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, Shield, Eye, Ruler } from "lucide-react"
import juliet from "./juliet.png"
import crystal from "./view-crystal.webp"
import AC1015A from "./AC10-15A.png-DE-768.webp"
import AC1015B from "./ac10-15b-1-768x389.webp"
import AC1015C from "./ac10-15C-DET-768x338.webp"
import AC18 from "./ac18-768x458.webp"
import AC18A from "./ac18a-1-768x326.webp"
import { useLanguage } from "@/contexts/language-context"

export default function GuardasClientPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/sgpymxzvpqzmjo7t2x5n"
            alt={t("guardas.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto max-w-7xl relative z-10 px-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-white/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("guardas.back")}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("guardas.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">{t("guardas.description")}</p>
          <div className="mt-8 flex gap-4">
            <Link href="/contacto">
              <Button className="bg-[#493F0B] hover:bg-white text-white hover:text-[#493F0B] border border-white hover:border-[#493F0B] px-6 py-2">
                {t("guardas.cta")}
              </Button>
            </Link>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">{t("guardas.benefits.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.benefits.safety.title")}</h3>
              <p className="text-[#493F0B]/80">{t("guardas.benefits.safety.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.benefits.aesthetics.title")}</h3>
              <p className="text-[#493F0B]/80">{t("guardas.benefits.aesthetics.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Ruler className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.benefits.customization.title")}</h3>
              <p className="text-[#493F0B]/80">{t("guardas.benefits.customization.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
    <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">{t("guardas.types.title")}</h2>
          <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-16">{t("guardas.types.description")}</p>

          {/* First Featured Product - Juliet Balcony */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://smartwin.pt/wp-content/uploads/2024/06/2522.superpuesta2-1024x602.jpg"
                  alt="Juliet Balcony"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#493F0B] mb-4">{t("guardas.types.juliet.title")}</h3>
                <p className="text-[#493F0B]/80 mb-6 text-lg">
                  {t("guardas.types.juliet.desc")}
                </p>

                {/* Technical Specifications - always visible */}
                <div className="bg-[#d3d3d3]/20 rounded-lg p-4 mb-6">
                  <div className="font-semibold text-[#493F0B] mb-4">
                    {t("guardas.specifications.technical")}
                  </div>
                  <div className="mt-4 space-y-4">
                      {/* Technical Specifications */}
                      <div className="space-y-2 text-sm text-[#493F0B]/80">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p><strong>{t("guardas.specifications.glazing_capacity")}:</strong></p>
                            <p className="ml-2">{t("guardas.specifications.double_glass")}</p>
                          </div>
                          <div>
                            <p><strong>{t("guardas.specifications.max_dimensions")}:</strong></p>
                            <p className="ml-2">H: 1200 mm / W: 1800 mm</p>
                          </div>
                        </div>
                        <p><strong>{t("guardas.specifications.finishes")}:</strong> {t("guardas.specifications.lacquered_anodized")}</p>
                        <p><strong>{t("guardas.specifications.recommendation")}:</strong> {t("guardas.specifications.tempered_recommendation")}</p>
                      </div>
                      
                      {/* Technical Drawing Section */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-[#493F0B] mb-3 flex items-center">
                          
                        </h4>
                        <div className="bg-white border-2 border-dashed border-[#493F0B]/20 rounded-lg p-4">
                          <div className="relative h-48 bg-gray-50 rounded">
                            <Image 
                              src={juliet} 
                              alt="Juliet Balcony Technical Drawing"
                              fill
                              className="object-contain p-2"
                      
                            />
                            <div className="absolute inset-0 hidden items-center justify-center text-[#493F0B]/60 text-sm bg-gray-50 rounded">
                              <div className="text-center">
                                
                              </div>
                            </div>
                          </div>  
                        </div>
                        
                      </div>
                    </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-3 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.juliet.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-3 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.juliet.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-3 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.juliet.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white px-6 py-3">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Second Featured Product - View Crystal */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-[#493F0B] mb-4">{t("guardas.types.crystal.title")}</h3>
                <p className="text-[#493F0B]/80 mb-6 text-lg">
                  {t("guardas.types.crystal.desc")}
                </p>

                {/* Technical Specifications - always visible */}
                <div className="bg-[#d3d3d3]/20 rounded-lg p-4 mb-6">
                  <div className="font-semibold text-[#493F0B] mb-4">
                    {t("guardas.specifications.technical")}
                  </div>
                  <div className="mt-4 space-y-4">
                      {/* Technical Specifications */}
                      <div className="space-y-2 text-sm text-[#493F0B]/80">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p><strong>{t("guardas.specifications.glazing_capacity")}:</strong></p>
                            <p className="ml-2">{t("guardas.specifications.double_glass")}</p>
                          </div>
                          <div>
                            <p><strong>{t("guardas.specifications.max_height")}:</strong></p>
                            <p className="ml-2">1100 mm</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p><strong>View Crystal:</strong> {t("guardas.specifications.load_resistance")}</p>
                          <p><strong>View Crystal Plus:</strong> {t("guardas.specifications.reinforced_system")}</p>
                        </div>
                        <p><strong>{t("guardas.specifications.finishes")}:</strong> {t("guardas.specifications.lacquered_anodized")}</p>
                        <p><strong>{t("guardas.specifications.mounting_options")}:</strong> {t("guardas.specifications.on_slab")}</p>
                      </div>
                      
                      {/* Technical Drawing Section */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-[#493F0B] mb-3 flex items-center">
                          
                    
                        </h4>
                        <div className="bg-white border-2 border-dashed border-[#493F0B]/20 rounded-lg p-4">
                          <div className="relative h-48 bg-gray-50 rounded">
                            <Image 
                              src={crystal} 
                              alt="View Crystal Technical Drawing"
                              fill
                              className="object-contain p-2"
                            />
                            <div className="absolute inset-0 hidden items-center justify-center text-[#493F0B]/60 text-sm bg-gray-50 rounded">
                              <div className="text-center">
                                <Ruler className="h-8 w-8 mx-auto mb-2 opacity-50" />
                                {t("guardas.technical_drawing_placeholder")}
                              </div>
                            </div>
                          </div>
                        </div>  
                      </div>
                    </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-3 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.crystal.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-3 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.crystal.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-3 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.crystal.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white px-6 py-3">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://smartwin.pt/wp-content/uploads/2024/06/crystal-view-1024x602.png"
                  alt="View Crystal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Grid Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">{t("guardas.types.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AC10 - 15/A */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="https://smartwin.pt/wp-content/uploads/2024/06/AC10-15A-1024x602.png" alt="AC10 - 15/A" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.types.ac10_15a.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_15a.desc")}</p>
                
                {/* Technical Specifications - always visible */}
                <div className="bg-[#d3d3d3]/20 rounded-lg p-3 mb-4">
                  <div className="font-semibold text-[#493F0B] text-sm mb-3">
                    {t("guardas.specifications.technical")} 
                  </div>
                  <div className="mt-3 space-y-3">
                      {/* Technical Specifications */}
                      <div className="space-y-1 text-xs text-[#493F0B]/80">
                        <p>
                          <strong>{t("guardas.specifications.laminated_glass")}:</strong> 66.1 Laminado / 88.1 Laminado
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.max_dimensions")}:</strong> L 1200 mm A 1000 mm
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.counting_rule")}:</strong> {t("guardas.specifications.pieces_at_union")}
                        </p>
                      </div>
                      
                      {/* Technical Drawing */}
                      <div className="border-t pt-3">
                        <div className="bg-white border border-[#493F0B]/20 rounded p-2">
                          <div className="relative h-32 bg-gray-50 rounded">
                            <Image 
                              src={AC1015A} 
                              alt="AC10-15A Technical Drawing"
                              fill
                              className="object-contain p-1"
                              
                            />
                            <div className="absolute inset-0 hidden items-center justify-center text-[#493F0B]/40 text-xs bg-gray-50 rounded">
                              <Ruler className="h-6 w-6 opacity-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_15a.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_15a.feature2")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 15/B */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="https://smartwin.pt/wp-content/uploads/2024/06/AC10-15B-1024x602.png" alt="AC10 - 15/B" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.types.ac10_15b.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_15b.desc")}</p>
                
                {/* Technical Specifications - always visible */}
                <div className="bg-[#d3d3d3]/20 rounded-lg p-3 mb-4">
                  <div className="font-semibold text-[#493F0B] text-sm mb-3">
                    {t("guardas.specifications.technical")}  
                  </div>
                  <div className="mt-3 space-y-3">
                      {/* Technical Specifications */}
                      <div className="space-y-1 text-xs text-[#493F0B]/80">
                        <p>
                          <strong>{t("guardas.specifications.laminated_glass")}:</strong> 66.1 Laminado / 88.1 Laminado
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.max_dimensions")}:</strong> 1000 mm máximo
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.counting_rule")}:</strong> {t("guardas.specifications.pieces_per_glass")}
                        </p>
                      </div>
                      
                      {/* Technical Drawing */}
                      <div className="border-t pt-3">
                        <div className="bg-white border border-[#493F0B]/20 rounded p-2">
                          <div className="relative h-32 bg-gray-50 rounded">
                            <Image 
                              src={AC1015B} 
                              alt="AC10-15B Technical Drawing"
                              fill
                              className="object-contain p-1"
                              
                            />
                            <div className="absolute inset-0 hidden items-center justify-center text-[#493F0B]/40 text-xs bg-gray-50 rounded">
                              <Ruler className="h-6 w-6 opacity-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_15b.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_15b.feature2")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 15/C */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="https://smartwin.pt/wp-content/uploads/2024/06/AC10-15C-1024x602.png" alt="AC10 - 15/C" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.types.ac10_15c.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_15c.desc")}</p>
                
                {/* Technical Specifications - always visible */}
                <div className="bg-[#d3d3d3]/20 rounded-lg p-3 mb-4">
                  <div className="font-semibold text-[#493F0B] text-sm mb-3">
                    {t("guardas.specifications.technical")} 
                  </div>
                  <div className="mt-3 space-y-3">
                      {/* Technical Specifications */}
                      <div className="space-y-1 text-xs text-[#493F0B]/80">
                        <p>
                          <strong>{t("guardas.specifications.laminated_glass")}:</strong> 66.1 Laminado / 88.1 Laminado
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.max_dimensions")}:</strong> 1000 mm máximo
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.counting_rule")}:</strong> {t("guardas.specifications.pieces_per_glass")}
                        </p>
                      </div>
                      
                      {/* Technical Drawing */}
                      <div className="border-t pt-3">
                        <div className="bg-white border border-[#493F0B]/20 rounded p-2">
                          <div className="relative h-32 bg-gray-50 rounded">
                            <Image 
                              src={AC1015C}
                              alt="AC10-15C Technical Drawing"
                              fill
                              className="object-contain p-1"
                              
                            />
                            <div className="absolute inset-0 hidden items-center justify-center text-[#493F0B]/40 text-xs bg-gray-50 rounded">
                              <Ruler className="h-6 w-6 opacity-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_15c.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_15c.feature2")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 18 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="https://smartwin.pt/wp-content/uploads/2024/06/9-1.png" alt="AC10 - 18" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.types.ac10_18.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_18.desc")}</p>
                
                {/* Technical Specifications - always visible */}
                <div className="bg-[#d3d3d3]/20 rounded-lg p-3 mb-4">
                  <div className="font-semibold text-[#493F0B] text-sm mb-3">
                    {t("guardas.specifications.technical")}  
                  </div>
                  <div className="mt-3 space-y-3">
                      {/* Technical Specifications */}
                      <div className="space-y-1 text-xs text-[#493F0B]/80">
                        <p>
                          <strong>{t("guardas.specifications.laminated_glass")}:</strong> 55.1 Laminado
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.max_dimensions")}:</strong> L 1200 mm A 1000 mm
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.counting_rule")}:</strong> {t("guardas.specifications.pieces_per_glass")}
                        </p>
                      </div>
                      
                      {/* Technical Drawing */}
                      <div className="border-t pt-3">
                        <div className="bg-white border border-[#493F0B]/20 rounded p-2">
                          <div className="relative h-32 bg-gray-50 rounded">
                            <Image 
                              src={AC18}
                              alt="AC10-18 Technical Drawing"
                              fill
                              className="object-contain p-1"
                            />
                            <div className="absolute inset-0 hidden items-center justify-center text-[#493F0B]/40 text-xs bg-gray-50 rounded">
                              <Ruler className="h-6 w-6 opacity-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_18.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_18.feature2")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 18/A */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="https://smartwin.pt/wp-content/uploads/2024/06/7-1.png" alt="AC10 - 18/A" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("guardas.types.ac10_18a.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_18a.desc")}</p>
                
                {/* Technical Specifications - always visible */}
                <div className="bg-[#d3d3d3]/20 rounded-lg p-3 mb-4">
                  <div className="font-semibold text-[#493F0B] text-sm mb-3">
                    {t("guardas.specifications.technical")} 
                  </div>
                  <div className="mt-3 space-y-3">
                      {/* Technical Specifications */}
                      <div className="space-y-1 text-xs text-[#493F0B]/80">
                        <p>
                          <strong>{t("guardas.specifications.laminated_glass")}:</strong> 55.1 Laminado
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.max_dimensions")}:</strong> L 1200 mm A 1000 mm
                        </p>
                        <p>
                          <strong>{t("guardas.specifications.counting_rule")}:</strong> {t("guardas.specifications.pieces_per_glass")}
                        </p>
                      </div>
                      
                      {/* Technical Drawing */}
                      <div className="border-t pt-3">
                        <div className="bg-white border border-[#493F0B]/20 rounded p-2">
                          <div className="relative h-32 bg-gray-50 rounded">
                            <Image 
                              src={AC18A} 
                              alt="AC10-18A Technical Drawing"
                              fill
                              className="object-contain p-1"
                              
                            />
                            <div className="absolute inset-0 hidden items-center justify-center text-[#493F0B]/40 text-xs bg-gray-50 rounded">
                              <Ruler className="h-6 w-6 opacity-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_18a.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80 text-sm">{t("guardas.types.ac10_18a.feature2")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("guardas.cta.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">{t("guardas.cta.description")}</p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              {t("guardas.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}