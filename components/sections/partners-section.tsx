"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function PartnersSection() {
  const { t } = useLanguage()

  return (
    <section id="parceiros" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#493F0B] mb-4">{t("partners.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto">{t("partners.description")}</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24">
          <div className="w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 relative">
            <Image
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/jhafili7as42nd7wka5j"
              alt="Parceiro 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 relative">
            <Image
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/iypvt1sujt0rnhbmqb7s"
              alt="Parceiro 2"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 relative">
            <Image
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/xyxzrfb28zmimc60r1wp"
              alt="Parceiro 3"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
