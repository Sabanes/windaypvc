"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

const TallyEmbedSection = () => {
  const { t } = useLanguage()

  useEffect(() => {
    const scriptUrl = "https://tally.so/widgets/embed.js"
    const scriptExists = document.querySelector(`script[src="${scriptUrl}"]`)

    if (!scriptExists) {
      const script = document.createElement("script")
      script.src = scriptUrl
      script.onload = () => {
        if (typeof window !== "undefined" && window.Tally) {
          window.Tally.loadEmbeds()
        }
      }
      script.onerror = () => {
        console.error("Failed to load Tally script.")
      }
      document.body.appendChild(script)
    } else if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds()
    }
  }, [])

  return (
    <section id="Contacto" className="py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#493F0B] mb-4">{t("contact.form.title")}</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto">{t("contact.form.description")}</p>
        </div>
        <div className="bg-[#443b0c] p-6 rounded-lg max-w-4xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/w5eP5Q?alignLeft=1&hideTitle=0&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="461"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Fale Conosco"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default TallyEmbedSection
