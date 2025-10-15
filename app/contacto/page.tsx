"use client"

import Image from "next/image"
import TallyEmbedSection from "@/components/tally-embed-section"
import { Phone, Mail, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-[#d3d3d3] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Contacte-nos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto max-w-7xl relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t("contact.title")}</h1>
          <p className="text-white/90 text-xl max-w-2xl">{t("contact.description")}</p>
        </div>
      </section>

      {/* <TallyEmbedSection /> */}

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#493F0B] mb-6">{t("contact.info.title")}</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-[#493F0B] bg-[#d3d3d3] p-2 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#493F0B]">{t("contact.phone")}</h3>
                    <p className="text-[#493F0B]/80">
                        <a href="tel:+351932825464" className="hover:underline">
                          +351 932-825-464 
                        </a>
                        <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#493F0B] bg-[#d3d3d3] p-2 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#493F0B]">{t("contact.email")}</h3>
                    <p className="text-[#493F0B]/80">
                      <a href="mailto:geral@windaypvc.pt" className="hover:underline">
                        geral@windaypvc.pt
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#d3d3d3]/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#493F0B] mb-6">{t("contact.social.title")}</h2>

              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61561480102114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-[#493F0B]/5 transition-colors"
                >
                  <div className="text-[#493F0B] bg-[#d3d3d3] p-2 rounded-full">
                    <Facebook size={20} />
                  </div>
                  <span className="text-[#493F0B]">Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/winday.pt1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-[#493F0B]/5 transition-colors"
                >
                  <div className="text-[#493F0B] bg-[#d3d3d3] p-2 rounded-full">
                    <Instagram size={20} />
                  </div>
                  <span className="text-[#493F0B]">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
