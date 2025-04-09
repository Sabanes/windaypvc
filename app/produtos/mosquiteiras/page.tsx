import type { Metadata } from "next"
import MosquiteirasClientPage from "./MosquiteirasClientPage"

export const metadata: Metadata = {
  title: "Redes Mosquiteiras | WINDAYPVC",
  description:
    "Proteção eficaz contra insetos sem comprometer a ventilação e a vista exterior, garantindo conforto e bem-estar para sua família.",
  keywords: [
    "redes mosquiteiras",
    "mosquiteiras",
    "proteção contra insetos",
    "telas mosquiteiras",
    "ventilação natural",
    "mosquiteiras plissadas",
  ],
  openGraph: {
    title: "Redes Mosquiteiras | WINDAYPVC",
    description:
      "Proteção eficaz contra insetos sem comprometer a ventilação e a vista exterior, garantindo conforto e bem-estar para sua família.",
    url: "https://windaypvc.pt/produtos/mosquiteiras",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/mosquiteiras/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Redes Mosquiteiras | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function MosquiteirasPage() {
  return <MosquiteirasClientPage />
}
