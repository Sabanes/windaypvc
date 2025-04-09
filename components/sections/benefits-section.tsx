"use client"

import { Lightbulb, Palette, Shield, Clock, Settings } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function BenefitsSection() {
  const { t } = useLanguage()

  return (
    <section id="vantagens" className="py-20 bg-[#e5e5e5]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">{t("benefits.title").split(" ")[0]} </span>
            <span className="text-[#493F0B]">{t("benefits.title").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto">{t("benefits.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("benefits.energy")}</h3>
                <p className="text-gray-700">{t("benefits.energy.desc")}</p>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Palette size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("benefits.design")}</h3>
                <p className="text-gray-700">{t("benefits.design.desc")}</p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("benefits.security")}</h3>
                <p className="text-gray-700">{t("benefits.security.desc")}</p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("benefits.durability")}</h3>
                <p className="text-gray-700">{t("benefits.durability.desc")}</p>
              </div>
            </div>
          </div>

          {/* Benefit 5 - Full width on mobile, centered on desktop */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-2 md:max-w-2xl md:mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-[#493F0B] bg-[#e5e5e5] p-2 rounded-full">
                <Settings size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#493F0B] mb-2">{t("benefits.approach")}</h3>
                <p className="text-gray-700">{t("benefits.approach.desc")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/contacto">
            <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white px-6 py-3">{t("benefits.cta")}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
