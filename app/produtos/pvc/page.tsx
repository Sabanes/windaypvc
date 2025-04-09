import type { Metadata } from "next"
import PVCClientPage from "./PVCClientPage"

export const metadata: Metadata = {
  title: "Janelas e Portas em PVC | WINDAYPVC",
  description:
    "Soluções de alta qualidade em janelas e portas PVC que combinam isolamento térmico e acústico superior com design moderno e durabilidade excepcional.",
  keywords: [
    "janelas pvc",
    "portas pvc",
    "isolamento térmico",
    "isolamento acústico",
    "eficiência energética",
    "janelas cortizo",
  ],
  openGraph: {
    title: "Janelas e Portas em PVC | WINDAYPVC",
    description:
      "Soluções de alta qualidade em janelas e portas PVC que combinam isolamento térmico e acústico superior com design moderno e durabilidade excepcional.",
    url: "https://windaypvc.pt/produtos/pvc",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/pvc/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Janelas e Portas em PVC | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function PVCPage() {
  return <PVCClientPage />
}
