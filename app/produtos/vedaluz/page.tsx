import type { Metadata } from "next"
import VedaluzClientPage from "./VedaluzClientPage"

export const metadata: Metadata = {
  title: "Sistemas Vedaluz | WINDAYPVC",
  description:
    "Sistemas avançados de vedação que garantem o máximo de eficiência energética e conforto para sua casa ou escritório, com tecnologia de ponta para isolamento superior.",
  keywords: [
    "vedaluz",
    "sistemas de vedação",
    "isolamento térmico",
    "isolamento acústico",
    "eficiência energética",
    "conforto térmico",
  ],
  openGraph: {
    title: "Sistemas Vedaluz | WINDAYPVC",
    description:
      "Sistemas avançados de vedação que garantem o máximo de eficiência energética e conforto para sua casa ou escritório, com tecnologia de ponta para isolamento superior.",
    url: "https://windaypvc.pt/produtos/vedaluz",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/vedaluz/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sistemas Vedaluz | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function VedaluzPage() {
  return <VedaluzClientPage />
}
