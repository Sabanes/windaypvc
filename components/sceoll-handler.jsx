// components/scroll-handler.jsx
"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export function ScrollHandler() {
  const searchParams = useSearchParams()

  // Handle scrolling to sections when navigating from other pages
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # character
      const sectionId = hash.substring(1)
      // Wait a bit for the page to fully render
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          // Get the element's position and scroll to it
          const rect = element.getBoundingClientRect()
          const offset = 80
          const absoluteTop = rect.top + window.pageYOffset - offset
          window.scrollTo({
            top: absoluteTop,
            behavior: "smooth",
          })
        }
      }, 300)
    }
  }, [searchParams])

  // This component doesn't render anything visible
  return null
}