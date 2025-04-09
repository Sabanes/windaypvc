"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/dwoz3mtpwimmlxdqpd5z"
          alt="Modern apartment with large windows"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto max-w-7xl relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Add logo here */}


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t("home.hero.title")} <span className="text-[#d3d3d3]">{t("home.hero.subtitle")}</span>
            </h1>

            <p className="text-white/90 text-lg max-w-xl">{t("home.hero.description")}</p>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto">
                  <Button className="bg-[#493F0B] hover:bg-[#493F0B]/90 text-white px-8 py-6 rounded-md text-lg">
                    {t("home.hero.cta.quote")}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-[#d3d3d3] bg-[#d3d3d3] text-[#493F0B] hover:bg-[#d3d3d3]/90 hover:border-[#d3d3d3]/90 px-8 py-6 rounded-md text-lg"
                  onClick={() => {
                    const productsSection = document.getElementById("produtos")
                    if (productsSection) {
                      const offset = 100 // Offset to account for fixed navbar
                      const bodyRect = document.body.getBoundingClientRect().top
                      const elementRect = productsSection.getBoundingClientRect().top
                      const elementPosition = elementRect - bodyRect
                      const offsetPosition = elementPosition - offset

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  {t("home.hero.cta.products")}
                </Button>
              </div>
              <p className="text-white/80 text-sm flex items-center">
                <Check className="h-4 w-4 mr-2" /> {t("home.hero.free.quote")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-white font-bold">{t("home.hero.durability")}</h3>
                <p className="text-white/80 text-sm">{t("home.hero.durability.desc")}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-white font-bold">{t("home.hero.insulation")}</h3>
                <p className="text-white/80 text-sm">{t("home.hero.insulation.desc")}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-white font-bold">{t("home.hero.design")}</h3>
                <p className="text-white/80 text-sm">{t("home.hero.design.desc")}</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 h-[450px] w-[350px] rounded-lg overflow-hidden border-8 border-white/20 shadow-2xl transform rotate-3">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/iq3nwvjckjwdgm3hkkrd"
                  alt="Casa moderna com grandes portas de vidro"
                  fill
                  className="object-cover"
                />
                {/* Logo overlay */}
                <div className="absolute bottom-4 right-4 w-[120px] h-[40px]">
                  <Image
                    src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/n1inal9dy8b5nxlxpydr"
                    alt="WINDAYPVC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[350px] w-[300px] rounded-lg overflow-hidden border-8 border-white/20 shadow-2xl transform -rotate-6">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/n0gxp2tojobyzqizyaow"
                  alt="Apartamento com janelas PVC"
                  fill
                  className="object-cover"
                />
                {/* Logo overlay */}
                <div className="absolute bottom-4 right-4 w-[120px] h-[40px]">
                  <Image
                    src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/n1inal9dy8b5nxlxpydr"
                    alt="WINDAYPVC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#d3d3d3"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
