"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre-nos" className="py-20 bg-[#493F0B] text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
            <p className="text-lg mb-8 leading-relaxed">{t("about.description")}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>{t("about.experience")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>{t("about.team")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>{t("about.quality")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>{t("about.commitment")}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contacto">
                <Button className="bg-[#d3d3d3] hover:bg-[#d3d3d3]/90 text-[#493F0B] px-8 py-6 rounded-md text-lg">
                  {t("about.cta")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/bfu0quslw322c3gboazm"
              alt="Sala moderna com grandes portas de vidro"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#493F0B]/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
