'use client';

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { usePathname } from 'next/navigation'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LanguageProvider } from "@/contexts/language-context"
import LoadingScreen from "@/components/Loadingscreen"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')

  return (
    <html lang="pt-PT">
      <head>
        <link rel="canonical" href="https://windaypvc.pt" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção." />
        <meta name="keywords" content="janelas pvc, portas pvc, estores, mosquiteiras, portadas, vedaluz, janelas eficientes, isolamento térmico, isolamento acústico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Windaypvc - Janelas e Portas PVC de Alta Qualidade" />
        <meta property="og:description" content="Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção." />
        <meta property="og:url" content="https://windaypvc.pt" />
        <meta property="og:site_name" content="Windaypvc" />
        <meta property="og:image" content="https://windaypvc.pt/winday.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Windaypvc - Janelas e Portas PVC de Alta Qualidade" />
        <meta name="twitter:description" content="Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção." />
        <meta name="twitter:image" content="https://windaypvc.pt/winday.jpg" />
        <meta name="twitter:creator" content="@windaypvc" />
        
        {/* Icons */}
        <link rel="icon" href="/logo192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/logo512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <title>Windaypvc - Janelas e Portas PVC de Alta Qualidade</title>
      </head>
      <body className={inter.className}>
        <LoadingScreen 
          videoUrl="https://41edpnogvq.ucarecd.net/b63918d0-646e-499d-9212-66164850d19d/"
          minDuration={6000}
        />
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              {!isStudio && <Navbar />}
              <main className="flex-grow mt-24">{children}</main>
              {!isStudio && <Footer />}
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