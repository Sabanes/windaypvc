"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function MosquiteirasClientPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/bfvee1pjeukcbtxf1uic"
            alt={t("mosquiteiras.title")}
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
            {t("mosquiteiras.back")}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("mosquiteiras.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">{t("mosquiteiras.description")}</p>
          <div className="mt-8">
            <Link href="/contacto">
              <Button className="bg-[#493F0B] hover:bg-white text-white hover:text-[#493F0B] border border-white hover:border-[#493F0B] px-6 py-2">
                {t("mosquiteiras.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">{t("mosquiteiras.benefits.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("mosquiteiras.benefits.protection.title")}</h3>
              <p className="text-[#493F0B]/80">{t("mosquiteiras.benefits.protection.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("mosquiteiras.benefits.ventilation.title")}</h3>
              <p className="text-[#493F0B]/80">{t("mosquiteiras.benefits.ventilation.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("mosquiteiras.benefits.visibility.title")}</h3>
              <p className="text-[#493F0B]/80">{t("mosquiteiras.benefits.visibility.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">{t("mosquiteiras.categories.title")}</h2>
          <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-12">
            {t("mosquiteiras.categories.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rede Fixa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/g2qdn1upfz93ll8ttbew"
                  alt={t("mosquiteiras.fixed.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("mosquiteiras.fixed.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("mosquiteiras.fixed.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.fixed.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.fixed.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.fixed.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Rede Fixa Móvel */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/lgwisn4lzdqcyixulg9y"
                  alt={t("mosquiteiras.movable.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("mosquiteiras.movable.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("mosquiteiras.movable.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.movable.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.movable.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.movable.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Rede Plissada */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/bfvee1pjeukcbtxf1uic"
                  alt={t("mosquiteiras.pleated.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("mosquiteiras.pleated.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("mosquiteiras.pleated.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.pleated.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.pleated.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("mosquiteiras.pleated.feature3")}</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("mosquiteiras.cta.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">{t("mosquiteiras.cta.description")}</p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              {t("mosquiteiras.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
