"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, X, ZoomIn } from "lucide-react"
import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { useLanguage } from "@/contexts/language-context"


type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export default function GalleryPage() {
    const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    // Fetch gallery images from Sanity
    client.fetch<GalleryImage[]>(groq`
      *[_type == "galleryImage"]{
        _id,
        "id": _id,
        "src": image.asset->url,
        alt,
        category,
        title,
        description
      }
    `).then((data) => {
      setGalleryImages(data)
    })
  }, [])

  const filteredImages: GalleryImage[] = galleryImages

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/sgpymxzvpqzmjo7t2x5n"
            alt="Gallery"
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
            {t("gallery.hero.back")}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("gallery.hero.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            {t("gallery.hero.description")}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image: GalleryImage) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#493F0B]/60 text-lg">{t("gallery.empty")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-[#d3d3d3]/30 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">500+</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.projects")}</div>
            </div>
            <div className="bg-[#d3d3d3]/30 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">15+</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.years")}</div>
            </div>
            <div className="bg-[#d3d3d3]/30 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">100%</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.satisfaction")}</div>
            </div>
            <div className="bg-[#d3d3d3]/30 p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#493F0B] mb-2">24/7</div>
              <div className="text-[#493F0B]/80">{t("gallery.stats.support")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200 text-[#493F0B]">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("gallery.cta.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto mb-8">
            {t("gallery.cta.description")}
          </p>
          <Link href="/contacto">
            <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90 px-8 py-6 text-lg">
              {t("gallery.cta.button")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}