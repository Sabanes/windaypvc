import type { Metadata } from "next"
import GuardasClientPage from "./GuardasClientPage"

export const metadata: Metadata = {
  title: "Guardas e Guarda-Corpo | WINDAYPVC",
  description:
    "Soluções elegantes e seguras para proteção de varandas e escadas, combinando segurança, estética e durabilidade para seu espaço.",
  keywords: [
    "guardas",
    "guarda-corpo",
    "proteção para varandas",
    "juliet balcony",
    "view crystal",
    "AC10",
    "segurança em varandas",
  ],
  openGraph: {
    title: "Guardas e Guarda-Corpo | WINDAYPVC",
    description:
      "Soluções elegantes e seguras para proteção de varandas e escadas, combinando segurança, estética e durabilidade para seu espaço.",
    url: "https://windaypvc.pt/produtos/guardas",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/guardas/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Guardas e Guarda-Corpo | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function GuardasPage() {
  return <GuardasClientPage />
}
