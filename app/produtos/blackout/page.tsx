import type { Metadata } from "next"
import BlackoutClientPage from "./BlackoutClientPage"

export const metadata: Metadata = {
  title: "Blackout | WINDAYPVC",
  description:
    "Soluções de blackout que proporcionam controle total de luminosidade, privacidade absoluta e eficiência energética para seu ambiente.",
  keywords: [
    "blackout",
    "blackout normal",
    "blackout plissado",
    "controle de luz",
    "privacidade",
    "eficiência energética",
  ],
  openGraph: {
    title: "Blackout | WINDAYPVC",
    description:
      "Soluções de blackout que proporcionam controle total de luminosidade, privacidade absoluta e eficiência energética para seu ambiente.",
    url: "https://windaypvc.pt/produtos/blackout",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/produtos/blackout/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Blackout | WINDAYPVC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
}

export default function BlackoutPage() {
  return <BlackoutClientPage />
}
