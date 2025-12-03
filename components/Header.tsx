"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, forwardRef } from "react"
import { usePathname } from "next/navigation"

const Header = forwardRef<HTMLElement>((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Make header sticky after scrolling 50px
      setIsScrolled(window.scrollY > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      ref={ref}
      data-site-header
      className={`bg-white transition-all duration-300 z-50 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 shadow-md' 
          : 'relative shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo.svg"
              alt="Eleven Star Construction"
              className="h-10 md:h-12 w-auto text-gray-900"
              height={48}
              width={160}
              priority
            />
          </Link>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/who-we-are" 
              className={`font-medium transition-colors duration-200 relative group ${
                pathname === '/who-we-are' 
                  ? 'text-brand-green' 
                  : 'text-gray-700 hover:text-brand-green'
              }`}
            >
              Who We Are
              <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-green transition-all duration-300 ${
                pathname === '/who-we-are' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors duration-200 relative group ${
                pathname === '/services' 
                  ? 'text-brand-green' 
                  : 'text-gray-700 hover:text-brand-green'
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-green transition-all duration-300 ${
                pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/projects" 
              className={`font-medium transition-colors duration-200 relative group ${
                pathname === '/projects' 
                  ? 'text-brand-green' 
                  : 'text-gray-700 hover:text-brand-green'
              }`}
            >
              Projects
              <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-green transition-all duration-300 ${
                pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold shadow-sm hover:shadow-md ${
                pathname === '/contact'
                  ? 'bg-brand-green-light text-white'
                  : 'bg-brand-green text-white hover:bg-brand-green-light'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col px-4 py-2">
              <Link
                href="/who-we-are"
                className={`py-3 rounded-lg px-2 transition-colors duration-200 font-medium border-b border-gray-100 ${
                  pathname === '/who-we-are'
                    ? 'text-brand-green bg-gray-50'
                    : 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link
                href="/services"
                className={`py-3 rounded-lg px-2 transition-colors duration-200 font-medium border-b border-gray-100 ${
                  pathname === '/services'
                    ? 'text-brand-green bg-gray-50'
                    : 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`py-3 rounded-lg px-2 transition-colors duration-200 font-medium border-b border-gray-100 ${
                  pathname === '/projects'
                    ? 'text-brand-green bg-gray-50'
                    : 'text-gray-700 hover:text-brand-green hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`mt-2 mb-2 py-3 text-center rounded-lg transition-all duration-300 font-semibold shadow-sm ${
                  pathname === '/contact'
                    ? 'bg-brand-green-light text-white'
                    : 'bg-brand-green text-white hover:bg-brand-green-light'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
})

Header.displayName = "Header"

export default Header
