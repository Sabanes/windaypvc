"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to the top of the page when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "instant" instead of "smooth" for immediate scrolling
    })
  }, [pathname])

  return null // This component doesn't render anything
}
