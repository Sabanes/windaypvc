"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, View } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useCallback, useEffect, useRef, useState } from "react"
import type { MouseEvent, MutableRefObject } from "react"
import ArViewModal from "./modal"
import EnhancedPVCSection from "./cards"

// First, let's update the ModelCard component
function ModelCard({ 
  title, 
  image, 
  description, 
  technicalDetails, 
  id 
}: {
  title: string
  image: string
  description: string
  technicalDetails: string
  id: string
}) {
  const { t } = useLanguage()
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsDetailsOpen(prevState => !prevState);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | Event) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node) && isDetailsOpen) {
        setIsDetailsOpen(false);
      }
    }
    
    if (isDetailsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDetailsOpen]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
      data-card-id={id} // Add data attribute for debugging
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-t-lg"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-[#493F0B] mb-2">{title}</h3>
          <p className="text-[#493F0B]/80 mb-4">{description}</p>
        </div>
        <Button
          onClick={toggleDetails}
          className="w-full mt-2 bg-[#493F0B] hover:bg-[#493F0B]/90 text-white"
        >
          {isDetailsOpen ? t("pvc.models.hide.details") : t("pvc.models.show.details")}
        </Button>
        {isDetailsOpen && (
          <div className="whitespace-pre-wrap text-sm text-[#493F0B]/90 mt-4 bg-[#f1f1f1] p-4 rounded-md border border-[#493F0B]/20">
            {technicalDetails}
          </div>
        )}
      </div>
    </div>
  )
}
export default function PVCClientPage() {
  const { t } = useLanguage()
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (id: string) => setActiveModal(id)
  const closeModal = () => setActiveModal(null)

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/bdp39ygwgelrxs2b8lwm"
            alt="Janelas e Portas em PVC"
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
            {t("pvc.back")}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("pvc.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">{t("pvc.description")}</p>
          <div className="mt-8">
            <Link href="/contacto">
              <Button className="bg-[#493F0B] hover:bg-white text-white hover:text-[#493F0B] border border-white hover:border-[#493F0B] px-6 py-2">
                {t("pvc.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">{t("pvc.benefits.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("pvc.benefits.insulation")}</h3>
              <p className="text-[#493F0B]/80">{t("pvc.benefits.insulation.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("pvc.benefits.durability")}</h3>
              <p className="text-[#493F0B]/80">{t("pvc.benefits.durability.desc")}</p>
            </div>

            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <div className="bg-[#493F0B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("pvc.benefits.sustainability")}</h3>
              <p className="text-[#493F0B]/80">{t("pvc.benefits.sustainability.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[#d3d3d3]/50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#493F0B] mb-4">{t("pvc.video.title")}</h2>
            <p className="text-[#493F0B]/80 max-w-2xl mx-auto">{t("pvc.video.description")}</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tyro2m9wbl0"
                title="Calidad CORTIZO PVC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>



    <EnhancedPVCSection openModal={openModal} />

    {/* Models Overview Section */}
        <section id="models" className="py-16 bg-[#f3f3f3]">
              <div className="container mx-auto max-w-7xl px-6">
                <h2 className="text-3xl font-bold text-[#493F0B] mb-12 text-center">{t("pvc.models.title")}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Use an array to map over instead of manually placing components */}
                  {[
                    {
                      id: "a70-model",
                      title: t("pvc.models.a70.title"),
                      image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/gt6bprxdoaadcjadfonh",
                      description: t("pvc.models.a70.description"),
                      technicalDetails: t("pvc.models.a70.details")
                    },
                    {
                      id: "c70-model",
                      title: t("pvc.models.c70.title"),
                      image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/gsjiz9rvlilfz1tw9g1s",
                      description: t("pvc.models.c70.description"),
                      technicalDetails: t("pvc.models.c70.details")
                    },
                    {
                      id: "e170-model",
                      title: t("pvc.models.e170.title"),
                      image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/tfpz2lfqt81ushrgdllk",
                      description: t("pvc.models.e170.description"),
                      technicalDetails: t("pvc.models.e170.details")
                    }
                  ].map((model) => (
                    <div key={model.id} className="card-wrapper">
                      <ModelCard
                        id={model.id}
                        title={model.title}
                        image={model.image}
                        description={model.description}
                        technicalDetails={model.technicalDetails}
                      />
                    </div>
                  ))}
                </div>
              </div>
        </section>  
      )

      {/* CLASSE+ Certification Section */}
      <section className="py-16 bg-[#493F0B]/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/w3vuoxbsply4va6k7vzb"
                alt="Certificação CLASSE+"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#493F0B] mb-6">{t("pvc.certification.title")}</h2>
              <p className="text-lg mb-6 leading-relaxed text-[#493F0B]/80">{t("pvc.certification.description")}</p>

              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("pvc.windows.title")}</h3>
                  <p className="text-[#493F0B]/80">{t("pvc.windows.description")}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#493F0B] mb-3">{t("pvc.doors.title")}</h3>
                  <p className="text-[#493F0B]/80">{t("pvc.doors.description")}</p>
                </div>
              </div>

              <Link href="/contacto" className="mt-8 inline-block">
                <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white mt-6">{t("pvc.cta")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("pvc.cta.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">{t("pvc.cta.description")}</p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              {t("pvc.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
      {activeModal === 'a70' && (
        <ArViewModal
          isOpen
          onClose={closeModal}
          productName="A70"
          usdz="/3d/a70.usdz"
          glb="/3d/a70.glb"
        />
      )}
    </div>
  )
}


