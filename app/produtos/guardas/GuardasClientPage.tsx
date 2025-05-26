"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, Shield, Eye, Ruler } from "lucide-react"
import AC1015A from "./AC10-15A.webp"
import AC1015B from "./AC10-15B.webp"
import AC1015C from "./AC10-15C.webp"
import AC1018 from "./AC10-18.webp"
import AC1018A from "./AC10-18A.webp"
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
          <div className="mt-8">
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

          {/* First Featured Product - Juliet Balcony (Image Left, Text Right) */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/sgpymxzvpqzmjo7t2x5n"
                  alt={t("guardas.types.juliet.title")}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#493F0B] mb-4">{t("guardas.types.juliet.title")}</h3>
                <p className="text-[#493F0B]/80 mb-6 text-lg">{t("guardas.types.juliet.desc")}</p>
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
                    {t("guardas.more.info")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Second Featured Product - View Crystal (Image Right, Text Left) */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-[#493F0B] mb-4">{t("guardas.types.crystal.title")}</h3>
                <p className="text-[#493F0B]/80 mb-6 text-lg">{t("guardas.types.crystal.desc")}</p>
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
                    {t("guardas.more.info")}
                  </Button>
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/owqbybpzmgpsigy1kra6"
                  alt={t("guardas.types.crystal.title")}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AC10 - 15/C */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src={AC1015C} alt="AC10 - 15/C" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">AC10 - 15/C</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_15c.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15c.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15c.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15c.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("guardas.more.info")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 15/B */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src={AC1015B} alt="AC10 - 15/B" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">AC10 - 15/B</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_15b.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15b.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15b.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15b.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("guardas.more.info")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 15/A */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src={AC1015A} alt="AC10 - 15/A" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">AC10 - 15/A</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_15a.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15a.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15a.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_15a.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("guardas.more.info")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 18 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src={AC1018} alt="AC10 - 18" fill className="object-fill" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">AC10 - 18</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_18.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_18.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_18.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_18.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("guardas.more.info")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* AC10 - 18/A */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src={AC1018A} alt="AC10 - 18/A" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#493F0B] mb-3">AC10 - 18/A</h3>
                <p className="text-[#493F0B]/80 mb-4">{t("guardas.types.ac10_18a.desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_18a.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_18a.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5" />
                    <span className="text-[#493F0B]/80">{t("guardas.types.ac10_18a.feature3")}</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
                    {t("guardas.more.info")}
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