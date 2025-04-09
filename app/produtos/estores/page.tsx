import type { Metadata } from "next"
import EstoresClientPage from "./EstoresClientPage"

export const metadata: Metadata = {
  title: "Estores | WINDAYPVC",
  description:
    "Soluções modernas para controle de luz, privacidade e proteção térmica, combinando funcionalidade e design para qualquer ambiente.",
  keywords: [
    "estores",
    "estores térmicos",
    "estores exteriores",
    "estores interiores",
    "controle de luz",
    "proteção térmica",
  ],
  openGraph: {
    title: "Estores | WINDAYPVC",
    description:
      "Soluções modernas para controle de luz, privacidade e proteção térmica, combinando funcionalidade e design para qualquer ambiente.",
    url: "https://windaypvc.pt/produtos/estores",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/estores/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Estores | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function EstoresPage() {
  return <EstoresClientPage />
}
