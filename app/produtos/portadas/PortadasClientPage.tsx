"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PortadasClientPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/gbnhjcm1fwiwow7ps06q"
            alt={t("portadas.title")}
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
            {t("portadas.back")}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("portadas.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">{t("portadas.description")}</p>
          <div className="mt-8">
            <Link href="/contacto">
              <Button className="bg-[#493F0B] hover:bg-white text-white hover:text-[#493F0B] border border-white hover:border-[#493F0B] px-6 py-2">
                {t("portadas.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">{t("portadas.benefits.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("portadas.benefits.security.title")}</h3>
              <p className="text-[#493F0B]/80">{t("portadas.benefits.security.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("portadas.benefits.light.title")}</h3>
              <p className="text-[#493F0B]/80">{t("portadas.benefits.light.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("portadas.benefits.aesthetic.title")}</h3>
              <p className="text-[#493F0B]/80">{t("portadas.benefits.aesthetic.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/jnmart8u2l922gmh9lbu"
                alt={t("portadas.features.image.alt")}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#493F0B] mb-6">{t("portadas.features.title")}</h2>
              <p className="text-lg mb-8 leading-relaxed text-[#493F0B]/80">{t("portadas.features.description")}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("portadas.features.materials.title")}</h3>
                    <p className="text-[#493F0B]/80">{t("portadas.features.materials.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("portadas.features.locking.title")}</h3>
                    <p className="text-[#493F0B]/80">{t("portadas.features.locking.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">
                      {t("portadas.features.customization.title")}
                    </h3>
                    <p className="text-[#493F0B]/80">{t("portadas.features.customization.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("portadas.features.insulation.title")}</h3>
                    <p className="text-[#493F0B]/80">{t("portadas.features.insulation.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("portadas.cta.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">{t("portadas.cta.description")}</p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              {t("portadas.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
