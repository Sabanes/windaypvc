import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TopBar } from '@/components/sections/top-bar'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://windaypvc.pt"),
  title: {
    default: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
    template: "%s | Windaypvc",
  },
  description: "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
  keywords: [
    "janelas pvc",
    "portas pvc",
    "estores", 
    "mosquiteiras",
    "portadas",
    "vedaluz",
    "janelas eficientes",
    "isolamento térmico",
    "isolamento acústico",
  ],
  authors: [{ name: "Windaypvc" }],
  creator: "Windaypvc",
  publisher: "Windaypvc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://windaypvc.pt", // Changed from "/"
    languages: {
      "pt-PT": "https://windaypvc.pt",
      "en-US": "https://windaypvc.pt/en",
      "uk-UA": "https://windaypvc.pt/uk",
    },
  },
  openGraph: {
    title: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
    description: "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
    url: "https://windaypvc.pt",
    siteName: "Windaypvc",
    images: [
      {
        url: "/winday.jpg", // This will resolve to https://windaypvc.pt/winday.jpg
        width: 1200,
        height: 630,
        alt: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windaypvc - Janelas e Portas PVC de Alta Qualidade",
    description: "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
    images: ["/winday.jpg"], // This will resolve to https://windaypvc.pt/winday.jpg
    creator: "@windaypvc",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/logo192.png"],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="canonical" href="https://windaypvc.pt" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Windaypvc",
              url: "https://windaypvc.pt",
              logo: "https://windaypvc.pt/logo512.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61561480102114",
                "https://www.instagram.com/winday.pt1/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+351-932-825-464",
                contactType: "customer service",
                availableLanguage: ["Portuguese", "English", "Ukrainian"],
              },
              email: "geral@windaypvc.pt",
              description:
                "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
            }),
          }}
        />
      </body>
    </html>
  )
}


import './globals.css'