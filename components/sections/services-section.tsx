"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

type ServiceCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  number: string
}

function ServiceCard({ title, description, imageSrc, imageAlt, number }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[#493F0B] text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center">
          {number}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#493F0B] mb-3">{title}</h3>
        <p className="text-[#493F0B]/70">{description}</p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="py-20 bg-[#d3d3d3]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#493F0B] mb-4">{t("services.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <ServiceCard
            title={t("services.measurement")}
            description={t("services.measurement.desc")}
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/u0x72ut1l7tfbbcklqwq"
            imageAlt="Medição e consultoria"
            number="01"
          />

          {/* Service 2 */}
          <ServiceCard
            title={t("services.manufacturing")}
            description={t("services.manufacturing.desc")}
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/dm247tkcpqi8k2ckm9oc"
            imageAlt="Fabricação de Janelas"
            number="02"
          />

          {/* Service 3 */}
          <ServiceCard
            title={t("services.installation")}
            description={t("services.installation.desc")}
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/yfjoln5hdpxmfb9vgtqx"
            imageAlt="Instalação"
            number="03"
          />

          {/* Service 4 */}
          <ServiceCard
            title={t("services.maintenance")}
            description={t("services.maintenance.desc")}
            imageSrc="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/p3rimef7b1rjulwdjgap"
            imageAlt="Manutenção"
            number="04"
          />
        </div>
        <div className="text-center mt-12">
          <Link href="/contacto">
            <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white px-6 py-3">{t("services.cta")}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
