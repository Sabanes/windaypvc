"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, Shield, Zap, Thermometer, Building2, Building, Microscope } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function VedaluzClientPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/kp7boapk5e7cu4wewirm"
            alt={t("vedaluz.title")}
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
            {t("vedaluz.back")}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("vedaluz.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">{t("vedaluz.description")}</p>
          <div className="mt-8">
            <Link href="/contacto">
              <Button className="bg-[#493F0B] hover:bg-white text-white hover:text-[#493F0B] border border-white hover:border-[#493F0B] px-6 py-2">
                {t("vedaluz.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">{t("vedaluz.benefits.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("vedaluz.benefits.energy.title")}</h3>
              <p className="text-[#493F0B]/80">{t("vedaluz.benefits.energy.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("vedaluz.benefits.acoustic.title")}</h3>
              <p className="text-[#493F0B]/80">{t("vedaluz.benefits.acoustic.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("vedaluz.benefits.sealing.title")}</h3>
              <p className="text-[#493F0B]/80">{t("vedaluz.benefits.sealing.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Types Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">{t("vedaluz.panels.title")}</h2>
          <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-12">{t("vedaluz.panels.description")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Painel Liso */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/fdduw02ddtu9qcrpbemk"
                  alt={t("vedaluz.panels.smooth.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("vedaluz.panels.smooth.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("vedaluz.panels.smooth.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("vedaluz.panels.smooth.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("vedaluz.panels.smooth.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("vedaluz.panels.smooth.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Painel Táboa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/kp7boapk5e7cu4wewirm"
                  alt={t("vedaluz.panels.wood.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("vedaluz.panels.wood.title")}</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("vedaluz.panels.wood.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("vedaluz.panels.wood.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("vedaluz.panels.wood.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("vedaluz.panels.wood.feature3")}</span>
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

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#493F0B] mb-6">{t("vedaluz.technology.title")}</h2>
              <p className="text-lg mb-8 leading-relaxed text-[#493F0B]/80">{t("vedaluz.technology.description")}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("vedaluz.technology.system.title")}</h3>
                    <p className="text-[#493F0B]/80">{t("vedaluz.technology.system.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("vedaluz.technology.seals.title")}</h3>
                    <p className="text-[#493F0B]/80">{t("vedaluz.technology.seals.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("vedaluz.technology.thermal.title")}</h3>
                    <p className="text-[#493F0B]/80">{t("vedaluz.technology.thermal.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#493F0B] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("vedaluz.technology.glass.title")}</h3>
                    <p className="text-[#493F0B]/80">{t("vedaluz.technology.glass.desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/fdduw02ddtu9qcrpbemk"
                alt={t("vedaluz.technology.image.alt")}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">{t("vedaluz.applications.title")}</h2>
          <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-12">
            {t("vedaluz.applications.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#493F0B] w-16 h-16 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3 text-center">
                {t("vedaluz.applications.residential.title")}
              </h3>
              <p className="text-[#493F0B]/80">{t("vedaluz.applications.residential.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#493F0B] w-16 h-16 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3 text-center">
                {t("vedaluz.applications.commercial.title")}
              </h3>
              <p className="text-[#493F0B]/80">{t("vedaluz.applications.commercial.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#493F0B] w-16 h-16 rounded-full flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3 text-center">
                {t("vedaluz.applications.special.title")}
              </h3>
              <p className="text-[#493F0B]/80">{t("vedaluz.applications.special.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("vedaluz.cta.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">{t("vedaluz.cta.description")}</p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              {t("vedaluz.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
