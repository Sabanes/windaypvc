import type { Metadata } from "next"
import PortadasClientPage from "./PortadasClientPage"

export const metadata: Metadata = {
  title: "Portadas | WINDAYPVC",
  description:
    "Soluções elegantes que oferecem segurança adicional e controle de luminosidade, valorizando a estética da sua fachada enquanto protegem seu interior.",
  keywords: [
    "portadas",
    "portadas pvc",
    "portadas alumínio",
    "segurança residencial",
    "controle de luminosidade",
    "fachada residencial",
  ],
  openGraph: {
    title: "Portadas | WINDAYPVC",
    description:
      "Soluções elegantes que oferecem segurança adicional e controle de luminosidade, valorizando a estética da sua fachada enquanto protegem seu interior.",
    url: "https://windaypvc.pt/produtos/portadas",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/portadas/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portadas | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function PortadasPage() {
  return <PortadasClientPage />
}
