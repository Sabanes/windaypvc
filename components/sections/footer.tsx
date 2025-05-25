"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#493F0B] text-white">
      {/* Footer Content */}
      <div className="bg-[#493F0B] py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-[180px] h-[60px] relative mb-4">
                <Image
                  src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/cs8ldaysjsae3fbm8zk6"
                  alt="WINDAYPVC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white/70 mt-4">{t("footer.solutions")}</p>

              {/* Contact Information */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-white/70" />
                  <a href="tel:+351932825464" className="text-white/70 hover:text-white transition-colors">
                    +351 932-825-464
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-white/70" />
                  <a href="mailto:geral@windaypvc.pt" className="text-white/70 hover:text-white transition-colors">
                    geral@windaypvc.pt
                  </a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61561480102114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/winday.pt1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">{t("footer.quick.links")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-white/70 hover:text-white transition-colors">
                    {t("nav.home")}
                  </a>
                </li>
                <li>
                  <a href="#sobre-nos" className="text-white/70 hover:text-white transition-colors">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-white/70 hover:text-white transition-colors">
                    {t("nav.services")}
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-white/70 hover:text-white transition-colors">
                    {t("nav.products")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">{t("footer.products")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#pvc" className="text-white/70 hover:text-white transition-colors">
                    {t("product.pvc")}
                  </a>
                </li>
                <li>
                  <a href="#estores" className="text-white/70 hover:text-white transition-colors">
                    {t("product.estores")}
                  </a>
                </li>
                <li>
                  <a href="#mosquiteiras" className="text-white/70 hover:text-white transition-colors">
                    {t("product.mosquiteiras")}
                  </a>
                </li>
                <li>
                  <a href="#portadas" className="text-white/70 hover:text-white transition-colors">
                    {t("product.portadas")}
                  </a>
                </li>
                <li>
                  <a href="#vedaluz" className="text-white/70 hover:text-white transition-colors">
                    {t("product.vedaluz")}
                  </a>
                </li>
                <li>
                  <a href="#blackout" className="text-white/70 hover:text-white transition-colors">
                    {t("product.blackout")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">{t("footer.contact")}</h4>
              <p className="text-white/70 mb-4">{t("footer.contact.desc")}</p>
              <Link href="/contacto">
                <Button className="bg-white text-[#493F0B] hover:bg-white/90">{t("nav.quote")}</Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>
              © {new Date().getFullYear()} WINDAYPVC. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
