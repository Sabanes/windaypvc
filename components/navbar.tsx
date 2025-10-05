"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { TopBar } from "./sections/top-bar"

export function Navbar() {
  const { t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Product categories for dropdown
  const productCategories = [
    { name: t("product.pvc"), path: "pvc" },
    { name: t("product.estores"), path: "estores" },
    { name: t("product.mosquiteiras"), path: "mosquiteiras" },
    { name: t("product.portadas"), path: "portadas" },
    { name: t("product.vedaluz"), path: "vedaluz" },
    { name: t("product.blackout"), path: "blackout" },
    { name: t("product.guardas"), path: "guardas" },
  ]

  // Navigation items
  const navigationItems = [
    { name: t("nav.home"), sectionId: "hero" },
    { name: t("nav.products"), sectionId: "produtos", hasDropdown: true },
    { name: t("nav.services"), sectionId: "servicos" },
    { name: t("nav.about"), sectionId: "sobre-nos" },

  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add smooth scroll behavior to the document
  useEffect(() => {
    // Set smooth scroll behavior for the entire document
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    setProductsDropdownOpen(false)

    if (!isHomePage) {
      // If not on home page, navigate to home page with the section hash
      router.push(`/#${sectionId}`)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      // Get the element's position relative to the viewport
      const rect = element.getBoundingClientRect()

      // Calculate the absolute position and apply offset
      const offset = 80 // Smaller offset for more accurate positioning
      const absoluteTop = rect.top + window.pageYOffset - offset

      // Scroll to the element
      window.scrollTo({
        top: absoluteTop,
        behavior: "smooth",
      })
    }
  }

  // Navigate to product page
  const navigateToProduct = (productPath: string) => {
    setMobileMenuOpen(false)
    setProductsDropdownOpen(false)
    setMobileProductsDropdownOpen(false)
    router.push(`/produtos/${productPath}`)
  }

  return (
    <>
    
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-[#d3d3d3]/95" : "bg-[#d3d3d3]/90"
      } backdrop-blur-sm border-b border-[#493F0B]/10 transition-all duration-300`}
    >
      <TopBar />
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative">
            <div className="w-[150px] h-[60px] relative mt-2">
              <Image
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/n1inal9dy8b5nxlxpydr"
                alt="WINDAYPVC Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Mobile menu button and language switcher */}
          <div className="flex items-center lg:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="text-[#493F0B] hover:bg-[#493F0B]/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="!h-6 !w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  // Products dropdown with clickable text
                  <div className="relative" ref={dropdownRef}>
                    <div className="flex items-center">
                      {/* Main button that both navigates and shows dropdown */}
                      <button
                        className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors flex items-center"
                        onClick={() => scrollToSection(item.sectionId || "")}
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                      >
                        {item.name}
                        <ChevronDown
                          className="ml-1 h-4 w-4"
                          onClick={(e) => {
                            e.stopPropagation() // Prevent navigation when clicking the arrow
                            setProductsDropdownOpen(!productsDropdownOpen)
                          }}
                        />
                      </button>
                    </div>

                    {/* Desktop dropdown menu */}
                    {productsDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                      >
                        <div className="py-1">
                          {productCategories.map((product) => (
                            <button
                              key={product.path}
                              className="block w-full text-left px-4 py-2 text-sm text-[#493F0B] hover:bg-[#d3d3d3]/20"
                              onClick={() => navigateToProduct(product.path)}
                            >
                              <div className="flex items-center">
                                <ChevronRight className="mr-2 h-4 w-4" />
                                {product.name}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular navigation item
                  <button
                    className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors"
                    onClick={() => scrollToSection(item.sectionId || "")}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}

            {/* Contact link - always navigates to contact page */}
            <Link href="/gallery" className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors">
              {t("product.gallery")}
            </Link>
            <Link href="/blog" className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contacto" className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors">
              {t("nav.contact")}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Contact button */}
            <Link href="/contacto">
              <Button className="bg-[#493F0B] text-white hover:bg-[#493F0B]/90">{t("nav.quote")}</Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#d3d3d3] border-t border-[#493F0B]/10 py-2 px-6 absolute w-full shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    {/* Mobile products dropdown with separate text and dropdown */}
                    <div className="flex items-center justify-between py-2 border-b border-[#493F0B]/10 w-full">
                      {/* Clickable text part */}
                      <button
                        className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors text-left"
                        onClick={() => scrollToSection(item.sectionId || "")}
                      >
                        {item.name}
                      </button>

                      {/* Dropdown toggle */}
                      <button
                        className="text-[#493F0B] hover:text-[#493F0B]/80 p-2 rounded-full hover:bg-[#493F0B]/10 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          setMobileProductsDropdownOpen(!mobileProductsDropdownOpen)
                        }}
                        aria-expanded={mobileProductsDropdownOpen}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${mobileProductsDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Mobile dropdown items */}
                    {mobileProductsDropdownOpen && (
                      <div className="pl-4 mt-2 space-y-3 transition-all duration-200 ease-in-out">
                        {productCategories.map((product) => (
                          <button
                            key={product.path}
                            className="text-[#493F0B]/80 hover:text-[#493F0B] font-medium transition-colors flex items-center py-1 w-full text-left"
                            onClick={() => navigateToProduct(product.path)}
                          >
                            <ChevronRight className="mr-2 h-4 w-4" />
                            {product.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Regular mobile navigation item
                  <button
                    className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors flex items-center py-2 border-b border-[#493F0B]/10 w-full text-left"
                    onClick={() => scrollToSection(item.sectionId || "")}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}

            {/* Mobile Contact link */}
            <Link
              href="/gallery"
              className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors flex items-center py-2 border-b border-[#493F0B]/10 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("product.gallery")}
            </Link>
            <Link
              href="/contacto"
              className="text-[#493F0B] hover:text-[#493F0B]/80 font-medium transition-colors flex items-center py-2 border-b border-[#493F0B]/10 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            {/* CTA Button */}
            <div className="pt-2">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#493F0B] text-white hover:bg-[#493F0B]/90 py-6">{t("nav.quote")}</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  )
}
